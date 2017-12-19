(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactToolbar"] = factory(require("React"));
	else
		root["ReactToolbar"] = factory(root["React"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(str){
	return str?
			str.charAt(0).toUpperCase() + str.slice(1):
			''
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toUpperFirst = __webpack_require__(1)
var prefixes     = ["ms", "Moz", "Webkit", "O"]

var el = __webpack_require__(3)

var ELEMENT
var PREFIX

module.exports = function(key){

	if (PREFIX !== undefined){
		return PREFIX
	}

	ELEMENT = ELEMENT || el()

	var i = 0
	var len = prefixes.length
	var tmp
	var prefix

	for (; i < len; i++){
		prefix = prefixes[i]
		tmp = prefix + toUpperFirst(key)

		if (typeof ELEMENT.style[tmp] != 'undefined'){
			return PREFIX = prefix
		}
	}

	return PREFIX
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var el

module.exports = function(){

	if(!el && !!global.document){
	  	el = global.document.createElement('div')
	}

	if (!el){
		el = {style: {}}
	}

	return el
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwn      = __webpack_require__(9)
var getPrefixed = __webpack_require__(10)

var map      = __webpack_require__(13)
var plugable = __webpack_require__(14)

function plugins(key, value){

	var result = {
		key  : key,
		value: value
	}

	;(RESULT.plugins || []).forEach(function(fn){

		var tmp = map(function(res){
			return fn(key, value, res)
		}, result)

		if (tmp){
			result = tmp
		}
	})

	return result
}

function normalize(key, value){

	var result = plugins(key, value)

	return map(function(result){
		return {
			key  : getPrefixed(result.key, result.value),
			value: result.value
		}
	}, result)

	return result
}

var RESULT = function(style){

	var k
	var item
	var result = {}

	for (k in style) if (hasOwn(style, k)){
		item = normalize(k, style[k])

		if (!item){
			continue
		}

		map(function(item){
			result[item.key] = item.value
		}, item)
	}

	return result
}

module.exports = plugable(RESULT)

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  'alignItems': 1,
  'justifyContent': 1,
  'flex': 1,
  'flexFlow': 1,
  'flexGrow': 1,
  'flexShrink': 1,
  'flexBasis': 1,
  'flexDirection': 1,
  'flexWrap': 1,
  'alignContent': 1,
  'alignSelf': 1,

  'userSelect': 1,
  'transform': 1,
  'transition': 1,
  'transformOrigin': 1,
  'transformStyle': 1,
  'transitionProperty': 1,
  'transitionDuration': 1,
  'transitionTimingFunction': 1,
  'transitionDelay': 1,
  'borderImage': 1,
  'borderImageSlice': 1,
  'boxShadow': 1,
  'backgroundClip': 1,
  'backfaceVisibility': 1,
  'perspective': 1,
  'perspectiveOrigin': 1,
  'animation': 1,
  'animationDuration': 1,
  'animationName': 1,
  'animationDelay': 1,
  'animationDirection': 1,
  'animationIterationCount': 1,
  'animationTimingFunction': 1,
  'animationPlayState': 1,
  'animationFillMode': 1,
  'appearance': 1
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var React    = __webpack_require__(0)
  , hasOwn   = Object.prototype.hasOwnProperty
  , version  = React.version.split('.').map(parseFloat)
  , RESERVED = {
      className:  resolve(joinClasses),
      children:   function(){},
      key:        function(){},
      ref:        function(){},
      style:      resolve(extend)
    };

module.exports = function cloneWithProps(child, props) {
  var newProps = mergeProps(props, child.props);

  if (!hasOwn.call(newProps, 'children') && hasOwn.call(child.props, 'children'))
    newProps.children = child.props.children;

  // < 0.11
  if (version[0] === 0 && version[1] < 11)
    return child.constructor.ConvenienceConstructor(newProps);
  
  // 0.11
  if (version[0] === 0 && version[1] === 11)
    return child.constructor(newProps);

  // 0.12
  else if (version[0] === 0 && version[1] === 12){
    MockLegacyFactory.isReactLegacyFactory = true
    MockLegacyFactory.type = child.type
    return React.createElement(MockLegacyFactory, newProps);
  }

  // 0.13+
  return React.createElement(child.type, newProps);

  function MockLegacyFactory(){}
}

function mergeProps(currentProps, childProps) {
  var newProps = extend(currentProps), key

  for (key in childProps) {
    if (hasOwn.call(RESERVED, key) )
      RESERVED[key](newProps, childProps[key], key)

    else if ( !hasOwn.call(newProps, key) )
      newProps[key] = childProps[key];
  }
  return newProps
}

function resolve(fn){
  return function(src, value, key){
    if( !hasOwn.call(src, key)) src[key] = value
    else src[key] = fn(src[key], value)
  }
}

function joinClasses(a, b){
  if ( !a ) return b || ''
  return a + (b ? ' ' + b : '')
}

function extend() {
  var target = {};
  for (var i = 0; i < arguments.length; i++) 
    for (var key in arguments[i]) if (hasOwn.call(arguments[i], key)) 
      target[key] = arguments[i][key]   
  return target
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(0);
var normalize = __webpack_require__(4);
var assign = __webpack_require__(6);
var clone = React.cloneElement || __webpack_require__(7);
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

Toolbar.Region = __webpack_require__(17);
Toolbar.themes = THEMES;

/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(obj, prop){
	return Object.prototype.hasOwnProperty.call(obj, prop)
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getStylePrefixed = __webpack_require__(11)
var properties       = __webpack_require__(5)

module.exports = function(key, value){

	if (!properties[key]){
		return key
	}

	return getStylePrefixed(key, value)
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toUpperFirst = __webpack_require__(1)
var getPrefix    = __webpack_require__(2)
var el           = __webpack_require__(3)

var MEMORY = {}
var STYLE
var ELEMENT

var PREFIX

module.exports = function(key, value){

    ELEMENT = ELEMENT || el()
    STYLE   = STYLE   || ELEMENT.style

    var k = key// + ': ' + value

    if (MEMORY[k]){
        return MEMORY[k]
    }

    var prefix
    var prefixed

    if (!(key in STYLE)){//we have to prefix

        // if (PREFIX){
        //     prefix = PREFIX
        // } else {
            prefix = getPrefix('appearance')

        //     if (prefix){
        //         prefix = PREFIX = prefix.toLowerCase()
        //     }
        // }

        if (prefix){
            prefixed = prefix + toUpperFirst(key)

            if (prefixed in STYLE){
                key = prefixed
            }
        }
    }

    MEMORY[k] = key

    return key
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(fn, item){

	if (!item){
		return
	}

	if (Array.isArray(item)){
		return item.map(fn).filter(function(x){
			return !!x
		})
	} else {
		return fn(item)
	}
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getCssPrefixedValue = __webpack_require__(15)

module.exports = function(target){
	target.plugins = target.plugins || [
		(function(){
			var values = {
				'flex':1,
				'inline-flex':1
			}

			return function(key, value){
				if (key === 'display' && value in values){
					return {
						key  : key,
						value: getCssPrefixedValue(key, value, true)
					}
				}
			}
		})()
	]

	target.plugin = function(fn){
		target.plugins = target.plugins || []

		target.plugins.push(fn)
	}

	return target
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPrefix     = __webpack_require__(2)
var forcePrefixed = __webpack_require__(16)
var el            = __webpack_require__(3)

var MEMORY = {}
var STYLE
var ELEMENT

module.exports = function(key, value, force){

    ELEMENT = ELEMENT || el()
    STYLE   = STYLE   ||  ELEMENT.style

    var k = key + ': ' + value

    if (MEMORY[k]){
        return MEMORY[k]
    }

    var prefix
    var prefixed
    var prefixedValue

    if (force || !(key in STYLE)){

        prefix = getPrefix('appearance')

        if (prefix){
            prefixed = forcePrefixed(key, value)

            prefixedValue = '-' + prefix.toLowerCase() + '-' + value

            if (prefixed in STYLE){
                ELEMENT.style[prefixed] = ''
                ELEMENT.style[prefixed] = prefixedValue

                if (ELEMENT.style[prefixed] !== ''){
                    value = prefixedValue
                }
            }
        }
    }

    MEMORY[k] = value

    return value
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toUpperFirst = __webpack_require__(1)
var getPrefix    = __webpack_require__(2)
var properties   = __webpack_require__(5)

/**
 * Returns the given key prefixed, if the property is found in the prefixProps map.
 *
 * Does not test if the property supports the given value unprefixed.
 * If you need this, use './getPrefixed' instead
 */
module.exports = function(key, value){

	if (!properties[key]){
		return key
	}

	var prefix = getPrefix(key)

	return prefix?
				prefix + toUpperFirst(key):
				key
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(0);
var normalize = __webpack_require__(4);
var assign = __webpack_require__(6);

var cloneWithProps = React.cloneElement || __webpack_require__(7);
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

/* harmony default export */ __webpack_exports__["default"] = (ToolbarRegion);

/***/ })
/******/ ]);
});