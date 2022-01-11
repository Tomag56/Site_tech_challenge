// CopyrJS
let copy = document.getElementById('copy');
let annee = new Date();
copy.textContent = annee.getFullYear();

console.log(annee);

// Température
let villeChoisie = 'London';
// recevoirTemperature(villeChoisie);
recevoirTemperature(villeChoisie);

function recevoirTemperature(ville) {
  const url =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    ville +
    '&appid=412c726c0d9d1f4b04995fe4ebd306c4&units=metric';

  let requete = new XMLHttpRequest(); // Nous créons un objet qui nous permettra de faire des requêtes
  requete.open('GET', url); // Nous récupérons juste des données
  requete.responseType = 'json'; // Nous attendons du JSON
  requete.send(); // Nous envoyons notre requête

  // Dès qu'on reçoit une réponse, cette fonction est executée
  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        console.log(reponse);
        let temperature = reponse.main.temp;
        let ville = reponse.name;
        console.log(temperature);
        document.querySelector('#temperature_label').textContent = temperature;
        document.querySelector('#ville').textContent = ville;
      } else {
        alert('Un problème est intervenu, merci de revenir plus tard.');
      }
    }
  };
}

// Popup Formulaire
let boutonFormulaire = document.querySelector('button');
boutonFormulaire.addEventListener('click', function () {
  alert('Le Royaume vous remercie de votre message !!');
  console.log('alors ?');
});
