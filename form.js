const contactButton = document.getElementById('contact__button')
const contactUs = document.getElementsByClassName('contact')[0]
const container = document.getElementsByClassName('contact__container')[0]
const closeButton = document.getElementById('close')
const allInput = document.querySelectorAll('input')
const submitButton = document.querySelector('.form__submit')
const submitResult = document.querySelector('.form__submit-message')

contactButton.onclick = () => {
  formAppear()
}

submitButton.onclick = (e) => {
  for (let i = 0; i < allInput.length; i++) {
    if (allInput[i].value !== '') {
      e.preventDefault()
      submitResult.style.display = 'flex'
      setTimeout(() => {
        submitResult.style.display = 'none'
        formDisappear()
      }, 2000)
    }
  }
}

closeButton.onclick = () => {
  formDisappear()
}

document.onclick = (event) => {
  if (event.target == container) {
    formDisappear()
  }
}

function formAppear() {
  contactUs.style.display = 'flex'
  contactButton.style.display = 'none'
}

function formDisappear() {
  contactUs.style.display = 'none'
  contactButton.style.display = 'flex'
}
