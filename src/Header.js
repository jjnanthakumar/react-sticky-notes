import logo from "./images/note app logo.png";
import menu from "./images/icons8-xbox-menu-50.png";
import close from "./images/icons8-cancel-48.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import userImg from "./images/icons8-user-48.png";

const Header = ({ user, logout, currentUserFromDb, currentPage }) => {
  const [openMenu, setOpenMenu] = useState(false);
  function handleClick() {
    setOpenMenu((prevState) => !prevState);
  }

  //to close the dropdown after clicking a link
  const hideDropdown = () => {
    setOpenMenu(false);
  };

  return (
    <header>
      {/* desktop header */}
      <div className="w-full bg-[#252525] px-12 lg:px-[100px] fixed top-0 left-0 border-b border-slate-600 sm:flex items-center z-[100] hidden">
        <Link to="/" className="mr-auto">
          <div className="flex items-center gap-[0px] ml-[-10px] cursor-pointer">
            <img alt="logo" src={logo} className="w-16 h-16" />
            <p className="font-dyna text-[1.5rem] text-rose-300 tracking-widest">
              Note app
            </p>
          </div>
        </Link>
        <nav className="w-[65%] flex items-center">
          <div className="flex items-center gap-6 lg:gap-16 mr-auto">
            <Link
              to="/"
              className={`cursor-pointer px-2 py-1 ${
                currentPage === "/" && "bg-rose-400"
              } rounded-md hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300`}
            >
              Home
            </Link>
            <Link
              to="/notes"
              className={`cursor-pointer px-2 py-1 ${
                currentPage === "/notes" && "bg-rose-400"
              } rounded-md hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300`}
            >
              Notes
            </Link>
            <Link
              to="/create"
              className={`cursor-pointer px-2 py-1 ${
                currentPage === "/create" && "bg-rose-400"
              } rounded-md hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300`}
            >
              Create
            </Link>
          </div>
          {!user && (
            <div className="flex">
              <Link to="/login">
                <button className="bg-[#ffab91] font-bold text-[0.90rem] mr-5 px-5 py-1 rounded-md hover:bg-rose-500 hover:translate-y-[6px] transition-all duration-300">
                  Sign In
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-rose-400 font-bold text-[0.90rem] px-5 py-1 rounded-md hover:bg-rose-500 hover:translate-y-[6px] transition-all duration-300">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
          {user && (
            <div className="flex gap-3 items-center">
              <div className="px-5 py-[4px] border-2 border-[#ffab91] rounded-lg flex items-center gap-2">
                <h2 className="">Hi {currentUserFromDb.displayName}</h2>
                <img alt="user" src={userImg} className="w-6 h-6" />
              </div>
              <button
                onClick={logout}
                className="bg-rose-500 font-bold text-[0.90rem] px-5 py-1 rounded-md hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300"
              >
                logout
              </button>
            </div>
          )}
        </nav>
      </div>

      {/* mobile header */}
      <div
        className={`sm:hidden w-full h-[70px] px-5 bg-[#252525] fixed top-0 left-0 z-[100] border-b-[0px] border-b-[#47a3b3] flex justify-between items-center shadow-md`}
      >
        <Link to="/" className="mr-auto">
          <div className="flex items-center gap-[0px] ml-[-10px] cursor-pointer">
            <img alt="logo" src={logo} className="w-16 h-16" />
            <p className="font-dyna text-[1.5rem] text-rose-300 tracking-widest">
              Note app
            </p>
          </div>
        </Link>
        <img
          alt="hamburger"
          src={menu}
          onClick={handleClick}
          className="w-[30px] h-[30px] cursor-pointer"
        />

        {openMenu && (
          <div className="w-full h-[100vh] z-[200] bg-black/80 fixed top-0 left-0">
            <img
              className="w-[35px] h-[35px] cursor-pointer mr-[25px] absolute top-[30px] right-2"
              alt=""
              src={close}
              onClick={handleClick}
            />
            <div
              onClick={handleClick}
              className="w-[35%] h-screen float-left"
            ></div>
            <ul className="slide float-right w-[65%] h-full bg-[#252525] px-[30px] text-[1rem] text-white pt-[100px] text-center">
              {user && (
                <li className="w-[fit-content] my-6 mx-auto flex items-center justify-center gap-2 border-2 border-rose-400 px-2 py-1 rounded-lg">
                  <div className="text-rose-400 font-bold text-[1.25rem]">
                    {currentUserFromDb.displayName}
                  </div>
                  <img alt="user" src={userImg} className="w-8 h-8" />
                </li>
              )}
              <li className="my-4">
                <Link to="/" onClick={hideDropdown}>
                  <div className="w-full">Home</div>
                </Link>
              </li>
              <li className="my-4">
                <Link to="/notes" onClick={hideDropdown}>
                  <div className="w-full">Notes</div>
                </Link>
              </li>
              <li className="my-4">
                <Link to="/create" onClick={hideDropdown}>
                  <div className="w-full">Add New</div>
                </Link>
              </li>
              {!user && (
                <li className="my-4">
                  <Link to="/register" onClick={hideDropdown}>
                    <div className="w-full">Sign Up</div>
                  </Link>
                </li>
              )}
              {!user && (
                <li className="my-4">
                  <Link to="/login" onClick={hideDropdown}>
                    <div className="w-full">Log In</div>
                  </Link>
                </li>
              )}
              {user && (
                <li
                  onClick={() => {
                    logout();
                    hideDropdown();
                  }}
                  className="my-4"
                >
                  <div className="w-full">Log Out</div>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
      {/*mobile header */}
    </header>
  );
};

export default Header;
