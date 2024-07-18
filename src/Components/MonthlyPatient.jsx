import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const series = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ];

  const options = {
    chart: {
      height: 230,
      width: 230,
      type: "line",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["#FFFFFF"], // Set spline color to white
    },
    markers: {
      size: 4,
      colors: ["#FFFFFF"], // Set marker color to white
      strokeColors: "#FFFFFF",
      strokeWidth: 2,
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      show: false,
    },
  };

  return (
    <div>
      <div className="single-chart">
        <div  className="patients-data">
          <h2>3,240</h2>
          <p>Patients this month</p>
        </div>
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={230}
          width={220}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
