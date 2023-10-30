const portal_corretor = {
        id: 'portal_corretor',
        name: 'Portal do Corretor',
        description: 'Sistema de distribuição de leads, baseado em corretores, imobiliárias e construtoras da internit',
        company: 'Internit',
        tags: ['API', 'LEADS', 'CRM'],
        fields: [
            { name: 'url', required: true, type: 'texto', defaultValue: 'https://empresa.descomplicavendas.com.br/api/leads/send' },
            { name: 'token', required: true, type: 'texto', defaultValue: '' },
            { name: 'group', required: true, type: 'texto', defaultValue: '' },
            { name: 'name', required: true, type: 'texto', defaultValue: '' },
            { name: 'email', required: true, type: 'texto', defaultValue: '' },
            { name: 'phone', required: true, type: 'texto', defaultValue: '' },
            { name: 'origem', required: true, type: 'texto', defaultValue: '' },
            { name: 'utm_source', required: true, type: 'texto', defaultValue: '' },
            { name: 'utm_medium', required: true, type: 'texto', defaultValue: '' },
            { name: 'utm_campaign', required: true, type: 'texto', defaultValue: '' },
        ],
};

export default portal_corretor;