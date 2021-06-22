const { declare } = require('@babel/helper-plugin-utils');

module.exports = declare(({ types: t, assertVersion }, options) => {
  return {
    // name of the babel plugin
    name: 'java-print-to-js',
    // implement a visitor to traverse AST passed by babel engine
    // and make some change to our target node
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

