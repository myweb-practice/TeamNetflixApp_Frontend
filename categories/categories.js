// Get token from locale storage
import { fetchMoviesCatalog } from "../helpers/apiHelper.js";
import { createAndAppendCardList } from "../helpers/cardGen.js";

const parentContainer = document.getElementById("parent-container");
const btnLogout = document.getElementById("btn-logout");

async function main() {
  try {
    const moviesCatalog = await fetchMoviesCatalog(); // Method from helpers/apiHelper.js
    createAndAppendCardList(sortMoviesByGenre(moviesCatalog), parentContainer); // Method from helpers/cardGen.js
  } catch (err) {
    console.error(err);
  }
}

function sortMoviesByGenre(movies) {
  return movies.filter((movie) => movie.genres.includes("drama"));
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
