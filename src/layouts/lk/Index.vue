<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page padding class="row justify-center items-center">

          <div class="col-12 col-md-4 text-center">
            <q-img
              src="icons/logo_light.svg"
              width="200px"
            ></q-img>
            <q-card>
              <q-card-section>
                <q-form
                  ref="loginForm"
                  @submit="onSubmit"
                  class="q-gutter-md"
                >
                  <div class="row justify-center">
                    <div class="col-12 col-md-10 q-mb-sm">
                      <q-input 
                        outlined 
                        label="Логин"
                        v-model="userLogin"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Введите логин' ]"
                      ></q-input>
                    </div>
                    <div class="col-12 col-md-10 q-mb-sm">
                      <q-input 
                        outlined 
                        label="Пароль" 
                        :type="!isShowPassword ? 'password' : 'text'"
                        v-model="userPassword"
                        lazy-rules
                        :rules="[ 
                          val => val && val.length > 0 || 'Введите пароль',
                        ]"
                      >
                        <template v-slot:append>
                          <q-icon
                            @click="isShowPassword = !isShowPassword" 
                            :name="!isShowPassword ? 'mdi-eye-off' : 'mdi-eye'"></q-icon>
                        </template>
                      </q-input>
                    </div>
                    <div class="col-12 col-md-10">
                      <q-btn
                        color="primary"
                        class="q-mr-xl"
                        type="submit"
                        :loading="logOn"
                      >Вход</q-btn>
                      <q-btn
                        flat
                        color="grey"
                        disable
                      >Забыли пароль?</q-btn>
                    </div>
                  </div>
                </q-form>
              </q-card-section>
            </q-card>
          </div>

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const $q = useQuasar()
    const $store = useStore()
    const $router = useRouter()
    const loginForm = ref(null)
    const isShowPassword = ref(false)
    const userLogin = ref(null)
    const userPassword = ref(null)
    const logOn = ref(false)

    const onSubmit = () => {
        logOn.value = true
        loginForm.value.validate().then(async success => {
          if (success) {
           await $store.dispatch('login', {
              login: userLogin.value,
              password: userPassword.value
            }).then(() => {
              $q.notify({
                color: 'teal',
                icon: 'mdi-progress-alert',
                message: 'Успешно авторизовалися'
              })
              $router.push('/lk/admin')
            }).catch((err) => {
              console.log(err)
              $q.notify({
                color: 'red-5',
                icon: 'mdi-progress-alert',
                message: err.message
              })
            })
            logOn.value = false
          } else {
            $q.notify({
              color: 'red-5',
              icon: 'mdi-progress-alert',
              message: 'Валидация не пройдена'
            })
          }
        })
    }

    return {
      isShowPassword,
      userLogin,
      userPassword,
      onSubmit,
      loginForm,
      logOn
    }
  },
}
</script>