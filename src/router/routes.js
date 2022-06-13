
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
    path: '/auth',
    component: () => import('layouts/lk/Index')
  },
  {
    path: '/lk',
    component: () => import('layouts/lk/LayoutMiddleware'),
    children: [
      {
        path: 'admin',
        component: () => import('layouts/lk/LayoutAdmin'),
        children: [
          { path: '', component: () => import('pages/lk/Admin/Index') },
          { path: 'news', component: () => import('pages/lk/Admin/News') },
          { path: 'schedule', component: () => import('pages/lk/Admin/Schedule') }
        ]
      }
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
            { name: 'Студенту', link: '/sveden/students' },
            { name: 'Расписание занятий' }
          ]
        }
      }, {
        path: 'works',
        component: () => import('pages/Works.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Студенту', link: '/sveden/students' },
            { name: 'Работа' }
          ]
        }
      }, {
        path: 'struct',
        component: () => import('pages/University/Structure.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Структура и органы управления образовательной организацией' }
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
        component: () => import('pages/University/Employees/Empl.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Преподавательский состав' }
          ]
        }
      }, {
        path: 'employees/about',
        component: () => import('pages/University/Employees/About'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Преподавательский состав', link: '/sveden/employees' }
          ]
        }
      }, {
        path: 'education',
        component: () => import('pages/University/Education.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Образование' }
          ]
        }
      }, {
        path: 'eduStandarts',
        component: () => import('pages/University/EduStandarts.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Образовательные стандарты' }
          ]
        }
      }, {
        path: 'document',
        component: () => import('pages/University/Documents.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Документы' }
          ]
        }
      }, {
        path: 'rulers',
        component: () => import('pages/University/Rulers.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Руководство. Педагогический (научно-педагогический) состав' }
          ]
        }
      }, {
        path: 'objects',
        component: () => import('pages/University/Equipment/Equipment.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Материально-техническое обеспечение и оснащённость образовательного процесса' }
          ]
        }
      }, {
        path: 'objects/eduCabinets',
        component: () => import('pages/University/Equipment/eduCabinets'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Материально-техническое обеспечение и оснащённость образовательного процесса', link: '/sveden/objects' },
            { name: 'Учебные кабинеты' }
          ]
        }
      }, {
        path: 'objects/labMainPhysicBZD',
        component: () => import('pages/University/Equipment/labMainPhysicBZD'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Материально-техническое обеспечение и оснащённость образовательного процесса', link: '/sveden/objects' },
            { name: 'Лаборатория Общей физики и БЖД' }
          ]
        }
      }, {
        path: 'objects/labIVT',
        component: () => import('pages/University/Equipment/labIVT'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Материально-техническое обеспечение и оснащённость образовательного процесса', link: '/sveden/objects' },
            { name: 'Лаборатория Вычислительной техники и информатики' }
          ]
        }
      }, {
        path: 'objects/labOTS',
        component: () => import('pages/University/Equipment/labOTS'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Материально-техническое обеспечение и оснащённость образовательного процесса', link: '/sveden/objects' },
            { name: 'Лаборатория Основ теории цепей и линий связи' }
          ]
        }
      }, {
        path: 'objects/labTAC',
        component: () => import('pages/University/Equipment/labTAC'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Материально-техническое обеспечение и оснащённость образовательного процесса', link: '/sveden/objects' },
            { name: 'Лаборатория Теории электрической связи, метрологии и электроники' }
          ]
        }
      }, {
        path: 'objects/labSRT',
        component: () => import('pages/University/Equipment/labSRT'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Материально-техническое обеспечение и оснащённость образовательного процесса', link: '/sveden/objects' },
            { name: 'Лаборатория Систем радиосвязи и телевещания' }
          ]
        }
      }, {
        path: 'objects/labSCS',
        component: () => import('pages/University/Equipment/labSCS'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Материально-техническое обеспечение и оснащённость образовательного процесса', link: '/sveden/objects' },
            { name: 'Лаборатория Цифровых систем коммутации и сетей связи' }
          ]
        }
      }, {
        path: 'objects/labES',
        component: () => import('pages/University/Equipment/labES'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Материально-техническое обеспечение и оснащённость образовательного процесса', link: '/sveden/objects' },
            { name: 'Лаборатория Передачи дискретных сообщений и документальной электросвязи' }
          ]
        }
      }, {
        path: 'objects/labMTS',
        component: () => import('pages/University/Equipment/labMTS'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Материально-техническое обеспечение и оснащённость образовательного процесса', link: '/sveden/objects' },
            { name: 'Лаборатория Многоканальных телекоммуникационных систем' }
          ]
        }
      }, {
        path: 'objects/labSMU',
        component: () => import('pages/University/Equipment/labSMU'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Материально-техническое обеспечение и оснащённость образовательного процесса', link: '/sveden/objects' },
            { name: 'Лаборатория Современных методов управления' }
          ]
        }
      }, {
        path: 'objects/biblio',
        component: () => import('pages/University/Equipment/Biblio'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Материально-техническое обеспечение и оснащённость образовательного процесса', link: '/sveden/objects' },
            { name: 'Сектор библиотечного обслуживания' }
          ]
        }
      }, {
        path: 'budget',
        component: () => import('pages/University/Finance.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Финансово-хозяйственная деятельность' }
          ]
        }
      }, {
        path: 'ovz',
        component: () => import('pages/University/AccessibleEnvironment.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Доступная среда' }
          ]
        }
      }, {
        path: 'paid_edu',
        component: () => import('pages/University/PayService.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Платные образовательные услуги' }
          ]
        }
      }, {
        path: 'cisco',
        component: () => import('pages/University/Cisco.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Локальная сетевая академия Cisco' }
          ]
        }
      }, {
        path: 'qualific_imp',
        component: () => import('pages/University/Qualify.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Курсы повышения квалификации' }
          ]
        }
      }, {
        path: 'unify',
        component: () => import('pages/University/Unify.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Учебный центр Unify Communications' }
          ]
        }
      }, {
        path: 'comp-courses',
        component: () => import('pages/University/CompCourses.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Компьютерные курсы' }
          ]
        }
      }, {
        path: 'prepare-courses',
        component: () => import('pages/University/PrepareCourses.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Подготовительные курсы' }
          ]
        }
      }, {
        path: 'dpo',
        component: () => import('pages/University/DPO.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Программы по ДПО' }
          ]
        }
      }, {
        path: 'partners',
        component: () => import('pages/University/Partners.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Партнеры' }
          ]
        }
      }, {
        path: 'inter',
        component: () => import('pages/University/InternationalCooperation.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
            { name: 'Международное сотрудничество' }
          ]
        }
      }, {
        path: 'anti-corruption',
        component: () => import('pages/University/AntiCorruption.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Сведения об образовательной организации', link: '/sveden/common' },
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
            { name: 'Абитуриенту', link: '/abiturient' },
            { name: 'Приемная комиссия' }
          ]
        }
      }, {
        path: 'abiturient/educationForms',
        component: () => import('pages/Abiturient/EducationForms.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Абитуриенту', link: '/abiturient' },
            { name: 'Формы обучения' }
          ]
        }
      }, {
        path: 'abiturient/additionalCourses',
        component: () => import('pages/Abiturient/AdditionalCourses.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Абитуриенту', link: '/abiturient' },
            { name: 'Подготовительные курсы' }
          ]
        }
      }, {
        path: 'abiturient/openDoor',
        component: () => import('pages/Abiturient/OpenDoor.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Абитуриенту', link: '/abiturient' },
            { name: 'День открытых дверей' }
          ]
        }
      }, {
        path: 'students/electronic-education',
        component: () => import('pages/Student/ElectronicEducation.vue'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Студенту', link: '/students' },
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
        component: () => import('pages/University/Documents.vue'),
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
            { name: 'Стипендии и меры поддержки обучающихся' }
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
      }, {
        path: 'faculties/infocommunications',
        component: () => import('pages/University/Faculties/Infocommunications'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Факультет инфокоммуникаций' }
          ]
        }
      }, {
        path: 'faculties/itss',
        component: () => import('pages/University/Faculties/Itss'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Кафедра инфокоммуникационных технологий и систем связи' }
          ]
        }
      }, {
        path: 'faculties/ivt',
        component: () => import('pages/University/Faculties/Ivt'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Кафедра информатики и вычислительной техники' }
          ]
        }
      }, {
        path: 'faculties/onp',
        component: () => import('pages/University/Faculties/Onp'),
        meta: {
          breadcrumbs: [
            { name: 'Главная', link: '/' },
            { name: 'Кафедра общенаучной подготовки' }
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
