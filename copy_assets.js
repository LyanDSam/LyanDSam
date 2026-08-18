const fs = require('fs');
const path = require('path');

const src1 = `C:\\Users\\asus\\.gemini\\antigravity-ide\\brain\\c57e70c1-809c-486c-a74a-6bd97939dfef\\media__1787022108606.jpg`;
const src2 = `C:\\Users\\asus\\.gemini\\antigravity-ide\\brain\\c57e70c1-809c-486c-a74a-6bd97939dfef\\media__1787022115194.jpg`;

const destDir = path.join(__dirname, 'assets');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

try {
  if (fs.existsSync(src1)) {
    fs.copyFileSync(src1, path.join(destDir, 'cafe-photo.jpg'));
    console.log('✅ Successfully copied cafe-photo.jpg');
  } else {
    console.log('⚠️ Source 1 not found: ' + src1);
  }

  if (fs.existsSync(src2)) {
    fs.copyFileSync(src2, path.join(destDir, 'music-photo.jpg'));
    console.log('✅ Successfully copied music-photo.jpg');
  } else {
    console.log('⚠️ Source 2 not found: ' + src2);
  }
} catch (err) {
  console.error('Error copying assets:', err);
}
