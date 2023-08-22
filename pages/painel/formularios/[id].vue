<template>
  <div v-if="formularioStore.formulario">
    <div class="card mb-6 mb-xl-9">
      <div class="card-body pt-9 pb-0">
        <div class="d-flex flex-wrap flex-sm-nowrap mb-6">
          <div class="d-flex flex-center flex-shrink-0 bg-light rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4">
            <img class="mw-50px mw-lg-75px" :src="baseUrl+formularioStore.formulario.empresa.logo.url.referencia" alt="image">
          </div>
          <div class="flex-grow-1">

            <div class="d-flex justify-content-between align-items-start flex-wrap mb-2">

              <div class="d-flex flex-column">
                <div class="d-flex align-items-center mb-1">
                  <a href="#" class="text-gray-800 text-hover-primary fs-2 fw-bold me-3">{{ formularioStore.formulario.nome }} </a>
                  <span  v-if="formularioStore.formulario.status" v-bind:class="getStyleStatus()" class="badge me-auto">{{ formularioStore.formulario.status.status }}</span>
                </div>
                <b>{{ formularioStore.formulario.id }}</b>
              </div>

              <div class="d-flex mb-4">
                <router-link :to="{name: 'painel-formularios'}" class="btn btn-sm btn-bg-light btn-active-color-primary me-3">Voltar</router-link>
                <button class="btn btn-sm btn-icon btn-bg-light btn-active-color-danger" @click="deletarFormulario">
                  <i class="bi bi-trash fs-3"></i>
                </button>
              </div>
            </div>
            <div class="d-flex flex-wrap fw-semibold mb-4 fs-5 text-gray-400">{{ (formularioStore.formulario.descricao)? formularioStore.formulario.descricao : '&nbsp;' }}</div>

            <div class="d-flex flex-wrap justify-content-start">

              <div class="d-flex flex-wrap">

                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                  <div class="d-flex align-items-center">
                    <div class="fs-4 fw-bold">{{ formularioStore.formulario.criadoEm }}</div>
                  </div>
                  <div class="fw-semibold fs-6 text-gray-400">Criado em</div>
                </div>

                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                  <div class="d-flex align-items-center">
                    <div class="fs-4 fw-bold">{{ formularioStore.formulario.atualizadoEm }}</div>
                  </div>
                  <div class="fw-semibold fs-6 text-gray-400">Atualizado em</div>
                </div>

                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                  <div class="d-flex align-items-center">
                    <span class="svg-icon svg-icon-3 svg-icon-success me-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"></rect>
                        <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"></path>
                      </svg>
                    </span>
                    <div class="fs-4 fw-bold counted" data-kt-countup="true" data-kt-countup-value="15000" data-kt-countup-prefix="$" data-kt-initialized="1">1200</div>
                  </div>
                  <div class="fw-semibold fs-6 text-gray-400">Leads Contabilizados</div>
                </div>
              </div>


            </div>
          </div>
        </div>

        <div class="separator"></div>

        <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
          <li class="nav-item">
            <router-link :class="getClassMenu('painel-formularios-id-visao_geral')" :to="{name: 'painel-formularios-id-visao_geral'}">Visão Geral</router-link>
          </li>
          <li class="nav-item">
            <router-link :class="getClassMenu('painel-formularios-id-dados')" :to="{name: 'painel-formularios-id-dados'}">Dados</router-link>
          </li>
          <li class="nav-item">
            <router-link :class="getClassMenu('painel-formularios-id-relatorios')" :to="{name: 'painel-formularios-id-relatorios'}">Relatórios</router-link>
          </li>
          <li class="nav-item">
            <router-link :class="getClassMenu('painel-formularios-id-integracoes')" :to="{name: 'painel-formularios-id-integracoes'}">Integrações</router-link>
          </li>
          <li class="nav-item">
            <router-link :class="getClassMenu('painel-formularios-id-campos')" :to="{name: 'painel-formularios-id-campos'}">Campos</router-link>
          </li>
          <li class="nav-item">
            <router-link :class="getClassMenu('painel-formularios-id-configuracoes')" :to="{name: 'painel-formularios-id-configuracoes'}">Configurações</router-link>
          </li>
          <li class="nav-item">
            <router-link :class="getClassMenu('painel-formularios-id-notificacoes')" :to="{name: 'painel-formularios-id-notificacoes'}">Notificações</router-link>
          </li>
          <li class="nav-item">
            <router-link :class="getClassMenu('painel-formularios-id-logs')" :to="{name: 'painel-formularios-id-logs'}">Logs</router-link>
          </li>
        </ul>

      </div>
    </div>

    <NuxtPage/>

  </div>
</template>
<script setup>
definePageMeta({
  layout: "painel",
  title: 'Formulário',
  middleware: 'auth',
  auth: true,
})
import { URI } from "@/configs/api";
const baseUrl = URI
import {useFormularioStore} from "~/stores/formularioStore";
const formularioStore = useFormularioStore();
import {alerts} from "~/components/alerts";
const route = useRoute();


//navigateTo({name: 'painel-formularios-id-visao_geral', params: {id: route.params.id}})

onMounted(()=>{
  getFormulario()
})


const getClassMenu = (router)=>{
  let menuClass = "nav-link text-active-primary py-5 me-6"
  return (router === route.name)? menuClass+' active' : 'nav-link text-active-primary py-5 me-6';
}

const getFormulario = ()=>{
  alerts.notification('info', "Aguarde!", 'Consultando Informações!')
  formularioStore.getFormulario(route.params.id)
      .then( response => { alerts.notification('success', "Sucesso", 'Sucesso ao carregar Formulário') })
      .catch( response => { alerts.notification('error', "Erro", 'Falha ao carregar Formulário'); navigateTo({name: 'painel-formularios'}) })
  formularioStore.getStatus()
}

const deletarFormulario = ()=>{
  alerts.modalConfirm(
      'Excluir Formulário ?',
      "Está é uma ação <b>Irreversível.</b> <br> Ao excluir um formulário, as suas configurações, leads e relatórios serão removidas!<br><br>",
      ()=>{
        formularioStore.deleteFormulario(route.params.id)
            .then(()=>{ alerts.notification('success', "Sucesso", 'Formulário removido com Sucesso!'); setTimeout(()=>{ navigateTo({name: 'painel-formularios'}) },1000) })
            .catch( response => { alerts.notification('error', "Erro", 'Falha ao remover Formulário'); })
      },
      ()=>{},
      '500px'
  )
}

const getStyleStatus = ()=>{
  if(formularioStore.formulario)
    if(formularioStore.formulario.status)
      if(formularioStore.formulario.status.id === 1){
        return 'badge-light-warning'
      }else if(formularioStore.formulario.status.id === 2){
        return 'badge-light-success'
      }else if(formularioStore.formulario.status.id === 3){
        return 'badge-light-danger'
      }

}



</script>