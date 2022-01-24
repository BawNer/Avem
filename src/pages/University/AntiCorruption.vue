<template>
  <q-page padding>
    <div class="row" :class="!$q.screen.lt.md ? 'q-mx-xl' : ''">
      <div class="col-12">
        <div class="row">
          <div class="col-md-3 col-12 q-pa-md" v-for="(document, index) in documents" :key="index">
            <q-card>
              <q-item>
                <q-item-section>
                  <span class="text-body1">{{document.label}}</span>
                </q-item-section>
                <q-item-section avatar>
                  <q-btn icon="ion-open" color="primary" flat type="a" :href="document.link"></q-btn>
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
    const documents = [
      { label: 'Нормативно-правовые и иные акты в сфере противодействия коррупции', link: 'http://www.skf-mtusi.ru/acts' },
      { label: 'Антикоррупционная экспертиза', link: 'http://www.skf-mtusi.ru/exp' },
      { label: 'Методические материалы', link: 'http://www.skf-mtusi.ru/metodic' },
      { label: 'Формы документов, связанных с противодействием коррупции, для заполнения', link: 'http://www.skf-mtusi.ru/doc_form' },
      { label: 'Сведения о доходах, расходах, об имуществе и обязательствах имущественного характера', link: 'http://www.skf-mtusi.ru/income' },
      { label: 'Сведения о доходах руководителя, его заместителей и главного бухгалтера СКФ МТУСИ', link: 'http://www.skf-mtusi.ru/incomeinfo' },
      { label: 'Комиссия по соблюдению требований к служебному поведению и урегулированию конфликта интересов', link: 'http://www.skf-mtusi.ru/comission' },
      { label: 'Обратная связь для сообщений о фактах коррупции', link: 'http://www.skf-mtusi.ru/callback' }
    ]

    return {
      documents
    }
  },
}
</script>