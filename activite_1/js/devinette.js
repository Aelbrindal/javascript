/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme


var valeurEntree;
var compteur = 0;

do
{
    valeurEntree = Number(prompt("Entrez un nombre entre 1 et 100"));
    
    if (valeurEntree < solution)
        {
         console.log(valeurEntree + " est trop petit");
        }
    else if (valeurEntree > solution)
        {
         console.log(valeurEntree + " est trop grand");
        }
    compteur++;
} while (valeurEntree != solution && compteur < 6);

if (compteur < 6)
{
 console.log("Bravo!" + valeurEntree + " est la bonne réponse!");   
}
else if (compteur >= 6)
{
 console.log("C'est perdu! " + solution + " était la bonne réponse");
}