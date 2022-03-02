<template>
  <q-page padding>
    <div class="row">
      <div class="col-12">
        <span class="text-h3 text-grey-10">Документация</span>
      </div>
      <div class="col-12 q-my-xl">
        <div class="row">
          <div class="col-4 q-pa-md" v-for="(document, index) in documents" :key="index">
            <q-card>
              <q-item>
                <q-item-avatar>
                  <q-avatar size="64px">
                    <q-icon name="mdi-pdf-box" color="red"></q-icon>
                  </q-avatar>
                </q-item-avatar>
                <q-item-section class="text-body1">
                  <q-item-label>{{document.label}}</q-item-label>
                </q-item-section>
              </q-item>
              <q-card-actions>
                <q-space></q-space>
                <q-btn flat type="a" color="primary" :href="document.link">Ссылка</q-btn>
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
    const documents = [
      { type: 'pdf', label: 'Doc 1', link: '' },
      { type: 'pdf', label: 'Doc 2', link: '' },
      { type: 'pdf', label: 'Doc 3', link: '' },
      { type: 'pdf', label: 'Doc 4', link: '' },
      { type: 'pdf', label: 'Doc 5', link: '' }
    ]

    return {
      documents
    }
  },
}
</script>