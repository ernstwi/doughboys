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
      document.getElementById("title").src = ep.title;
      document.getElementById("number").src = ep.number;
      document.getElementById("mp3").src = ep.mp3;
    });
}

nextEp();
