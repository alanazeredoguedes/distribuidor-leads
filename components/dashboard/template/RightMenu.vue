<template>
  <div class="topbar d-flex align-items-stretch flex-shrink-0">

    <div class="d-flex align-items-center ms-1 ms-lg-3">
      <div class="btn btn-icon btn-active-light-primary position-relative btn btn-icon btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40px" >
        <span class="svg-icon svg-icon-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor" />
            <rect x="6" y="12" width="7" height="2" rx="1" fill="currentColor" />
            <rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor" />
          </svg>
        </span>
        <span class="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"></span>
      </div>
    </div>




    <nuxt-link class="d-flex align-items-center me-n3 ms-1 ms-lg-3" :to="{name: 'painel-perfil'}">
      <div class="btn btn-icon btn-active-light-primary btn btn-icon btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40px">
        <img class="h-30px w-30px rounded" src="@/assets/media/avatars/blank.png" alt="" />
      </div>
    </nuxt-link>
  </div>

</template>
<script setup>
</script>