'use strict';

var myComponent = {
  'css': null,
  'exports': null,
  'template': function (template, expressionTypes, bindingTypes, getComponent) {
    return template('<h1 expr0="expr0"> </h1>', [{
      'redundantAttribute': 'expr0',
      'selector': '[expr0]',
      'expressions': [{
        'type': expressionTypes.TEXT,
        'childNodeIndex': 0,
        'evaluate': function (_scope) {
          return ['Hello ', _scope.props.name].join('');
        }
      }]
    }]);
  },
  'name': 'my-component'
};

module.exports = myComponent;
