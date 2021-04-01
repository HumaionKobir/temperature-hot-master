const weatherApi = {
    key: "03ae4abf42b430d844e6a6af34c65557",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}



const searchBtn = document.getElementById("search-btn");
 searchBtn.addEventListener("click",function(){ 
    const inputBox = document.getElementById("input-box").value;
    getWeatherReport(inputBox);
});



function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&units=metric&appid=${weatherApi.key}&units=metric`)
    .then(data =>{
        return data.json();
    })
    .then(showWeatherReport);
}



function showWeatherReport(data){  
    let city = document.getElementById("city");
    city.innerText = `${data.name}, ${data.sys.country}`;

    let temperature = document.getElementById("temp");
    temperature.innerText = `${Math.round(data.main.temp)}`;

    let weatherType = document.getElementById("weather");
    weatherType.innerText = `${data.weather[0].main}`;

    let weatherImg = document.getElementById('icon');
    weatherImg.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);

}



// const searchBtn = document.getElementById("search-btn");
// searchBtn.addEventListener('click', function(){
// fetch('http://www.boredapi.com/api/activity/')
// .then(res => res.json())
// .then(data => {
//     document.getElementById('city').innerText = data.activity;
// }) 

// fetch('https://randomuser.me/api')
// .then(res => res.json())
// .then(data => {
//     const user = data.results[0];
//     const name = user.name;
//     const userName = `${name.title} ${name.first} ${name.last}`
//     document.getElementById('clouds').innerText = userName;
// })
// })



// setInterval(() => {
//     changeLocation();
// }, 1000);