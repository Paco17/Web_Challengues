//TODOS's:
//Search
//Filter
//Modal
//API call


const countriesEl = document.getElementById('countries');
const toggleBtn = document.getElementById('toggle');

getCountries();

async function getCountries() {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const countries = await res.json();

    showCountries(countries);
    console.log(countries);
}

function showCountries(countries) {
    countries.forEach(country => {
        const countryEl = document.createElement('div');
        countryEl.classList.add('card');
        countryEl.innerHTML = `
        <div>
            <img src="${country.flag}" alt="Germany"/>
        </div>
        <div class="card-body">
            <h2>${country.name}</h2>
            <p>
                <strong>Population: </strong>
                ${country.population}
            </p>
            <p>
                <strong>Region: </strong>
                ${country.region}
            </p>
            <p>
                <strong>Capital: </strong>
                ${country.capital}
            </p>
        </div>`
        countriesEl.appendChild(countryEl);
    });
}

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});