<script setup>
  import { useQuasar } from "quasar";
  import EssentialLink from "components/EssentialLink";

  const $q = useQuasar()

  const rulers = [
    {
      position: 'Директор',
      bio: 'Карасев Денис Николаевич',
      phone: '(863) 310-69-60',
      email: 'denis_karasev@skf-mtusi.ru',
      profile: 'http://skf-mtusi.ru/images/ruk/karasev.jpg'
    },
    {
      position: 'Заместитель директора по общим вопросам',
      bio: 'Манин Александр Анатольевич',
      phone: '(863) 310-69-60',
      email: 'mаnin@skf-mtusi.ru',
      profile: 'http://skf-mtusi.ru/images/ruk/Manin.jpg'
    },
    {
      position: 'Заместитель директора по учебно-воспитательной работе',
      bio: 'Жуковский Александр Георгиевич',
      phone: '(863) 310-69-60',
      email: 'zhukоvskiy@skf-mtusi.ru',
      profile: 'http://www.skf-mtusi.ru/images/ruk/Zhukovskiy.jpg'
    },
    {
      position: 'Главный бухгалтер',
      bio: 'Демченко Лариса Юрьевна',
      phone: '(863) 307-61-91',
      email: 'buhgаlteria@skf-mtusi.ru',
      profile: 'http://skf-mtusi.ru/images/ruk/Osipovich.jpg'
    }
  ]

  const rulersTableColumns = [
    { name: 'bio', field: 'bio', label: 'Ф.И.О. преподавателя, реализующего программу', align: 'left' },
    { name: 'position', field: 'position', label: 'Должность преподавателя', align: 'left' },
    { name: 'disciplines', field: 'disciplines', label: 'Перечень преподаваемых дисциплин', align: 'left' },
    { name: 'lvlEdu', field: 'lvlEdu', label: 'Уровень образования', align: 'left' },
    { name: 'qualification', field: 'qualification', label: 'Квалификация', align: 'left' },
    { name: 'positionEdu', field: 'positionEdu', label: 'Учёная степень педагогического работника (при наличии)', align: 'left' },
    { name: 'rankEdu', field: 'rankEdu', label: 'Учёное звание педагогического работника (при наличии)', align: 'left' },
    { name: 'direction', field: 'direction', label: 'Наименование направления подготовки и (или) специальности педагогического работника', align: 'left' },
    { name: 'qualificationUp', field: 'qualificationUp', label: 'Сведения о повышении квалификации и (или) профессиональной переподготовке педагогического работника (при наличии)', align: 'left' },
    { name: 'mainExp', field: 'mainExp', label: 'Общий стаж работы', align: 'left' },
    { name: 'directionExp', field: 'directionExp', label: 'Стаж работы педагогического работника по специальности', align: 'left' }
  ]
  const rulersTableRows = [
    {
      bio: 'Барабанова Виктория Борисовна',
      position: 'Профессор',
      disciplines: 'Физическая культура; Оздоровительная и лечебная физическая культура; Спортивные секции ОФП',
      lvlEdu: 'Высшее профессиональное',
      qualification: 'преподаватель физической культуры',
      positionEdu: 'Доктор филосовских наук, присуждена в 2010 г.',
      rankEdu: 'Доцент',
      direction: '',
      qualificationUp: 'Отсутствуют.',
      mainExp: '',
      directionExp: ''
    },
    {
      bio: 'Безуглов Юрий Дмитриевич',
      position: 'Доцент',
      disciplines: 'Производственная практика; ВКР',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'радиоинженер',
      positionEdu: 'Кандидат физико-математических наук',
      rankEdu: 'Доцент',
      direction: 'сервис бытовой радиоэлектронной аппаратуры',
      qualificationUp: 'Отсутствует',
      mainExp: '',
      directionExp: ''
    },
    {
      bio: 'Бинеев Энвер Абдулхакович',
      position: 'Профессор',
      disciplines: 'Безопасность жизнедеятельности',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'химик-физик',
      positionEdu: 'Кандидат химических наук',
      rankEdu: 'Профессор',
      direction: 'химия',
      qualificationUp: '1. Удостоверение №80300 от 19.04.2017г., МТУСИ;\n' +
        '2. Удостоверение № 18/2017 от 09.09.2017г., ДГТУ\n' +
        '3. Сертификат от 14.09.2018г., 40ч., ДГТУ\n' +
        '4. Удостоверение №81425 от 15.03.2019г., МТУСИ;\n' +
        '5. Удостоверение №81783 от 08.09.2020г., МТУСИ',
      mainExp: '53',
      directionExp: '50'
    },
    {
      bio: 'Болдырихин Николай Вячеславович',
      position: 'Доцент',
      disciplines: 'Проектирование и эксплуатация сетей связи; Сети и системы радиосвязи и средства их информационной защиты; ВКР',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'инженер',
      positionEdu: 'Кандидат технических наук',
      rankEdu: 'Отсутствует',
      direction: 'радиотехника.',
      qualificationUp: '1. Удостоверение №80290 от 19.04.2017г., МТУСИ;\n' +
        '2. Удостоверение № 80059 от 09.03.2017г.,МТУСИ',
      mainExp: '25',
      directionExp: '17'
    },
    {
      bio: 'Борисов Борис Петрович',
      position: 'Доцент',
      disciplines: 'Введение в специальность; Защита персональных данных; Методы и средства измерений в телекоммуникационных системах;\n' +
        'Многоканальные телекоммуникационные системы; Многоканальные цифровые системы передачи и средства их защиты;\n' +
        'Основы построения инфокоммуникационных систем и сетей; Приемопередающие устройства; Протоколы и интерфейсы в инфокоммуникационных системах;\n' +
        'Метрология; Стандартизация и сертификация; Электропитание компьютерных систем и вычислительных комплексов;\n' +
        'Основы информационной безопасности сетей и систем; Спутниковые и наземные системы радиосвязи; Проектирование и эксплуатация систем передачи;\n' +
        'ВКР',
      lvlEdu: 'Высшее, специалитет.',
      qualification: 'военный инженер по радиотехнике',
      positionEdu: 'Кандидат технических наук',
      rankEdu: 'Доцент',
      direction: 'радиотехнические командно-измерительные системы.',
      qualificationUp: '1. Сертификат № 9661от 24.06.2016г., Учебный центр «Алкатель-Лусент»\n' +
        '2.Удостоверение № 80292 от 19.04.2017г., МТУСИ\n' +
        '3.Удостоверение № 81184 от 27.10.2018г., МТУСИ\n' +
        '4.Удостоверение № 81405 от 28.02.2019г., МТУСИ\n' +
        '5. Удостоверение №81784 от 08.09.2020г., МТУСИ',
      mainExp: '46',
      directionExp: '36'
    },
    {
      bio: 'Бородин Алексей Викторович',
      position: 'Доцент',
      disciplines: 'Теория электрических цепей; Физические основы электроники; Цифровая обработка сигналов; Электротехника',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'радиофизик',
      positionEdu: 'Кандидат физико-математических наук',
      rankEdu: 'Доцент',
      direction: 'радиофизика и электроника',
      qualificationUp: '1.Сертификат №9664 от 24.06. 2016г., Учебный центр «Алкатель — Лусент»\n' +
        '2.Удостоверение №80293 от 19.04.2017г., МТУСИ\n' +
        '3.Удостоверение №81209 от 10.11.2018г., МТУСИ\n' +
        '4.Удостоверение №81427 от 15.03.2019г., МТУСИ',
      mainExp: '27',
      directionExp: '17'
    },
    {
      bio: 'Гаевская Любовь Александровна',
      position: 'Старший преподаватель',
      disciplines: 'Физическая культура; Оздоровительная и лечебная физическая культура; Спортивные секции; ОФП',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'специалист по физической культуре и спорту',
      positionEdu: 'Отсутствует',
      rankEdu: 'Отсутствует',
      direction: 'физическая культура и спорт',
      qualificationUp: '1.Удостоверение №80294 от 19.04.2017г., МТУСИ;\n' +
        '2. Удостоверение № 612405608066 от 10.04.2017г., ООО «Центр профессионального образования «Развитие».\n' +
        '3.Удостоверение №81210 от 10.11.2018г., МТУСИ;\n' +
        '4.Удостоверение №81428 от 15.03.2019г., МТУСИ;',
      mainExp: '19',
      directionExp: '16'
    },
    {
      bio: 'Головина Ирина Витальевна',
      position: 'Доцент',
      disciplines: 'Экономика',
      lvlEdu: 'Высшее, специалитет  ',
      qualification: 'экономист, преподаватель политической экономии',
      positionEdu: 'Кандидат экономических наук',
      rankEdu: 'Доцент',
      direction: 'политическая экономия.',
      qualificationUp: '1. Сертификат № 101067049 от 21.11.2017 Открытый университет «Интуит», г. Москва\n' +
        '2. Удостоверение №81211 от 10.11.2018г., МТУСИ\n' +
        '3. Удостоверение №81429 от 15.03.2019г., МТУСИ\n' +
        '4. Удостоверение №81786 от 08.09.2020г., МТУСИ',
      mainExp: '46',
      directionExp: '46'
    },
    {
      bio: 'Головской Василий Андреевич',
      position: 'Старший научный сотрудник',
      disciplines: 'Отсутствует',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'Инженер',
      positionEdu: 'Кандидат технических наук',
      rankEdu: 'Доцент',
      direction: 'Радиотехника.',
      qualificationUp: 'Удостоверение № 2453 от 22.07.2016г., Краснодарское высшее военное училище им. ген. С.М. Штеменко МО РФ',
      mainExp: '21',
      directionExp: '9'
    },
    {
      bio: 'Докучаев Сергей Аркадьевич',
      position: 'Старший преподаватель',
      disciplines: 'Алгебра и геометрия; Анализ случайных процессов; Аналитическая геометрия и линейная алгебра;\n' +
        'Основы теории массового обслуживания; Теория вероятностей и математическая статистика; Теория случайных процессов',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'математик-прикладник',
      positionEdu: 'Отсутствует',
      rankEdu: 'Отсутствует',
      direction: 'математика',
      qualificationUp: '1.Сертификат №100852060 от 04.03.2015г., «Интуит», г. Москва\n' +
        '2. Удостоверение № 80298 от 19.04. 2017г., МТУСИ\n' +
        '3. Удостоверение № 81215 от 10.11. 2018г., МТУСИ\n' +
        '4. Удостоверение № 81431 от 15.03. 2019г., МТУСИ',
      mainExp: '23',
      directionExp: '23'
    },
    {
      bio: 'Елисеев Александр Вячеславович',
      position: 'Профессор',
      disciplines: 'Преддипломная практика; Производственная практика; ВКР',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'радиоинженер; офицер с высшим военным образованием инженера-исследователя',
      positionEdu: 'Доктор технических наук',
      rankEdu: 'Доцент',
      direction: 'радиотехнические системы комплексов',
      qualificationUp: 'Отсутствует',
      mainExp: '39',
      directionExp: '9'
    },
    {
      bio: 'Енгибарян Ирина Алешаевна',
      position: 'Доцент',
      disciplines: 'Линии радиосвязи и методы их защиты; Направляющие среды в сетях электросвязи и методы их защиты;\n' +
        'Направляющие среды электросвязи; Основы информационной безопасности сетей и систем; Основы информационной безопасности;\n' +
        'Многоканальные цифровые системы передачи и средства их защиты; ВКР',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'инженер; преподаватель высшей школы.',
      positionEdu: 'Кандидат технических наук',
      rankEdu: 'Отсутствует',
      direction: '1. Бытовая радиоэлектронная аппаратура.\n' +
        '2. Педагогика высшей школы.',
      qualificationUp: '1. Удостоверение № 80065 от 09.03.2017г., МТУСИ\n' +
        '2. Удостоверение №80299 от 19.04.2017г., МТУСИ.\n' +
        '3. Удостоверение №81187 от 27.10.2018г., МТУСИ.\n' +
        '4. Удостоверение №81408 от 28.02.2019г., МТУСИ.',
      mainExp: '18',
      directionExp: '11'
    },
    {
      bio: 'Ершов Валерий Васильевич',
      position: 'Доцент',
      disciplines: 'Метрология, стандартизация и сертификация; Метрология, стандартизация и сертификация в инфокоммуникациях;\n' +
        'Многоканальные цифровые системы передачи и средства их защиты; Электропитание компьютерных систем и вычислительных комплексов;\n' +
        'Электропитание устройств и систем телекоммуникаций; Проектирование и эксплуатация систем передачи; \n' +
        'Сети электросвязи и методы их защиты; Теория телетрафика; ВКР',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'военный инженер по электронике',
      positionEdu: 'Кандидат технических наук',
      rankEdu: 'Доцент',
      direction: 'Автоматизированные системы управления и контроля',
      qualificationUp: '1.Удостоверение №80300 от 19.04.2017г., МТУСИ\n' +
        '2.Удостоверение №81188 от 27.10.2018г., МТУСИ\n' +
        '3.Удостоверение №81409 от 28.02.2019г., МТУСИ\n' +
        '4. Удостоверение №81787 от 08.09.2020г., МТУСИ',
      mainExp: '53',
      directionExp: '21'
    },
    {
      bio: 'Ефимов Сергей Викторович',
      position: 'Доцент',
      disciplines: 'Основы теории и методы оптимизации; Математика',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'математик-преподаватель',
      positionEdu: 'Кандидат физико-математических наук',
      rankEdu: 'Доцент',
      direction: 'математика.',
      qualificationUp: '1.Удостоверение №80301 от 19.04.2017г., МТУСИ\n' +
        '2.Удостоверение №81216 от 10.11.2018г., МТУСИ\n' +
        '3.Удостоверение №81432 от 15.03.2019г., МТУСИ',
      mainExp: '39',
      directionExp: '39'
    },
    {
      bio: 'Жуковский Александр Георгиевич',
      position: 'Заместитель директора по учебно-воспитательной работе, профессор',
      disciplines: 'Сети и системы радиосвязи и средства их информационной защиты; Основы информационной безопасности;\n' +
        'Основы информационной безопасности сетей и систем; Спутниковые и наземные системы радиосвязи; Технологии цифрового телерадиовещания',
      lvlEdu: 'Высшее, специалитет',
      qualification: '1. офицер с высшим военно-специальным образованием военного радиоинженера;\n' +
        '2. специалист по информационным технологиям в сфере информационного менеджмента;\n' +
        '3.экономист.',
      positionEdu: 'Доктор политических наук, кандидат технических наук',
      rankEdu: 'Доцент',
      direction: '1. Радиотехнические системы комплексов.\n' +
        '2. Информационные системы.\n' +
        '3. Бухгалтерский учёт и аудит.',
      qualificationUp: '1. Удостоверение № 612400001923 № 59.8-24-2215 от 20.10.2016г., ДГТУ\n' +
        '2.Удостоверение №81190 от 27.10.2018г., МТУСИ\n' +
        '3. Удостоверение № 612400009298 № 2-1652 от 15.02.2019г., ДГТУ\n' +
        '4.Удостоверение №81411 от 28.02.2019г., МТУСИ',
      mainExp: '42',
      directionExp: '23'
    },
    {
      bio: 'Жуковский Денис Александрович',
      position: 'доцент',
      disciplines: 'Искусство деловых отношений; Маркетинг в отрасли инфокоммуникаций; \n' +
        'Основы организационно-правового обеспечения информационной безопасности сетей и систем; Политология;\n' +
        'Правоведение; Производственный менеджмент; Социология; Экономика отрасли инфокоммуникаций',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'экономист; инженер.',
      positionEdu: 'Кандидат политических наук',
      rankEdu: 'Отсутствует',
      direction: '1. Финансы и кредит.\n' +
        '2. Бытовая радиоэлектронная аппаратура.',
      qualificationUp: '2. Удостоверение № 612405326199, рег. № 0021-УД от 28.02.2017г., ИУБиП;\n' +
        '3. Удостоверение № 612400006970, рег. № 1-5207 от 25.06.2018г., ДГТУ;\n' +
        '4. Удостоверение № 612400007048, рег. № 1-5286 от 29.06.2018г., ДГТУ;\n' +
        '5. Удостоверение № 612400006860, рег. № 1-5098 от 29.06.2018г., ДГТУ;\n' +
        '6. Удостоверение № 612400007934, рег. № 2-734 от 28.09.2018г., ДГТУ;\n' +
        '7. Удостоверение РО РИА, рег. № 152-300 от 28.09.2018г., РРО ООО «»Российская инженерная академия»";\n' +
        '8. Удостоверение № 81217 от 10.11.2018г., МТУСИ\n' +
        '9. Удостоверение № 81433 от 15.03.2019г., МТУСИ',
      mainExp: '11',
      directionExp: '11'
    },
    {
      bio: 'Колдынская Лариса Михайловна',
      position: 'Заведующий СУМР,\n' +
        'ст. преподаватель',
      disciplines: 'Иностранный язык',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'учитель немецкого языка',
      positionEdu: 'Отсутствует',
      rankEdu: 'Отсутствует',
      direction: 'Иностранные языки.',
      qualificationUp: '1. Удостоверение №80311 от 19.04.2017г., МТУСИ\n' +
        '2. Удостоверение №81249 от 10.11.2018г., МТУСИ\n' +
        '3. Удостоверение №81434 от 15.03.2019г., МТУСИ\n' +
        '4. Удостоверение №81788 от 08.09.2020г., МТУСИ',
      mainExp: '58',
      directionExp: '53'
    },
    {
      bio: 'Конкин Борис Борисович',
      position: 'Заведующий кафедрой, доцент',
      disciplines: 'Физика; Электромагнитные поля и волны',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'учитель физики; радиофизик.',
      positionEdu: 'Кандидат физико-математических наук',
      rankEdu: 'Доцент',
      direction: '1. Физика.\n' +
        '2. Радиофизика.',
      qualificationUp: '1. Удостоверение № 612404187102 от 19.06.2016г., Ростовский институт защиты предпринимателя.\n' +
        '2. Удостоверение № 80304 от 19.04. 2017г., МТУСИ.\n' +
        '3. Удостоверение №81220 от 10.11.2018г., МТУСИ\n' +
        '4. Удостоверение №81435 от 15.03.2019г., МТУСИ\n' +
        '5. Удостоверение №81789 от 08.09.2020г., МТУСИ',
      mainExp: '47',
      directionExp: '46'
    },
    {
      bio: 'Константинова Яна Борисовна',
      position: 'Доцент',
      disciplines: 'Физика; Физика (спецглавы)',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'физика',
      positionEdu: 'Кандидат физико-математических наук',
      rankEdu: 'Доцент',
      direction: 'Преподаватель физики.',
      qualificationUp: '1. Удостоверение № 80305 от 19.04.2017г., МТУСИ.\n' +
        '2. Удостоверение №81205 от 10.11.2018г., МТУСИ\n' +
        '3. Удостоверение №81436 от 15.03.2019г., МТУСИ',
      mainExp: '30',
      directionExp: '29'
    },
    {
      bio: 'Коршун Анна Михайловна',
      position: 'Доцент',
      disciplines: 'Экология',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'химик',
      positionEdu: 'Кандидат географических наук',
      rankEdu: 'Отсутствует',
      direction: 'химия',
      qualificationUp: '1. Удостоверение № 80308 от 19.04.2017г., МТУСИ\n' +
        '2. Сертификат № 101082907 от 10.08.2017г., «Интуит», г. Москва\n' +
        '3. Удостоверение № 81193 от 27.10.2018г., МТУСИ\n' +
        '4. Удостоверение № 81413 от 28.02.2019г., МТУСИ',
      mainExp: '41',
      directionExp: '25'
    },
    {
      bio: 'Костецкая Галина Сергеевна',
      position: 'Доцент',
      disciplines: 'Высшая математика; Элементы теории аналитических функций и преобразование Лапласа; Теория функций комплексного переменного',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'математик, преподаватель',
      positionEdu: 'Кандидат физико-математических наук',
      rankEdu: 'Доцент',
      direction: 'математика',
      qualificationUp: '1. Удостоверение №80309 от 19.04.2017г., МТУСИ\n' +
        '1. Удостоверение № 81221 от 10.11.2018г., МТУСИ\n' +
        '1. Удостоверение № 81437 от 15.03.2019г., МТУСИ',
      mainExp: '38',
      directionExp: '37'
    },
    {
      bio: 'Лабунько Олег Степанович',
      position: 'Доцент',
      disciplines: 'Многоканальные телекоммуникационные системы; Метрология, стандартизация и сертификация в инфокоммуникациях;\n' +
        'Методы и средства измерений в телекоммуникационных системах; Протоколы и интерфейсы в инфокоммуникационных системах;\n' +
        'Сетевые технологии высокоскоростной передачи данных; Системы радиосвязи с подвижными объектами; Преддипломная практика; ВКР',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'инженер радиосвязи и радиовещания',
      positionEdu: 'Кандидат физико-математических наук',
      rankEdu: 'Доцент',
      direction: 'Радиосвязь и радиовещание',
      qualificationUp: 'Отсутствуют',
      mainExp: '49',
      directionExp: '17'
    },
    {
      bio: 'Ландышев Владимир Александрович',
      position: 'Доцент',
      disciplines: 'Преддипломная практика, Выпускная квалификационная работа, Производственная практика',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'инженер-кибернетик',
      positionEdu: 'Кандидат технических наук',
      rankEdu: 'Отсутствует',
      direction: 'Автоматизированные системы обработки информации и управления',
      qualificationUp: '1. Удостоверение № 612400009921, рег. № 2-2191 от 25.02.2019г., ДГТУ;\n' +
        '2. Удостоверение № 612400010759, рег. № 2-2961 от 23.03.2019г., ДГТУ;\n' +
        '3. Удостоверение № 612400012625, рег. № 2-4682 от 19.04.2019г., ДГТУ;',
      mainExp: '',
      directionExp: ''
    },
    {
      bio: 'Лобзенко Павел Владимирович',
      position: 'Доцент',
      disciplines: 'Основы компьютерного моделирования; Основы теории управления; Технологии языков программирования;\n' +
        'Разработка кроссплатформенных приложений С++; Автоматизация управления информационными системами',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'инженер-электрик',
      positionEdu: 'Кандидат технических наук',
      rankEdu: 'Доцент',
      direction: 'Системы управления летательных аппаратов.',
      qualificationUp: '1. Удостоверение №80312 от 19.04.2017г., МТУСИ\n' +
        '2. Удостоверение № 81195 от 27.10.2018г., МТУСИ\n' +
        '3. Удостоверение № 81414 от 28.02.2019г., МТУСИ',
      mainExp: '38',
      directionExp: '30'
    },
    {
      bio: 'Манин Александр Анатольевич',
      position: 'Заместитель директора по общим вопросам; доцент',
      disciplines: 'Методы и средства защиты компьютерной информации; Проектирование и эксплуатация сетей связи;\n' +
        'Сети электросвязи и методы их защиты; Системы коммутации; Метрология, стандартизация и сертификация в инфокоммуникациях;\n' +
        'Моделирование; Основы информационной безопасности; Направляющие среды электросвязи; ВКР',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'радиоинженер',
      positionEdu: 'Кандидат технических наук',
      rankEdu: 'Доцент',
      direction: 'Радиотехнические средства',
      qualificationUp: '1. Сертификат №9658 от 24.06.2016г., Учебный центр Алкатель — Лусент»\n' +
        '2. Удостоверение №80067 от 09.03. 2017г., МТУСИ\n' +
        '3. Удостоверение №80313 от 19.04.2017г., МТУСИ\n' +
        '4. Удостоверение № 81416 от 28.02.2019г., МТУСИ\n' +
        '5. Удостоверение ПК № 0284582 от 06.06.2019г., АНО ДПО «Содействие»\n' +
        '6. Удостоверение ПК № 0532648 от 09.10.2020г., АНО ДПО «Содействие»',
      mainExp: '36',
      directionExp: '29'
    },
    {
      bio: 'Мозоль Александр Анатольевич',
      position: 'Старший научный сотрудник',
      disciplines: 'Отсутствует',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'радиоинженер.',
      positionEdu: 'Кандидат технических наук',
      rankEdu: 'Отсутствует',
      direction: 'Радиотехника',
      qualificationUp: 'Отсутствует',
      mainExp: '21',
      directionExp: '9'
    },
    {
      bio: 'Нерсесянц Альфред Аванесович',
      position: 'Профессор',
      disciplines: 'Моделирование; Мультисервисные сети связи; Сети связи; Теория телетрафика\n' +
        'Архетектура информационных систем; Технические средства и методы защиты информации; Основы криптографии; ВКР',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'радиоинженер',
      positionEdu: '\tДоктор технических наук',
      rankEdu: 'Старший научный сотрудник',
      direction: 'Конструирование и технология производства радиоаппаратуры',
      qualificationUp: '1. Удостоверение №80069 от 09.03.2017г., МТУСИ\n' +
        '2. Удостоверение №80315 от 19.04.2017г., МТУСИ\n' +
        '3. Удостоверение №81197 от 27.10.2018г., МТУСИ\n' +
        '4. Удостоверение №81417 от 28.02.2019г., МТУСИ\n' +
        '5. Удостоверение №81790 от 08.09.2020г., МТУСИ',
      mainExp: '61',
      directionExp: '59'
    },
    {
      bio: 'Панков Геннадий Климович',
      position: 'Старший преподаватель',
      disciplines: 'Проектирование и эксплуатация сетей связи; Системы документальной электросвязи; Производственная практика; ВКР',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'Радиоинженер',
      positionEdu: '	Отсутствует',
      rankEdu: '	Отсутствует',
      direction: 'радиотехнические системы комплексов',
      qualificationUp: 'Удостоверение №80316 от 19.04.2017г., МТУСИ',
      mainExp: '39',
      directionExp: '14'
    },
    {
      bio: 'Погорелов Вадим Алексеевич',
      position: 'профессор',
      disciplines: 'Производственная практика; ВКР',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'инженер-кибернетик',
      positionEdu: 'Доктор технических наук',
      rankEdu: 'Доцент',
      direction: '\tСистемы управления летательных аппаратов.',
      qualificationUp: 'Отстутствуют.',
      mainExp: '34',
      directionExp: '10'
    },
    {
      bio: 'Полякова Марианна Владимировна',
      position: 'Старший преподаватель',
      disciplines: 'Производственная практика; ВКР',
      lvlEdu: 'Высшее, специалитет',
      qualification: '1. Инженер; 2. Исследователь. Преподаватель-исследователь',
      positionEdu: 'Отсутствует',
      rankEdu: 'Отсутствует',
      direction: '1. Многоканальные телекоммуникацион- ные системы; 2. Информатика и вычислительная техника',
      qualificationUp: '1.Удостоверение №612403761923 от 17.02.2017г., РГУПС\n' +
        '2.Удостоверение №772407163544 от 24.04.2019г., ГАУГН',
      mainExp: '10',
      directionExp: '7'
    },
    {
      bio: 'Решетникова Ирина Витальевна',
      position: 'Доцент, начальник ОНИР',
      disciplines: 'Введение в специальность; Вычислительная техника и информационные технологии; Общая теория связи;\n' +
        'Сети связи и системы коммутации; Системы коммутации; Системы коммутации на стационарных и подвижных сетях связи;\n' +
        'Технические средства и методы защиты информации; Моделирование; ВКР',
      lvlEdu: 'Высшее, специалитет;\n' +
        'Профессиональная переподготовка',
      qualification: 'инженер',
      positionEdu: '\tКандидат технических наук',
      rankEdu: 'Доцент',
      direction: '\t1. Сети связи и системы коммутации.\n' +
        '2. Администрирование, проектирование и сопровождение локальных вычислительных сетей',
      qualificationUp: '1.Удостоверение № 80070 от 09.03.2017г., МТУСИ ;\n' +
        '2.Удостоверение №80318 от 19.04.2017г., МТУСИ ;\n' +
        '3.Удостоверение № 612406194021 от 13.10.2017г., ФГБО УВО «РГУПС».\n' +
        '4.Удостоверение №81197 от 27.10.2018г., МТУСИ',
      mainExp: '11',
      directionExp: '11'
    },
    {
      bio: 'Светличная Наталия Олеговна',
      position: 'Доцент',
      disciplines: '\tИностранный язык; Русский язык и культура речи',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'учитель средней школы',
      positionEdu: 'Кандидат филологических наук',
      rankEdu: 'Отсутствует',
      direction: '\tФилология, иностранные языки.',
      qualificationUp: '1.Удостоверение №80320 от 19.04.2017г., МТУСИ\n' +
        '2.Удостоверение №81206 от 10.11.2018г., МТУСИ\n' +
        '3.Удостоверение №81424 от 15.03.2019г., МТУСИ',
      mainExp: '24',
      directionExp: '24'
    },
    {
      bio: 'Соколов Сергей Викторович',
      position: 'Заведующий кафедрой, профессор',
      disciplines: 'Электроника; Схемотехника ТКУ; Схемотехника',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'офицер с высшим военно-специальным образованием инженера-электрика.',
      positionEdu: 'Доктор технических наук',
      rankEdu: 'Профессор',
      direction: '\tЭксплуатация приборов и систем управления летательных аппаратов.',
      qualificationUp: '1.Удостоверение №80323 от 19.04.2017г., МТУСИ\n' +
        '2.Удостоверение №81223 от 10.11.2018г., МТУСИ\n' +
        '3.Удостоверение №81438 от 15.03.2019г., МТУСИ',
      mainExp: '46',
      directionExp: '38'
    },
    {
      bio: 'Ткачук Евгений Остапович',
      position: 'Доцент',
      disciplines: 'Вычислительная математика; Вычислительная техника; Инженерная и компьютерная графика; Компьютерная графика;\n' +
        'Методы отладки и тестирования ПП; Операционные системы; Проектирование сложных систем; Системы принятия решений;\n' +
        'Технологии баз данных ); Дизайн графических и пользовательских интерфейсов; WEB – программирование; Информационные системы управления предприятием;\n' +
        'Основы Компьютерного моделирования; Вычислительная техника и информационные технологии',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'офицер с высшим военно-специальным образованием инженера по радиоэлектронике; специалист в области предпринимательской деятельности, маркетинговых исследований и бизнес-планирования на предприятии.',
      positionEdu: 'Кандидат технических наук',
      rankEdu: 'Старший научный сотрудник',
      direction: '1. Системы управления и контроля.\n' +
        '2.Предприниматель- ская деятельность, маркетинговые исследования и бизнес-планирование на предприятии.',
      qualificationUp: '1. Удостоверение № 342404396011 регистр.№ 322 от 30.06.2017г., Волгоградский институт бизнеса\n' +
        '2. Удостоверение № 612405962990 регистр.№ 458-ДО-17 от 11.10.2017г.\n' +
        '3. Удостоверение № 612406200642 регистр.№ 445-ДО-17 от 11.10.2017г., частное профессиональное образовательное учреждение «Егорлыкский Колледж Южного Университета»\n' +
        '4.Удостоверение №81201 от 27.10.2018г. МТУСИ\n' +
        '5.Удостоверение №81419 от 28.02.2019г. МТУСИ',
      mainExp: '47',
      directionExp: '38'
    },
    {
      bio: 'Устименко Дмитрий Леонидович',
      position: 'Доцент',
      disciplines: '\tИстория; Философия; Психология и педагогика',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'философ преподаватель',
      positionEdu: 'Доктор философских наук',
      rankEdu: 'Доцент',
      direction: 'Философия',
      qualificationUp: '\t1.Удостоверение № 612403317503 от 28.11.2015г., ГБОУ ВПО РостГМУ Минздрава России\n' +
        '2.Удостоверение №81226 от 10.11.2018г. МТУСИ\n' +
        '3.Удостоверение №81441 от 15.03.2019г. МТУСИ',
      mainExp: '23',
      directionExp: '23'
    },
    {
      bio: 'Хорольский Евгений Михайлович',
      position: 'Доцент',
      disciplines: '\tИнформационные системы управления предприятиями; Методы и средства проектирование информационных систем Мультимедиа технологии и протоколы;\n' +
        'Периферийные устройства и интерфейсы; Процедурные языки программирования; Системное программное обеспечение; Системы принятия решений',
      lvlEdu: 'Высшее профессиональное',
      qualification: '\tинженер',
      positionEdu: '\tКандидат технических наук, присуждена в 2010 г.,',
      rankEdu: 'Доцент присвоено в 2020 г.,',
      direction: 'инженер',
      qualificationUp: 'Отсутствуют.',
      mainExp: '',
      directionExp: ''
    },
    {
      bio: 'Чикалов Андрей Николаевич',
      position: 'Доцент',
      disciplines: 'Технологии баз данных Микропроцессорные системы; Специализированные процессоры;\n' +
        'Вычислительная техника и информационные технологии; Схемотехника ТКУ',
      lvlEdu: 'Высшее, специалитет',
      qualification: 'военный инженер-электрик.',
      positionEdu: 'Кандидат технических наук',
      rankEdu: 'Доцент',
      direction: '\tСистемы управления летательных аппаратов и технологическое электро- оборудование к ним',
      qualificationUp: '1.Удостоверение № 80066 от 09.03.2017г., МТУСИ\n' +
        '2.Удостоверение №80326 от 19.04.2017г., МТУСИ\n' +
        '3.Удостоверение №81202 от 27.10.2018г. МТУСИ\n' +
        '4.Удостоверение №81421 от 28.02.2019г. МТУСИ\n' +
        '5.Удостоверение №81791 от 08.09.2020г. МТУСИ',
      mainExp: '49',
      directionExp: '41'
    },
    {
      bio: 'Швидченко Светлана Александровна',
      position: 'Доцент',
      disciplines: 'Информатика (спецглавы); Информатика; Методы и средства проектирования информационных систем;\n' +
        'Периферийные устройства и интерфейсы; Сетевые программные технологии; Управление и администрирование в информационных системах',
      lvlEdu: 'Высшее, специалитет;  Высшее, магистратура',
      qualification: 'инженер;\n' +
        'магистр.',
      positionEdu: 'Кандидат технических наук',
      rankEdu: 'Отсутствует',
      direction: '1. Информацион- ные системы и технологии.\n' +
        '2. Программная инженерия',
      qualificationUp: '1.Удостоверение №80327 от 19.04.2017г., МТУСИ\n' +
        '2.Удостоверение №81203 от 27.10.2018г. МТУСИ\n' +
        '3.Удостоверение №81422 от 28.02.2019г. МТУСИ',
      mainExp: '13',
      directionExp: '10'
    },
    {
      bio: 'Шухардин Александр Николаевич',
      position: 'Доцент',
      disciplines: '\tАрхитектура информационных систем; Основы криптографии; Сетевые технологии высокоскоростной передачи данных Системы документальной электросвязи\n' +
        'ВКР',
      lvlEdu: 'Высшее профессиональное',
      qualification: 'инженер-кибернетик',
      positionEdu: '\tКандидат технических наук, присуждена в 1999 г.,',
      rankEdu: 'Доцент присвоено в 2009 г.,',
      direction: 'инженер-кибернетик',
      qualificationUp: 'Отсутствуют.',
      mainExp: '',
      directionExp: ''
    },
    {
      bio: 'Юхнов Василий Иванович',
      position: 'Заведующий кафедрой, доцент',
      disciplines: 'Системы документальной электросвязи; Направляющие среды в сетях электросвязи; Основы построения инфокоммуникационных систем и сетей\n' +
        'Сети и системы радиосвязи; Теория автоматов; Сети и системы радиосвязи и средства их информационной защиты\n' +
        'Системы радиосвязи с подвижными объектами; Основы информационной безопасности; Основы информационной безопасности сетей и систем\n' +
        'ВКР',
      lvlEdu: 'Высшее, специалитет;\n' +
        'Высшее, магистратура;\n' +
        'Профессиональная переподготовка.',
      qualification: 'инженер-электромеханик; специалист по защите информации; специалист в области информационных технологий и вычислительной техники.',
      positionEdu: 'Кандидат технических наук',
      rankEdu: 'Доцент',
      direction: '1. Физико-энергетические установки.\n' +
        '2. Информатика и вычислительная техника\n' +
        '3. Защита информации.\n' +
        '4. Информатика, информационные технологии и вычислительная техника.',
      qualificationUp: '1. Сертификат №9660 от 24.06.2016г., Учебный центр «Алкатель-Лусент»\n' +
        '2. .Удостоверение № 612403112288, регистр.№ 142 от 12.02.2016г., ФГБОУ ВО РГУПС\n' +
        '3. Удостоверение №80076 от 09.03.2017г., МТУСИ.\n' +
        '4. Удостоверение №80325 от 19.04.2017г., МТУСИ\n' +
        '5. Сертификат № 18EDRUCLP001006 от 29.06.2018г., Moskow Training Center Huawei\n' +
        '6. Удостоверение №81227 от 10.11.2018г., МТУСИ.',
      mainExp: '33',
      directionExp: '25'
    }
  ]
</script>

<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col-12 q-my-xl">
        <span class="text-h3 text-grey-10">Руководство. Педагогический (научно-педагогический) состав</span>
      </div>
      <div class="col-12">
        <ul>
          <li><q-btn color="primary" flat to="/sveden/employees">Коллектив отдела научно-исследовательской работы</q-btn>
          </li>
          <li><q-btn color="primary" flat to="/sveden/employees">Коллектив кафедры инфокоммуникационных технологий и систем связи</q-btn></li>
          <li><q-btn color="primary" flat to="/sveden/employees">Коллектив кафедры информатики и вычислительной техники</q-btn></li>
          <li><q-btn color="primary" flat to="/sveden/employees">Коллектив кафедры общенаучной подготовки</q-btn></li>
        </ul>
      </div>
      <div class="col-12">
        <div class="row q-col-gutter-sm">
          <div class="col-md-6 col-12" v-for="ruler in rulers">
            <q-card flat bordered>
              <q-card-section :horizontal="!$q.screen.lt.md">
                <q-card-section class="col-md-9 col-12">
                  <q-card-section>
                    <span class="text-h6">Должность: </span>
                    <span class="text-subtitle1">{{ruler.position}}</span>
                  </q-card-section>
                  <q-card-section>
                    <span class="text-h5">{{ruler.bio}}</span>
                  </q-card-section>
                  <q-card-section>
                    <span class="text-h6"
                          v-if="
                            ruler.position.toLowerCase().split(' ').indexOf('директор') !== -1 ||
                            ruler.position.toLowerCase().split(' ').indexOf('директора') !== -1
                          "
                    >Приемная директора: </span>
                    <span class="text-subtitle1">Тел. {{ruler.phone}}</span>
                  </q-card-section>
                  <q-card-section>
                    <span class="text-h6">E-mail: </span>
                    <span class="text-subtitle1">
                      <a :href="`mailto:${ruler.email}`">{{ruler.email}}</a>
                    </span>
                  </q-card-section>
                </q-card-section>
                <q-img
                  class="col-md-3 col-12"
                  :src="ruler.profile"
                  height="360px"
                ></q-img>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-12 col-md-6">
            <essential-link
              title="Информации о персональном составе педагогических работников образовательной программы"
              link="http://www.skf-mtusi.ru/sveden/employees/op"
              icon="mdi-link-variant"
            ></essential-link>
          </div>
        </div>
      </div>
      <div class="col-12">
        <q-table
          :rows="rulersTableRows"
          :columns="rulersTableColumns"
          row-key="bio"
          wrap-cells
          :pagination="{
            rowsPerPage: 0
          }"
        ></q-table>
      </div>
    </div>
  </q-page>
</template>
