// scatter_chart 1
var options = {
  series: [{
    name: "SAMPLE A",
    data: [
      [16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2], [16.4, 0], [16.4, 1.8], [13.6, 0.3], [13.6, 0], [29.9, 0], [27.1, 2.3], [16.4, 0], [13.6, 3.7], [10.9, 5.2], [16.4, 6.5], [10.9, 0], [24.5, 7.1], [10.9, 0], [8.1, 4.7], [19, 0], [21.7, 1.8], [27.1, 0], [24.5, 0], [27.1, 0], [29.9, 1.5], [27.1, 0.8], [22.1, 2]]
  }, {
    name: "SAMPLE B",
    data: [
      [36.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [1.9, 14.4], [1.9, 9], [1.9, 13.2], [1.4, 7], [6.4, 8.8], [3.6, 4.3], [1.6, 10], [9.9, 2], [7.1, 15], [1.4, 0], [3.6, 13.7], [1.9, 15.2], [6.4, 16.5], [0.9, 10], [4.5, 17.1], [10.9, 10], [0.1, 14.7], [9, 10], [12.7, 11.8], [2.1, 10], [2.5, 10], [27.1, 10], [2.9, 11.5], [7.1, 10.8], [2.1, 12]]
  }, {
    name: "SAMPLE C",
    data: [
      [21.7, 3], [23.6, 3.5], [24.6, 3], [29.9, 3], [21.7, 20], [23, 2], [10.9, 3], [28, 4], [27.1, 0.3], [16.4, 4], [13.6, 0], [19, 5], [22.4, 3], [24.5, 3], [32.6, 3], [27.1, 4], [29.6, 6], [31.6, 8], [21.6, 5], [20.9, 4], [22.4, 0], [32.6, 10.3], [29.7, 20.8], [24.5, 0.8], [21.4, 0], [21.7, 6.9], [28.6, 7.7], [15.4, 0], [18.1, 0], [33.4, 0], [16.4, 0]]
  }],
  chart: {
    fontFamily: 'Montserrat, system-ui',
    height: 350,
    type: 'scatter',
    zoom: {
      enabled: true,
      type: 'xy'
    }
  },

  colors: ['rgba(var(--primary),1)','rgba(var(--success),1)','rgba(var(--danger),1)'],
  xaxis: {
    tickAmount: 10,
    labels: {
      formatter: function (val) {
        return parseFloat(val).toFixed(1)

      },
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
      },
    }
  },
  yaxis: {
    tickAmount: 7,
    labels:{
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
      },
    }
  },
  grid: {
    show: true,
    borderColor: 'rgba(var(--dark),.2)',
    strokeDashArray: 2,
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: true
      },
    }
  },
  tooltip: {
    x: {
      show: false,
    },
    style: {
      fontSize: '16px',
    },
  },
};

var chart = new ApexCharts(document.querySelector("#scatter1"), options);
chart.render();



// scatter_chart 3

var options = {
  series: [{
    name: 'Messenger',
    data: [
      [16.4, 5.4],
      [21.7, 4],
      [25.4, 3],
      [19, 2],
      [10.9, 1],
      [13.6, 3.2],
      [10.9, 7],
      [10.9, 8.2],
      [16.4, 4],
      [13.6, 4.3],
      [13.6, 12],
      [29.9, 3],
      [10.9, 5.2],
      [16.4, 6.5],
      [10.9, 8],
      [24.5, 7.1],
      [10.9, 7],
      [8.1, 4.7],
      [19, 10],
      [27.1, 10],
      [24.5, 8],
      [27.1, 3],
      [29.9, 11.5],
      [27.1, 0.8],
      [22.1, 2]
    ]
  }, {
    name: 'Instagram',
    data: [
      [6.4, 5.4],
      [11.7, 4],
      [15.4, 3],
      [9, 2],
      [10.9, 11],
      [20.9, 7],
      [12.9, 8.2],
      [6.4, 14],
      [11.6, 12]
    ]
  }],
  chart: {
    fontFamily: 'Montserrat, system-ui',
    height: 350,
    type: 'scatter',
    animations: {
      enabled: false,
    },
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#FF5E40', '#535AE7'],
  xaxis: {
    tickAmount: 10,
    min: 0,
    max: 40,
    labels:{
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
      },
    }

  },
  yaxis: {
    tickAmount: 7,
    labels:{
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
      },
    }
  },
  markers: {
    size: 20
  },
  fill: {
    type: 'image',
    opacity: 1,
    image: {
      src: ['../assets/images/icons/instagram.png', '../assets/images/icons/messenger.png'],
      width: 40,
      height: 40
    }
  },
  legend: {
    labels: {
      useSeriesColors: true
    },
    markers: {
      customHTML: [
        function () {
          return ''
        }, function () {
          return ''
        }
      ]
    }
  },
  grid: {
    show: true,
    borderColor: 'rgba(var(--dark),.2)',
    strokeDashArray: 2,
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: true
      },
    }
  },
  tooltip: {
    x: {
      show: false,
    },
    style: {
      fontSize: '16px',
    },
  },
};

var chart = new ApexCharts(document.querySelector("#scatter3"), options);
chart.render();
