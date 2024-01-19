const itaplan = {
        id: 'itaplan',
        version: 1.0,
        active: false,
        name: 'Itaplan',
        description: 'CRM Itaplan',
        company: '',
        tags: ['API', 'LEADS', 'CRM'],
        fields: [
            { name: 'username', required: true, type: 'texto', defaultValue: '', description: '' },
            { name: 'password', required: true, type: 'texto', defaultValue: '', description: '' },

            { name: 'Forma', required: true, type: 'texto', defaultValue: '', description: 'Forma de Contato' },
            { name: 'Referencia', required: true, type: 'texto', defaultValue: '', description: '' },
            { name: 'tipo', required: true, type: 'texto', defaultValue: '', description: 'Identificação do Lead - Normalmente o nome do Formulário' },

            { name: 'Nome', required: true, type: 'texto', defaultValue: '', description: '' },
            { name: 'Email', required: true, type: 'texto', defaultValue: '', description: '' },
            { name: 'Telefone', required: true, type: 'texto', defaultValue: '', description: '' },

            { name: 'utm_source', required: true, type: 'texto', defaultValue: '', description: '' },
            { name: 'utm_medium', required: true, type: 'texto', defaultValue: '', description: '' },
            { name: 'utm_campaign', required: true, type: 'texto', defaultValue: '', description: '' },

        ],
};

export default itaplan;