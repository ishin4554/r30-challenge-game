fetch(`./news_api.php?id=${134238}`)
  .then(res => res.text())
  .then(data => console.log('查無資料'))