<template>
  <q-page padding>
    <div class="row" :class="!$q.screen.lt.md ? 'q-mx-xl' : ''">
      <div class="col-12">
        <span class="text-h3 text-grey-10">Электронная информационно-образовательная среда</span>
      </div>
      <div class="col-md-8 col-12 q-mt-md">
        <span class="text-subtitle1">
          Электронная информационно-образовательная среда (далее ЭИОС) – совокупность информационных, телекоммуникационных технологий, соответствующих технологических средств, электронных информационных и образовательных ресурсов, обеспечивающих условия освоения обучающимися образовательных программ в полном объеме независимо от места нахождения обучающихся.
        </span>
      </div>
      <div class="col-12 q-my-xl">
        <div class="row">
          <div class="col-md-6 col-12 q-pa-md">
            <q-card>
              <q-item class="q-pa-xl">
                <q-item-avatar>
                  <q-avatar size="84px">
                    <q-icon name="mdi-image-album" color="primary"></q-icon>
                  </q-avatar>
                </q-item-avatar>
                <q-item-section>
                  <q-item-label class="text-h4">Методические материалы</q-item-label>
                  <q-item-label lines="2">Методические издания, содержащие конкретные материалы в помощь преподавателям и учащимся</q-item-label>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
          <div class="col-md-6 col-12 q-pa-md">
            <q-card>
              <q-item class="q-pa-xl">
                <q-item-avatar>
                  <q-avatar size="84px">
                    <q-icon name="mdi-image-album" color="primary"></q-icon>
                  </q-avatar>
                </q-item-avatar>
                <q-item-section>
                  <q-item-label class="text-h4">Библиотека СКФ МТУСИ</q-item-label>
                  <q-item-label lines="2">Список изданий СКФ МТУСИ</q-item-label>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
        </div>
      </div>
      <div class="col-12 q-my-xl">
        <span class="text-h3 text-grey-10">Как поступить в <span class="text-primary">СКФ</span> МТУСИ</span>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-md-6 col-12 q-pa-md q-mb-xl" v-for="r in roadEnjoi" :key="r.id">
            <div class="row">
              <div class="col-2">
                <span class="text-h3 text-primary">{{r.id}}</span>
              </div>
              <div class="col-10">
                <span class="text-h4">{{r.title}}</span>
              </div>
              <div class="col-10 offset-2 q-mt-md">
                <span v-html="r.description"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  setup() {
    const roadEnjoi = [
      { id: '01.', title: 'Электронный каталог библиотеки МТУСИ', description: 'По ссылке открывается поисковая форма электронного каталога. Также под формой поиска доступны полный список учебных пособий в алфавитном порядке и полный список авторов в алфавитном порядке. Обратите внимание: ссылки для скачивания доступны при поиске в каталоге по автору (необходимо выбрать из выпадающего списка).' },
      { id: '02.', title: 'Электронно-библиотечная система IPRbooks', description: 'Для доступа к системе необходимо: <br/> 1. Получить в библиотеке логин и пароль для первичного доступа к сайту. <br/>2. Авторизоваться на сайте iprbookshop.ru с использованием полученного логина и пароля. <br/> 3. Завершить процедуру регистрации: выбрать тип пользователя (студент или преподаватель), заполнить необходимые поля и активировать учетную запись кодом активации, полученным по электронной почте.' },
      { id: '03.', title: 'Электронно-библиотечная системы Znanium.com', description: 'Для доступа к системе необходимо:<br/>1. Зарегистрировать личный кабинет читателя с любого компьютера, подключенного к локальной сети университета. Удаленная регистрация займет больше времени: в анкете потребуется выбрать организацию из списка и дождаться подтверждения библиотекой. <br/>2. Авторизоваться на сайте znanium.com. <br/>3. Доступна только коллекция «Горячая линия - Телеком»' },
      { id: '04.', title: 'Информационная система "Единое окно доступа к образовательным ресурсам"', description: 'Информационная система "Единое окно доступа к образовательным ресурсам" предоставляет свободный доступ к каталогу образовательных интернет-ресурсов и полнотекстовой электронной учебно-методической библиотеке для общего и профессионального образования.' },
      { id: '05.', title: 'Научная электронная библиотека elibrary.ru', description: 'Научная электронная библиотека eLIBRARY.RU - это крупнейший российский информационно-аналитический портал в области науки, технологии, медицины и образования, содержащий рефераты и полные тексты более 22 млн научных статей и публикаций, в том числе электронные версии более 3900 российских научно-технических журналов, из которых более 2800 журналов в открытом доступе.' },
      { id: '06.', title: 'Справочная система КонсультантПлюс', description: 'Некоммерческая интернет-версия КонсультантПлюс. Круглосуточно в свободном доступе основные документы федерального законодательства, новые документы (за последние 14 дней) и списки всех документов с краткой информацией (справками). С ограничениями по времени доступно федеральное законодательство, законодательство Москвы и Санкт-Петербурга, судебная практика, финансовые консультации, законопроекты, международные правовые акты и другие документы.' },
      { id: '07.', title: 'Информационно-правовой портал Гарант. Образовательная версия', description: '«ГАРАНТ-Образование» — специальный выпуск системы ГАРАНТ, ориентированный на студентов, аспирантов и преподавателей. Интернет-версия «ГАРАНТ-Образование» позволяет получить доступ к актуальным документам в любом месте, с любого компьютера, планшета или смартфона, с любой установленной на них операционной системой. Достаточно иметь подключение к сети интернет.' },
      { id: '08.', title: 'Электронная база НТД «РЕГЛАМЕНТ»', description: 'Справочная информационная онлайн-система с ежедневными обновлениями, включающая в себя нормативно-технические документы, федеральные нормы и правила, а также ГОСТы, СТО, ПБ, РД, СП, технические регламенты, международные стандарты (в т.ч. с переводом на русский язык).' },
      { id: '09.', title: 'Электронно-библиотечная система «Лань»', description: '1. Зарегистрировать личный кабинет читателя с любого компьютера, подключенного к локальной сети университета. Удаленная регистрация займет больше времени: в анкете потребуется выбрать организацию из списка и дождаться подтверждения библиотекой. <br/> 2. Авторизироваться на сайте <a href="https://e.lanbook.com/">https://e.lanbook.com/</a> <br/>3. Доступны Коллекции: математика, физика, инженерно-технические науки, информатика.' }
    ]

    return {
      roadEnjoi
    }
  },
}
</script>