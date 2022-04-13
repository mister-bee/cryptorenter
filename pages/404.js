import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


const NotFound = () => {

  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)

  }, [])


  return (
    <div className="not-found">
      <h1>
        Ooops!!
      </h1>
      <h2>
        That page not found
      </h2>
      <Link href="/">Home</Link>

    </div>
  )
}

export default NotFound