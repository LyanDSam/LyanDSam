const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const src1 = `C:\\Users\\asus\\.gemini\\antigravity-ide\\brain\\c57e70c1-809c-486c-a74a-6bd97939dfef\\media__1787022108606.jpg`;
const src2 = `C:\\Users\\asus\\.gemini\\antigravity-ide\\brain\\c57e70c1-809c-486c-a74a-6bd97939dfef\\media__1787022115194.jpg`;

const destDir = path.join(__dirname, 'assets');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

try {
  let copied = false;
  if (fs.existsSync(src1)) {
    fs.copyFileSync(src1, path.join(destDir, 'cafe-photo.jpg'));
    console.log('✅ Successfully copied cafe-photo.jpg');
    copied = true;
  } else {
    console.log('⚠️ Source 1 not found: ' + src1);
  }

  if (fs.existsSync(src2)) {
    fs.copyFileSync(src2, path.join(destDir, 'music-photo.jpg'));
    console.log('✅ Successfully copied music-photo.jpg');
    copied = true;
  } else {
    console.log('⚠️ Source 2 not found: ' + src2);
  }

  if (copied) {
    console.log('\n🚀 Automatically committing and pushing photo assets to GitHub...');
    try {
      execSync('git add assets', { cwd: __dirname, stdio: 'inherit' });
      execSync('git commit -m "Add photo assets"', { cwd: __dirname, stdio: 'inherit' });
      execSync('git push origin main', { cwd: __dirname, stdio: 'inherit' });
      console.log('🎉 Successfully pushed photo assets to GitHub!');
    } catch (gitErr) {
      console.log('💡 Git auto-push note:', gitErr.message || gitErr);
    }
  }
} catch (err) {
  console.error('Error copying assets:', err);
}
