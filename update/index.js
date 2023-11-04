#!/usr/bin/env node

const https = require("https");
const parseString = require("xml2js").parseString;

https.get("https://rss.art19.com/doughboys", (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    let xml = data;
    parseString(xml, (err, result) => {
      if (err) {
      } else {
        let eps = result.rss.channel[0].item.map((i) => ({
          title: i.title?.[0],
          number: i["itunes:episode"]?.[0],
          date: i.pubDate?.[0],
          mp3: i["enclosure"][0]?.$.url,
        }));
        console.log(JSON.stringify(eps, null, 4));
      }
    });
  });
});
