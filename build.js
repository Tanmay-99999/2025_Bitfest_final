import { build } from 'vite';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building for production...');

// Build the frontend
await build();

// Copy necessary files
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Copy the API handler
fs.copyFileSync('api/index.js', 'dist/api.js');

console.log('Build complete!');
