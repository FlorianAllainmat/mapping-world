import {data} from './data'
import {addMarkerOnMap} from './map'

const dreamsContainer = document.querySelector("#dreams-container");

function buildAllDreams(){
    while(dreamsContainer.hasChildNodes()){
        dreamsContainer.removeChild(dreamsContainer.lastChild);
    }
    data.forEach(buildOneDream)
}

function buildOneDream(dream){
    const dreamElement = document.createElement("div");
    dreamElement.innerHTML = `
    <div id="dreams-container">
        <div class="card text-center">
            <h4 class="card-header">
                ${dream.name}
            </h4>
            <img class="card-img-top" src="${dream.imagePath}" alt="image dream">
            <div class="card-body">
                <a href="#" class="btn btn-${dream.done ? "secondary" : "danger"} font-weight-bold btn-block">${dream.done ? "Je veux le refaire" : "Je me lance !"}</a>
            </div>
            <div class="card-footer text-muted text-right">
                <a href="#" class="btn btn-outline-secondary btn-sm">Visiter</a>
                <a href="${dream.link}" class="btn btn-outline-secondary btn-sm">Plus d'infos</a>
            </div>
        </div>
    </div>`;

    dreamsContainer.appendChild(dreamElement);

    addMarkerOnMap(dream);

}


export {buildAllDreams};