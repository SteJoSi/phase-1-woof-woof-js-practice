document.addEventListener("DOMContentLoaded", () => {
    console.log("All Content Loaded")  
    // addDogs()
})

//Step 2: ADD PUPS TO DOG BAR
function addDogs() {
    fetch("http://localhost:3000/pups")
    .then(resp => resp.json())
    .then(dogs => )
}
addDogs()

//STEP 3: SHOW MORE INFO ABOUT EACH PUP
function doggoInfo() {}