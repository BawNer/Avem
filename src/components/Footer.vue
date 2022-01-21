<template>
  <div class="row" style="background-color: #192F4D">

      <div class="col-12">
        <div class="row" :class="!$q.screen.lt.sm ? 'q-pa-xl' : 'q-py-md' ">
          <div class="col-md-3 col-5">
            <q-btn flat color="grey-1">Университет</q-btn>
            <q-btn flat color="grey-1">Студенту</q-btn>
            <q-btn flat color="grey-1">Атмосфера</q-btn>
            <q-btn flat color="grey-1">Абитуриенту</q-btn>
            <q-btn flat color="grey-1">Медиа</q-btn>
            <q-btn flat color="grey-1">Контакты</q-btn>
          </div>
          <q-space></q-space>
          <div class="col-md-3 col-7 text-center">
            <q-img src="icons/logo_light.svg" :width="!$q.screen.lt.sm ? '200px' : '180px' "></q-img>
          </div>
        </div>
      </div>

  </div>
  <div class="row" style="background-color: #0D1726">
    <div class="col-md-6 col-7">
      <q-list class="text-white">
        <q-item>
          <q-item-section class="block">ФГБОУ «Северо-Кавказский филиал МТУСИ»</q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="block">Юридический адрес: 344002, г. Ростов-на-Дону, ул. Серафимовича, 62</q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="block">Факс: +7 (863) 310-69-68</q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="block">Телефон: +7 	(863) 310-69-60</q-item-section>
        </q-item>
      </q-list>
    </div>
    <div class="col-md-4 col-5">
      <q-list class="text-white">
        <q-item>
          <q-item-section class="block">Сведения об образовательной организации</q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="block">Карта сайта</q-item-section>
        </q-item>
      </q-list>
    </div>
    <div class="col-md-2 col-12 row q-pa-xl justify-center">
      <q-img src="icons/Telegram.svg" alt="" width="32px" height="32px" fit="contain" class="q-mx-sm" />
      <q-img src="icons/instagram.svg" alt="" width="32px" height="32px" fit="contain" class="q-mx-sm" />
      <q-img src="icons/vk.svg" alt="" width="32px" height="32px" fit="contain" class="q-mx-sm" />
    </div>
    <div class="col-12 q-my-md q-px-xl">
      <div class="row">
        <div class="col-md-4 col-12">
          <q-list>
            <q-item>
              <q-img src="icons/gerb_var_1.svg" fit="contain" width="64px" class="q-mr-md"></q-img>
              <q-item-section class="text-white text-h6">
                Министерство науки и высшего образования Российской Федерации
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="col-offset-md-1 col-md-6 col-12">
          <q-list>
            <q-item>
              <q-img src="icons/gerb_var_2.svg" fit="contain" width="64px" class="q-mr-md"></q-img>
              <q-item-section class="text-white text-h6">
               МТУСИ является подведомственным вузом Министерство цифрового развития, связи и массовых коммуникаций Российской Федерации
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  setup() {
    
  },
}
</script>