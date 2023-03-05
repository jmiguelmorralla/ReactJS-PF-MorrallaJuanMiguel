import './styles.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar shadow">
    <div className="container">
      <span className="navbar-brand">
      <Link to={"/"}>
        <img src="/img/logoVitonio.png"alt="Logo Vitonio" className='imagen' />
      </Link>  
      </span>
      <li><Link to='/' className='link'>Inicio</Link></li>
      <li><Link to='/filosofia' className='link'>Filosofía</Link></li>
      <li><Link to='/materiales' className='link'>Materiales</Link></li>
      <li><Link to='/nosotros' className='link'>Nosotros</Link></li>
      <CartWidget className="cartWidget"/>
              
    </div>
    
  </nav>

  );
}

export default NavBar;
