var Tone = window.Tone;
const frameInterval = 16
const FFTResolution = 32;
const fftMax = 500
//  viz
const fft = new Tone.FFT(FFTResolution)
Tone.Master.connect(fft);


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

/* Create chart */
const fftCanvas = document.getElementById('fft-viz').getContext('2d');
const fftChart = new Chart(fftCanvas, {
  type: 'bar',
  data: fftData,
  options: fftOptions
})

const animate = () => {
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