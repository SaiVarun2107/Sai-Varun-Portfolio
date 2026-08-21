import fs from 'fs';
import { PNG } from 'pngjs';

const inputPath = 'C:\\Users\\Sai Varun\\.gemini\\antigravity-ide\\brain\\85db586c-c6e4-4597-9a73-1e94a802ef04\\media__1787350952796.png';

fs.createReadStream(inputPath)
  .pipe(new PNG())
  .on('parsed', function() {
    console.log(`Original image size: ${this.width} x ${this.height}`);
    
    let minX = this.width, minY = this.height, maxX = 0, maxY = 0;
    
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const idx = (this.width * y + x) << 2;
        const r = this.data[idx];
        const g = this.data[idx + 1];
        const b = this.data[idx + 2];
        const a = this.data[idx + 3];
        
        // Detect dark circle boundary pixels (r < 200, g < 200, b < 200, a > 100)
        if (a > 100 && (r < 200 || g < 200 || b < 200)) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }
    
    console.log(`Black circle bounding box: X [${minX}, ${maxX}] (width ${maxX - minX}), Y [${minY}, ${maxY}] (height ${maxY - minY})`);
  });
