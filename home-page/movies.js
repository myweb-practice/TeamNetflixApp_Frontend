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
      year: '1999-2222',
      rating: '5.5',
      time: '131 min',
      title: 'Stranger Things'
    },
  ];

  // Function to generate and append card elements
  function generateCards(data) {
    const parentContainer = document.getElementById('parent-container');

    data.forEach(item => {
      const cardLink = document.createElement('a');
      cardLink.classList.add('card');
      cardLink.href = '#';

      const infoDiv = document.createElement('div');
      infoDiv.classList.add('info');

      const yearSpan = document.createElement('span');
      yearSpan.classList.add('year');
      yearSpan.textContent = item.year;
      infoDiv.appendChild(yearSpan);

      const ratingSpan = document.createElement('span');
      ratingSpan.classList.add('rating');
      ratingSpan.textContent = item.rating;
      infoDiv.appendChild(ratingSpan);

      cardLink.appendChild(infoDiv);

      const radialSpan = document.createElement('span');
      radialSpan.classList.add('hvr-radial-out');


      const timeSpan = document.createElement('span');
      timeSpan.classList.add('time');
      timeSpan.textContent = item.time;
      radialSpan.appendChild(timeSpan);

      cardLink.appendChild(radialSpan);

      const titleDiv = document.createElement('div');
      titleDiv.classList.add('title');
      titleDiv.textContent = item.title;

      cardLink.appendChild(titleDiv);

      parentContainer.appendChild(cardLink);
    });
  }


  // Call the function with the sample data
  // generateCards(items);





  const options = {
    method: 'GET',
    headers: {
      'User-Agent': 'khalid',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFyY2hhbmEyMyIsImRhdGUiOjE2OTI4Njk0MzY4MDMsImlhdCI6MTY5Mjg2OTQzNiwiZXhwIjoxNjkyODczMDM2fQ.7PKTI2C6U-UlMI3B3F7K5pHBBAFND0dgqz3R5rkpC6M'
    }
  };
  
  fetch('https://movie-backend-qq9a.onrender.com/movies', options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      generateCards(response)
    })
    .catch(err => console.error(err));


///1-front end routing 
///2- fetching movies from db 
///3-