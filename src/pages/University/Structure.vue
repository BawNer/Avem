<template>
  <q-page padding>
    <div class="row">
      <div class="col-12 q-my-xl">
        <span class="text-h3 text-grey-9">Структура и органы управления</span><br />
        <span class="text-h3 text-grey-9">образовательной организацией</span>
      </div>
      <div class="col-md-10 col-12 offset-md-1">
        <q-img
          :ratio="16/9"
          src="images/struct_2022.jpg"
          fit="contain"
        ></q-img>
      </div>
      <div class="col-12">
        <q-table
          title="Подразделения"
          :rows="subdivisionRows"
          :columns="subdivisionColums"
          row-key="name"
          :pagination="{
            rowsPerPage: 0
          }"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="name" :props="props" v-html="props.row.name"></q-td>
              <q-td key="rulers" :props="props" v-html="props.row.rulers"></q-td>
              <q-td key="position" :props="props" v-html="props.row.position"></q-td>
              <q-td key="address" :props="props" v-html="props.row.address"></q-td>
              <q-td key="contacts" :props="props" v-html="props.row.contacts"></q-td>
              <q-td key="state" :props="props">
                <q-btn flat tag="a" :href="props.row.state">
                  <q-icon name="mdi-pdf-box" color="red"></q-icon>
                </q-btn>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
      <div class="col-12 q-mt-xl">
        <span class="text-h5 text-grey-9">Органы управления</span>
      </div>
      <div class="col-12 q-my-xl">
        <div class="row">
          <div class="col-md-4 col-12" v-for="manage in managment" :key="manage.name">
            <q-card flat>
              <q-card-section horizontal>
                <q-card-section>
                  <div class="text-overline">{{manage.position}}</div>
                  <div class="text-h6">{{manage.name}}</div>
                  <div class="text-caption text-primary q-my-sm">тел: {{manage.phone}}</div>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-h3 text-grey-10 q-my-xl">Ученый совет</div>
      <div class="col-12">
        <div class="row q-col-gutter-lg-md">
          <div class="col-md-4 col-12 q-my-md" v-for="ruler in rulers" :key="ruler.name">
            <q-list>
              <q-item-section>
                <q-item-label class="text-h6">{{ruler.position}}</q-item-label>
                <q-item-label class="text-h4">{{ruler.name}}</q-item-label>
              </q-item-section>
            </q-list>
          </div>
          <div class="col-12 text-right">
            <q-btn
              flat
              tag="a"
              color="primary"
              href="http://www.skf-mtusi.ru/files/info/struct/prus_II_21_22.pdf"
            >План работы Ученого cовета СКФ МТУСИ на II семестр 2021/2022 учебного года</q-btn>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
// import ATile from '../../components/ATile.vue'

const tiles = [
  { name: 'Ученый совет', to: '', state: false },
  { name: 'Факультет инфокоммуникаций', to: '', state: false },
  { name: 'Кафедра инфокоммуникации и технологий систем связи', to: '', state: false },
  { name: 'Кафедра информатики и вычислительной техники', to: '', state: false },
  { name: 'Кафедра общенаучной подготовки', to: '', state: false },
  { name: 'Бухгалтерия', to: '', state: false },
  { name: 'Организационно-технический отдел', to: '', state: false },
  { name: 'Отдел кадров', to: '', state: false },
  { name: 'Сектор учебно-методической работы', to: '', state: false },
  { name: 'Сектор библиотечного обслуживания', to: '', state: false },
  { name: 'Отдел научно-исследовательской работы', to: '', state: false },
  { name: 'Центр административно-хозяйственной работы', to: '', state: false }
]

const managment = [
  { position: 'Директор СКФ МТУСИ', name: 'Карасев Денис Николаевич ', phone: '+7 (863) 262-33-12', photo: '' },
  { position: 'Зам. директора по УВР', name: 'Жуковский Александр Георгиевич', phone: '+7 (863) 262-33-12', photo: '' },
  { position: 'Зам. директора по ОВ', name: 'Манин Александр Анатольевич', phone: '+7 (863) 262-33-12', photo: '' }
]

const rulers = [
  { position: 'Директор СКФ МТУСИ (председатель Ученого совета)', name: 'Карасев Денис Николаевич' },
  { position: 'Зам. директора по УВР', name: 'Жуковский Александр Георгиевич' },
  { position: 'Зам. директора по ОВ', name: 'Манин Александр Анатольевич' },
  { position: 'Заведующий кафедрой ИВТ', name: 'Соколов Сергей Викторович' },
  // { position: 'Декан ФИК', name: 'Сосновский Иван Александрович' },
  { position: 'Заведующий кафедрой ИТСС', name: 'Юхнов Василий Иванович' },
  { position: 'Заведующий кафедрой ОНП', name: 'Конкин Борис Борисович' },
  { position: 'Начальник ОТО', name: 'Янкина Надежда Александровна' },
  { position: 'Начальник ОК', name: 'Шустова Виктория Владимировна' },
  { position: 'Главный бухгалтер', name: 'Демченко Лариса Юрьевна' },
  { position: 'Заведующий СБО', name: 'Кирилова Елена Александровна' },
  { position: 'Специалист по К', name: 'Пенькова Екатерина Сергеевна' },
  { position: 'Заведующий сектором УМР', name: 'Колдынская Лариса Михайловна' },
  { position: 'Ст. преподаватель каф. ОНП', name: 'Докучаев Сергей Аркадьевич' },
  { position: 'Доцент кафедры ОНП', name: 'Светличная Наталья Олеговна' },
  { position: 'Доцент кафедры ОНП', name: 'Бородин Алексей Викторович' },
  { position: 'Ст. преподаватель кафедры ОНП', name: 'Гаевская Любовь Александровна' },
  { position: 'Доцент кафедры ОНП', name: 'Устименко Дмитрий Леонидович' },
  { position: 'Доцент кафедры ИВТ', name: 'Чикалов Андрей Николаевич' },
  { position: 'Доцент кафедры ИВТ', name: 'Лобзенко Павел Владимирович' },
  { position: 'Доцент кафедры ИВТ', name: 'Ткачук Евгений Остапович' },
  { position: 'Доцент кафедры ИТСС', name: 'Борисов Борис Петрович' },
  { position: 'Доцент кафедры ИТСС', name: 'Ершов Валерий Васильевич' },
  { position: 'Доцент кафедры ИТСС', name: 'Енгибарян Ирина Алешаевн' },
  { position: 'Доцент кафедры ИТСС', name: 'Решетникова Ирина Витальевна' },
  { position: 'Студент гр. ДС-41', name: 'Моногаров Олег Валерьевич' },
  { position: 'Студент гр. ДЗ-32', name: 'Чернова Алина Денисовна' },
  { position: 'Студент гр. ДИ-32', name: 'Гендриксон Ева Алексеевна' },
  { position: 'Студент гр. ДЗ-31', name: 'Джибладзе Георгий Мамукович' }
]

const subdivisionColums = [
  {
    name: 'name',
    label: 'Наименование',
    field: 'name',
    align: 'left',
    sortable: false
  },
  {
    name: 'rulers',
    label: 'Руководитель',
    field: 'rulers',
    align: 'left',
    sortable: false
  },
  {
    name: 'position',
    label: 'Должность',
    field: 'position',
    align: 'left',
    sortable: false
  },
  {
    name: 'address',
    label: 'Адрес',
    field: 'address',
    align: 'left',
    sortable: false
  },
  {
    name: 'contacts',
    label: 'Телефон, e-mail',
    field: 'contacts',
    align: 'left',
    sortable: false
  },
  {
    name: 'state',
    label: 'Положение',
    field: 'state',
    align: 'left',
    sortable: false
  }
]

const subdivisionRows = [
  {
    name: 'Бухгалтерия',
    rulers: 'Демченко Л.Ю.',
    position: 'Главный бухгалтер',
    address: 'Ростов-на-Дону, Серафимовича, 62, к.102',
    contacts: '307-61-91,\n' +
      'buhgаlteria@skf-mtusi.ru',
    state: 'http://www.umo.skf-mtusi.ru/doc/posp_buh.pdf'
  },
  {
    name: 'Организационно-технический отдел',
    rulers: 'Янкина Н.А.',
    position: 'Начальник организационно-технического отдела',
    address: 'Ростов-на-Дону, Серафимовича, 62, к.105',
    contacts: '262-04-76,\n' +
      'oto@skf-mtusi.ru',
    state: 'http://www.umo.skf-mtusi.ru/doc/posp_oto.pdf'
  },
  {
    name: 'Отдел кадров',
    rulers: 'Шустова В.В.',
    position: 'Начальник отдела кадров',
    address: 'Ростов-на-Дону, Серафимовича, 62, к.208',
    contacts: '310-69-62,\n' +
      'shustоva@skf-mtusi.ru',
    state: 'http://www.umo.skf-mtusi.ru/doc/posp_ok.pdf'
  },
  {
    name: 'Сектор учебно-методической работы',
    rulers: 'Колдынская Л.М.',
    position: 'Заведующий сектором учебно-методической работы',
    address: 'Ростов-на-Дону, Серафимовича, 62, к.215',
    contacts: '310-69-67\n' +
      'kоldynskaya@skf-mtusi.ru',
    state: 'http://www.umo.skf-mtusi.ru/doc/posp_sumr.pdf'
  },
  {
    name: 'Сектор библиотечного обслуживания',
    rulers: 'Кирилова Е.А.',
    position: 'Заведующий сектором библиотечного обслуживания',
    address: 'Ростов-на-Дону, Серафимовича, 62, к.309',
    contacts: '310-69-64,\n' +
      'bibliоteka@skf-mtusi.ru',
    state: 'http://www.umo.skf-mtusi.ru/doc/posp_sbo.pdf'
  },
  {
    name: 'Отдел научно-исследовательской работы',
    rulers: 'Решетникова И.В.',
    position: 'Начальник отдела научно-исследовательской работы',
    address: 'Ростов-на-Дону, Серафимовича, 62, к.314',
    contacts: '310-69-65,\n' +
      'n_оtdel@skf-mtusi.ru',
    state: 'http://www.umo.skf-mtusi.ru/doc/posp_onir.pdf'
  },
  {
    name: 'Центр административно-хозяйственной работы\t',
    rulers: 'Гуринович С.М.',
    position: 'Начальник центра административно-хозяйственной работы',
    address: 'Ростов-на-Дону, Серафимовича, 62, к.212',
    contacts: '310-69-61,\n' +
      'kоvaleva@skf-mtusi.ru',
    state: 'http://www.umo.skf-mtusi.ru/doc/posp-cahr.pdf'
  },
  {
    name: 'Факультет инфокоммуникаций',
    rulers: 'Ефимов С.В.',
    position: 'И.О. декана факультета ИК очной формы обучения',
    address: 'Ростов-на-Дону, Серафимовича, 62, к.104',
    contacts: '310-69-66,\n' +
      'efimov@skf-mtusi.ru',
    state: 'http://www.umo.skf-mtusi.ru/doc/posp_fik.pdf'
  },
  {
    name: 'Кафедра Общенаучной подготовки',
    rulers: 'Конкин Б.Б.',
    position: 'Заведующий кафедрой общенаучной подготовки',
    address: 'Ростов-на-Дону, Серафимовича, 62, к.207',
    contacts: '310-69-79,\n' +
      'kоnkin@skf-mtusi.ru',
    state: 'http://www.umo.skf-mtusi.ru/doc/posp_onp.pdf'
  },
  {
    name: 'Кафедра инфокоммуника- ционных технологий и систем связи',
    rulers: 'Юхнов В.И.',
    position: 'Заведующий кафедрой инфокоммуника- ционных технологий и систем связи',
    address: 'Ростов-на-Дону, Серафимовича, 62, к.219',
    contacts: '310-69-79,\n' +
      'uknоv@skf-mtusi.ru',
    state: 'http://www.umo.skf-mtusi.ru/doc/posp_itss_2018.pdf'
  },
  {
    name: 'Кафедра информатики и вычислительной техники',
    rulers: 'Соколов С.В.',
    position: 'Заведующий кафедрой информатики и вычислительной техники',
    address: 'Ростов-на-Дону, Серафимовича, 62, к.205',
    contacts: '310-69-79,\n' +
      'sokolоv@skf-mtusi.ru',
    state: 'http://www.umo.skf-mtusi.ru/doc/posp_ivt.pdf'
  }
]

export default {
  name: 'Structure',
  components: {
    // ATile
  },
  setup() {
    return {
      tiles,
      managment,
      rulers,
      subdivisionRows,
      subdivisionColums
    }
  }
}
</script>
