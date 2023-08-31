const [username, password, submit, checkbox] =
  document.querySelectorAll("input");

submit.addEventListener("click", async (e) => {
  const userData = {
    username: username.value,

    password: password.value,
  };

  console.log(userData);

  const options = {
    method: "POST",

    headers: { "Content-Type": "application/json" },

    body: JSON.stringify(userData),
  };

  try {
    const response = await fetch(
      "https://movie-backend-qq9a.onrender.com/users/login",
      options
    );

    const responseData = await response.json();

    console.log(responseData);

    // Store the user data in local storage if needed

    localStorage.setItem("token", JSON.stringify(responseData));

    localStorage.setItem("username", username.value);

    // Redirect to the home page
<<<<<<< HEAD
=======
    if (response.status === 200) {
      window.location.href = "../home-page/index.html";
    }
>>>>>>> 8a905cbeaf70f61dc312a94d84d2b133c3a40fa5
  } catch (error) {
    console.error(error);
  }
});
