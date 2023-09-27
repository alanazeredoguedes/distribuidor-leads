import { defineStore } from "pinia";
import axios from 'axios'

export const useIntegracaoStore = defineStore('integracao', {
    state: () => ({
        formCampos: null,
    }),
    actions: {
        getForm(id){
            return axios.get(`/integracao/form/`+id.replace('#','%23'))
                .then( response => this.formCampos = response.data )
        },
    },
    getters: {

    }
})