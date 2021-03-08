const carouselSlide = document.querySelector('.slide__list');
const carouselContents = document.querySelectorAll('.slide__item');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

console.log(carouselContents);
console.log(nextBtn);
let counter =1;
const size = carouselContents[0].clientWidth;
const len = carouselContents.length;
console.log(len);
carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

//ease-in-out 효과가 천천히 시작해 천천히 끝남 
nextBtn.addEventListener('click',()=>{
    if(counter>=len-1) return;
    carouselSlide.style.transition = "transform 0.3s ease-in-out"
    counter++;
    carouselSlide.style.transform = "translateX("+ -size*counter+"px)";
});


prevBtn.addEventListener('click',()=>{
    if(counter<=0) return;
    carouselSlide.style.transition = "transform 0.3s ease-in-out"
    counter--;
    carouselSlide.style.transform = "translateX("+ -size*counter+"px)";
});

carouselSlide.addEventListener('transitionend',()=>{
    if(carouselContents[counter].id === "lastClone"){
        carouselSlide.style.transition = "none";
        counter = len -2;
        carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    }
    
    if (carouselContents[counter].id==="firstClone"){
        carouselSlide.style.transition = "none";
        counter = len-counter;
        carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

    }
    
}
);