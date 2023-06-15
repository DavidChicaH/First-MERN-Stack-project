import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();
  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <Link to={isAuthenticated ? "/tasks" : "/"}>
        <h1 className="text-2xl font-bold">Tasks Manager</h1>
      </Link>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li className="mr-5 bg-purple-800 py-4 px-3 rounded-md">
              Welcome {user.username}
            </li>
            <li className="btn">
              <Link to="/add-task">Add Tasks!</Link>
            </li>
            <li className="btn">
              <Link to="/" onClick={logout}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="btn">
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className="btn">
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
