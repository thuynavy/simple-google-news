let news = [];

let newsContent = document.getElementById('totalNews');
let totalResults = document.getElementById('totalResults');
let seemoreButton = document.getElementById('see-more');
let source = document.getElementById('source');


async function fetchNews() {
    let url = `https://newsapi.org/v2/everything?q=bitcoin&page=${page}&pageSize=${pageSize}&apiKey=b3d74bc4f23141faa8540eba1f7502bf`;
    let results = await fetch(url);
    let data = await results.json();
    news = news.concat(data.articles);
    moreNews = data.totalResults
    render();
} 

function render() {
    page.innerHTML =  <p> ${article.pageSize} </p>

    document.getElementById("news-stories").innerHTML =
        news.map( article =>
    `<div class="news">
        <h2> ${article.title} </h2>
        <p> ${article.source.name} </p>
        <p> ${article.publishedAt} <span> 
        ${moment(article.publishedAt).fromNow()} </span> </p>
        <p><a href="${article.url}">See more</a></p>
    </div>
    <div class="news-image">
        <img src="${article.urlToImage}">
    </div>` 
    ).join('');
}

function loadMore() {
    page += 1;
    fetchNews();
}

seemoreButton.addEventListener("click", moreNews);
fetchNews();
