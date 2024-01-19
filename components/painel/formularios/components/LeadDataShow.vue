<template>
  <div class="card" v-if="formularioStore.formularioDados.edit">
    <div class="card-header border-0 pt-6">

      <div class="card-title">
        <div class="d-flex align-items-center position-relative my-1">
            <h2>Detalhes registro: {{ formularioStore.formularioDados.edit.id }}</h2>
        </div>
      </div>

      <div class="card-toolbar" style="display: block">
        <div class="d-flex justify-content-end" >
<!--          <button type="button" class="btn btn-sm btn-primary btn-active-light" style="margin: 5px" @click="notImplemented">Salvar</button>
          <button type="button" class="btn btn-sm btn-outline-primary btn-active-primary" style="margin: 5px" @click="notImplemented">Ver Logs</button>-->
          <button type="button" class="btn btn-sm btn-light btn-active-light-primary" @click="formularioStore.formularioDados.activeItem = 1" style="margin: 5px">Voltar</button>
        </div>
      </div>


    </div>

    <div class="separator separator-dashed my-5" style=""></div>

    <div class="card-body">

      <table class="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer">

        <thead>
          <tr class="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0" style="display: none">
            <th rowspan="1" colspan="1" >Campo</th>
            <th  rowspan="1" colspan="1" >Valor</th>
            <th rowspan="1" colspan="1">Editar</th>
          </tr>
        </thead>

        <tbody class="fw-semibold text-gray-600">

          <tr class="odd" >
            <td><b>ID</b></td>
            <td>{{ formularioStore.formularioDados.edit.id }}</td>
          </tr>

          <tr class="odd"  v-for="(campo,index) in formularioStore.formularioDados.campos">
            <td style="width:300px !important;"><b>{{ campo.label }}: </b></td>
            <td>{{ formularioStore.formularioDados.edit[campo.nome] }}</td>
            <td class="text-end">
              <button type="button" class="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"><i class="bi bi-pencil-square" style="font-size: 20px"></i></button>
            </td>
          </tr>

          <tr class="odd" >
            <td><b>Criado Em</b></td>
            <td>{{ formularioStore.formularioDados.edit.createdAt }}</td>
          </tr>

          <tr class="odd" >
            <td><b>Atualizado Em</b></td>
            <td>{{ formularioStore.formularioDados.edit.updatedAt }}</td>
          </tr>

        </tbody>

      </table>

    </div>


  </div>
  <br><br><br><br> <br><br><br><br>
</template>


<script setup>
import { useFormularioStore } from "~/stores/formularioStore";
import {alerts} from "~/components/alerts";
const formularioStore = useFormularioStore();


/*
import {useFormularioStore} from "~/stores/formularioStore";
const formularioStore = useFormularioStore();
import {alerts} from "~/components/alerts";
const route = useRoute();
*/

onMounted(()=>{

})

const notImplemented = ()=>{
  alerts.modalAlert('info', "Em breve!", "Funcionalidade está sendo implementada!", 5000)
}

</script>