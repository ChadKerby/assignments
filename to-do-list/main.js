const form = document.input
let editButton = document.createElement("button");
let clearButton = document.createElement("button");
let doneButton = document.createElement("button");
let newLi = document.createElement("li");
let newDiv = document.createElement("div");

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const userInput = form.userInput.value;
    form.userInput.value = ""

    newDiv.textContent = userInput;
    editButton.textContent = "Edit";
    clearButton.textContent = "X";
    doneButton.textContent = "Done";

    
    list.append(newLi);
    newLi.append(newDiv, clearButton, editButton, doneButton);
    
})

// Clear Button
clearButton.addEventListener("click", function(){
   newDiv.remove()
   newLi.remove()
   editButton.remove()
   clearButton.remove() 
})
// Edit Button
editButton.addEventListener("click", function(){
    newDiv.contentEditable = true;
    newDiv.style.backgroundColor = "#dddbdb"; 
})
// Done with edit button
doneButton.addEventListener("click", function(){
    newDiv.contentEditable = false;
    newDiv.style.backgroundColor = "white";
})

