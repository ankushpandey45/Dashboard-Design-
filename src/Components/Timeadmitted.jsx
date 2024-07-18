import ReactApexChart from "react-apexcharts";

const Timeadmitted = () => {
  const series = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ];

  const options = {
    chart: {
      height: 250,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
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
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <div>
      <div className="h8">
        <h6 className="chart-heading">Timeadmitted</h6>
        <span style={{ display: "flex" }}>
          <h6 className="chart-heading">Today</h6>
          <select className="select"></select>
        </span>
      </div>
      <div className="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={240}
          width={493}
        />
      </div>
    </div>
  );
};

export default Timeadmitted;
