const portal_corretor = {
        id: 'portal_corretor',
        name: 'Portal do Corretor',
        description: 'Sistema de distribuição de leads, baseado em corretores, imobiliárias e construtoras da internit',
        company: 'Internit',
        tags: ['API', 'LEADS', 'CRM'],
        fields: [
            { name: 'url', required: true, type: 'texto' },
            { name: 'name', required: true, type: 'texto' },
            { name: 'email', required: true, type: 'texto' },
            { name: 'phone', required: true, type: 'texto' },
            { name: 'origem', required: true, type: 'texto' },
            { name: 'group', required: true, type: 'texto' },
            { name: 'token', required: true, type: 'texto' },
            { name: 'utm_source', required: true, type: 'texto' },
            { name: 'utm_medium', required: true, type: 'texto' },
            { name: 'utm_campaign', required: true, type: 'texto' },
        ],
};

export default portal_corretor;