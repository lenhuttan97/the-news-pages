
const API_KEY =`${process.env.REACT_APP_NEWS_API_KEY}`

export function getNewsTopHeadlines(pageNumber) {
    return fetch(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey='+API_KEY+'&page=' + pageNumber
    );
}
