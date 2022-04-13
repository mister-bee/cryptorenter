import Link from 'next/link'
import Image from 'next/image'
export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Image src="/cryptoImage.svg" width={128} height={77} ></Image>
      </div>

      <Link href="/"><a> Home </a></Link>
      <Link href="/renters"><a> Renters </a></Link>
      <Link href="/landlords"><a> Landlords </a></Link>
      <Link href="/propertymanagers"><a> Property Managers</a></Link>
    </nav>
  )
}


