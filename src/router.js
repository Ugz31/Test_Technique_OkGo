import Vue from 'vue';
import VueRouter from 'vue-router';
import UserList from '@/components/UserList.vue';
import UserDetail from '@/components/UserDetail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/users',
    component: UserList,
  },
  {
    path: '/users/:id',
    component: UserDetail,
    props: true,  
  },
  {
    path: '*',
    redirect: '/users',
  },
];

const router = new VueRouter({
  routes,
});

export default router;