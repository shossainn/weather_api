$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Toronto&units=imperial&appid=dd3bac0f82696e9bb9cd04aed70cccb3", function(data) {
    console.log(data);

    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);

    var weather= data.weather[0].main;

   $('.icon').attr('src', icon);
   $(".weather").append(weather);
    $(".temp").append(temp);

}
);