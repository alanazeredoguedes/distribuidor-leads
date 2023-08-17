<template>
  <div>
    <form id="form-login" class="form w-100" @submit.prevent="login()">
      <div class="text-center mb-11">
        <h1 class="text-dark fw-bolder mb-3">Login</h1>
        <div class="text-gray-500 fw-semibold fs-6">Preencha os campos abaixo para acessar o sistema!</div>
      </div>

      <div class="separator separator-content my-14">
        <span class="w-125px text-gray-500 fw-semibold fs-7">Entar com email</span>
      </div>

      <div class="fv-row mb-8">
        <input type="email" placeholder="Email" name="email" autocomplete="off" v-model="user.email" class="form-control bg-transparent" required/>
      </div>

      <div class="fv-row mb-3">
        <input type="password" placeholder="Password" name="password" v-model="user.password" autocomplete="off" class="form-control bg-transparent" required/>
      </div>

      <div class="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
        <div></div>
        <nuxt-link :to="{name:'auth-recuperar-conta'}" class="link-primary">Esqueceu a Senha ?</nuxt-link>
      </div>

      <div class="d-grid mb-10">
        <button type="submit" class="btn btn-primary">
          <span class="indicator-label">Logar</span>
        </button>
      </div>

    </form>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "~/stores/userStore";
const userStore = useUserStore();
import {alerts} from "~/components/alerts";

definePageMeta({ layout: 'auth' })

let user = {
  email: '',
  password: '',
}

let login = ()=>{
  alerts.modalLoading();

  userStore.login(user.email, user.password)
      .then( (response) => {
        alerts.notification('success', "Autenticado com Sucesso!", 'Sucesso ao logar no sistema.', 1000)
        setTimeout(()=>{
          navigateTo({name: 'painel'})
          //this.$router.push({ name: 'home' })
        },1500)
      })
      .catch((responseError) => {

        if (responseError.response.status === 406){
          alerts.notification('error', "Erro", responseError.response.data.message)
        }else{
          alerts.notification('error', "Erro", 'Falha ao se autenticar!')
        }

      })

}

</script>