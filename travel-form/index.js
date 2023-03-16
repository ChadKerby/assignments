const form = document.myForm
const submit = document.getElementById("submit");

form.addEventListener("submit", (event) =>{
    event.preventDefault()

})

// Creates alert popup on SUBMIT (10-33)
function submitAlert(){
    var firstName = form["first-name"].value;
    var lastName = form["last-name"].value;
    var age = form["age"].value;
    var gender = form["gender"].value;
    var checkedLocation = [];
    var checkedDiet = [];

    for(let i = 0; i < form.diet.length; i++){
        if(form.diet[i].checked){
            checkedDiet.push(form.diet[i].value)
        }
    }

    for(let i = 0; i < form.travel.length; i++){
        if(form.travel[i].checked){
            checkedLocation.push(form.travel[i].value)
        }
    }
   
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + checkedLocation + "\nDiet: " + checkedDiet);
}

submit.addEventListener("click", submitAlert);