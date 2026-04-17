const fs = require('fs');
const path = require('path');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.astro')) results.push(file);
    }
  });
  return results;
}
const files = walk('src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let astroSeoMatch = content.match(/<AstroSeo[\s\S]*?\/>/);
  if (astroSeoMatch && !astroSeoMatch[0].includes('slot="head"')) {
    let seoTag = astroSeoMatch[0];
    let newSeoTag = seoTag.replace('<AstroSeo', '<AstroSeo slot="head"');
    
    // We only want to move it inside if it's currently outside
    const baseLayoutRegex = /<(BaseLayout|DocsLayout|LegalLayout)([^>]*)>/;
    const match = content.match(baseLayoutRegex);
    
    if (match) {
      // only move it if SeoTag comes BEFORE Layout Match in the file
      if (content.indexOf(seoTag) < content.indexOf(match[0])) {
         content = content.replace(seoTag, '');
         content = content.replace(baseLayoutRegex, `$&\n  ${newSeoTag}`);
         fs.writeFileSync(file, content, 'utf8');
         console.log('Fixed', file);
      }
    }
  }
});
