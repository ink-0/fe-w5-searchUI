// 미들웨어에서 등록될 라우터들 

const express = require('express');
const router = express.Router();
const fs = require("fs");

router.get('/',(req,res)=>{
    res.render('index',{title:'쇼핑하우 by kakaocommerce'});
});


const mileageListData = JSON.parse(fs.readFileSync("./data/mileageList.json", "utf8"));
router.get("/image", (req, res, next) => {
  // console.log("data는제발제발",data);
  res.json(mileageListData);
});


const recomKeywordData = JSON.parse(fs.readFileSync("./data/recomKeyword.json","utf8"));
router.get("/keyword",(req,res,next)=>{
    res.json(recomKeywordData);
    // console.log("나와라얍",recomKeywordData.list[0].keyword);
})
module.exports = router;