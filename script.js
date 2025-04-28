let panier = [];

function ajouterAuPanier(nomProduit) {
    panier.push(nomProduit);
    afficherNotification(nomProduit);
    afficherPanier();
}

function afficherPanier() {
    console.log("Panier actuel :");
    panier.forEach((produit, index) => {
        console.log((index + 1) + " - " + produit);
    });
}

function afficherNotification(nomProduit) {
    const notification = document.createElement('div');
    notification.classList.add('panier-notification');
    notification.textContent = nomProduit + " a été ajouté au panier !";
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}
