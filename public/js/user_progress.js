var userProgress = Vue.component('userProgress', {
  template: `
      
  `,
  props: ['progress'],
  data() {
    return {
      progressArray: []
    }
  },
  filters: {
    pretty_date: function (value) {
      return moment(parseInt(value) * 1000).fromNow();
    }
  },
  watch: {
    progress(newVal, oldVal) {
      var tmpArray = [];
      for (var key in newVal){
        tmpArray.push({
          timestamp: key,
          wpm: newVal[key].wpm,
          keystrokes: newVal[key].keystrokes,
          accuracy: newVal[key].accuracy,
          wrongWords: newVal[key].wrongWords,
          corectWords: newVal[key].corectWords,
          keystrokesWrong: newVal[key].keystrokesWrong,
          countKeystrokes: newVal[key].countKeystrokes
        });
      }
      this.progressArray = tmpArray.sort(function(a, b) {
        return b.timestamp - a.timestamp
      });
    }
  }
})