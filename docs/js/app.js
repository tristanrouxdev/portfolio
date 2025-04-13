function toggleCarte(carte) {
    carte.classList.toggle('active');
  }


function openLightbox(img) {
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  lightbox.style.display = "block";
  lightboxImg.src = img.src;
}

document.querySelector(".close").onclick = function () {
  document.getElementById("lightbox").style.display = "none";
};

// Fermer en cliquant à l’extérieur de l’image
document.getElementById("lightbox").onclick = function (event) {
  if (event.target === this) {
    this.style.display = "none";
  }
};
