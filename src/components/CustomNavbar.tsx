import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CustomNavbar = () => (
  <Navbar collapseOnSelect variant="dark" bg="dark" expand="lg">
    <Link to="/">
      <Navbar.Brand>Spaceflight News</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#home">About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default CustomNavbar
