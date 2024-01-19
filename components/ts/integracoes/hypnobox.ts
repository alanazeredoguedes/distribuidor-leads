const hypnobox = {
        id: 'hypnobox',
        version: 1.0,
        active: true,
        name: 'Hypnobox',
        description: 'CRM Hypnobox',
        company: '',
        tags: ['API', 'LEADS', 'CRM'],
        fields: [
            { name: 'url', required: true, type: 'texto', defaultValue: 'https://empresa.hypnobox.com.br/email.receber.php' },
            { name: 'id_produto', required: true, type: 'texto', defaultValue: '' },
            { name: 'nome', required: true, type: 'texto', defaultValue: '' },
            { name: 'email', required: true, type: 'texto', defaultValue: '' },
            { name: 'tel_celular', required: true, type: 'texto', defaultValue: '' },
            { name: 'mensagem', required: false, type: 'texto', defaultValue: '' },
            { name: 'midia', required: false, type: 'texto', defaultValue: '' },
        ],
};

export default hypnobox;