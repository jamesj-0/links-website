const linksSection = document.querySelector('.links')
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
    index: '4',
  },
  {
    link: 'url.com',
    title: 'Mixes3',
    index: '3',
  },
]

linksArr.map(item => {
  const newLinkItem = document.createElement('a')
  newLinkItem.textContent = item.title
  newLinkItem.href = item.link
  newLinkItem.style.webkitOrder = item.index
  newLinkItem.className = `links__button item-${item.index}`
  newLinkItem.style.padding = `1.3rem`
  linksSection.appendChild(newLinkItem)
})
