let pokemonRepository = (function(){
    let pokemonList = [ ];
    
    function add(pokemon){
        pokemonList.add(pokemon);
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
    }
    function showDetails(pokemon){
        console.log(pokemon);
    }
    function eventListener (button, pokemon){
        button.addEventListener("click", function(){
            showDetails(pokemon)
        });
    }
    return {
        add,
        getAll,
        addListItem
    }
})();

pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
});

