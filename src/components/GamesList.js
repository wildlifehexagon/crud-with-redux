// @flow
import React from "react"

type Props = {
    games: Array<string>
}

const GamesList = (props: Props) => {
    const emptyMessage = (
        <p>There are no games yet in your collection.</p>
    )

    const gamesList = (
        <p>games list</p>
    )

    return (
      <div>
        {props.games.length === 0 ? emptyMessage : gamesList }
      </div>
    )
}

export default GamesList