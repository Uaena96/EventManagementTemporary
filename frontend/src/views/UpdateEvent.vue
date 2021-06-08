<template>
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

      <!-- submit and reset -->
      <b-col cols="12">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          type="submit"
          variant="primary"
          class="mr-1"
          @click="submitEvent"
        >
          Update
        </b-button>

        <router-link to="/events-list">
          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            type="reset"
            variant="outline-secondary"
          >
            Cancel
          </b-button>
        </router-link>
      </b-col>
    </b-row>
  </b-form>
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
import { mapActions } from 'vuex'
import store from '../store/index'

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
      id: 0,
    }
  },
  mounted() {
    this.getEventById()
  },
  created() {},
  methods: {
    getEventById() {
      this.update_event = store.getters.getEvents.find(
        el => el.id === parseInt(this.$route.params.id, 10),
      )
    },
    ...mapActions(['updateEvent']),
    submitEvent() {
      this.updateEvent(this.update_event, this.updateEvent.id)
      this.$router.push({ name: 'events-list' })
    },
  },
}
</script>
