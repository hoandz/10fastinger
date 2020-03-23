var loginPanel = Vue.component('loginPanel', {
  template: `<div :class="{'small-login-panel': size == 'small', 'big-login-panel': size == 'big'}">
    <span class="clickLogFb" @click="onClickLoginFb">Facebook</span>
    <span class="clickLogGg" @click="onClickLoginGoogle">Google</span>
  </div>`,
  props: ["size"],
  methods: {
    onClickLoginFb(){
      //end get value input
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
      }).catch(function(error) {
        console.log("error ne: ", error);
      });
    },
    onClickLoginGoogle(){
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
      }).catch(function(error) {
        console.log("Loi Google", error);
      });
    }
  }
})