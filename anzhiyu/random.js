var posts=["posts/52027/","posts/64063/","posts/9023/","posts/18950/","posts/39261/","posts/57959/","posts/22439/","posts/59157/","posts/34027/","posts/2933/","posts/18731/","posts/26817/","posts/49708/","posts/39254/","posts/6117/","posts/32969/","posts/62221/","posts/64063/","posts/39958/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };