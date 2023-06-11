const ContenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const ContenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const ContenantResultat = document.getElementById('resultat');

const choixPossibles = document.querySelectorAll('button');
let choixUtilisateur;
let choixOrdinateur;
let resultat;

choixPossibles.forEach(choixPossibles => choixPossibles.addEventListener('click', (e) =>{
    choixUtilisateur = e.target.id;
    ContenantChoixUtilisateur.innerHTML = `<img src ="./Img/Web/${choixUtilisateur}.png">`
    generer_choix_ordinateur()
}))

function generer_choix_ordinateur(){
    random = Math.floor(Math.random() * 3) + 1;
    if (random == 1)
    {
        choixOrdinateur= "rock"
    }
    else if (random == 2)
    {
       choixOrdinateur = "paper"
    }
    else if (random == 3)
    {
        choixOrdinateur = "scissors"
    }
    ContenantChoixOrdinateur.innerHTML = `<img src ="./Img/Web/${choixOrdinateur}.png">`
    verification()
}

function verification(){
    if (choixOrdinateur == choixUtilisateur)
    {
        resultat = "Equality !"
    }
    if (choixOrdinateur == "rock" && choixUtilisateur == "paper")
    {
        resultat = "Won !"
    }
    if (choixOrdinateur == "rock" && choixUtilisateur == "scissors")
    {
        resultat = "Lost !"
    }
    if (choixOrdinateur == "paper" && choixUtilisateur == "scissors")
    {
        resultat = "Won !"
    }
    if (choixOrdinateur == "paper" && choixUtilisateur == "rock")
    {
        resultat = "Lost !"
    }
    if (choixOrdinateur == "scissors" && choixUtilisateur == "paper")
    {
        resultat = "Lost !"
    }
    if (choixOrdinateur == "scissors" && choixUtilisateur == "rock")
    {
        resultat = "Won !"
    }

    ContenantResultat.innerHTML = resultat;
}