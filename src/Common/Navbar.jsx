import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
// Import the CSS file for custom styling

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-white">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="d-flex" style={{ flex: 1 }}>
            <form
              className="d-flex justify-content-center mx-auto"
              role="search"
              style={{ flex: 1 }}
            >
              <div className="input-wrapper d-flex">
                <input
                  className="form-control custom-input"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                  style={{ maxWidth: "200px" }}
                />
              </div>
            </form>
          </div>
          <div className=" bell d-flex align-items-center ms-auto">
            <FontAwesomeIcon icon={faBell} className="me-3 " />
            <img
              src="https://cdn.britannica.com/52/252752-050-2E120356/Cricketer-Rohit-Sharma-2023.jpg"
              alt="User Avatar"
              className="rounded-image me-2"
            />
            <h6 className="ms-2">Ankush pandey</h6>
            <select className="select"></select>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
