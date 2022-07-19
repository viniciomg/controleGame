import { getDatabase, ref, set,push,update ,child } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";


const botaoPular = document.querySelector("#botaoPular");
const botaoBaixar= document.querySelector("#botaoAgachar");
const botaoAndar= document.querySelector("#botaoAndar");
const botaVoltar= document.querySelector("#botaVoltar");
const botaoEnter= document.querySelector("#botaoEnter");

var andar = false;
var voltar = false;
var pular = false;

const firebaseConfig = {
  apiKey: "AIzaSyAx5eBV57UAbun8qnqg3Zs0LrYrQSL_T0Y",
  authDomain: "marioword-5d26f.firebaseapp.com",
  projectId: "marioword-5d26f",
  storageBucket: "marioword-5d26f.appspot.com",
  messagingSenderId: "301054476390",
  appId: "1:301054476390:web:69c220c02a476e856c2da7",
  measurementId: "G-NVL7D37L6S",
  databaseURL :"https://marioword-5d26f-default-rtdb.firebaseio.com"
  
};
 
     const app = initializeApp(firebaseConfig);
     const db = getDatabase();
     const newPostKey = push(child(ref(db), 'acoes')).key;
     console.log(newPostKey);
     console.log(db);

     
      function updateBanco(pulando, andando, voltando, baixando){
        var acaoId = "0";
     set(ref(db, 'acoes/' + acaoId), {
      pular: pulando,
      andar: andando,
      voltar : voltando,
      baixar :baixando
      
    });
      }

    botaoPular.addEventListener("touchstart", ()=>{
      updateBanco(true, false, false, false );
      console.log("update");
      pular = true;
    });
   
    botaoBaixar.addEventListener("mousedown", ()=>{
      updateBanco(false, false, false, true );
      console.log("update");
    });     
    botaoAndar.addEventListener("mousedown", ()=>{
      if(pular)
        updateBanco(pular, true, false, false );
      else
        updateBanco(false, true, false, false );
      console.log("update");
    });  
    botaVoltar.addEventListener("mousedown", ()=>{
      updateBanco(false, false, true, false );
      console.log("update");
    });
   botaoPular.addEventListener("touchend", ()=>{
      updateBanco(false, false, false, false );
      pular  =false;
    });
    botaoAndar.addEventListener("touchend", ()=>{
      updateBanco(false, false, false, false );
      andar = false;
    });  


    
