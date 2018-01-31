'use strict';

$(document).ready(() => {

  const ROOT_URL = 'http://jsonplaceholder.typicode.com';

  // reusable handle error function
  // -- Aside: The function below is referred to as a `thunk`
  // --        it's when a function returns another function
  const handleError = (label) => {
    return (err) => {
      // we can access to label here even though this function
      // is being invoked later
      console.debug(`Error @ ${label}`, err);
    }
  }

  // return an HTML element (as a string) from an article object
  const buildArticleHTML = (article) => {
    // ... removed for brevity, check repo for full code

    return `
      <article class="post" data-article-id="${article.id}">
        <a><h3>${article.title}</h3></a>
        <p>${article.body}</p>
      </article>
    `;

    // const $article = $('<article>').addClass('post').data('article-id', article.id)
    //
    // $article.append($('<h3>').text(article.title))
    // $article.append($('<p>').text(article.body))
    //
    // return $article;
  }

  // load a single article via AJAX `GET` request
  const loadArticle = (article_id) => {
    // ... removed for brevity, check repo for full code
    const renderArticle = (article) => {
      const articles_elm = $('#articles');

      articles_elm.html(buildArticleHTML(article));
    }

    $.getJSON(`${ROOT_URL}/posts/${article_id}`, renderArticle)
  }
  // window.loadArticle = loadArticle;

  // load all articles via AJAX `GET` request, then render them on page
  const loadArticles = () => {
    // an inner function to render all the articles from JSON data
    const renderArticles = (articles) => {
      // fetch the HTML element where we will render articles using jQuery
      const articles_elm = $('#articles');
      // append each article into the element
      articles.forEach((article) => {
        articles_elm.append(buildArticleHTML(article));
      })
    }


    // make the AJAX call to load all the articles from the API
    $.get(`${ROOT_URL}/posts`)
    .then(renderArticles)
    .fail(handleError('loadArticles'));
  }

  // load all comments for a given `article_id`
  const loadArticleComments = (article_id) => {
    // ... removed for brevity, check repo for full code
  }
  // window.loadArticleComments = loasdArticleComments;

  const deleteArticle = (article_id) => {

  }

  // ... more code removed for brevity, check repo for full code

  $('#articles').on('click', '.post > a', (ev) => {
	  ev.preventDefault();
    const article_id = $(ev.target).parents('.post').data('article-id');
		console.log(`Article #${article_id} has been clicked.`);
    loadArticle(article_id);
	});

  // load more button click listener
  $('#load-more').on('click', (ev) => {
    ev.preventDefault();
    loadArticles();
  });

  // on page load, start loading article right away
  // loadArticles();
});
