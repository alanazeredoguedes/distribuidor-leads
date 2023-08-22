<template>
  <div class="d-flex flex-column flex-root">
    <div class="page d-flex flex-row flex-column-fluid">
      <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">

        <Header/>

        <Toolbar/>

        <div id="kt_content_container" class="d-flex flex-column-fluid align-items-start container-xxl">
          <div class="content flex-row-fluid">

            <slot/>

          </div>
        </div>

        <Footer/>

      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700");
@import url("@/assets/css/style.bundle.css");
@import url("@/assets/plugins/global/plugins.bundle.css");
@import "vue-multiselect/dist/vue-multiselect.css";
/*@import url("@/assets/plugins/global/fonts/bootstrap-icons/bootstrap-icons.woff");
@import url("@/assets/plugins/global/fonts/bootstrap-icons/bootstrap-icons.woff2");*/
</style>

<script setup lang="ts">


import Header from "~/components/dashboard/template/Header.vue";
import Toolbar from "~/components/dashboard/template/Toolbar.vue";
import headerBg from '@/assets/media/patterns/header-bg.jpg';
import Footer from "~/components/dashboard/template/Footer.vue";

onMounted(()=>{
  document.querySelector('body').className = 'app-painel'
  document.querySelector('#__nuxt').className = 'd-flex flex-column flex-root'
  document.querySelector('body').style.backgroundImage = "url("+headerBg+")";
})



</script>