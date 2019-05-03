import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import fb from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/messaging'
import 'firebase/functions'

class Task {
  constructor (name, desc, done, priority, id = null) {
    this.name = name
    this.desc = desc
    this.done = done
    this.priority = priority
    this.id = id
  }
}

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    loadTasks (state, payload) {
      state.tasks = payload
    },
    createTask (state, payload) {
      state.tasks.push(payload)
    },
    updateTask (state, {name, desc, done, priority, id}) {
      const task = state.tasks.find(a => {
        return a.id === id
      })

      task.name = name
      task.desc = desc
      task.done = done
      task.priority = priority
    }
  },
  actions: {
    async fetchTasks ({commit}) {
      const resultTasks = []
      try {
        const fbVal = await fb.database().ref('tasks/123456').once('value')
        const tasks = fbVal.val()
        Object.keys(tasks).forEach(key => {
          const task = tasks[key]
          resultTasks.push(
            new Task(task.name, task.desc, task.done, task.priority, key)
          )
        })
        commit('loadTasks', resultTasks)
      }
      catch (error) {
        console.log(error.message)
        throw error
      }
    },
    async createTask ({commit, getters}, payload) {
      try {
        const newTask = new Task(
          payload.name,
          payload.desc,
          payload.done,
          payload.priority
        )
        await fb.database().ref('tasks/123456').push(newTask)
      } catch (error) {
        console.log(error.message)
        throw error
      }
    },
    async updateTask ({commit}, {name, desc, done, priority, id}) {
      try {
        await fb.database().ref('tasks/123456').child(id).update({
          name, desc, done, priority
        })
        commit('updateTask', {
          name, desc, done, priority, id
        })
      } catch (error) {
        console.log(error.message)
        throw error
      }
    },
    async deleteTask ({commit}, {id}) {
      try {
        const fbVal = await fb.database().ref('tasks/123456').child(id)
        fbVal.remove()
      } catch (error) {
        console.log(error.message)
        throw error
      }
    }
  },
  getters: {
    myTasks (state, getters) {
      return state.tasks;
    }
  }
});
