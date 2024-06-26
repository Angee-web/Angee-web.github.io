// js for view all
//this is an array of the cloths we are displaying to users
let cloths = [
    {
      image:
        "pic1.jpg",
      nameOfCloth: "The Ballerina Dress",
      price: "N32,000",
    },
    {
        image:
        "pic2.jpg",
      nameOfCloth: "The Ballerina Dress",
      price: "N32,000",
    },
    {
        image:
        "pic3.jpg",
      nameOfCloth: "The Ballerina Dress",
      price: "N32,000",
    },
    {
        image:
        "pic4.jpg",
      nameOfCloth: "The Ballerina Dress",
      price: "N32,000",
    },
    {
        image:
        "pic8.jpg",
      nameOfCloth: "The Ballerina Dress",
      price: "N32,000",
    },
    {
        image:
        "pic5.jpg",
      nameOfCloth: "The Ballerina Dress",
      price: "N32,000",
    },
    {
        image:
        "pic6.jpg",
      nameOfCloth: "The Ballerina Dress",
      price: "N32,000",
    },
    {
        image:
        "pic7.jpg",
      nameOfCloth: "The Ballerina Dress",
      price: "N32,000",
    },
    {
        image:
        "images/pic9.jpg",
      nameOfCloth: "The Ballerina Dress",
      price: "N32,000",
    },
    {
        image:
        "images/10.jpg",
      nameOfCloth: "The Ballerina Dress",
      price: "N32,000",
    },
    {
        image:
        "images/11.jpg",
      nameOfCloth: "The Ballerina Dress",
      price: "N32,000",
    },
    {
        image:
        "images/12.jpg",
      nameOfCloth: "The Ballerina Dress",
      price: "N32,000",
    },
    {
        image:
        "images/14.jpg",
      nameOfCloth: "The Ballerina Dress",
      price: "N32,000",
    },
    {
        image:
        "images/15.jpg",
      nameOfCloth: "The Ballerina Dress",
      price: "N32,000",
    },
    {
        image:
        "images/17.jpg",
      nameOfCloth: "The Ballerina Dress",
      price: "N32,000",
    },{
        image:
        "images/18.jpg",
      nameOfCloth: "The Ballerina Dress",
      price: "N32,000",
    },{
        image:
        "images/19.jpg",
      nameOfCloth: "The Ballerina Dress",
      price: "N32,000",
    },
    {
        image:
        "images/20.jpg",
      nameOfCloth: "The Ballerina Dress",
      price: "N32,000",
    },
    {
        image:
        "images/21.jpg",
      nameOfCloth: "The Ballerina Dress",
      price: "N32,000",
    },{
        image:
        "images/25.jpg",
      nameOfCloth: "The Ballerina Dress",
      price: "N32,000",
    },
    {
        image:
        "images/23.jpg",
      nameOfCloth: "The Ballerina Dress",
      price: "N32,000",
    },
    {
      image:
      "images/20.jpg",
    nameOfCloth: "The Ballerina Dress",
    price: "N32,000",
  },
  {
    image:
    "images/24.jpg",
  nameOfCloth: "The Ballerina Dress",
  price: "N32,000",
},
  
  ];
  
  //get the container to append the data we are working with into
  const displayContainer = document.querySelector(".displayContainer");
  
  //creating a function that updates the ui
  function updateUi() {
    displayContainer.innerHTML = ""; // Clear the container before updating UI
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
  
  // function for view all
  function openAllPage() {
    document.getElementById('myModal').style.display = 'flex';
}

function closeAllPage() {
    document.getElementById('myModal').style.display = 'none';
}

// OR
// let openAllPage = document.getElementById('mymodal');
//         let closeAllPage = document.getElementById('mymodal');

//         function openAllPage(){
//             openAllPage.add;
//         }

//         function closeAllPage(){
//             closeAllPage.remove;
//         }

