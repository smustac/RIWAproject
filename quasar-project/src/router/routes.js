const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'noveknjige', component: () => import('pages/NoveKnjige.vue') },
      { path: 'popisknjiga', component: () => import('pages/PopisKnjigaPage.vue') },
      { path: 'pretrazivanje', component: () => import('pages/PretraživanjePage.vue') },
      { path: 'lokacija', component: () => import('pages/LokacijaPage.vue') },
      { path: 'test2', component: () => import('pages/Test2Page.vue') },
      { path: '/test', component: () => import('pages/TestPage.vue') },
   
    ]
  },

  // Catch-all route (404)
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
