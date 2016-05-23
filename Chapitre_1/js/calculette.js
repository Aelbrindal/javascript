var num1, num2, choix, resultat;
alert("Choisissez l'opération à effectuer");
choix = prompt("1. Addition \n2. Soustraction \n3. Multiplication \n4. Division");
num1 = prompt("Entrez le premier numéro");
num2 = prompt("Entrez le deuxième numéro");
num1 = Number(num1);
num2 = Number(num2);

function Afficher(affichage) 
    {
    console.log(affichage);
    }

if (choix == 1)
    {
    Afficher("Vous avez choisi " + choix + " : Addition")
    resultat = num1 + num2;
    Afficher(resultat + " est le resultat du calcul");
    }
else if (choix == 2)
    {
    Afficher("Vous avez choisi " + choix + " : Soustraction")
    resultat = num1 - num2;
    Afficher(resultat + " est le resultat du calcul");
    }
else if (choix == 3)
    {
    Afficher("Vous avez choisi " + choix + " : Multiplication")
    resultat = num1 * num2;
    Afficher(resultat + " est le resultat du calcul");    
    }
else if (choix == 4)
    {
    Afficher("Vous avez choisi " + choix + " : Division")
    resultat = num1 / num2;
    Afficher(resultat + " est le resultat du calcul");
    }
else alert("Choix non valide, bug de la matrice. Veuillez actualiser la page");