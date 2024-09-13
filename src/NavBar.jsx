import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './NavBar.css'

function NavBar() {
  return (
    <Navbar className="nav">
        <Nav.Item>
        <Navbar.Brand className='mx-3 nav-element' as={NavLink} to={'/'}>Home</Navbar.Brand>
        </Nav.Item>
        <Nav.Item>
            
        </Nav.Item>
      
    </Navbar>
  );
}

export default NavBar;
