<template>

  <div class="content flex-row-fluid" id="kt_content" style="margin-top: -30px; margin-bottom: 30px">
    <div class="card">
      <div class="card-header border-0 pt-6">

        <ul  class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
          <li class="nav-item">
            <a class="nav-link text-active-primary py-5 me-6" href="javascript:void(0)" @click="cleanShowLead" :class="formularioStore.formularioDados.activeItem === 1? 'active': ''">Registros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-active-primary py-5 me-6" href="javascript:void(0)" @click="formularioStore.formularioDados.activeItem=2" :class="formularioStore.formularioDados.activeItem === 2? 'active': ''" v-if="formularioStore.formularioDados.edit !== null">Detalhes</a>
          </li>
          <li class="nav-item">
            <a href="javascript:void(0)" class="nav-link text-active-primary py-5 me-6" :class="formularioStore.formularioDados.activeItem === 3? 'active': ''" @click="notImplemented" v-if="formularioStore.formularioDados.log !== null">Eventos & Logs</a>
<!--            <a class="nav-link text-active-primary py-5 me-6" href="javascript:void(0)" @click="formularioStore.formularioDados.activeItem=3" :class="formularioStore.formularioDados.activeItem === 3? 'active': ''">Eventos & Logs</a>-->
          </li>
        </ul>
      </div>
    </div>
  </div>


  <div class="content flex-row-fluid content-listagem"  :style="formularioStore.formularioDados.activeItem === 1? 'display: block;' : 'display: none;'">
    <ListData :active-item="formularioStore.formularioDados.activeItem"/>
  </div>

  <div class="content flex-row-fluid content-dados" :style="formularioStore.formularioDados.activeItem === 2? 'display: block;' : 'display: none;'">

    <LeadDataShow/>

  </div>

  <div class="content flex-row-fluid content-logs" :style="formularioStore.formularioDados.activeItem === 3? 'display: block;' : 'display: none;'">
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

const cleanShowLead = () =>{
  formularioStore.formularioDados.activeItem = 1
    // formularioStore.formularioDados.edit = null
    // formularioStore.formularioDados.log = null
}

const notImplemented = ()=>{
  alerts.modalAlert('info', "Em breve!", "Funcionalidade está sendo implementada!", 5000)
}


</script>