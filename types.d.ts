export interface State {
  cuadrados: Array<Array<{x: number; y: number}>>
  posiciones: Array<Array<String>>
  numeroJugada: number
  mensajeGanador: string
  mensajeError: string
  idJugador: string
}

export interface Action {
  type: string
  payload?: any
}
