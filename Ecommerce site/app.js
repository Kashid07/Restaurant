let left = document.getElementsByClassName("bi-arrow-left-circle-fill")[0];
let right = document.getElementsByClassName("bi-arrow-right-circle-fill")[0];
let cards = document.getElementsByClassName("cards")[0];

left.addEventListener('click', () => {
    cards.scrollLeft -=140;
})

right.addEventListener('click', () => {
    cards.scrollLeft +=140;
})

let poster = document.getElementById('poster');
let title = document.getElementById('title');
let price_cont = document.getElementById('price_cont');   

Array.from(document.getElementsByClassName('card')).forEach((Element , i )  => {
    Element.addEventListener('click' , () => {
        poster.src = Element.getElementsByTagName('img')[0].src;
        title.innerText = Element.getElementsByTagName('h5')[0].innerText;
        price_cont.innerText = Element.getElementsByTagName('h4')[0].innerText
    })
} ) 