<template>
    <div class="modal fade" id="modalCriarFormulario" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog mw-900px">
      <div class="modal-content">

        <div class="modal-header">
          <h2>Novo Formulário</h2>
        </div>

        <div class="modal-body py-lg-10 px-lg-10">
          <div class="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid" id="kt_modal_create_app_stepper">

            <div class="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px">
              <div class="stepper-nav ps-lg-10">

                <div class="stepper-item" :class="(tab.atual === 1)? 'current':''">
                  <div class="stepper-wrapper">
                    <div class="stepper-icon w-40px h-40px">
                      <i class="stepper-check fas fa-check"></i>
                      <span class="stepper-number">1</span>
                    </div>
                    <div class="stepper-label">
                      <h3 class="stepper-title">Detalhes</h3>
                      <div class="stepper-desc">Detalhes do Formulário</div>
                    </div>
                  </div>
                  <div class="stepper-line h-40px"></div>
                </div>

                <div class="stepper-item" :class="(tab.atual === 2)? 'current':''">
                  <div class="stepper-wrapper">
                    <div class="stepper-icon w-40px h-40px">
                      <i class="stepper-check fas fa-check"></i>
                      <span class="stepper-number">2</span>
                    </div>
                    <div class="stepper-label">
                      <h3 class="stepper-title">Status</h3>
                      <div class="stepper-desc">Escolha o Status</div>
                    </div>
                  </div>
                  <div class="stepper-line h-40px"></div>
                </div>

                <div class="stepper-item" :class="(tab.atual === 3)? 'current':''">
                  <div class="stepper-wrapper">
                    <div class="stepper-icon w-40px h-40px">
                      <i class="stepper-check fas fa-check"></i>
                      <span class="stepper-number">3</span>
                    </div>
                    <div class="stepper-label">
                      <h3 class="stepper-title">Empresa</h3>
                      <div class="stepper-desc">Escolha a Empresa</div>
                    </div>
                  </div>
                  <div class="stepper-line h-40px"></div>
                </div>

<!--                <div class="stepper-item" :class="(tab.atual === 4)? 'current':''">
                  <div class="stepper-wrapper">
                    <div class="stepper-icon w-40px h-40px">
                      <i class="stepper-check fas fa-check"></i>
                      <span class="stepper-number">4</span>
                    </div>
                    <div class="stepper-label">
                      <h3 class="stepper-title">Site</h3>
                      <div class="stepper-desc">Escolha o Site</div>
                    </div>
                  </div>
                  <div class="stepper-line h-40px"></div>
                </div>-->

                <div class="stepper-item" :class="(tab.atual === 4)? 'current':''">
                  <div class="stepper-wrapper">
                    <div class="stepper-icon w-40px h-40px">
                      <i class="stepper-check fas fa-check"></i>
                      <span class="stepper-number">4</span>
                    </div>
                    <div class="stepper-label">
                      <h3 class="stepper-title">Conclusão</h3>
                      <div class="stepper-desc">...</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div class="flex-row-fluid py-lg-5 px-lg-15">
              <form class="form" novalidate="novalidate"  @submit.prevent="novoFormulario()">


                <div :class="(tab.atual === 1)? 'current':''" data-kt-stepper-element="content">
                  <div class="w-100">

                    <div class="fv-row mb-10 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid">
                      <label class="d-flex align-items-center fs-5 fw-semibold mb-2">
                        <span class="required">Nome do Formulário</span>
                      </label>
                      <input type="text" class="form-control form-control-lg form-control-solid" name="name" placeholder="Entre com o nome" v-model="formularioData.nome" required>
                    </div>

                    <div class="fv-row mb-8 fv-plugins-icon-container">
                      <label class="fs-6 fw-semibold mb-2">Descrição do Formulário</label>
                      <textarea class="form-control form-control-solid" rows="5" placeholder="Entre com a descrição" v-model="formularioData.descricao" required></textarea>
                    </div>

                  </div>
                </div>


                <div :class="(tab.atual === 2)? 'current':''" data-kt-stepper-element="content">
                  <div class="w-100">
                    <div class="fv-row" >

                      <label class="d-flex align-items-center fs-5 fw-semibold mb-4">
                        <span class="required">Status</span>
                      </label>

                      <div class="fv-row fv-plugins-icon-container fv-plugins-bootstrap5-row-valid">

                        <label class="d-flex flex-stack mb-5 cursor-pointer" v-for="status in formularioStore.selectStatus">
                          <span class="d-flex align-items-center me-2">

															<span class="symbol symbol-50px me-6">
																<span class="symbol-label" v-bind:class="( (status.id===1)? 'bg-light-warning' : '')" v-if="status.id===1"></span>
																<span class="symbol-label" v-bind:class="( (status.id===2)? 'bg-light-primary' : '')" v-if="status.id===2"></span>
																<span class="symbol-label" v-bind:class="( (status.id===3)? 'bg-light-danger' : '')" v-if="status.id===3"></span>
															</span>
															<span class="d-flex flex-column">
																<span class="fw-bold fs-6">{{ status.status }}</span>
																<span class="fs-7 text-muted">{{ status.descricao }}</span>
															</span>
														</span>
                          <span class="form-check form-check-custom form-check-solid">
                            <input class="form-check-input" type="radio" v-model="formularioData.status" :value="status.id">
                          </span>
                        </label>

                      </div>
                    </div >

                  </div>
                </div>

                <div :class="(tab.atual === 3)? 'current':''" data-kt-stepper-element="content">
                  <div class="w-100">
                    <div class="fv-row" >

                      <label class="d-flex align-items-center fs-5 fw-semibold mb-4">
                        <span class="required">Empresa</span>
                      </label>
                      <span class="fw-semibold text-muted">Empresa responsavel pelo formulário</span>

                      <div class="mh-300px scroll-y me-n7 pe-7">
                        <a class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed" v-for="empresa in empresaStore.empresas" @click="formularioData.empresa = empresa.id">
                          <div class="d-flex align-items-center" >
                            <div class="symbol symbol-35px symbol-circle">
                              <img alt="Pic" :src="baseUrl+empresa.logo.url.referencia" v-if="empresa.logo">
                            </div>
                            <div class="ms-5">
                              <div class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">{{ empresa.nome }}</div>
                              <div class="fw-semibold text-muted">#{{ empresa.prefixo }}</div>
                            </div>
                          </div>
                          <div class="" style="float: right;">
                              <input class="form-check-input" type="radio" v-model="formularioData.empresa" :value="empresa.id" required>
                          </div>
                        </a>
                      </div>

                    </div >

                  </div>
                </div>

<!--                <div :class="(tab.atual === 4)? 'current':''" data-kt-stepper-element="content">

                  Div 4

                </div>-->

                <div :class="(tab.atual === 4)? 'current':''" data-kt-stepper-element="content">

                  <div class="w-100 text-center">
                    <h1 class="fw-bold text-dark mb-3">Concluir e Cadastrar!</h1>
                    <div class="text-muted fw-semibold fs-3">Finalizar o processo e cadastrar um novo Formulário</div>
                    <div class="text-center px-4 py-15">
                      <img src="@/assets/media/illustrations/sigma-1/9.png" alt="" class="mw-150 mh-250px">
                    </div>
                  </div>

                </div>


                <div class="d-flex flex-stack pt-10">
                  <div class="me-2">
                    <button @click="tab.atual-=1" type="button" class="btn btn-lg btn-light-primary me-3" style="display: none;" v-bind:style="(tab.atual>1)? 'display:block': 'display:none;'">
                      <span class="svg-icon svg-icon-3 me-1">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1" fill="currentColor" />
													<path d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z" fill="currentColor" />
												</svg>
											</span>
                      Voltar
                    </button>
                  </div>
                  <div>
                    <button type="submit" class="btn btn-lg btn-primary" style="display: none;" data-kt-stepper-action="next" v-bind:style="(tab.atual===tab.total)? 'display:block': 'display:none;'">
												<span class="indicator-label">
                          Enviar
                          <span class="svg-icon svg-icon-3 ms-2 me-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                              <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                            </svg>
                          </span>
                        </span>
                    </button>
                    <button @click="tab.atual+=1" type="button" class="btn btn-lg btn-primary" data-kt-stepper-action="next" v-bind:style="(tab.atual===tab.total)? 'display:none': 'display:block;'">
                      Continuar
                      <span class="svg-icon svg-icon-3 ms-1 me-0">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
													<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
												</svg>
											</span>
                    </button>
                  </div>
                </div>

              </form>
            </div>

          </div>
        </div>











      </div>
    </div>
  </div>
</template>


<script setup>
import { useFormularioStore } from "~/stores/formularioStore";
import { useEmpresaStore } from "~/stores/empresaStore";
const formularioStore = useFormularioStore();
const empresaStore = useEmpresaStore();
import { URI } from "@/configs/api";
const baseUrl = URI
import {alerts} from "~/components/alerts";

import $ from 'jquery'
import {reference} from "@popperjs/core";



const tab = reactive({
  atual: 1,
  total: 4
})
const formularioData = reactive({
  nome: '',
  descricao: '',
  url: '',
  empresa: 0,
  status: 1,
})

onMounted(()=>{
  formularioStore.getStatus()
  empresaStore.getEmpresas()
})

const fecharModal = ()=>{
  $('#modalCriarFormulario').modal('hide');
}

const novoFormulario = ()=>{
  if(formularioData.nome == ''){
    alerts.modalAlert('info', "Preencha os Campos!", 'O campo <b>nome</b> não foi preenchido')
    tab.atual = 1
    return;
  }
  if(formularioData.status == ''){
    alerts.modalAlert('info', "Preencha os Campos!", 'O campo <b>status</b> não foi preenchido')
    tab.atual = 2
    return;
  }
  if(formularioData.empresa == ''){
    alerts.modalAlert('info', "Preencha os Campos!", 'O campo <b>empresa</b> não foi preenchido')
    tab.atual = 3
    return;
  }

  //alerts.modalLoading('Criando Formulário')

  formularioStore.createFormulario(formularioData)
      .then( response => {
        alerts.notification('success', "Sucesso", 'Formulário criado com sucesso!')
        fecharModal()
        setTimeout(()=>{
          //navigateTo(`/painel/formularios/${response.data}/campos`)
          navigateTo({name: 'painel-formularios-id-campos', params: {id: response.data}})
        },1000)

      })
      .catch( response => { alerts.notification('error', "Erro", 'Não foi possível criar formulário') })

}



</script>