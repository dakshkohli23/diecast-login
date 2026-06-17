import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA2-6u8rETOIn9xUJQW0ZODFupZQ56orJg",
  authDomain: "diecast-tracking-471f7.firebaseapp.com",
  projectId: "diecast-tracking-471f7",
  storageBucket: "diecast-tracking-471f7.firebasestorage.app",
  messagingSenderId: "1042711268055",
  appId: "1:1042711268055:web:9b09ded970a85532767e92"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
