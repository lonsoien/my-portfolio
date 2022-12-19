import { NavLink } from 'react-bootstrap';

function Menu () {
    return (
        <>
        <body>
        <label>
            <input type="checkbox" />
            <div className="toggle">
                <span className="top-line common"></span>
                <span className="middle-line common"></span>
                <span className="bottom-line common"></span>
            </div>
        <div className="slide">
          <h2 className="menu-text">MENU</h2>
          <ul>
          <li><NavLink className="nav" href="/">HOME</NavLink></li>
            <li><NavLink className="nav" href="/about">ABOUT</NavLink></li>
            <li><NavLink className="nav" href="/portfolio">PORTFOLIO</NavLink></li>
            <li><NavLink className="nav" href="/portfolio">BLOG</NavLink></li>
          </ul>
        </div>
      </label>
      </body>
      </>
    ); 
}

export default Menu; 