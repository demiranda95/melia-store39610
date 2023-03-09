import 'bootstrap'
import logo from '../../assets/logo/logo-white.png'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <section>
      <nav className='navbar navbar-dark bg-dark navbar-expand-md'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='index.html'>
            <img className='Logo' src={logo} alt='Logo' />
          </a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0 text-center'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#none'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' aria-current='page' href='#none'>
                  Link 1
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' aria-current='page' href='#none'>
                  Link 2
                </a>
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Navbar
