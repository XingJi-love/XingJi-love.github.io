var posts=["posts/9023/","posts/64063/","posts/52027/","posts/18950/","posts/22439/","posts/39261/","posts/59157/","posts/34027/","posts/57959/","posts/18731/","posts/49708/","posts/2933/","posts/26817/","posts/6117/","posts/39958/","posts/62221/","posts/32969/","posts/64063/","posts/39254/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };