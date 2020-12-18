window.onload = () => {
  var transition_el = document.querySelector('.transition');
  var button = document.querySelector('.button');
  setTimeout(() => {
    transition_el.classList.remove('is-active');
  }, 400);
  
  button.addEventListener('click', e => {
    e.preventDefault();
    var target = e.target.href;
    transition_el.classList.add('is-active');

    setTimeout(() => {
      window.location.href = target;
    }, 700);
  });
}