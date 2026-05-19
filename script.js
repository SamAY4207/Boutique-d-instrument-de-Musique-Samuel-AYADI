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
        afficheServices(data.services)
        afficheTemoignages(data.temoignages)
    });

/**
 * role : récupérer les infos a destination du hero 1 par 1 et les afficher à l'endroit prévus (#hero)
 * parametre : infos à destination du hero (nomEntreprise, accroche, callToAction)
 * return : rien car elle affiche
 */


function afficheHero(data) {

        let HeroCard = `
        <div class="flex jistify-start align-center">
                <h2 class="w-100 mb-32 mt-32 gold shadow">${data.nomEntreprise}</h2>
                <h1 class="w-100 mb-32 mt-32 tang shadow">${data.accroche}</h1>
                <a href="#produits" class="w-100 mb-128 mt-128 btn">${data.callToAction}</a>
            </div>
        `
        document.querySelector("#hero").innerHTML += heroCard;

}

/**
 * role : récupérer les promesses 1 par 1 et les afficher à l'endroit prévus (#promesses)
 * parametre : du tableau de promesses
 * return : rien car elle affiche
 */

function affichePromesses(tableauPromesses) {

    tableauPromesses.forEach(promesse => {

        let promesseCard = `
        <p class="w-30 broack pb-16 pt-16">${promesse}</p>
        
        `
        document.querySelector("#promesses").innerHTML += promesseCard;

    });
}

/**
 * role : récupérer les produits 1 par 1 et les afficher à l'endroit prévus (#produits)
 * parametre : du tableau des produits
 * return : rien car elle affiche
 */

function afficheProduits(tableauProduits) {

    tableauProduits.forEach(produit => {

        let produitCard = `
                    <div class=" w-45 flex space-between align-center mb-32">
                        <img src="${produit.image}" alt="" class="w-30 border-radius-10">
                        <div class="w-60 flex align-center justify-start pb-16 pt-16">
                            <h3 class="w-100 broack pb-16">${produit.nom}</h3>
                            <p class="w-100 broack pb-16">${produit.description}</p>
                        </div>
                    </div>

            
        `
        document.querySelector("#produits").innerHTML += produitCard;

    });
}

/**
 * role : récupérer les services 1 par 1 et les afficher à l'endroit prévus (#services)
 * parametre : du tableau des services
 * return : rien car elle affiche
 */

function afficheServices(tableauServices) {

    tableauServices.forEach(service => {

        let serviceCard = `
                    <div class="w-30 flex justify-start align-center pb-16 pt-16">
                        <img src="${service.image}" alt="" class="w-100 border-radius-25">
                        
                        <div class="w-100 flex justify-start align-center pb-16 pt-16">
                            <h3 class="w-100 broack pb-16">${service.nom}</h3>
                            <p class="w-100 broack pb-16">${service.description}</p>

                        </div>
                    </div>

            
        `
        document.querySelector("#services").innerHTML += serviceCard;

    });
}

/**
 * role : récupérer les témoignages 1 par 1 et les afficher à l'endroit prévus (#temoignages)
 * parametre : du tableau des témoignages
 * return : rien car elle affiche
 */

function afficheTemoignages(tableauTemoignages) {

    tableauTemoignages.forEach(temoignage => {

        let temoignageCard = `
                    <div class="w-75 flex justify-start align-center pb-16 pt-16">
                            <h3 class="w-100 broack pb-16 pt-16">${temoignage.prenom}</h3>
                            <h4 class="w-100 broack pb-16 pt-16">${temoignage.prestation}</h4>
                            <p class="w-100 broack pb-16 pt-16">${temoignage.commentaire}!</p>
                        </div>
                        <p class="w-20 gold">${temoignage.note}/5</p>

            
        `
        document.querySelector("#temoignages").innerHTML += temoignageCard;

    });
}