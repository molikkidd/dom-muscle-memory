// TODO Grab all the current elements on the page
const body = document.querySelector('body');
const house = document.querySelector('.house');

// TODO: Add event listener here
// HOUSE IMAGE
const h1 = document.createElement('h1');
      h1.append("HOUSE IMAGE");
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

// THE BEDROOM ONE IMAGE

const bedroomOne = document.querySelector('.bedroom-one');
// <!-- TODO Add h2 using Javascript -->
const bedroomOneHeader = document.createElement('h2');
      bedroomOneHeader.append('BEDROOM ONE');
      bedroomOne.prepend(bedroomOneHeader);

const newImage = document.createElement('img');
      newImage.setAttribute('class', 'bedroom-one__image');
      newImage.setAttribute('src', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lead-image-white-bedroom-veranda-1556661432.jpg?crop=0.748xw:1.00xh;0,0&resize=640:*');
      newImage.setAttribute('style', 'bedroom-one__image');
      newImage.addEventListener('click', () => {
        alert('Bedroom 1');
});
bedroomOne.append(newImage);

// ADDING A BATHROOM IMG 
const bathroom = document.querySelector('.bedroom-one__bathroom');
// <!-- TODO Add h3 using Javascript -->
const h3 = document.createElement('h3');
      h3.append('Bedroom one Bathroom');
      bathroom.append(h3);

// <!-- TODO Add image using javascript -->
const bathroomImg = document.createElement('img');
// <!-- TODO Add class "bedroom-one__image" using Javascript -->
// <!-- TODO Add styling "bedroom-one__image" using Javascript -->
      bathroomImg.setAttribute('class', 'bedroom-one__image');
      bathroomImg.setAttribute('style', 'bedroom-one__image');
      bathroomImg.setAttribute('src', 'https://specials-images.forbesimg.com/imageserve/5ffdfc89a676bc1fa37f33cb/960x0.jpg?fit=scale');

    //   bedroom_two.prepend(image_three);
bathroom.appendChild(bathroomImg);

// ADD BEDROOM 2 
const bedroomTwo = document.querySelector('.bedroom-two');
// <!-- TODO Add h2 using Javascript -->
const bedroomTwoh2 = document.createElement('h2');
      bedroomTwoh2.append('BEDROOM TWO HEADER');
      bedroomTwo.prepend(bedroomTwoh2);

//   <!-- TODO Add image using javascript -->
const bedroomTwoImg = document.createElement('img');
      bedroomTwoImg.setAttribute('class', 'bedroom-two__image');
      bedroomTwoImg.setAttribute('src', 'https://decoholic.org/wp-content/uploads/2019/04/grey-bedroom-design-11.jpg');
      bedroomTwo.append(bedroomTwoImg);
    //   <!-- TODO Add h3 using javascript -->
    //   <!-- TODO Add image using javascript -->
const bedroomTwoBathroom = document.querySelector('.bedroom-two__bathroom')
const bedroomTwoBathroomImg = document.createElement('img');
      bedroomTwoBathroomImg.setAttribute('class', 'bedroom-two__image')
      bedroomTwoBathroomImg.setAttribute('src', 'https://st.hzcdn.com/simgs/pictures/bathrooms/freiberg-drive-master-bathroom-liza-nicole-interiors-img~99c1fead0bf4c4eb_4-8824-1-863f06a.jpg');

      bedroomTwoBathroom.append(bedroomTwoBathroomImg);

// BEDROOM THREE
      
const bedroomThree = document.querySelector('.bedroom-three');
const bedroomThreeH2 = document.createElement('h2');
      bedroomThreeH2.textContent = 'BEDROOM THREE';
      bedroomThree.prepend(bedroomThreeH2);


const bedroomThreeImg = document.createElement('img');
      bedroomThreeImg.setAttribute('class', 'bedroom-three__image');
      bedroomThreeImg.setAttribute('src', 'https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2020/12/iStock-1266155645-bedroom-view.jpg');
      bedroomThree.append(bedroomThreeImg);


// BEDROOM THREE bathroom

const bedroomThreeBathroom = document.querySelector('.bedroom-three__bathroom');
const bedroomThreeBathroomH2 = document.createElement('h3');
      bedroomThreeBathroomH2.textContent = 'BEDROOM THREE BATHROOM';
      bedroomThree.prepend(bedroomThreeBathroomH2);

// BEDROOM BATHROOM THREE IMAGE
const bedroom3bathroomImg = document.createElement('img');
      bedroom3bathroomImg.setAttribute('class', 'bedroom-three__bathroom');
      bedroom3bathroomImg.setAttribute('src', 'https://cdn.styleblueprint.com/wp-content/uploads/2020/08/SB-Memphis-KitchenUnlimited-StyleBlueprint_Bathrooms-1-1-scaled.jpg');
      bedroomThreeBathroom.appendChild(bedroom3bathroomImg);


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