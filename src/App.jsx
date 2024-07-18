import Navbar from "./Common/Navbar";
import "./Common/Dashboard.css";
import Sidenavbar from "./Components/Sidenavbar";
import Icon from "./Components/Icon";
import BarCharts from "./Components/BarCharts";
import Paichart from "./Components/Paichart";
import Timeadmitted from "./Components/Timeadmitted";
import Patientsdivision from "./Components/Patientsdivision";
import MonthlyPatient from "./Components/MonthlyPatient";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <div>
          <Sidenavbar />
        </div>
        <div className="app-container">
          <div className="main-content">
            <Icon />
            <div className="chart-div">
              <BarCharts />
              <div className="Single-paiChart">
                <Paichart />
              </div>
            </div>
            <div className="time-mnth-mainDiv">
              <div className="Time-Division">
                <div className="Timeadmitted-div">
                  <Timeadmitted />
                </div>
                <div className="Division">
                  <Patientsdivision />
                </div>
              </div>
              <div className="Monthly-div">
                <div className="Monthly">
                  <MonthlyPatient />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
