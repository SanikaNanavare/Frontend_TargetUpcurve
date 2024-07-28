import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import img from '../../Assets/Cream and Brown Retro Streetwear Logo.png';
import { useCart } from '../../context/CartContext'; // Assuming you have a CartContext for managing cart items
import './Navbar.css';

function Navbar() {
    const { cartItems } = useCart(); // Assuming cartItems is available from CartContext

    return (
        <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: 'red', height: '60px' }}>
            <div className="container d-flex align-items-center pl-0">
                <a className="navbar-brand d-flex align-items-center ml-0" href="#">
                    <img src={img} alt="Hungerbox" width="60" height="60" style={{ objectFit: 'contain' }} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="container-fluid d-flex align-items-center">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active px-3 py-2" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active px-3 py-2" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active px-3 py-2" to="/contact">Contact Us</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle px-3 py-2" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Food
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="#">Veg</Link></li>
                                    <li><Link className="dropdown-item" to="#">Non-Veg</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="#">Vegan</Link></li>
                                </ul>
                            </li>
                        </ul>

                        <form className="d-flex mx-auto" style={{ width: '300px' }}>
                            <input
                                className="form-control me-1"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-outline-dark"
                                type="submit"
                                style={{ width: '80px' }}
                            >
                                Search
                            </button>
                        </form>

                        <div className="ms-auto d-flex align-items-center">
                            {/* Profile Dropdown */}
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle ms-2" type="button" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    Profile
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="profileDropdown">
                                    <li><Link className="dropdown-item" to="/orders">Orders</Link></li>
                                    <li><Link className="dropdown-item" to="/history">History</Link></li>
                                    <li><Link className="dropdown-item" to="/wallet">Wallet</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><button className="dropdown-item" onClick={() => console.log('Logout')}>Logout</button></li>
                                </ul>
                            </div>

                            {/* Cart Icon */}
                            <Link to="/cart" className="nav-link active ms-2" style={{ color: 'white', textDecoration: 'none' }}>
                                <i className="bi bi-cart"></i>
                                {cartItems.length > 0 && (
                                    <span className="badge bg-primary ms-1">{cartItems.length}</span>
                                )}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
