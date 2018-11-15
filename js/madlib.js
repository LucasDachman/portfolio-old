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
    storyDiv.innerHTML = `Hello, my name is ${name1} and 
    I am from ${location}. My hobbies are ${verb}
    with my friend ${name2} and playing ${sport}. I like
    to eat ${food} and drink ${drink} at ${time}.`
});