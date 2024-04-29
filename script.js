// Funkcja do obsługi kliknięcia przycisku "Tak"
function handleTakButtonClick() {
    // Ukrywamy przyciski po wybraniu opcji "Tak"
    var takButton = document.getElementById('takButton');
    var nieButton = document.getElementById('nieButton');
    takButton.style.display = 'none';
    nieButton.style.display = 'none';

    // Usuwamy napis główny "Czy zostaniesz moją żoną?"
    var mainHeading = document.querySelector('h1');
    mainHeading.style.display = 'none';

    // Usuwamy zawartość odpowiedzi (jeśli jest)
    var responseDiv = document.getElementById('response');
    responseDiv.innerHTML = '';

    // Tworzymy element <img> do wyświetlenia GIF-a
    var img = document.createElement('img');
    img.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2F4.bp.blogspot.com%2F-Ts6BKjjCmlA%2FWWCRWu4w6xI%2FAAAAAAAAHMA%2F_kXi1KOaKAQlxMlIylw9xiL8qH2RUiuXACLcBGAs%2Fs1600%2FMcDonald%252527s%252BMcSavers%252BMix%252B%252526%252BMatch%252BRM5.99%252BPromo.gif&f=1&nofb=1&ipt=328fadd10c64302b219163dda13464c0d15e8f008fee3953173d8a77b4f5c487&ipo=images'; // Zastąp 'link_do_twojego_gifa.gif' adresem URL twojego GIF-a

    // Dodajemy klasę lub style dla animacji GIF-a (opcjonalne)
    img.classList.add('gif-animation'); // Dodajemy klasę CSS, jeśli chcesz dostosować styl animacji

    // Ustawiamy styl dla wyśrodkowania GIF-a
    img.style.display = 'block';
    img.style.margin = 'auto';

    // Dodajemy GIF do diva o id 'response'
    responseDiv.appendChild(img);
}

// Obsługa przycisku "Tak"
document.getElementById('takButton').addEventListener('click', handleTakButtonClick);

// Obsługa przycisku "Nie"
document.getElementById('nieButton').addEventListener('click', function() {
    // Inkrementujemy rozmiar przycisku "Tak" (np. o 10 pikseli)
    var takButton = document.getElementById('takButton');
    var currentWidth = takButton.clientWidth;
    var currentHeight = takButton.clientHeight;
    var newWidth = currentWidth + 10;
    var newHeight = currentHeight + 10;
    takButton.style.width = newWidth + 'px';
    takButton.style.height = newHeight + 'px';

    // Zwiększamy czcionkę na przycisku "Tak"
    var currentFontSize = parseFloat(window.getComputedStyle(takButton).fontSize);
    var newFontSize = currentFontSize + 2; // Zwiększ czcionkę o 2 punkty (dostosuj według potrzeb)
    takButton.style.fontSize = newFontSize + 'px';
});
