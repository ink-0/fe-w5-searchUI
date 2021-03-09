import {factors} from "./util.js";
const {inpSearch} = factors;

const searchUI = () =>{

    inpSearch.addEventListener('click',()=>{
        console.log("됏지롱");
        inpSearch.style
        // inpSearch.style.border = `1px solid #ff0000;`;
        inpSearch.style.border = "1px solid #ff463f";
    });
}

export {searchUI};
