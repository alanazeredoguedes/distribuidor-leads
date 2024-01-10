<template>
  <div class="d-flex flex-column flex-root">
    <div class="d-flex flex-column flex-lg-row flex-column-fluid">
      <div class="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
        <div class="d-flex flex-center flex-column flex-lg-row-fluid">
          <div class="w-lg-500px p-10">


            <slot/>


          </div>
        </div>
        <div class="d-flex flex-center flex-wrap px-5">
          <div class="d-flex fw-semibold text-primary fs-base">
            <a href="javascript:void(0)" class="px-5" >Termos </a>
            <a href="javascript:void(0)" class="px-5" >Sobre</a>
            <a href="javascript:void(0)" class="px-5" >Fale Conosco</a>
          </div>
        </div>
      </div>


      <div class="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2" :style="'background-image: url('+ bg +')'">
        <div class="d-flex flex-column flex-center py-15 px-5 px-md-15 w-100">
          <nuxt-link :to="{name: 'index'}" class="mb-12">
            <!--            <img alt="Logo" src="assets/media/logos/custom-1.png" class="h-75px" />-->
            <h1 style="color: white" class="text-center text-white fs-3qx fw-bolder text-center mb-7">Distribuidor de <Leads></Leads></h1>
          </nuxt-link>
          <img class="mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20" src="@/assets/media/misc/auth-screens.png" alt="" />
          <h1 class="text-white ">Rápido, Eficiente e Produtivo</h1>
          <div class="text-white fs-base text-center">

            O novo Sistema de integração que veio para ficar!

          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700");
@import url("@/assets/css/style.bundle.css");

</style>

<script setup lang="ts">
import bg from 'assets/media/misc/auth-bg.png'

onMounted(()=>{
  document.querySelector('#__nuxt').className = 'd-flex flex-column flex-root'
  document.querySelector('body').style.backgroundImage='none';
})

onUpdated(()=>{

})



</script>