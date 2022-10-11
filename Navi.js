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
    title: "To",
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
}];

const booksContainer = document.getElementById('books'); // to pobiera element DOM z HTMLa do ktorego chcesz wstrzyknac liste ksiazek
booksContainer.innerHTML = '';

const generateBooks = () => {
    books.forEach((book) => {
        booksContainer.innerHTML += `
        <div class="books">
            <img class="image" src=${book.image}>
            <p class="book__info title">${book.title}</p>
            <p class="book__info year">${book.year}</p>
            <p class="book__info price">${book.price}</p>
            <p class="book__info category">${book.category}</p>
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
                <p class="book__info title">${book.title}</p>
                <p class="book__info year">${book.year}</p>
                <p class="book__info price">${book.price}</p>
                <p class="book__info category">${book.category}</p>
            </div>
        `
    });
}

// findBook('italia');


//--------------------------
const search = document.getElementById('btrSearch')
const out = document.getElementById('header__searchInput')


function foundBooks(search) {
    document.getElementById("title").style.display = value;
    return book.title.value == book.title.value
}

search.addEventListener('click', foundBooks);

// ---------------------

// const search = document.getElementById('btrSearch')
// const out = document.getElementById('header__searchInput')

// function sear () {
//     out.innerHTML = search.value;
// }

// out/addEventListener('click', sear);

///-----------------------

// document.getElementById('btrSearch').addEventListener('click', () => {

//     let search = document.getElementById('btrSearch').value;
//     let elements = document.querySelectorAll('.title');

//         elements.forEach((elements, index) => {
//             if(element.innerText.includes(search.toLowerCase())){
//                 books[index].innerHTML.remove('hide');
//             }
//             else{
//                 books[index].innerHTML.add('hide');

//             }

//         })

// });


//-----------------------


//czy cholera on ciagnie teraz z iner HTML ????
// czy tablica books ???
// const header__searchInputs = document.getElementById('header__searchInput')
// const btrSearchs = document.getElementById('btrSearch')


// const searchFunction = (search) => {
//     if (books.booksContainer(books(book.title.value)))  {

//         return books.booksContainer.innerHTML.book.title.value === book.title.value
//     }

// }

// btrSearchs.addEventListener('click', searchFunction);

//---------------------------------------

// const header__searchInput = document.querySelector('#header__searchInput')
// const saerchBoks = document.querySelectorAll('books')

// const filterList = () => {
//     saerchBoks.forEach(itemTitle => {
//         const match = new RegExp(header__searchInput.value, 'i').test(itemTitle.textContent)
//         if (!match) {
//             itemTitle.style.display = 'none'
//         }
//         else{
//             itemTitle.style.display ='block'
//         }
//     })
// }

// header__searchInput.addEventListener('keyup', filterList);