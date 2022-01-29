<template>
  <q-page padding>
    <div class="row">
      <div class="col-12">
        <span class="text-h3 text-grey-10">События в СКФ МТУСИ</span>
      </div>
      <div class="col-12 q-my-xl">
        {{evt}}
        <!-- <div class="row">
          <div class="col-md-4 col-12">
            <div class="column">
              <div class="col-12 q-pa-md" v-for="(evt, index) in event" :key="index">
                <q-card v-if="index % 3 === 0">
                  <q-card-section>
                    <q-card-label>{{evt.label}}</q-card-label>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-12">
            <div class="column">
              <div class="col-12 q-pa-md" v-for="(evt, index) in event" :key="index">
                <q-card v-if="index % 2 === 0">
                  <q-card-section>
                    <q-card-label>{{evt.label}}</q-card-label>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-12">
            <div class="column">
              <div class="col-12 q-pa-md" v-for="(evt, index) in event" :key="index">
                <q-card>
                  <q-card-section>
                    <q-card-label>{{evt.label}}</q-card-label>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </q-page>
</template>

<script>
import { comuted } from 'vue'

export default {
  setup() {
    const event = [
      { label: '1' },
      { label: '2' },
      { label: '3' },
      { label: '4' },
      { label: '5' },
      { label: '6' },
      { label: '7' },
      { label: '8' },
      { label: '9' },
    ]

    
    return {
      evt
    }
  },
}
</script>