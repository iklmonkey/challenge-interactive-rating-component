//assigns the variables to be used in the JS functions below
const card_rating = document.querySelector(".card-rating");
const card_submitted = document.querySelector(".card-submitted");
const submit = document.querySelector("#submit");
const ratings = document.querySelectorAll(".rating-button");
const submitted_rating = document.querySelector(".submitted-rating")


// -----------------------------------------------------
//code for when the rating buttons are clicked
// -----------------------------------------------------
ratings.forEach(rating => {
    rating.addEventListener('click', amendBtnClick);
});

function amendBtnClick(event) {
    ratings.forEach(rating => {
        //removes the .active classList from each button
        rating.classList.remove('active');

        //when the desired button is clicked it assigns the innerHTML (value)
        //to the submitted_rating variable in the card-submitted container
        //Basically it assigns the value to the 'You selected (submitted-rating) 
        //out of 5.  
        rating.addEventListener('click', () => {
            submitted_rating.innerHTML = rating.innerHTML;
        });
    });
    //assign the .active class to the clicked rating-button
    if (event.target.classList.contains("rating-button")) {
        event.target.classList.add('active');
    }
}

// -----------------------------------------------------
// when the submit button is clicked I call for the 
// displayCardSubmitted function
// ------------------------------------------------------
submit.addEventListener('click', displayCardSubmitted);

function displayCardSubmitted() {
    card_rating.classList.add("hide");
    card_submitted.classList.remove("hide");
    // console.log("clicked")
}

// -----------------------------------------------------
// unsuccessful code
// ------------------------------------------------------
// else {
//     event.target.parentElement.classList.add('active');
// }

// ratings.forEach(rating => {
//     rating.addEventListener('click', () => {
//         // console.log(rate.innerHTML);
//         submitted_rating.innerHTML = rating.innerHTML;

//         //changes the color of the selected button

//         ratings.forEach((subRating => {
//             if (subRating === rating) {
//                 subRating.classList.toggle('show');
//             }
//             subRating.classList.remove('show');
//         }))
//         rating.classList.add("active");

//     })
// });

// const numbersBtns = document.querySelectorAll(".rating-button");

// numbersBtns.forEach((numberBtn) => {
//     numberBtn.addEventListener('click', () => {
//         numbersBtns.forEach((subBtn) => {
//             if (subBtn === numberBtn) {
//                 subBtn.classList.toggle('show');
//             }
//             subBtn.classList.remove('show');
//         })
//     })
// })
//---------------------------------------------------------