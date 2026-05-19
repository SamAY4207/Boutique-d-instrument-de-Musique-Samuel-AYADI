// role : questionner l'API
// parametre: 
// retour : 


fetch("instruments-musique-monde.json")
    .then(rep => {

        return rep.json()
    })
    .then(data => {
        // récupère toutes les données dans la console
        console.log(data)
        //afficheHero(data)
        affichePromesses(data.promesses)
        afficheProduits(data.produits)
    });

/**
 * role : récupérer les promesses 1 par 1 et de les afficher dans le dom
 * parametre : du tableau de promesses
 * return : rien car elle affiche
 */

/*
function afficheHero(data) {

        let HeroCard = `
        <div class="flex jistify-start align-center">
                <h2 class="w-100 mb-32 mt-32 gold shadow">${nomEntreprise}</h2>
                <h1 class="w-100 mb-32 mt-32 tang shadow">${accroche}</h1>
                <a href="#produits" class="w-100 mb-128 mt-128 btn">${callToAction}</a>
            </div>
        `
        document.querySelector("#hero").innerHTML += heroCard;

}
*/

function affichePromesses(tableauPromesses) {

    tableauPromesses.forEach(promesse => {

        let promesseCard = `
        <p class="w-30 broack pb-16 pt-16">${promesse}</p>
        
        `
        document.querySelector("#promesses").innerHTML += promesseCard;

    });
}

function afficheProduits(tableauProduits) {

    tableauProduits.forEach(produit => {

        let produitCard = `
                    <div class=" w-45 flex space-between align-center mb-32">
                        <img src="${produit.image}" alt="" class="w-30">
                        <div class="w-60 flex align-center justify-start pb-16 pt-16">
                            <h3 class="w-100 broack pb-16">${produit.nom}</h3>
                            <p class="w-100 broack pb-16">${produit.description}</p>
                        </div>
                    </div>

            
        `
        document.querySelector("#produits").innerHTML += produitCard;

    });
}
