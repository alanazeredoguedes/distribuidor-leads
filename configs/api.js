let URl = ''
if(window.location.href.includes('localhost') || window.location.href.includes('127.0.0.1'))
    URl   = `http://127.0.0.1:8000` // DEV
else
    URl   = `https://adminintegrador.internit.com.br` // PROD


export const URI = URl
export const API_VERSION    = 'api'
export const BASE_URI = URI + '/' + API_VERSION
export const TOKEN_NAME     = 'TOKEN_JWT'