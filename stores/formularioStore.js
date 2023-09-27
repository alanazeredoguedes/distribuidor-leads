import { defineStore } from "pinia";
import axios from 'axios'

export const useFormularioStore = defineStore('formulario', {
    state: () => ({
        formularios: [],
        formulario: null,
        selectStatus: [],
        formularioDados: [],
        formularioRelatorios: null,
        formularioIntegracoes: [],
        formularioCampos: null,
        formularioConfiguracoes: null,
        formularioNotificacoes: null,
        formularioLogs: null,
    }),
    actions: {
        createFormulario(data){
            return axios.post(`/formularios`, data)
        },
        deleteFormulario(id){
            return axios.delete( `/formularios/`+id.replace('#','%23'),{
            }).then( response => this.formulario = null )
        },
        getFormularios(){
            return axios.get(`/formularios`)
                .then( response => this.formularios = response.data )
        },
        getFormulario( id){
            return axios.get( `/formularios/`+id.replace('#','%23'),{
            }).then( response => this.formulario = response.data )
        },
        getStatus(){
            return axios.get(`/formularios/status`)
                .then( response => this.selectStatus = response.data )
        },
        getFormularioConfiguracoes( id){
            return axios.get( `/formularios/${id}/configuracoes`.replace('#','%23'),{
            }).then( response => this.formularioConfiguracoes = response.data )
        },
        updateFormularioConfiguracoes(data){
            //console.log(data)
            return axios.put( `/formularios/${data.id}/configuracoes`.replace('#','%23'), data.data)
                .then( response => this.formularioConfiguracoes = response.data )
        },
        getFormularioCampos(id){
            return axios.get( `/formularios/${id}/campos`.replace('#','%23'),{
            }).then( response => this.formularioCampos = response.data )
        },
        updateFormularioCampos(data){
            //console.log(data)
            return axios.put( `/formularios/${data.id}/campos`.replace('#','%23'),data.data)
                .then( response => this.formularioCampos = response.data )
        },
        getFormularioDados(id){
            return axios.get( `/formularios/${id}/dados`.replace('#','%23'),{
            }).then( response => this.formularioDados = response.data )
        },
        updateFormularioDados(data){
            return axios.put( `/formularios/${data.id}/campos`.replace('#','%23'),data.data)
                //.then( response => this.formularioCampos = response.data )
        },
    },
    getters: {

    }
})