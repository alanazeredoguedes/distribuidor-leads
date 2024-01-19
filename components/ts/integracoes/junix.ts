const junix = {
        id: 'junix',
        version: 1.0,
        active: false,
        name: 'Junix',
        description: 'CRM Junix',
        company: '',
        tags: ['API', 'LEADS', 'CRM'],
        fields: [
            { name: 'url', required: true, type: 'texto', defaultValue: '' },
            { name: 'usuario', required: true, type: 'texto', defaultValue: '' },
            { name: 'senha', required: true, type: 'texto', defaultValue: '' },
            { name: 'IdProduto', required: true, type: 'texto', defaultValue: '' },
            { name: 'IdExterno', required: true, type: 'texto', defaultValue: '' },

            { name: 'nome', required: true, type: 'texto', defaultValue: '' },
            { name: 'Email', required: true, type: 'texto', defaultValue: '' },
            { name: 'Telefone', required: true, type: 'texto', defaultValue: '' },
            { name: 'Mensagem', required: true, type: 'texto', defaultValue: '' },

            { name: 'CanalTipo', required: true, type: 'texto', defaultValue: '' },
            { name: 'IdMidia', required: true, type: 'texto', defaultValue: '' },
            { name: 'Midia', required: true, type: 'texto', defaultValue: '' },
            { name: 'Origem', required: true, type: 'texto', defaultValue: '' },

            { name: 'utm_source', required: true, type: 'texto', defaultValue: '' },
            { name: 'utm_campaign', required: true, type: 'texto', defaultValue: '' },
            { name: 'utm_medium', required: true, type: 'texto', defaultValue: '' },

        ],
};

export default junix;