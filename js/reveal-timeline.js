// Sélectionne l'élément conteneur qui scrolle, ici la section "card"
const scrollContainer = document.querySelector('.card');

// Fonction qui détecte si un élément est visible dans le conteneur de défilement
function isInViewport(element, container) {
    const rect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    
    // Vérifie que l'élément est visible dans les limites du conteneur
    return (
        rect.top < containerRect.bottom &&
        rect.bottom > containerRect.top
    );
}

// Fonction pour ajouter la classe "visible" aux éléments visibles dans le conteneur
function revealTimelineItems() {
    const items = document.querySelectorAll('.card-item');
    items.forEach(item => {
        if (isInViewport(item, scrollContainer)) {
            item.classList.add('visible');
        }
    });
}

// Écouteur d'événement sur le défilement du conteneur spécifique
scrollContainer.addEventListener('scroll', revealTimelineItems);