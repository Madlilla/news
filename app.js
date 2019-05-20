const apiKey = '686b0429ae2d4b099878ad83cfb5b7c2';
const main = document.querySelector('main');



window.addEventListener('load', async e => {
    updateNews();


    if('serviceWorker' in navigator){
        try {
            navigator.serviceWorker.register('serviceworker.js');
            console.log('SW registered');
        } catch (error){
            console.log('SW reg failed')
        }
    }
    
});



async function updateNews(){
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=hu&apiKey=686b0429ae2d4b099878ad83cfb5b7c2`)
    const json = await res.json();


    main.innerHTML = json.articles.map(createArticle).join('\n');
}

function createArticle(article){
    return `
    <div class="article">
        <a href="${article.url}">
            <h2>${article.title}</h2>
            <img src ="${article.urlToImage}"
            <p>${article.description}</p>
        </a>
    </div>
`;
}