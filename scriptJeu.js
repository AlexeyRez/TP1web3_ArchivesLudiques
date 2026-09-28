
//va chercher un element html par son id special et lui rajoute un listener
document.getElementById("BoutonMenu").addEventListener('click', function(){
   
   
    //variable pour lelement a cacher
    const PopUp = document.getElementById('menucaché');
    console.log("clicked the burger!")
    //verifier si le menu burger est caché, puis le montrer si il l'est, puis vice-versa
    if (PopUp.style.display ==='none'){
        //un seul egal pour assigner, 3 pour verifier
        PopUp.style.display ='block';
    }
    else{ PopUp.style.display ='none';
    }

});