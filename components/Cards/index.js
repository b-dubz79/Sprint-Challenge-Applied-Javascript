// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response);
})


const cardParent = document.querySelector('.cards-container')

function createArticleCard(personObj){
  
const mainCard = document.createElement('div');
const mainHeadline = document.createElement('div');
const mainAuthor = document.createElmement('div');
const imgContainer = document.createElement('div');
const authorImg = document.createElement('img')
const authorName = document.createElement('span')
    
mainCard.appendChild(mainHeadline);
mainCard.appendChild(mainAuthor);
mainAuthor.appendChild(imgContainer);
imgContainer.appendChild(authorImg);
mainAuthor.appendChild(authorName);

mainCard.classList.add('card');
mainHeadline.classList.add('headline');
mainAuthor.classList.add('author');
imgContainer.classList.add('img-container');



}