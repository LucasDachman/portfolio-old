var Tone = window.Tone;
const frameInterval = 16
const FFTResolution = 32;
const fftMax = 500
//  viz
// const resolution = 1024;
// const resolution = 512;
const resolution = 256;
// const resolution = 128;
// const resolution = 64;
const waveform = new Tone.Waveform(resolution);
const fft = new Tone.FFT(FFTResolution)
waveform.smoothing = 0.6;
// Tone.Master.connect(waveform);
filter.connect(waveform);
filter.connect(fft);

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

const fftData = {
  labels: new Array(FFTResolution),
  datasets: [{
    label: "Amplitude",
    data: new Array(FFTResolution).fill(0),
    backgroundColor: 'rgb(255,255,255)',
  }]
}

const fftOptions = {
  maintainAspectRatio: false,
  animation: {
    easing: 'easeOutQuad',
    // easing: 'easeOutSine',
    // easing: 'linear',
    duration: frameInterval + 400,
    // duration: 400,
    // duration: frameInterval,
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
        min: 400,
        max: fftMax
      }
    }]
  }
}

/* Create charts */

const waveformCanvas = document.getElementById('wave-viz').getContext('2d');
const waveformChart = new Chart(waveformCanvas, {
  type: 'line',
  data: waveformData,
  options: waveformChartOptions
});

const fftCanvas = document.getElementById('fft-viz').getContext('2d');
const fftChart = new Chart(fftCanvas, {
  type: 'bar',
  data: fftData,
  options: fftOptions
})

const animate = () => {
  // get waveform data
  const waveformValues = waveform.getValue();
  waveformChart.data.datasets[0].data = waveformValues;
  waveformChart.update();
  // get fft data
  const fftValues = fft.getValue();
  fftChart.data.datasets[0].data = fftValues.map(v => fftMax + v);
  fftChart.update();
  // wait for animation frame
  setTimeout(() => {
    requestAnimationFrame(animate);
  }, frameInterval)
}
requestAnimationFrame(animate);