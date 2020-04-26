let testBool = false

function linkListeners() {
  const links = Array.from(document.querySelectorAll('.links__button'))
  links.map((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault()
      testBool = !testBool
      testBool ? addWidget(item) : removeWidget(item)
    })
  })
}

function removeWidget(item) {
  document.querySelectorAll(`#${item.id}`)[2].remove()
}

function addWidget(item) {
  let widget = document.createRange().createContextualFragment(
    `<iframe id=${item.id}
      src="https://open.spotify.com/embed/playlist/1xn1QZMdGIZkjPBkIBPZ8y"
      width="400"
      height="80"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>`,
  )
  document.getElementById(`${item.id}`).appendChild(widget)
}

export { linkListeners }
