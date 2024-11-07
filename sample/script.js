// const resp = [{"name":{"common":"Philippines","official":"Republic of the Philippines","nativeName":{"eng":{"official":"Republic of the Philippines","common":"Philippines"},"fil":{"official":"Republic of the Philippines","common":"Pilipinas"}}},"tld":[".ph"],"cca2":"PH","ccn3":"608","cca3":"PHL","cioc":"PHI","independent":true,"status":"officially-assigned","unMember":true,"currencies":{"PHP":{"name":"Philippine peso","symbol":"₱"}},"idd":{"root":"+6","suffixes":["3"]},"capital":["Manila"],"altSpellings":["PH","Republic of the Philippines","Repúblika ng Pilipinas"],"region":"Asia","subregion":"South-Eastern Asia","languages":{"eng":"English","fil":"Filipino"},"translations":{"ara":{"official":"جمهورية الفلبين","common":"الفلبين"},"bre":{"official":"Republik Filipinez","common":"Filipinez"},"ces":{"official":"Filipínská republika","common":"Filipíny"},"cym":{"official":"Republic of the Philippines","common":"Philippines"},"deu":{"official":"Republik der Philippinen","common":"Philippinen"},"est":{"official":"Filipiini Vabariik","common":"Filipiinid"},"fin":{"official":"Filippiinien tasavalta","common":"Filippiinit"},"fra":{"official":"République des Philippines","common":"Philippines"},"hrv":{"official":"Republika Filipini","common":"Filipini"},"hun":{"official":"Fülöp-szigeteki Köztársaság","common":"Fülöp-szigetek"},"ita":{"official":"Repubblica delle Filippine","common":"Filippine"},"jpn":{"official":"フィリピン共和国","common":"フィリピン"},"kor":{"official":"필리핀 공화국","common":"필리핀"},"nld":{"official":"Republiek der Filipijnen","common":"Filipijnen"},"per":{"official":"جمهوری فیلیپین","common":"فیلیپین"},"pol":{"official":"Republika Filipin","common":"Filipiny"},"por":{"official":"República das Filipinas","common":"Filipinas"},"rus":{"official":"Республика Филиппины","common":"Филиппины"},"slk":{"official":"Filipínska republika","common":"Filipíny"},"spa":{"official":"República de las Filipinas","common":"Filipinas"},"srp":{"official":"Република Филипини","common":"Филипини"},"swe":{"official":"Republiken Filippinerna","common":"Filippinerna"},"tur":{"official":"Filipinler Cumhuriyeti","common":"Filipinler"},"urd":{"official":"جمہوریہ فلپائن","common":"فلپائن"},"zho":{"official":"菲律宾共和国","common":"菲律宾"}},"latlng":[13.0,122.0],"landlocked":false,"area":342353.0,"demonyms":{"eng":{"f":"Filipino","m":"Filipino"},"fra":{"f":"Philippine","m":"Philippin"}},"flag":"\uD83C\uDDF5\uD83C\uDDED","maps":{"googleMaps":"https://goo.gl/maps/k8T2fb5VMUfsWFX6A","openStreetMaps":"https://www.openstreetmap.org/relation/443174"},"population":109581085,"gini":{"2018":42.3},"fifa":"PHI","car":{"signs":["RP"],"side":"right"},"timezones":["UTC+08:00"],"continents":["Asia"],"flags":{"png":"https://flagcdn.com/w320/ph.png","svg":"https://flagcdn.com/ph.svg","alt":"The flag of Philippines is composed of two equal horizontal bands of blue and red, with a white equilateral triangle superimposed on the hoist side of the field. This triangle has its base on the hoist end, spans about two-fifth the width of the field and bears a central golden-yellow sun with eight rays and a five-pointed golden-yellow star at each vertex."},"coatOfArms":{"png":"https://mainfacts.com/media/images/coats_of_arms/ph.png","svg":"https://mainfacts.com/media/images/coats_of_arms/ph.svg"},"startOfWeek":"monday","capitalInfo":{"latlng":[14.6,120.97]},"postalCode":{"format":"####","regex":"^(\\d{4})$"}}];
const countries = [
    'philippines',
    'germany',
];
let defaultCountry = countries[0];


const fetchCountryData = async() => {
    const url = `https://restcountries.com/v3.1/name/${defaultCountry}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayCountryData(data[0]);
    } catch (error) {
        document.getElementById('result').innerHTML = 'Error: ' + error.message;
    }
}

const displayCountryData = (country) => {
    const resultDiv = document.getElementById('result');
    
    const countryInfo = `
        <div class="country-card">
            <img src="${country?.flags?.png}" alt="Flag of ${country?.name?.common}" class="flag">
            <h3>${country?.name?.common}</h3>
            <p><strong>Official Name:</strong> ${country?.name?.official}</p>
            <p><strong>Capital:</strong> ${country?.capital[0]}</p>
            <p><strong>Population:</strong> ${country?.population.toLocaleString()}</p>
            <p><strong>Area:</strong> ${country?.area.toLocaleString()} km²</p>
            <p><strong>Region:</strong> ${country?.region}</p>
            <p><strong>Languages:</strong> ${Object.values(country?.languages).join(', ')}</p>
            <p><strong>Currencies:</strong> ${Object.keys(country?.currencies).map(key => `${country?.currencies[key].name} (${country.currencies[key].symbol})`).join(', ')}</p>
            <p><strong>Time Zone:</strong> ${country?.timezones.join(', ')}</p>
        </div>
        <button>previous</button>
        <button>next</button>
    `;
    
    resultDiv.innerHTML = countryInfo;
}

window.onload = fetchCountryData;
