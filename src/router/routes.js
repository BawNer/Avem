
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
    path: '/sveden',
    component: () => import('layouts/OtherPagesLayout.vue'),
    children: [
      {
        path: 'schedule',
        component: () => import('pages/Schedule.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Расписание занятий' }
          ]
        }
      }, {
        path: 'works',
        component: () => import('pages/Works.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Работа' }
          ]
        }
      }, {
        path: 'struct',
        component: () => import('pages/University/Structure.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Структура и органы управления' }
          ]
        }
      }, {
        path: 'common',
        component: () => import('pages/University/About.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Основные сведения' }
          ]
        }
      }, {
        path: 'employees',
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
        path: 'eduStandarts',
        component: () => import('pages/University/EduStandarts.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Образовательные стандарты' }
          ]
        }
      }, {
        path: 'document',
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
        path: 'objects',
        component: () => import('pages/University/Equipment.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Материально-техническое обеспечение и оснащённость образовательного процесса' }
          ]
        }
      }, {
        path: 'budget',
        component: () => import('pages/University/Finance.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Финансово-хозяйственная деятельность' }
          ]
        }
      }, {
        path: 'ovz',
        component: () => import('pages/University/AccessibleEnvironment.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Доступная среда' }
          ]
        }
      }, {
        path: 'paid_edu',
        component: () => import('pages/University/PayService.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Платные образовательные услуги' }
          ]
        }
      }, {
        path: 'cisco',
        component: () => import('pages/University/Cisco.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Кися' } /* FIX ME! */
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
        path: 'inter',
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
        component: () => import('pages/Student/ElectronicEducation.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Электронная образовательная среда' }
          ]
        }
      }, {
        path: 'students',
        component: () => import('pages/Student/Students.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Студентам' }
          ]
        }
      }, {
        path: 'students/documents',
        component: () => import('pages/Student/Documents.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Документы' }
          ]
        }
      }, {
        path: 'vacant',
        component: () => import('src/pages/Vacant.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Вакантные места для перевода' }
          ]
        }
      }, {
        path: 'grants',
        component: () => import('src/pages/Grants.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Вакантные места для перевода' }
          ]
        }
      }, {
        path: 'students/portfolio',
        component: () => import('pages/Student/Portfolio.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Электронное портфолио' }
          ]
        }
      }, {
        path: 'students/scientific-work',
        component: () => import('src/pages/Student/ScientificWork.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Научная работа' }
          ]
        }
      }, {
        path: 'students/extracurricular',
        component: () => import('src/pages/Student/Extracurricular.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Внеучебная деятельность' }
          ]
        }
      }, {
        path: 'students/consultations',
        component: () => import('src/pages/Student/Consultations.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'График консультаций' }
          ]
        }
      }, {
        path: 'students/rating-system',
        component: () => import('src/pages/Student/RatingSystem.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Модульно рейтинговая система' }
          ]
        }
      }, {
        path: 'students/qualifying-works',
        component: () => import('src/pages/Student/QualifyingWorks.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Методические указания по подготовке ВКР' }
          ]
        }
      }, {
        path: 'contact',
        component: () => import('pages/Contact.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Контакты' }
          ]
        }
      }, {
        path: 'events',
        component: () => import('pages/Events.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'События' }
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
