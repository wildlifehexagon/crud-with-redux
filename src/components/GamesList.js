// @flow
import React from "react"
import GameCard from './GameCard'

type Props = {
    games: Array<string>
}

const GamesList = (props: Props) => {
    const emptyMessage = (
        <p>There are no games yet in your collection.</p>
    )

    const gamesList = (
        <div className="ui four cards">
            {props.games.map(game => <GameCard game={game} key={game._id} />)}
        </div>
    )

    return (
      <div>
        {props.games.length === 0 ? emptyMessage : gamesList }
      </div>
    )
}

export default GamesList