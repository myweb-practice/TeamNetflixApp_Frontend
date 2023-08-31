const [username, password, submit, checkbox] =
  document.querySelectorAll("input");
const content = document.querySelector(".content");

submit.addEventListener("click", async (e) => {
  const userData = {
    username: username.value,

    password: password.value,
  };

  const options = {
    method: "POST",

    headers: { "Content-Type": "application/json" },

    body: JSON.stringify(userData),
  };

  try {
    const response = await fetch(
      "https://teamnetflixapp-backend.onrender.com/users/login",
      // "http://localhost:8181/users/login",
      options
    );

    const responseData = await response.json();

    console.log(responseData);

    // Store the user data in local storage if needed

    
    localStorage.setItem("token", JSON.stringify(responseData));
    localStorage.setItem("username", username.value);

    // Redirect to the home page
    if (response.status === 200) {
      window.location.href = "../home-page/index.html";
    } else {
      alert("Login or password is incorrect");
    }
  } catch (error) {
    console.error(error);
  }
});
 