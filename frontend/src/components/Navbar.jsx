import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="logo">
          &lt;Indevmand<span>/</span>&gt;
        </Link>
        <nav className="nav-links">
          <NavLink to="/browse">Browse developers</NavLink>
          <NavLink to="/">How it works</NavLink>
        </nav>
        <div className="nav-actions">
          {user ? (
            <>
              <Link to="/dashboard" className="btn btn-secondary">
                My profile
              </Link>
              <button className="btn btn-secondary" onClick={handleLogout}>
                Log out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-secondary">
                Log in
              </Link>
              <Link to="/signup" className="btn btn-primary">
                Join as a developer
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
