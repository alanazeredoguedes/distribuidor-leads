import axios from 'axios'
import { URI, BASE_URI, API_VERSION, TOKEN_NAME } from '@/config/api'
import sessionStorage from "@/components/session-storage";


axios.defaults.baseURL = `${BASE_URI}`

axios.interceptors.request.use((config) =>{
    const token = sessionStorage.get(TOKEN_NAME)
    if(token)
        config.headers.Authorization = `Bearer ${token}`;

    return config;
},(error)=>{
    return Promise.reject(error);
})

axios.interceptors.response.use(function (response) {
    // Qualquer código de status que esteja dentro de 2xx fará com que essa função seja acionada
    // Faça algo com os dados de resposta

    return response;
}, function (error) {
    const token = sessionStorage.get(TOKEN_NAME)

    if (error.response.status === 401 && token) {
        // store.commit("SET_UNAUTHENTICATED")
        // functions.alerts.notification('error', "Erro", 'Credenciais expiradas!')
        // router.push({name: 'login'})




        //const response = await refreshToken(error);
        //return response;
    }
    if (error.response.status === 403) {
        let message = error.response.data.message
        //alert('Erro Requisição')
        //functions.alerts.notification('error', "Erro", message)
    }

    return Promise.reject(error);
});





export default defineNuxtPlugin(async ()=> {
    return {
        provide:{
            axios: axios,
        }
    }
})