import React from 'react';
import{Link} from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Museos
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/museumList">Lista de museos</Link></li>
                <li><Link className="dropdown-item" to="/museumAdd">Crear museo</Link></li>

              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Usuarios
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/userList">Lista de usuarios</Link></li>
                <li><Link className="dropdown-item" to="/userAdd">Crear un usuario</Link></li>
                <li><Link className="dropdown-item" to="/login">Login</Link></li>
              </ul>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;