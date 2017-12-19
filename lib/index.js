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
var clone = React.cloneElement || require('react-clonewithprops');
var emptyFn = function emptyFn() {};

var DISPLAY_NAME = 'ReactToolbar';

function isRegion(child) {
	return child && child.props && child.props.isToolbarRegion;
}

function toAlign(index, regions) {
	if (index == 0) {
		return 'left';
	}

	if (index == regions.length - 1) {
		return 'right';
	}

	return 'center';
}

var THEMES = {
	default: {
		style: {
			//theme styles
			color: 'rgb(120, 120, 120)',
			border: '1px solid rgb(218, 218, 218)'
		}
	}
};

var Toolbar = function (_React$Component) {
	_inherits(Toolbar, _React$Component);

	function Toolbar() {
		_classCallCheck(this, Toolbar);

		return _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).apply(this, arguments));
	}

	_createClass(Toolbar, [{
		key: 'getDefaultProps',
		value: function getDefaultProps() {
			return {
				'data-display-name': DISPLAY_NAME,
				isReactToolbar: true,

				padding: 2,
				theme: 'default',

				defaultStyle: {
					display: 'inline-flex',
					boxSizing: 'border-box',
					overflow: 'hidden',
					whiteSpace: 'nowrap',
					textOverflow: 'ellipsis',

					padding: 2
				},

				defaultHorizontalStyle: {
					width: '100%',
					flexFlow: 'row',
					alignItems: 'center', //so items are centered vertically
					alignContent: 'stretch'
				},

				defaultVerticalStyle: {
					height: '100%',
					flexFlow: 'column',
					alignItems: 'stretch',
					alignContent: 'center'
				}
			};
		}
	}, {
		key: 'getInitialState',
		value: function getInitialState() {
			return {};
		}
	}, {
		key: 'render',
		value: function render() {

			var state = this.state;
			var props = this.prepareProps(this.props, state);

			// this.prepareContent(props)

			return React.createElement('div', props);
		}
	}, {
		key: 'prepareContent',
		value: function prepareContent(props) {

			// var style = {
			// 	display : 'inline-flex',
			// 	position: 'relative',
			// 	overflow: 'hidden',
			// 	flex    : '1 0 0',
			// 	padding : props.style.padding
			// }

			// props.style.padding = 0
		}
	}, {
		key: 'prepareProps',
		value: function prepareProps(thisProps, state) {
			var props = assign({}, thisProps);

			props.vertical = props.orientation == 'vertical';
			props.style = this.prepareStyle(props, state);
			props.children = this.prepareChildren(props, state);

			return props;
		}
	}, {
		key: 'prepareStyle',
		value: function prepareStyle(props, state) {

			var defaultOrientationStyle = props.defaultHorizontalStyle;
			var orientationStyle = props.horizontalStyle;

			if (props.vertical) {
				defaultOrientationStyle = props.defaultVerticalStyle;
				orientationStyle = props.verticalStyle;
			}

			var themes = Toolbar.themes || {};
			var theme = themes[props.theme];
			var themeStyle = theme ? theme.style : null;

			var style = assign({}, props.defaultStyle, defaultOrientationStyle, themeStyle, props.style, orientationStyle);

			return normalize(style);
		}
	}, {
		key: 'prepareChildren',
		value: function prepareChildren(props) {

			var regionCount = 0;

			var children = [];
			var regions = [];

			React.Children.forEach(props.children, function (child) {
				if (isRegion(child)) {
					regions.push(child);
					regionCount++;
				}
			}, this);

			var regionIndex = -1;
			React.Children.forEach(props.children, function (child) {
				if (isRegion(child)) {
					regionIndex++;
					child = this.prepareRegion(child, regionIndex, regions);
				}

				children.push(child);
			}, this);

			if (!regionCount) {
				return this.prepareRegion(React.createElement(
					Toolbar.Region,
					null,
					children
				));
			}

			return children;
		}
	}, {
		key: 'prepareRegion',
		value: function prepareRegion(region, index, regions) {
			index = index || 0;
			regions = regions || [];

			var props = this.props;
			var regionStyle = assign({}, props.defaultRegionStyle, props.regionStyle);

			if (props.padding) {
				regionStyle.padding = props.padding;
			}

			var style = assign({}, regionStyle, region.props.style);
			var align = region.props.align || toAlign(index, regions);

			return clone(region, {
				style: style,
				align: align
			});
		}
	}]);

	return Toolbar;
}(React.Component);

Toolbar.Region = require('./ToolbarRegion');
Toolbar.themes = THEMES;

exports.default = Toolbar;