var Tone = window.Tone;
/*
//  viz
const resolution = 128;
// const resolution = 1024;
const meter = document.getElementById('meter');
const viz = document.getElementById('viz');
const waveform = new Tone.Analyser('waveform', resolution);
waveform.smoothing = 1;
Tone.Master.connect(waveform);

for (let i = 0; i < resolution; i++) {
  viz.innerHTML += `<div class='meter-slice' id='slice-${i}'>`;
}
const slices = document.getElementsByClassName('meter-slice');

setInterval(() => {
    const value = waveform.getValue();
    value.forEach((amplitude, index) => {
      amplitude += 1;
      amplitude *= 50;
      amplitude = Math.floor(amplitude);
      let slice = slices[index];
      slice.style.height = `${amplitude}%`;
    });
    console.log("Waveform: ", value);
}, 20);
*/
var data = {
  labels: new Array(7),
  datasets: [{
    label: "Amplitude",
    data: [0, 59, 75, 20, 20, 55, 40],
    fill: false,
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: 'rgb(51,51,51)',
    pointRadius: 0
  }]
};

const axes = {
  gridLines: {
      display:false,
      drawBorder: false,
      drawTicks: false,
  },
  ticks: {
    display: false
  }
}

const options = {
  layout: {
    padding: {
      top: 10,
      right: 40,
      bottom: 10,
      left: 10
    }
  },
  legend: {
    display: false,
  },
  tooltips: {
    enabled: false,
  },
  scales: {
    xAxes: [
      axes
    ],
    yAxes: [
      axes
    ]
  }
}

const ctx = document.getElementById('viz').getContext('2d');
const viz = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options
});
