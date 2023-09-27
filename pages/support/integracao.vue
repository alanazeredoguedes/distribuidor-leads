<template>
<MenuSuport/>

  <div class="container">
    <div class="card">
      <div class="card-body p-lg-17">
        <div class="row mb-3">
          <div class="col-md-12 pe-lg-10">
            <form action="" class="form mb-15 fv-plugins-bootstrap5 fv-plugins-framework">
              <h1 class="fw-bold text-dark mb-9">Testador Online</h1>

              <div class="row mb-5">
                <div class="col-md-6 fv-row fv-plugins-icon-container">
                  <label class="fs-5 fw-semibold mb-2">Name</label>
                  <input type="text" class="form-control form-control-solid" placeholder="" name="name">
                  <div class="fv-plugins-message-container invalid-feedback"></div></div>
                <div class="col-md-6 fv-row fv-plugins-icon-container">
                  <label class="fs-5 fw-semibold mb-2">Email</label>
                  <input type="text" class="form-control form-control-solid" placeholder="" name="email">
                  <div class="fv-plugins-message-container invalid-feedback"></div></div>
              </div>
              <div class="d-flex flex-column mb-5 fv-row">
                <label class="fs-5 fw-semibold mb-2">Subject</label>
                <input class="form-control form-control-solid" placeholder="" name="subject">
              </div>
              <div class="d-flex flex-column mb-10 fv-row fv-plugins-icon-container">
                <label class="fs-6 fw-semibold mb-2">Message</label>
                <textarea class="form-control form-control-solid" rows="6" name="message" placeholder=""></textarea>
                <div class="fv-plugins-message-container invalid-feedback"></div></div>
              <button type="submit" class="btn btn-primary" id="kt_contact_submit_button">
                <span class="indicator-label">Send Feedback</span>
                <span class="indicator-progress">Please wait...
														<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
              </button>
              <div></div>
            </form>
          </div>

        </div>
        <div class="row g-5 mb-5 mb-lg-15">
          <div class="col-sm-6 pe-lg-10">
            <div class="text-center bg-light card-rounded d-flex flex-column justify-content-center p-10 h-100">
              <h1 class="text-dark fw-bold my-5">Let’s Speak</h1>
              <div class="text-gray-700 fw-semibold fs-2">1 (833) 597-7538</div>
            </div>
          </div>
          <div class="col-sm-6 ps-lg-10">
            <div class="text-center bg-light card-rounded d-flex flex-column justify-content-center p-10 h-100">
              <h1 class="text-dark fw-bold my-5"></h1>
              <div class="text-gray-700 fs-3 fw-semibold">Churchill-laan 16 II, 1052 CD, Amsterdam</div>
            </div>
          </div>
        </div>
        <div class="card mb-4 bg-light text-center">
          <div class="card-body py-12">

          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import MenuSuport from "~/components/painel/suport/MenuSuport.vue";

definePageMeta({
  layout: "painel",
  title: '',
  middleware: '',
  auth: false,
  showMenu: false,
})

</script>