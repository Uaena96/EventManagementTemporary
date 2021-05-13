<template>
  <div>
    <!-- Update Event Button -->
    <router-link :to="`/update-events/${id}`">
      <b-button
        variant="outline-info"
        class="mb-2"
      >
        <b-icon
          icon="pencil"
          aria-hidden="true"
        /> Update Event
      </b-button>
    </router-link>
    <b-form @submit.prevent>
      <b-row>
        <!-- event name -->
        <b-col cols="12">
          <b-form-group
            label="Event Name"
            label-for="v-event-name"
          >
            <b-form-input
              id="v-event-name"
              v-model="update_event.event_name"
              placeholder="Event Name"
              readonly
            />
          </b-form-group>
        </b-col>

        <!-- event-description -->
        <b-col cols="12">
          <b-form-group
            label="Event Description"
            label-for="v-description"
          >
            <b-form-input
              id="v-description"
              v-model="update_event.description"
              type="text"
              placeholder="Event Description"
            />
          </b-form-group>
        </b-col>

        <!-- start-date -->
        <b-col cols="6">
          <label for="example-datepicker">Start Date</label>
          <b-form-datepicker
            id="start-date"
            v-model="update_event.start_date"
            class="mb-1"
          />
        </b-col>
        <!-- end-date -->
        <b-col cols="6">
          <label for="example-datepicker">End Date</label>
          <b-form-datepicker
            id="end-date"
            v-model="update_event.end_date"
            class="mb-1"
          />
        </b-col>
        <!-- event-organizer -->
        <b-col cols="12">
          <b-form-group
            label="Event Organizer"
            label-for="v-event-organizer"
          >
            <b-form-input
              id="v-event-organizer"
              v-model="update_event.organizer"
              placeholder="Event Organizer"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import {
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BForm,
  BButton,
  BFormDatepicker,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import apiService from '../helper/ApiService'

export default {
  name: 'UpdateEvent',
  components: {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    BButton,
    BFormDatepicker,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      update_event: {
        event_name: '',
        description: '',
        start_date: '',
        end_date: '',
        organizer: '',
      },
      id: this.$route.params.id,
    }
  },
  mounted() {
    this.getEventById()
  },
  created() {},
  methods: {
    async getEventById() {
      const res = await apiService.getEventsById(
        `http://127.0.0.1:8000/api/event/${this.$route.params.id}`,
      )
      this.update_event = res.data
      console.log(this.update_event)
    },
  },
}
</script>
