let prix = Number(prompt("Quel est le prix de l'article ?"));
let quantite = Number(prompt("Quelle est la quantité ?"));

let total = prix * quantite;

if (total > 50) {
    total = total * 0.9;
}

alert("Le total à payer est de " + total.toFixed(2) + " €");