import ReactApexChart from "react-apexcharts";

const donutSeries = [60, 40];
const donutOptions = {
  chart: {
    width: 400,
    type: "donut",
  },
  dataLabels: {
    enabled: false,
  },
  labels: ["Inpatient", "Outpatient"],
 
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
  legend: {
    position: "right",
    offsetY: 0,
    height: 230,
  },
};


const barSeries = [
  {
    name: "Inpatient",
    data: [70, 80, 75, 60, 90, 100, 85, 95, 80],
  },
  {
    name: "Outpatient",
    data: [30, 45, 50, 40, 60, 55, 65, 70, 50],
  },
];

const barOptions = {
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};

const BarCharts = () => {
  return (
    <div>
      <div className="h6">
        <h6 className="chart-heading">Inpatients vs. Outpatients Trends</h6>
        <span style={{ display: "flex" }}>
          <h6 className="chart-heading">Show by months</h6>
          <select className="select"></select>
        </span>
      </div>
      <div className="charts">
        <div className="chart-wrap" style={{ display: "flex", gap: "100px" }}>
          <div className="bar-chart">
            <ReactApexChart
              options={barOptions}
              series={barSeries}
              type="bar"
              height={250}
              width={400}
            />
          </div>
          <div className="donut-chart">
            <ReactApexChart
              options={donutOptions}
              series={donutSeries}
              type="donut"
              width={250}
              height={550}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarCharts;
