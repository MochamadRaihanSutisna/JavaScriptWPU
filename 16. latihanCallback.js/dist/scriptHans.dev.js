"use strict";

$(".search-button").on("click", function () {
  $.ajax({
    url: "http://www.omdbapi.com/?apikey=986faee0&s=" + $(".input-keyword").val(),
    success: function success(results) {
      var movies = results.Search;
      var cards = "";
      movies.forEach(function (m) {
        cards += showCards(m);
      });
      $(".movie-container").html(cards); // Ketika Tombol detail di-klik

      $(".modal-detail-button").on("click", function () {
        $.ajax({
          url: "http://www.omdbapi.com/?apikey=986faee0&i=" + $(this).data("imdbid"),
          success: function success(m) {
            var movieDetail = showMovieDetail(m);
            $(".modal-body").html(movieDetail);
          },
          error: function error(e) {
            console.log(e.resposeText);
          }
        });
      });
    },
    error: function error(e) {
      console.log(e.resposeText);
    }
  });
});

function showCards(m) {
  return "<div class=\"col-md-4 my-3\">\n    <div class=\"card\">\n        <img src=\"".concat(m.Poster, "\" class=\"card-img-top\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">").concat(m.Title, "</h5>\n            <h6 class=\"card-subtitle mb-2 text-muted\">").concat(m.Year, "</h6>\n            <a href=\"#\" class=\"btn btn-primary modal-detail-button\" data-toggle=\"modal\" data-target=\"#movieDetailModal\" data-imdbid=\"").concat(m.imdbID, "\">Show Details</a>\n        </div>\n    </div>\n</div>");
}

function showMovieDetail(m) {
  return "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-3\">\n            <img src=\"".concat(m.Poster, "\" class=\"img-fluid\">\n        </div>\n            <div class=\"col-md\">\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\"><h4>").concat(m.Title, " (").concat(m.Year, ")</h4></li>\n                    <li class=\"list-group-item\"><strong>Director : </strong>").concat(m.Director, "</li>\n                    <li class=\"list-group-item\"><strong>Actors : </strong>").concat(m.Actors, "</li>\n                    <li class=\"list-group-item\"><strong>Writer : </strong>").concat(m.Writer, "</li>\n                    <li class=\"list-group-item\"><strong>Plot : </strong> <br>").concat(m.Plot, " </li>\n                </ul>\n            </div>\n        </div>\n    </div>");
}