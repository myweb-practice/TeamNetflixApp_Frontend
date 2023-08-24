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
      genres: '',
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
      timeSpan.textContent = item.genres;
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
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFyY2hhbmEyMyIsImRhdGUiOjE2OTI4NzU1NTE3NjAsImlhdCI6MTY5Mjg3NTU1MSwiZXhwIjoxNjkyODc5MTUxfQ.tjK2K80u5n48PKkTnjaP6u51SA3tAcnh9KYqFkYtk8k'
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