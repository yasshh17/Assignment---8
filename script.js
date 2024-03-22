// Add more elements to the main array
const GEOGRAPHY_LIST = [
    {
        country: 'United States',
        capital: 'Washington',
        largestCity: 'New York',
        subdivisionName: 'state',
        subdivisions: [
            {
                name: 'Louisiana',
                capital: 'Baton Rouge',
                largestCity: 'New Orleans',
                area: 134264,
            },
            {
                name: 'California',
                capital: 'Sacramento',
                largestCity: 'Los Angeles',
                area: 423970,
            },
            {
                name: 'Nevada',
                capital: 'Carson City',
                largestCity: 'Las Vegas',
                area: 286382,
            },
        ],
    },
    {
        country: 'Guatemala',
        capital: 'Guatemala City',
        largestCity: 'Guatemala City',
        subdivisionName: 'department',
        subdivisions: [
            {
                name: 'Huehuetenango',
                capital: 'Huehuetenango',
                largestCity: 'Huehuetenango',
                area: 7403,
            },
            {
                name: 'Izabal',
                capital: 'Puerto Barrios',
                largestCity: 'Puerto Barrios',
                area: 9038,
            },
            {
                name: 'El Progreso',
                capital: 'Guastatoya',
                largestCity: 'Guastatoya',
                area: 1922,
            },
        ],
    },
    // Additional items added below
    {
        country: 'Brazil',
        capital: 'Brasília',
        largestCity: 'São Paulo',
        subdivisionName: 'state',
        subdivisions: [
            {
                name: 'São Paulo',
                capital: 'São Paulo',
                largestCity: 'São Paulo',
                area: 248219,
            },
            {
                name: 'Rio de Janeiro',
                capital: 'Rio de Janeiro',
                largestCity: 'Rio de Janeiro',
                area: 43780,
            },
            {
                name: 'Bahia',
                capital: 'Salvador',
                largestCity: 'Salvador',
                area: 564733,
            },
        ],
    },

    {
        country: 'India',
        capital: 'New Delhi',
        largestCity: 'Mumbai',
        subdivisionName: 'state',
        subdivisions: [
            {
                name: 'Maharashtra',
                capital: 'Mumbai',
                largestCity: 'Mumbai',
                area: 307713,
            },
            {
                name: 'Uttar Pradesh',
                capital: 'Lucknow',
                largestCity: 'Kanpur',
                area: 240928,
            },
            {
                name: 'Rajasthan',
                capital: 'Jaipur',
                largestCity: 'Jaipur',
                area: 342239,
            },
        
        ],
    },

    {
        country: 'Canada',
        capital: 'Ottawa',
        largestCity: 'Toronto',
        subdivisionName: 'province',
        subdivisions: [
            {
                "name": "Ontario",
                "capital": "Toronto",
                "largestCity": "Toronto",
                "area": 1076354
            },
            {
                "name": "Quebec",
                "capital": "Quebec City",
                "largestCity": "Montreal",
                "area": 1357671
            },
            {
                "name": "British Columbia",
                "capital": "Victoria",
                "largestCity": "Vancouver",
                "area": 944735
            }
        ]
    }
];


// Wait for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', function() {
    // Loop through the GEOGRAPHY_LIST array
    GEOGRAPHY_LIST.forEach(countryData => {
        // Create a container div for each country
        const countryContainer = document.createElement('div');
        countryContainer.classList.add('country');

        // Create a heading for the country
        const countryHeading = document.createElement('h2');
        countryHeading.textContent = `${countryData.country}`;

        // Create paragraphs for capital and largest city
        const capitalParagraph = document.createElement('p');
        capitalParagraph.textContent = `Capital: ${countryData.capital}`;
        const largestCityParagraph = document.createElement('p');
        largestCityParagraph.textContent = `Largest City: ${countryData.largestCity}`;

        // Create a sublist for subdivisions
        const subdivisionsList = document.createElement('ul');
        countryData.subdivisions.forEach(subdivision => {
            const subdivisionItem = document.createElement('li');
            subdivisionItem.textContent = `${subdivision.name} - Capital: ${subdivision.capital} - Area: ${subdivision.area} sq mi`;
            subdivisionsList.appendChild(subdivisionItem);
        });

        // Append elements to country container
        countryContainer.appendChild(countryHeading);
        countryContainer.appendChild(capitalParagraph);
        countryContainer.appendChild(largestCityParagraph);
        countryContainer.appendChild(subdivisionsList);

        // Append country container to main
        document.querySelector('main').appendChild(countryContainer);
    });

});
