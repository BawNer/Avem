<template>
  <q-page padding>
    <div class="row">
       <div class="col-12 q-my-xl">
          <span class="text-grey-10 text-h3">Абитуриенту</span>
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
      <div class="col-12">
        <div class="row">
          <div class="col-6 q-px-sm q-my-xl">
            <div class="row">
              <div class="col-2">
                <span class="text-h3 text-primary">01.</span>
              </div>
              <div class="col-10"><span class="text-h3">Сдать ЕГЭ</span></div>
              <div class="col-10 offset-2 q-my-xl text-subtitle1">Для поступления на бакалавриат или специалитет сдайте ЕГЭ по общеобразовательным предметам. Перечень вступительных испытаний и минимальные баллы можно посмотреть на страницах образовательных программ и в Правилам приема.</div>
              <div class="col-10 offset-2">
                <router-link to="/" class="text-dark q-mr-xl">Баллы прошлых лет</router-link>
                <router-link to="/" class="text-dark q-mr-xl">Проходные баллы</router-link>
              </div>
            </div>
          </div>
          <div class="col-6 q-px-sm q-my-xl">
            <div class="row">
              <div class="col-2">
                <span class="text-h3 text-primary">02.</span>
              </div>
              <div class="col-10"><span class="text-h3">Подать документы</span></div>
              <div class="col-10 offset-2 q-my-xl text-subtitle1">
                Вы можете подать заявление и необходимый комплект документов:<br/><br/>

                <span><b>— лично.</b> По адресу: ул. Серафимовича 62, к. №105</span><br/><br/>
                <span><b> — почтой.</b> Документы поступающих в СКФ МТУСИ могут быть высланы почтовой связью по адресу: 344002, г. Ростов-на-Дону, ул. Серафимовича д.62</span><br/><br/>
                <span><b>— онлайн.</b>  через личный кабинет абитуриента, либо на электронный адрес: <span class="text-primary">priem@skf-mtusi.ru</span></span>
              </div>
              <div class="col-10 offset-2">
                <router-link to="/" class="text-dark q-mr-xl">Приемная комиссия</router-link>
              </div>
            </div>
          </div>
          <div class="col-6 q-px-sm q-my-xl">
            <div class="row">
              <div class="col-2">
                <span class="text-h3 text-primary">03.</span>
              </div>
              <div class="col-10"><span class="text-h3">Пройти по конкурсу</span></div>
              <div class="col-10 offset-2 q-my-xl text-subtitle1">
                Зачисление проводится по конкурсным (ранжированным) спискам. Для зачисления поступающий подает заявление о согласии на зачисление. При поступлении на платные места – оплатить минимум 1 семестр обучения.
              </div>
              <div class="col-10 offset-2">
                <router-link to="/" class="text-dark q-mr-xl">Ранжированные списки</router-link>
                <router-link to="/" class="text-dark q-mr-xl">Стоимость обучения</router-link>
              </div>
            </div>
          </div>
          <div class="col-6 q-px-sm q-my-xl">
            <div class="row">
              <div class="col-2">
                <span class="text-h3 text-primary">04.</span>
              </div>
              <div class="col-10"><span class="text-h3">Вы — студент!</span></div>
              <div class="col-10 offset-2 q-my-xl text-subtitle1">
                Поздравляем, Вы - студент! <br/> Вы прошли сложнейший конкурс и уже совсем скоро погрузитесь в уникальную атмосферу СКФ МТУСИ, где собралось множество талантливых,  умных и необычных людей!
              </div>
              <div class="col-10 offset-2">
                <router-link to="/" class="text-dark q-mr-xl">Расписание</router-link>
                <router-link to="/" class="text-dark q-mr-xl">Преподавательский состав</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 q-my-xl">
        <span class="text-grey-10 text-h4">
          Направления подготовки
        </span>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-6 no-gutters">
            <q-card class="bg-primary text-white q-pa-xl" square>
              <q-card-section>
                <q-card-section>
                  <div class="col-12 text-h3 q-mb-xl">01</div>
                  <div class="col-12 text-h3 q-mb-xl">
                    Информатика и вычислительная техника
                  </div>
                </q-card-section>
                <q-card-section class="text-subtitle1">
                  Северо-Кавказский филиал МТУСИ готовит специалистов, способных разрабатывать программное обеспечение, владеть навыками интернет-технологий создавать системы компьютерного моделирования и автоматического проектирования
                </q-card-section>
                <q-card-section class="q-mt-xl row">
                  <div class="col-6 q-mb-md">
                    <span class="text-h4">150 тыс.</span> <span class="text-subtitle2">(на 2021)</span><br/>Строимость, Руб.
                  </div>
                  <div class="col-6 q-mb-md">
                    <span class="text-h4">30</span> <span class="text-subtitle2">(на 2021)</span><br/>Бюджетных мест
                  </div>
                  <div class="col-6 q-mb-md">
                    <span class="text-h4">4</span> <span class="text-subtitle2">года</span><br/>Срок обучения
                  </div>
                </q-card-section>
              </q-card-section>
              <q-card-actions>
                <q-btn
                  size="md"
                  color="white"
                  text-color="dark"
                  no-caps
                  padding="16px"
                >Подать документы</q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-6 no-gutters">
            <q-card class="q-pa-xl" square>
              <q-card-section>
                <q-card-section>
                  <div class="col-12 text-h3 q-mb-xl">02</div>
                  <div class="col-12 text-h3 q-mb-xl">
                    Информатика и вычислительная техника
                  </div>
                </q-card-section>
                <q-card-section class="text-subtitle1">
                  Северо-Кавказский филиал МТУСИ готовит специалистов, способных разрабатывать программное обеспечение, владеть навыками интернет-технологий создавать системы компьютерного моделирования и автоматического проектирования
                </q-card-section>
                <q-card-section class="q-mt-xl row">
                  <div class="col-6 q-mb-md">
                    <span class="text-h4">150 тыс.</span> <span class="text-subtitle2">(на 2021)</span><br/>Строимость, Руб.
                  </div>
                  <div class="col-6 q-mb-md">
                    <span class="text-h4">30</span> <span class="text-subtitle2">(на 2021)</span><br/>Бюджетных мест
                  </div>
                  <div class="col-6 q-mb-md">
                    <span class="text-h4">4</span> <span class="text-subtitle2">года</span><br/>Срок обучения
                  </div>
                </q-card-section>
              </q-card-section>
              <q-card-actions>
                <q-btn
                  size="md"
                  color="primary"
                  no-caps
                  padding="16px"
                >Подать документы</q-btn>
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
      <div class="col-12 q-my-xl">
        <span class="text-grey-10 text-h4">
          Часто задаваемые вопросы
        </span>
      </div>
      <div class="col-12">
        <q-list bordered>
          <q-expansion-item
            group="abiturient"
            label="Какие документы необходимы для поступления?"
            default-opened
            header-class="text-h6 q-py-lg"
          >
          <q-card>
            <q-card-section class="text-subtitle1">
              Обязательные документы:<br/>
              ㅡ паспорт (2-3 стр.);<br/>
              ㅡ документ об образовании (аттестат или диплом) с приложением;<br/>
              ㅡ СНИЛС;<br/>
              ㅡ 2 фотографии размером 3х4 см (для сдающих вступительные испытания).<br/>
              <br/>
              Дополнительно вы можете предоставить:<br/>
              1. документы, подтверждающие наличие индивидуальных достижений, для начисления дополнительных баллов;<br/>
              2. документы, подтверждающие наличие особых прав;<br/>
              3. договор о целевом обучении;<br/>
              4. диплом олимпиады для получения льгот;<br/>
              5. копию трудовой книжки или справку с места работы (для поступающих на заочную форму обучения).
            </q-card-section>
          </q-card>
          </q-expansion-item>
          <q-separator></q-separator>
          <q-expansion-item
            group="abiturient"
            label="Как подать документы онлайн?"
            header-class="text-h6 q-py-lg"
          >
          </q-expansion-item>
          <q-separator></q-separator>
          <q-expansion-item
            group="abiturient"
            label="Действуют ли результаты ЕГЭ прошлых лет?"
            header-class="text-h6 q-py-lg"
          >
          </q-expansion-item>
          <q-separator></q-separator>
          <q-expansion-item
            group="abiturient"
            label="В какой форме проводятся вступительные испытания?"
            header-class="text-h6 q-py-lg"
          >
          </q-expansion-item>
          <q-separator></q-separator>
          <q-expansion-item
            group="abiturient"
            label="Я не сдаю ЕГЭ по физике. Можно ли мне будет сдать этот предмет в университете?"
            header-class="text-h6 q-py-lg"
          >
          </q-expansion-item>
          <q-separator></q-separator>
          <q-expansion-item
            group="abiturient"
            label="Как лучше подготовиться к вступительным испытаниям?"
            header-class="text-h6 q-py-lg"
          >
          </q-expansion-item>
          <q-separator></q-separator>
          <q-expansion-item
            group="abiturient"
            label="Как проводится конкурс на бюджетные места?"
            header-class="text-h6 q-py-lg"
          >
          </q-expansion-item>
          <q-separator></q-separator>
          <q-expansion-item
            group="abiturient"
            label="Как учитываются индивидуальные достижения?"
            header-class="text-h6 q-py-lg"
          >
          </q-expansion-item>
          <q-separator></q-separator>
          <q-expansion-item
            group="abiturient"
            label="Как будет проходить зачисление в 2022 году?"
            header-class="text-h6 q-py-lg"
          >
          </q-expansion-item>
          <q-separator></q-separator>
          <q-expansion-item
            group="abiturient"
            label="Сколько нужно баллов, чтобы поступить на платной основе?"
            header-class="text-h6 q-py-lg"
          >
          </q-expansion-item>
        </q-list>
      </div>
       <div class="col-12 q-my-xl">
        <div class="row">
          <div class="col-6">
            <q-list>
              <q-item-section>
                <q-item-label caption>Адрес</q-item-label>
                <q-item-label class="text-h4"><b>344002, Ростов-на-Дону, ул. Серафимовича, 62</b></q-item-label>
              </q-item-section>
            </q-list>
          </div>
          <div class="col-6">
            <q-list>
              <q-item-section>
                <q-item-label caption>ТЕЛЕФОН</q-item-label>
                <q-item-label class="text-h4"><b>+7 (863) 310-69-60</b></q-item-label>
              </q-item-section>
            </q-list>
          </div>
        </div>
      </div>
      <div class="col-12 q-my-xl">
        <div class="row">
          <div class="col-4">
            <q-list>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-h5 text-grey-7 text-uppercase">часы работы с посетителями</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="col-2">
                  <q-item-label class="text-h5 text-grey-8">Пн-Чт</q-item-label>
                </q-item-section>
                <q-item-section class="col-10 text-h5">09:00–11:00 и 16:00–18:00</q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="col-2">
                  <q-item-label class="text-h5 text-grey-8">Пт</q-item-label>
                </q-item-section>
                <q-item-section class="col-10 text-h5">14:00–16:00</q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="col-2">
                  <q-item-label class="text-h5 text-grey-8">Сб</q-item-label>
                </q-item-section>
                <q-item-section class="col-10 text-h5">10:00–12:00</q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="col-2">
                  <q-item-label class="text-h5 text-grey-8">Вс</q-item-label>
                </q-item-section>
                <q-item-section class="col-10 text-h5">Выходной</q-item-section>
              </q-item>
            </q-list>
          </div>
          <div class="col-4">
            <q-list>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-h5 text-grey-7 text-uppercase">общий режим работы</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="col-2">
                  <q-item-label class="text-h5 text-grey-8">Пн-Пт</q-item-label>
                </q-item-section>
                <q-item-section class="col-10 text-h5">08:00–22:00</q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="col-2">
                  <q-item-label class="text-h5 text-grey-8">Сб</q-item-label>
                </q-item-section>
                <q-item-section class="col-10 text-h5">08:00–14:00</q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="col-2">
                  <q-item-label class="text-h5 text-grey-8">Вс</q-item-label>
                </q-item-section>
                <q-item-section class="col-10 text-h5">Выходной</q-item-section>
              </q-item>
            </q-list>
          </div>
          <div class="col-4">
            <q-list>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-h5 text-grey-7 text-uppercase">e-mail</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-h5">mаil@skf-mtusi.ru</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
            <q-list>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-h5 text-grey-7 text-uppercase">социальные сети</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                  <q-btn flat>
                    <q-img width="24px" src="images/tgV.png"></q-img>
                  </q-btn>
                  <q-btn flat>
                    <q-img width="24px" src="images/instV.png"></q-img>
                  </q-btn>
                  <q-btn flat>
                    <q-img width="24px" src="images/vkV.png"></q-img>
                  </q-btn>
              </q-item>
            </q-list>
          </div>
        </div>
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
