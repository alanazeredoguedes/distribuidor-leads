<template>
  <div class="card">
    <div class="card-header border-0 pt-6">

      <div class="card-title">
        <div class="d-flex align-items-center position-relative my-1">
            <span class="svg-icon svg-icon-1 position-absolute ms-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"></rect>
                <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"></path>
              </svg>
            </span>
          <input type="text" data-kt-customer-table-filter="search" v-model="filtros.pesquisa" class="form-control form-control-solid w-450px ps-15" placeholder="Pesquisar Registro">
        </div>
      </div>

      <div class="card-toolbar" style="display: block">
        <div class="d-flex justify-content-end" >

<!--          <button type="button" @click="notImplemented" class="btn btn-primary" style="margin: 5px">Adicionar Registro</button>
          <button type="button" @click="notImplemented" class="btn btn-outline-dark" style="margin: 5px">Reprocessar</button>-->
          <button type="button" @click="reloadData" class="btn btn-outline-primary" style="margin: 5px">
            <i class="bi bi-arrow-clockwise" style="font-size: 20px; "></i>
          </button>

        </div>

      </div>
    </div>


    <div class="separator separator-dashed my-5" style=""></div>

    <div class="card-body pt-0">
      <div id="kt_customers_table_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">

        <PaginacaoData/>

        <div class="table-responsive">
          <table class="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer" id="kt_customers_table">

              <thead>

                <tr class="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">

                  <th class="w-10px pe-2 sorting_disabled" rowspan="1" colspan="1" aria-label="" style="width: 40px;">
                    <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                      <input class="form-check-input" type="checkbox" value="1">
                    </div>
                  </th>

                  <th class="min-w-80px sorting" tabindex="0" aria-controls="kt_customers_table" rowspan="1" colspan="1" aria-label="Payment Method: activate to sort column ascending" style="width: 50px !important;">ID</th>

                  <th class="min-w-125px sorting" tabindex="0" rowspan="1" colspan="1" style="width: 170px;" v-for="(campo,index) in campos">
                    {{ campo.label }}
                  </th>

                    <th class="min-w-125px sorting" tabindex="0" aria-controls="kt_customers_table" rowspan="1" colspan="1" aria-label="Payment Method: activate to sort column ascending" style="width: 140px;">Criado Em</th>
                    <th class="min-w-125px sorting" tabindex="0" aria-controls="kt_customers_table" rowspan="1" colspan="1" aria-label="Payment Method: activate to sort column ascending" style="width: 140px;">Atualizado Em</th>
                    <th class="text-end min-w-70px sorting_disabled" rowspan="1" colspan="1" aria-label="Actions" style="width: 110px;">Ações</th>
                  </tr>

            </thead>

             <tbody class="fw-semibold text-gray-600">

                  <tr class="odd" v-for="(dado,index) in registrosFiltrados">

                    <td :class="showActiveItem(dado.id)">
                      <div class="form-check form-check-sm form-check-custom form-check-solid"> <input class="form-check-input" type="checkbox" value="1"> </div>
                    </td>


                    <td :class="showActiveItem(dado.id)">
                      {{ dado.id }}
                    </td>

                    <td v-for="campo in campos" :class="showActiveItem(dado.id)">
                      <div v-if="campo.tipo === 'Texto'">
                        {{ dado[campo.nome] }}
                      </div>
                      <div v-else-if="campo.tipo === 'Boleano'">
                        <div class="badge badge-light-success" v-if="dado[campo.nome] === true">Sim</div>
                        <div class="badge badge-light-danger" v-if="dado[campo.nome] === false">Não</div>
                      </div>
                      <div v-if="campo.tipo === 'Numeral'">
                        {{ dado[campo.nome] }}
                      </div>
                    </td>

                    <td :class="showActiveItem(dado.id)">{{ dado.createdAt }}</td>
                    <td :class="showActiveItem(dado.id)">{{ dado.createdAt }}</td>

                    <td class="text-end" :class="showActiveItem(dado.id)">
                      <a href="javascript:void(0)" @click="acessarLead(dado)" class="btn btn-sm btn-light btn-active-primary" >Acessar</a>
                    </td>

                  </tr>
            </tbody>

      </table>

          <div class="text-center" style="margin: 20px">
            <span class="text-muted" style="font-size: 18px;"  v-if="!registrosFiltrados.length">
                <b>  Sem registros a exibir </b>
                </span>
          </div>


      </div>

        <PaginacaoData/>
      </div>




    </div>
  </div>
</template>
<style>

.colorShow {
  background-color: rgba(0, 158, 247, 0.05) !important;
}

</style>
<script setup>

import { ref, computed } from 'vue'
import {defineComponent} from "vue";
import VueMultiselectEsm from "vue-multiselect";
import {useFormularioStore} from "~/stores/formularioStore";
const formularioStore = useFormularioStore();
import {alerts} from "~/components/alerts";
import PaginacaoData from "~/components/painel/formularios/components/PaginacaoData.vue";
const route = useRoute();

const props = defineProps(['activeItem'])


const showActiveItem =(id)=>{
  return (formularioStore.formularioDados.edit && formularioStore.formularioDados.edit.id === id) ? 'colorShow' : ''
}

const campos = reactive([])

const filtros = reactive({
  pesquisa: '',
  pagina: {
    qtd: 10,
    atual: 1,
  }
})

onMounted(()=>{
  updateData()
})
onUpdated(()=>{
  //updateData()
})



const acessarLead = (lead)=>{
  formularioStore.formularioDados.edit = null
  formularioStore.formularioDados.edit = lead
  formularioStore.formularioDados.log = []
  formularioStore.formularioDados.activeItem = 2
}

const reloadData = ()=>{
  updateData()
}


const updateData = ()=>{
  formularioStore.getFormularioDados(route.params.id)
      .then((response)=>{alerts.notification('success', "Sucesso", 'Sucesso ao carregar Dados do Formulário!')})
      .catch(()=>{ alerts.notification('error', "Erro", 'Falha ao carregar Dados do Formulário!'); })

  formularioStore.formularioDados.campos = []
  formularioStore.getFormularioCampos(route.params.id)
      .then((response)=>{

        campos.splice(0,campos.length)

        response.forEach((campo, index)=>{
          formularioStore.formularioDados.campos.push(campo)
          if(index < 3)
            campos.push(campo)
        })

      })
}

const notImplemented = ()=>{
  alerts.modalAlert('info', "Em breve!", "Funcionalidade está sendo implementada!", 5000)
}

const registrosFiltrados = computed(()=>{

  let registros = [];

  formularioStore.formularioDados.list.forEach((registro)=>{

    if(filtros.pesquisa){

      if(String(registro.id).toLowerCase().includes(filtros.pesquisa.toLowerCase()))
        registros.push(registro)

      formularioStore.formularioDados.campos.forEach((campo)=>{

        if(["Boleano", "Arquivo"].includes(campo.tipo))
          return;

        let value = String(registro[campo.nome]).toLowerCase()

        if(value.includes(filtros.pesquisa.toLowerCase()))
          registros.push(registro)

      })

      if(String(registro.createdAt).toLowerCase().includes(filtros.pesquisa.toLowerCase()))
        registros.push(registro)

      if(String(registro.updatedAt).toLowerCase().includes(filtros.pesquisa.toLowerCase()))
        registros.push(registro)

    }else{
      registros.push(registro)
    }

  })

  return [...new Set(registros)]
})



</script>