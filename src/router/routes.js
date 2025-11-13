const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }, 
               { path: '/users', component: () => import('pages/UsersPage.vue') }, 
               { path: '/noveKnjige', component: () => import('pages/NoveKnjigePage.vue') },
               { path: '/PopisKnjiga', component: () => import('pages/PopisKnjiga.vue') },
               { path: '/pretrazivanje', component: () => import('pages/PretrazivanjePage.vue') },
               { path: '/lokacija', component: () => import('pages/LokacijaPage.vue') },
               { path: '/login', component: () => import('pages/LoginPage.vue') },
               { path: '/registracija', component: () => import('pages/RegistracijaPage.vue') },
               { path: '/test', component: () => import('pages/TestPage.vue') },
               { path: '/test2', component: () => import('pages/TestPagee.vue') },
               { path: '/test1', component: () => import('pages/Test1Page.vue') },
               { path: '/UnosKnjiga', component: () => import('pages/UnosKnjigaPage.vue') },] 
   
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
