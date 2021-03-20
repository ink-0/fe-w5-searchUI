//가져올 데이터들의 url 정의 

const url = {
    mileageURL : "http://localhost:3004/mileageList",
    rollKeywordURL : "http://localhost:3004/keyword",
}
//json 이미지 fetch에서 가져오기
import {getMileageImg, getRollKeyword} from "./api.js";

// 기능 구현 
import {carousel} from "./carousel.js";
import { rollingKeyword } from "./rollingKeyword.js";
import {getRollingTop10} from "./searchUI.js";
// import {searchUI} from "./searchUI,js";


//기획전 캐로셀
getMileageImg(url.mileageURL);
carousel();



getRollKeyword(url.rollKeywordURL);
rollingKeyword();
// searchUI();

// let data;
// const promise = fetch("/image")
//   .then(response => response.json())
//   .then(json => {
//     data = json;
//     console.log(data);
//   });

