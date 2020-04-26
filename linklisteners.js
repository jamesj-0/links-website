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
      widget = document
        .createRange()
        .createContextualFragment(
          `<iframe  style="border: 0; width: 88%; height: 250px;" id=${item.id} src='https://embed.spotify.com/?uri=spotify:artist:2OBZ4TbehlTMKtLmpBpKnq' frameborder='0' allowtransparency='true'></iframe>`,
        )
      break
    case 'releases':
      widget = document.createRange().createContextualFragment(
        `<iframe class=widget id=${item.id} style="border: 0; width: 88%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3099874378/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://instinctrecs.bandcamp.com/album/instinct-09-2">INSTINCT 09 by INSTINCT</a></iframe>
         <iframe class=widget id=${item.id} style="border: 0; width: 88%; height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/827588753&color=%23242424&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div id=${item.id} style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/holloway-95" target="_blank" style="color: #cccccc; text-decoration: none;"></a> · <a href="https://soundcloud.com/holloway-95/sets/dr-banana" target="_blank" style="color: #cccccc; text-decoration: none;"></a></div>`,
      )
      break
    case 'soundcloud':
      widget = document.createRange().createContextualFragment(
        `<iframe class=SCwidget id=${item.id} width="78%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/718251409&color=%23645c54&inverse=false&auto_play=false&show_user=true"></iframe><div id=${item.id} style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/rinsefm" target="_blank" style="color: #cccccc; text-decoration: none;"></a><a href="https://soundcloud.com/rinsefm/soundbwoykillah251119" target="_blank" style="color: #cccccc; text-decoration: none;"></a></div>
          <iframe class=SCwidget id=${item.id} width="78%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/698705842&color=%23645c54&inverse=false&auto_play=false&show_user=true"></iframe><div id=${item.id} style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/rinsefm" target="_blank" style="color: #cccccc; text-decoration: none;"></a><a href="https://soundcloud.com/rinsefm/allcentre181019" target="_blank" style="color: #cccccc; text-decoration: none;"></a></div>
          `,
      )
      break
    case 'mixcloud':
      widget = document.createRange().createContextualFragment(
        `<iframe width="88%" class=SCwidget id=${item.id} height="60" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FNTSRadio%2Ffrom-the-depths-w-holloway-6th-march-2020%2F" frameborder="0" ></iframe>
          <iframe width="88%" class=SCwidget id=${item.id} height="60" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FNTSRadio%2Falexander-nut-19th-november-2019%2F" frameborder="0" ></iframe>
          <iframe width="88%" class=SCwidget id=${item.id} height="60" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FNTSRadio%2Ffauzia-19th-july-2019%2F" frameborder="0" ></iframe>`,
      )
  }
  document.getElementById(`${item.id}`).appendChild(widget)
}

export { linkListeners }
