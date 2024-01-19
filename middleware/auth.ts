import {useUserStore} from "~/stores/userStore";
const userStore = useUserStore();
import sessionStorage from "@/components/session-storage";
import { TOKEN_NAME } from '@/configs/api'
import {alerts} from "~/components/alerts";

export default defineNuxtRouteMiddleware((to, from)=>{

    let token = sessionStorage.get(TOKEN_NAME, false)

    if(!userStore.isAuth() && to.meta.auth){
        userStore.setUnauthenticated()

    //    alerts.modalAlert('info', 'Sessão Expirada!', 'Sua sessão foi expirada, efetue o login novamente!', 2000)

        setTimeout(()=>{
            return navigateTo({name: 'auth-login'})
        }, 2000)

    }

})