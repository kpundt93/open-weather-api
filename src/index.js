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
    $('#zip').val("");

    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&zip=${zip}&appid=${process.env.API_KEY}`; 
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
    
    

    promise.then(function(response) {
      const body = JSON.parse(response);
      const fahrenheit = Math.round((((body.main.temp-273.15)*1.8)+32));
      const fahrenheitFeels = Math.round((((body.main.feels_like-273.15)*1.8)+32));
      const fahrenheitMin = Math.round((((body.main.temp_min-273.15)*1.8)+32));
      const fahrenheitMax = Math.round((((body.main.temp_max-273.15)*1.8)+32));
      const sunrise = new Date(body.sys.sunrise * 1000);
      const sunset= new Date(body.sys.sunset * 1000);
      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      $('.showTemp').text(`The temperature in Fahrenheit is ${fahrenheit} degrees(F).`);
      $('.showTempFeels').text(`It currently feels like ${fahrenheitFeels} degrees(F).`);
      $('.showTempMin').text(`Minimum temperature for today ${fahrenheitMin} degrees(F)`);
      $('.showTempMax').text(`Maximum temperature for today ${fahrenheitMax} degrees(F)`);
      $('.windSpeed').text(`Current wind speed is ${body.wind.speed} mph`);
      $('.sunrise').text(`Sunrise at ${sunrise}`);
      $('.sunset').text(`Sunset at ${sunset}`);
      $('.showErrors').text("");
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
      $('.showHumidity').text("");
      $('.showTemp').text("");
      $('.showTempFeels').text("");
      $('.showTempMin').text("");
      $('.showTempMax').text("");
      $('.windSpeed').text("");
      $('.sunrise').text("");
      $('.sunset').text("");
    });
  });
});