#!/usr/bin/env node

const https = require('https');

https.get(
    'https://www.omnycontent.com/d/playlist/77bedd50-a734-42aa-9c08-ad86013ca0f9/bb15eb7d-0e1d-4fe0-b333-ad8e00138f1d/5f63c2d0-6c12-4e4a-8457-ad8e00138f26/podcast.rss',
    res => {
        let data = '';
        res.on('data', chunk => { data += chunk; });
        res.on('end', () => {
            let ids = data.match(/(?<=<link>https:\/\/omny.fm\/shows\/doughboys\/).*(?=<\/link>)/g);
            console.log(JSON.stringify(ids, null, 4));
        });
    }
);
