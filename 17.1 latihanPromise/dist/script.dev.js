"use strict";

$.ajax({
  url: "http://www.omdbapi.com/?apikey=(your api key)&s=Avengers",
  succes: function succes(movies) {
    return console.log(movies);
  }
});