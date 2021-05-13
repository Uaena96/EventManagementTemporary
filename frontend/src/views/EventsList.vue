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
    <!-- Add Event Modal -->
    <b-modal
      id="addEventModal"
      ref="modal"
      title="Add Event"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form
        ref="form"
        @submit.stop.prevent="handleSubmit"
      >
        <b-form-group
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          />
        </b-form-group>
      </form>
    </b-modal>

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
      events: [],
      id: '',
      del: '',
    }
  },
  mounted() {
    this.getEvents()
  },
  methods: {
    async getEvents() {
      const res = await apiService.getEvents('http://127.0.0.1:8000/api/events')
      console.log(res.data)
      this.events = res.data
    },

    async updateEvents() {
      // sample data
      const sample = {
        event_name: 'Annual Assembly',
        organizer: 'Harv',
      }
      const res = await apiService.updateEvent(
        `http://127.0.0.1:8000/api/event/${this.id}`,
        sample,
      )
      console.log(res)
      this.getEvents()
    },
    async deleteEvent(id) {
      const res = await apiService.deleteEvent(
        `http://127.0.0.1:8000/api/event/${id}`,
      )
      console.log(res)
      this.getEvents()
    },
  },

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
