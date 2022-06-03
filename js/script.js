


/*
// Bonus Task: Filter
const filterList = pokemonRepository;
const result = filterList.filter(pokemonList.name);
console.log(result);
*/

// --- 1 --- Create a function expression
let pokemonRepository = (function(){
    let pokemonList = [
        {name: "Bulbasur", height: 1.7, types: ["grass", "poison", "flying", "electric"]},
        {name: "Jigglypuff", height: 0.5, types: ["steel", "poison"]},
        {name: "Pikachu", height: 0.4, types: ["ground", "flying", "steel"]},
        {name: "Victreebel", height: 0.7, types: ["psychic", "fire", "ice", "fairy"]},
        {name: "Starmie", height: 1.1, types: ["dragon", "ghost", "bug", "fire", "ice"]}
        ];

// --- 2 --- Function add and getAll
    function add(pokemon){
        if  (
            typeof pokemon === "object" && 
            "name" in pokemon &&
            "height" in pokemon &&
            "types" in pokemon
            ){
            pokemonList(pokemon);
            }
        else{
            console.log("pokemon not found");
            }
    }

// --- 3 --- Object.key to check typeof parameter
    Object.keys(pokemonList).forEach(function(pokemon){
        console.log(pokemonList[pokemon]);
    });

// --- 2 --- Function add and getAll
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
    //document.write(pokemon.name +" "+"height is "+ pokemon.height +" m!"); 
/*
    if(pokemon.height >= 1.7) {
        //document.write("     - I\`m size L. Wow, that\`s big!"+ "<br>");
    } else if(pokemon.height >=0.5 && pokemon.height <=1.1) {
        //document.write("     - I\`m size M. "+ "<br>");
    } else {
        //document.write("     - I\`m size S. " + "<br>");
    }
*/

    let DomManipulatingPractise = document.querySelectorAll(".pokemon-list");

    let listItem = document.createElement("li");
    let button = document.createElement ("button");
    button.innerText = " ";
    //listItem.appendChild(button);


});


// Overview
// --- 1 --- Create a function expression
    // wrap an IIEF methodology into a variable
    // the function expression holds an array, add function and getAll function
    // add function adds up information, so no return assigned 
// --- 2 --- Function add and getAll
    // Add function led add all data types. Precent it with typeof parameter and conditionals
    // add function used to specify data types added up parameter typeof was assigned 
// --- 3 --- Object.key to check typeof parameter








