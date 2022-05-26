<template>
  <q-page padding>
    <div class="row">
      <div class="col-12">
        <span class="text-h3 text-grey-10">Финансово-хозяйственная деятельность</span>
      </div>
      <div class="col-12 q-my-xl">
        <div class="row">
          <div class="col-md-4 col-12 q-pa-md" v-for="(document, index) in documents" :key="index">
            <q-card rounded>
              <q-item-section class="text-center">
                <q-avatar>
                  <q-icon :name="'mdi-'+document.icon" color="red"></q-icon>
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label header>{{document.label}}</q-item-label>
              </q-item-section>
              <q-card-actions>
                <q-space></q-space>
                <a :href="document.link" class="text-primary">СКАЧАТЬ</a>
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
      <div class="col-12 q-my-xl">
        <span class="text-h3 text-grey-10">Показатели финансово-хозяйственной деятельности</span>
      </div>
      <div class="col-12">
        <div class="row q-mb-xl" v-for="indicator in indicators" :key="indicator.name">
          <div class="col-md-4 col-12 q-pa-sm" v-for="(consist, index) in indicator.consist" :key="index">
            <q-card>
              <q-item>
                <span class="text-primary text-h4">{{++index}}</span>
                <q-space></q-space>
                <span class="text-overline">{{indicator.name}}</span>
              </q-item>
              <q-card-section>
                <span class="text-body1">{{consist}}</span>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <div class="col-12 q-my-xl">
        <q-table
          title="Сведений о поступлении финансовых и материальных средств и об их расходовании"
          :rows="rateEduRow"
          :columns="rateEduKey"
          row-key="name"
          wrap-cells
        ></q-table>
      </div>
      <div class="col-12">
        <q-table
          title="Объем образовательной деятельности, финансовое обеспечение которой осуществляется"
          :rows="valueEduRow"
          :columns="valueEduKey"
          row-key="name"
          wrap-cells
        ></q-table>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  setup() {
    const valueEduKey = [
      { name: 'assigned', label: 'за счёт бюджетных ассигнований федерального бюджета (тыс. руб.)', field: 'assigned', align: 'left' },
      { name: 'subRf', label: 'за счёт бюджетов субъектов Российской Федерации (тыс. руб.)', field: 'subRf', align: 'left' },
      { name: 'sub', label: 'за счёт местных бюджетов (тыс. руб.)', field: 'sub', align: 'left' },
      { name: 'contract', label: 'по договорам об образовании за счет средств физических и (или) юридических лиц (тыс. руб.)', field: 'contract', align: 'left' }
    ]

    const valueEduRow = [
      {
        assigned: '24 244, 6',
        subRf: '-',
        sub: '-',
        contract: '30 030, 4'
      }
    ]

    const rateEduKey = [
      { name: 'years', label: 'Год', field: 'years', align: 'left' },
      { name: 'join', label: 'Поступившие финансовые и материальные средства', field: 'join', align: 'left' },
      { name: 'leave', label: 'Расходованные финансовые и материальные средств', field: 'leave', align: 'left' }
    ]

    const rateEduRow = [
      {
        years: '2020',
        join: '57 446, 8',
        leave: '54 275, 0'
      }
    ]

    const documents = [
      { label: 'План финансово-хозяйственной деятельности', link: 'http://www.skf-mtusi.ru/files/info/fhd/Plan_FHD_2021.pdf', icon: 'file-pdf-box' },
      { label: 'План финансово-хозяйственной деятельности', link: 'http://www.skf-mtusi.ru/files/info/fhd/Plan_FHD_2021.pdf', icon: 'file-pdf-box' },
      { label: 'Ссылка на информацию, представленную на официальном сайте государственных (муниципальных) образовательных организаций', link: 'http://bus.gov.ru/pub/info-card/175226', icon: 'file-pdf-box' },
      { label: 'Приложение №2 к методике формирования государственного задания на оказание государственных услуг по реализации образовательных программ высшего и среднего профессионального образования на очередной финансовый год и плановый период, утвержденной приказом', link: 'http://www.skf-mtusi.ru/files/info/fhd/Prilozhenie_2.pdf', icon: 'file-pdf-box' },
      { label: 'Отчет о финансовых результатах деятельности учреждения', link: 'http://www.skf-mtusi.ru/files/info/fhd/otchet_2021.pdf', icon: 'file-pdf-box' },
      { label: 'Отчет об исполнении учреждением ПФХД по приносящей доход деятельности', link: 'http://www.skf-mtusi.ru/files/info/fhd/dohod_2021.pdf', icon: 'file-pdf-box' },
      { label: 'Отчет об исполнении учреждением ПФХД по субсидиям на выполнение государственного задания', link: 'http://www.skf-mtusi.ru/files/info/fhd/gos_zak_2021.pdf', icon: 'file-pdf-box' },
      { label: 'Отчет об исполнении учреждением ПФХД по субсидиям на иные цели', link: 'http://www.skf-mtusi.ru/files/info/fhd/in_c_2021.pdf', icon: 'file-pdf-box' },
      { label: 'Баланс государственного (муниципального) учреждения', link: 'http://www.skf-mtusi.ru/files/info/fhd/Balans_gos_uch_2021.pdf', icon: 'file-pdf-box' }
    ]

    const indicators = [
      { name: 'Источники поступления средств', consist: ['субсидии на выполнение государственного задания', 'субсидии на иные цели', 'средства, полученные от приносящей доход деятельности'] },
      { name: 'Структура доходов', consist: ['субсидии на выполнение государственного задания', 'субсидии на иные цели', 'средства, полученные от приносящей доход деятельности', 'договора на полное возмещение затрат на обучение', 'оказание платных дополнительных образовательных услуг', 'довузовская подготовка для лиц, изъявляющих желание поступить в Филиал', 'курсы повышения квалификации, компьютерные курсы и т.п.', 'оказание копировально-множительных услуг, тиражирование учебных, учебно-методических и других материалов', 'предоставление в аренду недвижимого имущества', 'выполнение хоз. договорных НИР и прочих работ', 'добровольные пожертвования и целевые взносы юридических и физических лиц и т.д.'] },
      { name: 'Источники расходования средств', consist: ['субсидии на выполнение государственного задания', 'субсидии на иные цели', 'средства, полученные от приносящей доход деятельности'] },
      { name: 'Структура расходов', consist: ['выплату заработной платы, стимулирующих и поощрительных выплат, материальной помощи', 'уплату страховых взносов', 'возмещение затрат, связанных со служебными командировками', 'оплату коммунальных услуг и услуг связи', 'работы и услуги, связанные с содержанием имущества', 'оплату прочих работ и услуг', 'выплату стипендий, а также выплату материальной поддержки студентов', 'увеличение стоимости основных средств, материальных запасов', 'прочие расходы, связанные с уплатой налогов и сборов, уплатой иных платежей'] },
    ]

    return {
      valueEduKey,
      valueEduRow,
      rateEduKey,
      rateEduRow,
      documents,
      indicators
    }
  },
}
</script>
