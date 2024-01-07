"use strict";

//JQuery
// $(".search-button").on("click", function() {
//     $.ajax({
//         url: "http://www.omdbapi.com/?apikey=986faee0&s=" + $(".input-keyword").val(),
//         success: results => {
//             const movies = results.Search;
//             let cards = "";
//             movies.forEach(m => {
//                 cards += showCards(m);
//             });
//             $(".movie-container").html(cards);
//             // Ketika Tombol detail di-klik
//             $(".modal-detail-button").on("click", function() {
//                 $.ajax({
//                     url: "http://www.omdbapi.com/?apikey=986faee0&i=" + $(this).data("imdbid"),
//                     success: m => {
//                         const movieDetail = showMovieDetail(m);
//                         $(".modal-body").html(movieDetail);
//                     },
//                     error: (e) => {
//                         console.log(e.resposeText);
//                     }
//                 });
//             });
//         },
//         error: (e) => {
//             console.log(e.resposeText);
//         }
//     });
// })
//fetch
// const searchButton = document.querySelector(".search-button");
// searchButton.addEventListener("click", function() {
//     const inputKeyword = document.querySelector(".input-keyword");
//     fetch("http://www.omdbapi.com/?apikey=986faee0&s=" + inputKeyword.value)
//         .then(response => (response.json()))
//         .then(response => {
//             const movies = response.Search;
//             let cards = "";
//             movies.forEach(m => cards += showCards(m));
//             const movieContainer = document.querySelector(".movie-container");
//             movieContainer.innerHTML = cards;
// ketika tombol detail di-klik
//             const modalDetailButton = document.querySelectorAll(".modal-detail-button");
//             modalDetailButton.forEach(btn => {
//                 btn.addEventListener("click", function() {
//                     const imdbid = this.dataset.imdbid;
//                     fetch("http://www.omdbapi.com/?apikey=986faee0&i=" + imdbid)
//                     .then(response => response.json())
//                     .then(m => {
//                         const movieDetail = showMovieDetail(m);
//                         const modalBody = document.querySelector(".modal-body");
//                         modalBody.innerHTML = movieDetail;
//                     })
//                 })  
//             })
//         });
// });
// fetch Refactor
var searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function _callee() {
  var inputKeyword, movies;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          inputKeyword = document.querySelector(".input-keyword");
          _context.next = 4;
          return regeneratorRuntime.awrap(getMovies(inputKeyword.value));

        case 4:
          movies = _context.sent;
          updateUI(movies);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          // console.log(err)
          alert(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); //event binding

document.addEventListener("click", function _callee2(e) {
  var imdbid, movieDetail;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!e.target.classList.contains(".modal-detail-button")) {
            _context2.next = 6;
            break;
          }

          imdbid = e.target.dataset.imdbid;
          _context2.next = 4;
          return regeneratorRuntime.awrap(getMovieDetail(imdbid));

        case 4:
          movieDetail = _context2.sent;
          updateUIDetail(movieDetail);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
});

function getMovieDetail(imdbid) {
  return fetch("http://www.omdbapi.com/?apikey=986faee0&i=" + imdbid).then(function (response) {
    return response.json();
  }).then(function (m) {
    return m;
  });
}

function updateUIDetail(m) {
  var movieDetail = showMovieDetail(m);
  var modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetail;
}

function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=986faee0&s=" + keyword).then(function (response) {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  }).then(function (response) {
    if (response.Response === "False") {
      throw new Error(response.Error);
    }

    console.log(response);
  });
}

function updateUI(movies) {
  var cards = "";
  movies.forEach(function (m) {
    return cards += showCards(m);
  });
  var movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
}

function showCards(m) {
  return "<div class=\"col-md-4 my-3\">\n    <div class=\"card\">\n        <img src=\"".concat(m.Poster, "\" class=\"card-img-top\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">").concat(m.Title, "</h5>\n            <h6 class=\"card-subtitle mb-2 text-muted\">").concat(m.Year, "</h6>\n            <a href=\"#\" class=\"btn btn-primary modal-detail-button\" data-toggle=\"modal\" data-target=\"#movieDetailModal\" data-imdbid=\"").concat(m.imdbID, "\">Show Details</a>\n        </div>\n    </div>\n</div>");
}

function showMovieDetail(m) {
  return "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-3\">\n            <img src=\"".concat(m.Poster, "\" class=\"img-fluid\">\n        </div>\n            <div class=\"col-md\">\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\"><h4>").concat(m.Title, " (").concat(m.Year, ")</h4></li>\n                    <li class=\"list-group-item\"><strong>Director : </strong>").concat(m.Director, "</li>\n                    <li class=\"list-group-item\"><strong>Actors : </strong>").concat(m.Actors, "</li>\n                    <li class=\"list-group-item\"><strong>Writer : </strong>").concat(m.Writer, "</li>\n                    <li class=\"list-group-item\"><strong>Plot : </strong> <br>").concat(m.Plot, " </li>\n                </ul>\n            </div>\n        </div>\n    </div>");
}