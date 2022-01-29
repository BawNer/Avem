<template>
  <q-page padding>
    <div class="row">
      <div class="col-12">
        <spna class="text-h3 text-grey-10">Студентам</spna>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-md-6 col-lg-auto col-12 q-pa-md" v-for="(link, index) in linksMap" :key="index">
            <q-card style="min-width: 300px">
              <q-item :to="link.path">
                <q-item-avatar>
                  <q-avatar size="64px">
                    <q-icon :name="link.icon" :color="link.color"></q-icon>
                  </q-avatar>
                </q-item-avatar>
                <q-item-section class="text-body1">
                  <q-item-label>{{link.label}}</q-item-label>
                </q-item-section>
              </q-item>
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
    const linksMap = [
      { label: 'Работа', icon: 'mdi-briefcase', path: '/p/works', color: 'primary' },
      { label: 'График плановых консультаций профессорско-преподавательского состава', icon: 'mdi-account-group', path: '/404', color: 'positive' },
      { label: 'Модульно-рейтинговая система', icon: 'mdi-star', path: '/404', color: 'warning' },
      { label: 'Электронное портфолио студента', icon: 'mdi-head-lightbulb', path: '/404', color: 'deep-orange-10' },
      { label: 'Временное положение «О проведении государственной итоговой аттестации по образовательным программам бакалавриата с применением электронного обучения и дистанционных образовательных технологий в условиях распространения коронавирусной инфекции на территории Российской Федерации»', icon: 'mdi-file-pdf-box', path: '/404', color: 'red' }
    ]

    return {
      linksMap
    }
  },
}
</script>