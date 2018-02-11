// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import GamesList from './GamesList'

type Props = {
    games: Array<string>
}

class GamesPage extends Component<Props> {
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

export default connect(mapStateToProps)(GamesPage)
