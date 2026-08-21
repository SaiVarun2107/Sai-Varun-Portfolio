import fs from 'fs';
import { PNG } from 'pngjs';

const inputPath = 'C:\\Users\\Sai Varun\\.gemini\\antigravity-ide\\brain\\85db586c-c6e4-4597-9a73-1e94a802ef04\\media__1787350952796.png';
const outPngPath = 'c:\\Users\\Sai Varun\\Downloads\\visual-match-folio-main\\visual-match-folio-main\\public\\favicon.png';
const outLogoPath = 'c:\\Users\\Sai Varun\\Downloads\\visual-match-folio-main\\visual-match-folio-main\\public\\logo.png';
const outIcoPath = 'c:\\Users\\Sai Varun\\Downloads\\visual-match-folio-main\\visual-match-folio-main\\public\\favicon.ico';
const outSvgPath = 'c:\\Users\\Sai Varun\\Downloads\\visual-match-folio-main\\visual-match-folio-main\\public\\favicon.svg';

fs.createReadStream(inputPath)
  .pipe(new PNG())
  .on('parsed', function() {
    const src = this;
    const outSize = 512;
    const output = new PNG({ width: outSize, height: outSize });

    // Source circle parameters derived from pixel analysis
    const srcCenterX = 299.5;
    const srcCenterY = 299.5;
    const srcRadius = 174.5; // Radius of black circle in source image

    const outCenter = outSize / 2;
    const outRadius = outSize / 2;

    // 4x4 Supersampling Anti-Aliasing (SSAA) for maximum clarity and zero blur
    const samplesPerAxis = 4;
    const totalSamples = samplesPerAxis * samplesPerAxis;

    for (let y = 0; y < outSize; y++) {
      for (let x = 0; x < outSize; x++) {
        let accR = 0, accG = 0, accB = 0, accA = 0;

        for (let sy = 0; sy < samplesPerAxis; sy++) {
          const subY = y + (sy + 0.5) / samplesPerAxis;
          const dy = subY - outCenter;

          for (let sx = 0; sx < samplesPerAxis; sx++) {
            const subX = x + (sx + 0.5) / samplesPerAxis;
            const dx = subX - outCenter;

            // Distance from output circle center
            const outDist = Math.sqrt(dx * dx + dy * dy);

            if (outDist > outRadius) {
              // Outside circle -> transparent
              continue;
            }

            // Map output subpixel coordinate directly to source circle space
            const mapX = srcCenterX + (dx / outRadius) * srcRadius;
            const mapY = srcCenterY + (dy / outRadius) * srcRadius;

            // Check distance in source image
            const sDx = mapX - srcCenterX;
            const sDy = mapY - srcCenterY;
            const sDist = Math.sqrt(sDx * sDx + sDy * sDy);

            if (sDist > srcRadius + 0.5) {
              continue;
            }

            // Bilinear sampling from source image
            const px0 = Math.floor(mapX);
            const px1 = Math.min(px0 + 1, src.width - 1);
            const py0 = Math.floor(mapY);
            const py1 = Math.min(py0 + 1, src.height - 1);

            const wx = mapX - px0;
            const wy = mapY - py0;

            const idx00 = (src.width * py0 + px0) << 2;
            const idx10 = (src.width * py0 + px1) << 2;
            const idx01 = (src.width * py1 + px0) << 2;
            const idx11 = (src.width * py1 + px1) << 2;

            const r =
              (1 - wx) * (1 - wy) * src.data[idx00] +
              wx * (1 - wy) * src.data[idx10] +
              (1 - wx) * wy * src.data[idx01] +
              wx * wy * src.data[idx11];
            const g =
              (1 - wx) * (1 - wy) * src.data[idx00 + 1] +
              wx * (1 - wy) * src.data[idx10 + 1] +
              (1 - wx) * wy * src.data[idx01 + 1] +
              wx * wy * src.data[idx11 + 1];
            const b =
              (1 - wx) * (1 - wy) * src.data[idx00 + 2] +
              wx * (1 - wy) * src.data[idx10 + 2] +
              (1 - wx) * wy * src.data[idx01 + 2] +
              wx * wy * src.data[idx11 + 2];
            const a =
              (1 - wx) * (1 - wy) * src.data[idx00 + 3] +
              wx * (1 - wy) * src.data[idx10 + 3] +
              (1 - wx) * wy * src.data[idx01 + 3] +
              wx * wy * src.data[idx11 + 3];

            accR += r;
            accG += g;
            accB += b;
            accA += a;
          }
        }

        const outIdx = (outSize * y + x) << 2;
        output.data[outIdx] = Math.round(accR / totalSamples);
        output.data[outIdx + 1] = Math.round(accG / totalSamples);
        output.data[outIdx + 2] = Math.round(accB / totalSamples);
        output.data[outIdx + 3] = Math.round(accA / totalSamples);
      }
    }

    // Write PNG files
    const buffer = PNG.sync.write(output);
    fs.writeFileSync(outPngPath, buffer);
    fs.writeFileSync(outLogoPath, buffer);
    fs.writeFileSync(outIcoPath, buffer);
    
    // SVG container wrapping the high-res 4x4 SSAA PNG with vector clip-path
    const base64Png = buffer.toString('base64');
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${outSize} ${outSize}" width="100%" height="100%">
  <defs>
    <clipPath id="circle-clip">
      <circle cx="${outCenter}" cy="${outCenter}" r="${outRadius}" />
    </clipPath>
  </defs>
  <image href="data:image/png;base64,${base64Png}" width="${outSize}" height="${outSize}" clip-path="url(#circle-clip)" />
</svg>`;
    fs.writeFileSync(outSvgPath, svgContent);

    console.log("Successfully generated ultra-sharp 4x4 SSAA circular favicons!");
  });
