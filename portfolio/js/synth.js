// var Tone = window.Tone;
var Tone = window.Tone;

Tone.Transport.bpm = 120;

var polySynth = new Tone.PolySynth().toMaster()
polySynth.set({
  oscillator: {
    type: 'sawtooth'
  },
  envelope: {
    attack: 0.005,
    decay: 0.08,
    sustain: 0.01,
    release: 1
  }

})

var pattern = new Tone.Pattern(function (time, note) {
  polySynth.triggerAttackRelease(note, "8n");
}, ["F3", "A4", "C4", "D4"]);

//start the part at the beginning of the Transport's timeline
pattern.start(0)
pattern.interval = "16n";


const playButton = document.getElementsByName('play')[0];
const decaySlider = document.getElementsByName('decay')[0];

playButton.addEventListener('change', (e) => {
  if (e.target.checked) {
    Tone.Transport.start('+0.1')
  } else {
    Tone.Transport.stop()
  }
});

decaySlider.addEventListener('input', (e) => {
  let val = mapRange(e.target.value, 1, 100, 0.1, 1.5);
  console.log(val);
  polySynth.set({
    envelope: {decay: val}

  })
});

const mapRange = function (val, in_min, in_max, out_min, out_max) {
  return (val - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}