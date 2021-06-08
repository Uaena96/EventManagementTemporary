import Vue from 'vue'
import Vuex from 'vuex'

// Api service
import apiService from '../helper/ApiService'

// Modules
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [],
  },

  getters: {
    getEvents(state) {
      return state.events
    },
  },

  mutations: {
    setEvents(state, events) {
      state.events = events
    },

    setEvent(state, event) {
      state.events.push(event)
    },
  },

  actions: {
    async getEvents({ commit }) {
      const res = await apiService.getEvents('http://127.0.0.1:8000/api/events')
      commit('setEvents', res.data)
    },

    async addEvents({ commit }, event) {
      await apiService.addEvent('http://127.0.0.1:8000/api/event', event)
      commit('setEvent', event)
    },

    async deleteEvent({ commit }, id) {
      await apiService.deleteEvent(`http://127.0.0.1:8000/api/event/${id}`)
      let events = this.getters.getEvents
      events = events.filter(value => value.id !== parseInt(id, 10))

      commit('setEvents', events)
    },

    async updateEvent({ commit }, event, id) {
      await apiService.updateEvent(
        `http://127.0.0.1:8000/api/event/${id}`,
        event,
      )
      let events = this.getters.getEvents
      events = events.filter(value => value.id !== parseInt(id, 10))
      
      commit('setEvents', events)
      commit('setEvent', event)
    },
  },

  modules: {
    app,
    appConfig,
    verticalMenu,
  },
  strict: process.env.DEV,
})
