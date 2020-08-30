const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Lista.vue') },
    ],
  },
  {
    path: '/cadastro',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Cadastro.vue') },
    ],
  },

];

export default routes;
