import { defineStore } from "pinia";
import axios from 'axios'

export const useEmpresaStore = defineStore('empresa', {
    state: () => ({
        empresa: null,
        empresas: [],
        sites: [],
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
        },
        createSite(data){
            return axios.post(`/empresa/site`, data)
        },
        getSites(id){
            return axios.get(`/empresa/site/${id}`)
                .then( response => this.sites = response.data )
        },
        updateSite(id, data){
            return axios.put(`/empresa/site/${id}`, data)
        },
        deleteSite(id){
            return axios.delete(`/empresa/site/${id}`)
        },

    },
    getters: {

    }
})