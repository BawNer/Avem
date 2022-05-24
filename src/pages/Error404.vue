<template>
  <div class="fullscreen text-center q-pa-md flex flex-center">
    <div>
      <q-img
        width="350px"
        src="/icons/logo_skf.png"
      ></q-img>

      <div class="text-h4 q-mt-xl" style="opacity:.4">
        Запрашиваемая страница не найдена <br/>
        <span class="text-overline">Error code: 404</span>
      </div>

      <q-btn
        class="q-mt-xl"
        unelevated
        to="/"
        label="На главную"
        no-caps
        outline
        color="deep-orange"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Error404'
})
</script>
