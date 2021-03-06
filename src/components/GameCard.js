// @flow
import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

type Props = {
  game: Object,
  deleteGame: Function
}

const ImageStyle = styled.img`
  max-height: 17vw;
  min-height: 17vw;
  max-width: 17vw;
  min-width: 17vw;
`

const GameCard = (props: Props) => {
  return (
    <div className="ui card">
      <div className="image">
        <ImageStyle src={props.game.cover} alt="Game Cover" />
      </div>
      <div className="content">
        <div className="header">{props.game.title}</div>
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <Link
            to={`/game/${props.game._id}`}
            className="ui basic button green"
          >
            Edit
          </Link>
          <div
            className="ui basic button red"
            onClick={() => props.deleteGame(props.game._id)}
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameCard
