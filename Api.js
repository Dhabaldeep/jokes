const joke = document.querySelector("#joke");
const jokebtn = document.querySelector("#jokebtn");

const container = document.getElementById("container");

const genretejokes = () => {
  const setHeader = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com/", setHeader)
    .then((response) => response.json())
    .then((data) => (joke.innerHTML = `${data.joke}`)).catch((err)=>{console.log(err)})
};
// joke.addEventListener
jokebtn.addEventListener("click", genretejokes);
genretejokes();
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAwUUG7HyOVulu_f_4yUGwJweGFRb8kSxM",
    authDomain: "asesome-fe86d.firebaseapp.com",
    projectId: "asesome-fe86d",
    storageBucket: "asesome-fe86d.appspot.com",
    messagingSenderId: "12718259626",
    appId: "1:12718259626:web:7a89db50f3e6ae25c6bfd3",
    measurementId: "G-6FYE3KVFDP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
