const cardTemplate = (title, description, image, url="") => {
  const card = /*html*/`
    <a href='${url}' class='work-link'>
      <h2 class='work-title'>${title}</h2>
      <img src='${image}' class='work-image'>
      <p class='work-description'>${description}</p>
    </a>
    `;
    return card;
}

const populateCards = () => {
  const cards = [
    cardTemplate('Origami Circuit', `Simple origami
    with LEDs.`, './img/Origami-Circuit.gif', 
    'https://lucasdachman.github.io/blog/atlas-object/Origami-Circuit'),
    cardTemplate('Cirkit', `An iOS app that calculates
    resistor values according to color codes.`,'./img/cirkit-logo.png', 
    'https://lucasdachman.github.io/blog/mobile-apps/milestone-4'
    ),
    cardTemplate('Title 3', `A project about 
    things where I used this and that to do 
    it a way that is better because its really
    cool.`, 'https://via.placeholder.com/400x400'),
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