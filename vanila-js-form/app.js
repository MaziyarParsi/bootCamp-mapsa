

// get form from DOM
const form =document.getElementById("form")

// add submit event listener
form.addEventListener("submit",(evt)=>{
    // prevent defatul behaviour of form
    evt.preventDefault()

    // get form data
    const firstname=evt.target.fname.value
    const lastName=evt.target.lname.value
    // end of get form data

    // create object that we want to send to server
    const user= {
        fname:firstname,
        lname:lastName
    }

    // make a post request
    fetch("http://localhost:5000/users",{
        method:"POST",
        body:JSON.stringify(user),
        headers:{
            "Content-Type": "application/json",
        },
    })

})