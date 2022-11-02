// async function findNames() {
//   const result = await axios
//     .get(
//       //   `https://newsapi.org/v2/top-headlines?country=jp&q=大谷&pageSize=100&category=sports&apiKey=6b3b137d8d4148e788bfca5509e7069f`
//       `https://newsapi.org/v2/everything?q=大谷翔平&sortBy=popularity&apiKey=6b3b137d8d4148e788bfca5509e7069f
//       `
//     )
//     .then((json) => json.data.articles);
//   // `https://newsapi.org/v2/top-headlines?country=jp&q='大谷'&apiKey=6b3b137d8d4148e788bfca5509e7069f`
//   // https://newsapi.org/v2/everything?q=Ohtani&from=2022-11-01&sortBy=popularity&apiKey=6b3b137d8d4148e788bfca5509e7069f
//   console.log(result);
//   const body = document.getElementById("news");
//   for (const elem of result) {
//     const newsTag = document.createElement("div");
//     newsTag.innerHTML = elem.title;
//     body.appendChild(newsTag);
//   }
// }

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
  const newsList = document.getElementById("newsList");
  for (const elem of result) {
    const newsBlock = document.createElement("div");
    const newsImage = document.createElement("img");
    const titleAndContents = document.createElement("div");
    const newsTitle = document.createElement("div");
    const contents = document.createElement("div");
    const newsLink = document.createElement("a");

    newsLink.href = elem.url;
    newsLink.classList.add("news_link");
    newsImage.classList.add("news_image");
    newsImage.src = elem.urlToImage;
    newsTitle.innerHTML = elem.title;
    contents.innerHTML = elem.description;

    titleAndContents.appendChild(newsTitle);
    titleAndContents.appendChild(contents);
    newsBlock.appendChild(newsImage);
    newsBlock.appendChild(titleAndContents);
    newsBlock.classList.add("news_block");
    newsLink.appendChild(newsBlock);

    newsList.appendChild(newsLink);
  }
}

const displayTitle = document.querySelector(".displayTitle");
displayTitle.innerHTML = "大谷翔平に関するニュース一覧です";

getNews("大谷翔平");
