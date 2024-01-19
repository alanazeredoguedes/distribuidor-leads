<template>
  <div class="modal fade" id="modalAddIntegracao" tabindex="-1" style="display: none;" aria-hidden="true">
    <div class="modal-dialog mw-700px">
      <div class="modal-content">

        <div class="modal-header pb-0 border-0 d-flex justify-content-end">
          <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
            <span class="svg-icon svg-icon-1">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"></rect>
									<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"></rect>
								</svg>
							</span>
          </div>
        </div>

        <div class="modal-body scroll-y mx-5 mx-xl-10 pt-0 pb-15">

          <div class="text-center mb-13">
            <h1 class="d-flex justify-content-center align-items-center mb-3">Integrações
              <span class="badge badge-circle badge-secondary ms-3">13</span>
            </h1>
            <div class="text-muted fw-semibold fs-5">Caso precise de ajuda acesse a
              <router-link :to="{name:'support'}" target= '_blank' class="link-primary fw-bold">Central de Suporte</router-link>.</div>
          </div>

          <div class="mh-475px scroll-y me-n7 pe-7">


            <div v-for="integration in integrations">
              <div class="border border-hover-primary p-7 rounded mb-7" :style="!integration.active ? 'background-color: rgba(203,200,200,0.18);': ''">

                <div class="d-flex flex-stack pb-3" >
                  <div class="d-flex">
  <!--                  <div class="symbol symbol-circle symbol-45px">
                      <img src="" alt="">
                    </div>-->
                    <div class="ms-5">
                      <div class="d-flex align-items-center">
                        <a href="javascript:void(0)" class="text-dark fw-bold text-hover-primary fs-5 me-4">{{ integration.name }}</a>

                        <span class="badge badge-light-primary d-flex align-items-center fs-8 fw-semibold">
                          <span class="svg-icon svg-icon-8 svg-icon-primary me-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z" fill="currentColor"></path>
                            </svg>
                          </span>
                          Integração
                        </span>
                      </div>
                      <span class="text-muted fw-semibold mb-3">{{ integration.company }}</span>
                    </div>
                  </div>
                  <div class="d-flex">
                    <div class="text-end pb-3">
                      <span class="text-dark fw-bold fs-5">R$0,00</span>
                      <span class="text-muted fs-7">/lead</span>
                    </div>
                  </div>
                </div>
                <div class="p-0">
                  <div class="d-flex flex-column">
                    <p class="text-gray-700 fw-semibold fs-6 mb-4">{{ integration.description }}</p>
                    <div class="d-flex text-gray-700 fw-semibold fs-7" >
                      <span class="border border-2 rounded me-3 p-1 px-2" v-for="tag in integration.tags">{{ tag }}</span>
                    </div>
                  </div>
                  <div class="d-flex flex-column">
                    <div class="separator separator-dashed border-muted my-5"></div>
                    <div class="d-flex flex-stack">
                      <div class="d-flex flex-column mw-200px">
                        <div class="d-flex align-items-center mb-2">
                          <span class="text-gray-700 fs-6 fw-semibold me-2">
                            <span v-if="integration.active">100%</span>
                            <span v-if="!integration.active">10%</span>
                          </span>
                          <span class="text-muted fs-8">Pronto para utilização</span>
                        </div>
                        <div class="progress h-6px w-200px">
                          <div class="progress-bar bg-success" role="progressbar" :style="integration.active ? 'width: 100%;': 'width: 10%;'"></div>
                        </div>
                      </div>

                      <a href="javascript:void(0)" @click="addIntegration(integration.id)" class="btn btn-sm btn-primary" v-if="integration.active">Adicionar</a>
                      <a href="javascript:void(0)" class="btn btn-sm btn-gray" v-if="!integration.active">Desativada</a>

                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>


      </div>
    </div>
  </div>




</template>

<script setup lang="js">
import integrations from "~/components/ts/integracoes";
import {useFormularioStore} from "~/stores/formularioStore";
import $ from "jquery";
const formularioStore = useFormularioStore();

const fecharModal = ()=>{
  $('#modalAddIntegracao').modal('hide');
}

const addIntegration = (id) => {

  const integrationConfig = integrations[id]

  let integrationFields = [];
  integrationConfig.fields.forEach((field)=>{
    integrationFields.push(
        {name: field.name,
          value: (field.defaultValue) ? field.defaultValue : '',
        })
  })

  let dataIntegration = {
      id: id,
      active: true,
      async: false,
      fields: integrationFields
  }

 formularioStore.formularioIntegracoes.push(dataIntegration);
  fecharModal()
}

</script>