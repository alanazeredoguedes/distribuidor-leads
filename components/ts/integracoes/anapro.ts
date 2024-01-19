const anapro = {
        id: 'anapro',
        version: 1.0,
        active: true,
        name: 'Anapro',
        description: 'CRM Anapro',
        company: '',
        tags: ['API', 'LEADS', 'CRM'],
        fields: [
            { name: 'url', required: true, type: 'texto', defaultValue: 'https://crm.anapro.com.br/webcrm/webapi/integracao/v2/CadastrarProspect' },

            { name: 'Key', required: true, type: 'texto', defaultValue: '' },
            { name: 'CampanhaKey', required: true, type: 'texto', defaultValue: '' },
            { name: 'ProdutoKey', required: true, type: 'texto', defaultValue: '' },
            { name: 'CanalKey', required: true, type: 'texto', defaultValue: '' },
            { name: 'KeyIntegradora', required: true, type: 'texto', defaultValue: '' },
            { name: 'KeyAgencia', required: true, type: 'texto', defaultValue: '' },

            { name: 'PessoaNome', required: true, type: 'texto', defaultValue: '' },
            { name: 'PessoaEmail', required: true, type: 'texto', defaultValue: '' },
            { name: 'DDD', required: true, type: 'texto', defaultValue: '' },
            { name: 'Numero', required: true, type: 'texto', defaultValue: '' },
            { name: 'Observacoes', required: true, type: 'texto', defaultValue: '' },

            { name: 'Midia', required: true, type: 'texto', defaultValue: '' },
            { name: 'Peca', required: true, type: 'texto', defaultValue: '' },
            { name: 'CampanhaPeca', required: true, type: 'texto', defaultValue: '' },
        ],
};

export default anapro;