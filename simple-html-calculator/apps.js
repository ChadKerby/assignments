const add = document["add"];
const sub = document["subtract"];
const mul = document["multiply"]
// Add Event
add.addEventListener("submit", function(event){
    event.preventDefault()
    
    const add1 = add.firstAdd.value;
    const add2 = add.secondAdd.value;
    add.firstAdd.value = "";
    add.secondAdd.value = "";
    const addResult = parseInt(add1) + parseInt(add2);
    const h1 = document.createElement("h1");
    h1.textContent = addResult;
    document.getElementById("result1").append(h1);
});

// Subtract Event
sub.addEventListener("submit", function(event){
    event.preventDefault()

    const sub1 = sub.firstSub.value;
    const sub2 = sub.secondSub.value;
    sub.firstSub.value = "";
    sub.secondSub.value = "";
    const subResult = parseInt(sub1) - parseInt(sub2);
    const h1 = document.createElement("h1");
    h1.textContent = subResult;
    document.getElementById("result2").append(h1);
});

// Multiply Event
mul.addEventListener("submit", function(event){
    event.preventDefault()

    const mul1 = mul.firstMul.value;
    const mul2 = mul.secondMul.value;
    mul.firstMul.value = "";
    mul.secondMul.value = "";
    const mulResult = parseInt(mul1) * parseInt(mul2);
    const h1 = document.createElement("h1");
    h1.textContent = mulResult;
    document.getElementById("result3").append(h1);
});