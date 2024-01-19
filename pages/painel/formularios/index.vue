<template>
  <div class="content flex-row-fluid" id="kt_content">
    <form action="#">
      <div class="card mb-7">
        <div class="card-body">

          <div class="d-flex align-items-center row">

            <div class="col-8 d-flex">
              <div class="position-relative w-md-400px me-md-2">
                <span class="svg-icon svg-icon-3 svg-icon-gray-500 position-absolute top-50 translate-middle ms-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"></rect>
                    <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"></path>
                  </svg>
                </span>
                <input type="text" v-model="filtro.pesquisa" class="form-control form-control-solid ps-10" name="search" placeholder="Pesquisar por: id, nome, descrição, empresa, url">
              </div>
              <div class="d-flex align-items-center">
                <button type="button" class="btn btn-primary me-5" @click="filtro.avancado = !filtro.avancado" >{{ filtro.avancado ? 'Esconder' : '' }} Pesquisa Avançada</button>
                <!--                <a class="btn btn-link" @click="filtro.avancado = !filtro.avancado" >{{ filtro.avancado ? 'Esconder' : '' }} Busca Avançada</a>-->
              </div>
            </div>


            <div class="col-4">
              <button type="button" data-toggle="modal" data-target="#modalCriarFormulario" class="btn btn-primary me-5" style="float: right">Criar Formulário</button>
            </div>

          </div>

          <div :class="filtro.avancado? 'show': ''" class="collapse" style="">

            <div class="separator separator-dashed mt-9 mb-6"></div>

<!--            <div class="row" style="margin-top: 10px;">
              <div class="col-8"></div>

            </div>-->

            <div class="row g-8 mb-8">


              <div class="col-xxl-6">
                <label class="fs-6 form-label fw-bold text-dark">Empresas</label>
                <div class="w-300">
                  <multiselect
                      :options="empresasSelect"
                      v-model="filtro.empresa"
                      placeholder="Escolha a Empresa"
                      deselect-label="Remover"
                      select-label="Selecionar"
                      selected-label="Selecionado"
                      track-by="name"
                      label="name"
                      :allow-empty="true"
                      close-on-select="true"
                      allow-empty="true"
                      searchable="true"
                  />
                </div>
              </div>

              <div class="col-xxl-6">
                <label class="fs-6 form-label fw-bold text-dark">Sites</label>
                <div class="w-300">
                  <multiselect
                      :options="sitesSelected"
                      v-model="filtro.site"
                      placeholder="Escolha o Site"
                      deselect-label="Remover"
                      select-label="Selecionar"
                      selected-label="Selecionado"
                      track-by="name"
                      label="name"
                      :allow-empty="true"
                      close-on-select="true"
                      allow-empty="true"
                      searchable="true"
                  />
                </div>
              </div>

            </div>

            <div class="row g-8">
              <div class="col-xxl-10">
                <div class="row g-8">

                  <div class="col-lg-12">
                    <label class="fs-6 form-label fw-bold text-dark">Status</label>
                    <div class="nav-group nav-group-fluid">
                      <label>
                        <input type="radio" class="btn-check" name="type" v-model="filtro.status" value="0" checked="checked">
                        <span class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">Todos</span>
                      </label>
                      <label>
                        <input type="radio" class="btn-check" name="type" v-model="filtro.status" value="2">
                        <span class="btn btn-sm btn-color-muted btn-active btn-active-success fw-bold px-4">Ativo</span>
                      </label>
                      <label>
                        <input type="radio" class="btn-check" name="type" v-model="filtro.status" value="1">
                        <span class="btn btn-sm btn-color-muted btn-active btn-active-warning fw-bold px-4">Em Análise</span>
                      </label>
                      <label>
                        <input type="radio" class="btn-check" name="type" v-model="filtro.status" value="3">
                        <span class="btn btn-sm btn-color-muted btn-active btn-active-danger fw-bold px-4">Inativo</span>
                      </label>
                    </div>
                  </div>

                </div>
              </div>
              <div class="col-xxl-2">
                <label class="fs-6 form-label fw-bold " style="color: white">_</label>
                <div class="w-300">
                  <button @click="pdfIntegracao" type="button" class="btn btn-secondary me-5" style="float: right">Relatório PDF</button>
                </div>
              </div>
            </div>



          </div>

        </div>
      </div>
    </form>


  </div>



  <div class="row g-6 g-xl-9" v-if="formulariosFiltrados">


    <div class="col-md-6 col-xl-4" v-for="(formulario, index) in formulariosFiltrados">

      <nuxt-link :to="{ name: 'painel-formularios-id-visao_geral', params: { id: formulario.id } }" class="card border-hover-primary">

        <div class="card-header border-0 pt-9">
          <div class="card-title m-0">
            <div class="w-120px bg-light" v-if="formulario.empresa.logo">
              <img :src="baseUrl+formulario.empresa.logo.url.referencia" alt="image" class="p-3" style="max-width: 120px; max-height: 50px;">
            </div>
          </div>
          <div class="card-toolbar">

            <span v-if="formulario.status" v-bind:class="getStyleStatus(formulario.status.id)" class="badge fw-bold me-auto px-4 py-3">{{ formulario.status.status }}</span>
          </div>
        </div>

        <div class="card-body p-9">
          <div class="fs-3 fw-bold text-dark">{{ (formulario.nome)? formulario.nome : '' }}</div>
          <div class="fs-8 fw-bold text-dark" style="margin-bottom: 10px;">{{ (formulario.id)? formulario.id : '' }}</div>
          <p class="text-gray-400 fw-semibold fs-5 mt-1 mb-7">{{ (formulario.site)? formulario.site.url : '' }}</p>
          <div class="d-flex flex-wrap mb-5">
            <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
              <div class="fs-6 text-gray-800 fw-bold">{{ (formulario.criadoEm)? formulario.criadoEm: '' }}</div>
              <div class="fw-semibold text-gray-400">Criado em</div>
            </div>
            <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
              <div class="fs-6 text-gray-800 fw-bold">{{ (formulario.atualizadoEm)? formulario.atualizadoEm: '' }}</div>
              <div class="fw-semibold text-gray-400">Atualizado em</div>
            </div>
          </div>
          <div class="h-4px w-100 bg-light mb-5" data-bs-toggle="tooltip" data-kt-initialized="1">
            <div class="bg-primary rounded h-4px" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="symbol-group symbol-hover">
            <span> 2000 leads </span>
          </div>
        </div>
      </nuxt-link>
    </div>

  </div>
  <a style="display: none" href="" class=" btn_export_integration" target="_blank"></a>


<ModalCriarFormulario/>

</template>
<script setup>
import Multiselect from 'vue-multiselect'
import { ref, watch } from 'vue'
import ModalCriarFormulario from "~/components/dashboard/modal/ModalCriarFormulario.vue";
import { useFormularioStore } from "~/stores/formularioStore";
import { useEmpresaStore } from "~/stores/empresaStore";
const formularioStore = useFormularioStore();
const empresaStore = useEmpresaStore();
import {alerts} from "~/components/alerts";
import VueMultiselectEsm from "vue-multiselect";
import $ from 'jquery'

definePageMeta({
  layout: "painel",
  title: 'Formulários',
  middleware: 'auth',
  auth: true,
})

import { URI } from "@/configs/api";
const baseUrl = URI



onMounted(()=>{
  getFormularios()
  empresaStore.sites = []
  formularioStore.getStatus()
  empresaStore.getEmpresas()
})


const filtro = reactive({
  pesquisa: '',
  empresa: '',
  site: '',
  status: '0',

})


const getFormularios = ()=>{
  alerts.notification('info', "Aguarde!", 'Consultando Informações!')

  formularioStore.getFormularios()
      .then( response => {
        alerts.notification('success', "Sucesso", 'Sucesso ao carregar Formulários')
      })
      .catch( response => {
        alerts.notification('error', "Erro", 'Falha ao carregar Formulários')
      })
}

watch(() => filtro.empresa, (empresa) => {
  if(empresa)
  {
    empresaStore.getSites(empresa.data.id)
  }else{
    empresaStore.sites = []
    filtro.site = ''
  }
})



const pdfIntegracao = ()=>{

  alerts.modalConfirm('Gerar Relatório de Integração ?', 'Para cada um dos formulários abaixo, será gerado um relatório contendo informações de como realizar a integração!', ()=>{
    formulariosFiltrados.value.forEach((form)=>{
      let url = baseUrl + "/api/integration/fields/pdf/"+ form.id.replace('#','%23')
      $(`.btn_export_integration`).prop('href', url);
      $(`.btn_export_integration`)[0].click()
    })
  })



}

// COMPUTED

const empresasSelect = computed(()=>{
  let empresas = []
  empresaStore.empresas.forEach((empresa)=>{
    empresas.push( {
      name: empresa.nome,
      data: empresa
    } )
  })
  return empresas;
})

const sitesSelected = computed(()=>{
  let sites = []
  empresaStore.sites.forEach((site)=>{
    sites.push( {
      name: site.url,
      data: site
    } )
  })
  return sites;
})

const formulariosFiltrados = computed(()=>{

  let formularios = [];

  formularioStore.formularios.forEach((formulario)=>{

    //console.log(filtro.site)

    if(filtro.status && filtro.status !== '0')
      if(filtro.status+'' !== formulario.status.id+'')
        return;

    if(filtro.empresa)
    {
      if(filtro.empresa.data.id !== formulario.empresa.id)
        return;

      if(filtro.site)
        if(!formulario.site || filtro.site.data.id !== formulario.site.id)
          return;

    }


    if(filtro.pesquisa){
      if(formulario.nome.toLowerCase().includes(filtro.pesquisa.toLowerCase()))
        formularios.push(formulario)

      if(formulario.id.toLowerCase().includes(filtro.pesquisa.toLowerCase()))
        formularios.push(formulario)

      if(formulario.descricao)
        if(formulario.descricao.toLowerCase().includes(filtro.pesquisa.toLowerCase()))
          formularios.push(formulario)

      if(formulario.empresa)
        if(formulario.empresa.nome.toLowerCase().includes(filtro.pesquisa.toLowerCase()))
          formularios.push(formulario)

      if(formulario.site)
        if(formulario.site.url.toLowerCase().includes(filtro.pesquisa.toLowerCase()))
          formularios.push(formulario)

    }else{
      formularios.push(formulario)
    }




  })

  return [...new Set(formularios)]
})

const getStyleStatus = (statusId)=>{
      if(statusId === 1){
        return 'badge-light-warning'
      }else if(statusId === 2){
        return 'badge-light-success'
      }else if(statusId=== 3){
        return 'badge-light-danger'
      }
}

</script>