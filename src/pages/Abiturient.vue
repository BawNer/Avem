<template>
  <q-page padding>
    <div class="row">
       <div class="col-12 q-my-xl">
          <span class="text-grey-10 text-h3">Абитурьенту</span>
        </div>
        <div class="col-12 q-my-xl">
          <div class="row">
            <div class="col-6 no-gutters">
              <q-card square>
                <q-card-section>
                  <q-list>
                    <q-item clickable>
                      <q-item-section avatar>
                        <q-icon name="ion-open"></q-icon>
                      </q-item-section>
                      <q-item-section>Правила приема в 2022 году</q-item-section>
                    </q-item>
                    <q-item clickable>
                      <q-item-section avatar>
                        <q-icon name="ion-open"></q-icon>
                      </q-item-section>
                      <q-item-section>Приемная комиссия</q-item-section>
                    </q-item>
                    <q-item clickable>
                      <q-item-section avatar>
                        <q-icon name="ion-open"></q-icon>
                      </q-item-section>
                      <q-item-section>День открытых дверей</q-item-section>
                    </q-item>
                    <q-item clickable>
                      <q-item-section avatar>
                        <q-icon name="ion-open"></q-icon>
                      </q-item-section>
                      <q-item-section>Очная и заочная форма обучения</q-item-section>
                    </q-item>
                  </q-list>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-6 no-gutters">
              <q-card class="bg-primary text-white" square>
                <q-card-section>
                  <q-list>
                    <q-item clickable to="/p/about">
                      <q-item-section avatar>
                        <q-icon name="ion-open"></q-icon>
                      </q-item-section>
                      <q-item-section>Направления подготовки</q-item-section>
                    </q-item>
                    <q-item clickable>
                      <q-item-section avatar>
                        <q-icon name="ion-open"></q-icon>
                      </q-item-section>
                      <q-item-section>Подготовительные курсы</q-item-section>
                    </q-item>
                    <q-item clickable to="/p/infoeducation">
                      <q-item-section avatar>
                        <q-icon name="ion-open"></q-icon>
                      </q-item-section>
                      <q-item-section>Стоиомсть обучения</q-item-section>
                    </q-item>
                    <q-item clickable>
                      <q-item-section avatar>
                        <q-icon name="ion-open"></q-icon>
                      </q-item-section>
                      <q-item-section>Часто задаваемые вопросы</q-item-section>
                    </q-item>
                  </q-list>
                </q-card-section>
              </q-card>
            </div>
          </div>
      </div>
      <div class="col-12 q-my-xl">
        <span class="text-grey-10 text-h4">
          Дорожная карта поступления в <b><span class="text-primary">СКФ</span> МТУСИ</b>
        </span>
      </div>
    </div>
  </q-page>
</template>

<script>

export default ({
  name: 'Abiturient',
  setup() {
    
  },
})
</script>
