<template>
  <div class="d-flex align-items-stretch" id="kt_header_nav">
    <div class="header-menu align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_header_menu_mobile_toggle" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}">
      <div class="menu menu-rounded menu-column menu-lg-row menu-active-bg menu-title-gray-700 menu-state-primary menu-arrow-gray-400 fw-semibold my-5 my-lg-0 align-items-stretch px-2 px-lg-0" id="#kt_header_menu" data-kt-menu="true">

        <nuxt-link :class="getClassMenu(['painel'])" :to="{name: 'painel'}">
            <span class="menu-link py-3">
                <span class="menu-title">Home</span>
            </span>
        </nuxt-link>

        <nuxt-link :class="getClassMenu(['painel-empresas', 'painel-empresas-id'])" :to="{name: 'painel-empresas'}">
            <span class="menu-link py-3">
                <span class="menu-title">Empresas</span>
            </span>
        </nuxt-link>

        <nuxt-link :class="getClassMenu([
                    'painel-formularios',
                    'painel-formularios-id-visao_geral',
                    'painel-formularios-id-dados',
                    'painel-formularios-id-relatorios',
                    'painel-formularios-id-integracoes',
                    'painel-formularios-id-campos',
                    'painel-formularios-id-configuracoes',
                    'painel-formularios-id-notificacoes',
                    'painel-formularios-id-logs',
               ])" :to="{name: 'painel-formularios'}">
          <span class="menu-link py-3">
            <span class="menu-title">Formulários</span>
          </span>
        </nuxt-link>

        <nuxt-link :class="getClassMenu([
              'support',
              'support-faq',
              'support-tutorial',
              'support-contato',
            ])" :to="{name: 'support'}">
          <span class="menu-link py-3">
            <span class="menu-title">Suporte</span>
          </span>
        </nuxt-link>

      </div>
    </div>
  </div>

</template>

<script setup>

const route = useRoute()

let getClassMenu = (names)=>{
  let menuClass = "menu-item menu-lg-down-accordion menu-here-bg me-0 me-lg-2"

  names.forEach((name)=>{
    if(name === route.name){
      menuClass = 'here ' + menuClass
    }
  })

  return menuClass;
}


</script>