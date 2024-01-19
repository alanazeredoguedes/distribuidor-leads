<template>
  <a href="javascript:void(0)" @click="showAlert">
    <i class="bi bi-info-circle" :style=" (size)? 'font-size: '+size+'px;': 'font-size: 20px;'"></i>
  </a>
</template>
<script setup>
import {alerts} from "~/components/alerts";

const props = defineProps([
    'title', 'message', 'size'
])


const showAlert = ()=>{

  alerts.modalAlert('info', props.title,  props.message, 5000)

}
</script>