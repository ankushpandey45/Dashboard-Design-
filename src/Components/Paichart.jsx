import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  // Data for the pie chart
  const series = [60, 40]; // 60% Male and 40% Female

  // Options for the pie chart
  const options = {
    chart: {
      width: 380,
      type: "donut",
    },
    colors: ["#8b3bd4", "#F39C12"], // Blue and Orange colors
    dataLabels: {
      enabled: false,
    },
    labels: ["Male", "Female"], // Labels for the pie chart slices
    legend: {
      position: "bottom", // Position the legend at the bottom
      horizontalAlign: "center", // Center align the legend
      offsetY: 10, // Offset from the bottom
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "22px",
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: "16px",
              offsetY: 16,
            },
            total: {
              show: true,
              label: "Total",
              color: "#373d3f",
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => {
                  return a + b;
                }, 0);
              },
            },
          },
        },
      },
    },
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
  };

  return (
    <div>
      <div className="h6">
        <h6 className="chart-heading">Patients by gender</h6>
      </div>
      <div className="chart-wrap2">
        <div className="chart">
          <ReactApexChart
            options={options}
            series={series}
            type="donut"
            width={250}
          />
        </div>
      </div>
    </div>
  );
};

export default ApexChart;
