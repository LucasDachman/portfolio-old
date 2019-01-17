var Tone = window.Tone;

var playing = false;
const playButton = document.getElementById('play');
const tempoSlider = document.getElementById('tempo');
const decaySlider = document.getElementsByName('decay')[0];
const filterSlider = document.getElementById('filter');
const noteButtons = document.getElementsByClassName('note-btn')

const minDecay = 1.5;
const maxDecay = 0.2;
const minAttack = 0.005;
const maxAttack = 0.3;

const scale = ['D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C#5', 'D5'];

Tone.Transport.bpm.value = tempoSlider.value;
var chorus = new Tone.Chorus(4, 2.5, 0.5);
var filter = new Tone.Filter(3000, "lowpass");

var polySynth = new Tone.PolySynth();
polySynth.set({
  oscillator: {
    type: 'sawtooth'
  },
  envelope: {
    attack: minAttack,
    decay: minDecay,
    sustain: 0.1,
    release: new Tone.TimeBase("4n").valueOf()
  }
});
polySynth.chain(filter, chorus, Tone.Master);

var pattern = new Tone.Pattern(function (time, note) {
  polySynth.triggerAttackRelease(note, "8n", time);
  Tone.Draw.schedule(function(){
    const button = document.getElementById(note);
    button && button.classList.add('note-btn-playing')
	}, time) //use AudioContext time of the event
  Tone.Draw.schedule(function(){
    const button = document.getElementById(note);
    button && button.classList.remove('note-btn-playing')
	}, Tone.Time(time) + Tone.Time('8n') ) //use AudioContext time of the event
}, []);

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

tempoSlider.addEventListener('input', (e) => {
  Tone.Transport.bpm.rampTo(e.target.value, 0.01);
});

decaySlider.addEventListener('input', (e) => {
  let attack = mapRange(e.target.value, 1, 100, minAttack, maxAttack);
  let decay = mapRange(e.target.value, 1, 100, minDecay, maxDecay);
  polySynth.set({
    envelope: {
      attack: attack,
      decay: decay
    }
  })
});

filterSlider.addEventListener('input', (e) => {
  let value = mapRange(e.target.value, 1, 100, 0, 3000);
  filter.frequency.value = value;
});

function onChordChange(element, index) {
  // toggle element style
  if (element.classList.contains('note-btn-on')) {
    element.className = 'note-btn note-btn-off'
  } else {
    element.className = 'note-btn note-btn-on'
  }
  // change chord array
  setPattern();
}

const setPattern = () => {
  let chord = scale.filter((_, index) => {
    return noteButtons[index].classList.contains('note-btn-on');
  })
  pattern.values = chord;
}

const mapRange = function (val, in_min, in_max, out_min, out_max) {
  return (val - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

for(let i = 0; i < noteButtons.length; i++) {
  noteButtons[i].id = scale[i];
}

setPattern();
pattern.start(0)
pattern.interval = "16n";
pattern.humanize = false;

