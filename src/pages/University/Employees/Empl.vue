<template>
  <q-page padding>
    <div class="row">
        <div class="col-12">
          <span class="text-h5 text-grey-10">
            Преподавательский состав
          </span>
        </div>
        <div class="col-12 q-my-xl">
          <q-input
            v-model="searchString"
            standout
            filled
            label="Поиск преподавателей"
            @keyup="sameEmpls()"
          >
            <template v-slot:prepend>
              <q-icon name="search"></q-icon>
            </template>
          </q-input>
        </div>
        <div class="col-12 q-mb-xl" v-for="(empl, i) in sameEmpls()" :key="i">
            <span class="text-h3 text-grey-10">{{empl.direction.name}}</span>
          <div class="row q-my-xl bg-white">
            <div class="col-lg-4 col-md-6 col-12" v-for="structure in empl.direction.structure" :key="structure.name">
              <q-card flat :class="!$q.screen.lt.md ? 'q-pr-xl' : ''">
                <q-card-section horizontal>
                  <q-card-section class="col-3">
                    <q-avatar :size="!$q.screen.lt.md ? '120px' : '80px'">
                      <q-img :src="structure.image"></q-img>
                    </q-avatar>
                  </q-card-section>
                  <q-card-section>
                    <div class="text-h6">{{structure.name}}</div>
                    <div class="text-grey-8">{{structure.position}}</div>
                    <div class="text-grey-8">{{structure.edLevel}}</div>
                  </q-card-section>
                </q-card-section>
                <q-card-actions>
                  <q-space></q-space>
                  <q-btn
                    flat
                    color="primary"
                    :to="{
                      path: '/sveden/employees/about',
                      query: {
                        direction: empl.direction.name,
                        employees: structure.name
                      }
                    }"
                  >Подробнее</q-btn>
                </q-card-actions>
              </q-card>
            </div>
          </div>
        </div>
      </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import empls from "./empl"

export default {
  name: 'Empl',
  setup() {
    const searchString = ref('')

    const sameEmpls = () => {
      const shadow = JSON.parse(JSON.stringify(empls)) // отвязываем все ссылки
      if ( searchString.value.length < 3 ) {
        return shadow
      } else {
        return shadow.map( arr => {
           arr.direction.structure = arr.direction.structure.filter(v => v.name.split(' ').join('').toLowerCase().includes(searchString.value.split(' ').join('').toLowerCase()))
          return arr
        }).filter(a => a.direction.structure.length > 0)
      }
    }


    return {
      searchString,
      sameEmpls
    }
  }
}
</script>
