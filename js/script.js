
let pokemonRepository = (function(){
    let pokemonList = [];
    let apiUrl ="https://pokeapi.co/api/v2/pokemon/?limit=20";

    function loadList(){
        return fetch(apiUrl).then(function(response){ 
            return response.json(); 
        })
        .then(function(json){ 
            json.results.forEach(function(item){  
                let pokemon = { 
                    name: item.name, 
                    detailsUrl: item.url
                };
                add(pokemon);
                console.log(pokemon);
            });
        })
        .catch(function(e){
            console.error(e);
        });
    }

    function add(pokemon){
        pokemonList.push(pokemon);
    }

    function getAll(){
        return pokemonList;
    }

    // DOM methodology
    function addListItem(pokemon){
        let pokemonList = document.querySelector(".pokemon-list"); 
        let listItem = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add(
            "btn",
            "btn-outline-secondary",
            "d-grid",
            "gap-2",
            "col-6",
            "mx-auto",
        );
        listItem.appendChild(button);

        
        listItem.classList.add("group-list-item");
        pokemonList.appendChild(listItem);
        eventListener(button, pokemon);
    }

    // This function calls the showDetails if a user activates it
    function eventListener (button, pokemon){
        button.addEventListener("click", function(){
            showDetails(pokemon);
        });
    }

    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function () {
            // console.log(item);
            showModal(item);
        });
     }

    // The function loads the pokemon details based on the API link
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        })
        .then(function (details) {
          // Now we add the details to the item
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        })
        .catch(function (e) {
          console.error(e);
        });
      }

    // This is the modal coded with Bootstrap
    function showModal (pokemon) {
        let modalBody = document.querySelector("modal-body");
        let modalTitle = document.querySelector("#pokemonModalTitle");

        modalBody.innerHTML = " ";
        modalTitle.innerHTML = " ";

        let pokemonName = document.createElement("h1");
        pokemonName.innerText = pokemon.Name;

        let modalBody = $(".modal-body");
        let modalTitle = $(".modal-title");
        let modalFooter = $("modal-footer");

        // clear existing content of the modal
        modalTitle.empty();
        modalBody.empty();

        // create a new element for name in modal content
        let nameElement = $("<h1>" + item.name + "</h1>");
        // create a new element for an image
        let imageElementFront = $("<img class="modal-img" style="width:50%">");
        imageElementFront.attr("src", item.imageUrlFront);
        let imageElementBack = $("<img class="modal-img" style="width:50%">");
        imageElementBack.attr("src", item.imageUrlFront);

        // creating an element for the height, weight, type and abilities in modal content
        let heightElement = $("<p>" + "height : " + item.height + "</p>");
        let weightElement = $("<p>" + "weight : " + item.weight + "</p>");
        let typeElement = $("<p>" + "type : " + item.type + "</p>");
        let abilitiesElement = $("<p>" + "abilities : " + item.abilities + "</p>");

        modalTitle.append(nameElement);
        modalBody.append(imageElementFront);
        modalBody.append(imageElementBack);
        modalBody.append(heightElement);
        modalBody.append(weightElement);
        modalBody.append(typeElement);
        modalBody.append(abilitiesElement);
    }

    return {
        add,
        getAll,
        addListItem,
        loadList,
        loadDetails,
        showDetails
    }
})();   // // close function pokemonRepository

    
    pokemonRepository.loadList().then(function(){
        pokemonRepository.getAll().forEach(function(pokemon){
            pokemonRepository.addListItem(pokemon);
    });
});     // // close calls on function pokemonRepository
