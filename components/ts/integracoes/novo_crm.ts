const novo_crm = {
        id: 'novo_crm',
        version: 1.0,
        active: true,
        name: 'NovoCrm',
        description: 'Sistema de registro de leads da internit, utilizado para emissão de relatórios e estatistias.',
        company: 'Internit',
        tags: ['API', 'LEADS', 'CRM'],
        fields: [
            { name: 'url', required: true, type: 'texto', defaultValue: 'https://www.novocrm.atendimentoon.com.br/api/form/externo/' },
            { name: 'id', required: true, type: 'texto', defaultValue: '' },
            { name: 'apiNome', required: true, type: 'texto', defaultValue: '' },
            { name: 'apiEmail', required: true, type: 'texto', defaultValue: '' },
            { name: 'apiTelefone1', required: true, type: 'texto', defaultValue: '' },
            { name: 'apiDispositivo', required: true, type: 'texto', defaultValue: '' },
            { name: 'apiOrigem', required: true, type: 'texto', defaultValue: '' },
            { name: 'utm_source', required: true, type: 'texto', defaultValue: '' },
            { name: 'utm_medium', required: true, type: 'texto', defaultValue: '' },
            { name: 'utm_campaign', required: true, type: 'texto', defaultValue: '' },
        ],
};

export default novo_crm;