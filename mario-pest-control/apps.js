const form = document.pestForm;

form.addEventListener("submit", function(e){
    e.preventDefault()

    const goombaTotal = Number(form.goomba.value)* 5;
    const bobombTotal = Number(form.bobomb.value)* 7;
    const cheepTotal = Number(form.cheep.value)* 11;
    let totalPrice = parseInt(goombaTotal) + parseInt(bobombTotal) + parseInt(cheepTotal);
    
    form.goomba.value = "";
    form.bobomb.value = "";
    form.cheep.value = "";

    const h1 = document.createElement("h1");
    h1.textContent = totalPrice;
    document.getElementById("total").append(h1);
})
