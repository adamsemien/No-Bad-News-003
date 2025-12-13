const Jimp = require('jimp');
const path = require('path');

console.log('Jimp export type:', typeof Jimp);
// console.log('Jimp keys:', Object.keys(Jimp));

async function processImages() {
  try {
    const assetsDir = path.join(__dirname, '../attached_assets');
    
    // 1. Process Banner
    const bannerPath = path.join(assetsDir, 'Music_Playlist_Banner_640x140_1765390874164.jpg');
    const bannerOut = path.join(assetsDir, 'banner_processed.jpg');
    
    console.log('Processing banner...');
    
    // Jimp v1 might export the class as default or named.
    // Let's assume Jimp is the class if it has 'read' static method.
    // If not, maybe it's under 'Jimp.Jimp' or similar.
    
    const image = await Jimp.read(bannerPath);
    
    image
      .greyscale()
      .contrast(-0.1) 
      .write(bannerOut);
    console.log('Banner processed.');

    // 2. Process Spotlight
    const spotlightPath = path.join(assetsDir, 'IMG_5189_1765408932145.png');
    const spotlightOut = path.join(assetsDir, 'spotlight_processed.png');
    
    console.log('Processing spotlight...');
    const spotlight = await Jimp.read(spotlightPath);
    
    spotlight
      .contrast(-0.1)   
      .brightness(0.05) 
      .greyscale() 
      .write(spotlightOut);
      
    console.log('Spotlight processed.');

  } catch (error) {
    console.error('Error processing images:', error);
    process.exit(1);
  }
}

processImages();
