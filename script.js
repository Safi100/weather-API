const API_Key = 'c3b390ec825bac1fc7c9779597dde674'
const Form = document.querySelector('form')
const input = document.querySelector('input')
const result_container = document.querySelector('.result')
Form.addEventListener('submit', async (e) => {
    result_container.textContent = ''
    e.preventDefault()
    const city = input.value.trim()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`)
    .then(response => response.json())
    .then(data => {
        if(data.cod == '404'){
            result_container.innerHTML = '<span class="not_found">City Not found</span>'
            return;
        }
        const Celcius = parseInt(data.main.temp-273.15);
        result_container.innerHTML = `
            <p>Temp: ${Celcius}<sup>°</sup> C</p>
            <p>${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            Wind:
            <ul>
                <li>Speed: ${data.wind.speed}</li>
                <li>Gust: ${data.wind.gust}</li>
                <li>Deg: ${data.wind.deg}</li>
            </ul>
        `
    })
})
