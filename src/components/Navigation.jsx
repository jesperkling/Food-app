import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom'
import { useAuthContext } from "../contexts/AuthContext";

const Navigation = () => {
	const { currentUser, userEmail } = useAuthContext()

  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">Food Finder</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto">
						{currentUser ? (
							<>
								<Nav.Link as={NavLink} end to="/create-place">Add Place</Nav.Link>
								<Nav.Link as={NavLink} end to="/logout">Logout</Nav.Link>
							</>
						) : (
							<>
								<Nav.Link as={NavLink} end to="/login">Login</Nav.Link>
								<Nav.Link as={NavLink} end to='/create-tips'>Tips us</Nav.Link>
							</>
						)}
						
						
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
  )  
}

export default Navigation