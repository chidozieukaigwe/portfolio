import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/">
      <Image src='/next.svg' width={54} height={54} priority alt="" />
    </Link>
  )
}
