<template>

  <div class="content flex-row-fluid" id="kt_content" style="margin-top: -30px; margin-bottom: 30px">
    <div class="card">
      <div class="card-header border-0 pt-6">

        <ul  class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
          <li class="nav-item">
            <a class="nav-link text-active-primary py-5 me-6" href="javascript:void(0)" @click="activeItem=1" :class="activeItem === 1? 'active': ''">Registros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-active-primary py-5 me-6" href="javascript:void(0)" @click="activeItem=2" :class="activeItem === 2? 'active': ''">Detalhes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-active-primary py-5 me-6" href="javascript:void(0)" @click="activeItem=3" :class="activeItem === 3? 'active': ''">Eventos & Logs</a>
          </li>
        </ul>
      </div>
    </div>
  </div>


  <div class="content flex-row-fluid content-listagem"  :style="activeItem === 1? 'display: block;' : 'display: none;'">
    <ListData/>
  </div>

  <div class="content flex-row-fluid content-dados" :style="activeItem === 2? 'display: block;' : 'display: none;'">

    <LeadDataShow/>

  </div>

  <div class="content flex-row-fluid content-logs" :style="activeItem === 3? 'display: block;' : 'display: none;'">

    Logs

  </div>

</template>
<script setup>
import {useFormularioStore} from "~/stores/formularioStore";
const formularioStore = useFormularioStore();
import {alerts} from "~/components/alerts";
import ListData from "~/components/painel/formularios/components/ListData.vue";
import LeadDataShow from "~/components/painel/formularios/components/LeadDataShow.vue";
const route = useRoute();

definePageMeta({
  layout: "painel",
  title: `Formulário - Dados`,
  middleware: 'auth',
  auth: true,
})

onMounted(()=>{

})

const activeItem = ref(3)


</script>