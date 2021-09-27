import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home page</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} >
          UnB Monitorias
        </h1>

      </main>
    </div>
  )
}
