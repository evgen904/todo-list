import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'

import fb from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/messaging'
import 'firebase/functions'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyC-EVj6IGepD3F6pEuECX6Gkgbx9ikBloU',
      authDomain: 'its-ads-4c326.firebaseapp.com',
      databaseURL: 'https://its-ads-4c326.firebaseio.com',
      projectId: 'its-ads-4c326',
      storageBucket: 'its-ads-4c326.appspot.com',
      messagingSenderId: '242674476104'
    });
    this.$store.dispatch('fetchTasks');
  }
}).$mount('#app')
