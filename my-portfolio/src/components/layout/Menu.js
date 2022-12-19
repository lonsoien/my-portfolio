import { NavLink } from 'react-bootstrap';

function Menu () {
    return (
        <>
        <label>
        <div className='slide'>
          <h2>MENU</h2>
          <ul>
          <li><NavLink href="/">HOME</NavLink></li>
            <li><NavLink href="/about">ABOUT</NavLink></li>
            <li><NavLink href="/portfolio">PORTFOLIO</NavLink></li>
          </ul>
        </div>
      </label>
      </>
    ); 
}

export default Menu; 