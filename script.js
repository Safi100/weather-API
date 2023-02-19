const API_Key = 'c3b390ec825bac1fc7c9779597dde674'
const Form = document.querySelector('form')
const input = document.querySelector('input')
const result_container = document.querySelector('.result')
Form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const city = input.value.trim()
    // const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`)
    .then(response => response.json())
    .then(data => {
        if(data.cod == '404'){
            console.log("not found")
        }
    })
})
