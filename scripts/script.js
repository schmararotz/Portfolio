const button = document.getElementById('menuBtn');
const popup = document.getElementById('menu');

const buttonProfile = document.getElementById('profileBtn');
const popupProfile = document.getElementById('profileMenu');

// Funktion zum Schließen aller Popups
function closeAllPopups() {
  popup.classList.remove('visible');
  popupProfile.classList.remove('visible');
}

// Funktion zum sanften Scrollen nach oben
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Menü-Button
button.addEventListener('click', (e) => {
  e.stopPropagation();
  const isVisible = popup.classList.contains('visible');
  closeAllPopups();
  if (!isVisible) {
    popup.classList.add('visible');
    scrollToTop();
  }
});

// Profil-Button
buttonProfile.addEventListener('click', (e) => {
  e.stopPropagation();
  const isVisible = popupProfile.classList.contains('visible');
  closeAllPopups();
  if (!isVisible) {
    popupProfile.classList.add('visible');
    scrollToTop();
  }
});

// Klick innerhalb der Menüs → nicht schließen
popup.addEventListener('click', (e) => {
  e.stopPropagation();
});

popupProfile.addEventListener('click', (e) => {
  e.stopPropagation();
});

// Klick außerhalb → alle Popups schließen
document.addEventListener('click', () => {
  closeAllPopups();
});
