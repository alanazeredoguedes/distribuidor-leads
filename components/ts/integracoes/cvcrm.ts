const cvcrm = {
        id: 'cvcrm',
        version: 1.0,
        active: true,
        name: 'CVCRM',
        description: 'CRM CVCRM',
        company: '',
        tags: ['API', 'LEADS', 'CRM'],
        fields: [
            { name: 'url', required: true, type: 'texto', defaultValue: 'https://empresa.cvcrm.com.br/api/cvio/lead' },
            { name: 'token', required: true, type: 'texto', defaultValue: '' },
            { name: 'idempreendimento', required: true, type: 'texto', defaultValue: '' },

            { name: 'nome', required: true, type: 'texto', defaultValue: '' },
            { name: 'email', required: true, type: 'texto', defaultValue: '' },
            { name: 'mensagem', required: true, type: 'texto', defaultValue: '' },
            { name: 'telefone', required: true, type: 'texto', defaultValue: '' },

            { name: 'origem', required: false, type: 'texto', defaultValue: 'SI' },
            { name: 'utm_source', required: true, type: 'texto', defaultValue: '' },
            { name: 'utm_medium', required: true, type: 'texto', defaultValue: '' },
            { name: 'utm_campaign', required: true, type: 'texto', defaultValue: '' },
        ],
};

export default cvcrm;