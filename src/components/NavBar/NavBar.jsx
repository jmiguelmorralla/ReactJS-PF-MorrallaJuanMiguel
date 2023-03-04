import './styles.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <nav className="navbar shadow">
    <div className="container">
      <span className="navbar-brand">
        <img src="/img/logoVitonio.png"alt="Logo Vitonio" className='imagen' />
      </span>
      <li><a href='/'>Inicio</a></li>
      <li><a href='/'>Filosofía</a></li>
      <li><a href='/'>Materiales</a></li>
      <li><a href='/'>Nosotros</a></li>
      <CartWidget className="cartWidget"/>
              
    </div>
    
  </nav>

  );
}

export default NavBar;
