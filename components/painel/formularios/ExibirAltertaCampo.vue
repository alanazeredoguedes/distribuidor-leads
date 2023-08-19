<template>
  <a href="javascript:void(0)" @click="showAlertFocus(nome)"><i class="bi bi-info-circle" style="margin-right: -10px;"></i></a>
</template>
<script setup>
import {alerts} from "~/components/alerts";

defineProps({
  nome: String
})







const showAlertFocus = (nome)=>{
  let mensagens = {
    'tipo': {
      title: 'Tipo do Campo',
      mensagem: 'Tipo de dado que o campo pode vir a ter.'
    },
    'nome': {
      title: 'Nome do Campo',
      mensagem: 'Nome a ser utilizado para realizar a integração.'
    },
    'label': {
      title: 'Nome de Exibição',
      mensagem: 'Nome a ser utilizado na exibição dos dados, nós relatórios e etc...'
    },
    'required': {
      title: 'Obrigatório',
      mensagem: 'Define a obrigatoriedade do preenchimento do campo.'
    },
    'comprimentoMin': {
      title: 'Comprimento Mínimo ',
      mensagem: 'Comprimento mínimo que o campo deve ter!'
    },
    'comprimentoMax': {
      title: 'Comprimento Máximo',
      mensagem: 'Comprimento máximo que o campo pode ter!'
    },
    'tipoArquivo': {
      title: 'Tipo do Arquivo',
      mensagem: 'Tipos de arquivos que o campo estará disponível a receber. <br> Deixar em branco para o campo aceitar qualquer tipo de arquivo.'
    },
    'qtdMinArquivo': {
      title: 'Quantidade Mínima de Arquivos',
      mensagem: 'Quantidade mínimo de arquivos que o campo deve receber.'
    },
    'qtdMaxArquivo': {
      title: 'Quantidade Máximo de Arquivos',
      mensagem: 'Quantidade máximo de arquivos que o campo pode receber.'
    },
  }


  alerts.modalAlert('info', mensagens[nome].title, mensagens[nome].mensagem, 5000)

}
</script>