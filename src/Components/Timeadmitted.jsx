import ReactApexChart from "react-apexcharts";

const Timeadmitted = () => {
  // Data for the line chart
  const series = [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ];

  // Options for the line chart
  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      //   text: "Product Trends by Month",
      //   align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  };

  return (
    <div>
      <div className="h6">
        <h6 className="chart-heading">Time Admitted</h6>
        <span style={{ display: "flex" }}>
          <h6 className="chart-heading2">Today</h6>
          <select className="select"></select>
        </span>
      </div>
      <div className="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={230}
          width={750}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Timeadmitted;
