var currentTemp = document.getElementById("curentTemperature");
var hiTemp = document.getElementById("hiTemp");
var lowTemp = document.getElementById("lowTemp");
var chanceRain = document.getElementById("chanceRain");
var url=" ";
function setUrl(){
  url = "darksky.com" + ;
}
function getWeather(url)
{
  $.getJSON('http://query.yahooapis.com/v1/public/yql?q=select%20%2a%20from%20yahoo.finance.quotes%20WHERE%20symbol%3D%27WRC%27&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys&callback', function(data) {
      //data is the JSON string
  });
}
function setData(){
  currentTemp =;
  hiTemp =;
  lowTemp =;
  chanceRain =;
}
