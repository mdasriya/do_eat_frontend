// generate-sitemap.js
import SitemapGenerator from 'sitemap-generator'

// create generator
const generator = SitemapGenerator('https://www.doeat.com', {
  stripQuerystring: false,
});

// register event listeners
generator.on('done', () => {
  console.log('Sitemap generated!');
});

// start the crawler
generator.start();


// Do Eat Food Delivery
//google measuring id :  G-NKCXH9TYPF