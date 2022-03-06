<template>
  <q-page padding>
    <div class="row">
      <div class="col-12">
        <span class="text-h3 text-grey-10">Научная работа</span>
      </div>
      <div class="col-12 q-mb-xl">
        <div class = "row">
          <div class="col-md-8 col-12 text-subtitle1 q-pr-xl">
            <ul>
              <li v-for="(work, index) in works" :key="index">
                 <span class="text-h6 text-grey-10"><a :href="work.link" class="text-primary">{{work.label}}</a></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  setup() {
    const works = [
      {label:"Перечень инновационных разработок", link: "http://www.skf-mtusi.ru/?page_id=3686"},
      {label:"Перечень свидетельств о регистрации программ и патентов, полученных на разработки", link: "http://www.skf-mtusi.ru/?page_id=3689"},
      {label:"Перечень изданных статей профессорско-преподавательского состава СКФ МТУСИ в изданиях, рекомендованных ВАК", link: "http://www.skf-mtusi.ru/?page_id=3680"},
      {label:"Ресурсы для осуществления научно-исследовательской деятельности", link: "http://www.skf-mtusi.ru/?page_id=3700"},
      {label:"Международная научно-практическая конференция", link: "http://www.skf-mtusi.ru/?page_id=4025"},
      {label:"Цели и основные направления", link: "http://www.skf-mtusi.ru/?page_id=524"},
      {label:"Основные руководящие документы", link: "http://www.skf-mtusi.ru/?page_id=531"},
      {label:"Организация, планирование и руководство научной работой", link: "http://www.skf-mtusi.ru/?page_id=534"},
      {label:"Результаты научно-исследовательской деятельности", link: "http://www.skf-mtusi.ru/?page_id=540"},
      {label:"Олимпиады", link: "http://www.skf-mtusi.ru/?page_id=2612"},
      {label:"Научно-технические сборники", link: "http://www.skf-mtusi.ru/?page_id=536"}
      ]
    return {works}
  }
  }
</script>