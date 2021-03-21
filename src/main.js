import User from './js/user.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

$("form#user-info").submit(function(event) {
  event.preventDefault();
  let earthAge = $("input#userAge").val();
  let lifeExpectancy = $("input#userLifeExpectancy").val();
  let userName = $('input#userName').val();

  let currentUser = new User(earthAge, lifeExpectancy);
  let mercuryLifeExpect = currentUser.determineMercuryLifeExpectancy();
  let venusLifeExpect = currentUser.determineVenusLifeExpectancy();
  let marsLifeExpect = currentUser.determineMarsLifeExpectancy();
  let jupiterLifeExpect = currentUser.determineJupiterLifeExpectancy();

  $('h3').text(`${userName}, thanks for using Super Galactic Age Calculator!`);
  $('#show-result').show();
  $('#mercury-age').text(currentUser.mercuryAge);
  $('#venus-age').text(currentUser.venusAge);
  $('#mars-age').text(currentUser.marsAge);
  $('#jupiter-age').text(currentUser.jupiterAge);

  currentUser.findLifeExpectancy();
  
  if (currentUser.findLifeExpectancy() === false) {
    $('#anomaly').show();
    $('#mercury-anomaly').text(mercuryLifeExpect);
    $('#venus-anomaly').text(venusLifeExpect);
    $('#mars-anomaly').text(marsLifeExpect);
    $('#jupiter-anomaly').text(jupiterLifeExpect);
  } else if (currentUser.findLifeExpectancy() === true) {
    $('#life-expectancy').show();
    $('#mercury-life-expect').text(mercuryLifeExpect);
    $('#venus-life-expect').text(venusLifeExpect);
    $('#mars-life-expect').text(marsLifeExpect);
    $('#jupiter-life-expect').text(jupiterLifeExpect);
  } 
});