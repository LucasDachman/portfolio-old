var Tone = window.Tone;

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