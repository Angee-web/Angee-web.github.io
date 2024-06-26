
// add event listener to each of the elements that are in the form
document.addEventListener("DOMContentLoaded", function () {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const loadButton = document.getElementById("loadButton");
    const spinner = document.getElementById("spinner");

// validate the input fields to make sure that the button does not load if the input fields are not filled
    function validateInputs() {
        loadButton.disabled = !username.value || !password.value;
    }

    // add event listener of validateinput fields to the labels that have the input fields
    username.addEventListener("input", validateInputs);
    password.addEventListener("input", validateInputs);

// add event listener to the login button
    loadButton.addEventListener("click", function (event) {
        // prevent the default action of the form button to refresh the page
        event.preventDefault();
        spinner.style.display = "block";
        // if the button is disabled, redirect to another page
        loadButton.disabled = true;
        setTimeout(function () {
            // Simulate a login process and redirect
            window.location.href = "home.html"; // redirect page
        }, 3000); // 3 seconds delay to show the spinner
    });
});


    // function for allpage
    function openAllPage() {
        document.getElementById('myModal').style.display = 'flex';
    }

    function closeAllPage() {
        document.getElementById('myModal').style.display = 'none';
    }

    // OR
    // let openAllPage = document.getElementById('mymodal');
    //     let closeAllPage = document.getElementById('mymodal');

    //     function openAllPage(){
    //         openAllPage.add;
    //     }

    //     function closeAllPage(){
    //         closeAllPage.remove;
    //     }

