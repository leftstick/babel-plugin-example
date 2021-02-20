const { declare } = require('@babel/helper-plugin-utils');

module.exports = declare(({ types: t, assertVersion }, options) => {
  return {
    name: 'java-print-to-js',
    visitor: {
      MemberExpression(path, state) {
        if (t.isIdentifier(path.node.property) && path.node.property.name === 'println') {
          path.replaceWith(t.memberExpression(t.identifier('console'), t.identifier('log')))
        }
      },
    },
  };
});
