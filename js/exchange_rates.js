var data = {
  labels: [
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
  ],
  datasets: [
    {
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "rgba(91,37,245, 1)",
      borderWidth: 4.5,
      data: [10.2, 10, 13, 12, 15, 13, 14.5, 11, 13.5, 13, 11],
    },
  ],
};

var options = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    yAxes: [
      {
        stacked: true,
        gridLines: {
          display: true,
          color: "rgba(91,37,245, 0.03)",
        },
        ticks: {
          maxTicksLimit: 5,
          min: 9,
          max: 16,
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
  },
  elements: {
    point: {
      radius: 0,
    },
  },
};

var ctx = document.getElementById("exchangeRates").getContext("2d");
var myLineChart = new Chart(ctx, {
  type: "line",
  data: data,
  options: options,
});

// Chart.Line('exchangeRates', {
//     type: 'line',
//     options: options,
//     data: data
// });
