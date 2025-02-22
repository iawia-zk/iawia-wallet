import { writeFileSync } from 'fs';

// Simple function to create a 1x1 pixel PNG buffer
function createPNG(size, color = [76, 175, 80]) { // Default color is #4CAF50
  const width = size;
  const height = size;
  
  // PNG header and IHDR chunk
  const header = Buffer.from([
    0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A,
    0x00, 0x00, 0x00, 0x0D, 0x49, 0x48, 0x44, 0x52
  ]);
  
  // Width, height, bit depth, color type, compression, filter, interlace
  const ihdr = Buffer.alloc(17);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr.writeUInt8(8, 8); // 8 bit depth
  ihdr.writeUInt8(2, 9); // RGB color type
  ihdr.writeUInt8(0, 10); // compression
  ihdr.writeUInt8(0, 11); // filter
  ihdr.writeUInt8(0, 12); // interlace
  
  // Create pixel data
  const pixelData = Buffer.alloc(width * height * 3);
  for (let i = 0; i < width * height; i++) {
    pixelData[i * 3] = color[0];     // R
    pixelData[i * 3 + 1] = color[1]; // G
    pixelData[i * 3 + 2] = color[2]; // B
  }
  
  // Combine all parts
  const png = Buffer.concat([
    header,
    ihdr,
    Buffer.from([0x00, 0x00, 0x00, 0x00, 0x49, 0x44, 0x41, 0x54]),
    pixelData,
    Buffer.from([0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4E, 0x44, 0xAE, 0x42, 0x60, 0x82])
  ]);
  
  return png;
}

// Generate icons
[16, 48, 128].forEach(size => {
  const png = createPNG(size);
  writeFileSync(`public/icons/icon${size}.png`, png);
}); 