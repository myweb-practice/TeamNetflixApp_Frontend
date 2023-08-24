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

    try {
      const response = await fetch(
        "https://movie-backend-qq9a.onrender.com/movies",
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
