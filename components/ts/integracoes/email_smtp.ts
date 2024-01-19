const anapro = {
        id: 'email_smtp',
        version: 1.0,
        active: true,
        name: 'Email com SMTP',
        description: 'Envio de email atravez de SMTP',
        company: '',
        tags: ['API', 'LEADS', 'CRM'],
        fields: [
            { name: 'Host', required: true, type: 'texto', defaultValue: '', description: '' },
            { name: 'Port', required: true, type: 'texto', defaultValue: '', description: '' },
            { name: 'SMTPSecure', options: ['TLS', 'SSL', 'DESATIVADO'], required: true, type: 'select', defaultValue: '', description: '' },

            { name: 'Username', required: true, type: 'texto', defaultValue: '', description: '' },
            { name: 'Password', required: true, type: 'texto', defaultValue: '', description: '' },
            { name: 'FromName', required: true, type: 'texto', defaultValue: '', description: '' },
            { name: 'FromEmail', required: true, type: 'texto', defaultValue: '', description: '' },

            { name: 'sendTo', required: true, multiple: true, type: 'texto', defaultValue: '', description: '' },
            { name: 'Assunto', required: true, multiple: true, type: 'texto', defaultValue: '', description: '' },
            { name: 'html', required: true, type: 'html', defaultValue: '', description: '' },
        ],
};

export default anapro;