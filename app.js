// TODO Grab all the current elements on the page
const body = document.querySelector('body');
const house = document.querySelector('.house');

// TODO: Add event listener here
// THE FIRST IMAGE 
const h1 = document.createElement('h1');
      h1.append("H1 TEXT");
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

// THE SECOND IMAGE

const bedroomOne = document.querySelector('.bedroom-one');
// <!-- TODO Add h2 using Javascript -->
const bedroomOneHeader = document.createElement('h2');
      bedroomOneHeader.append('H2 TEXT');
      bedroomOne.prepend(bedroomOneHeader);

const newImage = document.createElement('img');
      newImage.setAttribute('class', 'bedroom-one__image');
      newImage.setAttribute('src', 'https://ca-times.brightspotcdn.com/dims4/default/6da3fb7/2147483647/strip/true/crop/3200x1800+0+0/resize/840x473!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb6%2Ff3%2Ffb2517b547f5a49d2ad144b8dcfd%2F1-lp.jpg');
      newImage.setAttribute('style', 'bedroom-one__image');
      newImage.addEventListener('click', () => {
        alert('Bedroom 1');
});
bedroomOne.append(newImage);

// ADDING A BATHROOM IMG 
const bathroom = document.querySelector('.bedroom-one__bathroom');
// <!-- TODO Add h3 using Javascript -->
const h3 = document.createElement('h3');
      h3.append('My H3 header');
      bathroom.prepend(h3);

// <!-- TODO Add image using javascript -->
const bathroomImg = document.createElement('img');
// <!-- TODO Add class "bedroom-one__image" using Javascript -->
// <!-- TODO Add styling "bedroom-one__image" using Javascript -->
      bathroomImg.setAttribute('class', 'bedroom-one__image');
      bathroomImg.setAttribute('style', 'bedroom-one__image');
      bathroomImg.setAttribute('src', 'https://specials-images.forbesimg.com/imageserve/5ffdfc89a676bc1fa37f33cb/960x0.jpg?fit=scale');

    //   bedroom_two.prepend(image_three);
bathroom.append(bathroomImg);

// ADD BEDROOM 2 
const bedroomTwo = document.querySelector('.bedroom-two');
// <!-- TODO Add h2 using Javascript -->
const bedroomTwoh2 = document.createElement('h2');
      bedroomTwoh2.append('BEDROOM TWO HEADER');
      bedroomTwo.prepend(bedroomTwoh2);

//   <!-- TODO Add image using javascript -->
const bedroomTwoImg = document.createElement('img');
      bedroomTwoImg.setAttribute('class', 'bedroom-one__image');
      bedroomTwoImg.setAttribute('src', 'https://decoholic.org/wp-content/uploads/2019/04/grey-bedroom-design-11.jpg');
      bedroomTwo.append(bedroomTwoImg);

const bedroomTwoBathroom = document.querySelector('.bedroom-two__bathroom')
const bedroomTwoBathroomImg = document.createElement('img');
      bedroomTwoBathroomImg.setAttribute('class', 'bedroom-two__bathroom')
      bedroomTwoBathroomImg.setAttribute('src', 'https://st.hzcdn.com/simgs/pictures/bathrooms/freiberg-drive-master-bathroom-liza-nicole-interiors-img~99c1fead0bf4c4eb_4-8824-1-863f06a.jpg');

      bedroomTwoBathroom.append(bedroomTwoBathroomImg);
      
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