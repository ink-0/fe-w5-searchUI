const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const factors = {
    bestboxFirst : $(".best__box_first"),
    slideItems : $$(".slide__item"),
    slideList : $(".slide__list"),
    prevBtn : $(".prev"),
    nextBtn : $(".next"),

    inpSearch : $(".head__search__box"),
    rollingbox: $(".rolling__box"),
    rollingItems : $$(".rolling__item"),
    rollingList : $(".rolling__list"),

    suggestionBox : $(".suggestion__box"),
    suggestionItems : $$(".suggestion__keyword"),
}


export {factors};