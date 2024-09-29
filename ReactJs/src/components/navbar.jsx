import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

function Navbar() {
  const user = useAuthState(auth);
  async function handleLogout() {
    await signOut(auth);
  }
  return (
    <>
      <nav>
        {user[0] === null ? (
          <>
            <h1>Navbar</h1>
          </>
        ) : (
          <>
            <img src={user[0]?.photoURL} alt="image1" width="50" height="50" />
            <h1>{user[0]?.displayName}</h1>
          </>
        )}

        <div className="link">
          <Link to="/" className="nav-item">
            {" "}
            Home
          </Link>
          {user[0] === null ? (
            <>
              <Link to="/login" className="nav-item">
                Login
              </Link>
            </>
          ) : (
            <>
              <button onClick={handleLogout} className="nav-item">
                Logout
              </button>
              <Link to="/product" className="nav-item">
                New product
              </Link>
            </>
          )}

          <Link to="/about" className="nav-item">
            About
          </Link>
          <Link to="/form" className="nav-item">
            Form
          </Link>
          <Link to="/all/product" className="nav-item">
            All Products
          </Link>
          <Link to="/testing" className="nav-item">
            Testing
          </Link>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
