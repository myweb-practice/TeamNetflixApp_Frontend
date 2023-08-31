import { fetchMoviesCatalog } from "../helpers/apiHelper.js";
import { createAndAppendCardList } from "../helpers/cardGen.js";

const parentContainer = document.getElementById("parent-container");

async function showMovies() {
  try {
    const moviesList = await fetchMoviesCatalog();

    createAndAppendCardList(moviesList, parentContainer);
  } catch (err) {
    console.log(err);
  }
}

// Redirect user to Login page if he has no token.

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("token")) {
    showMovies();
  } else {
    window.location.href = "../login/index.html";
  }
});

const btnLogout = document.getElementById("btn-logout");

btnLogout.addEventListener("click", () => {
  localStorage.removeItem("token");

  window.location.href = "../login/index.html";
});
