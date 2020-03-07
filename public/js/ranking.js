// <div class="rank">
//             <div class="index-rank">
//               <div class="wpm-rank">
//                 WPM
//               </div>
//               <div class="username-rank">
//                 Username
//               </div>
//             </div>
//             <!-- rank bat dau tu day -->
//             <div class="index-rank">
//               <div class="wpm-rank">
//                 23
//               </div>
//               <div class="username-rank">
//                 Michael
//               </div>
//               <div class="img-rank">
//                 <img src="img/anhdep.jpg" alt="">
//               </div>
//               <div class="stt-rank">
//                 1
//               </div>
//             </div>
//             <div class="index-rank">
//               <div class="wpm-rank">
//                 23
//               </div>
//               <div class="username-rank">
//                 Michael
//               </div>
//               <div class="img-rank">
//                 <img src="img/anhdep.jpg" alt="">
//               </div>
//               <div class="stt-rank">
//                 2
//               </div>
//             </div>
//             <div class="index-rank">
//               <div class="wpm-rank">
//                 23
//               </div>
//               <div class="username-rank">
//                 Michael
//               </div>
//               <div class="img-rank">
//                 <img src="img/anhdep.jpg" alt="">
//               </div>
//               <div class="stt-rank">
//                 3
//               </div>
//             </div>
//             <div class="index-rank">
//               <div class="wpm-rank">
//                 23
//               </div>
//               <div class="username-rank">
//                 Michael
//               </div>
//               <div class="img-rank">
//                 <img src="img/anhdep.jpg" alt="">
//               </div>
//               <div class="stt-rank">
//                 4
//               </div>
//             </div>
//             <div class="index-rank">
//               <div class="wpm-rank">
//                 23
//               </div>
//               <div class="username-rank">
//                 Michael
//               </div>
//               <div class="img-rank">
//                 <img src="img/anhdep.jpg" alt="">
//               </div>
//               <div class="stt-rank">
//                 5
//               </div>
//             </div>
//           </div>
var rankingPanel = Vue.component('rankingPanel', {
  template: `
      <div class="tile is-8 is-12 rank-24h">
        <div class="select-view-rank">
          <div class="count-top" v-on:click="top20" v-bind:class="{ 'active-count-rank': activeFriends }">
            Top 20
          </div>
          <div class="count-friends" v-on:click="friends" v-bind:class="{ 'active-count-rank': activeCountRank }">
            Bạn bè
          </div>
        </div>
        <div class="main-rank">
          <div class="rank" v-bind:class="{ 'active': activeFriends }">
            <table class="table">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th>Username</th>
                  <th>WPM</th>
                  <th>Keystrokes</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td><img class="avt-user-rank" src="img/anhdep.jpg" alt="" /></td>
                  <td>Manchester United</td>
                  <td>19</td>
                  <td>49</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>2</th>
                  <td><img class="avt-user-rank" src="img/anhdep.jpg" alt="" /></td>
                  <td>Manchester United</td>
                  <td>19</td>
                  <td>49</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>3</th>
                  <td><img class="avt-user-rank" src="img/anhdep.jpg" alt="" /></td>
                  <td>Manchester United</td>
                  <td>19</td>
                  <td>49</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr class="is-selected">
                  <th>4</th>
                  <td><img class="avt-user-rank" src="img/anhdep.jpg" alt="" /></td>
                  <td>Manchester United</td>
                  <td>19</td>
                  <td>9</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>5</th>
                  <td><img class="avt-user-rank" src="img/anhdep.jpg" alt="" /></td>
                  <td>Manchester United</td>
                  <td>19</td>
                  <td>49</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>6</th>
                  <td><img class="avt-user-rank" src="img/anhdep.jpg" alt="" /></td>
                  <td>Manchester United</td>
                  <td>19</td>
                  <td>49</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>7</th>
                  <td><img class="avt-user-rank" src="img/anhdep.jpg" alt="" /></td>
                  <td>Manchester United</td>
                  <td>19</td>
                  <td>49</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>8</th>
                  <td><img class="avt-user-rank" src="img/anhdep.jpg" alt="" /></td>
                  <td>Manchester United</td>
                  <td>19</td>
                  <td>49</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>9</th>
                  <td><img class="avt-user-rank" src="img/anhdep.jpg" alt="" /></td>
                  <td>Manchester United</td>
                  <td>19</td>
                  <td>49</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>10</th>
                  <td><img class="avt-user-rank" src="img/anhdep.jpg" alt="" /></td>
                  <td>Manchester United</td>
                  <td>19</td>
                  <td>49</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>11</th>
                  <td><img class="avt-user-rank" src="img/anhdep.jpg" alt="" /></td>
                  <td>Manchester United</td>
                  <td>19</td>
                  <td>49</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>12</th>
                  <td><img class="avt-user-rank" src="img/anhdep.jpg" alt="" /></td>
                  <td>Manchester United</td>
                  <td>53</td>
                  <td>392</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>13</th>
                  <td><img class="avt-user-rank" src="img/anhdep.jpg" alt="" /></td>
                  <td>Manchester United</td>
                  <td>43</td>
                  <td>213</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>14</th>
                  <td><img class="avt-user-rank" src="img/anhdep.jpg" alt="" /></td>
                  <td>Manchester United</td>
                  <td>19</td>
                  <td>49</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="friends" v-bind:class="{ 'active': activeCountRank }">
            <div class="login-friends">
              <span>Login with: </span>
              <span class="login-fb-span">Facebook</span>
              <span class="login-gg-span">Google</span>
            </div>
          </div>
        </div>
      </div>
  `,
  data() {
    return {
      activeCountRank: true,
      activeFriends: false
    }
  },
  methods: {
    top20() {
      this.activeCountRank = true;
      this.activeFriends = false;
    },
    friends() {
      this.activeCountRank = false;
      this.activeFriends = true;
    },
  }
})










