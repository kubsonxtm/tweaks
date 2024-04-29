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
    img.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F019c67934c8574802821525868d320c8%2Ftenor.gif%3Fitemid%3D14537829&f=1&nofb=1&ipt=d7ad24c42d6a2013b2d84a322199f00a2c32bacc9dda22390252ce770c335b16&ipo=images'; // Zastąp 'link_do_twojego_gifa.gif' adresem URL twojego GIF-a

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
