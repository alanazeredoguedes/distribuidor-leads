import { defineStore } from "pinia";
import axios from 'axios'

export const useEmpresaStore = defineStore('empresa', {
    state: () => ({
        empresa: null,
        empresas: [],
    }),
    actions: {
        getEmpresas(){
            return axios.get(`/empresa`)
                .then( response => this.empresas = response.data )
        },
        getEmpresa(id){
            return axios.get(`/empresa/${id}`)
                .then( response => this.empresa = response.data )
        },
        updateEmpresa(data){
            return axios.post(`/empresa`, data, {
                headers: { "Content-Type": "multipart/form-data", }
            })
        }
    },
    getters: {

    }
})