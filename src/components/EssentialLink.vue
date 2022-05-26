<template>
  <q-card>
    <q-item
      clickable
      tag="a"
      target="_blank"
      :href="link"
    >
      <q-item-section
        v-if="icon"
        avatar
      >
        <q-icon :name="icon" :color="iconColor" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
        <q-item-label caption v-if="caption">
          {{ caption }}
        </q-item-label>
      </q-item-section>
      <q-item-section side v-if="sideIcon">
        <q-icon color="primary" name="mdi-download"></q-icon>
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    },

    iconColor: {
      type: String,
      default: 'red'
    },

    sideIcon: {
      type: Boolean,
      default: false
    }
  }
})
</script>
