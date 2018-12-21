const cardTemplate = (title, description, image, url="") => {
  const card = /*html*/`
    <a href='${url}' class='work-link'>
      <img src='${image}' class='work-image'>
      <p class='work-description'>${description}</p>
    </a>
    `;
    return card;
}

const populateCards = () => {
  const cards = [
    cardTemplate('Wearable Midi Controller', `A wearable device that
    detects distance and sends the data to any music software.`,
    '../img/wearable-midi.JPG', 
    'https://lucasdachman.github.io/blog/atlas-object/project-2'),
    cardTemplate('Origami Circuit', `Simple origami
    with LEDs.`, './img/Origami-Circuit.gif', 
    'https://lucasdachman.github.io/blog/atlas-object/Origami-Circuit'),
    cardTemplate('Cirkit', `An iOS app that calculates
    resistor values according to color codes.`,'./img/cirkit-logo.png', 
    'https://lucasdachman.github.io/blog/mobile-apps/milestone-4'
    ),
    cardTemplate('Kinetic Typography', `A moving 
    typographic sculpture.`, 
    './img/wakemake.png', 'https://lucasdachman.github.io/blog/typography/wake-make'),
    cardTemplate('Title 4', `A project about 
    things where I used this and that to do 
    it a way that is better because its really
    cool.`, 'https://via.placeholder.com/400x400'),
  ];

  const worksGrid = document.getElementById('works-grid');
  cards.forEach((cardElement) => {
    worksGrid.innerHTML += cardElement;
  });

}


console.log('js in da haus');
populateCards();