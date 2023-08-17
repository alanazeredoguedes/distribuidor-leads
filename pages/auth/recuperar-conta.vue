<template>
  <form id="form-login" class="form w-100"  @submit.prevent="recoverPassword()">
    <div class="text-center mb-11">
      <h1 class="text-dark fw-bolder mb-3">Esqueceu a Senha ?</h1>
      <div class="text-gray-500 fw-semibold fs-6">Entre com o seu email para recuperar a sua senha.</div>
    </div>


    <div class="fv-row mb-8">
      <input type="email" placeholder="Email" name="email" autocomplete="off" v-model="user.email" class="form-control bg-transparent" required/>
    </div>

    <div class="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
      <div></div>
    </div>

    <div class="d-flex flex-wrap justify-content-center pb-lg-0">
      <button type="submit" id="kt_password_reset_submit" class="btn btn-primary me-4">
        <span class="indicator-label">Recuperar</span>
      </button>
      <router-link :to="{name:'auth-login'}" class="btn btn-light">Cancelar</router-link>
    </div>

  </form>
</template>

<script setup lang="ts">

definePageMeta({
  layout: "auth"
})

let user = {
  email: '',
}

let recoverPassword = ()=>{
  alert('recoverPassword')
}

</script>