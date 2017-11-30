let articleListContent = document.getElementsByClassName('articleList-content');

    for (var i = 0; i < articleListContent.length; i++) {

      if (articleListContent[i].innerHTML.length > 70) {
        let content = articleListContent[i].innerHTML;
        articleListContent[i].innerHTML = content.slice(0, 70) + " ...";
      }
    }