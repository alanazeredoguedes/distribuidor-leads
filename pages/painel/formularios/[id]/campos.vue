<template>
  <div class="card">

    <div class="card-header">
      <div class="card-title">
        <h2>Campos do Formulário</h2>
      </div>
    </div>

    <div class="card-body pt-9">
      <div class="form-group">
        <div class="d-flex flex-column gap-3" >

              <div v-for="(campo, index) in campos">

                <div class="form-group d-flex flex-wrap align-items-center gap-5" >
                  <ExibirAltertaCampo nome="tipo" />
                  <div class="w-300 w-md-250px">
                    <VueMultiselectEsm
                        placeholder="Tipo do Campo"
                        v-model="campo.tipo"
                        :options="tiposCampos"
                    />
                  </div>

                  <ExibirAltertaCampo nome="nome" />
                  <input v-model="campo.nome" v-on:keyup="filterCampo(campo)" type="text" class="form-control mw-100 w-250px" placeholder="Nome de Integração">

                  <ExibirAltertaCampo nome="label" />
                  <input v-model="campo.label" type="text" class="form-control mw-100 w-250px" placeholder="Nome de Exibição">

                  <ExibirAltertaCampo nome="required" />
                  <div class="w-300 w-md-150px">
                    <VueMultiselectEsm
                        placeholder="Obrigatorio?"
                        v-model="campo.required"
                        :options="['Sim', 'Não']"
                        close-on-select="true"
                        allow-empty="false"
                        searchable="false"
                    />
                  </div>
                  <div v-if="(campo.required)? checkRequiredCampo(campo): checkRequiredCampo(campo)"></div>

                  <button type="button" class="btn btn-sm btn-icon" v-bind:class="(index === showDivExtraCampo) ? 'btn-primary': 'btn-secondary'" @click="(showDivExtraCampo !== index)? showDivExtraCampo = index : showDivExtraCampo = ''">
                    <i class="bi bi-gear"></i>
                  </button>

                  <button type="button" class="btn btn-sm btn-icon btn-light-danger" @click="(index === showDivExtraCampo)? showDivExtraCampo = '': ''; removerCampo(index)">
                    <i class="bi bi-x-lg"></i>
                  </button>
                </div>


                <div v-bind:class="(index === showDivExtraCampo) ? 'form-group d-flex flex-wrap align-items-center gap-5' : '' " style="margin-top: 10px; display: none; " v-bind:style="(index === showDivExtraCampo) ? 'display: block;': 'display: none;'" >


                  <ExibirAltertaCampo nome="comprimentoMin" v-if="campo.tipo === 'Texto'"/>
                  <input v-if="campo.tipo === 'Texto'" v-model="campo.comprimentoMin" @change="checkRequiredCampo(index)" min="0" type="number" class="form-control mw-100 w-250px" placeholder="Comprimento Mínimo">

                  <ExibirAltertaCampo nome="comprimentoMax" v-if="campo.tipo === 'Texto'" />
                  <input v-if="campo.tipo === 'Texto'" v-model="campo.comprimentoMax" @change="checkRequiredCampo(index)" min="0" type="number" class="form-control mw-100 w-250px" placeholder="Comprimento Máximo">

                  <ExibirAltertaCampo nome="tipoArquivo" v-if="campo.tipo === 'Arquivo'" />
                  <div v-if="campo.tipo === 'Arquivo'" class="w-300 w-md-400px">
                    <VueMultiselectEsm
                        placeholder="Tipo de Arquivo"
                        v-model="campo.tipoArquivo"
                        :options="tiposArquivos"
                        multiple="true"
                        close-on-select="false"
                    />
                  </div>

                  <ExibirAltertaCampo nome="qtdMinArquivo" v-if="campo.tipo === 'Arquivo'" />
                  <input v-if="campo.tipo === 'Arquivo'" v-model="campo.qtdMinArquivo" @change="checkRequiredCampo(index)" min="0" type="number" class="form-control mw-100 w-300px" placeholder="Quantidade minima de arquivos">

                  <ExibirAltertaCampo nome="qtdMaxArquivo" v-if="campo.tipo === 'Arquivo'"/>
                  <input v-if="campo.tipo === 'Arquivo'" v-model="campo.qtdMaxArquivo" @change="checkRequiredCampo(index)" min="0" type="number" class="form-control mw-100 w-300px" placeholder="Quantidade máxima de arquivos">

                </div>

              </div>



        </div>
      </div>

          <div class="form-group mt-5">
            <button type="button" @click="adicionarCampo" class="btn btn-sm btn-light-primary">
              <i class="bi bi-plus" style="font-size: 16px"></i>
              Adicionar Campo
            </button>
          </div>
    </div>



  </div>
</template>
<script setup>
import $ from 'jquery'
import {alerts} from "~/components/alerts";

definePageMeta({
  layout: "painel",
  title: 'Editar Formulário - Campos',
  middleware: 'auth',
  auth: true,
})

import VueMultiselectEsm from "vue-multiselect";
import ExibirAltertaCampo from "~/components/painel/formularios/ExibirAltertaCampo.vue";

let showDivExtraCampo = ref()
const tiposCampos = reactive([ 'Texto', 'Numeral', 'Boleano', 'Arquivo' ])
const tiposArquivos = reactive([
  '.aac',
  '.abw',
  '.arc',
  '.avif',
  '.avi',
  '.azw',
  '.bin',
  '.bmp',
  '.bz',
  '.bz2',
  '.cda',
  '.csh',
  '.css',
  '.csv',
  '.doc, .docx',
  '.eot',
  '.epub',
  '.gz',
  '.gif',
  '.htm,.html',
  '.ico',
  '.ics',
  '.jar',
  '.jpeg,.jpg',
  '.js',
  '.json',
  '.jsonld',
  '.mid,.midi',
  '.mjs',
  '.mp3',
  '.mp4',
  '.mpeg',
  '.mpkg',
  '.odp',
  '.ods',
  '.odt',
  '.oga',
  '.ogv',
  '.ogx',
  '.opus',
  '.otf',
  '.png',
  '.pdf',
  '.php',
  '.ppt,.pptx',
  '.rar',
  '.rtf',
  '.sh',
  '.svg',
  '.tar',
  '.tif,.tiff',
  '.ts',
  '.ttf',
  '.txt',
  '.vsd',
  '.wav',
  '.weba',
  '.webm',
  '.webp',
  '.woff',
  '.woff2',
  '.xhtml',
  '.xls,.xlsx',
  '.xml',
  '.xul',
  '.zip',
  '.3gp',
  '.3g2',
  '.7z',
])





const campos = reactive([
  {
    'tipo': 'Texto',
    'nome': '',
    'label': '',
    'required': 'Não',
    'comprimentoMin': 0,
    'comprimentoMax': 120,
    'tipoArquivo': '',
    'qtdMinArquivo': 0,
    'qtdMaxArquivo': 10,
  },
])

const adicionarCampo = ()=>{
  campos.push({
    'tipo': 'Texto',
    'nome': '',
    'label': '',
    'required': 'Não',
    'comprimentoMin': 0,
    'comprimentoMax': 120,
    'tipoArquivo': '',
    'qtdMinArquivo': 0,
    'qtdMaxArquivo': 10,
  })

  // let length = 0;
  // campos.forEach((campo, index)=>{ length = index })
  showDivExtraCampo = ref()

}

const removerCampo = (index)=>{
  campos.splice(index, 1)
}
const checkRequiredCampo = (campo)=>{
  if(campo.required === 'Sim'){
    if(campo.comprimentoMin < 1)
      campo.comprimentoMin = 1

    if(campo.comprimentoMax < 1)
      campo.comprimentoMax = 120

    if(campo.qtdMinArquivo < 1)
      campo.qtdMinArquivo = 1
  }else{
    if(campo.comprimentoMin >= 1)
      campo.comprimentoMin = 0

    if(campo.qtdMinArquivo >= 1)
      campo.qtdMinArquivo = 0
  }
}


const filterCampo = (campo)=>{
  campo.nome = campo.nome.toLocaleLowerCase()

  campo.label = campo.nome.charAt(0).toUpperCase() + campo.nome.slice(1)
}

</script>