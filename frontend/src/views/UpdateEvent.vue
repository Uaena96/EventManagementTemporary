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
          class="mb-1"
        />
      </b-col>
      <!-- end-date -->
      <b-col cols="6">
        <label for="example-datepicker">End Date</label>
        <b-form-datepicker
          id="end-date"
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
        >
          Submit
        </b-button>
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          type="reset"
          variant="outline-secondary"
        >
          Reset
        </b-button>
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
}
</script>
