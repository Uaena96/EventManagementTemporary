<template>
  <div>
    <!-- Add Event Button -->
    <router-link to="/add-events">
      <b-button
        v-b-modal.addEventModal
        variant="outline-info"
        class="mb-2"
        @click="addEvents"
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
    <!-- end modal -->

    <!-- <b-input-group
      :size="'sm'"
      class="mb-3"
      prepend="EVENT ID"
    >
      <b-form-input v-model="id" />
      <b-input-group-append>
        <b-button
          size="sm"
          text="Button"
          variant="success"
          @click="updateEvents"
        >
          Update
        </b-button>
      </b-input-group-append>
    </b-input-group>
    <b-input-group
      :size="'sm'"
      class="mb-3"
      prepend="EVENT ID"
    >
      <b-form-input v-model="del" />
      <b-input-group-append>
        <b-button
          size="sm"
          text="Button"
          variant="danger"
          @click="deleteEvent"
          id="close"
        >
          Delete
        </b-button>
      </b-input-group-append>
    </b-input-group> -->

    <!-- events list -->
    <b-table
      responsive
      hover
      :items="events"
      :fields="fields"
    >
      <template #cell(actions)>
        <router-link to="/update-events">
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
        <b-button variant="danger">
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

    async addEvents() {
      // sample data
      const sample = {
        event_name: 'Webinar',
        description: 'dance tutorial',
        organizer: 'Lalisa',
        start_date: '2021-05-08T11:33:13.035Z',
        end_date: '2021-05-09T11:33:13.035Z',
      }

      const res = await apiService.addEvent(
        'http://127.0.0.1:8000/api/event',
        sample,
      )
      console.log(res)
      this.getEvents()
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
    async deleteEvent() {
      const res = await apiService.deleteEvent(
        `http://127.0.0.1:8000/api/event/${this.del}`,
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
