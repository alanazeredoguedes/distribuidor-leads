<template>
  <div class="row">

    <div class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
      <div class="dataTables_length" id="kt_customers_table_length">
        <VueMultiselectEsm
            deselect-label="Remover"
            select-label="Selecionar"
            selected-label="Selecionado"
            :allow-empty="false"
            placeholder="Qtd"
            v-model="formularioStore.formularioDados.paginacao.qtd"
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
</template>

<script setup>
import VueMultiselectEsm from "vue-multiselect";
import {useFormularioStore} from "~/stores/formularioStore";
const formularioStore = useFormularioStore();




</script>