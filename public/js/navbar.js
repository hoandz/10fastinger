var navbarComponent = Vue.component('navbar', {
  template: `
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Language
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item">
              Vietnamese
            </a>
            <a class="navbar-item">
              English
            </a>
            <a class="navbar-item">
              Korea
            </a>
            <a class="navbar-item">
              japan
            </a>
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <div v-show="isLogin" class="navbar-item has-dropdown is-hoverable">
          <figure class="image is-32x32">
            <img class="is-rounded" :src="avatar">
          </figure>
          <a class="navbar-link" href="#">
            {{ displayName }}
          </a>
          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item" href="#" @click="onClickLogout">
              Logout
            </a>
          </div>
        </div>
        <div v-show="!isLogin" class="navbar-item">
          <div class="buttons">
            <a class="button is-light" @click="onClickLoginFb">
              Log in Facebook
            </a>
          </div>
          <div class="buttons">
            <a class="button is-light" @click="onClickLoginGoogle">
              Log in Google
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  `,
  data() {
    return {
      displayName: "",
      avatar: "",
      isLogin: false
    }
  },
  methods: {
    onClickLogout() {
      var vm = this;
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        vm.isLogin = true;
      }, function(error) {
        // An error happened.
      });
    },
    onClickLoginFb(){
      //end get value input
      var provider = new firebase.auth.FacebookAuthProvider();

      provider.addScope('user_birthday');

      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        console.log(user);
      }).catch(function(error) {
        // Handle Errors here.
        console.log("error ne: ", error);
        // ...
      });
      //end xu ly login fb
    },
    onClickLoginGoogle(){
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        console.log("Loi Google", error);
      });
    }
  },
  mounted() {
    var vm = this;
    //xu ly login fb
    firebase.auth().onAuthStateChanged(function(user) {
      if (user != null) {
        vm.isLogin = true;
        vm.displayName = user.displayName;
        vm.avatar = user.photoURL;
      } else {
        vm.isLogin = false;
      }
      console.log("user", user);
    });
  }
})
