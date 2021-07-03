import {State} from '../types'

interface Props {
  state: State
  jugada: any
}

export default function Game({state, jugada}: Props) {
  return (
    <div>
      {!state.mensajeGanador && (
        <p className='text-lg p-3'>
          Turno{' '}
          <span className='text-purple-400 font-bold'>{state.idJugador}</span>
        </p>
      )}

      {state.mensajeError && (
        <p className='text-red-500 text-base font-bold p-3 text-center bg-red-100'>
          {state.mensajeError}
        </p>
      )}

      {state.mensajeGanador && (
        <p className='text-green-500 text-base font-bold p-3 text-center bg-green-100'>
          {state.mensajeGanador}
        </p>
      )}

      {[...Array(3).keys()].map((res, index) => {
        return (
          <div className='flex text-6xl' key={res}>
            {state.cuadrados[index].map((res, i) => {
              return (
                <div
                  className='flex justify-center border-4 w-32 h-32 border-light-blue-500 transition duration-500 ease-in-out hover:bg-gray-200'
                  key={i}
                  onClick={() => jugada(res.x, res.y)}
                >
                  <span className='text-gray-800 flex items-center'>
                    {state.posiciones[res.x][res.y]}
                  </span>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
