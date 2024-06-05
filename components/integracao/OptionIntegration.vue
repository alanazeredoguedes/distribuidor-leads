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
        <InfoModalAlert title="Ativo ou Inativo?" size="15" style="margin-left: 5px;"
                        message="<b>Ativo:</b> A integração é processada normalmente durante o fluxo de integração.<br><br>
                        <b>Inativo:</b> A integração não é processada durante o fluxo de integração.<br><br>"
        />

        <input class="form-check-input" type="checkbox" v-model="integration.async" style="margin-left: 20px;"/>
        <label class="form-check-label">
          {{ (integration.async)? 'Síncrono': 'Não Síncrono' }}
        </label>
        <InfoModalAlert title="Síncrono ou Não Síncrono?" size="15" style="margin-left: 5px;"
                        message="<b>Síncrono:</b> A integração é processada no instante que o lead chega ao sistema, retornando a resposta da execução na API.<br><br>
                        <b>Não Síncrono:</b> A integração é processada em um momento posterior ao que lead chega ao sistema, ela cai em uma fila, onde será processada de forma independente de modo a não impactar o tempo de resposta da API.<br><br>"
        />



         <button class="btn btn-outline-danger" style="float: right; margin-left: 20px;" @click="excluirIntegracao">
            <i class="bi bi-trash-fill" style="font-size: 20px"></i>
          </button>


      </div>

    </div>

    <div class="card-body pt-9">



      <div v-for="(integrat, index) in integrationConfig.fields">

        <TextInput v-if="integrat.type === 'texto'" :optionsInput="integrat" :input="getIntegrationField(integrat.name)" />
        <TextareaInput v-if="integrat.type === 'html'" :optionsInput="integrat" :input="getIntegrationField(integrat.name)" />
        <SelectInput v-if="integrat.type === 'select'" :optionsInput="integrat" :input="getIntegrationField(integrat.name)" />

      </div>

<!--      <div v-for="(input, index) in integration.fields">
        {{input}}
        <TextInput  :input="input" />
      </div>-->


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
import TextareaInput from "~/components/integracao/inputs/TextareaInput.vue";
import InfoModalAlert from "~/components/painel/formularios/InfoModalAlert.vue";
import SelectInput from "~/components/integracao/inputs/SelectInput.vue";

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

const getIntegrationField = (name)=>{
  let data = false;
  props.integration.fields.forEach((field)=>{
   // console.log(field.name, name)
    if(field.name === name)
      data = field;
  })
  return data;
}

const excluirIntegracao = ()=>{
  alerts.modalConfirm('Deseja Excluir', 'A integração será removida do fluxo de integração!', ()=>{
    formularioStore.formularioIntegracoes.splice(props.id, 1);
    props.activeIntegration = -1
  })

}





</script>