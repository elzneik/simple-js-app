


// note: The ===== overview ===== information is at the bottom


// --- 5 --- Filter function
function filterItems(pokemonList, query){
    return pokemonList.filter(function(el){
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
    });
}

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

// --- 3 --- Object Keys
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

// --- 6 --- DOM Manipulation
    function addListItem(pokemon){
        let pokemonList  = document.querySelectorAll(".pokemon-list");
        let pokemonListItem = document.createElement("li");
// ??? Question: Is that right, adding the addEventListener to the variable ???
        let button = document.createElement ("button", "addEventListener");
        button.innerText = pokemon.name;
        button.classList.add("buttonstyle");
        pokemonItem.appendChild(button);
        pokemonListItem.appendChild(pokemonItem);
        addEvent(button, pokemon);
    });   
    
// --- 8 --- Stand alone function EventListener
// ??? Question: Why is the parameter pokemon not bold and highlighted???
    function addEvent(button, pokemon){
        button.addEventListener("click", function(pokemon){
            console.log(pokemonRepository.showDetails);
    });

// --- 7 --- Show Details
    function showDetails(pokemon){
        console.log(pokemon)
    }
})();

// --- 4 --- forEach
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});


// ===== Overview =====
// --- 1 --- Create a function expression
    // wrap an IIEF methodology into a variable
    // the function expression holds an array, add function and getAll function
    // add function adds up information, so no return assigned 
// --- 2 --- Function add and getAll
    // Add function led add all data types. Precent it with typeof parameter and conditionals
    // add function used to specify data types added up parameter typeof was assigned 
// --- 3 --- Object Keys
// validate type of data by implementing object keys method to check if parameter are equal to specific keys
// --- 4 --- forEach
    // adapt/conect always the function parameter and not the array name
// --- 5 --- Filter function
    // is a public function
    // allows to find specific pokemon
// --- 6 --- DOM Manipulation
// --- 7 --- Show Details
// --- 8 --- Stand alone function EventListener












