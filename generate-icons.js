#!/usr/bin/env node

// Simple icon generator for PWA
// This creates PNG icons with a simple stretching figure design

const fs = require('fs');
const path = require('path');

// Try to use canvas if available, otherwise create placeholder
let Canvas;
try {
  Canvas = require('canvas');
} catch (e) {
  console.log('Canvas not available, will create simple placeholders');
}

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const iconsDir = path.join(__dirname, 'icons');

// Ensure icons directory exists
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir);
}

function drawIcon(size) {
  const canvas = Canvas.createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Background - gradient purple
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, '#6c5ce7');
  gradient.addColorStop(1, '#a29bfe');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  // Draw a simple stretching figure
  const centerX = size / 2;
  const centerY = size / 2;
  const scale = size / 512;

  ctx.strokeStyle = '#ffffff';
  ctx.fillStyle = '#ffffff';
  ctx.lineWidth = 12 * scale;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  // Head
  ctx.beginPath();
  ctx.arc(centerX, centerY - 100 * scale, 40 * scale, 0, Math.PI * 2);
  ctx.fill();

  // Body (torso)
  ctx.beginPath();
  ctx.moveTo(centerX, centerY - 60 * scale);
  ctx.lineTo(centerX, centerY + 50 * scale);
  ctx.stroke();

  // Left arm (stretched out)
  ctx.beginPath();
  ctx.moveTo(centerX, centerY - 40 * scale);
  ctx.lineTo(centerX - 120 * scale, centerY - 80 * scale);
  ctx.stroke();

  // Right arm (stretched out)
  ctx.beginPath();
  ctx.moveTo(centerX, centerY - 40 * scale);
  ctx.lineTo(centerX + 120 * scale, centerY - 80 * scale);
  ctx.stroke();

  // Left leg (doing splits)
  ctx.beginPath();
  ctx.moveTo(centerX, centerY + 50 * scale);
  ctx.lineTo(centerX - 140 * scale, centerY + 140 * scale);
  ctx.stroke();

  // Right leg (doing splits)
  ctx.beginPath();
  ctx.moveTo(centerX, centerY + 50 * scale);
  ctx.lineTo(centerX + 140 * scale, centerY + 140 * scale);
  ctx.stroke();

  return canvas;
}

if (Canvas) {
  // Generate PNG icons using canvas
  sizes.forEach(size => {
    const canvas = drawIcon(size);
    const buffer = canvas.toBuffer('image/png');
    const filename = path.join(iconsDir, `icon-${size}x${size}.png`);
    fs.writeFileSync(filename, buffer);
    console.log(`Generated ${filename}`);
  });
} else {
  console.log('Canvas module not available. Please install it with: npm install canvas');
  console.log('Or use an online tool to generate icons from the SVG.');
}
