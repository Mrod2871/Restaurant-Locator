
let responseData, userInput;

const $name = $('#name')
const $ads = $('#address')
const $wbs = $('#website')
const $hrs = $('#hours')
const $input = $('input[type="text"]')

$('form').on('submit', handleGetData)

function handleGetData(event){
  event.preventDefault()
 // calling preventDefault() on a 'submit' event will prevent a page refresh
  userInput = $input.val()
// getting the user input
  $.ajax({
    method: 'GET',
    url: 'https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/zipcode/'+userInput+'/0',
    headers: {
      'X-RapidAPI-Key': 'ec8ff9b683mshb7afe1ccfc4e8b5p12b111jsnbea7ad52f029',
      'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
    }
  })
  .then(
    (data) => {
      responseData = data
      render()
      console.log(responseData)
    },
    (error) => {
      console.log('bad request: ', error);
    }
  );
}
function render(){
    responseData.restaurants.forEach((element, idx) => {
    });
    $name.text(responseData.restaurants[0].restaurantName);
    $ads.text(responseData.restaurants[0].address);
    $wbs.text(responseData.restaurants[0].website)
    $hrs.text(responseData.restaurants[0].hoursInterval);
}