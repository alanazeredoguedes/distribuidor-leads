import {useUserStore} from "~/stores/userStore";
const userStore = useUserStore();

export default defineNuxtRouteMiddleware((to, from)=>{


    if(!userStore.authenticated && to.meta.auth ){
        userStore.setUnauthenticated()
        return navigateTo({name: 'auth-login'})
    }

})