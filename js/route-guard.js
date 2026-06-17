import {
onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

import { auth }
from "./firebase-config.js";

onAuthStateChanged(
auth,
(user)=>{

if(!user){

window.location =
"index.html";

}

});
