import { Link } from 'react-router-dom';

export const Navbar = () => { 
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">User List</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Create User</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

