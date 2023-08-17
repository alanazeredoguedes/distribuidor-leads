<template>
  <div>
    <slot/>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700");
@import url("@/assets/css/style.bundle.css");
@import url("@/assets/plugins/global/plugins.bundle.css");
</style>

<script setup lang="ts">

onMounted(()=>{
  document.querySelector('#__nuxt').className = 'd-flex flex-column flex-root'
  document.querySelector('body').style.backgroundImage='none';
})

</script>