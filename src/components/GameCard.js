// @flow
import React from "react"

type Props = {
  game: Object
}

const GameCard = (props: Props) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={props.game.cover} alt="Game Cover" />
      </div>
      <div className="content">
        <div className="header">{props.game.title}</div>
      </div>
    </div>
  )
}

export default GameCard
