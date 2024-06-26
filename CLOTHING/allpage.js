// get the element to append to
let allPage = document.querySelector(".allpage")

// add event listener to open popup page
form.addEventListener("click", function(){
    // e.preventDefault();
    openAllPage();   
   })

//    function to add elements to all page
function updateUi() {
    allPageContainer.innerHTML = ""; // Clear the container before updating UI
    cloths.forEach((cloth) => {
      const cardBody = document.createElement("div");
  
      cardBody.innerHTML = `
        <div class="dis1">
        <div class="dis-img"><img src=${cloth.image} alt=${cloth.nameOfCloth}></div>
        <div class="dis-content">
            <p id="dressname">${cloth.nameOfCloth}</p>
            <p id="dressprice">${cloth.price}</p>
        </div>
     </div>
      `;
      displayContainer.append(cardBody);
    });
  }
  
  //invoking the function that updates the UI
  updateUi();