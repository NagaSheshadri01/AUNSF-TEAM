const API_URL =
"https://script.google.com/macros/s/AKfycbzs3m6E30LdPcHBTKfXZ_k3Xn87f0yb5Qo2vz9feX3Z4FxaCs3sf6uWuBdfjcjo_VRS/exec";



const params =
new URLSearchParams(
window.location.search
);


const roll =
params.get("roll");



if(!roll){

document.getElementById("name")
.innerText =
"No QR Data";

}
else{


fetch(
API_URL + "?roll=" + roll
)

.then(res=>res.json())

.then(data=>{


if(data.error){

document.getElementById("name")
.innerText =
"Member Not Found";

return;

}



document
.getElementById("name")
.innerText =
data.name || "Unknown";



document
.getElementById("core")
.innerText =
data.core || "";



document
.getElementById("dept")
.innerText =
data.department || "";



document
.getElementById("roll")
.innerText =
"Roll: " + data.roll;



if(data.image){

document
.getElementById("profileImage")
.src =
data.image;

}



if(data.instagram){

document
.getElementById("instagram")
.href =
data.instagram;

}


if(data.linkedin){

document
.getElementById("linkedin")
.href =
data.linkedin;

}


})


.catch(error=>{


document
.getElementById("name")
.innerText =
"Error loading profile";


});

}