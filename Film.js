const header = document.querySelector('header');
const section = document.querySelector('section');

let requestURL = 'https://raw.githubusercontent.com/GillesCLL/420-4c5-ll-bd_securite/master/Film.json';

let Request = new XMLHttpRequest();
Request.open('Get', requestURL);
Request.responseType= 'json';
Request.send();
Request.onload= MaFonctionCallBack;

function MaFonctionCallBack(){
    const Film = this.response;
    ConstruireEntete(Film); 
    AfficherAuteur(Film);
}

function ConstruireEntete(jsonObj){
    const myH1 = document.createElement('h1');
    myH1.textContent=jsonObj['Titre'];
    header.appendChild(myH1);

    const myPara1 = document.createElement('p');
    myPara1.textContent= 'Directeur: ' + jsonObj['directeur'] + ' // Auteur: ' + jsonObj['Auteur'];
    header.appendChild(myPara1);

    const myPara2 = document.createElement('p');
    myPara2.textContent= 'Date: ' + jsonObj['Date'];
    header.appendChild(myPara2);
}

function AfficherVedette(jsonObj){
    const Vedette = jsonObj['Vedette'];
    for (var i = 0; i < Vedette.length; i++){
        const Nom = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');

        myH2.textContent = Vedette[i].Nom;
        myPara1.textContent = 'Personnage: ' + Vedette[i].Personnage;

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);

        section.appendChild(myArticle);
    }
}
