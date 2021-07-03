import _ from 'lodash'
import {useReducer} from 'react'
import {INITIAL_STATE} from '../store/state'
import {reducer} from '../store/store'

export function useGame() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const nuevoJuego = () => dispatch({type: 'NEW_GAME'})

  const validaciones = (x: any, y: any) => {
    let posiciones!: String[][]
    const sizeX: number = x
    const sizeY: number = y

    function validarFilas() {
      let respuesta: boolean = false
      for (const fila of posiciones) {
        respuesta = respuesta || validarArreglo(fila)
      }
      return respuesta
    }

    function validarColumnas() {
      let respuesta: boolean = false
      let cambioFilasColumnas: any = _.zip.apply(_, posiciones)
      for (const fila of cambioFilasColumnas) {
        respuesta = respuesta || validarArreglo(fila)
      }
      return respuesta
    }

    function validarDiagonal() {
      let diagonal1: String[] = []
      let diagonal2: String[] = []
      let indice = sizeY

      for (let i = 0; i < sizeY; i++) {
        diagonal2.push(posiciones[--indice][i])
        for (let j = 0; j < sizeX; j++) {
          if (i === j) {
            diagonal1.push(posiciones[j][i])
          }
        }
      }

      return validarArreglo(diagonal1) || validarArreglo(diagonal2)
    }

    function validarArreglo(arreglo: String[]) {
      let arregloLimpio = _.without(arreglo, '')

      return arregloLimpio.length === 3
        ? _.uniq(arregloLimpio).length === 1
        : false
    }

    return {
      validar: function validarGanador(pos: any) {
        posiciones = pos
        return validarColumnas() || validarFilas() || validarDiagonal()
      },
    }
  }

  const jugada = (x: number, y: number) => {
    if (!state.mensajeGanador) {
      if (state.posiciones[x][y] === '') {
        const nuevaPosicion = state.posiciones.slice()
        nuevaPosicion[x][y] = state.idJugador

        dispatch({
          type: 'NEW_FRAME_POSITION',
          payload: nuevaPosicion,
        })

        let resultado = false
        if (state.numeroJugada > 4) {
          resultado = validaciones(x, y).validar(state.posiciones)

          if (resultado) {
            dispatch({type: 'GAME_WINNER'})
          } else if (state.numeroJugada === 9 && !resultado) {
            dispatch({type: 'GAME_EQUALS'})
          }
        }

        dispatch({type: 'ADD_PLAY'})
      } else {
        dispatch({type: 'GAME_SPACE_OCUPED'})
      }
    }
  }

  return {state, nuevoJuego, jugada}
}
