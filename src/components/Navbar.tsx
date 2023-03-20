import Link from 'next/link';
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <div className="logo">
          <Image src="/logo.png" alt="site logo" width={120} height={56} />
        </div>
      </Link>
      <Link href="/"><a>Ticket booking App</a></Link>
    </nav>
);
}
 
export default Navbar;