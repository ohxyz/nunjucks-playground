define(['react', 'react-dom'], function (_react, _reactDom) {
    'use strict';

    var _react2 = _interopRequireDefault(_react);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var f = function f() {

        console.log('Reactable');
    };

    _reactDom2.default.render(_react2.default.createElement(
        'h1',
        null,
        'Hi!'
    ), document.getElementById('root'));
    
});