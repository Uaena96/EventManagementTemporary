import Vue from 'vue'
import Vuex from 'vuex'

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

    setEventById(state, eventId, event) {
      state.events[eventId] = event
    },

    deleteEvents(state, eventId) {
      const event = state.events.find(el => el.id === parseInt(eventId, 10))
      const index = state.events.indexOf(event)
      state.events.slice(index, state.events.lenght)
    },
  },
  modules: {
    app,
    appConfig,
    verticalMenu,
  },
  strict: process.env.DEV,
})
