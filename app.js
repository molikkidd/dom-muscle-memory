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
// KITCHEN

const kitchen = document.querySelector('.kitchen');
const kitchenH2 = document.createElement('h2');
      kitchenH2.textContent = 'KITCHEN';
      kitchen.prepend(kitchenH2);

const kitchenImg = document.createElement('img');
      kitchenImg.setAttribute('class', 'kitchen');
      kitchenImg.setAttribute('src', 'https://pro.com/static/43674248941a22dd2833db004b656a65/654ed/db9b1743814c0b7c5838b2338588dcc0d0d46dd3_91st-ave-mercer-island-wa-new-construction-kitchen-3.jpg');
      kitchen.appendChild(kitchenImg);

const kitchenButton = document.createElement('BUTTON');
      kitchenButton.innerHTML = "click ME";
      kitchen.append(kitchenButton);
      

// GUEST BATHROOM 
const guest = document.querySelector('.bathroom-guest');
const guestH2 = document.createElement('h2');
      guestH2.textContent = 'Guest Bedroom';
      guest.prepend(guestH2);

const guestImg = document.createElement('img');
      guestImg.setAttribute('class', 'guest_img');
      guestImg.setAttribute('src', 'https://www.mrdirectint.com/media/blog/post/tips-for-preparing-your-guest-room-and-guest-bathroom-for-overnight-guests.png');
      guest.append(guestImg);

const description = document.createElement('p');
      description.textContent = 'This is a brief description of the guest bathroom';
      guest.append(description);

const bathroomButton = document.createElement('BUTTON');
      bathroomButton.innerHTML = 'PRESS FOR AIR FRESHENER';
      guest.append(bathroomButton);


// LIVINGROOM
const livingRoom = document.querySelector('.living-room');
      livingRoomH2 = document.createElement('h2');
      livingRoomH2.textContent = 'LIVING ROOM';
      livingRoom.prepend(livingRoomH2);

const livingRoomImg = document.createElement('img');
      livingRoomImg.setAttribute('class', 'living-room');
      livingRoomImg.setAttribute('src','https://sebringdesignbuild.com/wp-content/uploads/2020/04/white-living-room-decor-ideas-0-1024x481.jpg?x66156');
      livingRoom.append(livingRoomImg);

const livingRoomDes = document.createElement('p');
      livingRoomDes.textContent = 'This living is the best place to chill.';
      livingRoom.append(livingRoomDes);



// DINING ROOM

const diningRoom = document.querySelector('.dining-room');
      diningRoomH2 = document.createElement('h2');
      diningRoomH2.textContent = 'DINING ROOM';
      diningRoom.prepend(diningRoomH2);

const diningRoomImg = document.createElement('img');
      diningRoomImg.setAttribute('class', 'living-room');
      diningRoomImg.setAttribute('src','https://www.mydomaine.com/thmb/9Q5DhDXpBubVeata7Kxb3ipTb_A=/1900x1308/filters:fill(auto,1)/DesignedbyEmilyHendersonDesign_PhotobySaraTramp_8-10c43b6e9b6a4f529313664f218e5721.jpg');
      diningRoom.append(diningRoomImg);

const diningRoomDes = document.createElement('p');
      diningRoomDes.textContent = 'How many people you know eat at the dinner table?.';
      diningRoom.append(diningRoomDes);



// GARAGE

const garage = document.querySelector('.garage');
      garageH2 = document.createElement('h2');
      garageH2.textContent = 'GARAGE';
      garage.prepend(garageH2);

const garageImg = document.querySelector('.garage__image');
      garageImg.setAttribute('class', 'garage');
      garageImg.setAttribute('src','https://static2.mansionglobal.com/production/media/article-images/4b9af2424c2328bf3782855a87fef473/large_B3-EN112_Garage_IM_20190717123019.jpg');
      garage.append(garageImg);


const garageDes = document.createElement('p');
      garageDes.textContent = 'This is how a garage should look';
      garage.append(garageDes);




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