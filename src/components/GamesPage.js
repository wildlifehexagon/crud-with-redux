// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import GamesList from "./GamesList"
import { fetchGames, deleteGame } from "../actions/actions"

type Props = {
  games: Array<string>,
  fetchGames: Function,
  deleteGame: Function
}

class GamesPage extends Component<Props> {
  componentDidMount() {
    this.props.fetchGames()
  }
  render() {
    return (
      <div>
        <h1>Games List</h1>

        <GamesList
          games={this.props.games}
          deleteGame={this.props.deleteGame}
        />
      </div>
    )
  }
}

const mapStateToProps: MapStateToProps<*, *, *> = state => {
  return {
    games: state.games
  }
}

export default connect(mapStateToProps, { fetchGames, deleteGame })(GamesPage)
