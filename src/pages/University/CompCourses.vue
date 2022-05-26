<template>
  <q-page padding>
    <div class="row">
      <div class="col-12">
        <span class="text-h3 text-grey-10">Компьютерные курсы</span>
      </div>
      <div class="row">
        <div class="col-12 q-my-xl">
          <q-table
            title="Компьютерные курсы 2019 — 2020 учебный год"
            :rows="coursesRow"
            :columns="coursesKey"
            row-key="name"
            wrap-cells
          ></q-table>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-9 q-mt-xl">
          <p class="text-h6 text-grey-9">
            <b>Деятельность осуществляется в соответствии с лицензией ИПК МТУСИ №2103 от 21.04.2016 года.<br><br>
            По окончанию курса выдаётся удостоверение установленного образца.</b><br><br>
            <span class="text-h4 text-grey-9 q-my-md">Комплектование групп</span><br>
            Комплектование проводится по заявкам от предприятий и по индивидуальным заявлениям граждан желающих пройти выбранный курс обучения.<br>
            В группе 10-15 человек. Каждый за своим компьютером<br><br>
            <span class="text-h4 text-grey-9 q-my-md">Расписание:</span><br>
            Курсы проводятся каждый месяц.<br>
            Начало занятий: ориентировочно первый и второй вторник месяца или по мере комплектования групп.<br>
            Занятия проходят каждый день (кроме воскресенья) по 2-4 академических часа.<br><br>
            <span class="text-h4 text-grey-9 q-my-md">Начало занятий:</span><br>
            Дневные группы с 9.00 до 12.15 ч. и с 10.00 до 13.15<br>
            Вечерние группы с 17.45 до 20.45 ч.<br>
            В здании филиала работает буфет.<br><br>
            <span class="text-h4 text-grey-9 q-my-md">По вопросам обучения обращаться:</span><br>
            г. Ростов-на-Дону, ул. Серафимовича 62, 2 этаж, ком. 215.<br>
            Методист: Романова Наталья Григорьевна.<br>
            Тел: (863) 310-69-67.
          </p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  setup() {
    const coursesKey = [
        { name: 'topic', label: '№ темы', field: 'topic', align: 'left' },
        { name: 'named', label: 'Название курса', field: 'named', align: 'left' },
        { name: 'hours', label: 'Количество часов', field: 'hours', align: 'left' },
        { name: 'price', label: 'Стоимость в рубля', field: 'price', align: 'left' }
      ]
      const coursesRow = [
        {topic: '6', named: 'ОСНОВЫ КОМПЬЮТЕРНОЙ ГРАМОТНОСТИ', hours: '24', price: '1000р.'},
        {topic: '7', named: 'ПОЛЬЗОВАТЕЛЬ ПК', hours: 'от 20', price: 'Индивидуальное обучение 200р/час'}
      ]
  return {coursesRow,
          coursesKey}
  }
}
</script>
