var countDownDuration = 6;
//so sanh text
function isCorrect(inputWord, typeWord){
  return inputWord.slice(0,typeWord.length) === typeWord;
}
//end so sanh text
function highLight(wordIndex, isCorrect){
  if(!isCorrect){
    $('#elm' + wordIndex).addClass('backgroundred');
  }else{
    $('#elm' + wordIndex).removeClass('backgroundred');
  }
}
$(document).ready(function(){
  var inputWords = ['ghê','lorem','ipsum','is','lắm','dummy',
  'text','of','the','toàn','and','lái','thsettinge','the','viết','is','lắm','dummy',
  'text','of','the','toàn','and'];

  for(var i = 0; i < inputWords.length; i++){
    $("#text-data").append(`<span id="elm`+i+`" class="sdf">`+ inputWords[i] +`</span>`);
  }
  $("#elm"+0).addClass("mauxam");
  var wordIndex = 0;
  var timer = $("#timer");
  var count = countDownDuration;
  timer.html(count);
  var timerId = 0;
  var typeRight = 0;
  var misTyped = 0;
  function countDown(){
    timerId = setInterval(function(){ 
      count--;
      timer.html(count);
      if(count == 0){
        clearInterval(timerId);
        $("#input-text").prop('disabled', true);
        // tinh ty le phan tram
        var accuracyP = typeRight/(typeRight+misTyped)*100;
        // end tinh ty le phan tram
        $("#wpm").html(typeRight);
        $("#accuracy").html(accuracyP.toFixed(2));
        $("#correctWords").html(typeRight);
        $("#wrongWords").html(misTyped);
        $(".result").addClass("active");
      }
    }, 1000);
  }

  var isCountDown = false;
  $("#input-text").keypress(function(){
    if(isCountDown == false){
      countDown();
      isCountDown = true;
    }
  });
  
  $("#reset-btn").click(function(){
    clearInterval(timerId);
    count = countDownDuration;
    timer.html(count);
    isCountDown = false;
    $("#input-text").val("");
    wordIndex = 0;
    $(".sdf").removeClass("maudo");
    $(".sdf").removeClass("mauxam");
    $("#elm"+wordIndex).addClass("mauxam");
    typeRight = 0;
    misTyped = 0;
    $("#input-text").prop('disabled', false);
    $('.sdf').removeClass('backgroundred');
  });

  // xử lý so sánh text
  //get value input
   $('#input-text').on('input', function(e) {

    var typeWord = $("#input-text").val();
    var isPressSpace = typeWord.indexOf(' ') >= 0;
    var typeWord = typeWord.trim();
    var inputWord = inputWords[wordIndex];
    var isTypingCorrect = isCorrect(inputWord, typeWord);
    highLight(wordIndex, isTypingCorrect);
    //space bar 
    if(isPressSpace){
      $(".sdf").removeClass("mauxam");
      $("#elm" + (wordIndex + 1)).addClass("mauxam");
      $("#input-text").val("");
      if(typeWord === inputWord){
        // check dung
        wordIndex ++;
        typeRight ++;
      }else{
        //check sai
        $("#elm"+wordIndex).addClass("maudo");
        $('#elm' + wordIndex).removeClass('backgroundred');
        wordIndex ++;
        misTyped ++;
      }
    }
  });
  //end get value input
  var provider = new firebase.auth.FacebookAuthProvider();
  $("#login-fb-btn").on('click', function(){
    firebase.auth().signInWithPopup(provider).then(function(result) {
      
      // ...
    }).catch(function(error) {
      // ...
    });
  });
});



















