let fName = document.querySelector(".first-name");
let lName = document.querySelector(".last-name");
let destination = document.querySelector(".country");
let phNum = document.querySelector(".phone-number");
let st = document.querySelector(".state");
let town = document.querySelector(".city");
let gaon = document.querySelector(".village");

let details = () =>{
    let firstName = prompt("Enter Your first name: ");
let lastName = prompt("Enter your last name" );
let country = prompt("Enter your country; ");
let phoneNumber = prompt("Enter your phone number: ");
let state = prompt("Enter your state: ");
let city = prompt("Enter your city: ");
let village = prompt("Enter your village: ");

fName.innerText = firstName;
lName.innerText = lastName;
destination.innerText = country;
phNum.innerText = phoneNumber;
st.innerText = state;
town.innerText = city;
gaon.innerText = village;

localStorage.setItem("firstName", fName.innerText);
localStorage.setItem("lastName", lName.innerText);
localStorage.setItem("country", destination.innerText);
localStorage.setItem("phoneNumber", phNum.innerText);
localStorage.setItem("state", st.innerText);
localStorage.setItem("city", town.innerText);
localStorage.setItem("village", gaon.innerText);
}


window.onload = ()=>{
    if(localStorage.getItem("firstName") != ""){
        fName.innerText= localStorage.getItem("firstName");
        lName.innerText= localStorage.getItem("lastName");
        destination.innerText= localStorage.getItem("country");
        phNum.innerText= localStorage.getItem("phoneNumber");
        st.innerText= localStorage.getItem("state");
        town.innerText= localStorage.getItem("city");
        gaon.innerText= localStorage.getItem("village");        
    }else{
        details();
    }
}