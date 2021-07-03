import {State, Action} from '../types'

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'NEW_GAME':
      return {
        ...state,
        posiciones: [
          ['', '', ''],
          ['', '', ''],
          ['', '', ''],
        ],
        numeroJugada: 1,
        mensajeGanador: '',
        mensajeError: '',
        idJugador: 'X',
      }

    case 'NEW_FRAME_POSITION':
      return {
        ...state,
        posiciones: action.payload,
      }

    case 'GAME_WINNER':
      return {
        ...state,
        mensajeGanador: `Gano el jugador ${state.idJugador} ✅`,
      }

    case 'GAME_EQUALS':
      return {
        ...state,
        mensajeGanador: 'Juego empatado 😟',
      }

    case 'GAME_SPACE_OCUPED':
      return {
        ...state,
        mensajeError: 'Espacio ocupado 🤦',
      }

    case 'ADD_PLAY':
      return {
        ...state,
        mensajeError: '',
        numeroJugada: state.numeroJugada + 1,
        idJugador: state.idJugador === 'X' ? 'O' : 'X',
      }

    default:
      return state
  }
}
