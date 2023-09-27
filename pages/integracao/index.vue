<template>

  <div style="margin-top: -110px;">


    <div class="container pt-10 pt-lg-13" >
      <h3 class="fs-2x fw-bold text-white text-center mb-10 mb-lg-13">Validador Integração</h3>
      <div class="position-relative w-100 mw-600px mx-auto" style="background: rgba(255, 255, 255, 0.05);">
      <span class="svg-icon svg-icon-2qx svg-icon-white position-absolute top-50 translate-middle ms-9">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
          <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
        </svg>
      </span>
        <input type="text" v-model="formId" v-on:change="findForm" class="form-control bg-transparent fs-2 py-6 ps-17 placeholder-white opacity-50" style="color: white; border: 1px solid rgba(255, 255, 255, 0.24);" placeholder="Id do Formulário" />
      </div>
    </div>

    <div class="card mb-7" style="margin-top: 50px;" v-if="!integracaoStore.formCampos">
      <div class="card-body text-center">
        <h1 class="fw-bold text-dark "> Formulário não encontrado! </h1>
      </div>
    </div>


  <div class="container" style="margin-top: 50px;" v-else>
    <div class="card">
      <div class="card-body p-lg-17">
        <div class="row mb-3">
          <div class="col-md-12 pe-lg-10">
            <form @submit.prevent="sendForm()" class="form mb-15 fv-plugins-bootstrap5 fv-plugins-framework">
              <h1 class="fw-bold text-dark mb-9">Testador Online</h1>


              <div v-for="campo in integracaoStore.formCampos[0].campos" v-if="integracaoStore.formCampos[0]">

<!--                <TextInput v-if="campo && campo.tipo === 'Texto'" :campo="campo" />-->

              </div>



              <button type="submit" class="btn btn-primary">
                <span class="indicator-label">Enviar</span>
              </button>

              <div>

              </div>
            </form>
          </div>

        </div>
        <div class="row g-5 mb-5 mb-lg-15">
          <div class="col-sm-6 pe-lg-10">
            <div class="text-center bg-light card-rounded d-flex flex-column justify-content-center p-10 h-100">
              <h1 class="text-dark fw-bold my-5">Let’s Speak</h1>
              <div class="text-gray-700 fw-semibold fs-2">1 (833) 597-7538</div>
            </div>
          </div>
          <div class="col-sm-6 ps-lg-10">
            <div class="text-center bg-light card-rounded d-flex flex-column justify-content-center p-10 h-100">
              <h1 class="text-dark fw-bold my-5"></h1>
              <div class="text-gray-700 fs-3 fw-semibold">Churchill-laan 16 II, 1052 CD, Amsterdam</div>
            </div>
          </div>
        </div>
        <div class="card mb-4 bg-light text-center">
          <div class="card-body py-12">

          </div>
        </div>
      </div>
    </div>
  </div>


  </div>
</template>
<script setup lang="ts">
import MenuSuport from "~/components/painel/suport/MenuSuport.vue";
import {useIntegracaoStore} from "~/stores/integracaoStore";
import TextInput from "~/components/integracao/inputs/TextInput.vue";

const integracaoStore = useIntegracaoStore();

definePageMeta({
  layout: "painel",
  title: '',
  middleware: '',
  auth: false,
  showMenu: false,
})

const formId = ref();



const sendForm = ()=>{
  alert('enviando')
}


const findForm = ()=>{
  integracaoStore.formCampos = null
  if(formId.value)
    integracaoStore.getForm(formId.value)

};

</script>