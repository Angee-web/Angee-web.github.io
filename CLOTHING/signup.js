
    
    
// // GETTING THE ELEMENT TO APPEND FUNCTIONS TO
    let form = document.querySelector("#formSub");
// INSPECTION
    console.log(form)
// ADDING EVENT LISTENER TO THE FORM TO PREVENT THE DEFAULT OF SUBMISSION THAT REFRESHES THE PAGE AND AUTOMATICALLY TRIGGERS THE CLOSEPOPUP FUNCTION WHICH MAKES IT TO FLASH AND GO AWAY AND NOT STAY
    form.addEventListener("submit", function(e){
     e.preventDefault();
     openPopup();   
     clearForm();
    })

    function openPopup(e){
        // e.preventDefault();
popup.classList.add("open-popup");
    }
// close the popup message
    function closePopup(){
popup.classList.remove("open-popup");
    }
// clear the form after submission
    function clearForm(){
        form.reset();
    }


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

