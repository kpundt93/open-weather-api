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
    $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
    $('.showTemp').text(`The temperature in Fahrenheit is ${fahrenheit} degrees(F).`);
    $('.showTempFeels').text(`It currently feels like ${fahrenheitFeels} degrees(F).`);
    $('.showTempMin').text(`Minimum temperature for today ${fahrenheitMin} degrees(F)`);
    $('.showTempMax').text(`Maximum temperature for today ${fahrenheitMax} degrees(F)`);
    $('.windSpeed').text(`Current wind speed is ${body.wind.speed} mph`);
    $('.sunrise').text(`Sunrise at ${sunrise}`);
    $('.sunset').text(`Sunset at ${sunset}`);
  } else {
    $('.showErrors').text(`There was an error processing your request: ${error}`);
  }
}

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    let zip = $('#zip').val();
    const body = JSON.parse(response);
    const fahrenheit = Math.round((((body.main.temp-273.15)*1.8)+32));
    const fahrenheitFeels = Math.round((((body.main.feels_like-273.15)*1.8)+32));
    const fahrenheitMin = Math.round((((body.main.temp_min-273.15)*1.8)+32));
    const fahrenheitMax = Math.round((((body.main.temp_max-273.15)*1.8)+32));
    const sunrise = new Date(body.sys.sunrise * 1000);
    const sunset= new Date(body.sys.sunset * 1000);
    clearFields();
    WeatherService.getWeather(city, zip)
      .then(function(response) {
      getElements(response);
    });    
  });
});