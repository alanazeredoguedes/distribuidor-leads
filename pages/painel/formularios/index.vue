<template>
  <div class="content flex-row-fluid" id="kt_content">
    <form action="#">
      <div class="card mb-7">
        <div class="card-body">

          <div class="d-flex align-items-center row">

            <div class="col-10 d-flex">
              <div class="position-relative w-md-400px me-md-2">
                <span class="svg-icon svg-icon-3 svg-icon-gray-500 position-absolute top-50 translate-middle ms-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"></rect>
                    <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"></path>
                  </svg>
                </span>
                <input type="text" v-model="filtro.pesquisa" class="form-control form-control-solid ps-10" name="search" placeholder="Pesquisar por: id, nome, descrição, url">
              </div>
              <div class="d-flex align-items-center">
                <button type="button" class="btn btn-primary me-5" @click="filtro.avancado = !filtro.avancado" >{{ filtro.avancado ? 'Esconder' : '' }} Pesquisa Avançada</button>
                <!--                <a class="btn btn-link" @click="filtro.avancado = !filtro.avancado" >{{ filtro.avancado ? 'Esconder' : '' }} Busca Avançada</a>-->
              </div>
            </div>



            <div class="col-2">
              <button type="button" data-toggle="modal" data-target="#modalCriarFormulario" class="btn btn-primary me-5" style="float: right">Criar Formulário</button>
            </div>

          </div>

          <div :class="filtro.avancado? 'show': ''" class="collapse" style="">
            <div class="separator separator-dashed mt-9 mb-6"></div>

            <div class="row g-8 mb-8">
              <div class="col-xxl-7">
                <label class="fs-6 form-label fw-bold text-dark">Tags</label>
                <tags class="tagify form-control form-control-solid" tabindex="-1">
                  <tag title="products" contenteditable="false" spellcheck="false" tabindex="-1" class="tagify__tag tagify--noAnim" value="products"><x title="" class="tagify__tag__removeBtn" role="button" aria-label="remove tag"></x><div><span class="tagify__tag-text">products</span></div></tag><tag title="users" contenteditable="false" spellcheck="false" tabindex="-1" class="tagify__tag tagify--noAnim" value="users"><x title="" class="tagify__tag__removeBtn" role="button" aria-label="remove tag"></x><div><span class="tagify__tag-text">users</span></div></tag><tag title="events" contenteditable="false" spellcheck="false" tabindex="-1" class="tagify__tag tagify--noAnim" value="events"><x title="" class="tagify__tag__removeBtn" role="button" aria-label="remove tag"></x><div><span class="tagify__tag-text">events</span></div></tag><span contenteditable="" tabindex="0" data-placeholder="​" aria-placeholder="" class="tagify__input" role="textbox" aria-autocomplete="both" aria-multiline="false"></span>
                  ​
                </tags><input type="text" class="form-control form-control form-control-solid" name="tags" value="products, users, events" tabindex="-1">
              </div>
              <div class="col-xxl-5">
                <div class="row g-8">
                  <div class="col-lg-6">
                    <label class="fs-6 form-label fw-bold text-dark">Team Type</label>
                    <select class="form-select form-select-solid select2-hidden-accessible" data-control="select2" data-placeholder="In Progress" data-hide-search="true" data-select2-id="select2-data-10-10yo" tabindex="-1" aria-hidden="true" data-kt-initialized="1">
                      <option value=""></option>
                      <option value="1">Not started</option>
                      <option value="2" selected="selected" data-select2-id="select2-data-12-lzfm">In Progress</option>
                      <option value="3">Done</option>
                    </select><span class="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-11-66mc" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-uald-container" aria-controls="select2-uald-container"><span class="select2-selection__rendered" id="select2-uald-container" role="textbox" aria-readonly="true" title="In Progress">In Progress</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                  </div>
                  <div class="col-lg-6">
                    <label class="fs-6 form-label fw-bold text-dark">Select Group</label>
                    <div class="nav-group nav-group-fluid">
                      <label>
                        <input type="radio" class="btn-check" name="type" value="has" checked="checked">
                        <span class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">All</span>
                      </label>
                      <label>
                        <input type="radio" class="btn-check" name="type" value="users">
                        <span class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">Users</span>
                      </label>
                      <label>
                        <input type="radio" class="btn-check" name="type" value="orders">
                        <span class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">Orders</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row g-8">
              <div class="col-xxl-7">
                <div class="row g-8">
                  <div class="col-lg-4">
                    <label class="fs-6 form-label fw-bold text-dark">Min. Amount</label>
                    <div class="position-relative" data-kt-dialer="true" data-kt-dialer-min="1000" data-kt-dialer-max="50000" data-kt-dialer-step="1000" data-kt-dialer-prefix="$" data-kt-dialer-decimals="2">
                      <button type="button" class="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0" data-kt-dialer-control="decrease">
                        <span class="svg-icon svg-icon-1">
																		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
																			<rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor"></rect>
																		</svg>
																	</span>
                      </button>
                      <input type="text" class="form-control form-control-solid border-0 ps-12" data-kt-dialer-control="input" placeholder="Amount" name="manageBudget" readonly="readonly" value="$50">
                      <button type="button" class="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0" data-kt-dialer-control="increase">
                        <span class="svg-icon svg-icon-1">
																		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
																			<rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="currentColor"></rect>
																			<rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor"></rect>
																		</svg>
																	</span>
                      </button>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <label class="fs-6 form-label fw-bold text-dark">Max. Amount</label>
                    <div class="position-relative" data-kt-dialer="true" data-kt-dialer-min="1000" data-kt-dialer-max="50000" data-kt-dialer-step="1000" data-kt-dialer-prefix="$" data-kt-dialer-decimals="2">
                      <button type="button" class="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0" data-kt-dialer-control="decrease">
                        <span class="svg-icon svg-icon-1">
																		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
																			<rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor"></rect>
																		</svg>
																	</span>
                      </button>
                      <input type="text" class="form-control form-control-solid border-0 ps-12" data-kt-dialer-control="input" placeholder="Amount" name="manageBudget" readonly="readonly" value="$100">
                      <button type="button" class="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0" data-kt-dialer-control="increase">
                        <span class="svg-icon svg-icon-1">
																		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
																			<rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="currentColor"></rect>
																			<rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor"></rect>
																		</svg>
																	</span>
                      </button>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <label class="fs-6 form-label fw-bold text-dark">Team Size</label>
                    <input type="text" class="form-control form-control form-control-solid" name="city">
                  </div>
                </div>
              </div>
              <div class="col-xxl-5">
                <div class="row g-8">
                  <div class="col-lg-6">
                    <label class="fs-6 form-label fw-bold text-dark">Category</label>
                    <select class="form-select form-select-solid select2-hidden-accessible" data-control="select2" data-placeholder="In Progress" data-hide-search="true" data-select2-id="select2-data-13-jvgq" tabindex="-1" aria-hidden="true" data-kt-initialized="1">
                      <option value=""></option>
                      <option value="1">Not started</option>
                      <option value="2" selected="selected" data-select2-id="select2-data-15-04wb">Select</option>
                      <option value="3">Done</option>
                    </select><span class="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-14-hgaf" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-m0rv-container" aria-controls="select2-m0rv-container"><span class="select2-selection__rendered" id="select2-m0rv-container" role="textbox" aria-readonly="true" title="Select">Select</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                  </div>
                  <div class="col-lg-6">
                    <label class="fs-6 form-label fw-bold text-dark">Status</label>
                    <div class="form-check form-switch form-check-custom form-check-solid mt-1">
                      <input class="form-check-input" type="checkbox" value="" id="flexSwitchChecked" checked="checked">
                      <label class="form-check-label" for="flexSwitchChecked">Active</label>
                    </div>
                  </div>
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
          <!--          <p class="text-gray-400 fw-semibold fs-5 mt-1 mb-7">{{ (formulario.descricao)? formulario.descricao : '' }}</p>-->
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

<ModalCriarFormulario/>

</template>
<script setup>
import ModalCriarFormulario from "~/components/dashboard/modal/ModalCriarFormulario.vue";

definePageMeta({
  layout: "painel",
  title: 'Formulários',
  middleware: 'auth',
  auth: true,
})

import { URI } from "@/configs/api";
const baseUrl = URI

import { useFormularioStore } from "~/stores/formularioStore";
const formularioStore = useFormularioStore();
import {alerts} from "~/components/alerts";

onMounted(()=>{
  getFormularios()
})

const filtro = reactive({
  pesquisa: '',
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

const formulariosFiltrados = computed(()=>{

  let formularios = [];

  formularioStore.formularios.forEach((formulario)=>{

    if(filtro.pesquisa){
      if(formulario.nome.toLowerCase().includes(filtro.pesquisa.toLowerCase()))
        formularios.push(formulario)

      if(formulario.id.toLowerCase().includes(filtro.pesquisa.toLowerCase()))
        formularios.push(formulario)

      if(formulario.descricao)
        if(formulario.descricao.toLowerCase().includes(filtro.pesquisa.toLowerCase()))
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