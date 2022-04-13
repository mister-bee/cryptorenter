import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Clients.module.css'

// runs at build time, never in the browser
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return { props: { clients: data } }
}

const Client = ({ clients }) => {
  return (
    <div>
      <Head>
        <title>Cryptastate | Clients</title>
        <meta name="clients" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Clients</h1>

      {clients.map(cl => (
        <Link
          href={"/clients/" + cl.id}
          key={cl.id}>
          <a className={styles.single}><h3>{cl.name}</h3></a>
        </Link>
      ))}

    </div>
  )
}

export default Client