var Tone = window.Tone;
//  viz
// const resolution = 1024;
// const resolution = 256;
const resolution = 512;
const waveform = new Tone.Analyser('waveform', resolution);
waveform.smoothing = 1;
Tone.Master.connect(waveform);

setInterval(() => {
    const value = waveform.getValue();
    viz.data.datasets[0].data = value;
    viz.update();
}, 20);


var data = {
  labels: new Array(resolution),
  datasets: [{
    label: "Amplitude",
    data: new Array(resolution).fill(0),
    fill: false,
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: 'rgb(51,51,51)',
    pointRadius: 0,
    // lineTension: 0.8,
  }]
};

const options = {
  maintainAspectRatio: false,
  layout: {
    padding: {
      top: 10,
      right: 10,
      bottom: 10,
      left: 40
    }
  },
  legend: {
    display: false,
  },
  tooltips: {
    enabled: false,
  },
  scales: {
    xAxes: [{
      gridLines: {
          display:false,
          drawBorder: false,
          drawTicks: false,
      },
      ticks: {
        display: false
      }
    }],
    yAxes: [{
      gridLines: {
          display:false,
          drawBorder: false,
          drawTicks: false,
      },
      ticks: {
        display: false,
        min: -0.8,
        max: 0.8
      }
    }]
  }
}

const ctx = document.getElementById('viz').getContext('2d');
const viz = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options
});
