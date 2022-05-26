<template>
  <q-page padding>
    <div class="row q-col-gutter-sm">
      <div class="col-12 q-my-xl">
        <span class="text-grey-10 text-h3">Образование</span><br/>
        <span class="text-overline">Информация об общественной аккредитации: «Общественная аккредитация не проводилась»</span>
        <essential-link
          title="Лицензия на осуществление образовательной деятельности"
          link="http://www.skf-mtusi.ru/files/info/docs/Licen_21.04.16.pdf"
          icon="mdi-pdf-box"
          sideIcon
        ></essential-link>
      </div>
      <div class="col-12">
        <q-table
          title="Информация о сроке действия государственной аккредитации образовательной программы, о языках, на которых осуществляется образование (обучение)"
          :rows="programsEducationRow"
          :columns="programsEducationKey"
          row-key="name"
          wrap-cells
          :pagination="{
            rowsPerPage: 0
          }"
        ></q-table>
      </div>
      <div class="col-12">
        <essential-link
          title="Реализуемые адаптированные образовательные программы"
          link="http://www.skf-mtusi.ru/files/info/obraz/obr_prog_22.pdf"
          icon="mdi-pdf-box"
          sideIcon
        ></essential-link>
      </div>
      <div class="col-12 q-mt-md">
        <span class="text-grey-10 text-h5">График учебного процесса</span>
        <div class="row q-col-gutter-sm q-mt-md">
          <div class="col-md-6 col-12">
            <essential-link
              title="График учебного процесса студентов заочного факультета 2021-2022"
              link="http://www.skf-mtusi.ru/files/info/obraz/gr/gr_zfo_2021-2022.pdf"
              icon="mdi-pdf-box"
              sideIcon
            ></essential-link>
          </div>
          <div class="col-md-6 col-12">
            <essential-link
              title="График учебного процесса студентов заочного факультета 2022-2023"
              link="http://www.skf-mtusi.ru/files/info/obraz/gr/gr_zfo-2022-2023_1.pdf"
              icon="mdi-pdf-box"
              sideIcon
            ></essential-link>
          </div>
        </div>
      </div>
      <div class="col-12 q-mt-md">
        <span class="text-grey-10 text-h5">Расписание дополнительных консультаций</span>
        <div class="row q-col-gutter-sm q-mt-md">
          <div class="col-md-6 col-12">
            <essential-link
              title="Расписание дополнительных консультаций профессорско-преподавательского состава СКФ МТУСИ в 2021-2022 уч.г."
              link="http://www.skf-mtusi.ru/files/info/docs/pps-21-22.pdf"
              icon="mdi-pdf-box"
              sideIcon
            ></essential-link>
          </div>
        </div>
      </div>
      <div class="col-12 q-mt-md">
        <span class="text-grey-10 text-h5">Расписание защиты ВКР</span>
        <div class="row q-col-gutter-sm q-mt-md">
          <div class="col-md-6 col-12">
            <essential-link
              title="на июль, группы: ДЗ-41, ДС-41, ДП-41"
              link="http://www.skf-mtusi.ru/files/info/obraz/gr/vkr_07.2022.pdf"
              icon="mdi-pdf-box"
              sideIcon
            ></essential-link>
          </div>
        </div>
      </div>
      <div class="col-12 q-mt-md">
        <span class="text-grey-10 text-h5">Перечень тем выпускных квалификационных работ</span>
        <div class="row q-col-gutter-sm q-mt-md">
          <div class="col-md-6 col-12">
            <essential-link
              title="для студентов направления ИВТ"
              link="http://www.skf-mtusi.ru/files/info/docs/vkr/tem_vkr_ivt_2021.pdf"
              icon="mdi-pdf-box"
              sideIcon
            ></essential-link>
          </div>
          <div class="col-md-6 col-12">
            <essential-link
              title="для студентов направления ИТСС"
              link="http://www.skf-mtusi.ru/files/info/docs/vkr/tem_vkr_itss_2021.pdf"
              icon="mdi-pdf-box"
              sideIcon
            ></essential-link>
          </div>
        </div>
      </div>
      <div class="col-12 q-my-xl">
        <q-table
          title="План-графики проведения учебных занятий на 2021-2022 учебный год"
          :rows="planCurrentYearRow"
          :columns="planCurrentYearKey"
          row-key="name"
          wrap-cells
          :pagination="{
          rowsPerPage: 0
          }"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="code" :props="props">
                {{props.row.code}}
              </q-td>
              <q-td key="program" :props="props">
                {{props.row.program}}
              </q-td>
              <q-td key="formEdu" :props="props">
                {{props.row.formEdu}}
              </q-td>
              <q-td key="course_1" :props="props">
                <div v-if="props.row.course_1">
                  <template v-for="course in props.row.course_1">
                    <q-btn
                      flat
                      color="primary"
                      tag="a"
                      :href="course.link"
                    >{{course.label}}</q-btn>
                  </template>
                </div>
                <span v-else>-</span>
              </q-td>
              <q-td key="course_2" :props="props">
                <div v-if="props.row.course_2">
                  <template v-for="course in props.row.course_2">
                    <q-btn
                      flat
                      color="primary"
                      tag="a"
                      :href="course.link"
                    >{{course.label}}</q-btn>
                  </template>
                </div>
                <span v-else>-</span>
              </q-td>
              <q-td key="course_3" :props="props">
                <div v-if="props.row.course_3">
                  <template v-for="course in props.row.course_3">
                    <q-btn
                      flat
                      color="primary"
                      tag="a"
                      :href="course.link"
                    >{{course.label}}</q-btn>
                  </template>
                </div>
                <span v-else>-</span>
              </q-td>
              <q-td key="course_4" :props="props">
                <div v-if="props.row.course_4">
                  <template v-for="course in props.row.course_4">
                    <q-btn
                      flat
                      color="primary"
                      tag="a"
                      :href="course.link"
                    >{{course.label}}</q-btn>
                  </template>
                </div>
                <span v-else>-</span>
              </q-td>
              <q-td key="course_5" :props="props">
                <div v-if="props.row.course_5">
                  <template v-for="course in props.row.course_5">
                    <q-btn
                      flat
                      color="primary"
                      tag="a"
                      :href="course.link"
                    >{{course.label}}</q-btn>
                  </template>
                </div>
                <span v-else>-</span>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
      <div class="col-12 q-my-xl">
        <q-table
          title="План-графики проведения учебных занятий на 2022-2023 учебный год"
          :rows="planNextYearRow"
          :columns="planNextYearKey"
          row-key="name"
          wrap-cells
          :pagination="{
          rowsPerPage: 0
          }"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="code" :props="props">
                {{props.row.code}}
              </q-td>
              <q-td key="program" :props="props">
                {{props.row.program}}
              </q-td>
              <q-td key="formEdu" :props="props">
                {{props.row.formEdu}}
              </q-td>
              <q-td key="course_1" :props="props">
                <div v-if="props.row.course_1">
                  <template v-for="course in props.row.course_1">
                    <q-btn
                      flat
                      color="primary"
                      tag="a"
                      :href="course.link"
                    >{{course.label}}</q-btn>
                  </template>
                </div>
                <span v-else>-</span>
              </q-td>
              <q-td key="course_2" :props="props">
                <div v-if="props.row.course_2">
                  <template v-for="course in props.row.course_2">
                    <q-btn
                      flat
                      color="primary"
                      tag="a"
                      :href="course.link"
                    >{{course.label}}</q-btn>
                  </template>
                </div>
                <span v-else>-</span>
              </q-td>
              <q-td key="course_3" :props="props">
                <div v-if="props.row.course_3">
                  <template v-for="course in props.row.course_3">
                    <q-btn
                      flat
                      color="primary"
                      tag="a"
                      :href="course.link"
                    >{{course.label}}</q-btn>
                  </template>
                </div>
                <span v-else>-</span>
              </q-td>
              <q-td key="course_4" :props="props">
                <div v-if="props.row.course_4">
                  <template v-for="course in props.row.course_4">
                    <q-btn
                      flat
                      color="primary"
                      tag="a"
                      :href="course.link"
                    >{{course.label}}</q-btn>
                  </template>
                </div>
                <span v-else>-</span>
              </q-td>
              <q-td key="course_5" :props="props">
                <div v-if="props.row.course_5">
                  <template v-for="course in props.row.course_5">
                    <q-btn
                      flat
                      color="primary"
                      tag="a"
                      :href="course.link"
                    >{{course.label}}</q-btn>
                  </template>
                </div>
                <span v-else>-</span>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
      <div class="col-12 q-mt-md">
        <span class="text-grey-10 text-h5">Расписание практических занятий по Элективным курсам (ЛФК, ОФП, СС)</span>
        <div class="row q-col-gutter-sm q-mt-md">
          <div class="col-md-6 col-12">
            <essential-link
              title="Расписание практических занятий на февраль, март, апрель, май."
              link="http://www.skf-mtusi.ru/files/info/obraz/rasp-of/elektiv_kursy_of_02.2022.pdf"
              icon="mdi-pdf-box"
              sideIcon
            ></essential-link>
          </div>
        </div>
      </div>
      <div class="col-12 q-mt-md">
        <span class="text-grey-10 text-h5">Расписание занятий на II полугодие 2021-2022 уч. года</span>
        <div class="row q-col-gutter-sm q-mt-md">
          <div class="col-md-6 col-12">
            <essential-link
              title="Расписание занятий ДВ-11"
              link="http://www.skf-mtusi.ru/files/info/obraz/rasp-of/ii/ДВ-11.pdf"
              icon="mdi-pdf-box"
              sideIcon
            ></essential-link>
          </div>
          <div class="col-md-6 col-12">
            <essential-link
              title="Расписание занятий ДЗ-21"
              link="http://www.skf-mtusi.ru/files/info/obraz/rasp-of/ii/ДЗ-21.pdf"
              icon="mdi-pdf-box"
              sideIcon
            ></essential-link>
          </div>
          <div class="col-md-6 col-12">
            <essential-link
              title="Расписание занятий ДЗ-31"
              link="http://www.skf-mtusi.ru/files/info/obraz/rasp-of/ii/ДЗ-31.pdf"
              icon="mdi-pdf-box"
              sideIcon
            ></essential-link>
          </div>
          <div class="col-md-6 col-12">
            <essential-link
              title="Расписание занятий ДЗ-41"
              link="http://www.skf-mtusi.ru/files/info/obraz/rasp-of/ii/ДЗ-41.pdf"
              icon="mdi-pdf-box"
              sideIcon
            ></essential-link>
          </div>
          <div class="col-md-6 col-12">
            <essential-link
              title="Расписание занятий ДИ-11"
              link="http://www.skf-mtusi.ru/files/info/obraz/rasp-of/ii/ДИ-11.pdf"
              icon="mdi-pdf-box"
              sideIcon
            ></essential-link>
          </div>
          <div class="col-md-6 col-12">
            <essential-link
              title="Расписание занятий ДИ-12"
              link="http://www.skf-mtusi.ru/files/info/obraz/rasp-of/ii/ДИ-12.pdf"
              icon="mdi-pdf-box"
              sideIcon
            ></essential-link>
          </div>
          <div class="col-md-6 col-12">
            <essential-link
              title="Расписание занятий ДП-21"
              link="http://www.skf-mtusi.ru/files/info/obraz/rasp-of/ii/ДП-21.pdf"
              icon="mdi-pdf-box"
              sideIcon
            ></essential-link>
          </div>
          <div class="col-md-6 col-12">
            <essential-link
              title="Расписание занятий ДП-22"
              link="http://www.skf-mtusi.ru/files/info/obraz/rasp-of/ii/ДП-22.pdf"
              icon="mdi-pdf-box"
              sideIcon
            ></essential-link>
          </div>
          <div class="col-md-6 col-12">
            <essential-link
              title="Расписание занятий ДП-31"
              link="http://www.skf-mtusi.ru/files/info/obraz/rasp-of/ii/ДП-31.pdf"
              icon="mdi-pdf-box"
              sideIcon
            ></essential-link>
          </div>
          <div class="col-md-6 col-12">
            <essential-link
              title="Расписание занятий ДП-41"
              link="http://www.skf-mtusi.ru/files/info/obraz/rasp-of/ii/ДП-41.pdf"
              icon="mdi-pdf-box"
              sideIcon
            ></essential-link>
          </div>
          <div class="col-md-6 col-12">
            <essential-link
              title="Расписание занятий ДС-21"
              link="http://www.skf-mtusi.ru/files/info/obraz/rasp-of/ii/ДС-21.pdf"
              icon="mdi-pdf-box"
              sideIcon
            ></essential-link>
          </div>
          <div class="col-md-6 col-12">
            <essential-link
              title="Расписание занятий ДС-31"
              link="http://www.skf-mtusi.ru/files/info/obraz/rasp-of/ii/ДС-31.pdf"
              icon="mdi-pdf-box"
              sideIcon
            ></essential-link>
          </div>
          <div class="col-md-6 col-12">
            <essential-link
              title="Расписание занятий ДС-41"
              link="http://www.skf-mtusi.ru/files/info/obraz/rasp-of/ii/ДС-41.pdf"
              icon="mdi-pdf-box"
              sideIcon
            ></essential-link>
          </div>
        </div>
      </div>
      <div class="col-12 q-my-xl">
        <q-table
          title="Численность обучающихся (на 31.03.2022)"
          :rows="countLearnersRow"
          :columns="countLearnersKey"
          row-key="name"
          wrap-cells
          :pagination="{
          rowsPerPage: 0
          }"
        ></q-table>
      </div>
      <div class="col-12 q-my-xl">
        <q-table
          title="Результаты приема в СКФ МТУСИ в 2021 году"
          :rows="resultJoinCompanyRow"
          :columns="resultJoinCompanyKey"
          row-key="name"
          wrap-cells
          :pagination="{
          rowsPerPage: 0
          }"
        ></q-table>
        <div class="row q-col-gutter-sm q-mt-md">
          <div class="col-md-6 col-12">
            <essential-link
              title="План-график СКФ МТУСИ проведения мероприятий по контролю реализации образовательного процесса а 2019/2020 учебном году."
              link="http://www.skf-mtusi.ru/files/info/obraz/plan-graf_2019-2020.pdf"
              icon="mdi-pdf-box"
              sideIcon
            ></essential-link>
          </div>
        </div>
      </div>
      <div class="col-12">
        <q-table
          title="Перевод, восстановление и отчисление студентов (на 28.04.2022)"
          :rows="movmentStudentsRow"
          :columns="movmentStudentsKey"
          row-key="name"
          wrap-cells
          :pagination="{
            rowsPerPage: 0
          }"
        ></q-table>
        <div class="row q-col-gutter-sm q-mt-md">
          <div class="col-md-6 col-12">
            <essential-link
              title="Выписки из приказов по движению контингента на 28.04.2022"
              link="http://www.skf-mtusi.ru/files/info/obraz/form/28.04.2022.pdf"
              icon="mdi-pdf-box"
              sideIcon
            ></essential-link>
          </div>
        </div>
      </div>
      <div class="col-12 q-my-xl">
        <q-table
          title="Информация по образовательным программам"
          :rows="programmInfRow"
          :columns="programmInfKey"
          row-key="name"
          wrap-cells
          :pagination="{
          rowsPerPage: 0
          }"
        ></q-table>
      </div>
      <div class="col-12">
        <q-table
          title="Направления и результаты научной деятельности"
          :rows="directResultsRow"
          :columns="directResultsKey"
          row-key="name"
          wrap-cells
          :pagination="{
            rowsPerPage: 0
          }"
        ></q-table>
      </div>
      <div class="col-12 q-mt-md">
        <q-table
          title="Информация по адаптированным образовательным программам"
          :rows="adaptiveEDURow"
          :columns="adaptiveEDUKey"
          row-key="name"
          wrap-cells
          :pagination="{
            rowsPerPage: 0
          }"
        ></q-table>
      </div>
    </div>
  </q-page>
</template>

<script>
import EssentialLink from "components/EssentialLink";
  export default {
    name: 'Education',
    components: {
      EssentialLink
    },
    setup() {
      const programsEducationKey = [
        { name: 'code', label: 'Код', field: 'code', align: 'left' },
        { name: 'named', label: 'Наименование профессии, специальности, направления подготовки', field: 'named', align: 'left' },
        { name: 'level', label: 'Уровень образования', field: 'level', align: 'left' },
        { name: 'forms', label: 'Формы обучения', field: 'forms', align: 'left' },
        { name: 'time', label: 'Нормативный срок обучения', field: 'time', align: 'left' },
        { name: 'acriditated', label: 'Срок действия государственной аккредитации (дата окончания действия свидетельства о государственной аккредитации)', field: 'acriditated', align: 'left' },
        { name: 'lang', label: 'Языки, на которых осуществляется образование (обучение)', field: 'lang', align: 'left' }
      ]
      const programsEducationRow = [
        { code: '09.03.01', named: 'Направление подготовки: Информатика и вычислительная техника; Профиль подготовки: Вычислительные машины, комплексы, системы и сети', level: 'Бакалавриат академический', forms: 'Очная', time: '4 года', acriditated: '29.06.2023', lang: 'Русский' },
        { code: '09.03.01', named: 'Направление подготовки: Информатика и вычислительная техника; Профиль подготовки: Вычислительные машины, комплексы, системы и сети', level: 'Бакалавриат академический', forms: 'Заочная', time: '4 года 8 мес.', acriditated: '29.06.2023', lang: 'Русский' },
        { code: '09.03.01', named: 'Направление подготовки: Информатика и вычислительная техника; Профиль подготовки: Программное обеспечение и интеллектуальные системы', level: 'Бакалавриат академический', forms: 'Очная', time: '4 года', acriditated: '29.06.2023', lang: 'Русский' },
        { code: '09.03.01', named: 'Направление подготовки: Информатика и вычислительная техника; Профиль подготовки: Программное обеспечение и интеллектуальные системы', level: 'Бакалавриат академический', forms: 'Заочная', time: '4 года 8 мес', acriditated: '29.06.2023', lang: 'Русский' },
        { code: '11.03.02', named: 'Направление подготовки: Инфокоммуникационные технологии и системы связи; Профиль подготовки: Защищенные системы и сети связи', level: 'Бакалавриат академический', forms: 'Очная', time: '4 года', acriditated: '29.06.2023', lang: 'Русский' },
        { code: '11.03.02', named: 'Направление подготовки: Инфокоммуникационные технологии и системы связи; Профиль подготовки: Защищенные системы и сети связи', level: 'Бакалавриат академический', forms: 'Заочная', time: '4 года 8 мес.', acriditated: '29.06.2023', lang: 'Русский' },
        { code: '11.03.02', named: 'Направление подготовки: Инфокоммуникационные технологии и системы связи; Профиль подготовки: Многоканальные телекоммуникационные системы', level: 'Бакалавриат академический', forms: 'Очная', time: '4 года', acriditated: '29.06.2023', lang: 'Русский' },
        { code: '11.03.02', named: 'Направление подготовки: Инфокоммуникационные технологии и системы связи; Профиль подготовки: Многоканальные телекоммуникационные системы', level: 'Бакалавриат академический', forms: 'Заочная', time: '4 года 8 мес.', acriditated: '29.06.2023', lang: 'Русский' },
        { code: '11.03.02', named: 'Направление подготовки: Инфокоммуникационные технологии и системы связи; Профиль подготовки: Сети связи и системы коммутации', level: 'Бакалавриат академический', forms: 'Очная', time: '4 года', acriditated: '29.06.2023', lang: 'Русский' },
        { code: '11.03.02', named: '	Направление подготовки: Инфокоммуникационные технологии и системы связи; Профиль подготовки: Сети связи и системы коммутации', level: 'Бакалавриат академический', forms: 'Заочная', time: '4 года 8 мес', acriditated: '29.06.2023', lang: 'Русский' },
        { code: '11.03.02', named: 'Направление подготовки: Инфокоммуникационные технологии и системы связи; Профиль подготовки: Системы радиосвязи и радиодоступа', level: 'Бакалавриат академический', forms: 'Очная', time: '4 года', acriditated: '29.06.2023', lang: 'Русский' },
        { code: '11.03.02', named: 'Направление подготовки: Инфокоммуникационные технологии и системы связи; Профиль подготовки: Системы радиосвязи и радиодоступа', level: 'Бакалавриат академический', forms: 'Заочная', time: '4 года 8 мес', acriditated: '29.06.2023', lang: 'Русский' }
      ]

      const countLearnersKey = [
        { name: 'code', label: 'Код', field: 'code', align: 'left' },
        { name: 'direction', label: 'Направление подготовки, специальность', field: 'direction', align: 'left' },
        { name: 'level', label: 'Уровень образования', field: 'level', align: 'left' },
        { name: 'form', label: 'Форма обучения', field: 'form', align: 'left' },
        { name: 'federal', label: 'Численность обучающихся бюджетных ассигнований федерального бюджета', field: 'federal', align: 'left' },
        { name: 'subject', label: 'Численность обучающихся бюджетов субъектов Российской Федерации', field: 'subject', align: 'left' },
        { name: 'local', label: 'Численность обучающихся местных бюджетов', field: 'local', align: 'left' },
        { name: 'offer', label: 'Численность обучающихся по договорам об оказании платных образовательных услуг', field: 'offer', align: 'left' },
        { name: 'general', label: 'Общая численность обучающихся', field: 'general', align: 'left' }
      ]

      const countLearnersRow = [
        { code: '09.03.01', direction: 'Информатика и вычислительная техника', level: 'Бакалавриат академический', form: 'очная', federal: '86 / 1', subject: '0 / 0', local: '0 / 0', offer: '14 / 0', general: '100' },
        { code: '09.03.01', direction: 'Информатика и вычислительная техника', level: 'Бакалавриат академический', form: 'заочная', federal: '53 / 0', subject: '0 / 0	', local: '0 / 0	', offer: '87 / 1', general: '140' },
        { code: '11.03.02', direction: 'Инфокоммуникационные технологии и системы связи', level: 'Бакалавриат академический', form: 'очная', federal: '141 / 0', subject: '0 / 0', local: '0 / 0', offer: '12 / 0', general: '153' },
        { code: '11.03.02', direction: 'Инфокоммуникационные технологии и системы связи', level: 'Бакалавриат академический', form: 'заочная', federal: '160 / 0', subject: '0 / 0', local: '0 / 0', offer: '411 / 0', general: '571' }
      ]

      const movmentStudentsRow = [
        {
          code: '09.03.01',
          direction: 'ИВТ',
          level: 'Бакалавриат академический',
          form: 'очная',
          countOut: '2',
          countIn: '1',
          recovery: '0',
          dismiss: '10',
        },
        {
          code: '09.03.01',
          direction: 'ИВТ',
          level: 'Бакалавриат академический',
          form: 'заочная',
          countOut: '0',
          countIn: '2',
          recovery: '3',
          dismiss: '6',
        },
        {
          code: '11.03.02',
          direction: 'ИТСС',
          level: 'Бакалавриат академический',
          form: 'очная',
          countOut: '1',
          countIn: '0',
          recovery: '0',
          dismiss: '17',
        },
        {
          code: '11.03.02',
          direction: 'ИТСС',
          level: 'Бакалавриат академический',
          form: 'заочная',
          countOut: '0',
          countIn: '1',
          recovery: '6',
          dismiss: '3',
        }
      ]
      const movmentStudentsKey = [
        { name: 'code', label: 'Код', field: 'code', align: 'left' },
        { name: 'direction', label: 'Направление подготовки, специальность', field: 'direction', align: 'left' },
        { name: 'level', label: 'Уровень образования', field: 'level', align: 'left' },
        { name: 'form', label: 'Форма обучения', field: 'form', align: 'left' },
        { name: 'countOut', label: 'Численность обучающихся, переведенных в другие образовательные организации', field: 'countOut', align: 'left' },
        { name: 'countIn', label: 'Численность обучающихся, переведенных из других образовательных организаций', field: 'countIn', align: 'left' },
        { name: 'recovery', label: 'Численность восстановленных обучающихся', field: 'recovery', align: 'left' },
        { name: 'dismiss', label: 'Численность отчисленных обучающихся', field: 'dismiss', align: 'left' }
      ]

      const programmInfRow = [
        {
          code:'09.03.01',
          direction: 'Направление подготовки: Информатика и вычислительная техника; Профиль подготовки: Вычислительные машины, комплексы, системы и сети(ФГОС-3++ 2021)',
          level: 'Бакалавриат академический',
          form: 'Очная, заочная',
          discription: 'ООП 2021',
          plan: 'очная форма: 2021 заочная форма:2021',
          annotation: 'аннотации',
          studyProg: 'не реализуем',
          calendar: 'очная форма: 2021 заочная форма: 2021',
          documents: 'Список методических и иных документов',
          practice: 'учебная практика производств. практика преддипл. практика',
          distant: 'не используются',
        },
        {
          code:'09.03.01',
          direction: 'Направление подготовки: Информатика и вычислительная техника; Профиль подготовки: Программное обеспечение и интеллектуальные системы (ФГОС-3+)',
          level: 'Бакалавриат академический',
          form: 'Очная, заочная',
          discription: 'ООП 2017',
          plan: 'очная форма: 2018 заочная форма: 2017, 2018',
          annotation: 'аннотации',
          studyProg: 'не реализуем',
          calendar: 'очная форма: 2018 заочная форма: 2017, 2018',
          documents: 'Список методических и иных документов',
          practice: 'учебная практика производств. практика преддипл. практика',
          distant: 'не используются',
        },
        {
          code:'09.03.01',
          direction: 'Направление подготовки: Информатика и вычислительная техника; Профиль подготовки: Программное обеспечение и интеллектуальные системы (ФГОС-3++ 2019)',
          level: 'Бакалавриат академический',
          form: 'Очная, заочная',
          discription: 'ООП 2019',
          plan: 'очная форма: 2019, 2020 заочная форма: 2019, 2020',
          annotation: 'аннотации',
          studyProg: 'не реализуем',
          calendar: 'очная форма: 2019, 2020 заочная форма: 2019, 2020',
          documents: 'Список методических и иных документов',
          practice: 'Учебная (ознакомительная) Производственная (технологическая) Производственная (проектно-технологическая)',
          distant: 'не используются',
        },
        {
          code:'09.03.01',
          direction: 'Направление подготовки: Информатика и вычислительная техника; Профиль подготовки: Программное обеспечение и интеллектуальные системы (ФГОС-3++ 2021)',
          level: 'Бакалавриат академический',
          form: 'Очная, заочная',
          discription: 'ООП 2021',
          plan: 'очная форма: 2021 заочная форма: 2021',
          annotation: 'аннотации',
          studyProg: 'не реализуем',
          calendar: 'очная форма: 2021 заочная форма: 2021',
          documents: 'Список методических и иных документов',
          practice: 'учебная практика производств. практика преддипл. практика',
          distant: 'не используются',
        },
        {
          code:'11.03.02',
          direction: 'Направление подготовки: Инфокоммуникацион-ные технологии и системы связи; Профиль подготовки: Защищенные системы и сети связи (ФГОС-3+)',
          level: 'Бакалавриат академический',
          form: 'Очная, заочная',
          discription: 'ООП 2017',
          plan: 'очная форма: 2018 заочная форма: 2017, 2018',
          annotation: 'аннотации',
          studyProg: 'не реализуем',
          calendar: 'очная форма: 2018 заочная форма: 2017, 2018',
          documents: 'Список методических и иных документов',
          practice: 'учебная практика производств. практика преддипл. практика',
          distant: 'не используются',
        },
        {
          code:'11.03.02',
          direction: 'Направление подготовки: Инфокоммуникацион-ные технологии и системы связи; Профиль подготовки: Защищенные системы и сети связи (ФГОС-3++ 2019)',
          level: 'Бакалавриат академический',
          form: 'Очная, заочная',
          discription: 'ООП 2019',
          plan: 'очная форма: 2019, 2020 заочная форма: 2019, 2020',
          annotation: 'аннотации',
          studyProg: 'не реализуем',
          calendar: 'очная форма: 2019,2020 заочная форма: 2019, 2020',
          documents: 'Список методических и иных документов',
          practice: 'учебная практика производств. практика преддипл. практика',
          distant: 'не используются',
        },
        {
          code:'11.03.02',
          direction: 'Направление подготовки: Инфокоммуникацион-ные технологии и системы связи; Профиль подготовки: Защищенные системы и сети связи (ФГОС-3++ 2021)',
          level: 'Бакалавриат академический',
          form: 'Очная, заочная',
          discription: 'ООП 2021',
          plan: 'очная форма: 2021 заочная форма: 2021',
          annotation: 'аннотации',
          studyProg: 'не реализуем',
          calendar: 'очная форма: 2021 заочная форма: 2021',
          documents: 'Список методических и иных документов',
          practice: 'учебная практика производств. практика преддипл. практика',
          distant: 'не используются',
        },
        {
          code:'11.03.02',
          direction: 'Направление подготовки: Инфокоммуникацион-ные технологии и системы связи; Профиль подготовки: Многоканальные телекоммуникацион-ные системы (ФГОС-3+)',
          level: 'Бакалавриат академический',
          form: 'Очная, заочная',
          discription: 'ООП 2017',
          plan: 'очная форма:  заочная форма: 2017, 2018',
          annotation: 'аннотации',
          studyProg: 'не реализуем',
          calendar: 'очная форма:  заочная форма: 2017, 2018',
          documents: 'Список методических и иных документов',
          practice: 'учебная практика производств. практика преддипл. практика',
          distant: 'не используются',
        },
        {
          code:'11.03.02',
          direction: 'Направление подготовки: Инфокоммуникацион-ные технологии и системы связи; Профиль подготовки: Многоканальные телекоммуникацион-ные системы (ФГОС-3++ 2019)',
          level: 'Бакалавриат академический',
          form: 'Очная, заочная',
          discription: 'ООП 2019',
          plan: 'очная форма:  заочная форма: 2019',
          annotation: 'аннотации',
          studyProg: 'не реализуем',
          calendar: 'очная форма:  заочная форма: 2019',
          documents: 'Список методических и иных документов',
          practice: 'учебная практика производств. практика преддипл. практика',
          distant: 'не используются',
        },
        {
          code:'11.03.02',
          direction: 'Направление подготовки: Инфокоммуникацион-ные технологии и системы связи; Профиль подготовки: Многоканальные телекоммуникацион-ные системы (ФГОС-3++ 2021)',
          level: 'Бакалавриат академический',
          form: 'Очная, заочная',
          discription: 'ООП 2021',
          plan: 'очная форма: 2021 заочная форма: 2021',
          annotation: 'аннотации',
          studyProg: 'не реализуем',
          calendar: 'очная форма: 2021 заочная форма: 2021',
          documents: 'Список методических и иных документов',
          practice: 'учебная практика производств. практика преддипл. практика',
          distant: 'не используются',
        },
        {
          code:'11.03.02',
          direction: 'Направление подготовки: Инфокоммуникацион-ные технологии и системы связи; Профиль подготовки: Сети связи и системы коммутации (ФГОС-3+)',
          level: 'Бакалавриат академический',
          form: 'Очная, заочная',
          discription: 'ООП 2017',
          plan: 'очная форма: 2018 заочная форма: 2017, 2018',
          annotation: 'аннотации',
          studyProg: 'не реализуем',
          calendar: 'очная форма: 2018 заочная форма: 2017, 2018',
          documents: 'Список методических и иных документов',
          practice: 'учебная практика производств. практика преддипл. практика',
          distant: 'не используются',
        },
        {
          code:'11.03.02',
          direction: 'Направление подготовки: Инфокоммуникацион-ные технологии и системы связи; Профиль подготовки: Сети связи и системы коммутации (ФГОС-3++ 2019)',
          level: 'Бакалавриат академический',
          form: 'Очная, заочная',
          discription: 'ООП 2019',
          plan: 'очная форма: 2019, 2020 заочная форма: 2019, 2020',
          annotation: 'аннотации',
          studyProg: 'не реализуем',
          calendar: 'очная форма: 2019, 2020 заочная форма: 2019, 2020',
          documents: 'Список методических и иных документов',
          practice: 'учебная практика производств. практика преддипл. практика',
          distant: 'не используются',
        },
        {
          code:'11.03.02',
          direction: 'Направление подготовки: Инфокоммуникацион-ные технологии и системы связи; Профиль подготовки: Сети связи и системы коммутации (ФГОС-3++ 2021)',
          level: 'Бакалавриат академический',
          form: 'Очная, заочная',
          discription: 'ООП 2021',
          plan: 'очная форма: 2021 заочная форма: 2021',
          annotation: 'аннотации',
          studyProg: 'не реализуем',
          calendar: 'очная форма: 2021 заочная форма: 2021',
          documents: 'Список методических и иных документов',
          practice: 'учебная практика производств. практика преддипл. практика',
          distant: 'не используются',
        },
        {
          code:'11.03.02',
          direction: 'Направление подготовки: Инфокоммуникацион-ные технологии и системы связи; Профиль подготовки: Системы радиосвязи и радиодоступа (ФГОС-3++ 2021)',
          level: 'Бакалавриат академический',
          form: 'Очная, заочная',
          discription: 'ООП 2021',
          plan: 'очная форма: 2021 заочная форма: 2021',
          annotation: 'аннотации',
          studyProg: 'не реализуем',
          calendar: 'очная форма: 2021 заочная форма: 2021',
          documents: 'Список методических и иных документов',
          practice: 'учебная практика производств. практика преддипл. практика',
          distant: 'не используются',
        },
      ]

      const programmInfKey = [
        { name: 'code', label: 'Код', field: 'code', align: 'left'},
        { name: 'direction', label: 'Наименование специальности, направления подготовки', field: 'direction', align: 'left'},
        { name: 'level', label: 'Уровень образования', field: 'level', align: 'left'},
        { name: 'form', label: 'Реализуемые формы обучения', field: 'form', align: 'left'},
        { name: 'discription', label: 'Ссылка на описание образовательной программы с приложением ее копии (в том числе РПД)', field: 'discription', align: 'left'},
        { name: 'plan', label: 'Ссылка на учебный план', field: 'plan', align: 'left'},
        { name: 'annotation', label: 'Ссылка на аннотации к рабочим программам дисциплин (по каждой дисциплине в составе образовательной программы)', field: 'annotation', align: 'left'},
        { name: 'studyProg', label: 'Ссылка на рабочие программы (по каждой дисциплине в составе образова- тельной программы) в виде электронного документа, подписанного электронной подписью', field: 'studyProg', align: 'left'},
        { name: 'calendar', label: 'Ссылка на календарный учебный график', field: 'calendar', align: 'left'},
        { name: 'documents', label: 'Ссылка на методические и иные документы, разработанные образовательной организацией для обеспечения образовательного процесса', field: 'documents', align: 'left'},
        { name: 'practice', label: 'Ссылка на рабочие программы практик, предусмотренных соответствующей образовательной программой', field: 'practice', align: 'left'},
        { name: 'distant', label: 'Использование при реализации образовательных программ электронного обучения и дистанционных образовательных технологий', field: 'distant', align: 'left'},
      ]

      const directResultsRow = [
        {
          code: '11.03.02',
          direction: 'ИТСС',
          level: 'бакалавриат',
          list: '1. Использование прикладного программного обеспечения для моделирования инфокоммуникационных сетей. 2. Разработка и исследование алгоритмов функционирования датчиков фазового фронта в адаптивных оптических системах передачи информации. 3. Разработка методов автоматизированного анализа результатов измерений для выделения контуров объектов в изображениях. 4. Разработка и исследование высокоэффективных помехоустойчивых алгоритмов в каналах радиосвязи, функционирующих в условиях плотной городской застройки. 5. Разработка и исследование системы обеспечения информационной безопасности.',
          results: '1.Количество студентов, принимающих участие в научной (научно-исследовательской) деятельности – 21 чел. 2.Количество из-данных и принятых к публикации статей в изданиях, рекомендованных ВАК/зарубежных для публикации научных работ за последний год — 8/3 3.Количество патентов, полученных на разработки за послед-ний год: российских -1. 4.Количество свидетельств о регистрации объекта интеллектуальной собственности, выданных на разработки за последний год: российских- 5.',
          basics: 'Лаборатория сетей связи и систем коммутации Лаборатория направляющих средств электросвязи Лаборатория систем радиосвязи и телевидения Лаборатория МТС'
        },
        {
          code: '09.03.01',
          direction: 'ИВТ',
          level: 'бакалавриат',
          list: '1. Диагностика и мониторинг стохастических динамических объектов, распознавание нелинейных динамических структур, сверхбыстродействующие системы обработки информации, управление стохастическими динамическими объектами. 2. Инерциально-спутниковая навигация, помехоустойчивое обнаружение и фильтрация сигналов.',
          results: '1.Количество студентов, принимающих участие в научной (научно-исследовательской) деятельности – 29 чел. 2.Количество из-данных и принятых к публикации статей в изданиях, рекомендованных ВАК/зарубежных для публикации научных работ за последний год — 16/7 3.Количество патентов, полученных на разработки за послед-ний год: российских -3. 4.Количество свидетельств о регистрации объекта интеллектуальной собственности, выданных на разработки за последний год: российских- 5.',
          basics: 'Лаборатория Вычислительной техники и информатики'
        }
      ]

      const directResultsKey = [
        {name: 'code', label: 'Код', field: 'code', align: 'left'},
        {name: 'direction', label: 'Наименование специальности, направления подготовки', field: 'direction', align: 'left'},
        {name: 'level', label: 'Уровень образования', field: 'level', align: 'left'},
        {name: 'list', label: 'Перечень научных направлений, в рамках которых ведется научная (научно-исследовательская) деятельность', field: 'list', align: 'left'},
        {name: 'results', label: 'Результаты научной (научно-исследовательской) деятельности', field: 'results', align: 'left'},
        {name: 'basics', label: 'Сведения о научно-исследовательской базе для осуществления научной (научно-исследовательской) деятельности', field: 'basics', align: 'left'},
      ]

      const planCurrentYearKey = [
        { name: 'code', label: 'Код', field: 'code', align: 'left' },
        { name: 'program', label: 'Образовательная программа', field: 'program', align: 'left' },
        { name: 'formEdu', label: 'Форма обучения', field: 'formEdu', align: 'left' },
        { name: 'course_1', label: 'Курс 1', field: 'course_1', align: 'left' },
        { name: 'course_2', label: 'Курс 2', field: 'course_2', align: 'left' },
        { name: 'course_3', label: 'Курс 3', field: 'course_3', align: 'left' },
        { name: 'course_4', label: 'Курс 4', field: 'course_4', align: 'left' },
        { name: 'course_5', label: 'Курс 5', field: 'course_5', align: 'left' }
      ]

      const planCurrentYearRow = [
        {
          code: '09.03.01', program: 'ВМКСС', formEdu: 'очная',
          course_1: [{
            label: '1ДВ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/1dv_2021_01.pdf'
          }],
          course_2: null,
          course_3: null,
          course_4: null,
          course_5: null
        },
        {
          code: '09.03.01', program: 'ПОиИС', formEdu: 'очная',
          course_1: [{
            label: '1ДВ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/1dv_2021_01.pdf'
          }],
          course_2: [{
            label: '2ДП',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/2dp-2021_01.pdf'
          }],
          course_3: [{
            label: '3ДП',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/3dp-2021_02.pdf'
          }],
          course_4: [{
            label: '4ДП',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/4dp-2021_03.pdf'
          }],
          course_5: null
        },
        {
          code: '09.03.01', program: 'ВМКСС', formEdu: 'заочная',
          course_1: [{
            label: '1В',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/1v_2021.pdf'
          }],
          course_2: null,
          course_3: null,
          course_4: null,
          course_5: null
        },
        {
          code: '09.03.01', program: 'ПОиИС', formEdu: 'заочная',
          course_1: [{
            label: '1В',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/1v_2021.pdf'
          }],
          course_2: [{
            label: '2ПО',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/2po-2021.pdf'
          }],
          course_3: [{
            label: '3ПО',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/3po-2021.pdf'
          }],
          course_4: [{
            label: '4ПО',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/4po-2021.pdf'
          }],
          course_5: [{
            label: '5ПО',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/5po-2021.pdf'
          }]
        },
        {
          code: '11.03.02', program: 'ЗССС', formEdu: 'очная',
          course_1: [{
            label: '1ДИ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/1di-2021_01.pdf'
          }],
          course_2: [{
            label: '2ДЗ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/2dz-2021_01.pdf'
          }],
          course_3: [{
            label: '3ДЗ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/3dz-2021_02.pdf'
          }],
          course_4: [{
            label: '4ДЗ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/4dz-2021_02.pdf'
          }],
          course_5: null
        },
        {
          code: '11.03.02', program: 'МТС', formEdu: 'очная',
          course_1: [{
            label: '1ДИ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/1di-2021_01.pdf'
          }],
          course_2: null,
          course_3: null,
          course_4: null,
          course_5: null
        },
        {
          code: '11.03.02', program: 'СССК', formEdu: 'очная',
          course_1: [{
            label: '1ДИ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/1di-2021_01.pdf'
          }],
          course_2: [{
            label: '2ДС',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/2ds-2021_01.pdf'
          }],
          course_3: [{
            label: '3ДС',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/3ds-2021_02.pdf'
          }],
          course_4: [{
            label: '4ДС',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/4ds_2021_02.pdf'
          }],
          course_5: null
        },
        {
          code: '11.03.02', program: 'СРСиРД', formEdu: 'очная',
          course_1: [{
            label: '1ДИ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/1di-2021_01.pdf'
          }],
          course_2: null,
          course_3: null,
          course_4: null,
          course_5: null
        },
        {
          code: '11.03.02', program: 'ЗССС', formEdu: 'заочная',
          course_1: [{
            label: '1И',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/1i-2021.pdf'
          }, {
            label: '1КИ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/1ki-2021.pdf'
          }],
          course_2: [{
            label: '2ЗС',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/2zs-2021.pdf'
          }],
          course_3: [{
            label: '3ЗС',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/3zs-2021.pdf'
          }, {
            label: '3КЗ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/3kz_2021.pdf'
          }],
          course_4: [{
            label: '4ЗС',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/4zs_2021.pdf'
          }],
          course_5: [{
            label: '5ЗС',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/5zs-2021.pdf'
          }]
        },
        {
          code: '11.03.02', program: 'МТС', formEdu: 'заочная',
          course_1: [{
            label: '1И',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/1i-2021.pdf'
          }, {
            label: '1КИ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/1ki-2021.pdf'
          }],
          course_2: [{
            label: '2М',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/2m-2021.pdf'
          }],
          course_3: [{
            label: '3М',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/3m-2021.pdf'
          }, {
            label: '3КМ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/3km_2021.pdf'
          }],
          course_4: [{
            label: '4М',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/4m_2021.pdf'
          }],
          course_5: [{
            label: '5М',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/5m-2021.pdf'
          }]
        },
        {
          code: '11.03.02', program: 'СССК', formEdu: 'заочная',
          course_1: [{
            label: '1И',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/1i-2021.pdf'
          }, {
            label: '1КИ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/1ki-2021.pdf'
          }],
          course_2: [{
            label: '2С',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/2s-2021.pdf'
          }],
          course_3: [{
            label: '3С',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/3s-2021.pdf'
          }],
          course_4: [{
            label: '4С',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/4s_2021.pdf'
          }],
          course_5: [{
            label: '5С',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/5s-2021.pdf'
          }]
        },
        {
          code: '11.03.02', program: 'СРСиРД', formEdu: 'заочная',
          course_1: [{
            label: '1И',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/1i-2021.pdf'
          }, {
            label: '1КИ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/1ki-2021.pdf'
          }],
          course_2: [{
            label: '2КИ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2122/2ki-2021.pdf'
          }],
          course_3: null,
          course_4: null,
          course_5: null
        }
      ]

      const planNextYearKey = [
        { name: 'code', label: 'Код', field: 'code', align: 'left' },
        { name: 'program', label: 'Образовательная программа', field: 'program', align: 'left' },
        { name: 'formEdu', label: 'Форма обучения', field: 'formEdu', align: 'left' },
        { name: 'course_1', label: 'Курс 1', field: 'course_1', align: 'left' },
        { name: 'course_2', label: 'Курс 2', field: 'course_2', align: 'left' },
        { name: 'course_3', label: 'Курс 3', field: 'course_3', align: 'left' },
        { name: 'course_4', label: 'Курс 4', field: 'course_4', align: 'left' },
        { name: 'course_5', label: 'Курс 5', field: 'course_5', align: 'left' }
      ]

      const planNextYearRow = [
        {
          code: '09.03.01', program: 'ВМКСС', formEdu: 'очная',
          course_1: [{
            label: '1ДВ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/1dv_2022.pdf'
          }],
          course_2: null,
          course_3: null,
          course_4: null,
          course_5: null
        },
        {
          code: '09.03.01', program: 'ПОиИС', formEdu: 'очная',
          course_1: [{
            label: '1ДВ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/1dv_2022.pdf'
          }],
          course_2: [{
            label: '2ДП',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/2dp-2022.pdf'
          }],
          course_3: [{
            label: '3ДП',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/3dp-2022.pdf'
          }],
          course_4: [{
            label: '4ДП',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/4dp-2022.pdf'
          }],
          course_5: null
        },
        {
          code: '09.03.01', program: 'ВМКСС', formEdu: 'заочная',
          course_1: [{
            label: '1В',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/1v_2022.pdf'
          }],
          course_2: null,
          course_3: null,
          course_4: null,
          course_5: null
        },
        {
          code: '09.03.01', program: 'ПОиИС', formEdu: 'заочная',
          course_1: [{
            label: '1В',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/1v_2022.pdf'
          }],
          course_2: [{
            label: '2ПО',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/2po-2022.pdf'
          }],
          course_3: [{
            label: '3ПО',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/3po-2022.pdf'
          }],
          course_4: [{
            label: '4ПО',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/4po-2022.pdf'
          }],
          course_5: [{
            label: '5ПО',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/5po-2022.pdf'
          }]
        },
        {
          code: '11.03.02', program: 'ЗССС', formEdu: 'очная',
          course_1: [{
            label: '1ДИ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/1di-2022.pdf'
          }],
          course_2: [{
            label: '2ДЗ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/2dz-2022.pdf'
          }],
          course_3: [{
            label: '3ДЗ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/3dz-2022.pdf'
          }],
          course_4: [{
            label: '4ДЗ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/4dz-2022.pdf'
          }],
          course_5: null
        },
        {
          code: '11.03.02', program: 'МТС', formEdu: 'очная',
          course_1: [{
            label: '1ДИ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/1di-2022.pdf'
          }],
          course_2: null,
          course_3: null,
          course_4: null,
          course_5: null
        },
        {
          code: '11.03.02', program: 'СССК', formEdu: 'очная',
          course_1: [{
            label: '1ДИ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/1di-2022.pdf'
          }],
          course_2: null,
          course_3: [{
            label: '3ДС',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/3ds-2022.pdf'
          }],
          course_4: [{
            label: '4ДС',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/4ds_2022.pdf'
          }],
          course_5: null
        },
        {
          code: '11.03.02', program: 'СРСиРД', formEdu: 'очная',
          course_1: [{
            label: '1ДИ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/1di-2022.pdf'
          }],
          course_2: null,
          course_3: null,
          course_4: null,
          course_5: null
        },
        {
          code: '11.03.02', program: 'ЗССС', formEdu: 'заочная',
          course_1: [{
            label: '1И',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/1i-2022.pdf'
          }, {
            label: '1КИ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/1ki-2022.pdf'
          }],
          course_2: [{
            label: '2ЗС',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/2zs-2022.pdf'
          }],
          course_3: [{
            label: '3ЗС',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/3zs-2022.pdf'
          }],
          course_4: [{
            label: '4ЗС',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/4zs_2022.pdf'
          }, {
            label: '4КЗ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/4kz_2022.pdf'
          }],
          course_5: [{
            label: '5ЗС',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/5zs-2022.pdf'
          }]
        },
        {
          code: '11.03.02', program: 'МТС', formEdu: 'заочная',
          course_1: [{
            label: '1И',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/1i-2022.pdf'
          }, {
            label: '1КИ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/1ki-2022.pdf'
          }],
          course_2: [{
            label: '2М',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/2m-2022.pdf'
          }],
          course_3: null,
          course_4: [{
            label: '4М',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/4m_2022.pdf'
          }, {
            label: '4КМ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/4km_2022.pdf'
          }],
          course_5: [{
            label: '5М',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/5m-2022.pdf'
          }]
        },
        {
          code: '11.03.02', program: 'СССК', formEdu: 'заочная',
          course_1: [{
            label: '1И',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/1i-2022.pdf'
          }, {
            label: '1КИ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/1ki-2022.pdf'
          }],
          course_2: [{
            label: '2С',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/2s-2022.pdf'
          }],
          course_3: [{
            label: '3С',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/3s-2022.pdf'
          }],
          course_4: [{
            label: '4С',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/4s_2022.pdf'
          }],
          course_5: [{
            label: '5С',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/5s-2022.pdf'
          }]
        },
        {
          code: '11.03.02', program: 'СРСиРД', formEdu: 'заочная',
          course_1: [{
            label: '1И',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/1i-2022.pdf'
          }, {
            label: '1КИ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/1ki-2022.pdf'
          }],
          course_2: [{
            label: '2КИ',
            link: 'http://www.skf-mtusi.ru/files/info/obraz/pg2223/2ki-2022.pdf'
          }],
          course_3: null,
          course_4: null,
          course_5: null
        }
      ]

      const resultJoinCompanyKey = [
        { name: 'code', label: 'Код', field: 'code', align: 'left' },
        { name: 'direction', label: 'Направление подготовки, специальность', field: 'direction', align: 'left' },
        { name: 'level', label: 'Уровень образования', field: 'level', align: 'left' },
        { name: 'form', label: 'Форма обучения', field: 'form', align: 'left' },
        { name: 'federal', label: 'Численность обучающихся бюджетных ассигнований федерального бюджета', field: 'federal', align: 'left' },
        { name: 'subject', label: 'Численность обучающихся бюджетов субъектов Российской Федерации', field: 'subject', align: 'left' },
        { name: 'local', label: 'Численность обучающихся местных бюджетов', field: 'local', align: 'left' },
        { name: 'offer', label: 'Численность обучающихся по договорам об оказании платных образовательных услуг', field: 'offer', align: 'left' },
        { name: 'general', label: 'Средняя сумма набранных баллов по всем вступительным испытаниям', field: 'general', align: 'left' }
      ]

      const resultJoinCompanyRow = [
        { code: '09.03.01', direction: 'Информатика и вычислительная техника', level: 'Бакалавриат академический', form: 'очная', federal: '25', subject: '0', local: '0', offer: '0', general: '193,40' },
        { code: '09.03.01', direction: 'Информатика и вычислительная техника', level: 'Бакалавриат академический', form: 'заочная', federal: '11', subject: '0', local: '0', offer: '16', general: '172,90' },
        { code: '11.03.02', direction: 'Инфокоммуникационные технологии и системы связи', level: 'Бакалавриат академический', form: 'очная', federal: '65', subject: '0', local: '0', offer: '0', general: '158,50' },
        { code: '11.03.02', direction: 'Инфокоммуникационные технологии и системы связи', level: 'Бакалавриат академический', form: 'заочная', federal: '40', subject: '0', local: '0', offer: '57', general: '167,00' }
      ]

      const adaptiveEDUKey = [
        { name: 'code', label: 'Код', field: 'code', align: 'left' },
        { name: 'direction', label: 'Наименование специальности, направления подготовки', field: 'direction', align: 'left' },
        { name: 'level', label: 'Уровень образования', field: 'level', align: 'left' },
        { name: 'form', label: 'Реализуемые формы обучения', field: 'form', align: 'left' },
        { name: 'desc', label: 'Ссылка на описание образователь- ной программы с приложением ее копии (в том числе РПД)', field: 'desc', align: 'left' },
        { name: 'eduPlan', label: 'Ссылка на учебный план', field: 'eduPlan', align: 'left' },
        { name: 'annotation', label: 'Ссылка на аннотации к рабочим программам дисциплин (по каждой дисциплине в составе образовательной программы)', field: 'annotation', align: 'left' },
        { name: 'program', label: 'Ссылка на рабочие программы (по каждой дисциплине в составе образовательной программы) в виде электронного документа, подписанного электронной подписью', field: 'program', align: 'left' },
        { name: 'calendar', label: 'Ссылка на календарный учебный график', field: 'calendar', align: 'left' },
        { name: 'metod', label: 'Ссылка на методические и иные документы, разработанные образовательной организацией для обеспечения образовательного процесса', field: 'metod', align: 'left' },
        { name: 'practice', label: 'Ссылка на рабочие программы практик, предусмотренных соответствующей образовательной программой', field: 'practice', align: 'left' },
        { name: 'techno', label: 'Использование при реализации образовательных программ электронного обучения и дистанционных образовательных технологий', field: 'techno', align: 'left' }
      ]

      const adaptiveEDURow = [
        {
          code: '09.03.01',
          direction: 'Информатика и вычислительная техника',
          level: 'Высшее образование - бакалавриат',
          form: 'Не реализуется',
          desc: '-',
          eduPlan: '-',
          annotation: '-',
          program: '-',
          calendar: '-',
          metod: '-',
          practice: '-',
          techno: 'Возможно по заявлению для лиц с ОВЗ'
        },
        {
          code: '11.03.02',
          direction: 'Инфокоммуникационные технологии и системы связи',
          level: 'Высшее образование - бакалавриат',
          form: 'Не реализуется',
          desc: '-',
          eduPlan: '-',
          annotation: '-',
          program: '-',
          calendar: '-',
          metod: '-',
          practice: '-',
          techno: 'Возможно по заявлению для лиц с ОВЗ'
        }
      ]

      return {
        programsEducationKey,
        programsEducationRow,
        countLearnersKey,
        countLearnersRow,
        movmentStudentsKey,
        movmentStudentsRow,
        programmInfKey,
        programmInfRow,
        directResultsKey,
        directResultsRow,
        planCurrentYearKey,
        planCurrentYearRow,
        planNextYearKey,
        planNextYearRow,
        resultJoinCompanyKey,
        resultJoinCompanyRow,
        adaptiveEDUKey,
        adaptiveEDURow
      }
    }
  }

</script>
