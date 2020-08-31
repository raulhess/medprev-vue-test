const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'lista',
        component: () => import('pages/Lista.vue'),
      },
    ],
  },
  {
    path: '/cadastro',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'cadastro',
        component: () => import('pages/Cadastro.vue'),
      },
    ],
  },

];

export default routes;
