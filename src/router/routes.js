
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      breadcrumbs: [
        { name: 'Главная', link: '/' }
      ]
    },
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/news',
    component: () => import('layouts/NewsLayout.vue'),
    meta: {
      breadcrumbs: [
        {name: 'Новости', link: 'news'}
      ]
    },
    children: [
      { path: '', component: () => import('pages/News.vue')},
      { path: ':id', component: () => import('pages/News.vue')}
    ]
  },
  {
    path: '/p',
    component: () => import('layouts/OtherPagesLayout.vue'),
    children: [
      {
        path: 'works',
        component: () => import('pages/Works.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Работа' }
          ]
        }
      }, {
        path: 'structure',
        component: () => import('pages/University/Structure.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Структура и органы управления' }
          ]
        }
      }, {
        path: 'about',
        component: () => import('pages/University/About.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'О вузе' }
          ]
        }
      }, {
        path: 'infoeducation',
        component: () => import('pages/University/InfoEducation.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной оргиназации' }
          ]
        }
      }, {
        path: 'employee',
        component: () => import('pages/University/Empl.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Структура и органы управления' }
          ]
        }
      }, {
        path: 'education',
        component: () => import('pages/University/Education.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Образование' }
          ]
        }
      }, {
        path: 'documents',
        component: () => import('pages/University/Documents.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Документы' }
          ]
        }
      }, {
        path: 'rulers',
        component: () => import('pages/University/Rulers.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Руководство' }
          ]
        }
      }, {
        path: 'equipment',
        component: () => import('pages/University/Equipment.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Оснащенность университета' }
          ]
        }
      }, {
        path: 'finance',
        component: () => import('pages/University/Finance.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Финансовая деятельность' }
          ]
        }
      }, {
        path: 'accessible-environment',
        component: () => import('pages/University/AccessibleEnvironment.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Доступная среда' }
          ]
        }
      }, {
        path: 'pay-service',
        component: () => import('pages/University/PayService.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Платные образовательные услуги' }
          ]
        }
      }, {
        path: 'partners',
        component: () => import('pages/University/Partners.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Партнеры' }
          ]
        }
      }, {
        path: 'international-cooperation',
        component: () => import('pages/University/InternationalCooperation.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Международное сотрудничество' }
          ]
        }
      }, {
        path: 'anti-corruption',
        component: () => import('pages/University/AntiCorruption.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Противодействие коррупции' }
          ]
        }
      }, {
        path: 'abiturient',
        component: () => import('pages/Abiturient/Abiturient.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Общая информация' }
          ]
        }
      }, {
        path: 'abiturient/join',
        component: () => import('pages/Abiturient/AbiturientJoin.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Приемная комиссия' }
          ]
        }
      }, {
        path: 'abiturient/educationForms',
        component: () => import('pages/Abiturient/EducationForms.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Формы обучения' }
          ]
        }
      }, {
        path: 'abiturient/additionalCourses',
        component: () => import('pages/Abiturient/AdditionalCourses.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Подготовительные курсы' }
          ]
        }
      }, {
        path: 'abiturient/openDoor',
        component: () => import('pages/Abiturient/OpenDoor.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'День открытых дверей' }
          ]
        }
      }, {
        path: 'students/electronic-education',
        component: () => import('pages/Student/ElectronicEducation.vue')
      }, {
        path: 'contact',
        component: () => import('pages/Contact.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Электронная образовательная среда' }
          ]
        }
      }
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
