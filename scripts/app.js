import data from "./data.js"

const select = document.getElementById('track-select');
const layoutContainer = document.getElementById('layout-container');
const avgLapTime = document.getElementById('avg-lap-time');
const avgPitLoss = document.getElementById('avg-pit-loss');
const avgSoftLoss = document.getElementById('avg-soft-loss');
const avgMediumLoss = document.getElementById('avg-medium-loss');
const avgHardLoss = document.getElementById('avg-hards-loss');
const lapNum = document.getElementById('lap-num');
const next = document.getElementById('next');

const format = () => {
    try {
        select.innerHTML = data.map(item => {
            return `<option id="${item.name}" value="${item.name}">${item.name}</option>`
        }).join('')
    } catch (error) {
        console.log(error);
    }
}
format();

const getImage = async() => {
    try {
            let circuits = data.map(item => {
                return {name: item.name, image: item.image}
            })
            console.log(circuits);
            
            select.addEventListener('change', (e) => {
                for (let i = 0; i < circuits.length; i++) {
                    if (e.target.value === circuits[i].name) {
                        layoutContainer.innerHTML =  `<img class="images" id="layout-image" src="${circuits[i].image}">`;
                        break;
                    }
                }
            })
        
        
    } catch (error) {
        console.log(error);
    }
}
getImage();

let map = [];

const getStrat = (e) => {
    e.preventDefault();
    const avgLap = Number(avgLapTime.value);
    console.log( avgLap);
    const numLaps = Number(lapNum.value);
    console.log(numLaps);
    let i = 0;
    const softDeg = Number(avgSoftLoss.value); 
    console.log( softDeg);
    let totalTime = 0;
    while (i < numLaps) {
        /* if(i > 20) {
            softDeg = softDeg * 1.2;
        } */
        totalTime = (totalTime + avgLap + softDeg);
        i++;
        map.push({lapNum: i, time: totalTime});
    }
    let totalMinutes = totalTime / 60;

    console.log(totalMinutes);
    return totalMinutes;
}

next.addEventListener('click', getStrat);

/* const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'YOUR_API_KEY_HERE',
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

