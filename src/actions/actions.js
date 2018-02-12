export const SET_GAMES = "SET_GAMES"
export const ADD_GAME = "ADD_GAME"
export const GAME_FETCHED = "GAME_FETCHED"
export const GAME_UPDATED = "GAME_UPDATED"
export const GAME_DELETED = "GAME_DELETED"

function handleResponse(response) {
  if (response.ok) {
    return response.json()
  } else {
    let error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export function setGames(games) {
  return {
    type: SET_GAMES,
    games
  }
}

export function addGame(game) {
  return {
    type: ADD_GAME,
    game
  }
}

export function gameFetched(game) {
  return {
    type: GAME_FETCHED,
    game
  }
}

export function gameUpdated(game) {
  return {
    type: GAME_UPDATED,
    game
  }
}

export function gameDeleted(gameId) {
  return {
    type: GAME_DELETED,
    gameId
  }
}

export const fetchGames = () => {
  return async dispatch => {
    try {
      const res = await fetch("/api/games")
      const json = await res.json()
      dispatch(setGames(json.games))
    } catch (err) {
      console.log(err)
    }
  }
}

export const fetchGame = id => {
  return async dispatch => {
    try {
      const res = await fetch(`/api/games/${id}`)
      const json = await res.json()
      dispatch(gameFetched(json.game))
    } catch (err) {
      console.log(err)
    }
  }
}

export const updateGame = data => {
  return async dispatch => {
    try {
      const res = await fetch(`/api/games/${data._id}`, {
        method: "put",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const json = await res.json()
      handleResponse(res)
      dispatch(gameUpdated(json.game))
    } catch (err) {
      console.log(err)
    }
  }
}

export const deleteGame = id => {
  return async dispatch => {
    try {
      const res = await fetch(`/api/games/${id}`, {
        method: "delete",
        headers: {
          "Content-Type": "application/json"
        }
      })
      handleResponse(res)
      dispatch(gameDeleted(id))
    } catch (err) {
      console.log(err)
    }
  }
}

export const saveGame = data => {
  return async dispatch => {
    try {
      const res = await fetch("/api/games", {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const json = await res.json()
      handleResponse(res)
      dispatch(addGame(json.game))
    } catch (err) {
      console.log(err)
    }
  }
}
