import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>WELD MAHAMED</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Create new blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
