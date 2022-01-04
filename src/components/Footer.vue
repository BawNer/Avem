<template>
  <div class="row" style="background-color: #192F4D">

      <div class="col-12">
        <div class="row q-pa-xl">
          <div class="col-3">
            <q-btn flat color="grey-1">Университет</q-btn>
            <q-btn flat color="grey-1">Студенту</q-btn>
            <q-btn flat color="grey-1">Атмосфера</q-btn>
            <q-btn flat color="grey-1">Абитуриенту</q-btn>
            <q-btn flat color="grey-1">Медиа</q-btn>
            <q-btn flat color="grey-1">Контакты</q-btn>
          </div>
          <q-space></q-space>
          <div class="col-3 text-right">
            <q-img src="icons/logo_light.png" width="200px"></q-img>
          </div>
        </div>
      </div>

  </div>
  <div class="row" style="background-color: #0D1726">
    <div class="col-6 q-pa-xl">
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
    <div class="col-4 q-pa-xl">
      <q-list class="text-white">
        <q-item>
          <q-item-section class="block">Сведения об образовательной организации</q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="block">Карта сайта</q-item-section>
        </q-item>
      </q-list>
    </div>
    <div class="col-2 row q-pa-xl">
      <q-img src="images/tg.png" alt="" width="32px" height="32px" fit="contain" class="q-mx-sm" />
      <q-img src="images/inst.png" alt="" width="32px" height="32px" fit="contain" class="q-mx-sm" />
      <q-img src="images/vk.png" alt="" width="32px" height="32px" fit="contain" class="q-mx-sm" />
    </div>
    <div class="col-12 q-my-md q-px-xl">
      <div class="row">
        <div class="col-4">
          <q-list>
            <q-item>
              <q-img src="images/rf.png" fit="contain" width="64px" class="q-mr-md"></q-img>
              <q-item-section class="text-white text-h6">
                Министерство науки и высшего образования Российской Федерации
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="col-offset-1 col-6">
          <q-list>
            <q-item>
              <q-img src="images/rf.png" fit="contain" width="64px" class="q-mr-md"></q-img>
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