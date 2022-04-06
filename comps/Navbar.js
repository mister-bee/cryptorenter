import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <Link href="/"><a> Home </a></Link>
      <Link href="/renters"><a> Renters </a></Link>
      <Link href="/landlords"><a> Landlords </a></Link>
      <Link href="/propertymanagers"><a> Property Managers</a></Link>
    </nav>
  )
}
