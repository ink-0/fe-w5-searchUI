import {factors} from "./util.js";
const {rollingList,rollingItems,inpSearch} = factors;


const rollingKeyword = () => {
    let counter = 1;
    const size = 22;
    const len = rollingItems.length;
    console.log("검색어 하나 높이",size);
    console.log("검색어 총 개수",len);
    rollingList.style.transform = "translateY(" + -size * counter + "px)";


    inpSearch.addEventListener('click',()=>{
        clearTimeout(rolling);
    });
    var rolling = setInterval(()=>{
        rollthekeyword()

    },2000);
    // setTimeout(()=>{
    //     clearTimeout(rolling)
    // },100000);
   
    function rollthekeyword(){

        if (rollingItems[counter].id==="rolling__firstClone"){
            console.log("처음거 등장",counter);

            rollingList.style.transition = "none";
            counter = len-counter;
            rollingList.style.transform = "translateY(" + -size * counter + "px)";
    
        }
        else{
            console.log("그 외거 진행",counter);
            rollingList.style.transition = "transform 0.3s ease-in-out";
            counter++;
            rollingList.style.transform = "translateY("+ -size*counter+"px)";
        }
    }

    

}




export { rollingKeyword};