import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useGame} from '../hooks/useGame'
import {Button, Game} from '../components'

export default function Home() {
  const {state, jugada, nuevoJuego} = useGame()
  return (
    <div className={styles.container}>
      <Head>
        <title>Tic tac toc</title>
        <meta name='description' content='test-code' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Tic Tac Toc</h1>
        <section className={styles.grid}>
          <article className={styles.card}>
            <Game jugada={jugada} state={state} />
            <div className='flex justify-center'>
              <Button title='Nuevo juego' nuevoJuego={nuevoJuego} />
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}
