export const alertError = {
    messageAlert: document.querySelector('.alertError'),

    open(){
        alertError.messageAlert.classList.add('open')
    },
    close(){
        alertError.messageAlert.classList.remove('open')
    }
}

