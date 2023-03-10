import logo from '../../assets/logo/logo-white.png'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './SiteNavbar.css'
import CartWidget from '../CartWidget/CartWidget'

const SiteNavbar = () => {
	return (
		<section>
			<Navbar bg='dark' variant='dark' expand='md'>
				<Container fluid>
					<Navbar.Brand href='#home'>
						<img alt='Logo' src={logo} className='Logo d-inline-block align-top' />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='me-auto'>
							<Nav.Link href='#home' className='nav-item'>
								Home
							</Nav.Link>
							<Nav.Link href='#tienda' className='nav-item'>
								Tienda
							</Nav.Link>
							<NavDropdown title={<span className='nav-item'>Categorias</span>} id='basic-nav-dropdown'>
								<NavDropdown.Item href='#pantalones' className='nav-item'>
									Pantalones
								</NavDropdown.Item>
								<NavDropdown.Item href='#poleras' className='nav-item'>
									Poleras
								</NavDropdown.Item>
								<NavDropdown.Item href='#gorros' className='nav-item'>
									Gorros
								</NavDropdown.Item>
								<NavDropdown.Item href='#zapatos' className='nav-item'>
									Zapatos
								</NavDropdown.Item>
								<NavDropdown.Item href='#accesorios' className='nav-item'>
									Accesorios
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='#todas' className='nav-item'>
									Todas
								</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title={<span className='nav-item'>Genero</span>} id='basic-nav-dropdown'>
								<NavDropdown.Item href='#pantalones' className='nav-item'>
									Hombre
								</NavDropdown.Item>
								<NavDropdown.Item href='#poleras' className='nav-item'>
									Mujer
								</NavDropdown.Item>
								<NavDropdown.Item href='#gorros' className='nav-item'>
									Otros
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Nav>
							<CartWidget />
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</section>
	)
}

export default SiteNavbar
