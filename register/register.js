const [username, email, password, submit, checkbox] = document.querySelectorAll('input');

 

submit.addEventListener('click', async (e) => {
    Swal.fire('You are Succesfully registered' )
    const userData = {

        username: username.value,
        email: email.value,
        password: password.value,

   

    };

    console.log(userData);

 

    const options = {

        method: 'POST',

        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify(userData),

    };

 

    try {

        const response = await fetch('https://movie-backend-qq9a.onrender.com/users/register', options);

        const responseData = await response.json();

        console.log(responseData);

 

        // Store the user data in local storage if needed

        localStorage.setItem('token', JSON.stringify(responseData));

        localStorage.setItem('username',username.value);
        

        // Redirect to the home page


    } catch (error) {

        console.error(error);

    }

});
