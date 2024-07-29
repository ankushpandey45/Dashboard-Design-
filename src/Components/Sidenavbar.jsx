import { useState } from "react";
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
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      x
      <div className="side-nav">
        <div>
          <button className="btn register_btn">Register Patient +</button>
        </div>
        <div className="btn-div">
          <div className="link-buttons">
            <a
              href="#"
              className={`btn ${activeButton === "patients" ? "active" : ""}`}
              role="button"
              aria-pressed={activeButton === "patients"}
              onClick={() => handleButtonClick("patients")}
            >
              <span className="users-icon">
                <FontAwesomeIcon icon={faUserGroup} />
              </span>
              Patients
            </a>
          </div>
          <div className="link-buttons">
            <a
              href="#"
              className={`btn ${activeButton === "overview" ? "active" : ""}`}
              role="button"
              aria-pressed={activeButton === "overview"}
              onClick={() => handleButtonClick("overview")}
            >
              <span className="users-icon">
                <FontAwesomeIcon icon={faGlobe} />
              </span>
              Overview
            </a>
          </div>
          <div className="link-buttons">
            <a
              href="#"
              className={`btn ${activeButton === "map" ? "active" : ""}`}
              role="button"
              aria-pressed={activeButton === "map"}
              onClick={() => handleButtonClick("map")}
            >
              <span className="users-icon">
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              Map
            </a>
          </div>
          <div className="link-buttons">
            <a
              href="#"
              className={`btn ${
                activeButton === "departments" ? "active" : ""
              }`}
              role="button"
              aria-pressed={activeButton === "departments"}
              onClick={() => handleButtonClick("departments")}
            >
              <span className="users-icon">
                <FontAwesomeIcon icon={faHouse} />
              </span>
              Departments
            </a>
          </div>
          <div className="link-buttons">
            <a
              href="#"
              className={`btn ${activeButton === "doctors" ? "active" : ""}`}
              role="button"
              aria-pressed={activeButton === "doctors"}
              onClick={() => handleButtonClick("doctors")}
            >
              <span className="users-icon">
                <FontAwesomeIcon icon={faUserDoctor} />
              </span>
              Doctors
            </a>
          </div>
          <div className="link-buttons">
            <a
              href="#"
              className={`btn ${activeButton === "history" ? "active" : ""}`}
              role="button"
              aria-pressed={activeButton === "history"}
              onClick={() => handleButtonClick("history")}
            >
              <span className="users-icon">
                <FontAwesomeIcon icon={faClockRotateLeft} />
              </span>
              History
            </a>
          </div>
          <div className="setting-btn">
            <a
              href="#"
              className={`btn ${activeButton === "setting" ? "active" : ""}`}
              role="button"
              aria-pressed={activeButton === "setting"}
              onClick={() => handleButtonClick("setting")}
            >
              <span className="users-icon">
                <FontAwesomeIcon icon={faGear} />
              </span>
              Setting
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenavbar;
