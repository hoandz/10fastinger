// <div class="ranking-table">
//         <div class="competition">User Progress</div>
//             <table class="table table-rank">
//               <thead>
//                 <tr>
//                   <th>Date</th>
//                   <th><abbr>WPM</abbr></th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr v-for="progress in progressArray">
//                   <th> {{ progress.timestamp | pretty_date }}</th>
//                   <td> {{ progress.wpm }}</td>
//                 </tr>
//               </tbody>
//             </table>
//       </div>
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
      return moment(parseInt(value)).fromNow();
    }
  },
  watch: {
    progress(newVal, oldVal) {
      var tmpArray = [];
      console.log("Hello WOrld", newVal);
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