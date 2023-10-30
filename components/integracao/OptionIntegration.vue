<template>
  <div class="col-8" v-if="activeIntegration === id">
    <div class="card d-flex flex-row-fluid" >

    <div class="card-header">
      <div class="card-title" >
        <h2> {{ integrations[integration.id].name }}</h2>
      </div>
      <div class="form-check form-switch form-check-custom form-check-solid">

        <input class="form-check-input" type="checkbox" v-model="integration.active"/>
        <label class="form-check-label">
          {{ (integration.active)? 'Ativo': 'Inativo' }}
        </label>

        <input class="form-check-input" type="checkbox" v-model="integration.async" style="margin-left: 20px;"/>
        <label class="form-check-label">
          {{ (integration.async)? 'Síncrono': 'Não Síncrono' }}
        </label>

      </div>

    </div>

    <div class="card-body pt-9">

      <TextInput v-for="(input, index) in integration.fields" :input="input" />

    </div>

      <div class="card-footer">
        <button class="btn btn-danger btn-sm" style="float: right" @click="excluirIntegracao">Excluir</button>
      </div>


    </div>
  </div>
</template>

<script setup>
import {useFormularioStore} from "~/stores/formularioStore";
const formularioStore = useFormularioStore();
import integrations from "~/components/ts/integracoes";
import TextInput from "~/components/integracao/inputs/TextInput.vue";
import {alerts} from "~/components/alerts";

const props = defineProps({
  integration: Object,
  id: Number,
  activeIntegration: Number,
})

const integrationConfig = integrations[props.integration.id]

onMounted(()=>{
  formularioStore.getFormularioCampos(formularioStore.formulario.id)
  //console.log(integrationConfig)

})

const excluirIntegracao = ()=>{
  alerts.modalConfirm('Deseja Excluir', 'A integração será removida do fluxo de integração!', ()=>{
    formularioStore.formularioIntegracoes.splice(props.id, 1);
    props.activeIntegration = -1
  })

}





</script>