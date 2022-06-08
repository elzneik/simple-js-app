
// IIFE function; variable pokemonList holding the pokemon array.
// This array will be filled through the function add.
// The add function owns specific parameter which only accept the right data.
// The variable apiUrl holds the API link to the pokemon list.
// The API link will later be use as a promise in the function loadList by using the function fetch.
let pokemonRepository = (function(){
    let pokemonList = [];
    let apiUrl ="https://pokeapi.co/api/v2/pokemon/?limit=20";

// The loadList function holds the promise.
// The then function holds the (result =) json parameter holds a conditional forEach and calls
// The catch function shows the error in any case and a call
// The function does use the promise chaining methodology
    function loadList(){
        return fetch(apiUrl).then(function(response){
            return response.json();
        }).then(function(json){
            json.results.forEach(function(item){
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                console.log(pokemon);
            });
        }).catch(function(e){
            console.error(e);
        });
    }

// The add function holds the information that are the acceptance spefifications for the array access
    function add(pokemon){
        if(
            typeof pokemon === "object" &&
            "name" in pokemon &&
            "detailsUrl" in pokemon
        ) {
        pokemonList.push(pokemon);
    } else {
        console.log("pokemon is not correct");
    }
    }

// The function getAll gets all pokemon that are asked for, in this case 20
// The return function adds the pokemon into the array
    function getAll(){
        return pokemonList;
    }

// The addListItem function uses the DOM methodology.
// The DOM methodology uses html class links. In this case .pokemon-list
// After the connection (via class name) is implemented new elements were created. 
// A new class name was added to the <ol> list (Question: for what?)
    function addListItem(pokemon){
        let pokemonList = document.querySelector(".pokemon-list"); // this is a class in HTML
        let listItem = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("pokemon-button"); // this is a class in CSS
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        eventListener(button, pokemon);
    }

// The eventListener funciton holds two parameters.
// The button paramerter executes the event listener by a click.
// The function after the click written in the code block is a call of showDetails.
    function eventListener (button, pokemon){
        button.addEventListener("click", function(){
            showDetails(pokemon);
        });
    }

// The function showDetails calls the functin loadDetails.
// The function loadDetails holds the item informationi for each pokemon
// The item information are provided in the JS API
    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function () {
            console.log(item);
        });
     }

// The function loadDetails holds one parameter.
// The variable url is item.detailsURL ----> I do not know why item.detailsURL???
// This code is tricky to understand for me!!! 
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          // Now we add the details to the item
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        }).catch(function (e) {
          console.error(e);
        });
      }

// For each function given there is a necessary return which is information
// Closing the IIFE
    return {
        add,
        getAll,
        addListItem,
        loadList,
        loadDetails,
        showDetails
    }

   

})();

// These are the programm calls.
// First loadList of pokemon from API
// Then execute to get all pokemons as required
// And execute for Each pokemon an new list if required
pokemonRepository.loadList().then(function(){
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
});

// This section belongs to the Modal implementation
// The function in connection with CSS hide #modal-container rules show by click the modal
// Enable a specific title and content that should be shown on the modal 
function showModal() {
    // Select the id modal-container from HTML
    // Add a new class to the div tag
    let modalContainer = document.querySelector("#modal-container");
   
    // Clear all existing modal content
    modalContainer.innerHTML =" ";
    // Creating new tag with DOM methodology wrapped in a variable
    // Afterwards add a class to the new tag
    let modal = document.createElement("div")
    modal.classList.add("modal");

    // Add the new modal content
    // First Button, Second Headline, Third paragraph
    let closeButtonElement = document.createElement("button");
    closeButtonElement.classList.add("modal-close");
    closeButtonElement.innterText = "Close";
    closeButtonElement.addEventListener("click", hideModal);
    let titleElement = document.createElement("h1");
    titleElement.innterText = "title"; // Do I need the quotes or not?!?! why not??
    let contentElement = document.createElement("p");
    contentElement.innterText = "text"; // Do I need the quotes or not?!?! why not??

    // Now we execute that the button, h1 and p become a child of the modal tag
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    // Now we have to say that the modal tag belongs to the modal-container div which is written in html
    modalContainer.appendChild(modal);

    // now the modal will be shown after you click on the button show modal
    modalContainer.classList.add("is-visible"); // do I need this line at the end of the function yea or no?!!

    // This function represents to hide the modal after clicking on x, space or using the key ESC
    // Now the three options need to be wired up
    function modalContainer() {
        let hideModal = document.querySelector("#modal-container");
        hideModal.classList.remove("is-visible");
    }
    
// The Close button function is added to the showDetails using the hideModal variable
// The Esc scenario is shown in the function below
// 

}

// call & add event listener
// add the contecnt to the showModal function that should be shown after the users click
document.querySelector("#show-modal").addEventListener("click", () => {
    showModal("Modal title", "This is the modal content!");
});


// Question 1: After I added the "modal title" and "this is the modal content" the code is broken
// --> the modal is visible after the click on the button but not the title and text
// --> also the close button is not visible

