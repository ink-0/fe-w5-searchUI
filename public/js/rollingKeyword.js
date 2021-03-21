import {$,$$} from "./util.js";

const factors = {
    searchBox : $(".head__search__box"),
    rollingbox: $(".rolling__box"),
    rollingItems : $$(".rolling__item"),
    rollingList : $(".rolling__list"),

    suggestionBox : $(".suggestion__box"),
    suggestionItems: $$(".suggestion__keyword"),
}


const rollingKeyword = (counter) => {
    const size = 22;
    const len = factors.rollingItems.length;
    setInterval(() => {
        counter = counter
        const size = 22;
        const len = factors.rollingItems.length;
        if (factors.rollingItems[counter].id === "rolling__firstClone") {
            // console.log("처음거 등장", counter);
    
            factors.rollingList.style.transition = "none";
            counter = len - counter;
            factors.rollingList.style.transform = "translateY(" + -size * counter + "px)";
    
        }
        else {
            // console.log("그 외거 진행", counter);
            factors.rollingList.style.transition = "transform 0.3s ease-in-out";
            counter++;
            factors.rollingList.style.transform = "translateY(" + -size * counter + "px)";
        }
    }, 2000);
}
//suggest이벤트
//클릭시 멈추게 하기 만들기
const openSugKeyword = () => {
    factors.searchBox.addEventListener('click', () => {
        clearInterval(rollingKeyword);
        factors.rollingbox.style.display = "none";
        factors.searchBox.style.border = "1px solid #ff463f";
        factors.suggestionBox.style.display = "block";
    }
    )
}





// });


export {rollingKeyword,openSugKeyword};