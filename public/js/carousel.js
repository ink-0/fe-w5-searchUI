import {$,$$} from "./util.js";

const factors = {
    slideItems : $$(".slide__item"),
    slideList : $(".slide__list"),
    prevBtn : $(".prev"),
    nextBtn : $(".next"),
}

const carousel = ()=>{

    let counter =1;
    // const size = slideItems[0].clientWidth;
    const size = 485;
    const len = factors.slideItems.length;
    factors.slideList.style.transform = "translateX(" + -size * counter + "px)";
    
    //ease-in-out 효과가 천천히 시작해 천천히 끝남 
    factors.nextBtn.addEventListener('click',()=>{
        if(counter>=len-1) return;
        factors.slideList.style.transition = "transform 0.3s ease-in-out"
        counter++;
        factors.slideList.style.transform = "translateX("+ -size*counter+"px)";
    });
    
    
    factors.prevBtn.addEventListener('click',()=>{
        if(counter<=0) return;
        factors.slideList.style.transition = "transform 0.3s ease-in-out"
        counter--;
        factors.slideList.style.transform = "translateX("+ -size*counter+"px)";
    });
    
    factors.slideList.addEventListener('transitionend',()=>{
        if(factors.slideItems[counter].id === "lastClone"){
            factors.slideList.style.transition = "none";
            counter = len -2;
            factors.slideList.style.transform = "translateX(" + -size * counter + "px)";
        }
        
        if (factors.slideItems[counter].id==="firstClone"){
            factors.slideList.style.transition = "none";
            counter = len-counter;
            factors.slideList.style.transform = "translateX(" + -size * counter + "px)";
    
        }
        
    }
    );
}

export {carousel};