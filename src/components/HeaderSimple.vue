<template>
<q-header 
  style="backdrop-filter: blur(7px); background-color: #0000001a;"
  :class="[transparent ? 'transparent' : '', absolute ? 'absolute': '', fixedOnTop ? 'fixed-top': '' ]">
    <q-toolbar class="justify-center wrap">

      <q-list>
        <q-item to="/">
          <q-item-section avatar >
            <img src="images/logo.png" alt="" width="128">
          </q-item-section>
        </q-item>
      </q-list>

      <div class="desktop-only">
        <q-btn 
          flat 
          color="dark"
          v-for="link in linkList"
          :key="link.name"
          :label="link.name"
        >
          <q-menu>
            <q-list style="min-width: 50px" class="row">
              <q-item
                clickable
                v-for="menu in link.menu"
                :key="menu.name"
                :to="menu.route"
                class="col-sm-12 col-md-4"
                :disable="!menu.active"
              >
                <q-item-section>{{menu.name}}</q-item-section>
              </q-item>
            </q-list>
        </q-menu>
        </q-btn>
        <q-btn flat color="dark" to="/">Контакты</q-btn>
      </div>
      <q-btn flat color="dark" icon="menu" class="q-gutter-sm mobile-only"></q-btn>
      <q-btn flat color="dark" icon="search" to="/404" class="q-gutter-sm"></q-btn>
      <q-btn flat color="dark" icon="visibility" to="/404" class="q-gutter-sm"></q-btn>
    </q-toolbar>
  </q-header>
</template>

<script>

const linkList = [
  { name: 'Университет', menu: [
    { name: 'О вузе', route: '/p/about', active: true },
    { name: 'Структура', route: '/p/structure', active: true },
    { name: 'Контакты', route: '/p/contact', active: true },
    { name: 'Образование', route: '/p/education', active: true },
    { name: 'Доступная среда', route: '', active: false },
    { name: 'Документы', route: '/p/documents', active: true },
    { name: 'Руководство', route: '', active: false },
    { name: 'Сотрудники', route: '/p/employee', active: true },
    { name: 'Партнеры', route: '', active: false },
    { name: 'Оснащенность университета', route: '', active: false },
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
    { name: 'Работа', route: '', active: false },
    { name: 'Модульно-рейтинговая система', route: '', active: false },
    { name: 'Электронное портфолио', route: '', active: false },
    { name: 'Методические указания по подготовке ВКР', route: '', active: false },
    { name: 'Расписание занятий', route: '', active: false },
    { name: 'Внеучебная деятельность', route: '', active: false },
    { name: 'Вакантные места для перевода', route: '', active: false },
    { name: 'Электронная образовательная среда', route: '', active: false },
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

export default {
  name: 'HeaderSimple',
  props: {
    transparent: Boolean,
    blured: Boolean,
    fixedOnTop: Boolean,
    absolute: Boolean
  },
  setup() {
    return {
      linkList
    }
  }
}
</script>

<style lang="scss" scoped>
  .blured {
    filter: blur(5px);
    background-blend-mode: overlay;
  }
</style>