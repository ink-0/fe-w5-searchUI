import {factors} from "./util.js";

export function getBestboxImg(url) {
    let data;
    const promise = fetch(url)
      .then(response => response.json())
      .then(json => {
        const {bestboxFirst, slideItems} = factors;
        data = json;
        const items = data.mileageList;
        bestboxFirst.innerHTML = `<img src=${items[0].imgurl}>`
       
        slideItems[0].innerHTML = `<img src=${items[3].imgurl}>`
        slideItems[1].innerHTML = `<img src=${items[1].imgurl}>`
        slideItems[2].innerHTML = `<img src=${items[2].imgurl}>`
        slideItems[3].innerHTML = `<img src=${items[3].imgurl}>`
        slideItems[4].innerHTML = `<img src=${items[1].imgurl}>`

         // slideItems.forEach((element,i) => {
        //   element.innerHTML = `<img src="${items_img3}">`
        //   // console.log(i,"elemenet들",element);
        // });
      });
  }

export function getTop10(url) {
  let data;
  const prmise = fetch(url)
    .then(response =>response.json())
    .then(json =>{
      const
    })
}
