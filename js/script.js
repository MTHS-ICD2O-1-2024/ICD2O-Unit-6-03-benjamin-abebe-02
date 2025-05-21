// Copyright (c) 2020 Mr. Coxall All rights reserved
// 
// Created by: Benjamin Abebe
// Created on: Feb 2025
// This file contains the JS functions for index.html

"use strict"

// function for my button
async function myButtonClicked() {

  try {
    // defining variables
    const currentWeather = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")
    const jsonData = await currentWeather.json()
    const weatherInKelvin = jsonData.main.temp 
    const jsonWeatherDescription = jsonData.weather[0].description
    const iconCode = jsonData.weather[0].icon
    const iconURL = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png"
    const weatherInCelsius = Math.round(weatherInKelvin - 273.15)

    // output
    document.getElementById("answer").innerHTML ="<p>The current temperature is " + weatherInCelsius + " °C, " + jsonWeatherDescription + "</p>" +
    "<img src='" + iconURL + "' alt='Weather icon'>"
  } catch (error) {
    console.error(error)
    document.getElementById("answer").innerHTML = "<h4>Error 404</h4>"
  }
}
