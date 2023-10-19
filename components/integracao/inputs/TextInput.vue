<template>
  <div class="input-group mb-5">
    <span class="input-group-text" id="basic-addon3" style="min-width: 200px;">{{ inputOptions.name }}</span>
    <input type="text" class="form-control"/>
  </div>
</template>

<script setup>
// defineProps({
//   campo: Object,
// })
const props = defineProps({
  inputOptions: Object
})

</script>