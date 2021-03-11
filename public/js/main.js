//가져올 데이터들의 url 정의 
const url = "http://localhost:3000/image";

//json 이미지 fetch에서 가져오기
import {getBestboxImg} from "./api.js";

// 기능 구현 
import {carousel} from "./carousel.js";
import {getRollingTop10} from "./searchUI.js";
// import {searchUI} from "./searchUI,js";



getBestboxImg(url);
carousel();

getRollingTop10();
// searchUI();

// let data;
// const promise = fetch("/image")
//   .then(response => response.json())
//   .then(json => {
//     data = json;
//     console.log(data);
//   });

