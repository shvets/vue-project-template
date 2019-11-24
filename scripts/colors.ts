type Color = [number, number, number]

const rgbToHex = (rgb: Color) => '#' + rgb.map((x) => {
  const hex = x.toString(16);

  return hex.length === 1 ? '0' + hex : hex;
}).join('');

import ColorThief from 'colorthief/dist/color-thief.js';
import chalk from 'chalk';

const path = require('path');

const img = path.resolve(process.cwd(), './src/assets/logo.png');

ColorThief.getColor(img).then((color: Color) => {
  const dominantColor = rgbToHex(color);

  console.log(`${chalk.hex(dominantColor)('AAA')} --- ${dominantColor}`);

  ColorThief.getPalette(img, 7).then((result: Color[]) => {
    const palette = result.map((color) => rgbToHex(color));

    for (const paletteColor of palette) {
      console.log(`${chalk.hex(paletteColor)('AAA')} --- ${paletteColor}`);
    }
  });
});
