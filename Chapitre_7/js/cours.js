var Personnage = {
    nom: "",
    sante: 0,
    attaque: 0,
    xp: 0,

    // Renvoie la description du personnage
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie, " +
            this.attaque + " en attaque et " + this.xp + " points d'expérience";
        return description;
    }
};

var perso1 = Object.create(Personnage);
perso1.nom = "Aurora";
perso1.sante = 150;
perso1.attaque = 25;

var perso2 = Object.create(Personnage);
perso2.nom = "Glacius";
perso2.sante = 130;
perso2.attaque = 35;

console.log(perso1.decrire());
console.log(perso2.decrire());

