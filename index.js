const babel = require('@babel/core');
const { readFileSync, writeFileSync, unlinkSync } = require('fs');
const { resolve } = require('path');

const testFilePath = resolve(__dirname, 'test', 'input.js');
const targetFilePath = resolve(__dirname, 'test', 'output.js');

try {
  unlinkSync(targetFilePath)
} catch (error) {
  
}

const result = babel.transformSync(readFileSync(testFilePath, 'utf-8'), {
  plugins: [require.resolve('./src/index.js')],
});

writeFileSync(targetFilePath, result.code, { encoding: 'utf-8' });
