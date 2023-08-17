import { defineStore } from "pinia";
import sessionStorage from "@/components/session-storage"

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
        authenticated: sessionStorage.get('TOKEN_NAME', null) !== null,
    }),
    actions: {
        login(username) {
            this.user = {  name: username }
        },
        getUserAuthenticated() {

        },
        setUnauthenticated(){
            this.authenticated = false;
            this.user = null
            sessionStorage.remove('TOKEN_NAME')
        }
    },
    getters: {

    }
})