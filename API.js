let allNetworks = [];

async function fetchData() {
    try {
        const response = await fetch('https://api.citybik.es/v2/networks');
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        return data.networks; 
    } catch (error) {
        console.error(error);
    }
}

async function populateCountrySelect() {
    allNetworks = await fetchData(); 
    const countrySelect = document.getElementById('countrySelect');

    countrySelect.innerHTML = '';

    const countries = [...new Set(allNetworks.map(network => network.location.country))];

    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country; 
        countrySelect.appendChild(option); 
    });

    displayNetworks(allNetworks); 
}

function displayNetworks(networks) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; 

    if (networks.length > 0) {
        networks.forEach(network => {
            const networkInfo = document.createElement('div');
            networkInfo.innerHTML = `
                <h3>${network.name}</h3>
                <p>City: ${network.location.city}</p>
                <p>Country: ${network.location.country}</p>
                <p>Company: ${network.company.join(', ')}</p>
                <a href="${network.href}" target="_blank">More Info</a>
                <hr>
            `;
            resultsDiv.appendChild(networkInfo);
        });
    } else {
        resultsDiv.innerHTML = '<p>No networks found.</p>';
    }
}

async function showNetworksByCountry() {
    const selectedCountry = document.getElementById('countrySelect').value;

    const filteredNetworks = allNetworks.filter(network => {
        return network.location.country === selectedCountry;
    });

    displayNetworks(filteredNetworks);
}

document.getElementById('searchButton').addEventListener('click', showNetworksByCountry);

document.addEventListener('DOMContentLoaded', populateCountrySelect);