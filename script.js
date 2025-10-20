// script.js (nuovo)
// Importa Firebase dai CDN ufficiali
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getDatabase, ref, get, set, update, onValue } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-database.js";

// 🔥 Incolla qui i tuoi dati personali da Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBe89m78sURh5w-Bd7_ss6uBw0iThn_zcQ",
  authDomain: "dummy-counter-c83c9.firebaseapp.com",
  databaseURL: "https://dummy-counter-c83c9-default-rtdb.firebaseio.com",
  projectId: "dummy-counter-c83c9",
  storageBucket: "dummy-counter-c83c9.firebasestorage.app",
  messagingSenderId: "334499392619",
  appId: "1:334499392619:web:2d46b488f9a87d2370552e"
};

// Inizializza l'app
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Riferimenti ai dati nel database
const belenRef = ref(db, "counts/belen");
const alexRef = ref(db, "counts/alex");

// Elementi del DOM
const belenDisplay = document.querySelector('#belen-count');
const alexDisplay = document.querySelector('#alex-count');
const belenBtn = document.querySelector('#belen-btn');
const alexBtn = document.querySelector('#alex-btn');

// Mostra i valori in tempo reale
onValue(belenRef, snapshot => {
  belenDisplay.textContent = snapshot.val() || 0;
});

onValue(alexRef, snapshot => {
  alexDisplay.textContent = snapshot.val() || 0;
});

// Aggiorna i valori quando si clicca
belenBtn.addEventListener('click', async () => {
  const newValue = (parseInt(belenDisplay.textContent) || 0) + 1;
  await set(belenRef, newValue);
  animateCount(belenDisplay);
});

alexBtn.addEventListener('click', async () => {
  const newValue = (parseInt(alexDisplay.textContent) || 0) + 1;
  await set(alexRef, newValue);
  animateCount(alexDisplay);
});

// Piccola animazione
function animateCount(element) {
  element.style.transform = "scale(1.4)";
  element.style.transition = "transform 0.2s";
  setTimeout(() => {
    element.style.transform = "scale(1)";
  }, 200);
}
