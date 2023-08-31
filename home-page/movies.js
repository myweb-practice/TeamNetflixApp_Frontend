<<<<<<< HEAD

  const items = [
    {
      year: '1999-2222',
      rating: '5.5',
      genres: '',
      title: 'Stranger Things'
    },
  ];
=======
// TweenMax.staggerTo('.movie', 1, {
//     css: {
//       opacity: 1,
//       transform: 'translateY(0)'
//     }

//   }, 0.2);

//   TweenMax.staggerTo('.movie__title', 1, {
//     css: {
//       opacity: 1,
//       transform: 'translateX(0)'
//     }
//   }, 0.2)

const items = [
  {
    year: "1999-2222",
    rating: "5.5",
    time: "131 min",
    title: "Stranger Things",
  },
];

// Function to generate and append card elements
function generateCards(data) {
  const parentContainer = document.getElementById("parent-container");

  data.forEach((item) => {
    const cardLink = document.createElement("a");
    cardLink.classList.add("card");
    cardLink.href = "#";
>>>>>>> 8a905cbeaf70f61dc312a94d84d2b133c3a40fa5

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");

<<<<<<< HEAD
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row', 'row-cols-1', 'row-cols-md-3', 'g-4');

    data.forEach(item => {
      const colDiv = document.createElement('div');
      colDiv.classList.add('col','d-flex', 'justify-content-center');

      const cardLink = document.createElement('a');
      cardLink.classList.add('card');
      cardLink.href = '#';
=======
    const yearSpan = document.createElement("span");
    yearSpan.classList.add("year");
    yearSpan.textContent = item.year;
    infoDiv.appendChild(yearSpan);
>>>>>>> 8a905cbeaf70f61dc312a94d84d2b133c3a40fa5

    const ratingSpan = document.createElement("span");
    ratingSpan.classList.add("rating");
    ratingSpan.textContent = item.rating;
    infoDiv.appendChild(ratingSpan);

    cardLink.appendChild(infoDiv);

<<<<<<< HEAD

//// rating is extra info makes the card looks bad so i commented until i'll fix it //////

      // const ratingSpan = document.createElement('span');
      // ratingSpan.classList.add('rating');
      // ratingSpan.textContent = item.rating;
      // infoDiv.appendChild(ratingSpan);
=======
    const radialSpan = document.createElement("span");
    radialSpan.classList.add("hvr-radial-out");
>>>>>>> 8a905cbeaf70f61dc312a94d84d2b133c3a40fa5

    const timeSpan = document.createElement("span");
    timeSpan.classList.add("time");
    timeSpan.textContent = item.time;
    radialSpan.appendChild(timeSpan);

    cardLink.appendChild(radialSpan);

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.textContent = item.title;

<<<<<<< HEAD
      const timeSpan = document.createElement('span');
      timeSpan.classList.add('time');
      timeSpan.textContent = item.genres;
      radialSpan.appendChild(timeSpan);
=======
    cardLink.appendChild(titleDiv);
>>>>>>> 8a905cbeaf70f61dc312a94d84d2b133c3a40fa5

    parentContainer.appendChild(cardLink);
  });
}

// Call the function with the sample data
// generateCards(items);

const options = {
  method: "GET",
  headers: {
    "User-Agent": "khalid",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFyY2hhbmEyMyIsImRhdGUiOjE2OTI4Njk0MzY4MDMsImlhdCI6MTY5Mjg2OTQzNiwiZXhwIjoxNjkyODczMDM2fQ.7PKTI2C6U-UlMI3B3F7K5pHBBAFND0dgqz3R5rkpC6M",
  },
};

<<<<<<< HEAD
      colDiv.appendChild(cardLink)
      rowDiv.appendChild(colDiv)



    });
    parentContainer.appendChild(rowDiv);
  }





  const options = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFyY2hhbmEyMyIsImRhdGUiOjE2OTI5NjE3MjkzNTgsImlhdCI6MTY5Mjk2MTcyOSwiZXhwIjoxNjkyOTY1MzI5fQ.OoQ_ZKZbjvZe51ysFdtl-S4srJ82I0wKOq818R41n5g'
    }
  };
  console.log(options);
  
  fetch('https://movie-backend-qq9a.onrender.com/movies', options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      generateCards(response)
    })
    .catch(err => console.error(err));
=======
fetch("https://movie-backend-qq9a.onrender.com/movies", options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    generateCards(response);
  })
  .catch((err) => console.error(err));

///1-front end routing
///2- fetching movies from db
///3-
>>>>>>> 8a905cbeaf70f61dc312a94d84d2b133c3a40fa5
