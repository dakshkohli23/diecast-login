import {
sendPasswordResetEmail
}
from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

import {
auth
}
from "./firebase-config.js";

document
.getElementById("resetBtn")
.addEventListener(
"click",
async()=>{

const email =
document.getElementById("email").value;

try{

await sendPasswordResetEmail(
auth,
email
);

document
.getElementById("msg")
.innerHTML =
"Reset email sent";

}catch(error){

document
.getElementById("msg")
.innerHTML =
error.message;

}

});
