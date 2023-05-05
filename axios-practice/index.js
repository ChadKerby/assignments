// Get requests with axios
// url: https://api.vschool.io/chadkerby1/todo

// Get All

axios.get("https://api.vschool.io/chadkerby/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = response.data[i].title
            document.body.appendChild(h1)
        }
    })
    .catch(error => console.log(error))


// Get One

// axios.get("https://api.vschool.io/chadkerby1/todo/5d8bd511ee91575e6d49e06e")
//     .then(response => console.log(response))
//     .catch(error => console.log(error))
