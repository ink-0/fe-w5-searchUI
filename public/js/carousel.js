import {factors} from "./util.js";
const {slideItems , slideList, prevBtn, nextBtn} = factors;


const carousel = ()=>{

    let counter =1;
    // const size = slideItems[0].clientWidth;
    const size = 485;
    const len = slideItems.length;
    slideList.style.transform = "translateX(" + -size * counter + "px)";
    
    //ease-in-out 효과가 천천히 시작해 천천히 끝남 
    nextBtn.addEventListener('click',()=>{
        if(counter>=len-1) return;
        slideList.style.transition = "transform 0.3s ease-in-out"
        counter++;
        slideList.style.transform = "translateX("+ -size*counter+"px)";
    });
    
    
    prevBtn.addEventListener('click',()=>{
        if(counter<=0) return;
        slideList.style.transition = "transform 0.3s ease-in-out"
        counter--;
        slideList.style.transform = "translateX("+ -size*counter+"px)";
    });
    
    slideList.addEventListener('transitionend',()=>{
        if(slideItems[counter].id === "lastClone"){
            slideList.style.transition = "none";
            counter = len -2;
            slideList.style.transform = "translateX(" + -size * counter + "px)";
        }
        
        if (slideItems[counter].id==="firstClone"){
            slideList.style.transition = "none";
            counter = len-counter;
            slideList.style.transform = "translateX(" + -size * counter + "px)";
    
        }
        
    }
    );
}

export {carousel};