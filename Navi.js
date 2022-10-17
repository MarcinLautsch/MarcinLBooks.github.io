const books = [{
    image: "./picture/alice.jpg",
    title: "Alice in Wonderland",
    year: "Rok produkcji 2021",
    price: "95.99 zł",
    category: "Cate. Fantasy",
}, {
    image: "./picture/circus.jpg",
    title: "Circus of Wonders",
    year: "Rok produkcji 2022",
    price: "139.99 zł",
    category: "Cate. Fun",
}, {
    image: "./picture/To.jpg",
    title: "It",
    year: "Rok produkcji 2017",
    price: "79.80 zł",
    category: "Cate. Horror",
}, {
    image: "./picture/devil.jpg",
    title: "The Devils Hand",
    year: "Rok produkcji 2017",
    price: "59.99 zł",
    category: "Cate. Horror",
}, {
    image: "./picture/harry_potter.jpg",
    title: "Harry Potter",
    year: "Rok produkcji 2019",
    price: "129.99 zł",
    category: "Cate. Fantasy",
}, {
    image: "./picture/java.jpg",
    title: "Java",
    year: "Rok produkcji 2022",
    price: "78.99 zł",
    category: "Cate. Sience",
}, {
    image: "./picture/kompania_braci.jpg",
    title: "Kompania Braci",
    year: "Rok produkcji 2001",
    price: "109.99 zł",
    category: "Cate. War",
},{
    image: "./picture/rock.jpg",
    title: "Rock Covers",
    year: "Rok produkcji 2017",
    price: "59.00 zł",
    category: "Cate. Music",
},{
    image: "./picture/zrozumiec_javascript.jpg",
    title: "Zrozumieć Javascript",
    year: "Rok produkcji 2022",
    price: "119.99 zł",
    category: "Cate. Sience",
},{
    image: "./picture/kuchniaJap.jpg",
    title: "Sushi",
    year: "Rok produkcji 2019",
    price: "149.99 zł",
    category: "Cate. Kuchnia",
}];

// Inicjalizacja aplikacji, wyswietlenie ksiazek z local storage (jesli sa) lub z tablicy (jesli nie ma w local storage)
if (!localStorage.getItem('books')) {
    localStorage.setItem('books', JSON.stringify(books));
}

// Wyszukiwanie elementow HTML w DOM i przypisanie do zmiennych
const booksArray = JSON.parse(window.localStorage.getItem('books'));
const booksContainer = document.getElementById('books'); // to pobiera element DOM z HTMLa do ktorego chcesz wstrzyknac liste ksiazek
const search = document.getElementById('searchButton')
const addFormSubmit = document.getElementById('add-form');

function addBook(event) {
    event.preventDefault();

    const inputAddTitle = document.getElementById('addTitle').value;
    const inputAddYear = document.getElementById('addYear').value;
    const inputAddCategory = document.getElementById('addCategory').value;
    const inputAddSrc = document.getElementById('addSrc').value;

    const book = {
        image: inputAddSrc,
        title: inputAddTitle,
        year: inputAddYear,
        category: inputAddCategory,
    }

    booksArray.push(book);
    window.localStorage.setItem('books', JSON.stringify(booksArray));

    generateBook(booksContainer, book);
}

// Funkcja ktora znajdzie książkę po tytule z liter znajdujacych sie w dowolnym miejscu tekstu
function findBook() {
    const searchInput = document.getElementById('searchInput')
    const validationResult = validateForm(searchInput.value);
    if (validationResult) {
        const formattedInput = searchInput.value.toLowerCase();

        const foundBooks = booksArray.filter((book) => { // to zwraca ksiazki spelniajace warunek ponizej
            return book.title?.toLowerCase().includes(formattedInput) || 
            book.price?.toLowerCase().includes(formattedInput) // ksiazki o tytule "term" zwroca "true"
        })
    
        generateBooksList(foundBooks)
    } else {
        alert('Podaj więcej znaków');
    }
}

function generateBook(booksContainer, book) {
    booksContainer.innerHTML += `
            <div class="books">
                <img class="image" src=${book.image}>
                <p class="book__info title">${book.title}</p>
                <p class="book__info year">${book.year}</p>
                <p class="book__info price">${book.price}</p>
                <p class="book__info category">${book.category}</p>
            </div>
        `;
}

function generateBooksList(booksList) {   //to nam generuje html z lista ksiazek z local storage
    booksContainer.innerHTML = ''; // resetuje html

    booksList.forEach((book) => {
        generateBook(booksContainer, book);
    });
}

function validateForm(inputValue) {
    return inputValue.length >= 2;
  }



generateBooksList(booksArray); //to wywyoluje funkcje generateHtml po uruchomieniu strony  zby pokazly sie ksiazki

search.addEventListener('click', findBook);
addFormSubmit.addEventListener('submit', addBook);

