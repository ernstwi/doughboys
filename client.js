function getRandomInt(cap) {
  return Math.floor(Math.random() * Math.floor(cap));
}

function nextEp(year) {
  fetch("./data.json")
    .then((res) => {
      return res.json();
    })
    .then((eps) => {
      if (year) eps = eps.filter((ep) => ep.date.includes(year));
      let ep = eps[getRandomInt(eps.length)];
      document.getElementById(
        "title",
      ).innerText = `${ep.title} (#${ep.number})`;
      document.getElementById("date").innerText = ep.date;
      document.getElementById("mp3").src = ep.mp3;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  [
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ].forEach((y) => {
    const link = document.getElementById(y);
    link.addEventListener("click", (event) => {
      event.preventDefault();
      nextEp(y);
    });
  });
});

nextEp();
