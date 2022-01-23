<template>
  <q-page padding>
    <div class="row" :class="!$q.screen.lt.md ? 'q-mx-xl' : ''">
      <div class="col-12">
        <span class="text-h3 text-grey-10">Платные образовательные услуги</span>
      </div>
      <div class="col-12">
        <div class="row q-my-xl" v-for="service in services" :key="service.type">
          <div class="col-12">
            <span class="text-h5 text-grey-10">{{service.type}}</span>
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-md-6 col-12 q-pa-md" v-for="serv in service.services" :key="serv.label">
                <q-card>
                  <q-item>
                    <q-item-section avatar>
                      <q-icon name="mdi-cash" color="positive"></q-icon>
                    </q-item-section>
                    <q-item-section>{{serv.label}}</q-item-section>
                    <q-item-section class="col-2"><q-btn flat color="primary">Посмотреть</q-btn></q-item-section>
                  </q-item>
                </q-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  setup() {
    const services = [
      { type: 'Основная образовательная деятельность', services: [
        { label: 'Договора об оказании платных образовательных услуг', link: '' },
        { label: 'Приказ об установлении стоимости платных государственных образовательных услуг по программам высшего образования в СКФ МТУСИ', link: '' },
        { label: 'Положение об оказании платных образовательных услуг', link: '' },
        { label: 'Об утверждении стоимости платных образовательных услуг ордена Трудового Красного Знамени федерального государственного бюджетного образовательного учреждение высшего образования «Московский технический университет связи и информатики» (МТУСИ) по образовательным программам высшего и среднего профессионального образования – программам бакалавриата, специалитета, магистратуры, аспирантуры очной и заочной форм обучения на 2021-2022 учебный год', link: '' }
      ] },
      { type: 'Дополнительная образовательная деятельность', services: [
        { label: 'Дополнительная образовательная деятельность', link: '' },
        { label: 'Курсы повышения квалификации', link: '' },
        { label: 'Локальная сетевая академия Cisco', link: '' },
        { label: 'Учебный центр Unify Communications', link: '' },
        { label: 'Компьютерные курсы', link: '' },
        { label: 'Подготовительные курсы', link: '' }
      ] },
    ]

    return {
      services
    }
  },
}
</script>