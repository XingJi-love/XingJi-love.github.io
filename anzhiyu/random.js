var posts=["posts/9023/","posts/18950/","posts/39261/","posts/22439/","posts/57959/","posts/34027/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };