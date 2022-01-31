<template>
  <q-page padding>
    <div class="row">
      <div class="col-12">
        <span class="text-h3 text-grey-10">События в СКФ МТУСИ</span>
      </div>
      <div class="col-12 q-my-xl">
        <div class="row">
          <div class="col-md-4 col-12">
            <div class="column q-pa-md">
              <q-card v-for="(cl, index) in column1" :key="index" class="q-mb-md">
                <q-card-section>
                  <span class="text-overline">{{cl.date}}</span>
                  <div class="text-h6">{{cl.label}}</div>
                </q-card-section>
                <q-card-section>
                  <p>{{cl.description}}</p>
                </q-card-section>
                <q-card-actions>
                  <q-btn class="text-primary" flat>{{cl.timeStart}}-{{cl.timeEnd}}</q-btn>
                  <q-space></q-space>
                  <q-btn class="text-uppercase" flat>{{cl.audience}}</q-btn>
                </q-card-actions>
              </q-card>
            </div>
          </div>
          <div class="col-md-4 col-12">
            <div class="column q-pa-md">
             <q-card v-for="(cl, index) in column2" :key="index" class="q-mb-md">
                <q-card-section>
                  <span class="text-overline">{{cl.date}}</span>
                  <div class="text-h6">{{cl.label}}</div>
                </q-card-section>
                <q-card-section>
                  <p>{{cl.description}}</p>
                </q-card-section>
                <q-card-actions>
                  <q-btn class="text-primary" flat>{{cl.timeStart}}-{{cl.timeEnd}}</q-btn>
                  <q-space></q-space>
                  <q-btn class="text-uppercase" flat>{{cl.audience}}</q-btn>
                </q-card-actions>
              </q-card>
            </div>
          </div>
          <div class="col-md-4 col-12">
            <div class="column q-pa-md">
              <q-card v-for="(cl, index) in column3" :key="index" class="q-mb-md">
                <q-card-section>
                  <span class="text-overline">{{cl.date}}</span>
                  <div class="text-h6">{{cl.label}}</div>
                </q-card-section>
                <q-card-section>
                  <p>{{cl.description}}</p>
                </q-card-section>
                <q-card-actions>
                  <q-btn class="text-primary" flat>{{cl.timeStart}}-{{cl.timeEnd}}</q-btn>
                  <q-space></q-space>
                  <q-btn class="text-uppercase" flat>{{cl.audience}}</q-btn>
                </q-card-actions>
              </q-card>
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
    const evt = [
      { label: 'Начало учебного семестра', description: 'Начало 2 семестра', date: '08.02.2022', timeStart: '20.00', timeEnd: '21.00', audience: 'Актовый зал, 304' },
      { label: 'Начало учебного семестра', description: 'Начало 2 семестра', date: '08.02.2022', timeStart: '20.00', timeEnd: '21.00', audience: 'Актовый зал, 304' },
      { label: 'Начало учебного семестра', description: 'Начало 2 семестра', date: '08.02.2022', timeStart: '20.00', timeEnd: '21.00', audience: 'Актовый зал, 304' },
      { label: 'Начало учебного семестра', description: 'Начало 2 семестра', date: '08.02.2022', timeStart: '20.00', timeEnd: '21.00', audience: 'Актовый зал, 304' },
      { label: 'Начало учебного семестра', description: 'Начало 2 семестра', date: '08.02.2022', timeStart: '20.00', timeEnd: '21.00', audience: 'Актовый зал, 304' },
      { label: 'Начало учебного семестра', description: 'Начало 2 семестра', date: '08.02.2022', timeStart: '20.00', timeEnd: '21.00', audience: 'Актовый зал, 304' },
      { label: 'Начало учебного семестра', description: 'Начало 2 семестра', date: '08.02.2022', timeStart: '20.00', timeEnd: '21.00', audience: 'Актовый зал, 304' },
      { label: 'Начало учебного семестра', description: 'Начало 2 семестра', date: '08.02.2022', timeStart: '20.00', timeEnd: '21.00', audience: 'Актовый зал, 304' },
      { label: 'Начало учебного семестра', description: 'Начало 2 семестра', date: '08.02.2022', timeStart: '20.00', timeEnd: '21.00', audience: 'Актовый зал, 304' },
    ]

    const switchArrayByColumn = (nodeArray, idx = 1) => {
      const filteredArray = nodeArray.filter((element, index) => ++index % idx === 0)
      return catFilteredArrayFromNodeArray(nodeArray, filteredArray)
    }

    const catFilteredArrayFromNodeArray = (nodeArray, targetarray) => Object.keys(targetarray).map(a => nodeArray.splice(nodeArray.indexOf(targetarray[a]), 1).shift())

    const column3 = switchArrayByColumn(evt, 3)
    const column2 = switchArrayByColumn(evt, 2)
    const column1 = switchArrayByColumn(evt)
    
    return {
      column3,
      column2,
      column1
    }
  },
}
</script>