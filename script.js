async function fetchweatherdata(cityname){
	let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=5c998f0488955695216ce25eb4cd7e08`
	const response = await fetch(url)
	const data = await response.json();
	let city = document.getElementById("city");
	city.innerHTML= data.name;
	let windspeed = document.getElementById("wind_speed");
	windspeed.innerHTML =data.wind.speed + "_km/hr";
	let humidity = document.getElementById("humidity");
	humidity.innerHTML = data.main.humidity +"_g/kg";
	let temp = document.getElementById("temp");
	temp.innerHTML = Math.round((data.main.temp)-273.15)+"_°C";
	console.log(data)
}


function fetchcity() {
	let cityname = document.getElementById("city_name");
	if(cityname.value===""){
		alert("enter city name");
	}else{
		fetchweatherdata(cityname.value);
		cityname.value="";
	}
}