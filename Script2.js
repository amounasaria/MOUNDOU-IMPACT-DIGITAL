let panier = [];

// Fonction pour ajouter un produit au panier
function ajouterAuPanier(nomProduit) {
    panier.push(nomProduit);
    afficherNotification(nomProduit);
    afficherPanier();
}

// Fonction pour afficher une notification lorsque l'article est ajouté au panier
function afficherNotification(nomProduit) {
    const notification = document.createElement('div');
    notification.classList.add('panier-notification');
    notification.textContent = nomProduit + " a été ajouté au panier !";
    
    document.body.appendChild(notification);

    // Affiche la notification et la fait disparaître après 3 secondes
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        document.body.removeChild(notification);
    }, 3000);
}

// Fonction pour afficher le contenu actuel du panier dans la console
function afficherPanier() {
    console.clear();
    console.log("Panier actuel :");
    panier.forEach((produit, index) => {
        console.log((index + 1) + " - " + produit);
    });
}

// Exemple d'ajout de produits, chaque bouton appelant la fonction avec le nom du produit
document.querySelectorAll('.carte-produit button').forEach(button => {
    button.addEventListener('click', function() {
        const produit = this.closest('.carte-produit').querySelector('h3').textContent;
        ajouterAuPanier(produit);
    });
});
