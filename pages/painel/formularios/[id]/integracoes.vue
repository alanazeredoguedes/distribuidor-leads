<template>


  <div class="d-flex flex-wrap flex-stack pt-10 pb-8">
    <h3 class="fw-bold my-2">
      Integrações
      <span class="fs-6 text-gray-400 fw-semibold ms-1">
        gerencie as integrações abaixo.
      </span>
    </h3>

    <div class="d-flex flex-wrap my-1">
      <ul class="nav nav-pills me-5" role="tablist">
        <li class="nav-item m-0" role="presentation">
          <button class="btn btn btn-primary" data-toggle="modal" data-target="#modalAddIntegracao">
            Adicionar Integração
          </button>
        </li>
      </ul>
    </div>
  </div>





  <div class="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid" id="kt_create_account_stepper" data-kt-stepper="true">

    <div class="card d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px w-xxl-400px me-9">
      <div class="card-body px-6 px-lg-10 px-xxl-15 py-20">
        <div class="stepper-nav">

          <div class="stepper-item" data-kt-stepper-element="nav">

            <div class="stepper-wrapper">
              <div class="stepper-icon w-40px h-40px">
                <i class="stepper-check fas fa-check"></i>
                <span class="stepper-number">1</span>
              </div>
              <div class="stepper-label">
                <h3 class="stepper-title">Account Type</h3>
                <div class="stepper-desc fw-semibold">Setup Your Account Details</div>
              </div>
            </div>

            <div class="stepper-line h-40px"></div>
          </div>



        </div>
      </div>
    </div>






    <div class="card d-flex flex-row-fluid ">

      <div class="card-header">
        <div class="card-title" >
          <h2>Portal do Corretor</h2>
        </div>
        <div class="form-check form-switch form-check-custom form-check-solid">
          <input class="form-check-input" type="checkbox" value=""/>
          <label class="form-check-label">
            Inativo
          </label>
        </div>
      </div>




      <div class="card-body pt-9">



        <div class="input-group mb-5">
          <span class="input-group-text" id="basic-addon3">url</span>
          <input type="text" class="form-control"/>
        </div>





        <br><br><br><br><br><br><br><br><br>

      </div>




    </div>











  </div>



  <ModalAddIntegracao/>
</template>
<script setup>
import ModalAddIntegracao from "~/components/painel/formularios/integracao/ModalAddIntegracao.vue";
import {useFormularioStore} from "~/stores/formularioStore";
const formularioStore = useFormularioStore();



definePageMeta({
  layout: "painel",
  title: 'Formulário - Integrações',
  middleware: 'auth',
  auth: true,
})



const formIntegrations = [

];

</script>