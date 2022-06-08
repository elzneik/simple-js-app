
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
        let pokemonList = document.querySelector(".pokemon-list");
        let listItem = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("pokemon-button");
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

