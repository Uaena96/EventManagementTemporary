<template>
  <div>
    <!-- Add Event Button -->
    <router-link to="/add-events">
      <b-button
        v-b-modal.addEventModal
        variant="outline-info"
        class="mb-2"
      >
        <b-icon
          icon="plus"
          aria-hidden="true"
        /> Add Events
      </b-button>
    </router-link>

    <!-- events list -->
    <b-table
      responsive
      hover
      :items="events"
      :fields="fields"
    >
      <template #cell(actions)="data">
        <router-link :to="`/view-events/${data.item.id}`">
          <b-button
            variant="warning"
            class="mr-2"
          >
            <b-icon
              icon="eye"
              aria-hidden="true"
            />
          </b-button>
        </router-link>
        <b-button
          variant="danger"
          @click="deleteEvent(data.item.id)"
        >
          <b-icon
            icon="trash"
            aria-hidden="true"
          />
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { BTable, BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import store from '../store/index'
import apiService from '../helper/ApiService'

export default {
  name: 'EventsList',
  components: {
    BTable,
    BButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      fields: [
        'event_name',
        'description',
        'organizer',
        'start_date',
        'end_date',
        'actions',
      ],
      // events: [],
      id: '',
      del: '',
    }
  },

  computed: {
    events() {
      return this.$store.getters.getEvents
    },
  },

  mounted() {
    this.getEvents()
  },

  methods: {
    async getEvents() {
      const res = await apiService.getEvents('http://127.0.0.1:8000/api/events')
      store.commit('setEvents', res.data)
      // this.events = res.data
    },
    async deleteEvent(id) {
      await apiService.deleteEvent(`http://127.0.0.1:8000/api/event/${id}`)

      this.$store.commit('deleteEvents', id)
      this.getEvents()
    },
  },

  //   async updateEvents() {
  //     // sample data
  //     const sample = {
  //       event_name: 'Annual Assembly',
  //       organizer: 'Harv',
  //     }
  //     const res = await apiService.updateEvent(
  //       `http://127.0.0.1:8000/api/event/${this.id}`,
  //       sample,
  //     )
  //     console.log(res)
  //     this.getEvents()
  //   },

  // created() {
  //   this.getEvents();
  // }
}
</script>

<style scoped>
.close {
  transform: none !important;
  margin-top: -0.2em !important;
  margin-right: -14px !important;
}
</style>
