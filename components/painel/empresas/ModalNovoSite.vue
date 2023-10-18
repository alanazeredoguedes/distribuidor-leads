<template>
  <div class="modal fade" id="modalCriarSite" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog mw-900px">
      <div class="modal-content">

        <div class="modal-header">
          <h2>Novo Site</h2>
        </div>

        <div class="modal-body py-lg-10 px-lg-10">

          <form @submit.prevent="novoSite()">

          <div class="fv-row mb-10 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid">
            <label class="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span class="required">Url</span>
            </label>
            <input type="text" class="form-control form-control-lg form-control-solid" name="name" placeholder="Entre com o nome" v-model="data.url" required>
          </div>

          <div class="fv-row mb-8 fv-plugins-icon-container">
            <label class="fs-6 fw-semibold mb-2">Descrição do Site</label>
            <textarea class="form-control form-control-solid" rows="5" placeholder="Entre com a descrição" v-model="data.descricao" required></textarea>
          </div>

            <div style="float: right; margin-top: 20px;" >
              <button type="submit"  class="btn btn-primary">
                <span class="indicator-label">Novo Site</span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  </div>
</template>


<script setup>
import { useEmpresaStore } from "~/stores/empresaStore";
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
const data = reactive({
  url: '',
  descricao: '',
  empresa: -1,
})

onMounted(()=>{
  empresaStore.getEmpresas()

})

const fecharModal = ()=>{
  $('#modalCriarSite').modal('hide');
}

const novoSite = ()=>{
  if(data.url === ''){
    alerts.modalAlert('info', "Preencha os Campos!", 'O campo <b>url</b> não foi preenchido')
    tab.atual = 1
    return;
  }
  if(data.empresa === ''){
    alerts.modalAlert('info', "Preencha os Campos!", 'O campo <b>empresa</b> não foi preenchido')
    tab.atual = 3
    return;
  }

  data.empresa = empresaStore.empresa.id;
  //alerts.modalLoading('Criando Formulário')

  empresaStore.createSite(data)
      .then( response => {
        alerts.notification('success', "Sucesso", 'Site criado com sucesso!')
        fecharModal()
        /*setTimeout(()=>{
          //navigateTo(`/painel/formularios/${response.data}/campos`)
          navigateTo({name: 'painel-formularios-id-campos', params: {id: response.data}})
        },1000)*/
        empresaStore.getSites(data.empresa)

      })
      .catch( response => { alerts.notification('error', "Erro", 'Não foi possível criar Site') })

}
</script>