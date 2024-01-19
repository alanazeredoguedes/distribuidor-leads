<template>
<MenuSuport/>

  <div class="container">
    <div class="card">
      <div class="card-body p-lg-17">
        <div class="row mb-3">
          <div class="col-md-12 pe-lg-10">

            <h1 class="fw-bold text-dark mb-9">Integração</h1>


          </div>

        </div>

        <div class="card mb-4 bg-light text-center">
          <div class="card-body py-12">

          </div>
        </div>


      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import MenuSuport from "~/components/painel/suport/MenuSuport.vue";

definePageMeta({
  layout: "painel",
  title: '',
  middleware: '',
  auth: false,
  showMenu: false,
})

</script>