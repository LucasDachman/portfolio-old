console.log('js in da house');
let libButton = document.getElementById('lib-button');
libButton.addEventListener('click', () => {
    let name1 = document.getElementById('name1').value;
    let location = document.getElementById('location').value;
    let verb = document.getElementById('verb').value;
    let name2 = document.getElementById('name2').value;
    let sport = document.getElementById('sport').value;
    let food = document.getElementById('food').value;
    let drink = document.getElementById('drink').value;
    let time = document.getElementById('time').value;
    let storyDiv = document.getElementById('story');
    storyDiv.innerHTML = /*html*/`
    <p>
        Hello, my name is <em>${name1}</em> and 
        I am from <em>${location}</em>. My hobbies 
        are <em>${verb}</em> with my friend 
        <em>${name2}</em> and playing <em>${sport}</em>. 
        I like to eat <em>${food}</em> and drink 
        <em>${drink}</em> at <em>${time}</em>.
    <p>`
    storyDiv.style.opacity = 1.0;
});