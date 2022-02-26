import Bedroom from '@/pages/Bedroom.vue';
import Office from '@/pages/Office.vue';
import Kitchen from '@/pages/Kitchen.vue';

// Routing setup methods
import { createRouter, createWebHistory } from 'vue-router';

// Define routes
const routes = [
  {
    path: '/',
    component: Bedroom,
  },
  {
    path: '/bedroom',
    component: Bedroom,
  },
  {
    path: '/office',
    component: Office,
  },
  {
    path: '/kitchen',
    component: Kitchen,
  }
];

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
