const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/jacobworrel/jacobworrel.github.io.git',
    message: 'MEAS-1533 update to latest' // needed to bypass git hooks
  },
  (err) => {
    if (err) {
      console.error(err);
    }
    else {
      console.log('Deploy successful!');
    }
  }
);