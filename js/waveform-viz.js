
// const resolution = 1024;
// const resolution = 512;
const resolution = 256;
// const resolution = 128;
// const resolution = 64;
const waveform = new Tone.Waveform(resolution);
waveform.smoothing = 0.6;
filter.connect(waveform);
let waveformData = {
  labels: new Array(resolution),
  datasets: [{
    label: "Amplitude",
    data: new Array(resolution).fill(0),
    fill: false,
    borderColor: 'rgb(255,255,255)',
    pointRadius: 0,
  }]
};

const waveformChartOptions = {
  maintainAspectRatio: false,
  animation: {
    // easing: 'easeOutQuad',
    // easing: 'easeOutSine',
    easing: 'linear',
    // duration: framerate + 400,
    // duration: 400,
    duration: frameInterval,
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
      // type: 'logarithmic',
      gridLines: {
          display:false,
          drawBorder: false,
          drawTicks: false,
      },
      ticks: {
        display: false,
        min: -1,
        max: 1
      }
    }]
  }
}

const waveformCanvas = document.getElementById('wave-viz').getContext('2d');
const waveformChart = new Chart(waveformCanvas, {
  type: 'line',
  data: waveformData,
  options: waveformChartOptions
});