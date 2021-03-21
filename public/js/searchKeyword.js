import { $, $$ } from "./util.js";


const factors = {
    searchBox : $(".head__search__box"),
    searchInp : $(".inp_search"),
    suggestionBox : $(".suggestion__box"),
    
    searchwordBox : $(".searchword__box"),

}


//검색창 입력시 searchwordBox 등장
const openSearchKeyword = () => {
    factors.searchBox.addEventListener('input', () => {
        factors.suggestionBox.style.display = "none";
        factors.searchwordBox.style.display = "block"
    }
    )
}

const getSearchKeyword= (word) => {
    const inputValue = word;
    let data;

    
    fetch(
        `https://completion.amazon.com/api/2017/suggestions?session-id=133-4736477-7395454&customer-id=&request-id=4YM3EXKRH1QJB16MSJGT&page-type=Gateway&lop=en_US&site-variant=desktop&client-info=amazon-search-ui&mid=ATVPDKIKX0DER&alias=aps&b2b=0&fresh=0&ks=71&prefix=${inputValue}&event=onKeyPress&limit=11&fb=1&suggestion-type=KEYWORD`
    )
        .then((res) => res.json())
        // sugestions의 value만 mapping
        .then((json) => json.suggestions.map((v) => v.value))
        .then(data => {
            let inpWord="";
            // console.log(data[0]);
            data.map((v) => {
                data = v
                inpWord+=`<li class="searchword__list">${data}</li>`;
                factors.searchwordBox.innerHTML = inpWord;
                
            })
        });
}

// const getSearchKeyword= (word) => {
//     const inputValue = word;
  
  
//     fetch(
//       `https://completion.amazon.com/api/2017/suggestions?session-id=133-4736477-7395454&customer-id=&request-id=4YM3EXKRH1QJB16MSJGT&page-type=Gateway&lop=en_US&site-variant=desktop&client-info=amazon-search-ui&mid=ATVPDKIKX0DER&alias=aps&b2b=0&fresh=0&ks=71&prefix=${inputValue}&event=onKeyPress&limit=11&fb=1&suggestion-type=KEYWORD`
//     )
//       .then((res) => res.json())
//       // sugestions의 value만 mapping
//       .then((data) => data.suggestions.map((v) => v.value))
//       .then(console.log);
// }

const getSearchInp = () => {
    factors.searchInp.addEventListener('keyup', () => {
        
        const userInp = factors.searchInp.value;
        getSearchKeyword(userInp);
    })
    
}
  
export { openSearchKeyword, getSearchKeyword,getSearchInp };