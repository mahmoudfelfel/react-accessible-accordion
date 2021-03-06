(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.reactAccessibleAccordion = {}),global.React));
}(this, (function (exports,React) { 'use strict';

	var React__default = 'default' in React ? React['default'] : React;

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	var emptyFunction_1 = emptyFunction;

	var emptyFunction$1 = /*#__PURE__*/Object.freeze({
		default: emptyFunction_1,
		__moduleExports: emptyFunction_1
	});

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	var invariant_1 = invariant;

	var invariant$1 = /*#__PURE__*/Object.freeze({
		default: invariant_1,
		__moduleExports: invariant_1
	});

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	var ReactPropTypesSecret$1 = /*#__PURE__*/Object.freeze({
		default: ReactPropTypesSecret_1,
		__moduleExports: ReactPropTypesSecret_1
	});

	var emptyFunction$2 = ( emptyFunction$1 && emptyFunction_1 ) || emptyFunction$1;

	var invariant$2 = ( invariant$1 && invariant_1 ) || invariant$1;

	var ReactPropTypesSecret$2 = ( ReactPropTypesSecret$1 && ReactPropTypesSecret_1 ) || ReactPropTypesSecret$1;

	var factoryWithThrowingShims = function () {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret$2) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant$2(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
	  }  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction$2;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	var factoryWithThrowingShims$1 = /*#__PURE__*/Object.freeze({
		default: factoryWithThrowingShims,
		__moduleExports: factoryWithThrowingShims
	});

	var require$$0 = ( factoryWithThrowingShims$1 && factoryWithThrowingShims ) || factoryWithThrowingShims$1;

	var propTypes = createCommonjsModule(function (module) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	{
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = require$$0();
	}
	});

	var propTypes$1 = /*#__PURE__*/Object.freeze({
		default: propTypes,
		__moduleExports: propTypes
	});

	var _propTypes = ( propTypes$1 && propTypes ) || propTypes$1;

	var lib = createCommonjsModule(function (module, exports) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;



	var _react2 = _interopRequireDefault(React__default);



	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	function createEventEmitter(value) {
	  var handlers = [];
	  return {
	    on: function on(handler) {
	      handlers.push(handler);
	    },
	    off: function off(handler) {
	      handlers = handlers.filter(function (h) {
	        return h !== handler;
	      });
	    },
	    get: function get() {
	      return value;
	    },
	    set: function set(newValue) {
	      value = newValue;
	      handlers.forEach(function (handler) {
	        return handler(value);
	      });
	    }
	  };
	}

	function onlyChild(children) {
	  return Array.isArray(children) ? children[0] : children;
	}

	var uniqueId = 0;

	function createReactContext(defaultValue) {
	  var _Provider$childContex, _Consumer$contextType;

	  var contextProp = '__create-react-context-' + uniqueId++ + '__';

	  var Provider = function (_Component) {
	    _inherits(Provider, _Component);

	    function Provider() {
	      var _temp, _this, _ret;

	      _classCallCheck(this, Provider);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    Provider.prototype.getChildContext = function getChildContext() {
	      var _ref;

	      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
	    };

	    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      if (this.props.value !== nextProps.value) {
	        this.emitter.set(nextProps.value);
	      }
	    };

	    Provider.prototype.render = function render() {
	      return this.props.children;
	    };

	    return Provider;
	  }(React__default.Component);

	  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

	  var Consumer = function (_Component2) {
	    _inherits(Consumer, _Component2);

	    function Consumer() {
	      var _temp2, _this2, _ret2;

	      _classCallCheck(this, Consumer);

	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
	        value: _this2.getValue()
	      }, _this2.onUpdate = function () {
	        _this2.setState({
	          value: _this2.getValue()
	        });
	      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
	    }

	    Consumer.prototype.componentDidMount = function componentDidMount() {
	      if (this.context[contextProp]) {
	        this.context[contextProp].on(this.onUpdate);
	      }
	    };

	    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
	      if (this.context[contextProp]) {
	        this.context[contextProp].off(this.onUpdate);
	      }
	    };

	    Consumer.prototype.getValue = function getValue() {
	      if (this.context[contextProp]) {
	        return this.context[contextProp].get();
	      } else {
	        return defaultValue;
	      }
	    };

	    Consumer.prototype.render = function render() {
	      return onlyChild(this.props.children)(this.state.value);
	    };

	    return Consumer;
	  }(React__default.Component);

	  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);

	  return {
	    Provider: Provider,
	    Consumer: Consumer
	  };
	}

	exports.default = createReactContext;
	module.exports = exports['default'];
	});

	var createReactContext = unwrapExports(lib);

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
	};

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var StateContext = createReactContext(null);

	var Container = function () {
	  function Container() {
	    var _this = this;

	    _classCallCheck(this, Container);

	    this._listeners = [];

	    CONTAINER_DEBUG_CALLBACKS.forEach(function (cb) {
	      return cb(_this);
	    });
	  }

	  Container.prototype.setState = function setState(updater, callback) {
	    var _this2 = this;

	    return Promise.resolve().then(function () {
	      var nextState = void 0;

	      if (typeof updater === 'function') {
	        nextState = updater(_this2.state);
	      } else {
	        nextState = updater;
	      }

	      if (nextState == null) {
	        if (callback) callback();
	        return;
	      }

	      _this2.state = Object.assign({}, _this2.state, nextState);

	      var promises = _this2._listeners.map(function (listener) {
	        return listener();
	      });

	      return Promise.all(promises).then(function () {
	        if (callback) {
	          return callback();
	        }
	      });
	    });
	  };

	  Container.prototype.subscribe = function subscribe(fn) {
	    this._listeners.push(fn);
	  };

	  Container.prototype.unsubscribe = function unsubscribe(fn) {
	    this._listeners = this._listeners.filter(function (f) {
	      return f !== fn;
	    });
	  };

	  return Container;
	}();

	var DUMMY_STATE = {};

	var Subscribe = function (_React$Component) {
	  _inherits(Subscribe, _React$Component);

	  function Subscribe() {
	    var _temp, _this3, _ret;

	    _classCallCheck(this, Subscribe);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this3 = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this3), _this3.state = {}, _this3.instances = [], _this3.unmounted = false, _this3.onUpdate = function () {
	      return new Promise(function (resolve) {
	        if (!_this3.unmounted) {
	          _this3.setState(DUMMY_STATE, resolve);
	        } else {
	          resolve();
	        }
	      });
	    }, _temp), _possibleConstructorReturn(_this3, _ret);
	  }

	  Subscribe.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.unmounted = true;
	    this._unsubscribe();
	  };

	  Subscribe.prototype._unsubscribe = function _unsubscribe() {
	    var _this4 = this;

	    this.instances.forEach(function (container) {
	      container.unsubscribe(_this4.onUpdate);
	    });
	  };

	  Subscribe.prototype._createInstances = function _createInstances(map, containers) {
	    var _this5 = this;

	    this._unsubscribe();

	    if (map === null) {
	      throw new Error('You must wrap your <Subscribe> components with a <Provider>');
	    }

	    var safeMap = map;
	    var instances = containers.map(function (ContainerItem) {
	      var instance = void 0;

	      if ((typeof ContainerItem === 'undefined' ? 'undefined' : _typeof(ContainerItem)) === 'object' && ContainerItem instanceof Container) {
	        instance = ContainerItem;
	      } else {
	        instance = safeMap.get(ContainerItem);

	        if (!instance) {
	          instance = new ContainerItem();
	          safeMap.set(ContainerItem, instance);
	        }
	      }

	      instance.unsubscribe(_this5.onUpdate);
	      instance.subscribe(_this5.onUpdate);

	      return instance;
	    });

	    this.instances = instances;
	    return instances;
	  };

	  Subscribe.prototype.render = function render() {
	    var _this6 = this;

	    return React__default.createElement(StateContext.Consumer, null, function (map) {
	      return _this6.props.children.apply(null, _this6._createInstances(map, _this6.props.to));
	    });
	  };

	  return Subscribe;
	}(React__default.Component);

	function Provider(props) {
	  return React__default.createElement(StateContext.Consumer, null, function (parentMap) {
	    var childMap = new Map(parentMap);

	    if (props.inject) {
	      props.inject.forEach(function (instance) {
	        childMap.set(instance.constructor, instance);
	      });
	    }

	    return React__default.createElement(StateContext.Provider, { value: childMap }, props.children);
	  });
	}

	var CONTAINER_DEBUG_CALLBACKS = [];

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AccordionContainer = function (_Container) {
	    _inherits$1(AccordionContainer, _Container);

	    function AccordionContainer() {
	        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        _classCallCheck$1(this, AccordionContainer);

	        var _this = _possibleConstructorReturn$1(this, (AccordionContainer.__proto__ || Object.getPrototypeOf(AccordionContainer)).call(this));

	        _this.setAccordion = function (accordion) {
	            if (accordion !== _this.state.accordion) {
	                return _this.setState({ accordion: accordion });
	            }
	            return null;
	        };

	        _this.setOnChange = function (onChange) {
	            if (onChange !== _this.state.onChange) {
	                return _this.setState({ onChange: onChange });
	            }
	            return null;
	        };

	        _this.addItem = function (newItem) {
	            // Need to use callback style otherwise race-conditions are created by concurrent registrations.
	            _this.setState(function (state) {
	                var items = void 0;

	                if (state.items.some(function (item) {
	                    return item.uuid === newItem.uuid;
	                })) {
	                    // eslint-disable-next-line no-console
	                    console.error('AccordionItem error: One item already has the uuid "' + newItem.uuid + '". Uuid property must be unique. See: https://github.com/springload/react-accessible-accordion#accordionitem');
	                }
	                if (state.accordion && newItem.expanded) {
	                    // If this is a true accordion and the new item is expanded, then the others must be closed.
	                    items = [].concat(_toConsumableArray(state.items.map(function (item) {
	                        return _extends({}, item, {
	                            expanded: false
	                        });
	                    })), [newItem]);
	                } else {
	                    items = [].concat(_toConsumableArray(state.items), [newItem]);
	                }
	                return {
	                    items: items
	                };
	            });
	        };

	        _this.removeItem = function (key) {
	            return _this.setState(function (state) {
	                return {
	                    items: state.items.filter(function (item) {
	                        return item.uuid !== key;
	                    })
	                };
	            });
	        };

	        _this.setExpanded = function (key, expanded) {
	            return _this.setState(function (state) {
	                return {
	                    items: state.items.map(function (item) {
	                        if (item.uuid === key) {
	                            return _extends({}, item, {
	                                expanded: expanded
	                            });
	                        } else if (state.accordion && expanded) {
	                            // If this is an accordion, we might need to collapse the other expanded item.
	                            return _extends({}, item, {
	                                expanded: false
	                            });
	                        }
	                        return item;
	                    })
	                };
	            }).then(function () {
	                if (_this.state.accordion) {
	                    _this.state.onChange(key);
	                } else {
	                    _this.state.onChange(_this.state.items.filter(function (item) {
	                        return item.expanded;
	                    }).map(function (item) {
	                        return item.uuid;
	                    }));
	                }
	            });
	        };

	        _this.state = _extends({
	            items: [],
	            accordion: true,
	            onChange: function onChange() {}
	        }, args);
	        return _this;
	    }

	    return AccordionContainer;
	}(Container);

	var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var accordionDefaultProps = {
	    accordion: true
	};

	var Accordion = function Accordion(_ref) {
	    var accordion = _ref.accordion,
	        rest = _objectWithoutProperties(_ref, ['accordion']);

	    return React__default.createElement('div', _extends$1({ role: accordion ? 'tablist' : null }, rest));
	};
	Accordion.defaultProps = accordionDefaultProps;

	var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _objectWithoutProperties$1(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultProps = {
	    accordion: true,
	    onChange: function onChange() {},
	    className: 'accordion',
	    children: null
	};

	var AccordionWrapper = function (_Component) {
	    _inherits$2(AccordionWrapper, _Component);

	    function AccordionWrapper() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck$2(this, AccordionWrapper);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn$2(this, (_ref = AccordionWrapper.__proto__ || Object.getPrototypeOf(AccordionWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.accordionStore = new AccordionContainer({
	            accordion: _this.props.accordion,
	            onChange: _this.props.onChange
	        }), _temp), _possibleConstructorReturn$2(_this, _ret);
	    }

	    _createClass(AccordionWrapper, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.accordionStore.setAccordion(this.props.accordion);
	            this.accordionStore.setOnChange(this.props.onChange);
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this.accordionStore.setAccordion(this.props.accordion);
	            this.accordionStore.setOnChange(this.props.onChange);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                accordion = _props.accordion,
	                onChange = _props.onChange,
	                rest = _objectWithoutProperties$1(_props, ['accordion', 'onChange']);

	            return React__default.createElement(
	                Provider,
	                { inject: [this.accordionStore] },
	                React__default.createElement(
	                    Subscribe,
	                    { to: [AccordionContainer] },
	                    function (accordionStore) {
	                        return React__default.createElement(Accordion, _extends$2({
	                            accordion: accordionStore.state.accordion
	                        }, rest));
	                    }
	                )
	            );
	        }
	    }]);

	    return AccordionWrapper;
	}(React.Component);

	AccordionWrapper.defaultProps = defaultProps;

	/*!
	 * consecutive
	 * Get consecutive numbers
	 * Copyright(c) 2017 ivanoff .$ curl -A cv ivanoff.org.ua
	 * MIT Licensed
	 */

	var consecutive = function (begin, base, inc) {
	  var number = begin || 0;
	  if (typeof base !== 'number') base = 10;
	  if (typeof inc !== 'number') inc = 1;

	  return function () {
	    var res;
	    if (typeof base === 'undefined' || base === 10) {
	      res = number;
	      number += inc;
	    } else {
	      res = number.toString();
	      number = (parseInt(number, base) + inc).toString(base);
	    }

	    return res;
	  };
	};

	var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$3(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var nextUuid = consecutive();
	function resetNextUuid() {
	    nextUuid = consecutive();
	}

	var ItemContainer = function (_Container) {
	    _inherits$3(ItemContainer, _Container);

	    function ItemContainer() {
	        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        _classCallCheck$3(this, ItemContainer);

	        var _this = _possibleConstructorReturn$3(this, (ItemContainer.__proto__ || Object.getPrototypeOf(ItemContainer)).call(this));

	        _this.state = _extends$3({}, args);
	        if (_this.state.uuid === undefined) {
	            _this.state.uuid = nextUuid();
	        }
	        return _this;
	    }

	    _createClass$1(ItemContainer, [{
	        key: 'setUuid',
	        value: function setUuid(customUuid) {
	            return this.setState({
	                uuid: customUuid
	            });
	        }
	    }]);

	    return ItemContainer;
	}(Container);

	var classnames = createCommonjsModule(function (module) {
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			module.exports = classNames;
		} else if (typeof undefined === 'function' && _typeof(undefined.amd) === 'object' && undefined.amd) {
			// register as 'classnames', consistent with npm package name
			undefined('classnames', [], function () {
				return classNames;
			});
		} else {
			window.classNames = classNames;
		}
	})();
	});

	var _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass$2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties$2(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$4(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AccordionItem = function (_Component) {
	    _inherits$4(AccordionItem, _Component);

	    function AccordionItem() {
	        _classCallCheck$4(this, AccordionItem);

	        return _possibleConstructorReturn$4(this, (AccordionItem.__proto__ || Object.getPrototypeOf(AccordionItem)).apply(this, arguments));
	    }

	    _createClass$2(AccordionItem, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _props = this.props,
	                uuid = _props.uuid,
	                accordionStore = _props.accordionStore,
	                disabled = _props.disabled;


	            accordionStore.addItem({
	                uuid: uuid,
	                expanded: this.props.expanded || false,
	                disabled: disabled
	            });
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.props.accordionStore.removeItem(this.props.uuid);
	        }

	        // This is here so that the user can dynamically set the 'expanded' state using the 'expanded' prop.

	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            var _props2 = this.props,
	                uuid = _props2.uuid,
	                expanded = _props2.expanded,
	                accordionStore = _props2.accordionStore;

	            if (expanded !== prevProps.expanded) {
	                accordionStore.setExpanded(uuid, expanded);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props3 = this.props,
	                uuid = _props3.uuid,
	                className = _props3.className,
	                hideBodyClassName = _props3.hideBodyClassName,
	                accordionStore = _props3.accordionStore,
	                disabled = _props3.disabled,
	                expanded = _props3.expanded,
	                rest = _objectWithoutProperties$2(_props3, ['uuid', 'className', 'hideBodyClassName', 'accordionStore', 'disabled', 'expanded']);

	            var currentItem = accordionStore.state.items.filter(function (item) {
	                return item.uuid === uuid;
	            })[0];

	            if (!currentItem) {
	                return null;
	            }

	            return React__default.createElement('div', _extends$4({
	                className: classnames(className, _defineProperty({}, hideBodyClassName, !currentItem.expanded && hideBodyClassName))
	            }, rest));
	        }
	    }]);

	    return AccordionItem;
	}(React.Component);

	var _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass$3 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$5(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$5(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultProps$1 = {
	    className: 'accordion__item',
	    hideBodyClassName: '',
	    disabled: false,
	    expanded: false,
	    accordionStore: new AccordionContainer(),
	    uuid: undefined
	};

	var AccordionItemWrapper = function (_Component) {
	    _inherits$5(AccordionItemWrapper, _Component);

	    function AccordionItemWrapper() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck$5(this, AccordionItemWrapper);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn$5(this, (_ref = AccordionItemWrapper.__proto__ || Object.getPrototypeOf(AccordionItemWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.itemContainer = new ItemContainer({
	            uuid: _this.props.uuid
	        }), _temp), _possibleConstructorReturn$5(_this, _ret);
	    }

	    _createClass$3(AccordionItemWrapper, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return React__default.createElement(
	                Provider,
	                { inject: [this.itemContainer] },
	                React__default.createElement(
	                    Subscribe,
	                    { to: [AccordionContainer, ItemContainer] },
	                    function (accordionStore, itemStore) {
	                        var uuid = itemStore.state.uuid;

	                        return React__default.createElement(AccordionItem, _extends$5({}, _this2.props, {
	                            uuid: uuid,
	                            accordionStore: accordionStore
	                        }));
	                    }
	                )
	            );
	        }
	    }]);

	    return AccordionItemWrapper;
	}(React.Component);

	AccordionItemWrapper.defaultProps = defaultProps$1;

	var _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass$4 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties$3(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$6(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$6(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AccordionItemTitle = function (_Component) {
	    _inherits$6(AccordionItemTitle, _Component);

	    function AccordionItemTitle() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck$6(this, AccordionItemTitle);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn$6(this, (_ref = AccordionItemTitle.__proto__ || Object.getPrototypeOf(AccordionItemTitle)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
	            var _this$props = _this.props,
	                uuid = _this$props.uuid,
	                expanded = _this$props.expanded,
	                setExpanded = _this$props.setExpanded;


	            setExpanded(uuid, !expanded);
	        }, _this.handleKeyPress = function (evt) {
	            if (evt.charCode === 13 || evt.charCode === 32) {
	                evt.preventDefault();
	                _this.handleClick();
	            }
	        }, _temp), _possibleConstructorReturn$6(_this, _ret);
	    }

	    _createClass$4(AccordionItemTitle, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                className = _props.className,
	                hideBodyClassName = _props.hideBodyClassName,
	                accordionStore = _props.accordionStore,
	                item = _props.item,
	                accordion = _props.accordion,
	                setExpanded = _props.setExpanded,
	                expanded = _props.expanded,
	                uuid = _props.uuid,
	                disabled = _props.disabled,
	                rest = _objectWithoutProperties$3(_props, ['className', 'hideBodyClassName', 'accordionStore', 'item', 'accordion', 'setExpanded', 'expanded', 'uuid', 'disabled']);

	            var id = 'accordion__title-' + uuid;
	            var ariaControls = 'accordion__body-' + uuid;
	            var role = accordion ? 'tab' : 'button';
	            var titleClassName = classnames(className, _defineProperty$1({}, hideBodyClassName, hideBodyClassName && !expanded));

	            if (role === 'tab') {
	                return React__default.createElement('div', _extends$6({
	                    id: id,
	                    'aria-selected': expanded,
	                    'aria-controls': ariaControls,
	                    className: titleClassName,
	                    onClick: disabled ? undefined : this.handleClick,
	                    role: role,
	                    tabIndex: '0' // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
	                    , onKeyPress: this.handleKeyPress,
	                    disabled: disabled
	                }, rest));
	            }
	            return React__default.createElement('div', _extends$6({
	                id: id,
	                'aria-expanded': expanded,
	                'aria-controls': ariaControls,
	                className: titleClassName,
	                onClick: disabled ? undefined : this.handleClick,
	                role: role,
	                tabIndex: '0' // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
	                , onKeyPress: this.handleKeyPress,
	                disabled: disabled
	            }, rest));
	        }
	    }]);

	    return AccordionItemTitle;
	}(React.Component);

	AccordionItemTitle.accordionElementName = 'AccordionItemTitle';

	var _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var defaultProps$2 = {
	    className: 'accordion__title',
	    hideBodyClassName: ''
	};

	var AccordionItemTitleWrapper = function AccordionItemTitleWrapper(props) {
	    return React__default.createElement(
	        Subscribe,
	        { to: [AccordionContainer, ItemContainer] },
	        function (accordionStore, itemStore) {
	            var uuid = itemStore.state.uuid;
	            var _accordionStore$state = accordionStore.state,
	                items = _accordionStore$state.items,
	                accordion = _accordionStore$state.accordion;

	            var item = items.filter(function (stateItem) {
	                return stateItem.uuid === uuid;
	            })[0];

	            return React__default.createElement(AccordionItemTitle, _extends$7({}, props, item, {
	                setExpanded: accordionStore.setExpanded,
	                accordion: accordion
	            }));
	        }
	    );
	};
	AccordionItemTitleWrapper.defaultProps = defaultProps$2;

	var _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties$4(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var AccordionItemBody = function AccordionItemBody(props) {
	    var className = props.className,
	        hideBodyClassName = props.hideBodyClassName,
	        uuid = props.uuid,
	        expanded = props.expanded,
	        disabled = props.disabled,
	        accordion = props.accordion,
	        rest = _objectWithoutProperties$4(props, ['className', 'hideBodyClassName', 'uuid', 'expanded', 'disabled', 'accordion']);

	    return React__default.createElement('div', _extends$8({
	        id: 'accordion__body-' + uuid,
	        className: classnames(className, _defineProperty$2({}, hideBodyClassName, !expanded)),
	        'aria-hidden': !expanded,
	        'aria-labelledby': 'accordion__title-' + uuid,
	        role: accordion ? 'tabpanel' : null
	    }, rest));
	};

	var _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var defaultProps$3 = {
	    className: 'accordion__body',
	    hideBodyClassName: 'accordion__body--hidden'
	};

	var AccordionItemBodyWrapper = function AccordionItemBodyWrapper(props) {
	    return React__default.createElement(
	        Subscribe,
	        { to: [AccordionContainer, ItemContainer] },
	        function (accordionStore, itemStore) {
	            var uuid = itemStore.state.uuid;
	            var _accordionStore$state = accordionStore.state,
	                items = _accordionStore$state.items,
	                accordion = _accordionStore$state.accordion;

	            var item = items.filter(function (stateItem) {
	                return stateItem.uuid === uuid;
	            })[0];
	            return React__default.createElement(AccordionItemBody, _extends$9({}, props, item, { accordion: accordion }));
	        }
	    );
	};
	AccordionItemBodyWrapper.defaultProps = defaultProps$3;

	exports.Accordion = AccordionWrapper;
	exports.AccordionItem = AccordionItemWrapper;
	exports.AccordionItemTitle = AccordionItemTitleWrapper;
	exports.AccordionItemBody = AccordionItemBodyWrapper;
	exports.resetNextUuid = resetNextUuid;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
