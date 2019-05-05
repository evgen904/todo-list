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
      apiKey: "AIzaSyDwIN-4NWrF1cX39qZbw1Ei0JsfWLEjvcA",
      authDomain: "todo-list-1ecea.firebaseapp.com",
      databaseURL: "https://todo-list-1ecea.firebaseio.com",
      projectId: "todo-list-1ecea",
      storageBucket: "todo-list-1ecea.appspot.com",
      messagingSenderId: "119780722586",
      appId: "1:119780722586:web:c9d395a5aa977f6c"
    });
    this.$store.dispatch('fetchTasks');
  }
}).$mount('#app')
