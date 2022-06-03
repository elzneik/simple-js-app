let pokemonRepository = (function(){
    let pokemonList = [
        {name: "Bulbasur", height: 1.7, types: ["grass", "poison", "flying", "electric"]},
        {name: "Jigglypuff", height: 0.5, types: ["steel", "poison"]},
        {name: "Pikachu", height: 0.4, types: ["ground", "flying", "steel"]},
        {name: "Victreebel", height: 0.7, types: ["psychic", "fire", "ice", "fairy"]},
        {name: "Starmie", height: 1.1, types: ["dragon", "ghost", "bug", "fire", "ice"]}
    ];

    function add(pokemon){
        pokemonList.add(pokemon);
    }
    function getAll(){
        return pokemonList;
    }
    return {
        add,
        getAll
    }

    function addListItem(pokemon){
        let unorderedList = document.querySelector("pokemon-list");
        let listItem = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add(".pokemon-button");
        listItem.appendChild(button);
        unorderedList.appendChild(listItem);
    }
})();



pokemonRepository.getAll().forEach(function(pokemon){


});

