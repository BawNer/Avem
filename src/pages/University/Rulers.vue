<script setup>
  import { useQuasar } from "quasar";
  import EssentialLink from "components/EssentialLink";

  const $q = useQuasar()

  const rulers = [
    {
      position: 'Директор',
      bio: 'Карасев Денис Николаевич',
      phone: '(863) 310-69-60',
      email: 'denis_karasev@skf-mtusi.ru',
      profile: 'http://skf-mtusi.ru/images/ruk/karasev.jpg'
    },
    {
      position: 'Заместитель директора по общим вопросам',
      bio: 'Манин Александр Анатольевич',
      phone: '(863) 310-69-60',
      email: 'mаnin@skf-mtusi.ru',
      profile: 'http://skf-mtusi.ru/images/ruk/Manin.jpg'
    },
    {
      position: 'Заместитель директора по учебно-воспитательной работе',
      bio: 'Жуковский Александр Георгиевич',
      phone: '(863) 310-69-60',
      email: 'zhukоvskiy@skf-mtusi.ru',
      profile: 'http://www.skf-mtusi.ru/images/ruk/Zhukovskiy.jpg'
    },
    {
      position: 'Главный бухгалтер',
      bio: 'Демченко Лариса Юрьевна',
      phone: '(863) 307-61-91',
      email: 'buhgаlteria@skf-mtusi.ru',
      profile: 'http://skf-mtusi.ru/images/ruk/Osipovich.jpg'
    }
  ]
</script>

<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col-12 q-my-xl">
        <span class="text-h3 text-grey-10">Руководство. Педагогический (научно-педагогический) состав</span>
      </div>
      <div class="col-12">
        <div class="row q-col-gutter-sm">
          <div class="col-md-6 col-12" v-for="ruler in rulers">
            <q-card flat bordered>
              <q-card-section :horizontal="!$q.screen.lt.md">
                <q-card-section class="col-md-9 col-12">
                  <q-card-section>
                    <span class="text-h6">Должность: </span>
                    <span class="text-subtitle1">{{ruler.position}}</span>
                  </q-card-section>
                  <q-card-section>
                    <span class="text-h5">{{ruler.bio}}</span>
                  </q-card-section>
                  <q-card-section>
                    <span class="text-h6"
                          v-if="
                            ruler.position.toLowerCase().split(' ').indexOf('директор') !== -1 ||
                            ruler.position.toLowerCase().split(' ').indexOf('директора') !== -1
                          "
                    >Приемная директора: </span>
                    <span class="text-subtitle1">Тел. {{ruler.phone}}</span>
                  </q-card-section>
                  <q-card-section>
                    <span class="text-h6">E-mail: </span>
                    <span class="text-subtitle1">
                      <a :href="`mailto:${ruler.email}`">{{ruler.email}}</a>
                    </span>
                  </q-card-section>
                </q-card-section>
                <q-img
                  class="col-md-3 col-12"
                  :src="ruler.profile"
                  height="360px"
                ></q-img>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-12 col-md-6">
            <essential-link
              title="Информации о персональном составе педагогических работников образовательной программы"
              link="http://www.skf-mtusi.ru/sveden/employees/op"
              icon="mdi-link-variant"
            ></essential-link>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
