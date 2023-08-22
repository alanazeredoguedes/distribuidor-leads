<template>
  <div class="content flex-row-fluid" id="kt_content">
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
            <input type="text" data-kt-customer-table-filter="search" class="form-control form-control-solid w-250px ps-15" placeholder="Pesquisar Registro">
          </div>
        </div>

        <div class="card-toolbar">
          <div class="d-flex justify-content-end" >

            <button type="button" class="btn btn-light-primary me-3" >
              <span class="svg-icon svg-icon-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="currentColor">
                  </path>
                </svg>
              </span>
              Filtros
            </button>

            <button type="button" class="btn btn-light-primary me-3" >
              <span class="svg-icon svg-icon-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect opacity="0.3" x="12.75" y="4.25" width="12" height="2" rx="1" transform="rotate(90 12.75 4.25)" fill="currentColor"></rect>
                  <path d="M12.0573 6.11875L13.5203 7.87435C13.9121 8.34457 14.6232 8.37683 15.056 7.94401C15.4457 7.5543 15.4641 6.92836 15.0979 6.51643L12.4974 3.59084C12.0996 3.14332 11.4004 3.14332 11.0026 3.59084L8.40206 6.51643C8.0359 6.92836 8.0543 7.5543 8.44401 7.94401C8.87683 8.37683 9.58785 8.34458 9.9797 7.87435L11.4427 6.11875C11.6026 5.92684 11.8974 5.92684 12.0573 6.11875Z" fill="currentColor"></path>
                  <path opacity="0.3" d="M18.75 8.25H17.75C17.1977 8.25 16.75 8.69772 16.75 9.25C16.75 9.80228 17.1977 10.25 17.75 10.25C18.3023 10.25 18.75 10.6977 18.75 11.25V18.25C18.75 18.8023 18.3023 19.25 17.75 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V11.25C4.75 10.6977 5.19771 10.25 5.75 10.25C6.30229 10.25 6.75 9.80228 6.75 9.25C6.75 8.69772 6.30229 8.25 5.75 8.25H4.75C3.64543 8.25 2.75 9.14543 2.75 10.25V19.25C2.75 20.3546 3.64543 21.25 4.75 21.25H18.75C19.8546 21.25 20.75 20.3546 20.75 19.25V10.25C20.75 9.14543 19.8546 8.25 18.75 8.25Z" fill="currentColor"></path>
                </svg>
              </span>
              Exportar
            </button>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_add_customer">Adicionar Registro</button>
          </div>
          <div class="d-flex justify-content-end align-items-center d-none" data-kt-customer-table-toolbar="selected">
            <div class="fw-bold me-5">
              <span class="me-2" data-kt-customer-table-select="selected_count"></span>Selected</div>
            <button type="button" class="btn btn-danger" data-kt-customer-table-select="delete_selected">Delete Selected</button>
          </div>
        </div>
      </div>



      <div class="card-body pt-0">
        <div id="kt_customers_table_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer"><div class="table-responsive"><table class="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer" id="kt_customers_table">
          <thead>

          <tr class="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">

            <th class="w-10px pe-2 sorting_disabled" rowspan="1" colspan="1" aria-label="" style="width: 40px;">
              <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                <input class="form-check-input" type="checkbox" value="1">
              </div>
            </th>

            <th class="min-w-125px sorting" tabindex="0" rowspan="1" colspan="1" style="width: 170px;" v-for="(campo,index) in campos">
              {{ campo.label }}
            </th>

            <th class="min-w-125px sorting" tabindex="0" aria-controls="kt_customers_table" rowspan="1" colspan="1" aria-label="Payment Method: activate to sort column ascending" style="width: 140px;">Criado Em</th>
            <th class="text-end min-w-70px sorting_disabled" rowspan="1" colspan="1" aria-label="Actions" style="width: 110px;">Ações</th>
          </tr>
          </thead>

          <tbody class="fw-semibold text-gray-600">

          <tr class="odd" v-for="(dado,index) in formularioStore.formularioDados">

            <td>
              <div class="form-check form-check-sm form-check-custom form-check-solid"> <input class="form-check-input" type="checkbox" value="1"> </div>
            </td>

            <td v-for="campo in campos">
              <div v-if="campo.tipo === 'Texto'">
                {{ dado[campo.nome] }}
              </div>
              <div v-else-if="campo.tipo === 'Boleano'">
                <div class="badge badge-light-success" v-if="dado[campo.nome] === true">Sim</div>
                <div class="badge badge-light-danger" v-if="dado[campo.nome] === false">Não</div>
              </div>
            </td>

            <td>{{ dado.criadoEm }}</td>

            <td class="text-end"> <a href="#" class="btn btn-sm btn-light btn-active-light-primary" >Acessar</a> </td>

          </tr>

          </tbody>
        </table>

        </div>

          <div class="row">

            <div class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
              <div class="dataTables_length" id="kt_customers_table_length">
                  <VueMultiselectEsm
                      deselect-label="Remover"
                      select-label="Selecionar"
                      selected-label="Selecionado"
                      :allow-empty="false"
                      placeholder="Qtd"
                      v-model="filtros.pagina.qtd"
                      :close-on-select="true"
                      :options="[10, 20, 30, 40, 50]"
                  />
              </div>
            </div>

            <div class="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
              <div class="dataTables_paginate paging_simple_numbers" id="kt_customers_table_paginate">
                <ul class="pagination">
                  <li class="paginate_button page-item previous disabled" id="kt_customers_table_previous">
                    <a href="#" aria-controls="kt_customers_table" data-dt-idx="0" tabindex="0" class="page-link"><i class="previous"></i></a>
                  </li>
                  <li class="paginate_button page-item active">
                      <a href="#" aria-controls="kt_customers_table" data-dt-idx="1" tabindex="0" class="page-link">1</a>
                  </li>
                  <li class="paginate_button page-item ">
                    <a href="#" aria-controls="kt_customers_table" data-dt-idx="2" tabindex="0" class="page-link">2</a>
                  </li>
                  <li class="paginate_button page-item ">
                    <a href="#" aria-controls="kt_customers_table" data-dt-idx="3" tabindex="0" class="page-link">3</a>
                  </li>
                  <li class="paginate_button page-item ">
                    <a href="#" aria-controls="kt_customers_table" data-dt-idx="4" tabindex="0" class="page-link">4</a>
                  </li>
                  <li class="paginate_button page-item next" id="kt_customers_table_next">
                    <a href="#" aria-controls="kt_customers_table" data-dt-idx="5" tabindex="0" class="page-link"><i class="next"></i></a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>



      </div>
    </div>
  </div>
</template>
<script setup>
import VueMultiselectEsm from "vue-multiselect";
import {useFormularioStore} from "~/stores/formularioStore";
const formularioStore = useFormularioStore();
import {alerts} from "~/components/alerts";
const route = useRoute();

definePageMeta({
  layout: "painel",
  title: `Formulário - Dados`,
  middleware: 'auth',
  auth: true,
})


const campos = reactive([])
const filtros = reactive({
  pagina: {
    qtd: 10,
    atual: 1,
  }
})


onMounted(()=>{
  alerts.notification('info', "Aguarde!", 'Consultando Informações!')
  formularioStore.getFormularioDados(route.params.id)
      .then((response)=>{
        alerts.notification('success', "Sucesso", 'Sucesso ao carregar Dados do Formulário!')
      })
      .catch(()=>{ alerts.notification('error', "Erro", 'Falha ao carregar Dados do Formulário!'); })

  formularioStore.getFormularioCampos(route.params.id)
      .then((response)=>{
        alerts.notification('success', "Sucesso", 'Sucesso ao carregar Campos do Formulário!')
        let camposAtual = response[0].campos
        camposAtual.forEach((campo)=>{
          campos.push(campo)
        })
      })

})



</script>