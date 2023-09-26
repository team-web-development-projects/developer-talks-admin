import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const isAdminLoggedIn = localStorage.getItem("admin");
  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate('/login');
    // You can also perform additional logout-related tasks here if needed
  };

  const handleHomeClick = () => {
    if (isAdminLoggedIn) {
      navigate("/home/main");
    } else {
      window.alert("로그인해주세요");
    }
  };

  const handleUserClick = () => {
    if (isAdminLoggedIn) {
      navigate("/home/users");
    } else {
      window.alert("로그인해주세요");
    }
  };

  return (
    <>
      <div className="bg-blue-500 p-4 flex gap-10">
        <h1 className="text-white text-2xl font-bold">Developer-Talk</h1>
        <Button variant="primary" type="button" className="text-white text-2xl font-bold" onClick={handleHomeClick}>
          HOME
        </Button>
        {isAdminLoggedIn ? (
          <Button
            variant="primary"
            type="button"
            className="text-white text-2xl font-bold"
            onClick={handleLogout}
          >
            LOGOUT
          </Button>
        ) : (
          <Link to="/login">
            <Button variant="primary" type="button" className="text-white text-2xl font-bold">
              LOGIN
            </Button>
          </Link>
        )}
      </div>
      <div className="w-392px h-267px">
        <div className="w-392px h-267px absolute left-[-234.5px] top-[-175.5px] bg-#d9d9d9" />
        <div className="w-119px h-103px absolute left-[-97.5px] top-[-98.5px] bg-#e65e5e" />
      </div>
    </>
  );
}

export default Header;
