'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var normalize = require('react-style-normalizer');
var assign = require('object-assign');

var cloneWithProps = React.cloneElement || require('react-clonewithprops');
var DISPLAY_NAME = 'ReactToolbarRegion';

var JUSTIFY_MAP = {
	start: 'flex-start',
	left: 'flex-start',

	end: 'flex-end',
	right: 'flex-end'
};

var TEXT_ALIGN = {
	start: 'left',
	left: 'left',

	right: 'right',
	end: 'right'
};

var ToolbarRegion = function (_React$Component) {
	_inherits(ToolbarRegion, _React$Component);

	function ToolbarRegion() {
		_classCallCheck(this, ToolbarRegion);

		return _possibleConstructorReturn(this, (ToolbarRegion.__proto__ || Object.getPrototypeOf(ToolbarRegion)).apply(this, arguments));
	}

	_createClass(ToolbarRegion, [{
		key: 'getDefaultProps',
		value: function getDefaultProps() {
			return {
				'data-display-name': DISPLAY_NAME,

				isToolbarRegion: true,

				flex: 1,
				flexShrink: null,
				flexBasis: null,

				defaultStyle: {
					boxSizing: 'border-box',

					// alignSelf   : 'center',
					alignItems: 'center',
					flexShrink: 1,
					flexBasis: 0,

					position: 'relative',
					display: 'inline-block',

					overflow: 'hidden',
					whiteSpace: 'nowrap',
					textOverflow: 'ellipsis'
				},

				defaultHorizontalStyle: {
					// display : 'inline-flex',
					flexFlow: 'row'
				},

				defaultVerticalStyle: {
					// display : 'flex',
					flexFlow: 'column'
				}
			};
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.prepareProps(this.props);

			return React.createElement('div', props);
		}
	}, {
		key: 'prepareProps',
		value: function prepareProps(thisProps) {
			var props = assign({}, thisProps);

			props.vertical = props.orientation == 'vertical';
			props.style = this.prepareStyle(props);

			return props;
		}
	}, {
		key: 'prepareStyle',
		value: function prepareStyle(props) {
			var alignStyle = {
				justifyContent: JUSTIFY_MAP[props.align] || 'center',
				textAlign: TEXT_ALIGN[props.align] || 'center'
			};

			var defaultOrientationStyle = props.defaultHorizontalStyle;
			var orientationStyle = props.horizontalStyle;

			if (props.vertical) {
				defaultOrientationStyle = props.defaultVerticalStyle;
				orientationStyle = props.verticalStyle;
			}

			var style = assign({}, props.defaultStyle, defaultOrientationStyle, props.style, orientationStyle, alignStyle);

			if (props.flex !== false && props.flex != null) {
				var flex;
				var flexShrink = 0;
				var flexBasis = 0;

				if (typeof props.flex == 'number') {
					flex = props.flex + ' ' + (props.flexShrink || style.flexShrink || flexShrink) + ' ' + (props.flexBasis || style.flexBasis || flexBasis);
				} else {
					flex = props.flex;
				}

				style.flex = flex;
			}

			return normalize(style);
		}
	}]);

	return ToolbarRegion;
}(React.Component);

exports.default = ToolbarRegion;