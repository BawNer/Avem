<template>
  <q-page padding>
    <div class="row">
      <div class="col-12 q-my-xl">
        <span class="text-h3 text-grey-9">Структура и органы управления</span><br />
        <span class="text-h3 text-grey-9">образовательной организации</span>
      </div>
      <div class="col-10 offset-1">
        <q-img
          :ratio="16/9"
          src="/structure.png"
          fit="contain"
        ></q-img>
      </div>
      <div class="col-12">
        <span class="text-h5 text-grey-9">Подразделения</span>
      </div>
      <div class="col-12 q-my-md">
        <div class="row">
          <div class="col-4" v-for="tile in tiles" :key="tile.name">
            <a-tile
              :active="tile.state"
              :to="tile.to"
            >
              {{tile.name}}
            </a-tile>
          </div>
        </div>
      </div>
      <div class="col-12 q-mt-xl">
        <span class="text-h5 text-grey-9">Органы управления</span>
      </div>
      <div class="col-12 q-my-xl">
        <div class="row">
          <div class="col-4" v-for="manage in managment" :key="manage.name">
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
        <div class="row">
          <div class="col-4 q-my-md" v-for="ruler in rulers" :key="ruler.name">
            <q-list>
              <q-item-section>
                <q-item-label class="text-h6">{{ruler.position}}</q-item-label>
                <q-item-label>{{ruler.name}}</q-item-label>
              </q-item-section>
            </q-list>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import ATile from '../components/ATile.vue'

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
  { position: 'Директор СКФ МТУСИ', name: 'Жуковский Александр Георгиевич', phone: '+7 (863) 310-69-66', photo: '' },
  { position: 'Зам. директора по УВР', name: 'Жуковский Александр Георгиевич', phone: '+7 (863) 310-69-66', photo: '' },
  { position: 'Зам. директора по УВР', name: 'Жуковский Александр Георгиевич', phone: '+7 (863) 310-69-66', photo: '' },
  { position: 'Зам. директора по УВР', name: 'Жуковский Александр Георгиевич', phone: '+7 (863) 310-69-66', photo: '' },
  { position: 'Директор СКФ МТУСИ', name: 'Манин Александр Анатольевич', phone: '8(863) 310-69-66', photo: '' },
  { position: 'Директор СКФ МТУСИ', name: 'Манин Александр Анатольевич', phone: '8(863) 310-69-66', photo: '' }
]

const rulers = [
  { position: 'Директор СКФ МТУСИ', name: 'Манин Александр Анатольевич' },
  { position: 'Зам. директора по УВР', name: 'Жуковский Александр Георгиевич' },
  { position: 'Заведующий кафедрой ИВТ', name: 'Соколов Сергей Викторович' },
  { position: 'Декан ФИК', name: 'Сосновский Иван Александрович' },
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
  { position: 'Студент гр. ДИ-32', name: 'Чернова Алина Денисовна' },
  { position: 'Студент гр. ДИ-32', name: 'Гендриксон Ева Алексеевна' },
  { position: 'Студент гр. ДИ-31', name: 'Джибладзе Георгий Мамукович' }
]

export default {
  name: 'Structure',
  components: {
    ATile
  },
  setup() {
    return {
      tiles,
      managment,
      rulers
    }
  }
}
</script>