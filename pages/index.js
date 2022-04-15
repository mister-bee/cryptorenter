import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.title}>

      <Head>
        <title>Cryptastate</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <Image
          src="/panda.svg"
          width={180}
          height={120}
          alt="" ></Image>
        <h1 className={styles.text}>
          CryptoPanda
        </h1>
        <h2 className={styles.text}>All payments, deposits, refunds, repairs, and issues handled by <a href="https://polymesh.network/">Polymath</a> smart contracts</h2>
      </main>
    </div>
  )
}