document.querySelector('.message__board').addEventListener('click' ,evt => {
  if(evt.target.closest('.message')) {
    const id = evt.target.getAttribute('data-message-id');
    if(!evt.target.classList.contains('admin')) {
      fetch(`./news_api.php?id=${id}`)
        .then(res => res.text())
        .then(data => {
          document.querySelector('.modal').classList.remove('hidden');
          document.querySelector('.modal__title').innerText = id;
          document.querySelector('.modal__content').innerText = data;
        })
        .catch(err => console.log(err));
    } else {
      document.querySelector('.modal__title').innerText = id;
      document.querySelector('.modal__content').innerText = '你不是管理員';
    }
  } else {
    document.querySelector('.modal').classList.add('hidden');
  }
})

document.querySelector('.login__label').addEventListener('click', () => {
  document.querySelector('.modal').classList.add('hidden');
})

document.querySelector('.login__cancel').addEventListener('click', () => {
  document.querySelector('.login').checked = false;
})