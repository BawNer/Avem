<template>
  <q-page padding>
    <div class="row" :class="!$q.screen.lt.md ? 'q-mx-xl' : ''">
      <div class="col-12 q-my-xl">
        <span class="text-h3 text-grey-10">Образовательные страндарты и требования</span>
      </div>
      <div class="col-12 q-my-xl">
        <div class="row">
          <div class="col-lg-auto col-lg-4 col-md-4 col-12 q-pa-md" v-for="(link, index) in links" :key="index">
            <q-card>
              <q-item>
                <q-item-section avatar>
                  <q-avatar size="64px">
                    <q-icon :name="link.icon" color="red"></q-icon>
                  </q-avatar>
                </q-item-section>
                <q-item-section class="text-overline">{{link.type}}</q-item-section>
              </q-item>
              <q-item-section>
                <q-item-label header>{{link.label}}</q-item-label>
              </q-item-section>
              <q-card-actions>
                <q-space></q-space>
                <q-btn flat color="primary" type="a" :href="link.path">скачать</q-btn>
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
  name: 'InfoEducation',
  setup() {
    return {
      links: [
        { label: 'Приказ Министерства науки и высшего образования Российской Федерации от 08.02.2021 № 83 «О внесении изменении в федеральные государственные образовательные стандарты высшего образования — бакалавриат по направлениям подготовки»', path: 'http://www.skf-mtusi.ru/files/info/fgosvo/prikaz_83_08.02.2021.pdf', icon: 'mdi-pdf-box', type: 'Стандарты и требования' },
        { label: 'Об утверждении аккредитационных показателей по образовательным программам высшего образования', path: 'http://www.skf-mtusi.ru/files/info/fgosvo/prikaz_1094_25.11.2021.pdf', icon: 'mdi-pdf-box', type: 'Стандарты и требования' },
        { label: '09.03.01 Информатика и вычислительная техника', path: 'http://www.skf-mtusi.ru/files/info/fgosvo/090301.pdf', icon: 'mdi-pdf-box', type: 'Направления подготовки' },
        { label: '09.03.01 ФГОС-3++ Информатика и вычислительная техника', path: 'http://www.skf-mtusi.ru/files/info/fgosvo/2017_09_03_01_N_929.pdf', icon: 'mdi-pdf-box', type: 'Направления подготовки' },
        { label: '11.03.02 Инфокоммуникационные технологии и системы связи', path: 'http://www.skf-mtusi.ru/files/info/fgosvo/110302.pdf', icon: 'mdi-pdf-box', type: 'Направления подготовки' },
        { label: '11.03.02 ФГОС-3++ Инфокоммуникационные технологии и системы связи', path: 'http://www.skf-mtusi.ru/files/info/fgosvo/2017_11_03_02_N_930.pdf', icon: 'mdi-pdf-box', type: 'Направления подготовки' }
      ]
    }
  },
}
</script>