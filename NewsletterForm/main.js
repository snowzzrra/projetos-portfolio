const container = document.getElementById('container')
const infoBox = document.getElementById('info-box')
const picture = document.getElementById('picture')
const userEmail = document.getElementById('user-email')
const emailFailed = document.getElementById('email-failed')
const emailContent = document.getElementById('email')
const submitButton = document.getElementById('submit-button')
const emailSuccess = document.getElementById('email-success')
const dismissButton = document.getElementById('dismiss-button')

function onSuccessEnter(){
    emailSuccess.classList.add('active')
    container.classList.add('success')
    infoBox.style.display = 'none'
    picture.style.display = 'none'
}

function emailValidation(email){
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    return emailRegex.test(email)
}

submitButton.addEventListener('click', () => {
    const email = emailContent.value.trim()

    if (emailValidation(email)){
        onSuccessEnter()
        userEmail.innerText = email
        emailContent.value = ''
        emailFailed.classList.remove('active')
        emailContent.classList.remove('active')
    } else{
        emailFailed.classList.add('active')
        emailContent.classList.add('active')
    }
})

dismissButton.addEventListener('click', () => {
    infoBox.style.display = 'block'
    picture.style.display = 'block'
    container.classList.remove('success')
    emailSuccess.classList.remove('active')
})