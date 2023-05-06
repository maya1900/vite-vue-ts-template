const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    component: () => import('@/pages/login.vue'),
  },
  {
    path: '/home',
    component: () => import('@/pages/home.vue'),
    redirect: '/home/user', //新增
    children: [
      {
        path: '/home/user',
        component: () => import('@/pages/user.vue'),
      },
      {
        path: '/home/manage',
        component: () => import('@/pages/manage.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/404.vue'),
  },
];

export default routes;
