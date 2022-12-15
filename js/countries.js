const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadCountries();

const displayCountries = countries => {
    // console.log(countries);
    /* for (const country of countries) {
        console.log(country);
    } */
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country.name.common);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `<h3>${country.name.common}</h3>
           <p>${country.capital} </p>
           <button onclick="loadCountryByName('${country.name.common}')">Details</button>
        `;
        countriesDiv.appendChild(div);
    });
}

const loadCountryByName = countryName => {
    // console.log(countryName);
    const url = `https://restcountries.com/v3.1/name/${countryName}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {
    // console.log(country);
    const countryDetailDiv = document.getElementById('country-detail');
    countryDetailDiv.innerHTML = `
        <h4>${country.name.common}</h4>
        <p>Population: ${country.population}</p>
        <img width="200px" src="${country.flags.svg}"/>
    `;
}