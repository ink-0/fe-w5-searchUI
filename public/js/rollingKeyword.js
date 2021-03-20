import {$,$$} from "./util.js";
// const {rollingbox,rollingList,rollingItems,inpSearch,suggestionBox} = factors;
const factors = {
    inpSearch : $(".head__search__box"),
    rollingbox: $(".rolling__box"),
    rollingItems : $$(".rolling__item"),
    rollingList : $(".rolling__list"),

    suggestionBox : $(".suggestion__box"),
    suggestionItems : $$(".suggestion__keyword"),
}


// const rollingKeyword = () => {
//     let counter = 1;
//     const size = 22;
//     const len = factors.rollingItems.length;
//     console.log("검색어 하나 높이",size);
//     console.log("검색어 총 개수",len);
//     factors.rollingList.style.transform = "translateY(" + -size * counter + "px)";


    
//     rollthekeyword(1);
   
//     // setTimeout(()=>{
//     //     clearTimeout(rolling)
//     // },100000);
   

// }

const rolltheKeyword = (counter) => {
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
rolltheKeyword(0);

const openSugKeyword = () => {
    factors.inpSearch.addEventListener('click', () => {
        clearInterval(rolltheKeyword);
        factors.rollingbox.style.display = "none";
        factors.inpSearch.style.border = "1px solid #ff463f";
        factors.suggestionBox.style.display = "block";
    }
)}
//suggest이벤트



// });


export {rolltheKeyword,openSugKeyword};