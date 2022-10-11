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
}];

const booksContainer = document.getElementById('books'); // to pobiera element DOM z HTMLa do ktorego chcesz wstrzyknac liste ksiazek
booksContainer.innerHTML = '';

const generateBooks = () => {
    books.forEach((book) => {
        booksContainer.innerHTML += `
        <div class="books">
            <img class="image" src=${book.image}>
            <p class="title">${book.title}</p>
            <p class="year">${book.year}</p>
            <p class="price">${book.price}</p>
            <p class="category">${book.category}</p>
        </div>
    `
    })
}

generateBooks();


// Funkcja ktora znajdzie książkę po tytule z liter znajdujacych sie w dowolnym miejscu tekstu
const findBook = (term) => {
    const foundBooks = books.filter((book) => { // to zwraca ksiazki spelniajace warunek ponizej
        return book.title.toLowerCase().includes(term.toLowerCase()); // ksiazki o tytule "term" zwroca "true"
    })

    booksContainer.innerHTML = '';

    foundBooks.forEach((book) => {
        booksContainer.innerHTML += `
            <div class="books">
                <img class="image" src=${book.image}>
                <p class="title">${book.title}</p>
                <p class="year">${book.year}</p>
                <p class="price">${book.price}</p>
                <p class="category">${book.category}</p>
            </div>
        `
    });
}

// findBook('italia');