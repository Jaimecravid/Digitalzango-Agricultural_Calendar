// CheckNavPages.js
// Place this at the root of your project and run with: node CheckNavPages.js

const fs = require('fs');
const path = require('path');

const headerPath = path.join(__dirname, 'app', 'components', 'header.tsx');
const appDir = path.join(__dirname, 'app');

// 1. Extract navigation links from header.tsx
const headerContent = fs.readFileSync(headerPath, 'utf8');
const navLinkRegex = /<Link\s+href=["'](\/[a-zA-Z0-9\-\/]*)["']/g;

const navLinks = [];
let match;
while ((match = navLinkRegex.exec(headerContent)) !== null) {
  navLinks.push(match[1]);
}

// 2. Focus on the specified routes
const focusRoutes = ['/tools', '/recursos', '/blog', '/comunidade'];

// 3. Check if page.tsx exists for each route
const missingPages = [];
focusRoutes.forEach(route => {
  const routeDir = path.join(appDir, ...route.split('/').filter(Boolean));
  const pageFile = path.join(routeDir, 'page.tsx');
  if (!fs.existsSync(pageFile)) {
    missingPages.push({ route, pageFile });
  }
});

// 4. Report and generate PowerShell commands
console.log('🔍 --- DigitalZango Navigation Analysis ---');
console.log('📋 Navigation Links Found in Header:');
navLinks.forEach(link => {
  const exists = fs.existsSync(path.join(appDir, ...link.split('/').filter(Boolean), 'page.tsx'));
  console.log(`${exists ? '✅' : '❌'} ${link}`);
});

console.log('\n🚨 --- Missing Pages (Causing 404 Errors) ---');
if (missingPages.length === 0) {
  console.log('✅ All pages exist! No 404 errors found.');
} else {
  missingPages.forEach(mp => {
    console.log(`❌ ${mp.route} -> Missing: ${mp.pageFile}`);
  });
}

console.log('\n🛠️ --- PowerShell Commands to Fix Missing Pages ---');
missingPages.forEach(mp => {
  const dir = path.dirname(mp.pageFile).replace(/\\/g, '/');
  const routeName = mp.route.substring(1); // Remove leading slash
  const pageName = routeName.charAt(0).toUpperCase() + routeName.slice(1);
  
  console.log(`# Create ${mp.route} page`);
  console.log(`New-Item -Path '${dir}' -ItemType Directory -Force`);
  console.log(`@'
export default function ${pageName}Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">${pageName} - DigitalZango</h1>
      <p>Página em desenvolvimento para ${routeName} do Calendário Agrícola.</p>
    </div>
  );
}
'@ | Out-File -Encoding utf8 '${mp.pageFile.replace(/\\/g, '/')}'`);
  console.log('');
});

console.log('🎯 --- Summary ---');
console.log(`Total navigation links: ${navLinks.length}`);
console.log(`Missing pages: ${missingPages.length}`);
console.log(`Working pages: ${navLinks.length - missingPages.length}`);
