// <span class="sdf" v-for="(inputWord, index) in inputWords" 
//             :class="{ 'highlight-bg-red': inputWord.isCorrect == true, 'colorRed': inputWord.hasError == true, 'bg-gray': index == wordIndex }" >{{ inputWord.word }}</span>

var typingPanel = Vue.component('typingPanel',{
  template: `
      <div class="typing-panel">
        <div class="selectLanguage" v-show="activeTextData">
          <div class="select">
            <select>
              <option>Tiếng Việt</option>
              <option>EngLish</option>
            </select>
          </div>
          <span>Thay đổi ngôn ngữ gõ</span>
        </div>
        <div class="text-data" id="text-data" scroll="no" v-show="activeTextData">
          <div id="row1" style="top: 1px;">
            
          </div>
        </div>
        <div class="input-check-form">
          <div class="container-input-check-form">
            <input type="text" class="input-row" v-model="message" :disabled="disabled">
            <div class="timer">
              <div class="container-timer">{{ timeCouter }}</div>
            </div>
            <div class="reset-time">
              <img src="img/reset-icon.png" alt="" class="reset" id="reset-btn" v-on:click="resetBtn">
            </div>
          </div>
        </div>
      </div>
  `,
  props: ["timeCounterMax"],
  data(){
    return{
      inputWords: [],
      timeCouter: 0,
      timerId: 0,
      message: "",
      wordIndex: 0,
      isActive: false,
      isCountDown: false,
      correctWords: 0,
      errorWords: 0,
      disabled: false,
      keystrokesWrong: 0,
      keystrokesCorrect: 0,
      activeTextData: true,
      countSpace: 0,
      endWordOfLineIndexes: [],
      countEndWordOfLineIndexes: 0
    }
  },
  computed: {
    accuracy() {
      return this.correctWords / (this.correctWords + this.errorWords) * 100;
    },
    keystrokesWpm() {
      return (this.keystrokesCorrect + this.countSpace) / 5;
    },
    countKeystrokes() {
      return this.keystrokesCorrect + this.keystrokesWrong + this.countSpace;
    }
  },
  watch: {
    message(newVal, oldVal) {
      this.getValue();
    }
  },
  methods: {
    fakeWords() {
      var tmpInputWords = "Trước những áp bức bất công, bạo tàn chị Dậu vẫn mạnh mẽ cáng đáng, lo toan, làm trụ cột cho cả gia đình trước cơn bão tố. Trước hết, chị Dậu hiện với với vẻ đẹp của một người phụ nữ thủy chung, đảm đang mà giàu tình yêu thương, lo lắng cho chồng, cho con. Anh Dậu được thả về sau trận đòn roi khủng khiếp, những tưởng chết đi rồi, chị Dậu lo lắng vô cùng. Được cụ bà hàng xóm thương tình cho bát gạo nấu cháo cho chồng húp tạm, chị nhanh chóng nấu cho cả nhà ăn. Chờ cháo nguội, chị múc cho con một bát rồi mang đến chỗ chồng, dùng lời lẽ thật dịu dàng, ân cần để động viên chồng ăn đỡ lót dạ Thầy em hãy cố ngồi dậy húp hít cháo cho đỡ xót ruột Chị lo lắng nhìn chồng ăn, vừa cố trấn an để chồng ăn ngon miệng vừa để ý xem tụi thu thuế có tới liền hay không. Dù trong lúc gay go nhất chị vẫn muốn dành chút thời gian cho chồng ăn, nán lại xem chồng ăn có ngon miệng hay không, hình ảnh chị Dậu hiện lên thật tình cảm, chu đáo và giàu đức hy sinh. Một người vợ hết mực yêu thương, chăm sóc và lo lắng cho chồng mình.Khi chưa kịp húp hết bát cháo thì bè lũ cai lệ ập tới hòng bắt anh Dậu đi. Chị Dậu lo lắng cho sự an nguy của chồng, nhất là khi đang đau ốm này, chị cố gắng dùng lời lẽ khẩn thiết, van xin để mong chúng thương tình mà tha cho chồng chị. Những lời xót xa cất lên nghe sao mà thảm thiết thê lương đến nghẹn lòng. Đó là những ân tình sâu nặng thể hiện tấm lòng thiết tha của một người vợ dành cho chồng, một tình thân đẹp đẽ và tình yêu thương giữa con người với con người. Điều đó đối lập hoàn toàn với sự bạo ngược".toLowerCase();
      this.inputWords = tmpInputWords.replace(/,|\.|-/g, '').split(' ').map(function(word) {
        return {
          isCorrect: false,
          word: word,
          hasError: false
        }
      });
    },
    ranDomArr(arr){
      var i = 0;
      while (i <= arr.length) {
        arr.push(arr.splice(arr.length * Math.random() | 0, 1)[0]);
        i++;
      }
    },
    testScroll() {
      $("#text-data").animate({ scrollTop: "+=55px"}, 1, 'swing');
    },
    showTextData() {
      $("#row1").html('');
      this.endWordOfLineIndexes = [];
      var para = $("#row1");
      var words = this.inputWords;
      var height = para.outerHeight();
      console.log("height", height);
      this.ranDomArr(words);
      for(var i = 0; i < words.length; i++){
        para.append(`<span id="child-data` + i +`" class="child-data">`+ words[i].word +`</span>`);
        if(para.outerHeight() > height){
          height = para.outerHeight();
          this.endWordOfLineIndexes.push(i-1);
        }
      }
      if(this.endWordOfLineIndexes[0] === -1){
        this.endWordOfLineIndexes.shift();
      }
      console.log("this.endWordOfLineIndexes", this.endWordOfLineIndexes);
      $("#child-data0").addClass("bg-gray");
    },
    countDown() {
      var vm = this;
      this.timerId = setInterval(function(){ 
        vm.timeCouter--;
        if(vm.timeCouter == 0){
          this.message = '';
          clearInterval(vm.timerId);
          this.$emit("on-finish", {
            accuracy: this.accuracy,
            corectWords: this.correctWords,
            wrongWords: this.errorWords,
            keystrokes: this.keystrokesWpm,
            keystrokesCorrect: this.keystrokesCorrect + this.countSpace,
            keystrokesWrong: this.keystrokesWrong,
            countKeystrokes: this.countKeystrokes
          });
          this.disabled = true;
          this.activeTextData = false;
        }
      }.bind(vm), 1000);
    },
    getValue(){
      var typeWord = this.message;
      var inputWord = this.inputWords[this.wordIndex];
      var hasSpace = this.message.indexOf(' ') >= 0;
      typeWord = typeWord.trim();
      if(typeWord != null){
        if(this.isCountDown == false){
          this.countDown();
          this.isCountDown = true;
        }
      }

      if(inputWord.word.slice(0,typeWord.length) === typeWord) {
        inputWord.isCorrect = false;
        $('#child-data' + this.wordIndex).removeClass('highlight-bg-red');
      } else {
        inputWord.isCorrect = true;
        $('#child-data' + this.wordIndex).addClass('highlight-bg-red');
      }
  
      if(hasSpace){
        $(".child-data").removeClass("bg-gray");
        $("#child-data" + (this.wordIndex + 1)).addClass("bg-gray");
        this.message = '';
        if(this.endWordOfLineIndexes[this.countEndWordOfLineIndexes] === this.wordIndex){
          this.testScroll();
          this.countEndWordOfLineIndexes++;
        }
        if(typeWord === inputWord.word){
          var length = new Blob([inputWord.word]).size;
          this.keystrokesCorrect += length;
          this.wordIndex ++;
          this.correctWords++;
          this.countSpace++;
        }else{
          var length = new Blob([inputWord.word]).size;
          this.keystrokesWrong += length;
          $("#child-data"+ this.wordIndex).addClass("colorRed");
          $('#child-data' + this.wordIndex).removeClass('highlight-bg-red');
          this.wordIndex ++;
          inputWord.isCorrect = false;
          inputWord.hasError = true;
          this.errorWords++;
        }
      }
    },
    resetBtn(){
      $("#row1").html('');
      var vm = this;
      clearInterval(this.timerId);
      this.activeTextData = true;
      Vue.nextTick(function () {
        vm.showTextData();
      });

      this.timeCouter = this.timeCounterMax;
      this.wordIndex = 0;
      for(var i = 0; i < this.inputWords.length; i++){
        this.inputWords[i].hasError = false;
        this.inputWords[i].isCorrect = false;
      }
      this.isCountDown = false;
      this.message = '';
      this.disabled = false;
      this.correctWords = 0;
      this.errorWords = 0;
      this.keystrokesWrong = 0;
      this.keystrokesCorrect = 0;
      this.activeTextData = true;
      this.countSpace = 0;
      $("#child-data0").addClass("bg-gray");
      $("#text-data").animate({ scrollTop: "=0px"}, 1, 'swing');
      this.countEndWordOfLineIndexes = 0;
    }
  },
  mounted(){
    this.testScroll();
    this.timeCouter = this.timeCounterMax;
    // this.getValue();
    this.fakeWords();
    this.ranDomArr(this.inputWords);
    this.showTextData();
  }
})











