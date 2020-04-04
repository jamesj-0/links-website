const linksSection = document.querySelector('.links')
const contactButton = document.getElementById('contact__button')
const contactUs = document.getElementsByClassName('contact')[0]
const container = document.getElementsByClassName('contact__container')[0]
const closeButton = document.getElementById('close')
const allInput = document.querySelectorAll('input')
const submitButton = document.querySelector('.form__submit')
const submitResult = document.querySelector('.form__submit-message')

let linksArr = [
  {
    link: 'url.com',
    title: 'Boiler Room',
    index: '1',
  },
  {
    link: 'url.com',
    title: 'Mixes',
    index: '2',
  },
  {
    link: 'url.com',
    title: 'Mixes',
    index: '2',
  },
  {
    link: 'url.com',
    title: 'Mixes',
    index: '2',
  },
  {
    link: 'url.com',
    title: 'Mixes',
    index: '2',
  },
  {
    link: 'url.com',
    title: 'Mixes',
    index: '2',
  },
]

linksArr.map(item => {
  const newLinkItem = document.createElement('a')
  newLinkItem.textContent = item.title
  newLinkItem.href = item.link
  newLinkItem.style.webkitOrder = item.index
  newLinkItem.className = `links__button item-${item.index}`
  newLinkItem.style.padding = `0.9rem`
  newLinkItem.style.margin = calcMargin(linksArr)
  linksSection.appendChild(newLinkItem)
})

function calcMargin(arr) {
  let margin = 0
  switch (arr.length) {
    case 1:
      margin = '1.9rem'
      break
    case 2:
      margin = '1rem'
      break
    case 3:
      margin = '0.9rem'
      break
    case 4:
      margin = '0.7rem'
      break
    case 5:
      margin = '0.7rem'
      break
    case 6:
      margin = '0.4rem'
      break
  }
  return margin
}

contactButton.onclick = () => {
  formAppear()
}

submitButton.onclick = e => {
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

document.onclick = event => {
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
