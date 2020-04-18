var rankingPanel = Vue.component('rankingPanel', {
  template: `
      <div class="tile is-8 is-12 rank-24h">
        <div class="select-view-rank">
          <div class="count-top" v-on:click="top20" v-bind:class="{ 'active-count-rank': activeFriends }">
            Top 
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
                  <th>Online</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(highScore, index) in highScores" class="rank-user">
                  <th class="rank-user-th"><p class="stt1"><p class="stt2"><p class="stt3"><p class="stt4">{{ index + 1 }}</p></p></p></p></th>
                  <td class="anh-user"><img class="avt-user-rank" :src="highScore.photoURL" alt="" /></td>
                  <td class="ten-user"><p class="can-giua-text">{{ highScore.displayName }}</p></td>
                  <td class="wpm-user"><p class="can-giua-text">{{ highScore.wpm }}</p></td>
                  <td><p class="can-giua-text">{{ highScore.createdAt | pretty_date }}</p></td>
                  <td><login-panel size="small" v-show="typeof highScore.check != 'undefined' "></login-panel></td>
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
  props: ['highScores'],
  data() {
    return {
      activeCountRank: true,
      activeFriends: false
    }
  },
  filters: {
    pretty_date: function (value) {
      return moment(parseInt(value) * 1000).fromNow();
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










