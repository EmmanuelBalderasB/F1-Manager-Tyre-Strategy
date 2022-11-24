import data from "./data.js"

console.log(data);

const select = document.getElementById('track-select');
const layoutContainer = document.getElementById('layout-container');
const trackOptions = document.querySelector('.track-options');

/* const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '53f56d893dmsh3d3e9b55db49f04p1aab4ejsna1c9b1eccb8b',
		'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
	}
};

const format = async(res) => {
    try {
        select.innerHTML = await res.response.map(item => {
            return `<option id="${item.competition.name}" value="${item.competition.name}">${item.competition.name}</option>`
        }).join('')
        
    } catch (error) {
        console.log(error);
    }
};

const fetchData = async() => {
    try {
        let response = await fetch('https://api-formula-1.p.rapidapi.com/races?type=race&timezone=America%2FMexico_City&season=2022', options)
        if (response.ok) {
            const json = await response.json();
            format(json);
            // console.log(json.response);
        }
    } catch (error) {
        console.log(error);
    }
};

fetchData();

const getImage = async() => {
    try {
        let response = await fetch('https://api-formula-1.p.rapidapi.com/races?type=race&timezone=America%2FMexico_City&season=2022', options)
        if (response.ok) {
            const res = await response.json();
            //console.log(res.response);
            let circuits = res.response.map(item => {
                return {name: item.competition.name, image: item.circuit.image}
            })
            console.log(circuits);
            select.addEventListener('change', (e) => {
                for (let i = 0; i < circuits.length; i++) {
                    if (e.target.value === circuits[i].name) {
                        layoutContainer.innerHTML =  `<img src="${circuits[i].image}">`;
                    }
                }
            })
        }
        
    } catch (error) {
        console.log(error);
    }
}

getImage(); */

