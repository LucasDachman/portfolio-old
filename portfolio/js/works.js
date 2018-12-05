const cardTemplate = (title, description, image) => {
  const card = /*html*/`
    <a class='work-link'>
      <img src='${image}' class='work-image'>
      <h2 class='work-title'>${title}</h2>
      <p class='work-description'>${description}</p>
    </a>
    `;
    return card;
}

const populateCards = () => {
  const cards = [
    cardTemplate('Title 1', `A project about 
    things where I used this and that to do 
    it a way that is better because its really
    cool.`, 'https://via.placeholder.com/400x400'),
  ];

  const worksGrid = document.getElementById('works-grid');
  cards.forEach((cardElement) => {
    console.log(cardElement);
    worksGrid.innerHTML = cardElement;
  });

}

console.log('js in da haus');
populateCards();