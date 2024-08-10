export async function getWeather(location) {
    const result = await fetch(`http://api.weatherapi.com/v1/current.json?key=b447fb2239174d81809195111242202&q=${location}&aqi=no`, {mode: 'cors'});
    try {
        const weatherJSON = await result.json()
        createDOM(weatherJSON.current.condition.text) 
    } catch(err) {
        console.log("erro", err)
    }
}

function createDOM(content) {
    const text = document.getElementById("weather");
    text.innerHTML = content;
    const main = document.querySelector("main");
    main.appendChild(text)
}
