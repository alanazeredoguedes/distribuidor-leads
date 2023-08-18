import Swal from "sweetalert2";
export const alerts = {

    notification: (ico, title, message, timer = 1000) => {
        return Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: timer,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        }).fire({
            icon: ( (ico) ? ico: 'success' ),
            title: title,
            html: message,
        })
    },
    modalAlert(ico, title, message = '', timer = 3000, position){
        Swal.fire({
            title: ( (title) ? title: 'success' ),
            html: ( (message) ? message: 'success' ),
            icon: ( (ico) ? ico: 'success' ),
            position: ( (position) ? position: 'center' ),
            showConfirmButton: false,
            timerProgressBar: true,
            timer: timer,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        document.querySelector('body').classList.remove('swal2-height-auto');
    },
    modalConfirm: (title, text, callbackConfirm = ()=>{}, callbackCancel = ()=>{}, width = '500px' )=>{
        Swal.fire({
            title: title,
            html: text,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não',
            width: width
        }).then((result) => {
            if (result.isConfirmed) {
                callbackConfirm()
            }else{
                callbackCancel()
            }
        })
        document.querySelector('body').classList.remove('swal2-height-auto');
    },
    modalLoading(title, ){
        let timerInterval
        Swal.fire({
            title: (title)? title: 'Processando!',
            html: 'Aguarde, <br> processando em <b></b> ..<br>',
            timer: 10000,
            allowOutsideClick: false,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => { clearInterval(timerInterval) }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                //console.log('I was closed by the timer')
            }
        })
        document.querySelector('body').classList.remove('swal2-height-auto');
    },

}