// Get token from locale storage
import {
  fetchMoviesCatalog,
  fetchMoviesByGenre,
} from "../helpers/apiHelper.js";
import { createAndAppendCardList } from "../helpers/cardGen.js";

const parentContainer = document.getElementById("parent-container");
const btnLogout = document.getElementById("btn-logout");

async function main() {
  try {
    const moviesCatalog = await fetchMoviesCatalog(); // Method from helpers/apiHelper.js
    const allGenres = getGenresList(moviesCatalog);
    allGenres.forEach((genre) => {
      showMoviesByGenre(moviesCatalog, genre);
    });
  } catch (err) {
    console.error(err);
  }
}

function getGenresList(movies) {
  const uniqueGenres = new Set();
  movies.forEach((movie) => {
    movie.genre.forEach((genre) => {
      uniqueGenres.add(genre);
    });
  });
  const genresList = Array.from(uniqueGenres);
  return genresList;
}

function showMoviesByGenre(movies, genre) {
  const list = movies.filter((movie) => movie.genre.includes(genre));

  const genreSection = document.createElement("div");
  genreSection.classList.add("d-block");
  const genreName = document.createElement("div");

  const genreLink = document.createElement("a");
  genreLink.classList.add("genre-link");
  genreLink.href = "#";
  genreLink.textContent = genre;
  genreName.append(genreLink);
  genreSection.append(genreName);

  const prevButton = document.createElement("button");
  prevButton.textContent = "Previous";
  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";

  let currentPosition = 0; // Current position of the slider
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");
  buttonContainer.append(prevButton, nextButton);
  genreSection.append(buttonContainer);

  const sliderContent = document.createElement("div");
  function updateSlider() {
    sliderContent.innerHTML = "";

    const moviesToShow = list.slice(currentPosition, currentPosition + 5);
    createAndAppendCardList(moviesToShow, sliderContent);

    genreSection.append(sliderContent);
  }

  prevButton.addEventListener("click", () => {
    if (currentPosition > 0) {
      currentPosition -= 5;
      updateSlider();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentPosition + 5 < list.length) {
      currentPosition += 5;
      updateSlider();
    }
  });

  updateSlider(); // Initialize the slider
  parentContainer.append(genreSection);
}

// Redirect user to Login page if he has no token.
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("token")) {
    main();
  } else {
    window.location.href = "../login/index.html";
  }
});

btnLogout.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.href = "../login/index.html";
});
