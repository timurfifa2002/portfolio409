let apiKey = '937679131977a22096ddde3d430f1c87'; 

async function checkWeather() {
    try {
        let city = 'Kazan';
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        
        if (!response.ok) {
            throw new Error('Ошибка получения данных');
        }
        
        let currentData = await response.json();
        console.log(currentData);
        
        
        let currentTemp = currentData.main.temp;
        
        document.getElementById('resultTemp').innerHTML = 
            'Температура в Казани: ' + Math.round(currentTemp) + '°C<br>' +
            'Ощущается как: ' + Math.round(currentData.main.feels_like) + '°C<br>' +
            'Погода: ' + currentData.weather[0].description;
            
    } catch (error) {
        console.error('Ошибка:', error);
        document.getElementById('resultTemp').innerHTML = 'Ошибка получения данных о погоде';
    }
}