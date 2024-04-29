// Funkcja do obsługi kliknięcia przycisku "Nie"
function handleNieButtonClick() {
    // Ukrywamy przyciski po wybraniu opcji "Nie"
    var takButton = document.getElementById('takButton');
    var nieButton = document.getElementById('nieButton');
    takButton.style.display = 'none';
    nieButton.style.display = 'none';

    // Usuwamy napis główny "Czy szreku goli jaja?"
    var mainHeading = document.querySelector('h1');
    mainHeading.style.display = 'none';

    // Tworzymy element <img> do wyświetlenia GIF-a
    var img = document.createElement('img');
    img.src = 'https://tiross.pl/169-large_default/ts1348.jpg'; // Zastąp 'link_do_twojego_gifa.gif' adresem URL twojego GIF-a

    // Dodajemy klasę lub style dla animacji GIF-a (opcjonalne)
    img.classList.add('gif-animation'); // Dodajemy klasę CSS, jeśli chcesz dostosować styl animacji

    // Ustawiamy styl dla wyśrodkowania GIF-a
    img.style.display = 'block';
    img.style.margin = 'auto';

    // Pobieramy miejsce odpowiedzi
    var responseDiv = document.getElementById('response');

    // Dodajemy GIF do miejsca odpowiedzi
    responseDiv.appendChild(img);
}

// Obsługa przycisku "Nie"
document.getElementById('nieButton').addEventListener('click', handleNieButtonClick);

// Obsługa przycisku "Tak"
document.getElementById('takButton').addEventListener('click', function() {
    // Inkrementujemy rozmiar przycisku "Nie" (np. o 10 pikseli)
    var nieButton = document.getElementById('nieButton');
    var currentWidth = nieButton.clientWidth;
    var currentHeight = nieButton.clientHeight;
    var newWidth = currentWidth + 10;
    var newHeight = currentHeight + 10;
    nieButton.style.width = newWidth + 'px';
    nieButton.style.height = newHeight + 'px';

    // Zwiększamy czcionkę na przycisku "Nie"
    var currentFontSize = parseFloat(window.getComputedStyle(nieButton).fontSize);
    var newFontSize = currentFontSize + 2; // Zwiększ czcionkę o 2 punkty (dostosuj według potrzeb)
    nieButton.style.fontSize = newFontSize + 'px';
});
