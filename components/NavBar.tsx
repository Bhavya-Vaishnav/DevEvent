import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
    return (
        <header>
            <nav>
                <Link href="/" className="logo">
                    <Image src="/icons/logo.png" alt="logo" width={24} height={24} />
                    <p>DevEvent</p>
                </Link>
                <ul>
                    <li href="/">Home</li>
                    <li href="/">Events</li>
                    <li href="/">Create Event</li>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar
