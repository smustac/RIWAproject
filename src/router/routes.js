const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
<<<<<<< HEAD
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'noveknjige', component: () => import('pages/NoveKnjige.vue') },
      { path: 'popisknjiga', component: () => import('pages/PopisKnjigaPage.vue') },
      { path: 'pretrazivanje', component: () => import('pages/PretraživanjePage.vue') },
      { path: 'lokacija', component: () => import('pages/LokacijaPage.vue') },
      { path: 'unosKnjiga', component: () => import('pages/unosNovihKnjiga.vue') },
      { path: 'test2', component: () => import('pages/Test2Page.vue') },
      { path: '/test', component: () => import('pages/TestPage.vue') },
   
    ]
  },

  // Catch-all route (404)
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
=======
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }, 
               { path: '/users', component: () => import('pages/UsersPage.vue') }, 
               { path: '/noveKnjige', component: () => import('pages/NoveKnjigePage.vue') }], 
   
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
>>>>>>> 6bd971560f50f4ab56c484ffb384272ed1c9a345
]

export default routes
