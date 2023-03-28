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
        <li><Link to='/category/motricidad-fina' className='link'>Motricidad Fina</Link></li>
        <li><Link to='/category/motricidad-gruesa' className='link'>Motricidad Gruesa</Link></li>
        <li><Link to='/nosotros' className='link'>Nosotros</Link></li>
        <li><Link to='cart'> <CartWidget className="cartWidget"/></Link></li>
                
      </div>
    
      </nav>

  );
}

export default NavBar;
