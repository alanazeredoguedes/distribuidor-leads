import { defineStore } from "pinia";
import axios from 'axios'

export const useFormularioStore = defineStore('formulario', {
    state: () => ({
        formularios: [],
        formulario: null,
        selectStatus: [],
        formularioDados: {
            paginacao: {
                qtd: 10,
                atual: 1,
            },
            campos: [],
            activeItem: 1,
            list: [],
            edit: null,
            log: null,
        },

        formularioRelatorios: null,
        formularioIntegracoes: [],
        formularioCampos: null,
        formularioConfiguracoes: null,
        formularioNotificacoes: null,
        formularioLogs: [],
    }),
    actions: {
        resetFormularioDados(){
            this.formularioDados = {
                paginacao: {
                    qtd: 10,
                    atual: 1,
                },
                campos: [],
                activeItem: 1,
                list: [],
                edit: null,
                log: null,
            }
        },
        createFormulario(data){
            return axios.post(`/forms`, data)
        },
        deleteFormulario(id){
            return axios.delete( `/forms/`+id.replace('#','%23'),{
            }).then( response => this.formulario = null )
        },
        getFormularios(){
            return axios.get(`/forms`)
                .then( response => this.formularios = response.data )
        },
        getFormulario( id){
            return axios.get( `/forms/`+id.replace('#','%23'),{
            }).then( response => this.formulario = response.data )
        },
        getStatus(){
            return axios.get(`/forms/status`)
                .then( response => this.selectStatus = response.data )
        },
        getFormularioConfiguracoes( id){
            return axios.get( `/forms/${id}/config`.replace('#','%23'),{
            }).then( response => this.formularioConfiguracoes = response.data )
        },
        updateFormularioConfiguracoes(data){
            //console.log(data)
            return axios.put( `/forms/${data.id}/config`.replace('#','%23'), data.data)
                .then( response => this.formularioConfiguracoes = response.data )
        },
        getFormularioCampos(id){
            return axios.get( `/forms/${id}/fields`.replace('#','%23'),{
            }).then( response => this.formularioCampos = response.data )
        },
        updateFormularioCampos(data){
            //console.log(data)
            return axios.put( `/forms/${data.id}/fields`.replace('#','%23'),data.data)
                .then( response => this.formularioCampos = response.data )
        },
        getFormularioDados(id){
            return axios.get( `/forms/${id}/data`.replace('#','%23'),{
            }).then( response => this.formularioDados.list = response.data )
        },
        updateFormularioDados(data){
            return axios.put( `/forms/${data.id}/data`.replace('#','%23'),data.data)
                //.then( response => this.formularioCampos = response.data )
        },
        getFormularioIntegracoes(id){
            return axios.get( `/forms/${id}/integration`.replace('#','%23'),{
            }).then( response => this.formularioIntegracoes = response.data )
        },
        updateFormularioIntegracoes(id){
            return axios.put( `/forms/${id}/integration`.replace('#','%23'),this.formularioIntegracoes)
               // .then( response => this.formularioIntegracoes = response.data )
        },
        getFormularioLogs(id){
            return axios.get( `/forms/${id}/logs`.replace('#','%23'),{
            }).then( response => this.formularioLogs = response.data )
        },
    },
    getters: {

    }
})