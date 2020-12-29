import Link from 'next/link'
import Burger from './Burger'


const Nav = () => {
    return (
        <>
        <title>Mohammad Afaque</title>

<header>
   <Burger/>

    <nav className="menu show">
      <div className="menu-branding show">
        <div className="portrait"></div>
      </div>
      <ul className="menu-nav show">
        <li className="nav-item show current">
            <Link className="nav-link" href="/">
          <a className="nav-link">Home</a>
          </Link>
        </li>
        <li className="nav-item show">
        <Link href="/about" className="nav-link">
          <a className="nav-link">About Me</a>
          </Link>
        </li>
        <li className="nav-item show">
        <Link href="/work" className="nav-link">
          <a className="nav-link">My Work</a>
          </Link>
        </li>
        <li className="nav-item show">
        <Link href="/contact" >
          <a className="nav-link">How To Reach Me</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
  </>
        )}
export default Nav;
