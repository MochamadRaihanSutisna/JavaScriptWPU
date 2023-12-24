$.ajax({
    url: "http://www.omdbapi.com/?apikey=(your api key)&s=Avengers",
    succes: movies => console.log(movies)
})