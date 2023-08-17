<template>
  <div class="d-flex flex-column flex-root">
    <div class="page d-flex flex-row flex-column-fluid">
      <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">

<!--        <Header/>-->

<!--        <Toolbar/>-->

        <div id="kt_content_container" class="d-flex flex-column-fluid align-items-start container-xxl">
          <div class="content flex-row-fluid">

            <slot/>

          </div>
        </div>

<!--        <Footer/>-->

      </div>
    </div>
  </div>
</template>
<style>

@import url("https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700");
@import url("@/assets/css/style.bundle.css");
@import url("@/assets/plugins/global/plugins.bundle.css");

</style>

<script setup lang="ts">


onMounted(()=>{
  document.querySelector('body').className = 'app-painel'
  document.querySelector('#__nuxt').className = 'd-flex flex-column flex-root'
})



</script>