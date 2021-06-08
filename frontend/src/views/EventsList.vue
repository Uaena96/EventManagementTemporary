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
import { mapGetters, mapActions } from 'vuex'

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
    ...mapGetters({
      events: 'getEvents',
    }),
  },

  mounted() {
    this.getEvents()
  },

  methods: {
    ...mapActions(['getEvents', 'deleteEvent']),
  },
}
</script>

<style scoped>
.close {
  transform: none !important;
  margin-top: -0.2em !important;
  margin-right: -14px !important;
}
</style>
