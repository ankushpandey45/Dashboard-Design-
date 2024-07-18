import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartCircleBolt,
  faHouse,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
const Patientsdivision = () => {
  return (
    <div>
      <div className="h2">
        <h6 className="chart-heading">Patients By Division</h6>
        <select className="select"></select>
      </div>
      <div className="div-D">
        <li>
          <FontAwesomeIcon icon={faHouse} />
        </li>
        <li>DIVISION</li>
        <li>Pt.</li>
      </div>
      <div className="div-cardio">
        <li>
          <FontAwesomeIcon icon={faHeartCircleBolt} />
        </li>
        <li>Cardiology</li>
        <p>247</p>
      </div>
      <div className="div-cardio">
        <li>
          <FontAwesomeIcon icon={faBrain} />
        </li>
        <li>Neurology</li>
        <p>74</p>
      </div>
      <div className="div-cardio">
        <li>
          <FontAwesomeIcon icon={faBrain} />
        </li>
        <li>Surgery</li>
        <p>67</p>
      </div>
    </div>
  );
};

export default Patientsdivision;
