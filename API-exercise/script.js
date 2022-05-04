
let factList;

function get_joke_of_the_day( ){
  $.getJSON("https://api.jokes.one/jod?category=animal")
    .done(function( data ) {
        console.log(data);
        factList = data; // store data
        displayFact(0);
      });
}  

function displayFact(factIndex){
  let fact = factList[factIndex];
  let text = fact.text;
  $('#fact').html(text);
}


$(document).ready(function() {

    let factCount = 0;

    getFact();

    $("#refresh").click(function(){

     if(factCount < 4){        
        factCount ++; // increment fact index until 5
        displayFact(factCount);
      }else{
        factCount = 0; // reset fact index
      }  
       
    });

});