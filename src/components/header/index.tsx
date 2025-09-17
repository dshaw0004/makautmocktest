import { Link } from "react-router";
import { useLocation } from "react-router";
import { ThemeToggleButton } from "../theme-toggle-button";

export default function Header() {
  const location = useLocation();
  const currentPage = location.pathname || "home";
  const availablePages = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Features",
      path: "/#features",
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
    {
      name: "Contact",
      path: "contact",
    },
  ];
  return (
    <header>
      <nav className="bg-white dark:bg-gray-900 shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-[#ff5500] to-[#ff9944] rounded-lg flex items-center justify-center">
                  <i className="fas fa-brain text-white text-lg">AEP</i>
                </div>
                <span className="ml-3 text-xl font-bold text-gray-800 dark:text-white">
                  AI Exam Prep
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {availablePages.map((page) => (
                  <a
                    key={page.name}
                    href={page.path}
                    className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors ${currentPage === page.path ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400" : ""}`}
                  >
                    {page.name}
                  </a>
                ))}
                <div className="flex items-center space-x-4">
                  <ThemeToggleButton />
                  <button className="bg-[#ff9944] hover:bg-[#ff7722] text-white px-6 py-2 rounded-lg font-medium transition-all transform hover:scale-105">
                    <Link to={"/home"}>Sign In</Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggleButton />
              <button className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
