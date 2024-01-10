<template>
  <div class="card" v-if="formularioStore.formularioConfiguracoes">
    <div class="card-header">
      <div class="card-title fs-3 fw-bold">Configurações</div>
    </div>

    <form class="form fv-plugins-bootstrap5 fv-plugins-framework" @submit.prevent="salvar()">
      <div class="card-body p-9">



        <div class="row mb-8">

          <div class="col-xl-3">
            <div class="fs-6 fw-semibold mt-2 mb-3">Status do Formulário</div>
          </div>

          <div class="col-xl-9">
            <div class="row g-9" >

              <div class="col-md-4 col-lg-12 col-xxl-4" v-for="status in formularioStore.selectStatus" >
                <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6" v-bind:class="formularioStore.formularioConfiguracoes.status === status.id? 'active': ''" data-kt-button="true">
                  <span class="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                    <input class="form-check-input" type="radio" name="usage" v-model="formularioStore.formularioConfiguracoes.status" :value="status.id">
                  </span>
                  <span class="ms-5" style="height: 100px">
                    <span class="fs-4 fw-bold mb-1 d-block">{{ status.status }}</span>
                    <span class="fw-semibold fs-7 text-gray-600 " >{{ status.descricao }}</span>
                  </span>
                </label>
              </div>

            </div>
          </div>
        </div>



        <div class="row mb-8">
          <div class="col-xl-3">
            <div class="fs-6 fw-semibold mt-2 mb-3">Nome</div>
          </div>
          <div class="col-xl-9 fv-row fv-plugins-icon-container">
            <input type="text" class="form-control form-control-solid" v-model="formularioStore.formularioConfiguracoes.nome" name="nome">
          </div>
        </div>


        <div class="row mb-8">
          <div class="col-xl-3">
            <div class="fs-6 fw-semibold mt-2 mb-3">Site</div>
          </div>
          <div class="col-xl-9 fv-row fv-plugins-icon-container">
            <div class="w-300">
              <VueMultiselectEsm
                  :allow-empty="true"
                  deselect-label="Remover"
                  select-label="Selecionar"
                  selected-label="Selecionado"
                  placeholder="Escolha o Site"
                  v-model="formularioStore.formularioConfiguracoes.site"
                  :options="sitesOptions"
                  close-on-select="true"
                  allow-empty="true"
                  searchable="false"
              />
            </div>
          </div>
        </div>





        <div class="row mb-8">
          <div class="col-xl-3">
            <div class="fs-6 fw-semibold mt-2 mb-3" >Descrição</div>
          </div>
          <div class="col-xl-9 fv-row fv-plugins-icon-container">
            <textarea name="description" rows="7" class="form-control form-control-solid" v-model="formularioStore.formularioConfiguracoes.descricao"></textarea>
          </div>
        </div>
      </div>

      <div class="card-footer d-flex justify-content-end py-6 px-9">
        <button type="submit" class="btn btn-primary">Salvar</button>
      </div>

      <input type="hidden"><div></div></form>
  </div>
</template>
<script setup>
import VueMultiselectEsm from "vue-multiselect";

definePageMeta({
  layout: "painel",
  title: 'Formulário - Configurações',
  middleware: 'auth',
  auth: true,
})

import { URI } from "@/configs/api";
const baseUrl = URI
import {useFormularioStore} from "~/stores/formularioStore";
const formularioStore = useFormularioStore();
import {alerts} from "~/components/alerts";
const route = useRoute();
import {useEmpresaStore} from "~/stores/empresaStore";
const empresaStore = useEmpresaStore();


const sitesOptions = computed(() => {
  let sites = []
  empresaStore.sites.forEach((site)=>{
    sites.push(`${site.id} - ${site.url}`)
  })
  return sites
})



onMounted(()=>{
  alerts.notification('info', "Aguarde!", 'Consultando Informações!')
  formularioStore.getFormularioConfiguracoes(route.params.id)
      .then( response => {
        alerts.notification('success', "Sucesso", 'Sucesso ao carregar Configurações do Formulário')
        empresaStore.getSites(formularioStore.formularioConfiguracoes.empresa).then(()=>{
          console.log()
        })

      })
      .catch( response => { alerts.notification('error', "Erro", 'Falha ao carregar Configurações do Formulário'); })
  formularioStore.getStatus()


})

const salvar = ()=>{
  let id = route.params.id
  let formulario = formularioStore.formularioConfiguracoes
  formularioStore.updateFormularioConfiguracoes({id: id, data: formulario})
      .then(()=>{
        formularioStore.getFormulario(id)
        alerts.notification('success', "Sucesso", 'Sucesso ao atualizar Configurações do Formulário!')
      }).catch(()=>{ alerts.notification('error', "Erro", 'Falha ao atualizar Configurações'); })
};

</script>