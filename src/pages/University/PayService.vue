<template>
  <q-page padding>
    <div class="row">
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
                    <q-item-section class="col-3 desktop-only"><q-btn flat color="primary" type="a" :to="serv.link">Посмотреть</q-btn></q-item-section>
                  </q-item>
                  <q-card-actions class="mobile-only">
                    <q-space></q-space>
                    <q-btn flat color="primary" type="a" :to="serv.link">Подробнее</q-btn>
                  </q-card-actions>
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
        { label: 'Договора об оказании платных образовательных услуг', link: 'http://www.skf-mtusi.ru/files/info/docs/dog/Dogovor_platn_obraz_uslug%2020.04.2021.docx' },
        { label: 'Приказ об установлении стоимости платных государственных образовательных услуг по программам высшего образования в СКФ МТУСИ', link: 'http://www.skf-mtusi.ru/files/info/docs/prikaz_29-05_29.06.20.pdf' },
        { label: 'Положение об оказании платных образовательных услуг', link: 'http://www.skf-mtusi.ru/files/info/docs/Poryadok_platn_uslug_06.07.2020.pdf' },
        { label: 'Об утверждении стоимости платных образовательных услуг ордена Трудового Красного Знамени федерального государственного бюджетного образовательного учреждение высшего образования «Московский технический университет связи и информатики» (МТУСИ) по образовательным программам высшего и среднего профессионального образования – программам бакалавриата, специалитета, магистратуры, аспирантуры очной и заочной форм обучения на 2021-2022 учебный год', link: 'http://www.skf-mtusi.ru/files/info/docs/Stoimost_obuch_2021-2022.pdf' }
      ] },
      { type: 'Дополнительная образовательная деятельность', services: [
        { label: 'Курсы повышения квалификации', link: '/sveden/qualific_imp' },
        { label: 'Локальная сетевая академия Cisco', link: '/sveden/cisco' },
        { label: 'Учебный центр Unify Communications', link: '/sveden/unify' },
        { label: 'Компьютерные курсы', link: '/sveden/comp-courses' },
        { label: 'Подготовительные курсы', link: '/sveden/prepare-courses' }
      ] },
    ]

    return {
      services
    }
  },
}
</script>
