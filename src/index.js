import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WeatherService from "./js/weather-service";

function clearFields() {
  $('#location').val("");
  $('#zip').val("");
  $('.showHumidity').text("");
  $('.showTemp').text("");
  $('.showTempFeels').text("");
  $('.showTempMin').text("");
  $('.showTempMax').text("");
  $('.windSpeed').text("");
  $('.sunrise').text("");
  $('.sunset').text("");
  $('.showErrors').text("");
}

function getElements(response) {
  if (response.main) {
    const fahrenheit = Math.round((((response.main.temp-273.15)*1.8)+32));
    const fahrenheitFeels = Math.round((((response.main.feels_like-273.15)*1.8)+32));
    const fahrenheitMin = Math.round((((response.main.temp_min-273.15)*1.8)+32));
    const fahrenheitMax = Math.round((((response.main.temp_max-273.15)*1.8)+32));
    const sunrise = new Date(response.sys.sunrise * 1000);
    const sunset= new Date(response.sys.sunset * 1000);
    $('.showHumidity').text(`The humidity is ${response.main.humidity}%`);
    $('.showTemp').text(`The temperature in Fahrenheit is ${fahrenheit} degrees(F).`);
    $('.showTempFeels').text(`It currently feels like ${fahrenheitFeels} degrees(F).`);
    $('.showTempMin').text(`Minimum temperature for today ${fahrenheitMin} degrees(F)`);
    $('.showTempMax').text(`Maximum temperature for today ${fahrenheitMax} degrees(F)`);
    $('.windSpeed').text(`Current wind speed is ${response.wind.speed} mph`);
    $('.sunrise').text(`Sunrise at ${sunrise}`);
    $('.sunset').text(`Sunset at ${sunset}`);
  } else {
    $('.showErrors').text(`There was an error processing your request: ${response}`);
  }
}

async function makeApiCall(city, zip) {
  const response = await WeatherService.getWeather(city, zip);
  getElements(response);
}

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    let zip = $('#zip').val();
    clearFields();
    makeApiCall(city, zip); 
  });
});