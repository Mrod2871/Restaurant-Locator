//Global scope
let responseData, userInput;
//Setting variables
const $name = $('#name')
const $ads = $('#address')
const $wbs = $('#website')
const $hrs = $('#hours')

const $name1 = $('#name1')
const $ads1 = $('#address1')
const $wbs1 = $('#website1')
const $hrs1 = $('#hours1')

const $name2 = $('#name2')
const $ads2 = $('#address2')
const $wbs2 = $('#website2')
const $hrs2 = $('#hours2')

const $name3 = $('#name3')
const $ads3 = $('#address3')
const $wbs3 = $('#website3')
const $hrs3 = $('#hours3')
const $input = $('input[type="text"]')

//Assigning the event listener for form to get userinput
$('form').on('submit', handleGetData)


//Function to validate ZIP Code
function validateZipcode(zipcode){
  const zipcodeFormat = /^\d{5}(?:[-\s]\d{4})?$/
  return zipcodeFormat.test(userInput)
}

//Function to get data from API
function handleGetData(event){
  // calling preventDefault() on a 'submit' event will prevent a page refresh
  event.preventDefault()
  
  // getting the user input
  userInput = $input.val()

  $.ajax({
    method: 'GET',
    url: 'https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/zipcode/'+userInput+'/0',
    headers: {
      'X-RapidAPI-Key': 'f2bbf4f3b4msh4a8da930192228cp15a589jsncac8ff0f06da',
      'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
    }
  })
  .then(
    (data) => {
      responseData = data
      if (!validateZipcode(userInput)){
        alert('Invalid Zip Code. Please enter valid US ZIP Code')
        document.getElementById('inp').value = ''
      }
      render()
      document.getElementById('main').style.display = 'flex'
      document.getElementById('inp').value = ''
    },
    (error) => {
      console.log('bad request: ', error);
      document.getElementById('inp').value = ''
    }
  );
}

//Function to render data in ul
function render(){
    $name.text(responseData.restaurants[0].restaurantName);
  $ads.text(responseData.restaurants[0].address);
  $wbs.text(responseData.restaurants[0].website)
  $hrs.text(responseData.restaurants[0].hoursInterval);

    $name1.text(responseData.restaurants[1].restaurantName);
  $ads1.text(responseData.restaurants[1].address);
  $wbs1.text(responseData.restaurants[1].website);
  $hrs1.text(responseData.restaurants[1].hoursInterval);

    $name2.text(responseData.restaurants[2].restaurantName);
  $ads2.text(responseData.restaurants[2].address);
  $wbs2.text(responseData.restaurants[2].website);
  $hrs2.text(responseData.restaurants[2].hoursInterval);

    $name3.text(responseData.restaurants[3].restaurantName);
  $ads3.text(responseData.restaurants[3].address);
  $wbs3.text(responseData.restaurants[3].website);
  $hrs3.text(responseData.restaurants[3].hoursInterval);
}