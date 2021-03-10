import {factors} from "./util.js";
const {inpSearch} = factors;

const getRollingTop10 = () =>{

    inpSearch.addEventListener('click',()=>{
        console.log("됏지롱");
        inpSearch.style
        // inpSearch.style.border = `1px solid #ff0000;`;
        inpSearch.style.border = "1px solid #ff463f";
    });
}

export {getRollingTop10};



// export function getRollingTop10(url) {
//     let data;
//     const promise = fetch(url)
//       .then(response => response.json())
//       .then(json => {
//         const {bestboxFirst, slideItems} = factors;
//         data = json;
//         const items = data.mileageList;
//         bestboxFirst.innerHTML = `<img src=${items[0].imgurl}>`
       
//         slideItems[0].innerHTML = `<img src=${items[3].imgurl}>`
//         slideItems[1].innerHTML = `<img src=${items[1].imgurl}>`
//         slideItems[2].innerHTML = `<img src=${items[2].imgurl}>`
//         slideItems[3].innerHTML = `<img src=${items[3].imgurl}>`
//         slideItems[4].innerHTML = `<img src=${items[1].imgurl}>`

//          // slideItems.forEach((element,i) => {
//         //   element.innerHTML = `<img src="${items_img3}">`
//         //   // console.log(i,"elemenet들",element);
//         // });
//       });
//   }