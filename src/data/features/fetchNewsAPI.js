
const API_KEY =`${process.env.REACT_APP_NEWS_API_KEY}`

export async function getHeadlines() {
    return fetch(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey='+API_KEY
    );
}

export async function getTopic(option) {
  let category = option.category;
  let page = option.page;
  let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + API_KEY + '&category='+ category + '&page='+page
  console.log(url);
    return fetch(
        url
    );
}


export async function getSearch(input, page) {
    return fetch(
          'https://newsapi.org/v2/everything?q='+input +'&apiKey='+API_KEY
    );
}

