async function fetchData(){

    try{

        // const pokemonName = document.getElementById("").value.toLowerCase();
        const response = await fetch(`http://api.citybik.es/v2/networks
        `);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data);
        
        //const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("element");
        imgElement.append(data.networks[0].location)

        //imgElement.src = pokemonSprite;
        //imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}

fetchData();
