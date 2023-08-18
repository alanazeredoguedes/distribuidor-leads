import '@popperjs/core/dist/cjs/popper'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
export default defineNuxtPlugin(async ()=> {
    return {
        provide:{
            bootstrap: '',
        }
    }
})