const capys = {
        id: 'capys',
        version: 1.0,
        active: true,
        name: 'Capys',
        description: 'CRM Capys',
        company: '',
        tags: ['API', 'LEADS', 'CRM'],
        fields: [
            { name: 'url', required: true, type: 'texto', defaultValue: 'https://crmapi.capys.com.br/api/apiConta/InsereLead', description: ''  },
            { name: 'ID_ORGANIZACAO', required: true, type: 'texto', defaultValue: '', description: '' },
            { name: 'ID_ORIGEM_LEAD', required: true, type: 'texto', defaultValue: '', description: '' },
            { name: 'FL_WEB_TO_LEAD', required: true, type: 'texto', defaultValue: '', description: '' },
            { name: 'DS_NOME', required: true, type: 'texto', defaultValue: '', description: '' },
            { name: 'DS_EMAIL', required: true, type: 'texto', defaultValue: '', description: '' },
            { name: 'NR_TELEFONE', required: true, type: 'texto', defaultValue: '', description: '' },
            { name: 'DS_DESCRICAO_CASO', required: true, type: 'texto', defaultValue: '', description: '' },
        ],
};

export default capys;