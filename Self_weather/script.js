let input = document.getElementById("input")
let info = document.getElementById("info")
let btn = document.getElementById("btn")

function weather(presentCity){
    let f = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${presentCity}&appid=7909a3f6027a002f28a9f982feb7917c&units=metric`)
    f.then((res)=>{
        return res.json()
    }).then((result)=>{
         console.log(result)
        try{
            let placeName = result.name
            let weatherPic = result.weather[0].icon
            let weatherDis = result.weather[0].description
            info.innerHTML = `
            <div class = " min-max">
            <span id = "heading">${placeName}</span>
            <span id = "temperature">${result.main.temp}</span>
            <img class = "image" src="http://openweathermap.org/img/w/${weatherPic}.png">
            <h4>${weatherDis}</h4>
            <div class="additional">
            <div class = "extra">max/min temp:<br> <p> ${result.main.temp_max}<br><p>${result.main.temp_min}</div>
            <div class = "extra">Wind-speed:<br> <p> ${result.main.temp_max}</div>
            <div class = "extra">pressure:<br> <p> ${result.main.pressure}</div>
            <div class = "extra">Humidity:<br> <p> ${result.main.humidity}</div>
            </div>
            </div>
            `
        }
        catch{
            alert("Enter the correct name of place!!")
        }
        // return result
       
    })


}
weather("Solihull")
input = ""

btn.addEventListener("click",()=>{
    let city = document.getElementById("input").value
    weather(`${city}`)
})

