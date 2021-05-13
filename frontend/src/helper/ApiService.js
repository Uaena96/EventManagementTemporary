import axios from 'axios'

export default {
  async getEvents(url) {
    const response = await axios.get(url)
    return response
  },

  async getEventsById(url) {
    const response = await axios.get(url)
    return response
  },

  async addEvent(url, data) {
    const response = await axios.post(url, data)
    return response
  },

  async updateEvent(url, data) {
    const response = await axios.put(url, data)
    return response
  },

  async deleteEvent(url) {
    const response = await axios.delete(url)
    return response
  },
}
