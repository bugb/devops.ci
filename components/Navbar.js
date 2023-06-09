import Link from 'next/link'
import { Nav, Navbar } from 'react-bootstrap';

const BlogNavbar = () => {
  return (
    <Navbar
      className="fj-navbar fj-nav-base"
      bg="transparent"
      expand="lg" >
      <Navbar.Brand className="fj-navbar-brand">
        <a href="#"></a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            className="fj-navbar-item fj-navbar-link"
            as={() => <Link href="/">Home</Link>}
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default BlogNavbar
