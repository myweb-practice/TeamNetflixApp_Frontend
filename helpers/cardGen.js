export { createAndAppendCardList, createCard };

function createAndAppendCardList(movies, container) {
  movies.forEach((movie) => {
    container.appendChild(createCard(movie));
  });
}

// Dynamically creates one card

function createCard(movie) {
  const card = document.createElement("a");

  card.classList.add("card");

  const cardImg = document.createElement("img");

  cardImg.classList.add("card-image");

  cardImg.src = movie.image_url;

  cardImg.href = "#";

  card.append(cardImg);

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

  titleDiv.textContent = movie.name;

  card.appendChild(titleDiv);

  return card;
}
