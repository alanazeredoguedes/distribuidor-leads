<template>


  <div class="d-flex flex-wrap flex-stack pt-10 pb-8">
    <h3 class="fw-bold my-2">
      Integrações<span class="fs-6 text-gray-400 fw-semibold ms-1"> gerencie as integrações abaixo. </span>
    </h3>
    <div class="d-flex flex-wrap my-1">
      <ul class="nav nav-pills me-5" role="tablist">
        <li class="nav-item m-0" role="presentation">
          <button class="btn btn btn-primary" data-toggle="modal" data-target="#modalAddIntegracao">
            Adicionar Integração
          </button>
        </li>
      </ul>
    </div>
  </div>
  <ModalAddIntegracao/>



<div class="row">

  <div class="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid col-3" >
    <div class="card d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px w-xxl-400px me-9">
      <div class="card-body px-6 px-lg-10 px-xxl-15 py-20">
        <div class="stepper-nav">

          <div :class="(activeIntegration === index)? 'current': ''" class="stepper-item" v-for="(integration, index) in formularioStore.formularioIntegracoes">

            <a href="javascript:void(0)" @click="activeIntegration = index">
            <div class="stepper-wrapper">
              <div class="stepper-icon w-40px h-40px">
                <i class="stepper-check fas fa-check"></i>
                <span class="stepper-number">{{ index + 1}}</span>
              </div>
              <div class="stepper-label">
                <h3 class="stepper-title">{{ getIntegrationName(integration.id) }}</h3>
<!--                <div class="stepper-desc fw-semibold">{{ getIntegrationDescription(integration.id) }}</div>-->
                <div class="stepper-desc fw-semibold">Gerencie a integração!</div>

              </div>
            </div>
            </a>
            <div class="stepper-line h-40px"></div>
          </div>

          <div class="stepper-item" style="display: none;">


          </div>

        </div>
      </div>
    </div>
  </div>

  <OptionIntegration v-for="(integration, index) in formularioStore.formularioIntegracoes" :id="index" :active-integration="activeIntegration" :integration="integration"  />

</div>



</template>
<script setup>
import ModalAddIntegracao from "~/components/painel/formularios/integracao/ModalAddIntegracao.vue";
import { useFormularioStore } from "~/stores/formularioStore";
const formularioStore = useFormularioStore();
import integrations from "~/components/ts/integracoes";
import OptionIntegration from "~/components/integracao/OptionIntegration.vue";

const activeIntegration = ref(-1);

const getIntegrationName = (id) => {
  let integration = integrations[id]
  return integration['name'];
}

const getIntegrationDescription = (id) => {
  let integration = integrations[id]
  return integration['description'].slice(0, 35)
}

definePageMeta({
  layout: "painel",
  title: 'Formulário - Integrações',
  middleware: 'auth',
  auth: true,
})



const formIntegrations = [

];

</script>