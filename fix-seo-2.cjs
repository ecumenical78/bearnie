const fs = require('fs');
let content = fs.readFileSync('src/pages/index.astro', 'utf8');
content = content.replace('<AstroSeo', '<AstroSeo slot="head"');
content = content.replace('<BaseLayout', '<BaseLayout');
// move AstroSeo INSIDE BaseLayout!
// Wait, we need to move <AstroSeo ... /> to inside <BaseLayout>.
let astroSeoMatch = content.match(/<AstroSeo[\s\S]*?\/>/);
if (astroSeoMatch) {
  let seoTag = astroSeoMatch[0];
  content = content.replace(seoTag, ''); // Remove it from outside
  content = content.replace(/<BaseLayout([^>]*)>/, '<BaseLayout$1>\n  ' + seoTag);
  fs.writeFileSync('src/pages/index.astro', content);
  console.log('Fixed index.astro');
}
