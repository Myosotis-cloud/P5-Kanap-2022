fetch("http://localhost:3000/api/products?id=42")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(art) {
    // console.log(art);
    // boucle itérant tous nos éléments
    for(let i = 0; i < art.length; i++){
    console.log(art[i]);
}
  })
  .catch(function(err) {
    alert('une erreur est survenue.');
    // Une erreur est survenue
  });


  document.querySelector('article').remove();

  // creation éléments de l'article
  let article     = document.createElement ('article');
  let section     = document.getElementById ('items');

  section.appendChild(article);
  document.querySelector("#items").append(article);

  let a           = document.createElement ('a');
  let img         = document.createElement ('img');
  let altTxt      = document.createElement ('altTxt');
  let h3          = document.createElement ('h3');
  let paragraphe  = document.createElement ('p');

  // personnalisation de nos éléments

  // METHODE 1
img.innerHTML    = "0.imageUrl";
img.innerHTML    = "1.imageUrl";
img.innerHTML    = "2.imageUrl";
img.innerHTML    = "3.imageUrl";
img.innerHTML    = "4.imageUrl";
img.innerHTML    = "5.imageUrl";
img.innerHTML    = "6.imageUrl";
img.innerHTML    = "7.imageUrl";

altTxt[0].textContent      = "Photo d'un canapé bleu, deux places";
altTxt[1].textContent      = "Photo d'un canapé jaune et noir, quattre places";
altTxt[2].textContent      = "Photo d'un canapé d'angle, vert, trois places";
altTxt[3].textContent      = "Photo d'un canapé rose, une à deux place";
altTxt[4].textContent      = "Photo d'un canapé gris, trois places";
altTxt[5].textContent      = "Photo d'un canapé gris, deux places";
altTxt[6].textContent      = "Photo d'un canapé rouge, deux places";
altTxt[7].textContent      = "Photo d'un canapé rose, trois places";

h3[0].textContent = "Kanap Sinopé";
h3[1].textContent = "Kanap Cyllène";
h3[2].textContent = "Kanap Calycé";
h3[3].textContent = "Kanap Autonoé";
h3[4].textContent = "Kanap Eurydomé";
h3[5].textContent = "Kanap Hélicé";
h3[6].textContent = "Kanap Thyoné";
h3[7].textContent = "Kanap orthosie";





  // METHODE 2
  a.innerHTML             = "<a href=''></a>";
  img.innerHTML           = "<img src='.../product01.jpg'>";
  altTxt.textContent      = ".altTxt";
  h3.textContent          = "name";
  paragraphe.textContent  = "description";

  
  // Afficher nos éléments sur notre page
  document.body.append (article, img, altTxt, h3, paragraphe);














