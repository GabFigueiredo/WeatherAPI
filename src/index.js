import { getWeather  } from './weather.js'

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", (event) => {
    event.preventDefault()
    const inputValue = document.getElementById("location").value
    getWeather(inputValue)
})

getWeather("Tokyo")
