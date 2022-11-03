// async function getStaticProps() {
//   const res = await axios.get("../stb.json");
//   console.log(res);
// }
// getStaticProps();

async function getNews(searchWord) {
  searchWord = searchWord || "大谷翔平";
  const result = await axios
    .get(
      //   `https://newsapi.org/v2/top-headlines?country=jp&q=大谷翔平&pageSize=100&category=sports&apiKey=6b3b137d8d4148e788bfca5509e7069f`
      //   `https://newsapi.org/v2/everything?q=${searchWord}&sortBy=popularity&apiKey=6b3b137d8d4148e788bfca5509e7069f
      //     `
      `../news.json`
      // "https://product.starbucks.co.jp/api/category-product-list/beverage/index.json"
    )
    .then((json) => json.data.articles);
  // .then((json) => console.log(json));
  // console.log(result);
  // `https://newsapi.org/v2/top-headlines?country=jp&q='大谷'&apiKey=6b3b137d8d4148e788bfca5509e7069f`
  // https://newsapi.org/v2/everything?q=Ohtani&from=2022-11-01&sortBy=popularity&apiKey=6b3b137d8d4148e788bfca5509e7069f
  //   console.log(result);
  const newsList = document.getElementById("news_list");
  for (const elem of result) {
    const newsBlock = createElem("div", "news_block");
    const newsImage = createElem("img", "news_image");
    const titleAndContents = createElem("div", "title_contents");
    const newsTitle = createElem("a", "news_title");
    const contents = createElem("div", "contents");

    newsTitle.href = elem.url;
    newsTitle.innerHTML = wordCut(elem.title, 35);
    contents.textContent = wordCut(elem.description, 100);
    newsImage.src = elem.urlToImage;

    titleAndContents.appendChild(newsTitle);
    titleAndContents.appendChild(contents);
    newsBlock.appendChild(newsImage);
    newsBlock.appendChild(titleAndContents);

    newsList.appendChild(newsBlock);
  }
  return newsList;
}

function createElem(tagName, className) {
  const result = document.createElement(tagName);
  result.classList.add(className);
  return result;
}

const searchWord = sessionStorage.getItem("search_word");

const favoriteButton = document.querySelector("#favorite");

// Todo お気に入り機能
favoriteButton.onclick = () => {
  localStorage.setItem("favoriteWord", searchWord);
};

function wordCut(word, limit) {
  word = word.replace(/(<([^>]+)>)/gi, "");
  if (word.length <= limit) {
    for (var i = 0; i < limit; i++) {
      word = word + " ";
    }
    return word.substr(0, limit).replace(/\r?\n/g, "");
  }
  return word.substring(0, limit).replace(/\r?\n/g, "") + "...";
}
const displayTitle = document.querySelector(".display_title");
displayTitle.innerHTML = `${searchWord}に関するニュース一覧です`;
// console.log(sessionStorage.getItem("search_word"));
getNews(searchWord);
