const fs = require('fs');

let data = JSON.parse(fs.readFileSync(0, 'utf-8'));
let res = [];
for (let ep of data.podcast.episodes) {
    res.push({
        date: ep.published.slice(0,10),
        pocketcasts_id: ep.uuid,
        art19_id: ep.url.match(/rss.art19.com\/episodes\/(.*)\.mp3/)[1]
    });
}

console.log(JSON.stringify(res, null, 4));
