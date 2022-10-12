const books = [{
    image: "https://ecsmedia.pl/c/zrozumiec-javascript-wprowadzenie-do-programowania-w-iext115645049.jpg",
    title: "Zrozumieć JavaScript",
    year: "Rok produkcji 2021",
    price: "35.99 zł",
    category: "Cate. Nauka",
}, {
    image: "https://img.tantis.pl/image/73e08032-e0e6-4e09-942e-7d73b9ba85ee/550x400/webp",
    title: "JavaScript",
    year: "Rok produkcji 2022",
    price: "39.99 zł",
    category: "Cate. Nauka",
}, {
    image: "https://ecsmedia.pl/c/to-w-iext117293967.jpg",
    title: "This",
    year: "Rok produkcji 2017",
    price: "79.80 zł",
    category: "Cate. Horror",
}, {
    image: "https://m.media-amazon.com/images/I/51gDkZW2+9S._SY344_BO1,204,203,200_.jpg",
    title: "Alice in Wonderland",
    year: "Rok produkcji 2022",
    price: "99.99 zł",
    category: "Cate. Fantasy",
}, {
    image: "https://inverso.pl/img/imagecache/381001-382000/375x513_product_media_381001-382000_21681A00149KS-j.webp",
    title: "Italia na Talerzu",
    year: "Rok produkcji 2022",
    price: "139.99 zł",
    category: "Cate. Kuchnia",
}, {
    image: "https://inverso.pl/img/imagecache/381001-382000/375x513_product_media_381001-382000_21681A00149KS-j.webp",
    title: "Italia na Talerzu",
    year: "Rok produkcji 2022",
    price: "139.99 zł",
    category: "Cate. Kuchnia",
}, {
    image: "https://inverso.pl/img/imagecache/381001-382000/375x513_product_media_381001-382000_21681A00149KS-j.webp",
    title: "Italia na Talerzu",
    year: "Rok produkcji 2022",
    price: "139.99 zł",
    category: "Cate. Kuchnia",
}, {
    image: "https://inverso.pl/img/imagecache/381001-382000/375x513_product_media_381001-382000_21681A00149KS-j.webp",
    title: "Italia na Talerzu",
    year: "Rok produkcji 2022",
    price: "139.99 zł",
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
    return inputValue.length > 3;
  }
  
