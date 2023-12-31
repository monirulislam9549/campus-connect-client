import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <nav>
      <div>
        <div className="mx-auto px-2 sm:px-6 lg:px-10 bg-blue-400 relative flex h-16 items-center justify-between ">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* <!--
                  Icon when menu is closed.
      
                  Menu open: "hidden", Menu closed: "block"
                --> */}
              <svg
                onClick={toggleNavbar}
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeWidth="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* <!--
                  Icon when menu is open.
      
                  Menu open: "block", Menu closed: "hidden"
                --> */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeWidth="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <h1 className="block h-8 w-auto  lg:hidden rounded-full">
                CollegeBooker
              </h1>

              <Link>
                <h1 className="text-2xl h-8 w-auto lg:block rounded-full">
                  CollegeBooker
                </h1>
              </Link>
            </div>
            <div className="hidden sm:ml-auto sm:block">
              <ul className="flex space-x-6">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "current" : "default"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/college"
                    className={({ isActive }) =>
                      isActive ? "current" : "default"
                    }
                  >
                    Colleges
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admission"
                    className={({ isActive }) =>
                      isActive ? "current" : "default"
                    }
                  >
                    Admission
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/myCollege"
                    className={({ isActive }) =>
                      isActive ? "current" : "default"
                    }
                  >
                    My College
                  </NavLink>
                </li>
                <li>
                  {user ? (
                    <>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "current" : "default"
                        }
                        onClick={handleLogOut}
                      >
                        Log Out
                      </NavLink>
                    </>
                  ) : (
                    <>
                      <NavLink
                        to="/login"
                        className={({ isActive }) =>
                          isActive ? "current" : "default"
                        }
                      >
                        Login
                      </NavLink>
                    </>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <Link
            to={`/users/${user?.email}`}
            className="flex justify-center items-center ml-6"
          >
            <img
              className="h-12 w-12 rounded-full ring-2 ring-white"
              src={user?.photoURL}
              alt="User Avatar"
            />
            <p className="ml-2 font-medium">{user?.displayName}</p>
          </Link>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className="sm:hidden" id="mobile-menu">
        {isMenuOpen && (
          <ul className="space-y-1 px-2 pb-3 pt-2">
            <li>
              <NavLink
                to="/college"
                className={({ isActive }) => (isActive ? "current" : "default")}
              >
                Colleges
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admission"
                className={({ isActive }) => (isActive ? "current" : "default")}
              >
                Admission
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myCollege"
                className={({ isActive }) => (isActive ? "current" : "default")}
              >
                My College
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "current" : "default")}
              >
                Login
              </NavLink>
            </li>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="" />
              </div>
            </label>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
