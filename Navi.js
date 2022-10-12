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
    title: "Italia na Talerzu",
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
    title: "Kompania Braci",
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

const generateHtml = (booksList) => {   //to nam generuje html z lisyta ksiazek
    const booksContainer = document.getElementById('books'); // to pobiera element DOM z HTMLa do ktorego chcesz wstrzyknac liste ksiazek
    booksContainer.innerHTML = ''; // resetuje html

    booksList.forEach((book) => {
        booksContainer.innerHTML += `
            <div class="books">
                <img class="image" src=${book.image}>
                <p class="book__info title">${book.title}</p>
                <p class="book__info year">${book.year}</p>
                <p class="book__info price">${book.price}</p>
                <p class="book__info category">${book.category}</p>
            </div>
        `
    });
}

generateHtml(books); //to wywyoluje funkcje generateHtml po uruchomieniu strony  zby pokazly sie ksiazki

// Funkcja ktora znajdzie książkę po tytule z liter znajdujacych sie w dowolnym miejscu tekstu
const findBook = () => {
    const searchInput = document.getElementById('searchInput')
    const validationResult = validateForm(searchInput.value);
    if (validationResult) {
        const formattedInput = searchInput.value.toLowerCase();

        const foundBooks = books.filter((book) => { // to zwraca ksiazki spelniajace warunek ponizej
            return book.title.toLowerCase().includes(formattedInput) || 
            book.price.toLowerCase().includes(formattedInput) // ksiazki o tytule "term" zwroca "true"
        })
    
        generateHtml(foundBooks)
    } else {
        alert('Podaj więcej znaków');
    }
}


const search = document.getElementById('searchButton')
search.addEventListener('click', findBook);

const validateForm = (inputValue) => {
    return inputValue.length >= 2;
  }
  
