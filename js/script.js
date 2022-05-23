let pokemonList = [
    {name: `Bulbasur`, height: 0.7, types: [`grass`, `poison`, `flying`, `electric`]},
    {name: `Jigglypuff`, height: 0.5, types: [`steel`, `poison`]},
    {name: `Pikachu`, height: 0.4, types: [`ground`, `flying`, `steel`]},
    {name: `Victreebel`, height: 0.7, types: [`psychic`, `fire`, `ice`, `fairy`]},
    {name: `Starmie`, height: 1.1, types: [`dragon`, `ghost`, `bug`, `fire`, `ice`]}
];

// Always add [i] behind the object variable.
// Be aware of the ; - where to add them and wehre not
// Set the loop parantheses to the end when adding conditinal sentences to a loop.
for (let i=0; i<pokemonList.length; i++){
    document.write(pokemonList[i].name +` `+`height is `+ pokemonList[i].height +` cm!`); 

    if(pokemonList[i].height >= 1.7) {
        document.write(`     - I\`m size L. Wow, that\`s big!`+ `<br>`);
    } else if(pokemonList[i].height >=0.5 && pokemonList[i].height <=1.1) {
        document.write(`     - I\`m size M. `+ `<br>`);
    } else {
        document.write(`     - I\`m size S. ` + `<br>`);
    }
}

