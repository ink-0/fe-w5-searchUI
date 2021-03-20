import {$,$$} from "./util.js";
// const {rollingbox,rollingList,rollingItems,inpSearch,suggestionBox} = factors;
const factors = {
    inpSearch : $(".head__search__box"),
    rollingbox: $(".rolling__box"),
    rollingItems : $$(".rolling__item"),
    rollingList : $(".rolling__list"),

    suggestionBox : $(".suggestion__box"),
    // suggestionItems : $$(".suggestion__keyword"),
}


const rollingKeyword = () => {
    let counter = 1;
    const size = 22;
    const len = factors.rollingItems.length;
    console.log("검색어 하나 높이",size);
    console.log("검색어 총 개수",len);
    factors.rollingList.style.transform = "translateY(" + -size * counter + "px)";


    factors.inpSearch.addEventListener('click',()=>{
        clearTimeout(rolling);
        factors.rollingbox.style.display="none";
        factors.inpSearch.style.border = "1px solid #ff463f";
        factors.suggestionBox.style.display="block";


    });
    var rolling = setInterval(()=>{
        rollthekeyword()

    },2000);
    // setTimeout(()=>{
    //     clearTimeout(rolling)
    // },100000);
   
    function rollthekeyword(){

        if (factors.rollingItems[counter].id==="rolling__firstClone"){
            console.log("처음거 등장",counter);

            factors.rollingList.style.transition = "none";
            counter = len-counter;
            factors.rollingList.style.transform = "translateY(" + -size * counter + "px)";
    
        }
        else{
            console.log("그 외거 진행",counter);
            factors.rollingList.style.transition = "transform 0.3s ease-in-out";
            counter++;
            factors.rollingList.style.transform = "translateY("+ -size*counter+"px)";
        }
    }

    

}




export { rollingKeyword};