var Tone = window.Tone;
const framerate = 60
//  viz
// const resolution = 1024;
// const resolution = 512;
const resolution = 256;
// const resolution = 128;
// const resolution = 64;
// const resolution = 16;
const waveform = new Tone.Analyser('waveform', resolution);
waveform.smoothing = 0.4;
Tone.Master.connect(waveform);

setInterval(() => {
    const value = waveform.getValue();
    viz.data.datasets[0].data = value;
    viz.update();
}, framerate);


var data = {
  labels: new Array(resolution),
  datasets: [{
    label: "Amplitude",
    data: new Array(resolution).fill(0),
    fill: false,
    borderColor: 'rgb(255,255,255)',
    pointRadius: 0,
  }]
};

const options = {
  maintainAspectRatio: false,
  animation: {
    // easing: 'easeOutQuad',
    easing: 'easeOutSine',
    // duration: framerate + 400,
    duration: 400,
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
        min: -1,
        max: 1
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
