const Feed = require('rss-to-json');

const url = 'https://medium.com/feed/@jacobworrel';

function getRssFeed (url) {
  return new Promise((resolve, reject) => {
    Feed.load(url, (err, rss) => {
      if (err) {
        reject(err);
      }

      resolve(rss);
    });
  });
}

// no way to filter out comments so useless for now :(
getRssFeed(url).then(console.log);