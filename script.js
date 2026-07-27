const params = new URLSearchParams(window.location.search);

const roll = params.get("roll");

fetch("https://script.google.com/macros/s/AKfycbwhYmbeTIMsQ7g-MuQN-zGUGeVc6Ce6wiLruBcp-pBLkTy2B6-c9kPjNbdKI9vTM5I_/exec?roll=" + encodeURIComponent(roll))
.then(r=>r.json())
.then(data=>{

document.getElementById("photo").src=data.image;

document.getElementById("name").innerText=data.name;

document.getElementById("core").innerText=data.core;

document.getElementById("dept").innerText=data.department;

document.getElementById("linkedin").href=data.linkedin;

document.getElementById("instagram").href=data.instagram;

document.getElementById("email").href="mailto:"+data.email;

document.getElementById("email").innerText=data.email;

document.getElementById("phone").href="tel:"+data.phone;

document.getElementById("phone").innerText=data.phone;

})
.catch(()=>{

document.body.innerHTML="<h2 style='text-align:center'>Member Not Found</h2>";

});