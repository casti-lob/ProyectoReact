import React from 'react';
import{Link} from 'react-router-dom';
function NavbarExam() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
           <div>
            <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tasksList">List</Link></li>
                <li><Link to="/tasksAdd">Añadir</Link></li>
                <li><Link to="/delete">Añadir</Link></li>
            </ul>
            </nav>
            
            </div>
        </nav>
      );
}
    
    export default NavbarExam;