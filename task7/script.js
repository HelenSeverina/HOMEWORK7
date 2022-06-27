let cities = {
    ger: ['Berlin', 'Hannover', 'Leipzig'],
    usa: ['Washington', 'Denver', 'Atlanta'],
    ukr: ['Kyiv', 'Lviv', 'Chernihiv']
};

let country = document.getElementById('country');
let city = document.getElementById('cities');

country.addEventListener('change', function() {
    city.innerHTML = '';

    let countryValue = country.value;
    for (let i = 0; i < cities[countryValue].length; i++) {
        let option = document.createElement('option');
        option.innerHTML = cities[countryValue][i];
        city.appendChild(option);
    }
});

let p = document.querySelector('p');
country.addEventListener('change', pText);
city.addEventListener('change', pText);

function pText () {
    p.innerHTML = '';
    p.innerHTML = country.options[country.selectedIndex].text + ', ' + city.options[city.selectedIndex].text;
}