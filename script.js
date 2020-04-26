const linksSection = document.querySelector('.links')

import { calcMargin } from './calcMargin.js'

import { linkListeners } from './linklisteners.js'

const linksArr = [
  {
    link: 'url.com',
    title: 'Spotify Artist Page',
    index: '1',
    emoji: '📀',
    description: 'spotify',
  },
  {
    link: 'url.com',
    title: 'Recent Releases',
    index: '2',
    emoji: '🆕',
    description: 'releases',
  },
  {
    link: 'url.com',
    title: 'Rinse FM W/ Soundbwoy Killah',
    index: '2',
    emoji: '🍻',
    description: 'soundcloud',
  },
  {
    link: 'url.com',
    title: 'NTS W/ Alexander Nut',
    index: '2',
    emoji: '🤩',
    description: 'mixcloud',
  },
]

const artistDataArr = {
  artistName: 'Holloway',
  artistHandle: '@Holl0way',
  artistImgLink:
    'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/70238457_2394358824214652_4721427382088362653_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=108&_nc_ohc=UpBeK0SNgREAX87qhdC&oh=0d64f79219cb947643c794bee9c56e48&oe=5ECDC01C',
}

function loadHeader(artist) {
  const header = document.querySelector('.header')
  const artistImg = document.createElement('img')
  artistImg.src = artist.artistImgLink
  artistImg.className = 'header__image'
  const artistTitle = document.createElement('h1')
  artistTitle.className = 'header__title'
  artistTitle.textContent = artist.artistName
  const artistHandle = document.createElement('h2')
  artistHandle.className = 'header__handle'
  artistHandle.textContent = artist.artistHandle
  header.appendChild(artistImg)
  header.appendChild(artistTitle)
  header.appendChild(artistHandle)
}

function loadButtons(links) {
  links.map((item) => {
    const newLinkItemWrapper = document.createElement('div')
    newLinkItemWrapper.className = `link__wrapper item-${item.index}`
    newLinkItemWrapper.setAttribute('id', `${item.description}`)

    const newLinkItem = document.createElement('a')
    newLinkItem.textContent = item.emoji
      ? item.emoji + '' + item.title + ' ' + item.emoji
      : item.title
    newLinkItem.href = item.link
    newLinkItem.style.webkitOrder = item.index
    newLinkItem.className = `links__button`
    newLinkItem.setAttribute('id', `${item.description}`)
    newLinkItem.style.padding = `0.9rem`
    newLinkItem.style.margin = calcMargin(linksArr)
    newLinkItemWrapper.appendChild(newLinkItem)
    linksSection.appendChild(newLinkItemWrapper)
  })
}

loadButtons(linksArr)
loadHeader(artistDataArr)
linkListeners()
