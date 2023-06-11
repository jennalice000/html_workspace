let counter = 0;
addEventListener('load', function() {
  
    function changePage(pageURL) {
      window.location.href = pageURL;
    }
  
    this.addEventListener('keydown', function(e) {
      if (e.key === "d") {
        changePage('pages2.html');
      } else if (e.key === 'a') {
        changePage('pages1.html');
      } else if (e.key === 'w') {
        changePage('pages0.html');
      }else if (e.key === 's') {
        changePage('pages3.html');
      }
    });
  });
  