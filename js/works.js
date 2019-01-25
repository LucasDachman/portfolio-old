const cardTemplate = (description, image, url="") => {
  const card = /*html*/`
    <a href='${url}' target='_blank' class='work-link'>
      <img src='${image}' class='work-image'>
      <p class='work-description'>${description}</p>
    </a>
    `;
    return card;
}

const populateCards = () => {
  const cards = [
    cardTemplate(`The Foot Step Sequencer: An interactive music floor.`,
    './img/fss-interaction.png', 
    'https://lucasdachman.github.io/blog/physical-computing/fss'),
    cardTemplate(`A wearable device that
    detects distance and sends the data to any music software.`,
    './img/wearable-midi.JPG', 
    'https://lucasdachman.github.io/blog/atlas-object/project-2'),
    cardTemplate(`An iOS app that does common circuit calculations.`,
    './img/cirkit-logo.png',
    'https://lucasdachman.github.io/blog/mobile-apps/milestone-3'),
    cardTemplate(`An app that calculates
    resistor values according to color codes.`,'./img/resistor-calc.png', 
    'https://lucasdachman.github.io/blog/mobile-apps/p2-milestone-4'),
    cardTemplate(`An exercise to work on CSS techniques.`,
    './img/css-zen.png', 
    'https://creative.colorado.edu/~luda3983/web/projects/zen-garden/index.html'),
    cardTemplate(`A moving typographic sculpture.`, 
    './img/wakemake.png', 'https://lucasdachman.github.io/blog/typography/wake-make'),
    cardTemplate(`Simple origami with LEDs.`, './img/Origami-Circuit.gif', 
    'https://lucasdachman.github.io/blog/atlas-object/Origami-Circuit'),
  ];

  const worksGrid = document.getElementById('works-grid');
  cards.forEach((cardElement) => {
    worksGrid.innerHTML += cardElement;
  });

}


console.log('js in da haus');
populateCards();