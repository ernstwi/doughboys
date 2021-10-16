function getRandomInt(cap) {
  return Math.floor(Math.random() * Math.floor(cap));
}

function nextEp() {
    fetch('./data.json').then(res => {
        return res.json();
    }).then(ids => {
        let id = ids[getRandomInt(ids.length)];
        document.getElementsByTagName('iframe')[0].src =
            `https://omny.fm/shows/doughboys/${id}/embed?style=cover`;
    });
}

nextEp();
