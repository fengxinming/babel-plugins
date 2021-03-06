'use strict';

module.exports = function (types, attributes, simpleHtmlNode, simpleDSHtmlNode) {
  const newValue = types.objectExpression([
    types.objectProperty(
      types.stringLiteral('__html'),
      simpleHtmlNode.value
    )
  ]);

  if (!simpleDSHtmlNode) {
    attributes.push(
      types.jsxAttribute(
        types.jsxIdentifier('dangerouslySetInnerHTML'),
        types.jsxExpressionContainer(newValue)
      )
    );
  } else {
    simpleDSHtmlNode.attr.value = types.jsxExpressionContainer(newValue);
  }
};
