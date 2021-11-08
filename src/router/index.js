import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '../store';
import middlewarePipeline from './middlewarePipeLine';
import auth from './middlewares/auth';

import Home from '../views/Home';
import Login from '../views/Login';
import PageNotFound from '../views/PageNotFound';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      middleware: [
        auth,
      ],
    },
  },
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }
  const { middleware } = to.meta;

  const context = {
    to,
    from,
    next,
    store,
  };
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});

export default router;
