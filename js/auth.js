import {
signInWithEmailAndPassword,
setPersistence,
browserLocalPersistence,
browserSessionPersistence
}
from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

import { auth } from "./firebase-config.js";

const form =
document.getElementById("loginForm");

form.addEventListener(
"submit",
async(e)=>{

e.preventDefault();

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

const remember =
document.getElementById("remember").checked;

try{

await setPersistence(
auth,
remember
? browserLocalPersistence
: browserSessionPersistence
);

const userCredential =
await signInWithEmailAndPassword(
auth,
email,
password
);

const user =
userCredential.user;

if(
user.email.toLowerCase() ===
"dlaize@dlaize.com"
){

window.location =
"admin.html";

}else{

window.location =
"dashboard.html";

}

}catch(error){

document.getElementById(
"error"
).innerText =
error.message;

}

});
