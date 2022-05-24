export default [
  { name: 'Сведения об образовательной организации', menu: [
      { name: 'Основные сведения', route: '/sveden/common', active: true },
      { name: 'Структура и органы управления', route: '/sveden/struct', active: true },
      { name: 'Контакты', route: '/sveden/contact', active: true },
      { name: 'Образование', route: '/sveden/education', active: true },
      { name: 'Доступная среда', route: '/sveden/ovz', active: true },
      { name: 'Документы', route: '/sveden/document', active: true },
      { name: 'Руководство', route: '/sveden/rulers', active: true },
      { name: 'Сотрудники', route: '/sveden/employees', active: true },
      { name: 'Партнеры', route: '/sveden/partners', active: true },
      { name: 'Материально-техническое обеспечение и оснащённость образовательного процесса', route: '/sveden/objects', active: true },
      { name: 'Работа в СКФ МТУСИ', route: '/sveden/works', active: true },
      { name: 'Международное сотрудничество', route: '/sveden/inter', active: true },
      { name: 'Финансово-хозяйственная деятельность', route: '/sveden/budget', active: true },
      { name: 'Платные образовательные услуги', route: '/sveden/paid_edu', active: true },
      { name: 'Противодействие коррупции', route: '/sveden/anti-corruption', active: true },
      { name: 'Образовательные стандарты и требования', route: '/sveden/eduStandarts', active: true  },
      { name: 'Факультет инфокоммуникаций', route: '/sveden/faculties/infocommunications', active: true },
      { name: 'Кафедра инфокоммуникационных технологий и систем связи', route: '/sveden/faculties/itss', active: true },
      { name: 'Кафедра информатики и вычислительной техники', route: '/sveden/faculties/ivt', active: true },
      { name: 'Кафедра общенаучной подготовки', route: '/sveden/faculties/onp', active: true },
    ]},
  { name: 'Абитуриенту', menu: [
    { name: 'Общая информация', route: '/sveden/abiturient', active: true },
    { name: 'Приемная комиссия', route: '/sveden/abiturient/join', active: true },
    { name: 'Формы обучения', route: '/sveden/abiturient/educationForms', active: true },
    { name: 'Подготовительные курсы', route: '/sveden/abiturient/additionalCourses', active: true },
    { name: 'День открытых дверей', route: '/sveden/abiturient/openDoor', active: true }
  ]},
  { name: 'Студенту', menu: [
    { name: 'Студентам', route: '/sveden/students', active: true },
    { name: 'Стипендии', route: '/sveden/grants', active: true },
    { name: 'График консультаций', route: '/sveden/students/consultations', active: true },
    { name: 'Работа', route: '/sveden/works', active: true },
    { name: 'Модульно-рейтинговая система', route: '/sveden/students/rating-system', active: true },
    { name: 'Электронное портфолио', route: '/sveden/students/portfolio', active: true },
    { name: 'Методические указания по подготовке ВКР', route: '/sveden/students/qualifying-works', active: true },
    { name: 'Расписание занятий', route: '/sveden/schedule', active: true },
    { name: 'Внеучебная деятельность', route: '/sveden/students/extracurricular', active: true },
    { name: 'Вакантные места для перевода', route: '/sveden/vacant', active: true },
    { name: 'Электронная образовательная среда', route: '/sveden/students/electronic-education', active: true },
    { name: 'Документы', route: '/sveden/students/documents', active: true },
    { name: 'Научная работа', route: '/sveden/students/scientific-work', active: true },
    { name: 'Оплата обучения', route: '/sveden/paid_edu', active: true }
  ]},
  { name: 'Медиа', menu: [
    // { name: 'Видео', route: '', active: false },
    { name: 'Новости', route: '/news', active: true },
    { name: 'События', route: '/sveden/events', active: true }
  ]},
  // { name: 'Атмосфера', menu: [
  //   { name: 'Клуб выпускников', route: '', active: false },
  //   { name: 'Музей СКФ МТУСИ', route: '', active: false },
  //   { name: 'Внеучебная деятельность', route: '', active: false }
  // ]},
]
