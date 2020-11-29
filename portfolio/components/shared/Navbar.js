import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import Link from 'next/link'

//here children property is very important
const AppLink = ({href,className,children}) =>
  <Link href={href}>
    <a className={className}>
      {children}
    </a>
  </Link>



const AppNavbar = () => {

  return (
    <div className="navbar-wrapper">
      <Navbar expand="lg" className="navbar-dark fj-mw9">
        <Navbar.Brand className="mr-3 font-weight-bold">
          <AppLink href="/" className="navbar-brand mr-3 font-weight-bold">
            How-i-code
          </AppLink>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <AppLink href="/portfolios" className="mr-3 nav-link">
              Portfolios
            </AppLink>
            <AppLink href="/forum/categories" className="mr-3 nav-link">
              Forum
            </AppLink>
            <AppLink href="/" className="mr-3 nav-link">
              CV
            </AppLink>
          </Nav>
          <Nav>
            <AppLink href="/" className="mr-3 nav-link">
              Signup
            </AppLink>
            <AppLink href="/" className="mr-3 nav-link">
              Signin
            </AppLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default AppNavbar;
