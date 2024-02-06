document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.querySelector('.form')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const emailAddress = document.querySelector('#email')
        const msgError = document.querySelector('.form__error')
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if(emailAddress.value === "") {
            emailAddress.style.border = '1px solid var(--color-error)'
            msgError.innerHTML = 'Whoops! It looks like you forgot to add your email'
        } else if(!emailRegex.test(emailAddress.value)) {
            emailAddress.style.border = '1px solid var(--color-error)'
            msgError.innerHTML = 'Please provide a valid email address'
        } else {            
            emailAddress.style.border = '1px solid var(--color-light-blue)'
            msgError.innerHTML = ''
            emailAddress.value = ''
            
            setTimeout(() => {
                alert('Message sent')
            }, 1000)            
        }
        
    })
})