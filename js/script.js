let pokemonRepository = (function(){
    let pokemonList = [];
    let apiURL ="https://pokeapi.co/api/v2/pokemon/?limit=20";

    function add(pokemon){
        if(
            typeof pokemon === "object" &&
            "name" in pokemon &&
            "url" in pokemon
        ) {
        pokemonList.push(pokemon);
    } else {
        console.log("pokemon is not correct");
    }
    }

    function getAll(){
        return pokemonList;
    }
    function addListItem(pokemon){
        let /*unorderedList*/ pokemonList = document.querySelector(".pokemon-list");
        let listItem = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("pokemon-button");
        listItem.appendChild(button);
        /*unorderedList*/ pokemonList.appendChild(listItem);
        eventListener(button, pokemon);
        //button.addEventListener("click", function(event){
        //    showDetails(pokemon);
        //});
    }

    //function showDetails(pokemon){
    //    console.log(pokemon);
    //}

    function eventListener (button, pokemon){
        button.addEventListener("click", function(){
            showDetails(pokemon)
        });
    }

    function loadList(){
        return fetch(apiURL).then(function(response){
            return response.json();
        }).then(function(json){
            json.result.forEach(function(item){
                let pokemon = {
                    name: item.name,
                    detailsURL: item.url
                };
                add(pokemon);
            });
        }).catch(function(e){
            console.error(e);
        });
    }

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

      function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
          console.log(pokemon);
        });
      }

    return {
        add,
        getAll,
        addListItem,
        loadList,
        loadDetails
    }
})();

pokemonRepository.loadList().then(function(){
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
});

