<template>

  <span class="input-group-text" style="min-width: 200px; ;">{{ input.name }}</span>
  <div class="mb-3">
    <textarea class="form-control" v-model="input.value" :id="id" style="height: 500px !important;">
    </textarea>
  </div>


</template>
<style>
/*@import "";*/

</style>

<script setup>

import {useFormularioStore} from "~/stores/formularioStore";
const formularioStore = useFormularioStore();
import Tagify from "@yaireo/tagify/dist/tagify.esm";


const props = defineProps({
  optionsInput: Object,
  input: Object,
})

const id = props.input.name + (Math.floor(Math.random() * 10000) + 10000).toString().substring(0);

onMounted(()=>{

  let listCampos = [];
  formularioStore.formularioCampos.forEach((campo)=>{
    listCampos.push(campo.nome/*{
      id: campo.nome,
      value: campo.nome,
      title: campo.label
    }*/)
  })

  let input = document.querySelector('#'+id);

  let tagify = new Tagify(input, {
    // mixTagsInterpolator: ["{{", "}}"],
    mode: 'mix',
    //pattern: /@|#/,
    pattern: /@/,
    whitelist: listCampos.map(function(item){ return typeof item == 'string' ? {value:item} : item}),
    enforceWhitelist: true,
    dropdown : {
      enabled: 0,
      //position: "text",
      highlightFirst: false,
      classname: "tagify__inline__suggestions"
    },
    callbacks: {
      //add: console.log,
      //remove: console.log
    }
  })

  tagify.on('input', function(e){
    let prefix = e.detail.prefix;
    if( prefix ){
      if( prefix === '@' )//|| prefix === '#'
        tagify.whitelist = listCampos;
      //if( e.detail.value.length > 1 )
      //tagify.dropdown.show.call(tagify, e.detail.title);
    }
  })

  tagify.on('change', (e)=>{
    props.input.value = e.detail.value
    //console.log(e.detail.value)
  })

  //tagify.on('add', function(e) { console.log(e) })

})

/*const tagifyArrayToStr = ( value ) => {
  return value;
}*/

</script>

