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
  let nodelist = document.querySelectorAll(`#${item.id}`)
  for (let i = 2; i < nodelist.length; i++) {
    nodelist[i].remove()
  }
}

function addWidget(item) {
  let widget
  switch (item.id) {
    case 'spotify':
      widget = document.createRange().createContextualFragment(
        `<iframe id=${item.id}
      src="https://open.spotify.com/embed/playlist/1xn1QZMdGIZkjPBkIBPZ8y"
      width="88%"
      height="80"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>`,
      )
      break
    case 'releases':
      widget = document.createRange().createContextualFragment(
        `<iframe class=widget id=${item.id} style="border: 0; width: 88%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3099874378/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://instinctrecs.bandcamp.com/album/instinct-09-2">INSTINCT 09 by INSTINCT</a></iframe>
         <iframe class=widget id=${item.id} style="border: 0; width: 88%; height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/827588753&color=%23242424&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div id=${item.id} style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/holloway-95" target="_blank" style="color: #cccccc; text-decoration: none;"></a> · <a href="https://soundcloud.com/holloway-95/sets/dr-banana" target="_blank" style="color: #cccccc; text-decoration: none;"></a></div>`,
      )
  }
  document.getElementById(`${item.id}`).appendChild(widget)
}

export { linkListeners }
