import { defineStore } from "pinia";
import { TOKEN_NAME } from "@/configs/api";
import sessionStorage from "@/components/session-storage"
import axios from 'axios'

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
        authenticated: sessionStorage.get(TOKEN_NAME, null) !== null,
    }),
    actions: {
        login(email, password) {
            //console.log(email, password)
            return axios.post("/usuario/login", { email, password })
                .then( (response) => {
                    sessionStorage.set(TOKEN_NAME, response.data.access_token)
                    this.authenticated = true
                    this.getUserAuthenticated()
                })
        },
        getUserAuthenticated() {
            axios.get("/usuario/usuario_autenticado")
                .then( response => this.user = response.data )
                .catch( error => this.setUnauthenticated() )
        },
        setUnauthenticated(){
            this.authenticated = false;
            this.user = null
            sessionStorage.remove(TOKEN_NAME)
        }
    },
    getters: {

    }
})