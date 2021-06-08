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
            v-model="new_event.event_name"
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
            v-model="new_event.description"
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
          v-model="new_event.start_date"
          class="mb-1"
        />
      </b-col>
      <!-- end-date -->
      <b-col cols="6">
        <label for="example-datepicker">End Date</label>
        <b-form-datepicker
          id="end-date"
          v-model="new_event.end_date"
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
            v-model="new_event.organizer"
            placeholder="Event Organizer"
          />
        </b-form-group>
      </b-col>

      <!-- add and cancel -->
      <b-col cols="12">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          type="submit"
          variant="primary"
          class="mr-1"
          @click="getNewEvent"
        >
          Submit
        </b-button>
        <!-- </router-link> -->
        <router-link to="/events-list">
          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            type="cancel"
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

export default {
  name: 'AddEvent',
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
      new_event: {
        event_name: '',
        description: '',
        start_date: '',
        end_date: '',
        organizer: '',
      },
    }
  },
  methods: {
    ...mapActions(['addEvents']),
    getNewEvent() {
      this.addEvents(this.new_event)
      this.$router.push({ name: 'events-list' })
    },
  },
}
</script>
