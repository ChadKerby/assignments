const form= document["addItem"]

const list = document.getElementById("list");

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const userInput = form.title.value;
    form.title.value = ""
    let newLi = document.createElement("li");
    let newDiv = document.createElement("div");
    let editButton = document.createElement("button");
    let clearButton = document.createElement("button");

    newDiv.textContent = userInput;
    editButton.textContent = "edit";
    clearButton.textContent = "X";

    clearButton.addEventListener("click", function(e){
       newDiv.remove()
       editButton.remove()
       clearButton.remove()
    })

    list.append(newLi);
    newLi.append(newDiv);
    newLi.append(clearButton)
    newLi.append(editButton);

})

