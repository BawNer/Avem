<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col-12 q-my-xl">
        <span class="text-grey-10 text-h3">Документы</span>
      </div>
      <div class="col-12">
        <div class="row q-col-gutter-sm">
          <div
            class="col-12"
            v-for="doc in docsPt1"
          >
            <q-card>
              <q-item>
                <q-item-section avatar>
                  <q-icon color="red" name="mdi-pdf-box"></q-icon>
                </q-item-section>
                <q-item-section class="text-subtitle1">{{doc.label}}</q-item-section>
                <q-item-section side>
                  <q-btn flat color="primary" tag="a" :href="doc.link">Скачать</q-btn>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
          <div class="col-12">
            <q-separator spaced></q-separator>
          </div>
          <div
            class="col-12"
            v-for="doc in docsPt2"
          >
            <q-card>
              <q-item>
                <q-item-section avatar>
                  <q-icon color="red" name="mdi-pdf-box"></q-icon>
                </q-item-section>
                <q-item-section class="text-subtitle1">{{doc.label}}</q-item-section>
                <q-item-section side>
                  <q-btn flat color="primary" tag="a" :href="doc.link">Скачать</q-btn>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
          <div class="col-12">
            <q-separator spaced></q-separator>
          </div>
          <div
            class="col-12"
            v-for="doc in docsPt3"
          >
            <q-card>
              <q-item>
                <q-item-section avatar>
                  <q-icon color="red" name="mdi-pdf-box"></q-icon>
                </q-item-section>
                <q-item-section class="text-subtitle1">{{doc.label}}</q-item-section>
                <q-item-section side>
                  <q-btn flat color="primary" tag="a" :href="doc.link">Скачать</q-btn>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
          <div class="col-12">
            <q-separator spaced></q-separator>
          </div>
          <div
            class="col-12"
            v-for="doc in docsPt4"
          >
            <q-card>
              <q-item>
                <q-item-section avatar>
                  <q-icon color="red" name="mdi-pdf-box"></q-icon>
                </q-item-section>
                <q-item-section class="text-subtitle1">{{doc.label}}</q-item-section>
                <q-item-section side>
                  <q-btn flat color="primary" tag="a" :href="doc.link">Скачать</q-btn>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
          <div class="col-12">
            <q-separator spaced></q-separator>
          </div>
          <div class="col-12">
            <ul>
              <li>Предписания органов, осуществляющих государственный контроль (надзор) в сфере образования: <b>предписаний нет</b></li>
              <li>Отчёты об исполнении предписаний органов, осуществляющих государственный контроль (надзор) в сфере образования: <b>предписаний нет</b></li>
            </ul>
          </div>
          <div class="col-12">
            <q-separator spaced></q-separator>
          </div>
          <div
            class="col-12"
            v-for="doc in docsPt5"
          >
            <q-card>
              <q-item>
                <q-item-section avatar>
                  <q-icon color="red" name="mdi-pdf-box"></q-icon>
                </q-item-section>
                <q-item-section class="text-subtitle1">{{doc.label}}</q-item-section>
                <q-item-section side>
                  <q-btn flat color="primary" tag="a" :href="doc.link">Скачать</q-btn>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
          <div class="col-12">
            <q-separator spaced></q-separator>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Documents',
  setup() {
    const docsPt1 = [
      {
        label: 'Устав МТУСИ',
        link: 'http://www.skf-mtusi.ru/files/info/docs/Ustav_30.12.2020.pdf'
      },
      {
        label: 'Лицензия на осуществление образовательной деятельности',
        link: 'http://www.skf-mtusi.ru/files/info/docs/Licen_21.04.16.pdf'
      },
      {
        label: 'Свидетельство о государственной аккредитации',
        link: 'http://www.skf-mtusi.ru/files/info/docs/Akkr_29.06.2017.pdf'
      },
      {
        label: 'Приложение №1 к свидетельству о государственной аккредитации',
        link: 'http://www.skf-mtusi.ru/files/info/docs/Pril1_akkred_29.06.2017.pdf'
      },
      {
        label: 'Приложение №2 к свидетельству о государственной аккредитации',
        link: 'http://www.skf-mtusi.ru/files/info/docs/Pril2_akkred_29.06.2017.pdf'
      },
      {
        label: 'План финансово-хозяйственной деятельности',
        link: 'http://www.skf-mtusi.ru/files/info/fhd/Plan_FHD_2021.pdf'
      }
    ]

    const docsPt2 = [
      {
        label: 'Правила приема в Северо-Кавказский филиал ордена Трудового Красного Знамени федерального государственного бюджетного образовательного учреждения высшего образования «Московский технический университет связи и информатики» (СКФ МТУСИ)',
        link: 'http://www.skf-mtusi.ru/files/docs/Pravila_priema_2022.pdf'
      },
      {
        label: 'Положение о режиме занятий обучающихся',
        link: 'http://www.skf-mtusi.ru/files/info/docs/Rezhim_zanyat_04.04.22.pdf'
      },
      {
        label: 'Положение О порядке осуществления образовательной деятельности по индивидуальным учебным планам, в том числе ускоренного обучения',
        link: 'http://www.skf-mtusi.ru/files/info/docs/pol_o_odr_deit.pdf'
      },
      {
        label: 'Положение о практической подготовке обучающихся в СКФ МТУСИ',
        link: 'http://www.skf-mtusi.ru/files/info/docs/praktika_studentov_2021.pdf'
      },
      {
        label: 'Положение об условиях и порядке зачисления экстернов в СКФ МТУСИ',
        link: 'http://www.skf-mtusi.ru/files/info/docs/poloz_o_ekstern_2017.pdf'
      },
      {
        label: 'Положение об обучении лиц с ограниченными возможностями здоровья',
        link: 'http://www.skf-mtusi.ru/files/info/docs/poloz_lic_ogr_voz_2021.pdf'
      },
      {
        label: 'Положение О текущем контроле успеваемости и промежуточной аттестации студентов очной формы обучения с использованием модульно-рейтинговой системы организации учебного процесса (2022 год)',
        link: 'http://www.skf-mtusi.ru/files/info/docs/Formi_sroki_kontrolya_2022.pdf'
      },
      {
        label: 'Положение о текущем контроле и промежуточной аттестации студентов заочной формы обучения',
        link: 'http://www.skf-mtusi.ru/files/info/docs/Polozhenie_o_kontrole_zf_04.05.22.pdf'
      },
      {
        label: 'Положение о переводе, восстановлении и отчислении обучающихся',
        link: 'http://www.skf-mtusi.ru/files/info/docs/Perevod_06.04.2022.pdf'
      },
      {
        label: 'Положение о переводе студентов СКФ МТУСИ с платного обучения на бесплатное',
        link: 'http://www.skf-mtusi.ru/files/info/docs/perevod_plat_bezplat-2022.pdf'
      },
      {
        label: 'Положение о порядке оформления возникновения, приостановления и прекращения отношений между СКФ МТУСИ и обучающимися и (или) родителями (законными представителями) несовершеннолетних обучающихся',
        link: 'http://www.skf-mtusi.ru/files/info/docs/Otnoshenie_05.05.2022.pdf'
      },
      {
        label: 'Правила внутреннего распорядка обучающихся',
        link: 'http://www.skf-mtusi.ru/files/info/docs/Pravila_rasporyadka_04.04.2022.pdf'
      },
      {
        label: 'Правила внутреннего трудового распорядка для сотрудников и преподавателей',
        link: 'http://www.skf-mtusi.ru/files/info/docs/Pravila_trud_rasporyadka_19.06.2018.pdf'
      },
      {
        label: 'Коллективный договор СКФ МТУСИ',
        link: 'http://www.skf-mtusi.ru/files/info/docs/Kol_dorovor_20.05.2019.pdf'
      },
      {
        label: 'Дополнительное соглашение №1 Коллективному договору СКФ МТУСИ',
        link: 'http://www.skf-mtusi.ru/files/info/docs/Dop1_Kol_dorovor_20.05.2019.pdf'
      }
    ]

    const docsPt3 = [
      {
        label: 'Отчет о результатах самообследования 2021 г.',
        link: 'http://www.skf-mtusi.ru/files/info/docs/Othet_o_samoobsledovanii_2021.pdf'
      }
    ]

    const docsPt4 = [
      {
        label: 'Об утверждении стоимости платных образовательных услуг ордена Трудового Красного Знамени федерального государственного бюджетного образовательного учреждение высшего образования «Московский технический университет связи и информатики» (МТУСИ) по образовательным программам высшего и среднего профессионального образования – программам бакалавриата, специалитета, магистратуры, аспирантуры очной и заочной форм обучения на 2021-2022 учебный год',
        link: 'http://www.skf-mtusi.ru/files/info/docs/Stoimost_obuch_2021-2022.pdf'
      },
      {
        label: 'Положение об установлении оснований и порядка снижения стоимости платных образовательных услуг',
        link: 'http://www.skf-mtusi.ru/files/info/docs/snizheniya_stoimosti_2020n.pdf'
      }
    ]

    const docsPt5 = [
      {
        label: 'Положение о СКФ МТУСИ',
        link: 'http://www.skf-mtusi.ru/files/info/docs/polozhenie_skf-mtusi.pdf'
      },
      {
        label: 'Положение об Ученом совете СКФ МТУСИ',
        link: 'http://www.skf-mtusi.ru/files/info/docs/pol_us-2020.pdf'
      },
      {
        label: 'Приказ о мерах по предупреждению распространения коронавирусной инфекции',
        link: 'http://www.skf-mtusi.ru/files/info/docs/2019-nCoV-mtusi-1.pdf'
      },
      {
        label: 'Меры по профилактике распространения коронавирусной инфекции среди работников и студентов',
        link: 'http://www.skf-mtusi.ru/files/info/docs/2019-nCoV-mtusi-2.pdf'
      },
      {
        label: 'Приказ по студенческому составу факультета инфокоммуникаций о мерах по противодействия распространения коронавирусной инфекции №1',
        link: 'http://www.skf-mtusi.ru/files/info/docs/2019-nCoV-mtusi-3_1.pdf'
      },
      {
        label: 'Приказ по студенческому составу факультета инфокоммуникаций о мерах по противодействия распространения коронавирусной инфекции №2',
        link: 'http://www.skf-mtusi.ru/files/info/docs/2019-nCoV-mtusi-3_2.pdf'
      },
      {
        label: 'Распоряжение о порядке взаимодействия профессорско-преподавательского состава и студентов СКФ МТУСИ в период распространения коронавирусной инфекции на территории РФ путем перехода на дистанционные методы обучения',
        link: 'http://www.skf-mtusi.ru/files/info/docs/2019-nCoV-mtusi-4.pdf'
      },
      {
        label: 'Приказ о мерах по реализации СКФ МТУСИ Указа Президента Российской Федерации от 02 апреля 2020 года № 239 «О мерах по обеспечению санитарно-эпидемиологического благополучия населения на территории Российской Федерации в связи с распространением новой коронавирусной инфекции (COVID-19)»»',
        link: 'http://www.skf-mtusi.ru/files/info/docs/2019-nCoV-mtusi_5.pdf'
      },
      {
        label: 'Положение «О реализации образовательных программ с применением электронного обучения и дистанционных образовательных технологий в условиях распространения коронавирусной инфекции на территории Российской Федерации»',
        link: 'http://www.skf-mtusi.ru/files/info/docs/2019-nCoV-mtusi_6n.pdf'
      },
      {
        label: 'Положение об организации оформления, выдачи и использования разрешений для следования к месту (от места) осуществления деятельности (в том числе работы) на территории муниципального образования «Город Ростов-на-Дону» в СКФ МТУСИ',
        link: 'http://www.skf-mtusi.ru/files/info/docs/nCoV-prop_1.pdf'
      },
      {
        label: 'Приказ о продлении нерабочих дней с сохранением заработной платы и продлении работы в дистанционном режиме',
        link: 'http://www.skf-mtusi.ru/files/info/docs/2019-nCoV-mtusi_7.pdf'
      },
      {
        label: 'Положение «О проведении всех видов практик в условиях применения электронного обучения и дистанционных образовательных технологий в условиях распространения коронавирусной инфекции на территории Российской Федерации»',
        link: 'http://www.skf-mtusi.ru/files/info/docs/praktika_dist_nCov.pdf'
      },
      {
        label: 'Положение о рабочих программах дисциплин, практик',
        link: 'http://www.skf-mtusi.ru/files/info/docs/pol_rab_pr_dis_pr_2019.pdf'
      },
      {
        label: 'Положение о расписании учебных занятий СКФ МТУСИ',
        link: 'http://www.skf-mtusi.ru/files/info/docs/Polozhenie_o_raspisanii_zanyatiy_04.04.22.pdf'
      },
      {
        label: 'Положение о порядке усвоения учебных курсов, дисциплин, модулей, не входящих в осваиваемую образовательную программу',
        link: 'http://www.skf-mtusi.ru/files/info/docs/pol_usv.pdf'
      },
      {
        label: 'Положение о воспитательной работе со студентами',
        link: 'http://www.skf-mtusi.ru/files/info/docs/vosp_stud_2017.pdf'
      },
      {
        label: 'Положение об аттестационных комиссиях и порядке аттестации дисциплин, практик и учебных планов',
        link: 'http://www.skf-mtusi.ru/files/info/docs/pol_att_kom_i_att.pdf'
      },
      {
        label: 'Положение о контроле образовательной деятельности в СКФ МТУСИ',
        link: 'http://www.skf-mtusi.ru/files/info/docs/pol_kontr_deit_skf.pdf'
      },
      {
        label: 'Положение о контрольных и курсовых работах (проектах)',
        link: 'http://www.skf-mtusi.ru/files/info/docs/kursovykh_kontrolnykh_rabotakh_01.09.17.pdf'
      },
      {
        label: 'Положение о выпускных квалификационных работах бакалавра',
        link: 'http://www.skf-mtusi.ru/files/info/docs/polozhenie_vkr2019.pdf'
      },
      {
        label: 'Положение о государственной итоговой аттестации (ГИА)',
        link: 'http://www.skf-mtusi.ru/files/info/docs/polozhenie_gia_2019.pdf'
      },
      {
        label: 'Временное положение «О проведении государственной итоговой аттестации по образовательным программам бакалавриата с применением электронного обучения и дистанционных образовательных технологий в условиях распространения коронавирусной инфекции на территории Российской Федерации»',
        link: 'http://www.skf-mtusi.ru/files/info/docs/Vremennoe_polozhenie_GIA.pdf'
      },
      {
        label: 'Положение об основной профессиональной образовательной программе высшего образования (ОПОП ВО)',
        link: 'http://www.skf-mtusi.ru/files/info/docs/polozhenie_opop-vo_19.pdf'
      },
      {
        label: 'Положение об электронной информационно-образовательной среде СКФ МТУСИ',
        link: 'http://www.skf-mtusi.ru/files/info/docs/polozhenie_eiee_2017.pdf'
      },
      {
        label: 'Положение об организации занятий по физической культуре',
        link: 'http://www.skf-mtusi.ru/files/info/docs/Polozhenie_zanyatiy_fk_01.09.17.pdf'
      },
      {
        label: 'Инструкция по оформлению учебной документации, отражающей выполнение студентом образовательной программы в СКФ МТУСИ',
        link: 'http://www.skf-mtusi.ru/files/info/docs/smk-i-1.02-16-17.pdf'
      },
      {
        label: 'Положение о контактной работе в СКФ МТУСИ',
        link: 'http://www.skf-mtusi.ru/files/info/docs/polozenie_kont_rab_01.09.17.pdf'
      },
      {
        label: 'Положение о порядке выбора и организации освоения дисциплин по выбору обучающихся, факультативных и элективных дисциплин',
        link: 'http://www.skf-mtusi.ru/files/info/docs/pol_o_por_org_dis.pdf'
      },
      {
        label: 'Положение «О порядке и основаниях предоставления академического отпуска обучающимся»',
        link: 'http://www.skf-mtusi.ru/files/info/docs/2.03-09-16.pdf'
      },
      {
        label: 'Положение о студенческом совете',
        link: 'http://www.skf-mtusi.ru/files/info/docs/stud_sovet.pdf'
      },
      {
        label: 'Положение о кураторе студенческой группы',
        link: 'http://www.skf-mtusi.ru/files/info/docs/kurator_stud_gr.pdf'
      },
      {
        label: 'оложение о размещении учебно-методической и научно-исследовательский документации в электронно-информационной образовательной среде',
        link: 'http://www.skf-mtusi.ru/files/info/docs/um_ni_doc_eios.pdf'
      },
      {
        label: 'Положение о проведении экспертизы материалов, предназначенных к открытому опубликованию (оглашению), вывозу за границу, представлению на мероприятия с участием иностранных граждан',
        link: 'http://www.skf-mtusi.ru/files/info/docs/eksp_ogl.pdf'
      },
      {
        label: 'Положение о повышении квалификации педагогических работников и сотрудников СКФ МТУСИ',
        link: 'http://www.skf-mtusi.ru/files/info/docs/pov_kval.pdf'
      },
      {
        label: 'Положение об оценочных материалах дисциплин, практик, государственных итоговых аттестаций',
        link: 'http://www.skf-mtusi.ru/files/info/docs/pol_om.pdf'
      },
      {
        label: 'Порядок размещения и хранения личных дел обучающихся СКФ МТУСИ',
        link: 'http://www.skf-mtusi.ru/files/info/docs/razm_hran.pdf'
      },
      {
        label: 'Нормы времени СКФ МТУСИ 2022-2023',
        link: 'http://www.skf-mtusi.ru/files/info/docs/norm_vr_22_23.pdf'
      },
      {
        label: 'Положение. Планирование и проведение заседаний кафедры',
        link: 'http://www.skf-mtusi.ru/files/info/docs/plan_zas_kaf.pdf'
      },
      {
        label: 'Планирование и отчет о работе подразделения',
        link: 'http://www.skf-mtusi.ru/files/info/docs/pi_orp.pdf'
      },
      {
        label: 'Политика в отношении обработки персональных данных',
        link: 'http://www.skf-mtusi.ru/files/info/docs/policy-personal-data-2017.pdf'
      },
      {
        label: 'Приказ об утверждении показателей эффективности деятельности профессорско-преподавательского состава',
        link: 'http://www.skf-mtusi.ru/files/info/docs/pe_pps_2018.pdf'
      },
      {
        label: 'Положение о премировании работников СКФ МТУСИ',
        link: 'http://www.skf-mtusi.ru/files/info/docs/Premirovanie_23.09.2019.pdf'
      },
      {
        label: 'Договора об оказании платных образовательных услуг',
        link: 'http://www.skf-mtusi.ru/files/info/docs/dog/Dogovor_platn_obraz_uslug%2012.04.2022.docx'
      },
      {
        label: 'Об установлении стоимости платных государственных образовательных услуг',
        link: 'http://www.skf-mtusi.ru/files/info/docs/Stoimost_v_2021-2022.pdf'
      },
      {
        label: 'Положение об оказании платных образовательных услуг',
        link: 'http://www.skf-mtusi.ru/files/info/docs/Poryadok_platn_uslug_06.07.2020.pdf'
      },
      {
        label: 'Изменение к положению об оказании платных образовательных услуг',
        link: 'http://www.skf-mtusi.ru/files/info/docs/Poryadok_platn_uslug_13.04.2022.pdf'
      },
      {
        label: 'Положение об оказании платных образовательных услуг по дополнительным профессиональным программ (ДПП)',
        link: 'http://www.skf-mtusi.ru/files/info/docs/Polozhenie%20DPP.pdf'
      },
      {
        label: 'Положение о правилах приема на обучение по дополнительным профессиональным программам (ДПП)',
        link: 'http://www.skf-mtusi.ru/files/info/docs/Polozhenie_pr_dpp_26.06.17.pdf'
      },
      {
        label: 'Положение об итоговой аттестации слушателей, обучающихся по дополнительным профессиональным программам',
        link: 'http://www.skf-mtusi.ru/files/info/docs/Polozhenie_att_dpp_26.06.17.pdf'
      },
      {
        label: 'Порядок приема в СКФ МТУСИ для обучения по договорам об оказании платных образовательных услуг',
        link: 'http://www.skf-mtusi.ru/files/info/docs/usl_2017.pdf'
      },
      {
        label: 'Положение об установлении оснований и порядка снижения стоимости платных образовательных услуг',
        link: 'http://www.skf-mtusi.ru/files/info/docs/p-2.03-33.pdf'
      },
      {
        label: 'Положение о порядке проведения аттестации работников, занимающих должности педагогических работников, относящихся к профессорско-преподавательскому составу СКФ МТУСИ',
        link: 'http://www.skf-mtusi.ru/files/info/docs/p-3.01-9-16.pdf'
      },
      {
        label: 'Положение о конкурсной комиссии по проведению конкурса на замещение должностей научных работников СКФ МТУСИ',
        link: 'http://www.skf-mtusi.ru/files/info/docs/p-3.03-9-16.pdf'
      },
      {
        label: 'Порядок проведения конкурса на замещение должностей научных работников СКФ МТУСИ',
        link: 'http://www.skf-mtusi.ru/files/info/docs/p-3.02-9-16.pdf'
      },
      {
        label: 'Приказ Рособрнадзора от 29.06.2017 №1078 О государственной аккредитации образовательной деятельности ордена Трудового Красного Знамени федерального государственного бюджетного образовательного учреждения высшего образования «Московский технический университет связи и информатики»',
        link: 'http://www.skf-mtusi.ru/files/info/docs/Prikaz_1078.pdf'
      },
      {
        label: 'Распоряжение Федеральной службы по надзору в сфере образования и науки от 18.03.2015 № 778-06 О переоформлении лицензии федеральному государственному образовательному бюджетному учреждению высшего профессионального образования Московскому техническому университету связи и информатики',
        link: 'http://www.skf-mtusi.ru/files/info/docs/rasp.pdf'
      },
      {
        label: 'Приказ о закреплении дисциплин по кафедрам 2022-2023',
        link: 'http://www.skf-mtusi.ru/files/info/docs/dis_faf_22-23.pdf'
      },
      {
        label: 'Положение о комиссии по урегулированию споров между участниками образовательных отношений',
        link: 'http://www.skf-mtusi.ru/files/info/docs/spor_2018.pdf'
      },
      {
        label: 'Положение о порядке пользования учебниками и учебными пособиями обучающимися, осваивающими учебные курсы, дисциплины (модули) за пределами ФГОС ВО и (или) получающими платные образовательные услуги',
        link: 'http://www.skf-mtusi.ru/files/info/docs/ypos_2019.pdf'
      },
      {
        label: 'Порядок представления к присвоению ученого звания профессора и доцента по научной специальности',
        link: 'http://www.skf-mtusi.ru/files/info/docs/7666.pdf'
      },
      {
        label: 'Положение об оплате труда работников СКФ МТУСИ',
        link: 'http://www.skf-mtusi.ru/files/info/docs/oplata_truda_2019.pdf'
      },
      {
        label: 'Положение о профориентационной работе в СКФ МТУСИ',
        link: 'http://www.skf-mtusi.ru/files/info/docs/prof_rab_2019.pdf'
      },
      {
        label: 'Функциональные обязанности руководителей и членов создаваемых комиссий, звеньев и постов',
        link: 'http://www.skf-mtusi.ru/files/info/docs/СМК-О-01-3-34-17.pdf'
      },
      {
        label: 'Сводная ведомость результатов проведения специальной оценки условий труда 2015',
        link: 'http://www.skf-mtusi.ru/files/info/docs/sout_2015.pdf'
      },
      {
        label: 'Сводная ведомость результатов проведения специальной оценки условий труда 2017',
        link: 'http://www.skf-mtusi.ru/files/info/docs/sout_2017.pdf'
      },
      {
        label: 'Сводная ведомость результатов проведения специальной оценки условий труда 2018',
        link: 'http://www.skf-mtusi.ru/files/info/docs/sout_2018.pdf'
      },
      {
        label: 'Сводная ведомость результатов проведения специальной оценки условий труда 2019',
        link: 'http://www.skf-mtusi.ru/files/info/docs/sout_2019.pdf'
      }
    ]

    return {
      docsPt1,
      docsPt2,
      docsPt3,
      docsPt4,
      docsPt5
    }
  }
}
</script>
