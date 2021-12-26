import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../auth/firebase-config";
const Navbar = () => {
  let navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const signOutFunc = async () => {
    await signOut(auth);
    navigate("/");
  };
  return (
    <nav className="nav">
      <h2>
        Movie <span>DataBase</span>
      </h2>

      <div className="buttons">
        {currentUser ? (
          <h3 className="current-user">{currentUser.displayName}</h3>
        ) : (
          <button onClick={() => navigate("/login")}>Login</button>
        )}
        {currentUser ? (
          <button onClick={() => signOutFunc()} type="button">
            Logout
          </button>
        ) : (
          <button onClick={() => navigate("/register")}>Register</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
