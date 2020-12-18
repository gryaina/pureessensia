
var blogContainer = document.getElementById('main-content');

var request = new XMLHttpRequest();
request.open('GET', 'https://gryaina.com/wp-json/wp/v2/posts');
request.send();
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.response);
    console.log(data);
    for (i = 0; i < data.length; i++) {
      var post = document.createElement('div');
      post.className = 'post';
      var date = document.createElement('p');
      date.className = 'date';
      var time = new Date(data[i].date);
      date.textContent = `${time.toString().substring(4,15)}`;
      post.innerHTML += '<div class="line"></div><h2 class="title">' + data[i].title.rendered + '</h2>';
      post.innerHTML += date.textContent;
      post.innerHTML += data[i].content.rendered;
      blogContainer.appendChild(post);
    }
  } else {
    console.log('Connected to server, but it returned an error.');
  }
};

var bg = document.querySelector('.top');

window.addEventListener('scroll', function() {
  bg.style.opacity = 1 - +window.pageYOffset/550;
  bg.style.top =  +window.pageYOffset/550+'px';
}) 