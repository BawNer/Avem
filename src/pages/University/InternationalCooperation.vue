<template>
  <q-page padding>
    <div class="row">
      <div class="col-12">
        <span class="text-h3 text-grey-10">Международное сотрудничество</span><br/>
        <span class="text-caption">Информация о заключенных и планируемых к заключению договорах с иностранными и (или) международными организациями по вопросам образования и науки</span>
      </div>
      <div class="col-12 q-my-xl">
        <div class="row q-col-gutter-sm">
          <div class="col-md-6 col-12" v-for="(cooperation, index) in cooperations" :key="index">
            <q-card>
              <q-item>
                <q-item-section>
                  <span class="text-overline">{{cooperation.organization}}, {{cooperation.country}}</span>
                </q-item-section>
              </q-item>
              <q-card-section>
                {{cooperation.label}}
              </q-card-section>
              <q-card-actions>
                <q-space></q-space>
                <q-btn flat color="primary" type="a" :href="cooperation.link">Подробнее</q-btn>
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  setup() {
    const cooperations = [
      { label: 'Соглашение между ИКТ Академией Хуавэй, действующей на базе Северо-Кавказского филиала Московского технического университета связи и информатики, и Обществом с ограниченной ответственностью «Техкомпания Хуавэй» №0YC64717000063 от 20.12.2017, срок действия — 2 года с автоматическим продлением.', link: 'http://www.skf-mtusi.ru/files/info/international_cooperation/Huawei.pdf', country: 'Китай', organization: 'Техкомпания Хуавей (Huawei)' },
      { label: 'АКАДЕМИЯ ПРОФЕССИОНАЛЬНОГО ОБУЧЕНИЯ. Договор с партнером по обучению между Северо-Кавказский филиал Московского технического университета связи и информатики и «Siemens Enterprise Communications», договор от 01.08.2012. срок действия — 12 месяцев с автоматическим продлением.', link: 'http://www.skf-mtusi.ru/files/info/international_cooperation/Siemens.pdf', country: 'Германия', organization: 'Unify Software and Solutions GmbH & Co. KG. (ранее Siemens Enterprise Communications)' },
      { label: 'Unify Software and Solutions GmbH & Co. KG. (ранее Siemens Enterprise Communications) — немецкий производитель корпоративных телекоммуникационных систем со штаб-квартирой в городе Мюнхен, Германия. Unify — компания в составе Atos.', link: 'http://www.skf-mtusi.ru/files/info/international_cooperation/Unify.pdf', country: 'Германия', organization: 'Unify Software and Solutions GmbH & Co. KG. (ранее Siemens Enterprise Communications)' }
    ]

    return {
      cooperations
    }
  },
}
</script>
