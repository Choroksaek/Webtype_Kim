$(document).ready(function(){

  var locations = ["New York","Boston","Seattle","Washington","Milwaukee","Denver","Louisville","Las Vegas","Nashville","Oklahoma City","Portland","Tucson","Albuquerque","Atlanta","Long Beach","Fresno","Sacramento","Mesa","Kansas City","Cleveland","Virginia Beach","Omaha","Miami","Oakland","Tulsa","Honolulu","Minneapolis","Colorado Springs","Arlington","Wichita","Raleigh","St. Louis","Santa Ana","Anaheim","Tampa","Cincinnati","Pittsburgh","Bakersfield","Aurora","Toledo","Riverside","Stockton","Corpus Christi","Newark","Anchorage","Buffalo","St. Paul","Lexington-Fayette","Plano","Fort Wayne","St. Petersburg","Glendale","Jersey City","Lincoln","Henderson","Chandler","Greensboro","Scottsdale","Baton Rouge","Birmingham","Norfolk","Madison","New Orleans","Chesapeake","Orlando","Garland","Hialeah","Laredo","Chula Vista","Lubbock","Reno","Akron","Durham","Rochester","Modesto","Montgomery","Fremont","Shreveport","Arlington","Glendale"];

  var location_selection = Math.round(Math.random()*(locations.length-1))
  var location = locations[location_selection];
 
  $('#location').text(location);

  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=48c3ffdc236976add93360c91f668477&units=metric', function(data) 
  {
      console.log(data);

      let feels = data["main"]["feels_like"]
      let humidity = data["main"]["humidity"]
      let clouds = data["main"]["clouds"]
      let temp = data["main"]["temp"]
      let temp_max = data["main"]["temp_max"]
      let temp_min = data["main"]["temp_min"]


      let fontSize = Math.round(feels);

      $('#feels').text(feels);
      $('#humidity').text(humidity);
      $('#clouds').text(clouds);
      $('#temp').text(temp);
      $('#temp_max').text(temp_max);
      $('#temp_min').text(temp_min);
  });

});


