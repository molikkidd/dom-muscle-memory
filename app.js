// TODO Grab all the current elements on the page
const body = document.querySelector('body');
const house = document.querySelector('.house');

// TODO: Add event listener here
const h1 = document.createElement('h1');
      h1.append("Some text");
      house.prepend(h1);
      h1.setAttribute('class', 'house__title');

house.addEventListener('mouseover', () => {
   
    console.log('I am currently hovering over the container element');

    
});



function createNewTextElement(tagName, text) {
    const newElement = document.createElement(tagName);
    newElement.textContent = text;  
    return newElement;
}

const bedroomOne = document.querySelector('.bedroom-one');
const bedroomOneHeader = document.createElement('h2');
      bedroomOneHeader.append('this is my h2 text');

    console.log(bedroomOneHeader);
bedroomOne.prepend(bedroomOneHeader);
const newImage = document.createElement('img');
newImage.setAttribute('class', 'bedroom-one__image');
newImage.setAttribute('src', 'https://ca-times.brightspotcdn.com/dims4/default/6da3fb7/2147483647/strip/true/crop/3200x1800+0+0/resize/840x473!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb6%2Ff3%2Ffb2517b547f5a49d2ad144b8dcfd%2F1-lp.jpg');
newImage.setAttribute('style', 'bedroom-one__image');
newImage.addEventListener('click', () => {
    alert('Bedroom 1');
});
bedroomOne.append(newImage)

const h3 = document.createElement('h3');
h3.append('txt for h3');
h3.setAttribute('class', 'bedroom-one__bathroom');
h3.setAttribute('style', 'bedroom-one__bathroom');


const houseImage = document.querySelector('.house__image');
houseImage.addEventListener('click', () => {
    alert('Welcome to my house!');
});

house.addEventListener('mouseover', () => {
    bedroomOne.style.backgroundColor = 'red';
    console.log('I am currently hovering over the container element');
});

house.addEventListener('mouseout', () => {
    bedroomOne.style.backgroundColor = 'white';
    console.log('I am NOT currently hovering over the container element');
});