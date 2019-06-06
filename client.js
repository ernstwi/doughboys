function getRandomInt(cap) {
  return Math.floor(Math.random() * Math.floor(cap));
}

function nextEp() {
    fetch('./data.json').then(res => {
        return res.json();
    }).then(eps => {
        let e = eps[getRandomInt(eps.length)];
        document.getElementsByTagName('iframe')[0].src =
            `https://art19.com/shows/doughboys/episodes/${e.art19_id}/embed`;
        document.getElementById('date').innerText = e.date;
        document.getElementById('pc_link').href = `https://pca.st/episode/${e.pocketcasts_id}`;
    });
}

nextEp();
