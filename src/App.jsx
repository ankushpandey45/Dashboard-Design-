import Navbar from "./Common/Navbar";
import "./Common/Dashboard.css";
import Sidenavbar from "./Components/Sidenavbar";
import Icon from "./Components/Icon";
import BarCharts from "./Components/BarCharts";
import Paichart from "./Components/Paichart";
import Timeadmitted from "./Components/Timeadmitted";

function App() {
  return (
    <>
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
            <div className="Timeadmitted-div">
              <Timeadmitted />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
