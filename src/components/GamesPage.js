// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import GamesList from './GamesList'
import { fetchGames } from '../actions/actions'

type Props = {
    games: Array<string>,
    fetchGames: Function
}

class GamesPage extends Component<Props> {
  componentDidMount() {
    this.props.fetchGames()
  }
  render() {
    return (
      <div>
        <h1>Games List</h1>

        <GamesList games={this.props.games} />
      </div>
    )
  }
}

const mapStateToProps: MapStateToProps<*, *, *> = state => {
  return {
    games: state.games
  }
}

export default connect(mapStateToProps, { fetchGames })(GamesPage)
