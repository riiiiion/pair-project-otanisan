async function getNews(searchWord) {
  searchWord = searchWord || "大谷翔平";
  const result = await axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchWord}&sortBy=publishedAt&apiKey=6b3b137d8d4148e788bfca5509e7069f
          `
      // `../news.json`
    )
    .then((json) => json.data.articles);

  const newsList = document.getElementById("news_list");
  for (const elem of result) {
    let newsBlock = createElem("div", "news_block");
    const newsImage = createElem("img", "news_image");
    let titleAndContents = createElem("div", "title_contents");
    const newsTitle = createElem("a", "news_title");
    const contents = createElem("div", "contents");

    newsTitle.href = elem.url;
    newsTitle.target = "_blank";
    newsTitle.rel = "noopener noreferrer";
    newsTitle.innerHTML = wordCut(elem.title, 25);
    contents.textContent = wordCut(elem.description, 100);
    newsImage.src = elem.urlToImage;

    titleAndContents = elementAppendChild(
      titleAndContents,
      newsTitle,
      contents
    );

    newsBlock = elementAppendChild(newsBlock, newsImage, titleAndContents);

    newsList.appendChild(newsBlock);
  }
  return newsList;
}

function elementAppendChild(base, ...elemLists) {
  for (const elem of elemLists) {
    base.appendChild(elem);
  }
  return base;
}

function createElem(tagName, className) {
  const result = document.createElement(tagName);
  result.classList.add(className);
  return result;
}

const searchWord = sessionStorage.getItem("searchWord");
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

getNews(searchWord);
