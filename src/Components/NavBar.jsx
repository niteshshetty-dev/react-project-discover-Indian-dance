import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="flex px-6 py-4 justify-between bg-black ">
        <h1 className="text-2xl font-bold text-white">Discover Indian Dance</h1>
        <div className="flex gap-6 ">
          <Link
            className="text-white text-xl font-bold hover:text-yellow-600 transition"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-white text-xl font-bold hover:text-yellow-600 transition"
            to="/dances"
          >
            Dances
          </Link>
          <Link
            className="text-white text-xl font-bold hover:text-yellow-600 transition"
            to="/About"
          >
            About
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
