<template>
  <q-page padding>
    <div class="row" :class="!$q.screen.lt.md ? 'q-mx-xl' : ''">
      <div class="col-12">
        <span class="text-h3 text-grey-10">Сведения о специально оборудованных учебных кабинетах</span>
      </div>
      <div class="col-md-7 col-12 q-my-xl">
        <span class="text-body1">В аудиториях предусмотрены специальные места для обучающихся инвалидов и лиц с ОВЗ. Оборудование специальных учебных мест предполагает увеличение размера зоны на одно место с учетом подъезда и разворота кресла-коляски, увеличение ширины прохода между рядами столов, замену двухместных столов на одноместные с изменяемой высотой. В общем случае в стандартной аудитории первые столы в ряду у окна и в среднем ряду предусмотрены для обучающихся с нарушениями зрения и слуха, а для обучающихся, передвигающихся в кресле-коляске – стол в ряду у дверного проема. На постах охраны имеются слуховые аппараты. На стендах с графической информацией, выполненной крупным шрифтом, в том числе с применением рельефно-точечного шрифта Брайля располагается информация о наименовании университета.</span>
      </div>
      <div class="col-12">
        <span class="text-h3 text-grey-10">Электронные образовательные ресурсы и нормативная документация</span>
      </div>
      <div class="col-12 q-my-xl">
        <div class="row">
          <div class="col-md-3 col-12 q-pa-md " v-for="(document, index) in documents" :key="index">
            <q-card>
              <q-item>
                <q-item-section avatar>
                  <q-icon :name="document.iconType+'-'+document.icon" color="primary"></q-icon>
                </q-item-section>
                <q-item-section>
                  <span class="text-overline">{{document.type}}</span>
                </q-item-section>
              </q-item>
              <q-card-section>
                {{document.label}}
              </q-card-section>
              <q-card-actions>
                <q-space></q-space>
                <q-btn flat color="primary">Перейти</q-btn>
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
      { type: 'Нормативная документация', label: 'Положение об организации занятий по физической культуре', iconType: 'mdi', icon: 'file-pdf-box', link: 'http://www.skf-mtusi.ru/files/info/docs/Polozhenie_zanyatiy_fk_01.09.17.pdf' },
      { type: 'Нормативная документация', label: 'Положение об обучении лиц с ограниченными возможностями здоровья', iconType: 'mdi', icon: 'file-pdf-box', link: 'http://www.skf-mtusi.ru/files/info/docs/poloz_lic_ogr_voz.pdf' },
      { type: 'Электронный ресурс', label: 'Министерство образования и науки Российской Федерации', iconType: 'mdi', icon: 'server', link: 'http://минобрнауки.рф/' },
      { type: 'Электронный ресурс', label: 'Федеральный портал «Российское образование»', iconType: 'mdi', icon: 'server', link: 'http://www.edu.ru/' },
      { type: 'Электронный ресурс', label: 'Информационная система «Единое окно доступа к образовательным ресурсам»', iconType: 'mdi', icon: 'server', link: 'http://window.edu.ru/' },
      { type: 'Электронный ресурс', label: 'Единая коллекция цифровых образовательных ресурсов', iconType: 'mdi', icon: 'server', link: 'http://schoolcollection.edu.ru/' },
      { type: 'Электронный ресурс', label: 'Федеральный центр информационно-образовательных ресурсов', iconType: 'mdi', icon: 'server', link: 'http://fcior.edu.ru/' },
      { type: 'Электронный ресурс', label: 'Электронный Каталог библиотеки СКФ МТУСИ', iconType: 'mdi', icon: 'server', link: 'http://lib.mtuci.ru/libdocs/ec1/dbi/' },
      { type: 'Электронный ресурс', label: 'ЭБС IPRbooks', iconType: 'mdi', icon: 'server', link: 'http://iprbookshop.ru/' },
      { type: 'Электронный ресурс', label: 'ЭБС Znanium.com', iconType: 'mdi', icon: 'server', link: 'http://znanium.com/' },
      { type: 'Нормативная документация', label: 'ПАСПОРТ ДОСТУПНОСТИ объекта социальной инфраструктуры (ОСИ)', iconType: 'mdi', icon: 'file-pdf-box', link: 'http://www.skf-mtusi.ru/files/ovz/PASPORT_OSI.pdf' },
      { type: 'Нормативная документация', label: 'ДОРОЖНАЯ КАРТА повышения доступности образовательной организации СКФ МТУСИ высшего образования для лиц с инвалидностью на 2020-2021 гг.', iconType: 'mdi', icon: 'file-pdf-box', link: 'http://www.skf-mtusi.ru/files/ovz/DOROZHNAYA_KARTA_SKF_MTUSI.pdf' },
      { type: 'Нормативная документация', label: 'Положением о порядке доступа сотрудников и студентов Университета к информационно-телекоммуникационным сетям и базам данных, учебным и методическим материалам, учебным фондам, материально-техническим средствам обеспечения образовательной деятельности', iconType: 'mdi', icon: 'file-pdf-box', link: 'http://www.mtuci.ru/sveden/objects/Inform_systems.pdf' }
    ]

    return {
      documents
    }
  },
}
</script>