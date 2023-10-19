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
      </div>
    </div>

    <div class="card-body pt-9">




      <TextInput v-for="(input, index) in integrationConfig.fields" :input-options="input" />

    </div>


    </div>
  </div>
</template>

<script setup>

import integrations from "~/components/ts/integracoes";
import TextInput from "~/components/integracao/inputs/TextInput.vue";

const props = defineProps({
  integration: Object,
  id: Number,
  activeIntegration: Number,
})

const integrationConfig = integrations[props.integration.id]


onMounted(()=>{
  console.log(integrationConfig)

})







</script>