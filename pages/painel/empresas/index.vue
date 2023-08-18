<template>
  <div class="card card-flush" style="display: block; margin-bottom: 20px;">
    <div class="card-header align-items-center py-5 gap-2 gap-md-5">

      <div class="card-title">
        <div class="d-flex align-items-center position-relative my-1">
          <span class="svg-icon svg-icon-1 position-absolute ms-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"></rect>
              <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"></path>
            </svg>
          </span>
          <input type="text" class="form-control form-control-solid w-350px ps-14" placeholder="Pesquisa Empresa" v-model="filtro.pesquisa">
        </div>
      </div>

      <div class="card-toolbar flex-row-fluid justify-content-end gap-5">
        <!--        <div class="w-100 mw-150px">
                  Filtro Select Status
                </div>-->
        <!--        <a href="#" class="btn btn-primary">Adicionar Empresa</a>-->
      </div>

    </div>
  </div>


  <div class="row g-6 g-xl-9 mb-6 mb-xl-9">

    <div class="col-md-6 col-lg-4 col-xl-3" v-for="(empresa, index) in empresasFiltradas" >
      <div class="card h-100">
        <div class="card-body d-flex justify-content-center text-center flex-column p-8">
          <nuxt-link :to="{ name: 'painel-empresas-id', params: { id: empresa.id } }" class="text-gray-800 text-hover-primary d-flex flex-column">
            <div class="mb-5">
              <img :src="baseUrl+empresa.logo.url.referencia" class="theme-light-show" alt="" style="max-width: 150px">
              <img :src="baseUrl+empresa.logo.url.referencia" class="theme-dark-show" alt="" style="max-width: 150px">
            </div>
            <div class="fs-8 fw-bold mb-2">{{ empresa.prefixo }}</div>
            <div class="fs-5 fw-bold mb-2">{{ empresa.nome }}</div>
          </nuxt-link>
          <div class="fs-7 fw-semibold text-gray-400"></div>
          <div class="fs-7 fw-semibold text-gray-400">{{ empresa.email }}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
definePageMeta({
  layout: "painel",
  title: 'Empresas',
  middleware: 'auth',
  auth: true,
})

import { URI } from "@/configs/api";
const baseUrl = URI

import {useEmpresaStore} from "~/stores/empresaStore";
const empresaStore = useEmpresaStore();
import {alerts} from "~/components/alerts";


const filtro = reactive({
  pesquisa: '',
})

onMounted(()=>{
  getEmpresas()
})

const getEmpresas = ()=>{
  alerts.notification('info', "Aguarde!", 'Consultando Informações!')

  empresaStore.getEmpresas()
      .then( response => {
        alerts.notification('success', "Sucesso", 'Sucesso ao carregar Empresas')
      })
      .catch( response => {
        alerts.notification('error', "Erro", 'Falha ao carregar Empresas')
      })
}

const empresasFiltradas = computed(()=>{
  let empresas = [];

  empresaStore.empresas.forEach((empresa)=>{

    if(filtro.pesquisa){
      if(empresa.nome.toLowerCase().includes(filtro.pesquisa.toLowerCase()))
        empresas.push(empresa)

      if(empresa.prefixo.toLowerCase().includes(filtro.pesquisa.toLowerCase()))
        empresas.push(empresa)

    }else{
      empresas.push(empresa)
    }

  })

  return [...new Set(empresas)]
})


</script>