
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/news',
    component: () => import('layouts/NewsLayout.vue'),
    children: [
      { path: '', component: () => import('pages/News.vue')},
      { path: ':id', component: () => import('pages/News.vue')}
    ]
  },
  {
    path: '/p',
    component: () => import('layouts/OtherPagesLayout.vue'),
    children: [
      { path: 'structure', component: () => import('pages/Structure.vue') },
      { path: 'about', component: () => import('pages/About.vue') },
      { path: 'contact', component: () => import('pages/Contact.vue') },
      { path: 'infoeducation', component: () => import('src/pages/InfoEducation.vue') },
      { path: 'employee', component: () => import('pages/Empl.vue') },
      { path: 'education', component: () => import('pages/Education.vue') },
      { path: 'documents', component: () => import('pages/Documents.vue') },
      { path: 'abiturient', component: () => import('pages/Abiturient.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
