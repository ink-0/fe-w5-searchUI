import {factors} from "./util.js";


export class FetchAPI {
  constructor(){
    this.url = {
      mileageList : "http://localhost:3000/mileageList",

    }
  }
}
//
export function getMileageImg(url) {
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

export function getRollKeyword(url) {
  let data;
  const  promise = fetch(url)
    .then(response => response.json())
    .then(json => {
      const {rollingItems,suggestionItems} = factors;
      data=json;
      const items = data.list;

      rollingItems[0].innerHTML = "10. "+items[9].keyword;
      rollingItems[1].innerHTML = "1  "+items[0].keyword;
      rollingItems[2].innerHTML = "2  "+items[1].keyword;
      rollingItems[3].innerHTML = "3  "+items[2].keyword;
      rollingItems[4].innerHTML = "4  "+items[3].keyword;
      rollingItems[5].innerHTML = "5  "+items[4].keyword;
      rollingItems[6].innerHTML = "6  "+items[5].keyword;
      rollingItems[7].innerHTML = "7  "+items[6].keyword;
      rollingItems[8].innerHTML = "8  "+items[7].keyword;
      rollingItems[9].innerHTML = "9  "+items[8].keyword;
      rollingItems[10].innerHTML = "10  "+items[9].keyword;
      rollingItems[11].innerHTML = "1  "+items[0].keyword;
      suggestionItems[0].innerHTML = 
        `<li><a href="${items[0].linkurl}" class="suggestion__link__keyword"><span class="num_rank">1</span></a>${items[0].keyword}</li>
        <li><a href="${items[1].linkurl}" class="suggestion__link__keyword"><span class="num_rank">2</span></a>${items[1].keyword}</li>
        <li><a href="${items[2].linkurl}" class="suggestion__link__keyword"><span class="num_rank">3</span></a>${items[2].keyword}</li>
        <li><a href="${items[3].linkurl}" class="suggestion__link__keyword"><span class="num_rank">4</span></a>${items[3].keyword}</li>
        <li><a href="${items[4].linkurl}" class="suggestion__link__keyword"><span class="num_rank">5</span></a>${items[4].keyword}</li>`;

        suggestionItems[1].innerHTML = 
        `<li><a href="${items[5].linkurl}" class="suggestion__link__keyword"><span class="num_rank">6</span></a>${items[5].keyword}</li>
        <li><a href="${items[6].linkurl}" class="suggestion__link__keyword"><span class="num_rank">7</span></a>${items[6].keyword}</li>
        <li><a href="${items[7].linkurl}" class="suggestion__link__keyword"><span class="num_rank">8</span></a>${items[7].keyword}</li>
        <li><a href="${items[8].linkurl}" class="suggestion__link__keyword"><span class="num_rank">9</span></a>${items[8].keyword}</li>
        <li><a href="${items[9].linkurl}" class="suggestion__link__keyword"><span class="num_rank">10</span></a>${items[9].keyword}</li>`;


    })
}


  
// searchUI.js
// export function getTop10(url) {
//   let data;
//   const promise = fetch(url)
//     .then(response =>response.json())
//     .then(json =>{
//       //inpSearch 말고 데이터 들어갈 장소
//       const {inpSearch}
//     })
// }
