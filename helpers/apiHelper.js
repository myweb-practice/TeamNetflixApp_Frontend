const tokenItem = localStorage.getItem("token");

export async function fetchMoviesCatalog() {
  if (tokenItem) {
    const token = JSON.parse(tokenItem).token;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    //
    try {
      const response = await fetch(
        "https://teamnetflixapp-backend.onrender.com/movies",
        // "http://localhost:8181/movies",
        options
      );
      if (response.status === 401) {
        // Token has expired, redirect to login
        window.location.href = "../login/index.html";
      }
      const moviesCatalog = await response.json();
      return moviesCatalog;
    } catch (err) {
      throw err;
    }
  }
}

export async function fetchMoviesByGenre(genre) {
  if (tokenItem) {
    const token = JSON.parse(tokenItem).token;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await fetch(
        `https://teamnetflixapp-backend.onrender.com/movies/genres/${encodeURIComponent(
          genre
        )}`,
        options
      );
      if (response.status === 401) {
        // Token has expired, redirect to login
        window.location.href = "../login/index.html";
      }
      const moviesByGenre = await response.json();
      return moviesByGenre;
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }
}
