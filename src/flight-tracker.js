$(document).ready(function() {
  $('#flightInformation').click(function(){
    const flight = $('#flight').val();

    fetch(`https://aerodatabox.p.rapidapi.com/flights/${flight}?withLocation=false&withAircraftImage=false`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "aerodatabox.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.API_KEY}`,
        "mode": "no-cors"
      }
    })
      .then(answer => {
      return answer.json();
      })
      .then(function(jsonifiedanswer) {
        getElements(jsonifiedanswer);
      })
      .catch(err => {
        console.log(err);
      });

    const getElements = function(answer) {
      $('.showairline').text(`The operator is ${answer[0].airline.name}`);

      $('.showflightnumber').text(`The flight number is ${answer[0].number}`);

      $('.showdepart').text(`The flight departed ${answer[0].departure.airport.name}`);

      $('.showarrival').text(`The flight arrived in ${answer[0].arrival.airport.name}`);

      $('.showaircraft').text(`The aircraft model is: ${answer[0].aircraft.model}`);


    };
  });
});



