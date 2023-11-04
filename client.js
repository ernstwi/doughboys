function getRandomInt(cap) {
  return Math.floor(Math.random() * Math.floor(cap));
}

function nextEp() {
  fetch("./data.json")
    .then((res) => {
      return res.json();
    })
    .then((eps) => {
      let ep = eps[getRandomInt(eps.length)];
      document.getElementsByTagName("title")[0].src = ep.title;
      document.getElementsByTagName("number")[0].src = ep.number;
      document.getElementsByTagName("mp3")[0].src = ep.mp3;
    });
}

nextEp();
