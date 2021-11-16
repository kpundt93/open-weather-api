import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Weather } from "./js/weather";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    const zip = $('#zip').val();

    $('#location').val("");

    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&zip=${zip}&appid=${process.env.API_KEY}`; 
    
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      const fahrenheit = Math.round((((response.main.temp-273.15)*1.8)+32));
      const fahrenheitFeels = Math.round((((response.main.feels_like-273.15)*1.8)+32));
      const fahrenheitMin = Math.round((((response.main.temp_min-273.15)*1.8)+32));
      const fahrenheitMax = Math.round((((response.main.temp_max-273.15)*1.8)+32));
      const sunrise = new Date(response.sys.sunrise * 1000);
      const sunset= new Date(response.sys.sunset * 1000);
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Fahrenheit is ${fahrenheit} degrees(F).`);
      $('.showTempFeels').text(`It currently feels like ${fahrenheitFeels} degrees(F).`);
      $('.showTempMin').text(`Minimum temperature for today ${fahrenheitMin} degrees(F)`);
      $('.showTempMax').text(`Maximum temperature for today ${fahrenheitMax} degrees(F)`);
      $('.windSpeed').text(`Current wind speed is ${response.wind.speed} mph`);
      $('.sunrise').text(`Sunrise at ${sunrise}`);
      $('.sunset').text(`Sunset at ${sunset}`);

    }
  });
});