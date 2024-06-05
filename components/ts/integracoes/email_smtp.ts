const anapro = {
        id: 'email_smtp',
        version: 1.0,
        active: true,
        name: 'Email com SMTP',
        description: 'Envio de email atravez de SMTP',
        company: '',
        tags: ['API', 'LEADS', 'CRM'],
        fields: [
            { name: 'host', label: 'Host', required: true, type: 'texto', defaultValue: '', description: '' },
            { name: 'port', label: 'Porta', required: true, type: 'texto', defaultValue: '', description: '' },
            { name: 'SMTPSecure', label: 'Segurança', options: ['TLS', 'SSL', 'DESATIVADO'], required: true, type: 'select', defaultValue: '', description: '' },

            { name: 'Username', label: 'Usuário', required: true, type: 'texto', defaultValue: '', description: '' },
            { name: 'Password', label: 'Senha', required: true, type: 'texto', defaultValue: '', description: '' },
            { name: 'FromName', label: 'Nome Envio', required: true, type: 'texto', defaultValue: '', description: '' },
            { name: 'FromEmail', label: 'Email Envio', required: true, type: 'texto', defaultValue: '', description: '' },

            { name: 'sendTo', label: 'Enviar para', required: true, multiple: true, type: 'texto', defaultValue: '', description: '' },
            { name: 'replyTo', label: 'Replicar para', required: true, multiple: true, type: 'texto', defaultValue: '', description: '' },
            { name: 'assunto', label: 'Assunto', required: true, multiple: true, type: 'texto', defaultValue: '', description: '' },
            { name: 'html', label: 'Texto Html', required: true, type: 'html', defaultValue: '', description: '' },
        ],
};

export default anapro;