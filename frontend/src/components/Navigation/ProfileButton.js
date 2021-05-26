import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { Link } from "react-router-dom";
function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <div className="navigation">
      <button onClick={openMenu} className="nav-buttons font">
        <i class="fas fa-user-ninja"></i>
      </button>
      {showMenu && (
        <ul className="profile-dropdown drop-down">
          <li className="drop-down">{user.username}</li>
          <li className="drop-down">{user.email}</li>
          <li>
            <Link to={`/profile/${user.id}`}><button className='nav-buttons'>Profile</button></Link>
          </li>
          <li>
            <button onClick={logout} className="nav-buttons">
              Log Out
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;
