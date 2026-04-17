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
  // Match <AstroSeo ... /> followed by <BaseLayout ...>
  // or <AstroSeo ... /> followed by <DocsLayout ...>
  // or <LegalLayout ...>
  const layouts = ['BaseLayout', 'DocsLayout', 'LegalLayout'];
  
  layouts.forEach(layout => {
    const regex = new RegExp('<AstroSeo([\\\\s\\\\S]*?)/>\\\\s*(<' + layout + '[^>]*>)');
    if (regex.test(content)) {
      content = content.replace(regex, '$2\\n<AstroSeo slot="head" $1/>');
      fs.writeFileSync(file, content, 'utf8');
      console.log('Fixed:', file);
    }
  });
});
