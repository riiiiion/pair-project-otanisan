async function getNews(searchWord) {
  const result = await axios
    .get(
      //   `https://newsapi.org/v2/top-headlines?country=jp&q=大谷翔平&pageSize=100&category=sports&apiKey=6b3b137d8d4148e788bfca5509e7069f`
      //   `https://newsapi.org/v2/everything?q=${searchWord}&sortBy=popularity&apiKey=6b3b137d8d4148e788bfca5509e7069f
      //   `
      `../news.json`
    )
    .then((json) => json.data.articles);
  // .then((json) => console.log(json));
  // `https://newsapi.org/v2/top-headlines?country=jp&q='大谷'&apiKey=6b3b137d8d4148e788bfca5509e7069f`
  // https://newsapi.org/v2/everything?q=Ohtani&from=2022-11-01&sortBy=popularity&apiKey=6b3b137d8d4148e788bfca5509e7069f
  //   console.log(result);
  const newsList = document.getElementById("news_list");
  for (const elem of result) {
    const newsBlock = document.createElement("div");
    const newsImage = document.createElement("img");
    const titleAndContents = document.createElement("div");
    const newsTitle = document.createElement("div");
    const contents = document.createElement("div");
    const newsLink = document.createElement("a");

    newsLink.href = elem.url;
    newsTitle.innerHTML = wordCut(elem.title, 35);
    contents.innerHTML = wordCut(elem.description, 80);
    newsImage.src = elem.urlToImage;
    newsLink.classList.add("news_link");
    newsBlock.classList.add("news_block");
    newsLink.classList.add("news_link");
    newsImage.classList.add("news_image");

    titleAndContents.appendChild(newsTitle);
    titleAndContents.appendChild(contents);
    newsBlock.appendChild(newsImage);
    newsBlock.appendChild(titleAndContents);
    newsLink.appendChild(newsBlock);

    newsList.appendChild(newsLink);
  }
}

function wordCut(word, limit) {
  if (word.length <= limit) {
    return word;
  }
  return word.substring(0, limit) + "...";
}
const displayTitle = document.querySelector(".display_title");
displayTitle.innerHTML = "大谷翔平に関するニュース一覧です";
console.log(window.keyOfSearch);
getNews("大谷翔平");
