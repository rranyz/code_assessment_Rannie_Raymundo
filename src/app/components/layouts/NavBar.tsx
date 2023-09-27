import Image from 'next/image'
import Link from 'next/link'

const NavBar = function () {
  return (
    <header className="w-90 h-[4rem] flex bg-neutral-950">
      <nav className="w-full h-full px-8 flex justify-normal">
        <Image
          width={60}
          height={60}
          src="/youtube-icon.png"
          alt="Youtube Logo"
        />
        <Link href="/">
          <h1 className="font-semibold text-white py-5">Youtube</h1>
        </Link>
      </nav>
    </header>
  )
}

export default NavBar
