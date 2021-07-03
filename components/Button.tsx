interface Props {
  title: string
  nuevoJuego: any
}

export default function Button({nuevoJuego, title}: Props) {
  return (
    <button
      className={
        'mt-5 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 border border-transparent rounded-md	text-white py-1 px-2 w-36'
      }
      onClick={nuevoJuego}
    >
      {title}
    </button>
  )
}
