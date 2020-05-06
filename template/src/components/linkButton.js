import React from 'react'

export const LinkToggle = (props) => {
  const [toggled, setToggled] = React.useState(false)
  return (
    <div className="card_container">
      <button
        className={`link_card ${props.className}`}
        onClick={() => setToggled(!toggled)}
      >
        <h3>{props.title}</h3>
      </button>
      <div
        className={
          toggled
            ? 'dropper_container dropper_container--active'
            : 'dropper_container'
        }
      >
        <p>BandCamp Iframe</p>
      </div>
    </div>
  )
}
