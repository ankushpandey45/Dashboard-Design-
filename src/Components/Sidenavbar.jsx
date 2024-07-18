import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faLocationDot,
  faHouse,
  faUserDoctor,
  faGlobe,
  faClockRotateLeft,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
const Sidenavbar = () => {
  return (
    <div>
      <div className="side-nav">
        <div>
          <button className="btn register_btn">Register Patient +</button>
        </div>
        <div className="btn-div">
          <div>
            <p className="d-inline-flex gap-1">
              <a
                href="#"
                className="btn "
                role="button"
                data-bs-toggle="button"
                aria-pressed="true"
              >
                <span className="users-icon">
                  <FontAwesomeIcon icon={faUserGroup} />
                </span>
                Patients
              </a>
            </p>
          </div>
          <div>
            <p className="d-inline-flex gap-1">
              <a href="#" className="btn" role="button" data-bs-toggle="button">
                <span className="users-icon">
                  <FontAwesomeIcon icon={faGlobe} />
                </span>
                Overview
              </a>
            </p>
          </div>
          <div>
            <p className="d-inline-flex gap-1">
              <a href="#" className="btn" role="button" data-bs-toggle="button">
                <span className="users-icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                Map
              </a>
            </p>
          </div>
          <div>
            <p className="d-inline-flex gap-1">
              <a href="#" className="btn" role="button" data-bs-toggle="button">
                <span className="users-icon">
                  <FontAwesomeIcon icon={faHouse} />
                </span>
                Departments
              </a>
            </p>
          </div>
          <div>
            <p className="d-inline-flex gap-1">
              <a href="#" className="btn" role="button" data-bs-toggle="button">
                <span className="users-icon">
                  <FontAwesomeIcon icon={faUserDoctor} />
                </span>
                Doctors
              </a>
            </p>
          </div>
          <div>
            <p className="d-inline-flex gap-1">
              <a href="#" className="btn" role="button" data-bs-toggle="button">
                <span className="users-icon">
                  <FontAwesomeIcon icon={faClockRotateLeft} />
                </span>
                History
              </a>
            </p>
          </div>
          <div className="setting-btn">
            <p className="d-inline-flex gap-1">
              <a href="#" className="btn" role="button" data-bs-toggle="button">
                <span className="users-icon">
                  <FontAwesomeIcon icon={faGear} />
                </span>
                Setting
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenavbar;
