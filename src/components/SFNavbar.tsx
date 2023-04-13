import { Button, Container, Form, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SFNavbar = () => {
	return (
		<>
			{['lg'].map((expand) => (
				<Navbar key={expand} bg="dark" variant="dark" expand={expand} className="mb-3">
					<Container fluid>
						<Link to="/" className="text-decoration-none text-light fs-2">
							SpaceFlight News
						</Link>
						<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
						<Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
							<Offcanvas.Header closeButton></Offcanvas.Header>
							<Offcanvas.Body>
								<Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
									<Link to="/favs" className="text-decoration-none text-light">
										Favourites
									</Link>
								</Nav>
								<Form className="d-flex">
									<Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
									<Button variant="outline-info">Search</Button>
								</Form>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			))}
		</>
	);
};

export default SFNavbar;
