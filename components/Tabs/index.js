// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const parentTab = document.querySelector('.topics')

axios
.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response =>{
    parentTab.appendChild(tabCreator(response.data.topics))
})
    // let topicItems = [];
    // topicItems = tabCreator(response.data.topics.forEach(item => {
    //     topicItems.push(item);
        
//         parentTab.appendChild(tabCreator(topicItems))
//     }))
 .catch(error => {
     console.log('Tab data not returned', error);
// });


function tabCreator(topicArr){
    const mainTab = document.createElement('div');
    mainTab.classList.add('tab');
    
    mainTab.textContent = topicArr
    
    return mainTab;
  }