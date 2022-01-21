<template>
  <q-page padding>
    <div class="row" :class="!$q.screen.lt.md ? 'q-mx-xl' : ''">
      <div class="col-12 q-my-xl">
        <span class="text-h3 text-grey-10">Сведения об образовательной организации</span>
      </div>
      <div class="col-12 column q-my-xl">
        <router-link
          v-for="(link, i) in links"
          :key="link.name"
          :to="link.path"
          class="text-h6 text-light-blue-10 q-mt-md"
        >{{++i}}. {{link.name}}</router-link>
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
        { name: 'Основные сведения', path: '' },
        { name: 'Структура и органы управления образовательной организацией', path: '' },
        { name: 'Документы', path: '' },
        { name: 'Образование', path: '' },
        { name: 'Образовательные стандарты и требования', path: '' },
        { name: 'Руководство. Педагогический состав', path: '' },
        { name: 'Материально-техническое обеспечение и оснащенность образовательного процесса', path: '' },
        { name: 'Стипендии и иные виды материальной поддержки', path: '' },
        { name: 'Платные образовательные услуги', path: '' },
        { name: 'Финансово-хозяйственная деятельность', path: '' },
        { name: 'Вакантные места для приема (перевода)', path: '' },
        { name: 'Доступная среда', path: '' },
        { name: 'Международное сотрудничество', path: '' }
      ]
    }
  },
}
</script>