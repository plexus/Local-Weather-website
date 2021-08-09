function getData(){
    const url = 'https://weather-proxy.freecodecamp.rocks/api/current?lat=35&lon=139';
    fetch( url, {
        method: 'GET',
    })
    .then(response => response.json())
    // .then(data => console.log(data)) // the output of the response json 
    .then(data => {
        // extractValues(data)
        updateWeatherText(data)
        // updateWeatherIcon(data)
        updateCurrentTemp(data)
    })
    .catch(error => {console.error('Error:', error)});
}

function extractValues(data){
    console.log(data);
}

function updateWeatherText(data){
    document.getElementById('data-watertype').innerHTML = data.weather[0].description;
}

// TBD: this is not working !!
function updateWeatherIcon(data){
    document.getElementById("icon-watertype22").src=data.weather[0].icon;;
}

function updateCurrentTemp(data){
    document.getElementById('data-temp').innerHTML = Math.round(data.main.temp);
}


function convertToF(celsius) {
    let fahrenheit = celsius.match(/\d+/)[0] * 9/5 + 32;
    return Math.round(fahrenheit)+'\xB0F';
  }

function convertToC(fahrenheit) {
    let celsius =  (fahrenheit.match(/\d+/)[0] -32) * 5/9;
    return Math.round(celsius)+'\xB0C';
}

function toggle()
{
    var temp = document.getElementById("data-temp").innerHTML ? document.getElementById("data-temp").innerHTML : null;
    console.log("we start with this :" + temp);


    if(document.getElementsByClassName("toggle-btn active")){
        console.log("we 1");
        document.getElementById("data-temp").innerHTML= convertToF(temp);
        console.log("we are converting c->f : " + convertToF(temp));
        }
    
    else if(document.getElementsByClassName("toggle-btn")){
        console.log("we 2");
        document.getElementById("data-temp").innerHTML=convertToC(temp);
        console.log("we are converting f->c : " + convertToC(temp));
    }
}