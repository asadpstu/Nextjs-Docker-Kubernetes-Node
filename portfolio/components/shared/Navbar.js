import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import Link from 'next/link'


const AppNavbar = () => {

  return (
    <div className="navbar-wrapper">
      <Navbar expand="lg" className="navbar-dark fj-mw9">
        <Navbar.Brand className="mr-3 font-weight-bold">
            <Link href="/" className="mr-3">
              <a className="navbar-brand mr-3 font-weight-bold">
                How-i-code
              </a>
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Link href="/portfolios" className="mr-3">
              <a className="mr-3 nav-link">
                Portfolios
              </a>
            </Link>
            <Link href="/forum/categories" className="mr-3">
              <a className="mr-3 nav-link">
                Forum
              </a>
            </Link>
            <Link href="/cv" className="mr-3">
              <a className="mr-3 nav-link">
                CV
              </a>
            </Link>
          </Nav>
          <Nav>
          <Link href="/signup" className="mr-3">
              <a className="mr-3 nav-link">
                Signup
              </a>
            </Link>
            <Link href="/signin" className="mr-3">
              <a className="mr-3 nav-link">
                Signin
              </a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default AppNavbar;
