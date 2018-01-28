/*

Потрібно обновити погоду дял кожного міса використовуючи ajax виклик.
використовувати потрібно сервіс https://openweathermap.org/current

Приклад посилань для отримання інформації про погоду

http://api.openweathermap.org/data/2.5/weather?appid=1cbb9d3c2d3d13f34be51c51afe4b6cb&q=Lviv,ua
http://api.openweathermap.org/data/2.5/weather?appid=1cbb9d3c2d3d13f34be51c51afe4b6cb&q=Kiev,ua
http://api.openweathermap.org/data/2.5/weather?appid=1cbb9d3c2d3d13f34be51c51afe4b6cb&q=Odessa,ua

інформацію про стна небу шукайте тут 
"weather":[{"id":804,"main":"clouds","description":"overcast clouds","icon":"04n"}],
Іофрмацію про температуру 
"main":{"temp":289.5,"humidity":89,"pressure":1013,"temp_min":287.04,"temp_max":292.04},

1. Зробити запит на openweathermap.org за допоомогою апі і відобразити поточну погоду для кожного міста.
2. Додати кнопку "Обновити", яка буде обновляти погоду в місті.
3. Додати setInterval який буде обноялти погоду що 5хв.

Додаткові завдання
4. В елемент з класом "weather-pic" додати відповідний шаблон https://codepen.io/joshbader/pen/EjXgqr?q=weather&limit=all&type=type-pens
в залежності від параметра data["weather"]["main"]

5. Додати форму, щоб можна було додати нвое місто і відобразити його.

*/

$(document).ready(function () {
    //  1. Зробити запит на openweathermap.org за допоомогою апі і відобразити поточну погоду для кожного міста.

    var getWeather = function () {
        callWeatherApi("ua", "Lviv", $(".card-lviv"));
        callWeatherApi("ua", "Kiev", $(".card-kiev"));
        callWeatherApi("ua", "Odessa", $(".card-odessa"));
    };
    // 2. Додати кнопку "Обновити", яка буде обновляти погоду в місті.
    $("#refresh-btn").click(function () {
        getWeather();
    });
    getWeather();

    // 3. Додати setInterval який буде обноялти погоду що 5хв.
    var timerId = setInterval(function () {
        getWeather();
    }, 300000); // 5 min


    //  1. Зробити запит на openweathermap.org за допоомогою апі і відобразити поточну погоду для кожного міста.

    function callWeatherApi(country, city, element) {
        var URL = "http://api.openweathermap.org/data/2.5/weather?appid=1cbb9d3c2d3d13f34be51c51afe4b6cb&q=";
        if (country !== undefined && city !== undefined && element !== undefined) {
            URL = URL + city + "," + country + "&units=metric";
        } else {
            console.log("input data error");
            return;
        }
        console.log(URL)
        // додавання зображення
        $.getJSON(URL, function (data) {
            element.find(".card-temp").text(data.main.temp);
            var weather = "api error";
            var wIcon = "";
            if (data.weather.length > 0) {
                weather = data.weather[0].main + ", " + data.weather[0].description;
                wIcon = data.weather[0].icon;
            }
            element.find(".card-info").text(weather);
            element.find(".weather-pic").html(
                "<img src='http://openweathermap.org/img/w/" + wIcon + ".png'>"
            );
        })
            .fail(function (data) {
                console.log("error");
            })


    }





});