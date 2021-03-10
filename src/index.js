const { declare } = require('@babel/helper-plugin-utils');

module.exports = declare(({ types: t, assertVersion }, options) => {
  return {
    name: 'java-print-to-js',
    visitor: {
      BinaryExpression(path) {
        const { node } = path;
        if (node.operator === '^') {
          path.replaceWith(t.binaryExpression('!==', node.left, node.right));
        }
      }
    }
    
  };
});

