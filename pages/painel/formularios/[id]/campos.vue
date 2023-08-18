<template>
  <div class="card">

    <div class="card-header">
      <div class="card-title">
        <h2>Campos do Formulário</h2>
      </div>
    </div>

    <div class="card-body pt-9" data-select2-id="select2-data-151-wq47">
      <div class="" data-kt-ecommerce-catalog-add-product="auto-options">
        <label class="form-label">Add Product Variations</label>
        <div data-select2-id="select2-data-kt_ecommerce_add_product_options">
          <div class="form-group" data-select2-id="select2-data-150-81f5">
            <div data-repeater-list="kt_ecommerce_add_product_options" class="d-flex flex-column gap-3" data-select2-id="select2-data-149-r4xx">
              <div data-repeater-item="" class="form-group d-flex flex-wrap align-items-center gap-5" data-select2-id="select2-data-148-o9ui">
                <div class="w-100 w-md-200px" data-select2-id="select2-data-147-3apn">

                </div>
                <input type="text" class="form-control mw-100 w-200px" name="" placeholder="Campo">
                <button type="button" data-repeater-delete="" class="btn btn-sm btn-icon btn-secondary">
                  <i class="bi bi-gear"></i>
                </button>
                <button type="button" data-repeater-delete="" class="btn btn-sm btn-icon btn-light-danger">
                  <i class="bi bi-x-lg"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="form-group mt-5">
            <button type="button" data-repeater-create="" class="btn btn-sm btn-light-primary">
              <i class="bi bi-plus" style="font-size: 16px"></i>
              Adicionar Campo
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup>
definePageMeta({
  layout: "painel",
  title: 'Editar Formulário - Campos',
  middleware: 'auth',
  auth: true,
})
</script>