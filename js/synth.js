var Tone = window.Tone;

var playing = false;
const playButton = document.getElementById('play');
const decaySlider = document.getElementsByName('decay')[0];
const chordForm = document.getElementById('chord');
const filterSlider = document.getElementById('filter');

const dm7 = ["F3", "A4", "C4", "D4"];
const am7 = ["C4", "E3", "G4", "A4"];
const asM7 = ["F3", "A4", "A#4", "D4"];

Tone.Transport.bpm = 120;
var chorus = new Tone.Chorus(4, 2.5, 0.5);
var filter = new Tone.Filter(3000, "lowpass");

var polySynth = new Tone.PolySynth();
polySynth.set({
  oscillator: {
    type: 'sawtooth'
  },
  envelope: {
    attack: 0.005,
    decay: 1.5,
    sustain: 0.1,
    release: 1
  }
});
polySynth.chain(filter, chorus, Tone.Master);

var pattern = new Tone.Pattern(function (time, note) {
  polySynth.triggerAttackRelease(note, "8n");
}, dm7);

chordForm.addEventListener('change', (e) => {
  switch(e.target.value) {
    case "dm7":
      pattern.values = dm7;
      break;
    case "am7":
      pattern.values = am7
      break;
    case "asM7":
      pattern.values = asM7;
      break;
  }
});

playButton.addEventListener('click', (e) => {
  if (playing) {
    Tone.Transport.stop()
    playing = false;
    playButton.innerText = 'Play'
    playButton.className = 'btn btn-paused'
  } else {
    Tone.context.resume()
    .then(() => {
      Tone.Transport.start('+0.1')
      playing = true;
      playButton.innerText = 'Stop'
      playButton.className = 'btn btn-playing'
    })
  }
});

decaySlider.addEventListener('input', (e) => {
  let attack = mapRange(e.target.value, 1, 100, .1, .005);
  let decay = mapRange(e.target.value, 1, 100, 0.2, 1.5);
  polySynth.set({
    envelope: {
      attack: attack,
      decay: decay
    }
  })
});

filterSlider.addEventListener('input', (e) => {
  let value = mapRange(e.target.value, 1, 100, 0, 3000);
  console.log(value);
  filter.frequency.value = value;
});

const mapRange = function (val, in_min, in_max, out_min, out_max) {
  return (val - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

//start the part at the beginning of the Transport's timeline
pattern.start(0)
pattern.interval = "16n";
pattern.humanize = false;