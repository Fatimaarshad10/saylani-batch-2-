import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navbarItem = [
    { id: 1, name: 'Register', link: '/register' },
    { id: 2, name: 'Login', link: '/login' },
  ];
  const logout = [
  
    { id: 1, name: 'Dashboard', link: '/dashboard' },
    { id: 2, name: 'Logout', link: '/' },
  ];

  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/login'); 
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/" className="block py-2 px-3 text-white md:p-0">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-3 text-white md:p-0">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 px-3 text-white md:p-0">
                Contact
              </Link>
            </li>
            {!token ? (
              <>
                {navbarItem?.map((data, key) => (
                  <li key={key}>
                    <Link to={data.link} className="block py-2 px-3 text-white md:p-0">
                      {data.name}
                    </Link>
                  </li>
                ))}
              </>
            ) : (
              <>
                {logout?.map((data, key) => (
                  <li key={key}>
                    {data.name === 'Logout' ? (
                      <button
                        onClick={handleLogout}
                        className="block py-2 px-3 text-white md:p-0 bg-transparent border-none cursor-pointer"
                      >
                        Logout
                      </button>
                    ) : (
                      <Link to={data.link} className="block py-2 px-3 text-white md:p-0">
                        {data.name}
                      </Link>
                    )}
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
