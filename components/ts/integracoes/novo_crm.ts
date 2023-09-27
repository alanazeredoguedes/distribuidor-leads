const novo_crm = {
        id: 'novo_crm',
        name: 'NovoCrm',
        description: 'Sistema de registro de leads da internit, utilizado para emissão de relatórios e estatistias.',
        company: 'Internit',
        tags: ['API', 'LEADS', 'CRM'],
        fields: [
            { name: 'url', required: true, type: 'texto' },
            { name: 'apiNome', required: true, type: 'texto' },
            { name: 'apiEmail', required: true, type: 'texto' },
            { name: 'apiTelefone1', required: true, type: 'texto' },
            { name: 'apiDispositivo', required: true, type: 'texto' },
            { name: 'apiOrigem', required: true, type: 'texto' },
            { name: 'utm_source', required: true, type: 'texto' },
            { name: 'utm_medium', required: true, type: 'texto' },
            { name: 'utm_campaign', required: true, type: 'texto' },
        ],
};

export default novo_crm;