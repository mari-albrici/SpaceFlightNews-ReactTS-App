import { ChangeEvent, useState } from 'react';
import { Button, Container, Form, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const SFNavbar = () => {
	const navigate = useNavigate();
	const [query, setQuery] = useState('');
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

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
								<Form className="d-flex" onSubmit={() => navigate('/searched=' + query)}>
									<Form.Control type="search" value={query} placeholder="Search" className="me-2" aria-label="Search" onChange={handleChange} />
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
