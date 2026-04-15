// recuperiamo le informazioni dall'api library per effettuare un fetch delle informazioni che mi servono
const apidata = "https://striveschool-api.herokuapp.com/books  ";

let aggiungicarrello = [];

const book = function () {
  fetch(apidata)
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("La risposta che cerchi non esiste");
      }
    })
    .then((arraydilibri) => {
      const contenitore = document.getElementById("contenitore-card");
      arraydilibri.forEach((libri) => {
        const codice = libri.asin;
        const titolo = libri.title;
        const copertina = libri.img;
        const prezzo = libri.price;
        const genere = libri.category;
        console.log(arraydilibri);

        contenitore.innerHTML += ` 
       <div class= "col-6 col-md-3 col-lg-2 mb-4">
        <div class="card" >
  <img src=${copertina} class="card-img-top" alt=${copertina}>
  <div class="card-body">
    <h5 class="card-title">${titolo}</h5>
    <p class="card-text">${genere}</p>
    <p class="card-text"> ${prezzo}</p>
    <p class="card-text"> ${codice}</p>
    <a href="#" class="btn btn-primary">Acquista</a>
    <a href="#" class="btn btn-primary"  onclick="this.closest('.col-6').remove()  ">Scarta   </a>
  </div>
</div>   `;
      });
    })

    .catch((err) => {
      console.log("Errore generico");
    });
};

book();
