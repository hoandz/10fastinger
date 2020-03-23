
var navbarComponent = Vue.component('navbar', {
  template: `
    
<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        <img src="img/logo.png" width="120" max-height="auto">
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
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
        <login-panel size="big" v-show="!isLogin"></login-panel>
      </div>
    </div>
  </nav>
  
  `,
  data() {
    return {
      displayName: "",
      avatar: "",
      isLogin: false,
      toggleLogin: false
    }
  },
  methods: {
    test() {
      this.toggleLogin = !this.toggleLogin;
    },
    onClickLogout() {
      var vm = this;
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        vm.isLogin = true;
      }, function(error) {
        // An error happened.
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
    });
  }
})
