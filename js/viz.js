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
  labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
  datasets: [{
    label: "Car Speed",
    data: [0, 59, 75, 20, 20, 55, 40],
  }]
};
var ctx = document.getElementById('viz').getContext('2d');
var viz = new Chart(ctx, {
  type: 'line',
  data: data,
});
