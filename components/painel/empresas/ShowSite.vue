<template>
  <div class="form-group d-flex flex-wrap align-items-center gap-5" style="margin-bottom: 10px;">
    <input type="text" class="form-control mw-300 w-600px" v-model="site.url" placeholder="Url">
    <button type="button" @click="save" class="btn btn-sm btn-icon btn-light-primary">
      <i class="bi bi-save"></i>
    </button>
    <button type="button" @click="remove" class="btn btn-sm btn-icon btn-light-danger">
      <i class="bi bi-x-lg"></i>
    </button>
  </div>
</template>
<script setup>
import {useEmpresaStore} from "~/stores/empresaStore";
import {alerts} from "~/components/alerts";
const empresaStore = useEmpresaStore();

const props = defineProps({
  site: Object
})

const save = ()=> {
  alerts.modalConfirm('Alterar Site', 'Ao alterar o site, pode impactar a forma de localizar os ' +
      'formulários liagados a ele!',()=>{
    empresaStore.updateSite(props.site.id, {url: props.site.url}).then(()=>{
      alerts.notification('success', "Sucesso", 'Sucesso ao Atualizar Site!')
      empresaStore.getSites(props.site.empresa)

    })
  }, ()=>{})
}

const remove = ()=> {
  alerts.modalConfirm('Deletar Site', 'Ao deletar o site, será removido o vinculo dos ' +
      'formulários liagados a ele!',()=>{
          empresaStore.deleteSite(props.site.id).then(()=>{
            alerts.notification('success', "Sucesso", 'Sucesso ao remove Site')
            empresaStore.getSites(props.site.empresa)

        })
  }, ()=>{})
}

</script>