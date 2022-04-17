import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-dark bg-primary">
        <Link to="/Home">
          <button type="button" class="btn btn-info m-2">
            Home
          </button>
        </Link>
        <Link to="/addflat">
          <button type="button" class="btn btn-secondary  m-2 ">
            Add Flats
          </button>
        </Link>
        <Link to="/">
          <button type="button" class="btn btn-danger m-2">
            Logout
          </button>
        </Link>
      </nav>
    </div>
  );
};
