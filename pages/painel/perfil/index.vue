<template>
  <div class="content flex-row-fluid" id="kt_content">

    <div class="card mb-5 mb-xl-10">
      <div class="card-body pt-9 pb-0">
        <div class="d-flex flex-wrap flex-sm-nowrap mb-3">
          <div class="me-7 mb-4">
            <div class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
              <img src="@/assets/media/avatars/blank.png" alt="image">
              <div class="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-body h-20px w-20px"></div>
            </div>
          </div>
          <div class="flex-grow-1">
            <div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
              <div class="d-flex flex-column">

                <div class="d-flex align-items-center mb-2">
                  <a href="#" class="text-gray-900 text-hover-primary fs-2 fw-bold me-1">{{ userStore.user ? userStore.user.name : '' }}</a>
                  <a href="#">
                    <span class="svg-icon svg-icon-1 svg-icon-primary">
																<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
																	<path d="M10.0813 3.7242C10.8849 2.16438 13.1151 2.16438 13.9187 3.7242V3.7242C14.4016 4.66147 15.4909 5.1127 16.4951 4.79139V4.79139C18.1663 4.25668 19.7433 5.83365 19.2086 7.50485V7.50485C18.8873 8.50905 19.3385 9.59842 20.2758 10.0813V10.0813C21.8356 10.8849 21.8356 13.1151 20.2758 13.9187V13.9187C19.3385 14.4016 18.8873 15.491 19.2086 16.4951V16.4951C19.7433 18.1663 18.1663 19.7433 16.4951 19.2086V19.2086C15.491 18.8873 14.4016 19.3385 13.9187 20.2758V20.2758C13.1151 21.8356 10.8849 21.8356 10.0813 20.2758V20.2758C9.59842 19.3385 8.50905 18.8873 7.50485 19.2086V19.2086C5.83365 19.7433 4.25668 18.1663 4.79139 16.4951V16.4951C5.1127 15.491 4.66147 14.4016 3.7242 13.9187V13.9187C2.16438 13.1151 2.16438 10.8849 3.7242 10.0813V10.0813C4.66147 9.59842 5.1127 8.50905 4.79139 7.50485V7.50485C4.25668 5.83365 5.83365 4.25668 7.50485 4.79139V4.79139C8.50905 5.1127 9.59842 4.66147 10.0813 3.7242V3.7242Z" fill="currentColor"></path>
																	<path d="M14.8563 9.1903C15.0606 8.94984 15.3771 8.9385 15.6175 9.14289C15.858 9.34728 15.8229 9.66433 15.6185 9.9048L11.863 14.6558C11.6554 14.9001 11.2876 14.9258 11.048 14.7128L8.47656 12.4271C8.24068 12.2174 8.21944 11.8563 8.42911 11.6204C8.63877 11.3845 8.99996 11.3633 9.23583 11.5729L11.3706 13.4705L14.8563 9.1903Z" fill="white"></path>
																</svg>
															</span>
                  </a>
                  <a href="#" class="btn btn-sm btn-light-success fw-bold ms-2 fs-8 py-1 px-3">Pro</a>
                </div>

                <div class="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">

                  <a href="#" class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                    <span class="svg-icon svg-icon-4 me-1">
															<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path opacity="0.3" d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z" fill="currentColor"></path>
																<path d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z" fill="currentColor"></path>
																<rect x="7" y="6" width="4" height="4" rx="2" fill="currentColor"></rect>
															</svg>
														</span>
                    Gestor
                  </a>

                  <a href="#" class="d-flex align-items-center text-gray-400 text-hover-primary mb-2">
                    <span class="svg-icon svg-icon-4 me-1">
															<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z" fill="currentColor"></path>
																<path d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z" fill="currentColor"></path>
															</svg>
														</span>
                    {{ userStore.user ? userStore.user.email : '' }}
                  </a>
                </div>

              </div>

              <div class="d-flex my-4">
                <a href="javascript:void(0)" @click="deslogar" class="btn btn-sm btn-light me-2">
                  <span class="indicator-label">
                    Deslogar
                  </span>
                </a>
                <!--                <a href="#" class="btn btn-sm btn-primary me-2" data-bs-toggle="modal" data-bs-target="#kt_modal_offer_a_deal">Hire Me</a>-->
              </div>

            </div>


            <div class="d-flex flex-wrap flex-stack">
              <div class="d-flex flex-column flex-grow-1 pe-8">
                <div class="d-flex flex-wrap">

                  <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                    <div class="d-flex align-items-center">
                      <span class="svg-icon svg-icon-3 svg-icon-success me-2">
                        	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"></rect>
                            <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"></path>
                          </svg>
                      </span>
                      <div class="fs-2 fw-bold counted" data-kt-countup="true" data-kt-countup-value="4500" data-kt-countup-prefix="$" data-kt-initialized="1">400</div>
                    </div>
                    <div class="fw-semibold fs-6 text-gray-400">Empresas</div>
                  </div>

                  <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                    <div class="d-flex align-items-center">
                      <span class="svg-icon svg-icon-3 svg-icon-success me-2">
                        	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"></rect>
                            <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"></path>
                          </svg>
                      </span>
                      <div class="fs-2 fw-bold counted" data-kt-countup="true" data-kt-countup-value="4500" data-kt-countup-prefix="$" data-kt-initialized="1">34</div>
                    </div>
                    <div class="fw-semibold fs-6 text-gray-400">Formulários</div>
                  </div>

                </div>
              </div>


              <div class="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
                <div class="d-flex justify-content-between w-100 mt-auto mb-2">
                  <span class="fw-semibold fs-6 text-gray-400">Perfil Completo</span>
                  <span class="fw-bold fs-6">100%</span>
                </div>
                <div class="h-5px mx-3 w-100 bg-light mb-3">
                  <div class="bg-success rounded h-5px" role="progressbar" style="width: 100%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>


            </div>
          </div>
        </div>


        <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">

          <li class="nav-item mt-2">
            <a class="nav-link text-active-primary ms-0 me-10 py-5 active" href="javascript:void(0)">Visão Geral</a>
          </li>
          <li class="nav-item mt-2">
            <a class="nav-link text-active-primary ms-0 me-10 py-5" @click="notImplement" href="javascript:void(0)">Segurança</a>
          </li>
          <li class="nav-item mt-2">
            <a class="nav-link text-active-primary ms-0 me-10 py-5" @click="notImplement" href="javascript:void(0)">API Keys</a>
          </li>
          <li class="nav-item mt-2">
            <a class="nav-link text-active-primary ms-0 me-10 py-5" @click="notImplement" href="javascript:void(0)">Logs</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="card mb-5 mb-xl-10" v-if="userStore.user">
      <div class="card-header border-0 cursor-pointer" role="button" >
        <div class="card-title m-0">
          <h3 class="fw-bold m-0">Detalhes do Perfil</h3>
        </div>
      </div>

      <div id="kt_account_settings_profile_details" class="collapse show">
        <form id="kt_account_profile_details_form" class="form fv-plugins-bootstrap5 fv-plugins-framework" novalidate="novalidate">
          <div class="card-body border-top p-9" >

            <div class="row mb-6">
              <label class="col-lg-4 col-form-label required fw-semibold fs-6">Nome Completo</label>
              <div class="col-lg-8">
                <div class="row">
                  <div class="col-lg-12 fv-row">
                    <input type="text" name="Nome" v-model="userStore.user.name" class="form-control form-control-lg form-control-solid" placeholder="Nome Completo">
                  </div>
                </div>
              </div>
            </div>

            <div class="row mb-6">
              <label class="col-lg-4 col-form-label required fw-semibold fs-6">Email</label>
              <div class="col-lg-8 fv-row">
                <input type="text" name="Email" v-model="userStore.user.email" class="form-control form-control-lg form-control-solid" placeholder="Email">
              </div>
            </div>

          </div>
          <div class="card-footer d-flex justify-content-end py-6 px-9">
            <button type="button" @click="notImplement" class="btn btn-primary">Salvar</button>
          </div>
          <input type="hidden"><div></div></form>
      </div>
    </div>

    <div style="display: none;" class="card mb-5 mb-xl-10">
      <div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_email_preferences" aria-expanded="true" aria-controls="kt_account_email_preferences">
        <div class="card-title m-0">
          <h3 class="fw-bold m-0">Email Preferências</h3>
        </div>
      </div>
      <div id="kt_account_settings_email_preferences" class="collapse show">
        <form class="form">
          <div class="card-body border-top px-9 py-9">

            <label class="form-check form-check-custom form-check-solid align-items-start">
              <input class="form-check-input me-3" type="checkbox" name="email-preferences[]" checked="checked" value="1">
              <span class="form-check-label d-flex flex-column align-items-start">
                <span class="fw-bold fs-5 mb-0">Payouts</span>
                <span class="text-muted fs-6">Receive a notification for every initiated payout.</span>
              </span>
            </label>

            <div class="separator separator-dashed my-6"></div>

            <label class="form-check form-check-custom form-check-solid align-items-start">
              <input class="form-check-input me-3" type="checkbox" name="email-preferences[]" value="1">
              <span class="form-check-label d-flex flex-column align-items-start">
													<span class="fw-bold fs-5 mb-0">Fee Collection</span>
													<span class="text-muted fs-6">Receive a notification each time you collect a fee from sales</span>
												</span>
            </label>
            <div class="separator separator-dashed my-6"></div>
            <label class="form-check form-check-custom form-check-solid align-items-start">
              <input class="form-check-input me-3" type="checkbox" name="email-preferences[]" checked="checked" value="1">
              <span class="form-check-label d-flex flex-column align-items-start">
													<span class="fw-bold fs-5 mb-0">Customer Payment Dispute</span>
													<span class="text-muted fs-6">Receive a notification if a payment is disputed by a customer and for dispute purposes.</span>
												</span>
            </label>
            <div class="separator separator-dashed my-6"></div>
            <label class="form-check form-check-custom form-check-solid align-items-start">
              <input class="form-check-input me-3" type="checkbox" name="email-preferences[]" value="1">
              <span class="form-check-label d-flex flex-column align-items-start">
													<span class="fw-bold fs-5 mb-0">Refund Alerts</span>
													<span class="text-muted fs-6">Receive a notification if a payment is stated as risk by the Finance Department.</span>
												</span>
            </label>
            <div class="separator separator-dashed my-6"></div>
            <label class="form-check form-check-custom form-check-solid align-items-start">
              <input class="form-check-input me-3" type="checkbox" name="email-preferences[]" checked="checked" value="1">
              <span class="form-check-label d-flex flex-column align-items-start">
													<span class="fw-bold fs-5 mb-0">Invoice Payments</span>
													<span class="text-muted fs-6">Receive a notification if a customer sends an incorrect amount to pay their invoice.</span>
												</span>
            </label>
            <div class="separator separator-dashed my-6"></div>
            <label class="form-check form-check-custom form-check-solid align-items-start">
              <input class="form-check-input me-3" type="checkbox" name="email-preferences[]" value="1">
              <span class="form-check-label d-flex flex-column align-items-start">
													<span class="fw-bold fs-5 mb-0">Webhook API Endpoints</span>
													<span class="text-muted fs-6">Receive notifications for consistently failing webhook API endpoints.</span>
												</span>
            </label>
          </div>
          <div class="card-footer d-flex justify-content-end py-6 px-9">
            <button type="button" @click="notImplement" class="btn btn-primary px-6">Salvar</button>
          </div>
        </form>
      </div>
    </div >

    <div style="display: none;" class="card mb-5 mb-xl-10">
      <div class="card-header border-0 cursor-pointer" >
        <div class="card-title m-0">
          <h3 class="fw-bold m-0">Notificações</h3>
        </div>
      </div>
      <div id="kt_account_settings_notifications" class="collapse show">
        <form class="form">
          <div class="card-body border-top px-9 pt-3 pb-4">
            <div class="table-responsive">
              <table class="table table-row-dashed border-gray-300 align-middle gy-6">
                <tbody class="fs-6 fw-semibold">

                <tr>
                  <td>Atualizações de Empresas</td>
                  <td>
                    <div class="form-check form-check-solid">
                      <input class="form-check-input" type="checkbox" value="1" id="billing1">
                      <label class="form-check-label ps-2" for="billing1">Email</label>
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-solid">
                      <input class="form-check-input" type="checkbox" value="" id="billing2" >
                      <label class="form-check-label ps-2" for="billing2">Telefone</label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Novos Formulários</td>
                  <td>
                    <div class="form-check form-check-solid">
                      <input class="form-check-input" type="checkbox" value="" id="team1" >
                      <label class="form-check-label ps-2" for="team1">Email</label>
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-solid">
                      <input class="form-check-input" type="checkbox" value="" id="team2" >
                      <label class="form-check-label ps-2" for="team2">Telefone</label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Novos Leads</td>
                  <td>
                    <div class="form-check form-check-solid">
                      <input class="form-check-input" type="checkbox" value="" id="project1" >
                      <label class="form-check-label ps-2" for="project1">Email</label>
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-solid">
                      <input class="form-check-input" type="checkbox" value="" id="project2" >
                      <label class="form-check-label ps-2" for="project2">Telefone</label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="border-bottom-0">Novidades</td>
                  <td class="border-bottom-0">
                    <div class="form-check form-check-solid">
                      <input class="form-check-input" type="checkbox" value="" id="newsletter1">
                      <label class="form-check-label ps-2" for="newsletter1">Email</label>
                    </div>
                  </td>
                  <td class="border-bottom-0">
                    <div class="form-check form-check-solid">
                      <input class="form-check-input" type="checkbox" value="" id="newsletter2">
                      <label class="form-check-label ps-2" for="newsletter2">Telefone</label>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card-footer d-flex justify-content-end py-6 px-9">
            <button type="button" @click="notImplement()" class="btn btn-primary px-6">Save Changes</button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>
<script setup>
definePageMeta({
  layout: "painel",
  title: 'Perfil',
  middleware: 'auth',
  auth: true,
})

import { useUserStore } from "~/stores/userStore";
const userStore = useUserStore();
import {alerts} from "~/components/alerts";

const userEdit = reactive({
  name: '',
  email: '',
})

onMounted(()=>{
  userStore.getUserAuthenticated()
})

const deslogar = ()=>{

  alerts.notification('info', "Deslogando!", 'Saindo do sistema!')
  setTimeout(()=>{
    userStore.setUnauthenticated()
    navigateTo({name: 'auth-login'})
  }, 1500)

}

const notImplement = ()=> {
  alerts.notification('info', "Em Construção!", 'A funcionalidade estará disponível em breve!')
}

</script>