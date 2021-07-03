import {State} from '../types'

export const INITIAL_STATE = <State>{
  cuadrados: [
    [
      {x: 0, y: 0},
      {x: 1, y: 0},
      {x: 2, y: 0},
    ],
    [
      {x: 0, y: 1},
      {x: 1, y: 1},
      {x: 2, y: 1},
    ],
    [
      {x: 0, y: 2},
      {x: 1, y: 2},
      {x: 2, y: 2},
    ],
  ],
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
