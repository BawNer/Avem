<template>
  <q-page padding>
    <div class="row q-col-gutter-sm">
      <div class="col-12 q-mb-md">
        <span class="text-grey-10 text-h3">Сектор библиотечного обслуживания</span>
      </div>
      <div class="col-12">
        <q-card>
          <q-card-section>
            Основные задачи:
            <ul>
              <li>полное и оперативное библиотечно-информационное обслуживание студентов, профессорско-преподавательского состава, сотрудников института в соответствии с их информационными запросами;</li>
              <li>формирование библиотечного фонда соответственно профилю вуза.</li>
            </ul>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 row q-col-gutter-sm">
        <div class="col-12">
          <q-card>
            <q-card-section>
              Библиотека СКФ МТУСИ сотрудничает с несколькими Электронно-библиотечными системами
            </q-card-section>
            <q-card-section>
              <p>
                Логины/пароли для входа в системы преподаватели и студенты могут получить в библиотеке.
              </p>
              <p>
                Электронный каталог библиотеки содержит 1729 записей, своевременно обновляется и способствует оперативному поиску литературы.
              </p>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-6 col-12">
          <essential-link
            link="www.iprbookshop.ru"
            title="www.iprbookshop.ru"
            caption="«IPRbooks» режим доступа"
            icon="mdi-share-variant"
          ></essential-link>
        </div>
        <div class="col-md-6 col-12">
          <essential-link
            link="http://znanium.com."
            title="http://znanium.com."
            caption="ЭБС Znanium.com режим доступа"
            icon="mdi-share-variant"
          ></essential-link>
        </div>
        <div class="col-12">
          <q-card>
            <q-card-section>
              <p>Фонд периодических изданий представлен научными, учебными и отраслевыми изданиями по направлениям подготовки кадров.</p>
              <p>
                <b>Заведующий сектором — Кирилова Елена Александровна</b>
              </p>
              <ul>
                <li>общая площадь помещений 98.6 кв.м</li>
                <li>читальный зал на 30 посадочных мест.</li>
                <li>фонд библиотеки составляет 29752 экз.</li>
                <li>количество читателей – 1082 чел.</li>
                <li>6 автоматизированных рабочих мест имеющих доступ к локальной сети филиала и сети Internet</li>
              </ul>
            </q-card-section>
            <q-card-section>
              <p>Телефон: (863)262-45-29</p>
              <p>e-mail: <a href="mailto:bibskfmtyci@mail.ru">bibskfmtyci@mail.ru</a></p>
              <p>адрес: 344002 г.Ростов-на-Дону, ул. Серафимовича,62</p>
              <p>каб.309/311, 3 этаж</p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import EssentialLink from "components/EssentialLink";
export default {
  name: "Biblio",
  components: {
    EssentialLink
  }

}
</script>

<style scoped>

</style>
