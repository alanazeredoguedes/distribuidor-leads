<template>
  <div class="form-group d-flex flex-wrap align-items-center gap-5" style="margin-top: 10px;">
    <input type="text" class="form-control mw-300 w-600px" placeholder="Url" :value="site.url">
    <button type="button" @click="save" class="btn btn-sm btn-icon btn-light-primary">
      <i class="bi bi-save"></i>
    </button>
    <button type="button" @click="remove" class="btn btn-sm btn-icon btn-light-danger">
      <i class="bi bi-x-lg"></i>
    </button>
  </div>
</template>
<script setup>


const save = ()=> {

}

const remove = ()=> {

}

</script>