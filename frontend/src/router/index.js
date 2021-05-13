import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Home',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
        ],
      },
    },
    {
      path: '/second-page',
      name: 'second-page',
      component: () => import('@/views/SecondPage.vue'),
      meta: {
        pageTitle: 'Second Page',
        breadcrumb: [
          {
            text: 'Second Page',
            active: true,
          },
        ],
      },
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
    {
      path: '/events-list',
      name: 'events-list',
      component: () => import('@/views/EventsList.vue'),
      meta: {
        pageTitle: 'EventsList',
        breadcrumb: [
          {
            text: 'Events List',
            active: true,
          },
        ],
      },
    },
    {
      path: '/add-events',
      name: 'AddEvents',
      component: () => import('@/views/AddEvent.vue'),
      meta: {
        pageTitle: 'Add Event',
        breadcrumb: [
          {
            text: 'Add Event',
            active: true,
          },
        ],
      },
    },
    {
      path: '/update-events',
      name: 'UpdateEvents',
      component: () => import('@/views/UpdateEvent.vue'),
      meta: {
        pageTitle: 'Update Events',
        breadcrumb: [
          {
            text: 'Update Event',
            active: true,
          },
        ],
      },
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
