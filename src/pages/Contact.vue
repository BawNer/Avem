<template>
  <q-page padding>
    <div class="row">
      <div class="col-12 q-my-xl">
        <span class="text-grey-10 text-h3">Контакты</span>
      </div>
      <div class="col-12 q-my-xl">
        <div class="row">
          <div class="col-md-6 col-12 q-mb-md">
            <q-list>
              <q-item-section>
                <q-item-label caption>Адрес</q-item-label>
                <q-item-label class="text-h4"><b>344002, Ростов-на-Дону, ул. Серафимовича, 62</b></q-item-label>
              </q-item-section>
            </q-list>
          </div>
          <div class="col-md-6 col-12 q-mb-md">
            <q-list>
              <q-item-section>
                <q-item-label caption>ТЕЛЕФОН</q-item-label>
                <q-item-label class="text-h4"><b>+7 (863) 310-69-60</b></q-item-label>
              </q-item-section>
            </q-list>
          </div>
        </div>
      </div>
      <div class="col-12 q-my-xl">
        <div class="row">
          <div class="col-md-4 col-12">
            <q-list>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-h5 text-grey-7 text-uppercase">часы работы с посетителями</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="col-2">
                  <q-item-label class="text-h5 text-grey-8">Пн-Чт</q-item-label>
                </q-item-section>
                <q-item-section class="col-10 text-h5">09:00–11:00 и 16:00–18:00</q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="col-2">
                  <q-item-label class="text-h5 text-grey-8">Пт</q-item-label>
                </q-item-section>
                <q-item-section class="col-10 text-h5">14:00–16:00</q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="col-2">
                  <q-item-label class="text-h5 text-grey-8">Сб</q-item-label>
                </q-item-section>
                <q-item-section class="col-10 text-h5">10:00–12:00</q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="col-2">
                  <q-item-label class="text-h5 text-grey-8">Вс</q-item-label>
                </q-item-section>
                <q-item-section class="col-10 text-h5">Выходной</q-item-section>
              </q-item>
            </q-list>
          </div>
          <div class="col-md-4 col-12">
            <q-list>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-h5 text-grey-7 text-uppercase">общий режим работы</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="col-2">
                  <q-item-label class="text-h5 text-grey-8">Пн-Пт</q-item-label>
                </q-item-section>
                <q-item-section class="col-10 text-h5">08:00–22:00</q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="col-2">
                  <q-item-label class="text-h5 text-grey-8">Сб</q-item-label>
                </q-item-section>
                <q-item-section class="col-10 text-h5">08:00–14:00</q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="col-2">
                  <q-item-label class="text-h5 text-grey-8">Вс</q-item-label>
                </q-item-section>
                <q-item-section class="col-10 text-h5">Выходной</q-item-section>
              </q-item>
            </q-list>
          </div>
          <div class="col-md-4 col-12">
            <q-list>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-h5 text-grey-7 text-uppercase">e-mail</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-h5">
                    <a href="mailto:office@digital.gov.ru">office@digital.gov.ru</a>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
            <q-list>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-h5 text-grey-7 text-uppercase">социальные сети</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                  <q-btn flat>
                    <q-img width="24px" src="images/tgV.png"></q-img>
                  </q-btn>
                  <q-btn flat>
                    <q-img width="24px" src="images/vkV.png"></q-img>
                  </q-btn>
              </q-item>
            </q-list>
          </div>
        </div>
      </div>
      <div class="col-12 q-mb-xl">
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A1223d9a956f48e2f78ac75620a232579fe71f90f0259b0d5d2f2ee68a068a81a&amp;source=constructor" width="100%" height="470" frameborder="0"></iframe>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Contact'
}
</script>
