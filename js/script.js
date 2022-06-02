let pokemonRepository = (function(){
    let pokemonList = [
        {name: "Bulbasur", height: 1.7, types: ["grass", "poison", "flying", "electric"]},
        {name: "Jigglypuff", height: 0.5, types: ["steel", "poison"]},
        {name: "Pikachu", height: 0.4, types: ["ground", "flying", "steel"]},
        {name: "Victreebel", height: 0.7, types: ["psychic", "fire", "ice", "fairy"]},
        {name: "Starmie", height: 1.1, types: ["dragon", "ghost", "bug", "fire", "ice"]}
    ];

    function add(pokemon){
        pokemonList(pokemon);
    }
    function getAll(){
        return pokemonList;
    }
    return {
        add,
        getAll
    }
})();

// adapt/conect always the function parameter and not the array name
pokemonRepository.getAll().forEach(function(pokemon){
    document.write(pokemon.name +" "+"height is "+ pokemon.height +" m!"); 

    if(pokemon.height >= 1.7) {
        document.write("     - I\`m size L. Wow, that\`s big!"+ "<br>");
    } else if(pokemon.height >=0.5 && pokemon.height <=1.1) {
        document.write("     - I\`m size M. "+ "<br>");
    } else {
        document.write("     - I\`m size S. " + "<br>");
    }
});

