<template>
  <q-page padding>
    <div class="row" :class="!$q.screen.lt.md ? 'q-mx-lg' : ''">
      <div class="col-12">
        <span class="text-h3 text-grey-10">Программы по ДПО</span>
      </div>
      <div class="col-12 q-my-md">
        <span class="text-h4 text-grey-10">Дополнительные профессиональные программы повышения квалификации</span>
      </div>
    </div>
    <div class="row">
      <div class="col-12 q-ma-xl">
        <span class="text-h5 text-grey-10">Программа №1</span>
      </div>
      <q-card class="q-mx-xl">
        <q-item>
          <q-item-avatar>
            <q-avatar size="64px">
              <q-icon name="mdi-pdf-box" color="red"></q-icon>
            </q-avatar>
          </q-item-avatar>
          <q-item-section class="text-body1">
            <q-item-label>ОП «Технологии цифрового телерадиовещания в стандарте DVB-T2»</q-item-label>
          </q-item-section>
        </q-item>
        <q-card-actions>
          <q-space></q-space>
            <q-btn flat type="a" color="primary" href="http://www.skf-mtusi.ru/files/dpo/OP_TCTRV.pdf" target="_blank">Читать</q-btn>
        </q-card-actions>
      </q-card>
    </div>
    <div class="row">
      <div class="col-10 q-mt-xl q-mx-xl">
        <div class="row">
          <div class="col"><span class="text-h4 text-primary">01.</span></div>
          <div class="col-11"><a href="http://www.skf-mtusi.ru/files/dpo/info_OP_TCTRV.pdf" target="_blank"><span class="text-primary text-h5">Пояснительная записка по ОП «Технологии цифрового телерадиовещания в стандарте DVB-T2»</span></a></div>
        </div>
      </div>
      <div class="col-10 q-mt-xl q-mx-xl">
        <div class="row q-mb-l">
          <div class="col"><span class="text-h4 text-primary">02.</span></div>
          <div class="col-11"><span class="text-h5">Перечень преподавателей:</span></div>
          <div class="col-11 offset-1">
            <ul>
              <li class="q-my-md">Жуковский Александр Георгиевич, профессор кафедры ИТСС, доктор политических наук, кандидат технических наук, доцент.</li>
              <li class="q-my-md">Борисов Борис Петрович, доцент кафедры ИТСС, кандидат технических наук, доцент.</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-10 q-mt-xl q-mx-xl"  v-for="(p, i) in program1_45" :key="i">
        <div class="row q-mb-l">
          <div class="col"><span class="text-h4 text-primary">0{{i+3}}.</span></div>
          <div class="col-11"><span class="text-h5">{{p.label}}</span></div>
          <div class="col-11 offset-1">
            <ul>
              <li v-for="(u,j) in p.list" 
              :key="j"
              class="q-my-md"
              ><a :href="u.link" target="_blank"><span class="text-primary">{{u.label}}</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 q-ma-xl">
        <span class="text-h5 text-grey-10">Программа №2</span>
      </div>
      <q-card class="q-mx-xl">
        <q-item>
          <q-item-avatar>
            <q-avatar size="64px">
              <q-icon name="mdi-pdf-box" color="red"></q-icon>
            </q-avatar>
          </q-item-avatar>
          <q-item-section class="text-body1">
            <q-item-label>ОП «Инженерная и компьютерная графика»</q-item-label>
          </q-item-section>
        </q-item>
        <q-card-actions>
          <q-space></q-space>
            <q-btn flat type="a" color="primary" href="http://www.skf-mtusi.ru/files/dpo/OP_engineering_graphics.pdf" target="_blank">Читать</q-btn>
        </q-card-actions>
      </q-card>
    </div>
    <div class="row">
      <div class="col-10 q-mt-xl q-mx-xl">
        <div class="row">
          <div class="col"><span class="text-h4 text-primary">01.</span></div>
          <div class="col-11"><a href="http://www.skf-mtusi.ru/files/dpo/info_OP_engineering_graphics.pdf" target="_blank"><span class="text-primary text-h5">Пояснительная записка к образовательной программе курсов повышения квалификации «Инженерная и компьютерная графика»</span></a></div>
        </div>
      </div>
      <div class="col-10 q-mt-xl q-mx-xl">
        <div class="row q-mb-l">
          <div class="col"><span class="text-h4 text-primary">02.</span></div>
          <div class="col-11"><span class="text-h5">Перечень преподавателей:</span></div>
          <div class="col-11 offset-1">
            <ul>
              <li class="q-my-md">Ткачук Евгений Остапович, доцент кафедры ИВТ, кандидат технических наук, старший научный сотрудник.</li>
              <li class="q-my-md">Жуковский Александр Георгиевич, профессор кафедры ИТСС, доктор политических наук, кандидат технических наук, доцент.</li>
              <li class="q-my-md">Швидченко Светлана Александровна, доцент кафедры ИВТ, кандидат технических наук.</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-10 q-mt-xl q-mx-xl"  v-for="(p, i) in program2_45" :key="i">
        <div class="row q-mb-l">
          <div class="col"><span class="text-h4 text-primary">0{{i+3}}.</span></div>
          <div class="col-11"><span class="text-h5">{{p.label}}</span></div>
          <div class="col-11 offset-1">
            <ul>
              <li v-for="(u,j) in p.list" 
              :key="j"
              class="q-my-md"
              ><a :href="u.link" target="_blank"><span class="text-primary">{{u.label}}</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 q-ma-xl">
        <span class="text-h5 text-grey-10">Программа №3</span>
      </div>
      <q-card class="q-mx-xl">
        <q-item>
          <q-item-avatar>
            <q-avatar size="64px">
              <q-icon name="mdi-pdf-box" color="red"></q-icon>
            </q-avatar>
          </q-item-avatar>
          <q-item-section class="text-body1">
            <q-item-label>ОП «Основы компьютерной грамотности»</q-item-label>
          </q-item-section>
        </q-item>
        <q-card-actions>
          <q-space></q-space>
            <q-btn flat type="a" color="primary" href="http://www.skf-mtusi.ru/files/dpo/OP_PC_literacy.pdf" target="_blank">Читать</q-btn>
        </q-card-actions>
      </q-card>
    </div>
    <div class="row">
      <div class="col-10 q-mt-xl q-mx-xl">
        <div class="row">
          <div class="col"><span class="text-h4 text-primary">01.</span></div>
          <div class="col-11"><a href="http://www.skf-mtusi.ru/files/dpo/info_OP_PC_literacy.pdf" target="_blank"><span class="text-primary text-h5">Пояснительная записка к образовательной программе курсов повышения квалификации «Основы компьютерной грамотности»</span></a></div>
        </div>
      </div>
      <div class="col-10 q-mt-xl q-mx-xl">
        <div class="row q-mb-l">
          <div class="col"><span class="text-h4 text-primary">02.</span></div>
          <div class="col-11"><span class="text-h5">Перечень преподавателей:</span></div>
          <div class="col-11 offset-1">
            <ul>
              <li class="q-my-md">Жуковский Александр Георгиевич, профессор кафедры ИТСС, доктор политических наук, кандидат технических наук, доцент.</li>
              <li class="q-my-md">Швидченко Светлана Александровна, доцент кафедры ИВТ, кандидат технических наук.</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-10 q-mt-xl q-mx-xl"  v-for="(p, i) in program2_45" :key="i">
        <div class="row q-mb-l">
          <div class="col"><span class="text-h4 text-primary">0{{i+3}}.</span></div>
          <div class="col-11"><span class="text-h5">{{p.label}}</span></div>
          <div class="col-11 offset-1">
            <ul>
              <li v-for="(u,j) in p.list" 
              :key="j"
              class="q-my-md"
              ><a :href="u.link" target="_blank"><span class="text-primary">{{u.label}}</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 q-ma-xl">
        <span class="text-h5 text-grey-10">Программа №4</span>
      </div>
      <q-card class="q-mx-xl">
        <q-item>
          <q-item-avatar>
            <q-avatar size="64px">
              <q-icon name="mdi-pdf-box" color="red"></q-icon>
            </q-avatar>
          </q-item-avatar>
          <q-item-section class="text-body1">
            <q-item-label>ОП «Конфигурирование IP-АТС Open Scape Office производства Unify»</q-item-label>
          </q-item-section>
        </q-item>
        <q-card-actions>
          <q-space></q-space>
            <q-btn flat type="a" color="primary" href="http://www.skf-mtusi.ru/files/dpo/OP_Unify.pdf" target="_blank">Читать</q-btn>
        </q-card-actions>
      </q-card>
    </div>
    <div class="row">
      <div class="col-10 q-mt-xl q-mx-xl">
        <div class="row">
          <div class="col"><span class="text-h4 text-primary">01.</span></div>
          <div class="col-11"><a href="http://www.skf-mtusi.ru/files/dpo/info_OP_Unify.pdf" target="_blank"><span class="text-primary text-h5">Пояснительная записка к образовательной программе курсов повышения квалификации «Принципы и технологии построения сетей с коммутацией пакетов и их конфигурирование»</span></a></div>
        </div>
      </div>
      <div class="col-10 q-mt-xl q-mx-xl">
        <div class="row q-mb-l">
          <div class="col"><span class="text-h4 text-primary">02.</span></div>
          <div class="col-11"><span class="text-h5">Перечень преподавателей:</span></div>
          <div class="col-11 offset-1">
            <ul>
              <li class="q-my-md">Сосновский Иван Александрович, доцент кафедры ИТСС, кандидат технических наук.</li>
              <li class="q-my-md">Манин Александр Анатольевич, доцент кафедры ИТСС, кандидат технических наук, доцент.</li>
              <li class="q-my-md">Юхнов Василий Иванович, доцент кафедры ИТСС, кандидат технических наук, доцент.</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-10 q-mt-xl q-mx-xl"  v-for="(p, i) in program2_45" :key="i">
        <div class="row q-mb-l">
          <div class="col"><span class="text-h4 text-primary">0{{i+3}}.</span></div>
          <div class="col-11"><span class="text-h5">{{p.label}}</span></div>
          <div class="col-11 offset-1">
            <ul>
              <li v-for="(u,j) in p.list" 
              :key="j"
              class="q-my-md"
              ><a :href="u.link" target="_blank"><span class="text-primary">{{u.label}}</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 q-ma-xl">
        <span class="text-h5 text-grey-10">Программа №5</span>
      </div>
      <q-card class="q-mx-xl">
        <q-item>
          <q-item-avatar>
            <q-avatar size="64px">
              <q-icon name="mdi-pdf-box" color="red"></q-icon>
            </q-avatar>
          </q-item-avatar>
          <q-item-section class="text-body1">
            <q-item-label>ОП «Принципы и технологии построения сетей с коммутацией пакетов и их конфигурирование»</q-item-label>
          </q-item-section>
        </q-item>
        <q-card-actions>
          <q-space></q-space>
            <q-btn flat type="a" color="primary" href="http://www.skf-mtusi.ru/files/dpo/OP_Network_technologies.pdf" target="_blank">Читать</q-btn>
        </q-card-actions>
      </q-card>
    </div>
    <div class="row">
      <div class="col-10 q-mt-xl q-mx-xl">
        <div class="row">
          <div class="col"><span class="text-h4 text-primary">01.</span></div>
          <div class="col-11"><a href="http://www.skf-mtusi.ru/files/dpo/info_OP_Network_technologies.pdf" target="_blank"><span class="text-primary text-h5">Пояснительная записка к образовательной программе курсов повышения квалификации «Принципы и технологии построения сетей с коммутацией пакетов и их конфигурирование»</span></a></div>
        </div>
      </div>
      <div class="col-10 q-mt-xl q-mx-xl">
        <div class="row q-mb-l">
          <div class="col"><span class="text-h4 text-primary">02.</span></div>
          <div class="col-11"><span class="text-h5">Перечень преподавателей:</span></div>
          <div class="col-11 offset-1">
            <ul>
              <li class="q-my-md">Сосновский Иван Александрович, доцент кафедры ИТСС, кандидат технических наук.</li>
              <li class="q-my-md">Манин Александр Анатольевич, доцент кафедры ИТСС, кандидат технических наук, доцент.</li>
              <li class="q-my-md">Юхнов Василий Иванович, доцент кафедры ИТСС, кандидат технических наук, доцент.</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-10 q-mt-xl q-mx-xl"  v-for="(p, i) in program2_45" :key="i">
        <div class="row q-mb-l">
          <div class="col"><span class="text-h4 text-primary">0{{i+3}}.</span></div>
          <div class="col-11"><span class="text-h5">{{p.label}}</span></div>
          <div class="col-11 offset-1">
            <ul>
              <li v-for="(u,j) in p.list" 
              :key="j"
              class="q-my-md"
              ><a :href="u.link" target="_blank"><span class="text-primary">{{u.label}}</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  setup() {
    const program1_45 = [{label: 'Примеры учебных материалов:', list:[
        {label: 'Проект DVB', link: 'http://www.skf-mtusi.ru/files/dpo/file_101.pdf'},
        {label: 'Сжатие цифрового видеопотока', link: 'http://www.skf-mtusi.ru/files/dpo/file_102.pdf'},
        {label: 'Транспортные пакеты и мультиплексирование', link: 'http://www.skf-mtusi.ru/files/dpo/file_103.pdf'},
        {label: 'Транспорт для ТВ', link: 'http://www.skf-mtusi.ru/files/dpo/file_104.pdf'},
        {label: 'Методические указания по выполнению лабораторной работы: АНАЛИЗ ТРАНСПОРТНОГО ПОТОКА MPEG С ИСПОЛЬЗОВАНИЕМ СПЕЦИАЛИЗИРОВАННОГО ПРИКЛАДНОГО ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ 4T2 CONTENT ANALYSER', link: 'http://www.skf-mtusi.ru/files/dpo/file_105.pdf'},
        {label: 'Методические указания по выполнению лабораторной работы: ИССЛЕДОВАНИЕ ПАРАМЕТРОВ СИГНАЛОВ ЭФИРНОГО ЦИФРОВОГО ТЕЛЕРАДИОВЕЩАНИЯ ПО ТЕХНОЛОГИИ DVB-T/T2 С ИСПОЛЬЗОВАНИЕМ ИЗМЕРИТЕЛЬНЫХ ПРИЕМНИКОВ', link: 'http://www.skf-mtusi.ru/files/dpo/file_106.pdf'},
        {label: 'Методические указания по выполнению лабораторной работы: ИССЛЕДОВАНИЕ СОСТАВА И СВОЙСТВ ТЕЛЕВИЗИОННЫХ МУЛЬТИПЛЕКСОВ DVB-T/T2 С ИСПОЛЬЗОВАНИЕМ ПРОФЕССИОНАЛЬНЫХ АНАЛИЗАТОРОВ ТРАНСПОРТНЫХ ПОТОКОВ MPEG-2/4', link: 'http://www.skf-mtusi.ru/files/dpo/file_107.pdf'},
        {label: 'Методические указания по выполнению лабораторной работы: ОПРЕДЕЛЕНИЕ ПАРАМЕТРОВ УСТАНОВКИ СПУТНИКОВЫХ АНТЕНН НА ОСНОВЕ СПЕЦИАЛИЗИРОВАННОГО ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ', link: 'http://www.skf-mtusi.ru/files/dpo/file_108.pdf'},
        {label: 'Комплексная лабораторная работа по исследованию принципов формирования телевизионного цифрового потока и его анализа', link: 'http://www.skf-mtusi.ru/files/dpo/file_109.pdf'}]
      },
      {label: 'Рекомендации индустриальных партнеров:', list:[
        {label: 'М. С. Сухарев — Рецензия на образовательную программу курсов повышения квалификации «Технологии цифрового телерадиовещания в стандарте DVB-T2»', link: 'http://www.skf-mtusi.ru/files/dpo/review_101.pdf'},
        {label: 'А. И. Барков — Рецензия на образовательную программу курсов повышения квалификации «Технологии цифрового телерадиовещания в стандарте DVB-T2»', link: 'http://www.skf-mtusi.ru/files/dpo/review_102.pdf'},
        {label: 'Д. И. Лелюк — Рецензия на образовательную программу курсов повышения квалификации «Технологии цифрового телерадиовещания в стандарте DVB-T2»', link: 'http://www.skf-mtusi.ru/files/dpo/review_103.pdf'}
      ]
      }]
    const program2_45 = [{label: 'Примеры учебных материалов:', list:[
        {label: 'Видеоподсистема компьютера', link: 'http://www.skf-mtusi.ru/files/dpo/file_201.pdf'},
        {label: 'Руководство пользователя «Графический редактор GIMP»', link: 'http://www.skf-mtusi.ru/files/dpo/file_202.pdf'},
        {label: 'Методическое пособие к проведению лабораторных работ: ГРАФИЧЕСКИЙ РЕДАКТОР GIMP', link: 'http://www.skf-mtusi.ru/files/dpo/file_203.pdf'},
        {label: 'Методические указания по выполнению лабораторных работ: КОМПЬЮТЕРНАЯ ГРАФИКА', link: 'http://www.skf-mtusi.ru/files/dpo/file_204.pdf'},
        {label: 'Методические указания по выполнению лабораторных работ: ПРОГРАММИРОВАНИЕ ГРАФИКИ', link: 'http://www.skf-mtusi.ru/files/dpo/file_205.pdf'},]
      },
      {label: 'Рекомендации индустриальных партнеров:', list:[
        {label: 'М. С. Сухарев — Рецензия на образовательную программу курсов повышения квалификации «Инженерная и компьютерная графика»', link: 'http://www.skf-mtusi.ru/files/dpo/review_201.pdf'},
        {label: 'А. И. Барков — Рецензия на образовательную программу курсов повышения квалификации «Инженерная и компьютерная графика»', link: 'http://www.skf-mtusi.ru/files/dpo/review_202.pdf'},
        {label: 'Д. И. Лелюк — Рецензия на образовательную программу курсов повышения квалификации «Технологии цифрового телерадиовещания в стандарте DVB-T2»', link: 'http://www.skf-mtusi.ru/files/dpo/review_203.pdf'}
      ]
      }]
      const program3_45 = [{label: 'Примеры учебных материалов:', list:[
        {label: 'Внешние интерфейсы компьютера', link: 'http://www.skf-mtusi.ru/files/dpo/file_301.pdf'},
        {label: 'Жесткие диски', link: 'http://www.skf-mtusi.ru/files/dpo/file_302.pdf'},
        {label: 'Оптические диски', link: 'http://www.skf-mtusi.ru/files/dpo/file_303.pdf'},
        {label: 'Флеш память', link: 'http://www.skf-mtusi.ru/files/dpo/file_304.pdf'},
        {label: 'Принтеры и Сканеры', link: 'http://www.skf-mtusi.ru/files/dpo/file_305.pdf'},
        {label: 'Шины компьютера', link: 'http://www.skf-mtusi.ru/files/dpo/file_306.pdf'},
        {label: 'Методические рекомендации по выполнению лабораторных работ: ИИФОРМАЦИОННЫЕ ТЕХНОЛОГИИ В ЭКОНОМИКЕ', link: 'http://www.skf-mtusi.ru/files/dpo/file_307.pdf'},
        {label: 'Методические указания для проведения лабораторных работ по дисциплине: ИНФОРМАТИКА', link: 'http://www.skf-mtusi.ru/files/dpo/file_308.pdf'},
        {label: 'Учебное пособие: ИНФОРМАЦИОННЫЕ ТЕХНОЛОГИИ В МЕНЕДЖМЕНТЕ', link: 'http://www.skf-mtusi.ru/files/dpo/file_309.pdf'}]
      },
      {label: 'Рекомендации индустриальных партнеров:', list:[
        {label: 'М. С. Сухарев — Рецензия на образовательную программу курсов повышения квалификации «Основы компьютерной грамотности»', link: 'http://www.skf-mtusi.ru/files/dpo/review_301.pdf'},
        {label: 'А. И. Барков — Рецензия на образовательную программу курсов повышения квалификации «Основы компьютерной грамотности»', link: 'http://www.skf-mtusi.ru/files/dpo/review_302.pdf'},
        {label: 'Д. И. Лелюк — Рецензия на образовательную программу курсов повышения квалификации «Основы компьютерной грамотности»', link: 'http://www.skf-mtusi.ru/files/dpo/review_303.pdf'}
      ]
      }]
      const program4_45 = [{label: 'Примеры учебных материалов:', list:[
        {label: 'Учебное пособие: КОНФИГУРИРОВАНИЕ ОФИСНЫХ СИСТЕМ OPEN SCAPE OFFICE ПРОИЗВОДСТВА SIEMENS ENTERPRISE COMMUNICATIONS', link: 'http://www.skf-mtusi.ru/files/dpo/file_401.pdf'}]
      },
      {label: 'Рекомендации индустриальных партнеров:', list:[
        {label: 'М. С. Сухарев — Рецензия на образовательную программу курсов повышения квалификации «Конфигурирование IP-АТС Open Scape Office производства Unify»', link: 'http://www.skf-mtusi.ru/files/dpo/review_401.pdf'},
        {label: 'А. И. Барков — Рецензия на образовательную программу курсов повышения квалификации «Конфигурирование IP-АТС Open Scape Office производства Unify»', link: 'http://www.skf-mtusi.ru/files/dpo/review_402.pdf'},
        {label: 'Д. И. Лелюк — Рецензия на образовательную программу курсов повышения квалификации «Конфигурирование IP-АТС Open Scape Office производства Unify»', link: 'http://www.skf-mtusi.ru/files/dpo/review_403.pdf'}
      ]
      }]
      const program5_45 = [{label: 'Примеры учебных материалов:', list:[
        {label: 'Транспортный уровень стека TCP/IP. Описание и принцип работы протоколов TCP и UDP', link: 'http://www.skf-mtusi.ru/files/dpo/file_501.pdf'},
        {label: 'Учебное пособие: СИСТЕМЫ КОММУТАЦИИ. ПРИНЦИПЫ И ТЕХНОЛОГИИ ПАКЕТНОЙ КОММУТАЦИИ', link: 'http://www.skf-mtusi.ru/files/dpo/file_502.pdf'}]
      },
      {label: 'Рекомендации индустриальных партнеров:', list:[
        {label: 'М. С. Сухарев — Рецензия на образовательную программу курсов повышения квалификации «Принципы и технологии построения сетей с коммутацией пакетов и их конфигурирование»', link: 'http://www.skf-mtusi.ru/files/dpo/review_501.pdf'},
        {label: 'А. И. Барков — Рецензия на образовательную программу курсов повышения квалификации «Принципы и технологии построения сетей с коммутацией пакетов и их конфигурирование»', link: 'http://www.skf-mtusi.ru/files/dpo/review_502.pdf'},
        {label: 'Д. И. Лелюк — Рецензия на образовательную программу курсов повышения квалификации «Принципы и технологии построения сетей с коммутацией пакетов и их конфигурирование»', link: 'http://www.skf-mtusi.ru/files/dpo/review_503.pdf'}
      ]
      }]
    return { program1_45,
             program2_45,
             program3_45,
             program4_45,
             program5_45}
  }
}
</script>

<style>
a{text-decoration: none;}
</style>