$(document).ready(function() {
  $('#airportInformation').click(function(){
    const airport = $('#inputairport').val();

    fetch(`https://aerodatabox.p.rapidapi.com/airports/iata/${airport}?withRunways=false&withTime=false`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "aerodatabox.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.API_KEY}`,
        "mode": "no-cors"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(function(jsonifiedResponse) {
        getElements(jsonifiedResponse);
      })
      .catch(err => {
        console.log(err);
      });

    const getElements = function(response) {
      $('.showname').text(`The city that ${airport} is located in is ${response.municipalityName}.`);
      $('.gotosite').text(`To find out more information about ${airport}, please visit ${response.urls.webSite}.`);
    };
  });
});



