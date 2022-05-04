import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getPerformance } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-performance.js";
const firebaseConfig = {
    apiKey: "AIzaSyAwfln0z2E_SZAUlCmHgS9Fkai1Y-D_iSc",
    authDomain: "greenribbonac-f7379.firebaseapp.com",
    projectId: "greenribbonac-f7379",
    storageBucket: "greenribbonac-f7379.appspot.com",
    messagingSenderId: "684664639900",
    appId: "1:684664639900:web:e684f3d10006a0e023b859",
    measurementId: "G-XNHZMGJ3N6"

};

const app = initializeApp(firebaseConfig);
getPerformance(app);
