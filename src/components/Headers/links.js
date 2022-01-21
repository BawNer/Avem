export default [
  { name: 'Университет', menu: [
    { name: 'О вузе', route: '/p/about', active: true },
    { name: 'Структура', route: '/p/structure', active: true },
    { name: 'Контакты', route: '/p/contact', active: true },
    { name: 'Образование', route: '/p/education', active: true },
    { name: 'Доступная среда', route: '', active: false },
    { name: 'Документы', route: '/p/documents', active: true },
    { name: 'Руководство', route: '/p/rulers', active: true },
    { name: 'Сотрудники', route: '/p/employee', active: true },
    { name: 'Партнеры', route: '', active: false },
    { name: 'Оснащенность университета', route: '/p/equipment', active: true },
    { name: 'Работа в СКФ МТУСИ', route: '', active: false },
    { name: 'Международное сотрудничество', route: '', active: false },
    { name: 'Финансовая деятельность', route: '', active: false },
    { name: 'Платные образовательные услуги', route: '', active: false },
    { name: 'Противодействие коррупции', route: '', active: false },
    { name: 'Сведения об образовательной организации', route: '/p/infoeducation', active: true }
  ]},
  { name: 'Абитуриенту', menu: [
    { name: 'Общая информация', route: '/p/abiturient', active: true },
    { name: 'Приемная комиссия', route: '/p/abiturient/join', active: true },
    { name: 'Формы обучения', route: '/p/abiturient/educationForms', active: true },
    { name: 'Подготовительные курсы', route: '/p/abiturient/additionalCourses', active: true },
    { name: 'День открытых дверей', route: '/p/abiturient/openDoor', active: true }
  ]},
  { name: 'Студенту', menu: [
    { name: 'Студентам', route: '', active: false },
    { name: 'Стипендии', route: '', active: false },
    { name: 'График консультаций', route: '', active: false },
    { name: 'Работа', route: '/p/students/works', active: true },
    { name: 'Модульно-рейтинговая система', route: '', active: false },
    { name: 'Электронное портфолио', route: '', active: false },
    { name: 'Методические указания по подготовке ВКР', route: '', active: false },
    { name: 'Расписание занятий', route: '', active: false },
    { name: 'Внеучебная деятельность', route: '', active: false },
    { name: 'Вакантные места для перевода', route: '', active: false },
    { name: 'Электронная образовательная среда', route: '/p/students/electronic-education', active: true },
    { name: 'Документы', route: '', active: false },
    { name: 'Научная работа', route: '', active: false },
    { name: 'Оплата обучения', route: '', active: false }
  ]},
  { name: 'Медиа', menu: [
    { name: 'Видео', route: '', active: false },
    { name: 'Новости', route: '/news', active: true },
    { name: 'События', route: '', active: false },
    { name: 'Газета "Спектр"', route: '', active: false }
  ]},
  { name: 'Атмосфера', menu: [
    { name: 'Клуб выпускников', route: '', active: false },
    { name: 'Музей СКФ МТУСИ', route: '', active: false },
    { name: 'Внеучебная деятельность', route: '', active: false }
  ]},
]