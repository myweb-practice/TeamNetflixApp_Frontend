export { createAndAppendCardList, createCard };
// movies - array of movies, container - HTML element that will be filled in with cards
// container example: const container = document.getElementById("container");
function createAndAppendCardList(movies, container) {
  movies.forEach((movie) => {
    console.log(movie);
    container.appendChild(createCard(movie));
  });
}

// Dynamically creates one card
function createCard(movie) {
  const card = document.createElement("a");
  card.classList.add("card");
  card.href = "#";

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info");

  const yearSpan = document.createElement("span");
  yearSpan.classList.add("year");
  yearSpan.textContent = movie.year;
  infoDiv.appendChild(yearSpan);

  const ratingSpan = document.createElement("span");
  ratingSpan.classList.add("rating");
  ratingSpan.textContent = movie.rating;
  infoDiv.appendChild(ratingSpan);

  card.appendChild(infoDiv);

  const radialSpan = document.createElement("span");
  radialSpan.classList.add("hvr-radial-out");

  const timeSpan = document.createElement("span");
  timeSpan.classList.add("time");
  timeSpan.textContent = movie.time;
  radialSpan.appendChild(timeSpan);

  card.appendChild(radialSpan);

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title");
  titleDiv.textContent = movie.title;

  card.appendChild(titleDiv);
  return card;
}
