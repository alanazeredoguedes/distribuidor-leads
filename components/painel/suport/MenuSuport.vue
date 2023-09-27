<template>
  <div style="margin-top: -110px;">


    <div class="container pt-10 pt-lg-13" >
      <h3 class="fs-2x fw-bold text-white text-center mb-10 mb-lg-13">Central de Suporte</h3>
      <div class="position-relative w-100 mw-600px mx-auto" style="background: rgba(255, 255, 255, 0.05);">
      <span class="svg-icon svg-icon-2qx svg-icon-white position-absolute top-50 translate-middle ms-9">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
          <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
        </svg>
      </span>
        <input type="text" class="form-control bg-transparent fs-2 py-6 ps-17 placeholder-white opacity-50" style="border: 1px solid rgba(255, 255, 255, 0.24);" name="search" value="" placeholder="Pesquisar por" />
      </div>
    </div>

    <div class="container" style="margin-top: 130px;">
      <div class="card translate-middle-y mt-n10 mt-lg-n10">
        <div class="card-body">
          <ul class="nav mx-auto flex-shrink-0 flex-center flex-wrap border-transparent fs-6 fw-bold">

            <li class="nav-item my-3">
              <router-link :to="{name: 'support'}"  :class="getClassMenu(['support'])">
                Visão Geral
              </router-link>
            </li>

            <li class="nav-item my-3">
              <router-link :to="{name: 'support-faq'}" :class="getClassMenu(['support-faq'])">
                Faq
              </router-link>
            </li>

            <li class="nav-item my-3">
                <router-link :to="{name: 'support-tutorial'}" :class="getClassMenu(['support-tutorial'])">
                  Tutorial
                </router-link>
            </li>

            <li class="nav-item my-3">
                <router-link :to="{name: 'support-integracao'}" :class="getClassMenu(['support-integracao'])">
                  Integração
                </router-link>
            </li>

            <li class="nav-item my-3">
                <router-link :to="{name: 'support-contato'}" :class="getClassMenu(['support-contato'])">
                  Contato
                </router-link>
            </li>

          </ul>
        </div>
      </div>
    </div>



  </div>


</template>
<script setup lang="ts">

const route = useRoute()

let getClassMenu = (names)=>{
  let menuClass = "btn btn-active-light-primary fw-bolder nav-link btn-color-gray-700 px-3 px-lg-8 mx-1 text-uppercase"

  names.forEach((name)=>{
    if(name === route.name){
      menuClass = 'active ' + menuClass
    }
  })

  return menuClass;
}
</script>