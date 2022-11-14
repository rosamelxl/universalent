const db = firebase.firestore();




const obtenerr = () => db.collection('testitau').get();
 window.addEventListener("DOMContentLoaded", async (e) =>{
   

   const QuerySnapshot = await obtenerr();
   


QuerySnapshot.forEach(doc => {
 
    const{sdsd}= doc.data();
    let mond = sdsd;
   
   





    var mylist = document.getElementById('mylist');
var  ttoje = mond
mylist.insertAdjacentHTML('beforeend',ttoje );
var scr = document.createElement('script');
scr.src = 'scripts.js';
document.body.appendChild(scr);

   });
})
