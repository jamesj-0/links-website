function linkListeners() {
  const links = Array.from(document.querySelectorAll('.links__button'))
  links.map((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault()
      console.log(item.id)
      widget(item)
    })
  })
}

function widget(item) {
  var para = document.createElement('P') // Create a <p> node
  var t = document.createTextNode(`${item.id}`) // Create a text node
  para.appendChild(t)
  console.log(item)
  document.getElementById(`${item.id}`).appendChild(para) // Append <p> to <div> with id="myDIV"
}

export { linkListeners }
