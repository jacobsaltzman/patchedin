import React, {useContext} from "react";
import { UserContext } from "../context/user";
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';



function Navigation({logo2}){

  const nav = useNavigate();
  const { currentUser, setCurrentUser } = useContext(UserContext);


  const handleLogout = () => {
    fetch('/logout', {
      method: 'DELETE'
    })
    setCurrentUser(false)
    nav(`/`)
    };

  return(
<Navbar bg="light" expand="lg" collapseOnSelect>
  <Navbar.Brand as={Link} to="/">
  <img id="main-logo-image" alt="PatchedIn Logo" src={logo2} />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">

        <Nav.Link as={Link} to="/" className="text-dark mr-3">Home</Nav.Link>
        <Nav.Link as={Link} to="/about" className="text-dark mr-3">About</Nav.Link>
        

        {!currentUser ? 
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/signup" className="btn btn-primary">Sign up</Nav.Link>
          <Nav.Link as={Link} to="/login" className="btn btn-outline-primary">Log in</Nav.Link>
        </Nav>
         :
         <NavDropdown title="Projects" id="basic-nav-dropdown" className="text-dark mr-3">
          <NavDropdown.Item as={Link} to="/projects/me">My Projects</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/contributions">My Contributions</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/projects">All Projects</NavDropdown.Item>
        </NavDropdown>}
    </Nav>
  </Navbar.Collapse>

  {!currentUser?<h6 id="no-user">Sign up or Login to continue!</h6>:""}
  {currentUser ? <div><Link to={`/users/${currentUser.id}`}>Account</Link><div id="user-greeting"><h6>Welcome, {currentUser.username}</h6></div>   <div id="logout-button"><button onClick={handleLogout}>Log Out</button> </div></div>: null}

</Navbar>
  )
}

export default Navigation;