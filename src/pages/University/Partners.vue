<template>
  <q-page padding>
    <div class="row">
      <div class="col-12">
        <span class="text-h3 text-grey-10">Наши партнеры</span>
      </div>
      <div class="col-12 q-my-xl">
        <div class="row">
          <div class="col-md-4 col-12 q-pa-md" v-for="(partner, index) in partners" :key="index">
            <q-card class="text-center">
              <q-img :src="partner.image" height="100px" fit="contain"></q-img>
              <q-card-section>
                <span class="text-overline">{{partner.label}}</span>
              </q-card-section>
              <q-card-actions>
                <q-btn type="a" color="primary" flat :href="partner.link">Подробнее</q-btn>
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
    const partners = [
      { label: 'Министерство информационных технологий и связи Ростовской области', image: 'http://skf-mtusi.ru/fileadmin/page_res/friends/22.png', link: 'http://minsvyaz.donland.ru/' },
      { label: 'Филиал ФГУП «ГРЧЦ» в Южном и Северо-Кавказском федеральных округах', image: 'http://skf-mtusi.ru/fileadmin/page_res/friends/06.png', link: 'http://www.grfc.ru/yufo/about/' },
      { label: 'Макрорегиональный филиал «Юг» ПАО «Ростелеком»', image: 'http://skf-mtusi.ru/fileadmin/page_res/friends/08.png', link: 'http://www.rostelecom.ru/about/branches/south/about/info/' },
      { label: 'УФПС Ростовской области Филиал ФГУП «Почта России»', image: 'http://skf-mtusi.ru/fileadmin/page_res/friends/15.png', link: 'http://www.rostovpost.ru/' },
      { label: 'Ростовский филиал ПАО «Вымпел-Коммуникации»', image: 'http://skf-mtusi.ru/fileadmin/page_res/friends/16.png', link: 'http://www.beeline.ru/index.wbp?region=rnd' },
      { label: 'Ростовское региональное отделение Кавказского филиала ПАО «МегаФон»', image: 'http://skf-mtusi.ru/fileadmin/page_res/friends/01.png', link: 'http://rostov.megafon.ru/' },
      { label: 'Ростовский филиал ПАО «Мобильные ТелеСистемы»', image: 'http://skf-mtusi.ru/fileadmin/page_res/friends/17.png', link: 'http://www.rnd.mts.ru/' },
      { label: 'ООО «Т2 Мобайл»', image: 'http://skf-mtusi.ru/fileadmin/page_res/friends/02.png', link: 'http://www.ru.tele2.ru/' },
      { label: 'ООО «Speckless Enterprise»', image: 'http://skf-mtusi.ru/fileadmin/page_res/friends/21.png', link: 'http://www.fiber.ru/' },
      { label: 'ЗАО «ЮгЭнергоПроект»', image: 'http://skf-mtusi.ru/fileadmin/page_res/friends/07.png', link: 'http://ugenergoproekt.ru/' },
      { label: 'ГК «ГЭНДАЛЬФ»', image: 'http://skf-mtusi.ru/fileadmin/page_res/friends/09.png', link: 'https://gendalf.ru/' },
      { label: 'Кадровый портал «Бест Воркс»', image: 'http://skf-mtusi.ru/fileadmin/page_res/friends/11.png', link: 'https://best.works/?utm_source=link_to_the_website&utm_medium=logo&utm_term=skf_mtusi&utm_campaign=site' },
      { label: 'ООО «Южный центр сертификации и испытаний» (ООО «ЮГ-ТЕСТ») ', image: 'http://skf-mtusi.ru/fileadmin/page_res/friends/05.png', link: 'http://www.ugtest.ru/' },
      { label: 'Филиал ФГУП «Российская телевизионная и радиовещательная сеть» «Краснодарский краевой радиотелевизионный передающий центр»', image: 'http://skf-mtusi.ru/fileadmin/page_res/friends/10.png', link: 'http://krasnodar.rtrs.ru/' },
      { label: 'Компания D-Link', image: 'http://skf-mtusi.ru/fileadmin/page_res/friends/13.png', link: 'http://www.dlink.ru/' },
      { label: 'ООО «ЛУКОЙЛ-Экоэнерго»', image: 'http://skf-mtusi.ru/fileadmin/page_res/friends/14.png', link: 'http://ekoenergo.lukoil.ru/' },
      { label: 'Донская государственная публичная библиотека', image: 'http://skf-mtusi.ru/fileadmin/page_res/friends/20.png', link: 'http://www.dspl.ru/' },
      { label: 'Электронно-библиотечная система IPRbooks', image: 'http://skf-mtusi.ru/fileadmin/page_res/friends/19.png', link: 'http://www.iprbookshop.ru/' },
      { label: 'СПАО «Ингосстрах»', image: 'http://skf-mtusi.ru/fileadmin/page_res/friends/12.png', link: 'http://www.ingos.ru/ru/' },
      { label: 'Поволжский государственный университет телекоммуникаций и информатики', image: 'http://skf-mtusi.ru/fileadmin/page_res/friends/03.png', link: 'http://www.psati.ru/' },
      { label: 'Санкт-Петербургский государственный университет телекоммуникаций им. проф. М.А.Бонч-Бруевича', image: 'http://skf-mtusi.ru/fileadmin/page_res/friends/18.png', link: 'http://www.sut.ru/' },
      { label: 'Сибирский государственный университет телекоммуникаций и информатики', image: 'http://skf-mtusi.ru/fileadmin/page_res/friends/04.png', link: 'https://www.sibsutis.ru/' }
    ]

    return {
      partners
    }
  },
}
</script>
