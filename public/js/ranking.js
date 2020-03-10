var rankingPanel = Vue.component('rankingPanel', {
  template: `
      <div class="tile is-8 is-12 rank-24h">
        <div class="select-view-rank">
          <div class="count-top" v-on:click="top20" v-bind:class="{ 'active-count-rank': activeFriends }">
            Top 7 days
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
                  <th>Active</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(highScore, index) in highScores">
                  <th>{{ index + 1 }}</th>
                  <td><img class="avt-user-rank" src="img/anhdep.jpg" alt="" /></td>
                  <td>{{ highScore.userId }}</td>
                  <td>{{ highScore.wpm }}</td>
                  <td>{{ highScore.createdAt }}</td>
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
  props: ['highScores'],
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










