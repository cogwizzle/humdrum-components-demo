/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* Riot v3.8.1, @license MIT */
(function (global, factory) {
  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.riot = {});
})(this, function (exports) {
  'use strict';

  var __TAGS_CACHE = [];
  var __TAG_IMPL = {};
  var YIELD_TAG = 'yield';
  var GLOBAL_MIXIN = '__global_mixin';
  var ATTRS_PREFIX = 'riot-';
  var REF_DIRECTIVES = ['ref', 'data-ref'];
  var IS_DIRECTIVE = 'data-is';
  var CONDITIONAL_DIRECTIVE = 'if';
  var LOOP_DIRECTIVE = 'each';
  var LOOP_NO_REORDER_DIRECTIVE = 'no-reorder';
  var SHOW_DIRECTIVE = 'show';
  var HIDE_DIRECTIVE = 'hide';
  var KEY_DIRECTIVE = 'key';
  var RIOT_EVENTS_KEY = '__riot-events__';
  var T_STRING = 'string';
  var T_OBJECT = 'object';
  var T_UNDEF = 'undefined';
  var T_FUNCTION = 'function';
  var XLINK_NS = 'http://www.w3.org/1999/xlink';
  var SVG_NS = 'http://www.w3.org/2000/svg';
  var XLINK_REGEX = /^xlink:(\w+)/;
  var WIN = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === T_UNDEF ? undefined : window;
  var RE_SPECIAL_TAGS = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/;
  var RE_SPECIAL_TAGS_NO_OPTION = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/;
  var RE_EVENTS_PREFIX = /^on/;
  var RE_HTML_ATTRS = /([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;
  var CASE_SENSITIVE_ATTRIBUTES = {
    'viewbox': 'viewBox',
    'preserveaspectratio': 'preserveAspectRatio'
  };
  var RE_BOOL_ATTRS = /^(?:disabled|checked|readonly|required|allowfullscreen|auto(?:focus|play)|compact|controls|default|formnovalidate|hidden|ismap|itemscope|loop|multiple|muted|no(?:resize|shade|validate|wrap)?|open|reversed|seamless|selected|sortable|truespeed|typemustmatch)$/;
  var IE_VERSION = (WIN && WIN.document || {}).documentMode | 0;

  /**
   * Shorter and fast way to select multiple nodes in the DOM
   * @param   { String } selector - DOM selector
   * @param   { Object } ctx - DOM node where the targets of our search will is located
   * @returns { Object } dom nodes found
   */
  function $$(selector, ctx) {
    return [].slice.call((ctx || document).querySelectorAll(selector));
  }

  /**
   * Shorter and fast way to select a single node in the DOM
   * @param   { String } selector - unique dom selector
   * @param   { Object } ctx - DOM node where the target of our search will is located
   * @returns { Object } dom node found
   */
  function $(selector, ctx) {
    return (ctx || document).querySelector(selector);
  }

  /**
   * Create a document fragment
   * @returns { Object } document fragment
   */
  function createFrag() {
    return document.createDocumentFragment();
  }

  /**
   * Create a document text node
   * @returns { Object } create a text node to use as placeholder
   */
  function createDOMPlaceholder() {
    return document.createTextNode('');
  }

  /**
   * Check if a DOM node is an svg tag or part of an svg
   * @param   { HTMLElement }  el - node we want to test
   * @returns {Boolean} true if it's an svg node
   */
  function isSvg(el) {
    var owner = el.ownerSVGElement;
    return !!owner || owner === null;
  }

  /**
   * Create a generic DOM node
   * @param   { String } name - name of the DOM node we want to create
   * @returns { Object } DOM node just created
   */
  function mkEl(name) {
    return name === 'svg' ? document.createElementNS(SVG_NS, name) : document.createElement(name);
  }

  /**
   * Set the inner html of any DOM node SVGs included
   * @param { Object } container - DOM node where we'll inject new html
   * @param { String } html - html to inject
   * @param { Boolean } isSvg - svg tags should be treated a bit differently
   */
  /* istanbul ignore next */
  function setInnerHTML(container, html, isSvg) {
    // innerHTML is not supported on svg tags so we neet to treat them differently
    if (isSvg) {
      var node = container.ownerDocument.importNode(new DOMParser().parseFromString("<svg xmlns=\"" + SVG_NS + "\">" + html + "</svg>", 'application/xml').documentElement, true);

      container.appendChild(node);
    } else {
      container.innerHTML = html;
    }
  }

  /**
   * Toggle the visibility of any DOM node
   * @param   { Object }  dom - DOM node we want to hide
   * @param   { Boolean } show - do we want to show it?
   */

  function toggleVisibility(dom, show) {
    dom.style.display = show ? '' : 'none';
    dom.hidden = show ? false : true;
  }

  /**
   * Remove any DOM attribute from a node
   * @param   { Object } dom - DOM node we want to update
   * @param   { String } name - name of the property we want to remove
   */
  function remAttr(dom, name) {
    dom.removeAttribute(name);
  }

  /**
   * Convert a style object to a string
   * @param   { Object } style - style object we need to parse
   * @returns { String } resulting css string
   * @example
   * styleObjectToString({ color: 'red', height: '10px'}) // => 'color: red; height: 10px'
   */
  function styleObjectToString(style) {
    return Object.keys(style).reduce(function (acc, prop) {
      return acc + " " + prop + ": " + style[prop] + ";";
    }, '');
  }

  /**
   * Get the value of any DOM attribute on a node
   * @param   { Object } dom - DOM node we want to parse
   * @param   { String } name - name of the attribute we want to get
   * @returns { String | undefined } name of the node attribute whether it exists
   */
  function getAttr(dom, name) {
    return dom.getAttribute(name);
  }

  /**
   * Set any DOM attribute
   * @param { Object } dom - DOM node we want to update
   * @param { String } name - name of the property we want to set
   * @param { String } val - value of the property we want to set
   */
  function setAttr(dom, name, val) {
    var xlink = XLINK_REGEX.exec(name);
    if (xlink && xlink[1]) {
      dom.setAttributeNS(XLINK_NS, xlink[1], val);
    } else {
      dom.setAttribute(name, val);
    }
  }

  /**
   * Insert safely a tag to fix #1962 #1649
   * @param   { HTMLElement } root - children container
   * @param   { HTMLElement } curr - node to insert
   * @param   { HTMLElement } next - node that should preceed the current node inserted
   */
  function safeInsert(root, curr, next) {
    root.insertBefore(curr, next.parentNode && next);
  }

  /**
   * Minimize risk: only zero or one _space_ between attr & value
   * @param   { String }   html - html string we want to parse
   * @param   { Function } fn - callback function to apply on any attribute found
   */
  function walkAttrs(html, fn) {
    if (!html) {
      return;
    }
    var m;
    while (m = RE_HTML_ATTRS.exec(html)) {
      fn(m[1].toLowerCase(), m[2] || m[3] || m[4]);
    }
  }

  /**
   * Walk down recursively all the children tags starting dom node
   * @param   { Object }   dom - starting node where we will start the recursion
   * @param   { Function } fn - callback to transform the child node just found
   * @param   { Object }   context - fn can optionally return an object, which is passed to children
   */
  function walkNodes(dom, fn, context) {
    if (dom) {
      var res = fn(dom, context);
      var next;
      // stop the recursion
      if (res === false) {
        return;
      }

      dom = dom.firstChild;

      while (dom) {
        next = dom.nextSibling;
        walkNodes(dom, fn, res);
        dom = next;
      }
    }
  }

  var dom = Object.freeze({
    $$: $$,
    $: $,
    createFrag: createFrag,
    createDOMPlaceholder: createDOMPlaceholder,
    isSvg: isSvg,
    mkEl: mkEl,
    setInnerHTML: setInnerHTML,
    toggleVisibility: toggleVisibility,
    remAttr: remAttr,
    styleObjectToString: styleObjectToString,
    getAttr: getAttr,
    setAttr: setAttr,
    safeInsert: safeInsert,
    walkAttrs: walkAttrs,
    walkNodes: walkNodes
  });

  var styleNode;
  // Create cache and shortcut to the correct property
  var cssTextProp;
  var byName = {};
  var remainder = [];
  var needsInject = false;

  // skip the following code on the server
  if (WIN) {
    styleNode = function () {
      // create a new style element with the correct type
      var newNode = mkEl('style');
      // replace any user node or insert the new one into the head
      var userNode = $('style[type=riot]');

      setAttr(newNode, 'type', 'text/css');
      /* istanbul ignore next */
      if (userNode) {
        if (userNode.id) {
          newNode.id = userNode.id;
        }
        userNode.parentNode.replaceChild(newNode, userNode);
      } else {
        document.head.appendChild(newNode);
      }

      return newNode;
    }();
    cssTextProp = styleNode.styleSheet;
  }

  /**
   * Object that will be used to inject and manage the css of every tag instance
   */
  var styleManager = {
    styleNode: styleNode,
    /**
     * Save a tag style to be later injected into DOM
     * @param { String } css - css string
     * @param { String } name - if it's passed we will map the css to a tagname
     */
    add: function add(css, name) {
      if (name) {
        byName[name] = css;
      } else {
        remainder.push(css);
      }
      needsInject = true;
    },
    /**
     * Inject all previously saved tag styles into DOM
     * innerHTML seems slow: http://jsperf.com/riot-insert-style
     */
    inject: function inject() {
      if (!WIN || !needsInject) {
        return;
      }
      needsInject = false;
      var style = Object.keys(byName).map(function (k) {
        return byName[k];
      }).concat(remainder).join('\n');
      /* istanbul ignore next */
      if (cssTextProp) {
        cssTextProp.cssText = style;
      } else {
        styleNode.innerHTML = style;
      }
    }
  };

  /**
   * The riot template engine
   * @version v3.0.8
   */

  var skipRegex = function () {
    //eslint-disable-line no-unused-vars

    var beforeReChars = '[{(,;:?=|&!^~>%*/';

    var beforeReWords = ['case', 'default', 'do', 'else', 'in', 'instanceof', 'prefix', 'return', 'typeof', 'void', 'yield'];

    var wordsLastChar = beforeReWords.reduce(function (s, w) {
      return s + w.slice(-1);
    }, '');

    var RE_REGEX = /^\/(?=[^*>/])[^[/\\]*(?:(?:\\.|\[(?:\\.|[^\]\\]*)*\])[^[\\/]*)*?\/[gimuy]*/;
    var RE_VN_CHAR = /[$\w]/;

    function prev(code, pos) {
      while (--pos >= 0 && /\s/.test(code[pos])) {}
      return pos;
    }

    function _skipRegex(code, start) {

      var re = /.*/g;
      var pos = re.lastIndex = start++;
      var match = re.exec(code)[0].match(RE_REGEX);

      if (match) {
        var next = pos + match[0].length;

        pos = prev(code, pos);
        var c = code[pos];

        if (pos < 0 || ~beforeReChars.indexOf(c)) {
          return next;
        }

        if (c === '.') {

          if (code[pos - 1] === '.') {
            start = next;
          }
        } else if (c === '+' || c === '-') {

          if (code[--pos] !== c || (pos = prev(code, pos)) < 0 || !RE_VN_CHAR.test(code[pos])) {
            start = next;
          }
        } else if (~wordsLastChar.indexOf(c)) {

          var end = pos + 1;

          while (--pos >= 0 && RE_VN_CHAR.test(code[pos])) {}
          if (~beforeReWords.indexOf(code.slice(pos + 1, end))) {
            start = next;
          }
        }
      }

      return start;
    }

    return _skipRegex;
  }();

  /**
   * riot.util.brackets
   *
   * - `brackets    ` - Returns a string or regex based on its parameter
   * - `brackets.set` - Change the current riot brackets
   *
   * @module
   */

  /* global riot */

  /* istanbul ignore next */
  var brackets = function (UNDEF) {

    var REGLOB = 'g',
        R_MLCOMMS = /\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,
        R_STRINGS = /"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'|`[^`\\]*(?:\\[\S\s][^`\\]*)*`/g,
        S_QBLOCKS = R_STRINGS.source + '|' + /(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source + '|' + /\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?([^<]\/)[gim]*/.source,
        UNSUPPORTED = RegExp('[\\' + 'x00-\\x1F<>a-zA-Z0-9\'",;\\\\]'),
        NEED_ESCAPE = /(?=[[\]()*+?.^$|])/g,
        S_QBLOCK2 = R_STRINGS.source + '|' + /(\/)(?![*\/])/.source,
        FINDBRACES = {
      '(': RegExp('([()])|' + S_QBLOCK2, REGLOB),
      '[': RegExp('([[\\]])|' + S_QBLOCK2, REGLOB),
      '{': RegExp('([{}])|' + S_QBLOCK2, REGLOB)
    },
        DEFAULT = '{ }';

    var _pairs = ['{', '}', '{', '}', /{[^}]*}/, /\\([{}])/g, /\\({)|{/g, RegExp('\\\\(})|([[({])|(})|' + S_QBLOCK2, REGLOB), DEFAULT, /^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/, /(^|[^\\]){=[\S\s]*?}/];

    var cachedBrackets = UNDEF,
        _regex,
        _cache = [],
        _settings;

    function _loopback(re) {
      return re;
    }

    function _rewrite(re, bp) {
      if (!bp) {
        bp = _cache;
      }
      return new RegExp(re.source.replace(/{/g, bp[2]).replace(/}/g, bp[3]), re.global ? REGLOB : '');
    }

    function _create(pair) {
      if (pair === DEFAULT) {
        return _pairs;
      }

      var arr = pair.split(' ');

      if (arr.length !== 2 || UNSUPPORTED.test(pair)) {
        throw new Error('Unsupported brackets "' + pair + '"');
      }
      arr = arr.concat(pair.replace(NEED_ESCAPE, '\\').split(' '));

      arr[4] = _rewrite(arr[1].length > 1 ? /{[\S\s]*?}/ : _pairs[4], arr);
      arr[5] = _rewrite(pair.length > 3 ? /\\({|})/g : _pairs[5], arr);
      arr[6] = _rewrite(_pairs[6], arr);
      arr[7] = RegExp('\\\\(' + arr[3] + ')|([[({])|(' + arr[3] + ')|' + S_QBLOCK2, REGLOB);
      arr[8] = pair;
      return arr;
    }

    function _brackets(reOrIdx) {
      return reOrIdx instanceof RegExp ? _regex(reOrIdx) : _cache[reOrIdx];
    }

    _brackets.split = function split(str, tmpl, _bp) {
      // istanbul ignore next: _bp is for the compiler
      if (!_bp) {
        _bp = _cache;
      }

      var parts = [],
          match,
          isexpr,
          start,
          pos,
          re = _bp[6];

      var qblocks = [];
      var prevStr = '';
      var mark, lastIndex;

      isexpr = start = re.lastIndex = 0;

      while (match = re.exec(str)) {

        lastIndex = re.lastIndex;
        pos = match.index;

        if (isexpr) {

          if (match[2]) {

            var ch = match[2];
            var rech = FINDBRACES[ch];
            var ix = 1;

            rech.lastIndex = lastIndex;
            while (match = rech.exec(str)) {
              if (match[1]) {
                if (match[1] === ch) {
                  ++ix;
                } else if (! --ix) {
                  break;
                }
              } else {
                rech.lastIndex = pushQBlock(match.index, rech.lastIndex, match[2]);
              }
            }
            re.lastIndex = ix ? str.length : rech.lastIndex;
            continue;
          }

          if (!match[3]) {
            re.lastIndex = pushQBlock(pos, lastIndex, match[4]);
            continue;
          }
        }

        if (!match[1]) {
          unescapeStr(str.slice(start, pos));
          start = re.lastIndex;
          re = _bp[6 + (isexpr ^= 1)];
          re.lastIndex = start;
        }
      }

      if (str && start < str.length) {
        unescapeStr(str.slice(start));
      }

      parts.qblocks = qblocks;

      return parts;

      function unescapeStr(s) {
        if (prevStr) {
          s = prevStr + s;
          prevStr = '';
        }
        if (tmpl || isexpr) {
          parts.push(s && s.replace(_bp[5], '$1'));
        } else {
          parts.push(s);
        }
      }

      function pushQBlock(_pos, _lastIndex, slash) {
        //eslint-disable-line
        if (slash) {
          _lastIndex = skipRegex(str, _pos);
        }

        if (tmpl && _lastIndex > _pos + 2) {
          mark = '\u2057' + qblocks.length + '~';
          qblocks.push(str.slice(_pos, _lastIndex));
          prevStr += str.slice(start, _pos) + mark;
          start = _lastIndex;
        }
        return _lastIndex;
      }
    };

    _brackets.hasExpr = function hasExpr(str) {
      return _cache[4].test(str);
    };

    _brackets.loopKeys = function loopKeys(expr) {
      var m = expr.match(_cache[9]);

      return m ? { key: m[1], pos: m[2], val: _cache[0] + m[3].trim() + _cache[1] } : { val: expr.trim() };
    };

    _brackets.array = function array(pair) {
      return pair ? _create(pair) : _cache;
    };

    function _reset(pair) {
      if ((pair || (pair = DEFAULT)) !== _cache[8]) {
        _cache = _create(pair);
        _regex = pair === DEFAULT ? _loopback : _rewrite;
        _cache[9] = _regex(_pairs[9]);
      }
      cachedBrackets = pair;
    }

    function _setSettings(o) {
      var b;

      o = o || {};
      b = o.brackets;
      Object.defineProperty(o, 'brackets', {
        set: _reset,
        get: function get() {
          return cachedBrackets;
        },
        enumerable: true
      });
      _settings = o;
      _reset(b);
    }

    Object.defineProperty(_brackets, 'settings', {
      set: _setSettings,
      get: function get() {
        return _settings;
      }
    });

    /* istanbul ignore next: in the browser riot is always in the scope */
    _brackets.settings = typeof riot !== 'undefined' && riot.settings || {};
    _brackets.set = _reset;
    _brackets.skipRegex = skipRegex;

    _brackets.R_STRINGS = R_STRINGS;
    _brackets.R_MLCOMMS = R_MLCOMMS;
    _brackets.S_QBLOCKS = S_QBLOCKS;
    _brackets.S_QBLOCK2 = S_QBLOCK2;

    return _brackets;
  }();

  /**
   * @module tmpl
   *
   * tmpl          - Root function, returns the template value, render with data
   * tmpl.hasExpr  - Test the existence of a expression inside a string
   * tmpl.loopKeys - Get the keys for an 'each' loop (used by `_each`)
   */

  /* istanbul ignore next */
  var tmpl = function () {

    var _cache = {};

    function _tmpl(str, data) {
      if (!str) {
        return str;
      }

      return (_cache[str] || (_cache[str] = _create(str))).call(data, _logErr.bind({
        data: data,
        tmpl: str
      }));
    }

    _tmpl.hasExpr = brackets.hasExpr;

    _tmpl.loopKeys = brackets.loopKeys;

    // istanbul ignore next
    _tmpl.clearCache = function () {
      _cache = {};
    };

    _tmpl.errorHandler = null;

    function _logErr(err, ctx) {

      err.riotData = {
        tagName: ctx && ctx.__ && ctx.__.tagName,
        _riot_id: ctx && ctx._riot_id //eslint-disable-line camelcase
      };

      if (_tmpl.errorHandler) {
        _tmpl.errorHandler(err);
      } else if (typeof console !== 'undefined' && typeof console.error === 'function') {
        console.error(err.message);
        console.log('<%s> %s', err.riotData.tagName || 'Unknown tag', this.tmpl); // eslint-disable-line
        console.log(this.data); // eslint-disable-line
      }
    }

    function _create(str) {
      var expr = _getTmpl(str);

      if (expr.slice(0, 11) !== 'try{return ') {
        expr = 'return ' + expr;
      }

      return new Function('E', expr + ';'); // eslint-disable-line no-new-func
    }

    var RE_DQUOTE = /\u2057/g;
    var RE_QBMARK = /\u2057(\d+)~/g;

    function _getTmpl(str) {
      var parts = brackets.split(str.replace(RE_DQUOTE, '"'), 1);
      var qstr = parts.qblocks;
      var expr;

      if (parts.length > 2 || parts[0]) {
        var i,
            j,
            list = [];

        for (i = j = 0; i < parts.length; ++i) {

          expr = parts[i];

          if (expr && (expr = i & 1 ? _parseExpr(expr, 1, qstr) : '"' + expr.replace(/\\/g, '\\\\').replace(/\r\n?|\n/g, '\\n').replace(/"/g, '\\"') + '"')) {
            list[j++] = expr;
          }
        }

        expr = j < 2 ? list[0] : '[' + list.join(',') + '].join("")';
      } else {

        expr = _parseExpr(parts[1], 0, qstr);
      }

      if (qstr.length) {
        expr = expr.replace(RE_QBMARK, function (_, pos) {
          return qstr[pos].replace(/\r/g, '\\r').replace(/\n/g, '\\n');
        });
      }
      return expr;
    }

    var RE_CSNAME = /^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/;
    var RE_BREND = {
      '(': /[()]/g,
      '[': /[[\]]/g,
      '{': /[{}]/g
    };

    function _parseExpr(expr, asText, qstr) {

      expr = expr.replace(/\s+/g, ' ').trim().replace(/\ ?([[\({},?\.:])\ ?/g, '$1');

      if (expr) {
        var list = [],
            cnt = 0,
            match;

        while (expr && (match = expr.match(RE_CSNAME)) && !match.index) {
          var key,
              jsb,
              re = /,|([[{(])|$/g;

          expr = RegExp.rightContext;
          key = match[2] ? qstr[match[2]].slice(1, -1).trim().replace(/\s+/g, ' ') : match[1];

          while (jsb = (match = re.exec(expr))[1]) {
            skipBraces(jsb, re);
          }

          jsb = expr.slice(0, match.index);
          expr = RegExp.rightContext;

          list[cnt++] = _wrapExpr(jsb, 1, key);
        }

        expr = !cnt ? _wrapExpr(expr, asText) : cnt > 1 ? '[' + list.join(',') + '].join(" ").trim()' : list[0];
      }
      return expr;

      function skipBraces(ch, re) {
        var mm,
            lv = 1,
            ir = RE_BREND[ch];

        ir.lastIndex = re.lastIndex;
        while (mm = ir.exec(expr)) {
          if (mm[0] === ch) {
            ++lv;
          } else if (! --lv) {
            break;
          }
        }
        re.lastIndex = lv ? expr.length : ir.lastIndex;
      }
    }

    // istanbul ignore next: not both
    var // eslint-disable-next-line max-len
    JS_CONTEXT = '"in this?this:' + ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' ? 'global' : 'window') + ').',
        JS_VARNAME = /[,{][\$\w]+(?=:)|(^ *|[^$\w\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,
        JS_NOPROPS = /^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;

    function _wrapExpr(expr, asText, key) {
      var tb;

      expr = expr.replace(JS_VARNAME, function (match, p, mvar, pos, s) {
        if (mvar) {
          pos = tb ? 0 : pos + match.length;

          if (mvar !== 'this' && mvar !== 'global' && mvar !== 'window') {
            match = p + '("' + mvar + JS_CONTEXT + mvar;
            if (pos) {
              tb = (s = s[pos]) === '.' || s === '(' || s === '[';
            }
          } else if (pos) {
            tb = !JS_NOPROPS.test(s.slice(pos));
          }
        }
        return match;
      });

      if (tb) {
        expr = 'try{return ' + expr + '}catch(e){E(e,this)}';
      }

      if (key) {

        expr = (tb ? 'function(){' + expr + '}.call(this)' : '(' + expr + ')') + '?"' + key + '":""';
      } else if (asText) {

        expr = 'function(v){' + (tb ? expr.replace('return ', 'v=') : 'v=(' + expr + ')') + ';return v||v===0?v:""}.call(this)';
      }

      return expr;
    }

    _tmpl.version = brackets.version = 'v3.0.8';

    return _tmpl;
  }();

  /* istanbul ignore next */
  var observable$1 = function observable$1(el) {

    /**
     * Extend the original object or create a new empty one
     * @type { Object }
     */

    el = el || {};

    /**
     * Private variables
     */
    var callbacks = {},
        slice = Array.prototype.slice;

    /**
     * Public Api
     */

    // extend the el object adding the observable methods
    Object.defineProperties(el, {
      /**
       * Listen to the given `event` ands
       * execute the `callback` each time an event is triggered.
       * @param  { String } event - event id
       * @param  { Function } fn - callback function
       * @returns { Object } el
       */
      on: {
        value: function value(event, fn) {
          if (typeof fn == 'function') {
            (callbacks[event] = callbacks[event] || []).push(fn);
          }
          return el;
        },
        enumerable: false,
        writable: false,
        configurable: false
      },

      /**
       * Removes the given `event` listeners
       * @param   { String } event - event id
       * @param   { Function } fn - callback function
       * @returns { Object } el
       */
      off: {
        value: function value(event, fn) {
          if (event == '*' && !fn) {
            callbacks = {};
          } else {
            if (fn) {
              var arr = callbacks[event];
              for (var i = 0, cb; cb = arr && arr[i]; ++i) {
                if (cb == fn) {
                  arr.splice(i--, 1);
                }
              }
            } else {
              delete callbacks[event];
            }
          }
          return el;
        },
        enumerable: false,
        writable: false,
        configurable: false
      },

      /**
       * Listen to the given `event` and
       * execute the `callback` at most once
       * @param   { String } event - event id
       * @param   { Function } fn - callback function
       * @returns { Object } el
       */
      one: {
        value: function value(event, fn) {
          function on() {
            el.off(event, on);
            fn.apply(el, arguments);
          }
          return el.on(event, on);
        },
        enumerable: false,
        writable: false,
        configurable: false
      },

      /**
       * Execute all callback functions that listen to
       * the given `event`
       * @param   { String } event - event id
       * @returns { Object } el
       */
      trigger: {
        value: function value(event) {
          var arguments$1 = arguments;

          // getting the arguments
          var arglen = arguments.length - 1,
              args = new Array(arglen),
              fns,
              fn,
              i;

          for (i = 0; i < arglen; i++) {
            args[i] = arguments$1[i + 1]; // skip first argument
          }

          fns = slice.call(callbacks[event] || [], 0);

          for (i = 0; fn = fns[i]; ++i) {
            fn.apply(el, args);
          }

          if (callbacks['*'] && event != '*') {
            el.trigger.apply(el, ['*', event].concat(args));
          }

          return el;
        },
        enumerable: false,
        writable: false,
        configurable: false
      }
    });

    return el;
  };

  /**
   * Check if the passed argument is a boolean attribute
   * @param   { String } value -
   * @returns { Boolean } -
   */
  function isBoolAttr(value) {
    return RE_BOOL_ATTRS.test(value);
  }

  /**
   * Check if passed argument is a function
   * @param   { * } value -
   * @returns { Boolean } -
   */
  function isFunction(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === T_FUNCTION;
  }

  /**
   * Check if passed argument is an object, exclude null
   * NOTE: use isObject(x) && !isArray(x) to excludes arrays.
   * @param   { * } value -
   * @returns { Boolean } -
   */
  function isObject(value) {
    return value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === T_OBJECT; // typeof null is 'object'
  }

  /**
   * Check if passed argument is undefined
   * @param   { * } value -
   * @returns { Boolean } -
   */
  function isUndefined(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === T_UNDEF;
  }

  /**
   * Check if passed argument is a string
   * @param   { * } value -
   * @returns { Boolean } -
   */
  function isString(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === T_STRING;
  }

  /**
   * Check if passed argument is empty. Different from falsy, because we dont consider 0 or false to be blank
   * @param { * } value -
   * @returns { Boolean } -
   */
  function isBlank(value) {
    return isNil(value) || value === '';
  }

  /**
   * Check against the null and undefined values
   * @param   { * }  value -
   * @returns {Boolean} -
   */
  function isNil(value) {
    return isUndefined(value) || value === null;
  }

  /**
   * Check if passed argument is a kind of array
   * @param   { * } value -
   * @returns { Boolean } -
   */
  function isArray(value) {
    return Array.isArray(value) || value instanceof Array;
  }

  /**
   * Check whether object's property could be overridden
   * @param   { Object }  obj - source object
   * @param   { String }  key - object property
   * @returns { Boolean } true if writable
   */
  function isWritable(obj, key) {
    var descriptor = getPropDescriptor(obj, key);
    return isUndefined(obj[key]) || descriptor && descriptor.writable;
  }

  var check = Object.freeze({
    isBoolAttr: isBoolAttr,
    isFunction: isFunction,
    isObject: isObject,
    isUndefined: isUndefined,
    isString: isString,
    isBlank: isBlank,
    isNil: isNil,
    isArray: isArray,
    isWritable: isWritable
  });

  /**
   * Specialized function for looping an array-like collection with `each={}`
   * @param   { Array } list - collection of items
   * @param   {Function} fn - callback function
   * @returns { Array } the array looped
   */
  function each(list, fn) {
    var len = list ? list.length : 0;
    var i = 0;
    for (; i < len; i++) {
      fn(list[i], i);
    }
    return list;
  }

  /**
   * Check whether an array contains an item
   * @param   { Array } array - target array
   * @param   { * } item - item to test
   * @returns { Boolean } -
   */
  function contains(array, item) {
    return array.indexOf(item) !== -1;
  }

  /**
   * Convert a string containing dashes to camel case
   * @param   { String } str - input string
   * @returns { String } my-string -> myString
   */
  function toCamel(str) {
    return str.replace(/-(\w)/g, function (_, c) {
      return c.toUpperCase();
    });
  }

  /**
   * Faster String startsWith alternative
   * @param   { String } str - source string
   * @param   { String } value - test string
   * @returns { Boolean } -
   */
  function startsWith(str, value) {
    return str.slice(0, value.length) === value;
  }

  /**
   * Helper function to set an immutable property
   * @param   { Object } el - object where the new property will be set
   * @param   { String } key - object key where the new property will be stored
   * @param   { * } value - value of the new property
   * @param   { Object } options - set the propery overriding the default options
   * @returns { Object } - the initial object
   */
  function defineProperty(el, key, value, options) {
    Object.defineProperty(el, key, extend({
      value: value,
      enumerable: false,
      writable: false,
      configurable: true
    }, options));
    return el;
  }

  /**
   * Function returning always a unique identifier
   * @returns { Number } - number from 0...n
   */
  var uid = function () {
    var i = -1;
    return function () {
      return ++i;
    };
  }();

  /**
   * Warn a message via console
   * @param   {String} message - warning message
   */
  function warn(message) {
    if (console && console.warn) {
      console.warn(message);
    }
  }

  /**
   * Short alias for Object.getOwnPropertyDescriptor
   */
  var getPropDescriptor = function getPropDescriptor(o, k) {
    return Object.getOwnPropertyDescriptor(o, k);
  };

  /**
   * Extend any object with other properties
   * @param   { Object } src - source object
   * @returns { Object } the resulting extended object
   *
   * var obj = { foo: 'baz' }
   * extend(obj, {bar: 'bar', foo: 'bar'})
   * console.log(obj) => {bar: 'bar', foo: 'bar'}
   *
   */
  function extend(src) {
    var obj;
    var i = 1;
    var args = arguments;
    var l = args.length;

    for (; i < l; i++) {
      if (obj = args[i]) {
        for (var key in obj) {
          // check if this property of the source object could be overridden
          if (isWritable(src, key)) {
            src[key] = obj[key];
          }
        }
      }
    }
    return src;
  }

  var misc = Object.freeze({
    each: each,
    contains: contains,
    toCamel: toCamel,
    startsWith: startsWith,
    defineProperty: defineProperty,
    uid: uid,
    warn: warn,
    getPropDescriptor: getPropDescriptor,
    extend: extend
  });

  var settings$1 = extend(Object.create(brackets.settings), {
    skipAnonymousTags: true,
    // handle the auto updates on any DOM event
    autoUpdate: true
  });

  /**
   * Trigger DOM events
   * @param   { HTMLElement } dom - dom element target of the event
   * @param   { Function } handler - user function
   * @param   { Object } e - event object
   */
  function handleEvent(dom, handler, e) {
    var ptag = this.__.parent;
    var item = this.__.item;

    if (!item) {
      while (ptag && !item) {
        item = ptag.__.item;
        ptag = ptag.__.parent;
      }
    }

    // override the event properties
    /* istanbul ignore next */
    if (isWritable(e, 'currentTarget')) {
      e.currentTarget = dom;
    }
    /* istanbul ignore next */
    if (isWritable(e, 'target')) {
      e.target = e.srcElement;
    }
    /* istanbul ignore next */
    if (isWritable(e, 'which')) {
      e.which = e.charCode || e.keyCode;
    }

    e.item = item;

    handler.call(this, e);

    // avoid auto updates
    if (!settings$1.autoUpdate) {
      return;
    }

    if (!e.preventUpdate) {
      var p = getImmediateCustomParentTag(this);
      // fixes #2083
      if (p.isMounted) {
        p.update();
      }
    }
  }

  /**
   * Attach an event to a DOM node
   * @param { String } name - event name
   * @param { Function } handler - event callback
   * @param { Object } dom - dom node
   * @param { Tag } tag - tag instance
   */
  function setEventHandler(name, handler, dom, tag) {
    var eventName;
    var cb = handleEvent.bind(tag, dom, handler);

    // avoid to bind twice the same event
    // possible fix for #2332
    dom[name] = null;

    // normalize event name
    eventName = name.replace(RE_EVENTS_PREFIX, '');

    // cache the listener into the listeners array
    if (!contains(tag.__.listeners, dom)) {
      tag.__.listeners.push(dom);
    }
    if (!dom[RIOT_EVENTS_KEY]) {
      dom[RIOT_EVENTS_KEY] = {};
    }
    if (dom[RIOT_EVENTS_KEY][name]) {
      dom.removeEventListener(eventName, dom[RIOT_EVENTS_KEY][name]);
    }

    dom[RIOT_EVENTS_KEY][name] = cb;
    dom.addEventListener(eventName, cb, false);
  }

  /**
   * Update dynamically created data-is tags with changing expressions
   * @param { Object } expr - expression tag and expression info
   * @param { Tag }    parent - parent for tag creation
   * @param { String } tagName - tag implementation we want to use
   */
  function updateDataIs(expr, parent, tagName) {
    var tag = expr.tag || expr.dom._tag;
    var ref;

    var ref$1 = tag ? tag.__ : {};
    var head = ref$1.head;
    var isVirtual = expr.dom.tagName === 'VIRTUAL';

    if (tag && expr.tagName === tagName) {
      tag.update();
      return;
    }

    // sync _parent to accommodate changing tagnames
    if (tag) {
      // need placeholder before unmount
      if (isVirtual) {
        ref = createDOMPlaceholder();
        head.parentNode.insertBefore(ref, head);
      }

      tag.unmount(true);
    }

    // unable to get the tag name
    if (!isString(tagName)) {
      return;
    }

    expr.impl = __TAG_IMPL[tagName];

    // unknown implementation
    if (!expr.impl) {
      return;
    }

    expr.tag = tag = initChildTag(expr.impl, {
      root: expr.dom,
      parent: parent,
      tagName: tagName
    }, expr.dom.innerHTML, parent);

    each(expr.attrs, function (a) {
      return setAttr(tag.root, a.name, a.value);
    });
    expr.tagName = tagName;
    tag.mount();

    // root exist first time, after use placeholder
    if (isVirtual) {
      makeReplaceVirtual(tag, ref || tag.root);
    }

    // parent is the placeholder tag, not the dynamic tag so clean up
    parent.__.onUnmount = function () {
      var delName = tag.opts.dataIs;
      arrayishRemove(tag.parent.tags, delName, tag);
      arrayishRemove(tag.__.parent.tags, delName, tag);
      tag.unmount();
    };
  }

  /**
   * Nomalize any attribute removing the "riot-" prefix
   * @param   { String } attrName - original attribute name
   * @returns { String } valid html attribute name
   */
  function normalizeAttrName(attrName) {
    if (!attrName) {
      return null;
    }
    attrName = attrName.replace(ATTRS_PREFIX, '');
    if (CASE_SENSITIVE_ATTRIBUTES[attrName]) {
      attrName = CASE_SENSITIVE_ATTRIBUTES[attrName];
    }
    return attrName;
  }

  /**
   * Update on single tag expression
   * @this Tag
   * @param { Object } expr - expression logic
   * @returns { undefined }
   */
  function updateExpression(expr) {
    if (this.root && getAttr(this.root, 'virtualized')) {
      return;
    }

    var dom = expr.dom;
    // remove the riot- prefix
    var attrName = normalizeAttrName(expr.attr);
    var isToggle = contains([SHOW_DIRECTIVE, HIDE_DIRECTIVE], attrName);
    var isVirtual = expr.root && expr.root.tagName === 'VIRTUAL';
    var ref = this.__;
    var isAnonymous = ref.isAnonymous;
    var parent = dom && (expr.parent || dom.parentNode);
    // detect the style attributes
    var isStyleAttr = attrName === 'style';
    var isClassAttr = attrName === 'class';

    var value;

    // if it's a tag we could totally skip the rest
    if (expr._riot_id) {
      if (expr.__.wasCreated) {
        expr.update();
        // if it hasn't been mounted yet, do that now.
      } else {
        expr.mount();
        if (isVirtual) {
          makeReplaceVirtual(expr, expr.root);
        }
      }
      return;
    }

    // if this expression has the update method it means it can handle the DOM changes by itself
    if (expr.update) {
      return expr.update();
    }

    var context = isToggle && !isAnonymous ? inheritParentProps.call(this) : this;

    // ...it seems to be a simple expression so we try to calculate its value
    value = tmpl(expr.expr, context);

    var hasValue = !isBlank(value);
    var isObj = isObject(value);

    // convert the style/class objects to strings
    if (isObj) {
      if (isClassAttr) {
        value = tmpl(JSON.stringify(value), this);
      } else if (isStyleAttr) {
        value = styleObjectToString(value);
      }
    }

    // remove original attribute
    if (expr.attr && (!expr.wasParsedOnce || !hasValue || value === false)) {
      // remove either riot-* attributes or just the attribute name
      remAttr(dom, getAttr(dom, expr.attr) ? expr.attr : attrName);
    }

    // for the boolean attributes we don't need the value
    // we can convert it to checked=true to checked=checked
    if (expr.bool) {
      value = value ? attrName : false;
    }
    if (expr.isRtag) {
      return updateDataIs(expr, this, value);
    }
    if (expr.wasParsedOnce && expr.value === value) {
      return;
    }

    // update the expression value
    expr.value = value;
    expr.wasParsedOnce = true;

    // if the value is an object (and it's not a style or class attribute) we can not do much more with it
    if (isObj && !isClassAttr && !isStyleAttr && !isToggle) {
      return;
    }
    // avoid to render undefined/null values
    if (!hasValue) {
      value = '';
    }

    // textarea and text nodes have no attribute name
    if (!attrName) {
      // about #815 w/o replace: the browser converts the value to a string,
      // the comparison by "==" does too, but not in the server
      value += '';
      // test for parent avoids error with invalid assignment to nodeValue
      if (parent) {
        // cache the parent node because somehow it will become null on IE
        // on the next iteration
        expr.parent = parent;
        if (parent.tagName === 'TEXTAREA') {
          parent.value = value; // #1113
          if (!IE_VERSION) {
            dom.nodeValue = value;
          } // #1625 IE throws here, nodeValue
        } // will be available on 'updated'
        else {
            dom.nodeValue = value;
          }
      }
      return;
    }

    // event handler
    if (isFunction(value)) {
      setEventHandler(attrName, value, dom, this);
      // show / hide
    } else if (isToggle) {
      toggleVisibility(dom, attrName === HIDE_DIRECTIVE ? !value : value);
      // handle attributes
    } else {
      if (expr.bool) {
        dom[attrName] = value;
      }

      if (attrName === 'value' && dom.value !== value) {
        dom.value = value;
      } else if (hasValue && value !== false) {
        setAttr(dom, attrName, value);
      }

      // make sure that in case of style changes
      // the element stays hidden
      if (isStyleAttr && dom.hidden) {
        toggleVisibility(dom, false);
      }
    }
  }

  /**
   * Update all the expressions in a Tag instance
   * @this Tag
   * @param { Array } expressions - expression that must be re evaluated
   */
  function updateAllExpressions(expressions) {
    each(expressions, updateExpression.bind(this));
  }

  var IfExpr = {
    init: function init(dom, tag, expr) {
      remAttr(dom, CONDITIONAL_DIRECTIVE);
      this.tag = tag;
      this.expr = expr;
      this.stub = createDOMPlaceholder();
      this.pristine = dom;

      var p = dom.parentNode;
      p.insertBefore(this.stub, dom);
      p.removeChild(dom);

      return this;
    },
    update: function update() {
      this.value = tmpl(this.expr, this.tag);

      if (this.value && !this.current) {
        // insert
        this.current = this.pristine.cloneNode(true);
        this.stub.parentNode.insertBefore(this.current, this.stub);
        this.expressions = parseExpressions.apply(this.tag, [this.current, true]);
      } else if (!this.value && this.current) {
        // remove
        unmountAll(this.expressions);
        if (this.current._tag) {
          this.current._tag.unmount();
        } else if (this.current.parentNode) {
          this.current.parentNode.removeChild(this.current);
        }
        this.current = null;
        this.expressions = [];
      }

      if (this.value) {
        updateAllExpressions.call(this.tag, this.expressions);
      }
    },
    unmount: function unmount() {
      unmountAll(this.expressions || []);
    }
  };

  var RefExpr = {
    init: function init(dom, parent, attrName, attrValue) {
      this.dom = dom;
      this.attr = attrName;
      this.rawValue = attrValue;
      this.parent = parent;
      this.hasExp = tmpl.hasExpr(attrValue);
      return this;
    },
    update: function update() {
      var old = this.value;
      var customParent = this.parent && getImmediateCustomParentTag(this.parent);
      // if the referenced element is a custom tag, then we set the tag itself, rather than DOM
      var tagOrDom = this.dom.__ref || this.tag || this.dom;

      this.value = this.hasExp ? tmpl(this.rawValue, this.parent) : this.rawValue;

      // the name changed, so we need to remove it from the old key (if present)
      if (!isBlank(old) && customParent) {
        arrayishRemove(customParent.refs, old, tagOrDom);
      }
      if (!isBlank(this.value) && isString(this.value)) {
        // add it to the refs of parent tag (this behavior was changed >=3.0)
        if (customParent) {
          arrayishAdd(customParent.refs, this.value, tagOrDom,
          // use an array if it's a looped node and the ref is not an expression
          null, this.parent.__.index);
        }

        if (this.value !== old) {
          setAttr(this.dom, this.attr, this.value);
        }
      } else {
        remAttr(this.dom, this.attr);
      }

      // cache the ref bound to this dom node
      // to reuse it in future (see also #2329)
      if (!this.dom.__ref) {
        this.dom.__ref = tagOrDom;
      }
    },
    unmount: function unmount() {
      var tagOrDom = this.tag || this.dom;
      var customParent = this.parent && getImmediateCustomParentTag(this.parent);
      if (!isBlank(this.value) && customParent) {
        arrayishRemove(customParent.refs, this.value, tagOrDom);
      }
    }
  };

  /**
   * Convert the item looped into an object used to extend the child tag properties
   * @param   { Object } expr - object containing the keys used to extend the children tags
   * @param   { * } key - value to assign to the new object returned
   * @param   { * } val - value containing the position of the item in the array
   * @param   { Object } base - prototype object for the new item
   * @returns { Object } - new object containing the values of the original item
   *
   * The variables 'key' and 'val' are arbitrary.
   * They depend on the collection type looped (Array, Object)
   * and on the expression used on the each tag
   *
   */
  function mkitem(expr, key, val, base) {
    var item = base ? Object.create(base) : {};
    item[expr.key] = key;
    if (expr.pos) {
      item[expr.pos] = val;
    }
    return item;
  }

  /**
   * Unmount the redundant tags
   * @param   { Array } items - array containing the current items to loop
   * @param   { Array } tags - array containing all the children tags
   */
  function unmountRedundant(items, tags) {
    var i = tags.length;
    var j = items.length;

    while (i > j) {
      i--;
      remove.apply(tags[i], [tags, i]);
    }
  }

  /**
   * Remove a child tag
   * @this Tag
   * @param   { Array } tags - tags collection
   * @param   { Number } i - index of the tag to remove
   */
  function remove(tags, i) {
    tags.splice(i, 1);
    this.unmount();
    arrayishRemove(this.parent, this, this.__.tagName, true);
  }

  /**
   * Move the nested custom tags in non custom loop tags
   * @this Tag
   * @param   { Number } i - current position of the loop tag
   */
  function moveNestedTags(i) {
    var this$1 = this;

    each(Object.keys(this.tags), function (tagName) {
      moveChildTag.apply(this$1.tags[tagName], [tagName, i]);
    });
  }

  /**
   * Move a child tag
   * @this Tag
   * @param   { HTMLElement } root - dom node containing all the loop children
   * @param   { Tag } nextTag - instance of the next tag preceding the one we want to move
   * @param   { Boolean } isVirtual - is it a virtual tag?
   */
  function move(root, nextTag, isVirtual) {
    if (isVirtual) {
      moveVirtual.apply(this, [root, nextTag]);
    } else {
      safeInsert(root, this.root, nextTag.root);
    }
  }

  /**
   * Insert and mount a child tag
   * @this Tag
   * @param   { HTMLElement } root - dom node containing all the loop children
   * @param   { Tag } nextTag - instance of the next tag preceding the one we want to insert
   * @param   { Boolean } isVirtual - is it a virtual tag?
   */
  function insert(root, nextTag, isVirtual) {
    if (isVirtual) {
      makeVirtual.apply(this, [root, nextTag]);
    } else {
      safeInsert(root, this.root, nextTag.root);
    }
  }

  /**
   * Append a new tag into the DOM
   * @this Tag
   * @param   { HTMLElement } root - dom node containing all the loop children
   * @param   { Boolean } isVirtual - is it a virtual tag?
   */
  function append(root, isVirtual) {
    if (isVirtual) {
      makeVirtual.call(this, root);
    } else {
      root.appendChild(this.root);
    }
  }

  /**
   * Return the value we want to use to lookup the postion of our items in the collection
   * @param   { String }  keyAttr         - lookup string or expression
   * @param   { * }       originalItem    - original item from the collection
   * @param   { Object }  keyedItem       - object created by riot via { item, i in collection }
   * @param   { Boolean } hasKeyAttrExpr  - flag to check whether the key is an expression
   * @returns { * } value that we will use to figure out the item position via collection.indexOf
   */
  function getItemId(keyAttr, originalItem, keyedItem, hasKeyAttrExpr) {
    if (keyAttr) {
      return hasKeyAttrExpr ? tmpl(keyAttr, keyedItem) : originalItem[keyAttr];
    }

    return originalItem;
  }

  /**
   * Manage tags having the 'each'
   * @param   { HTMLElement } dom - DOM node we need to loop
   * @param   { Tag } parent - parent tag instance where the dom node is contained
   * @param   { String } expr - string contained in the 'each' attribute
   * @returns { Object } expression object for this each loop
   */
  function _each(dom, parent, expr) {
    var mustReorder = _typeof(getAttr(dom, LOOP_NO_REORDER_DIRECTIVE)) !== T_STRING || remAttr(dom, LOOP_NO_REORDER_DIRECTIVE);
    var keyAttr = getAttr(dom, KEY_DIRECTIVE);
    var hasKeyAttrExpr = keyAttr ? tmpl.hasExpr(keyAttr) : false;
    var tagName = getTagName(dom);
    var impl = __TAG_IMPL[tagName];
    var parentNode = dom.parentNode;
    var placeholder = createDOMPlaceholder();
    var child = getTag(dom);
    var ifExpr = getAttr(dom, CONDITIONAL_DIRECTIVE);
    var tags = [];
    var isLoop = true;
    var innerHTML = dom.innerHTML;
    var isAnonymous = !__TAG_IMPL[tagName];
    var isVirtual = dom.tagName === 'VIRTUAL';
    var oldItems = [];
    var hasKeys;

    // remove the each property from the original tag
    remAttr(dom, LOOP_DIRECTIVE);
    remAttr(dom, KEY_DIRECTIVE);

    // parse the each expression
    expr = tmpl.loopKeys(expr);
    expr.isLoop = true;

    if (ifExpr) {
      remAttr(dom, CONDITIONAL_DIRECTIVE);
    }

    // insert a marked where the loop tags will be injected
    parentNode.insertBefore(placeholder, dom);
    parentNode.removeChild(dom);

    expr.update = function updateEach() {
      // get the new items collection
      expr.value = tmpl(expr.val, parent);

      var items = expr.value;
      var frag = createFrag();
      var isObject$$1 = !isArray(items) && !isString(items);
      var root = placeholder.parentNode;
      var tmpItems = [];

      // if this DOM was removed the update here is useless
      // this condition fixes also a weird async issue on IE in our unit test
      if (!root) {
        return;
      }

      // object loop. any changes cause full redraw
      if (isObject$$1) {
        hasKeys = items || false;
        items = hasKeys ? Object.keys(items).map(function (key) {
          return mkitem(expr, items[key], key);
        }) : [];
      } else {
        hasKeys = false;
      }

      if (ifExpr) {
        items = items.filter(function (item, i) {
          if (expr.key && !isObject$$1) {
            return !!tmpl(ifExpr, mkitem(expr, item, i, parent));
          }

          return !!tmpl(ifExpr, extend(Object.create(parent), item));
        });
      }

      // loop all the new items
      each(items, function (_item, i) {
        var item = !hasKeys && expr.key ? mkitem(expr, _item, i) : _item;
        var itemId = getItemId(keyAttr, _item, item, hasKeyAttrExpr);
        // reorder only if the items are objects
        var doReorder = mustReorder && (typeof _item === 'undefined' ? 'undefined' : _typeof(_item)) === T_OBJECT && !hasKeys;
        var oldPos = oldItems.indexOf(itemId);
        var isNew = oldPos === -1;
        var pos = !isNew && doReorder ? oldPos : i;
        // does a tag exist in this position?
        var tag = tags[pos];
        var mustAppend = i >= oldItems.length;
        var mustCreate = doReorder && isNew || !doReorder && !tag;

        // new tag
        if (mustCreate) {
          tag = createTag(impl, {
            parent: parent,
            isLoop: isLoop,
            isAnonymous: isAnonymous,
            tagName: tagName,
            root: dom.cloneNode(isAnonymous),
            item: item,
            index: i
          }, innerHTML);

          // mount the tag
          tag.mount();

          if (mustAppend) {
            append.apply(tag, [frag || root, isVirtual]);
          } else {
            insert.apply(tag, [root, tags[i], isVirtual]);
          }

          if (!mustAppend) {
            oldItems.splice(i, 0, item);
          }
          tags.splice(i, 0, tag);
          if (child) {
            arrayishAdd(parent.tags, tagName, tag, true);
          }
        } else if (pos !== i && doReorder) {
          // move
          if (keyAttr || contains(items, oldItems[pos])) {
            move.apply(tag, [root, tags[i], isVirtual]);
            // move the old tag instance
            tags.splice(i, 0, tags.splice(pos, 1)[0]);
            // move the old item
            oldItems.splice(i, 0, oldItems.splice(pos, 1)[0]);
          }

          // update the position attribute if it exists
          if (expr.pos) {
            tag[expr.pos] = i;
          }

          // if the loop tags are not custom
          // we need to move all their custom tags into the right position
          if (!child && tag.tags) {
            moveNestedTags.call(tag, i);
          }
        }

        // cache the original item to use it in the events bound to this node
        // and its children
        tag.__.item = item;
        tag.__.index = i;
        tag.__.parent = parent;

        tmpItems[i] = itemId;

        if (!mustCreate) {
          tag.update(item);
        }
      });

      // remove the redundant tags
      unmountRedundant(items, tags);

      // clone the items array
      oldItems = tmpItems.slice();

      root.insertBefore(frag, placeholder);
    };

    expr.unmount = function () {
      each(tags, function (t) {
        t.unmount();
      });
    };

    return expr;
  }

  /**
   * Walk the tag DOM to detect the expressions to evaluate
   * @this Tag
   * @param   { HTMLElement } root - root tag where we will start digging the expressions
   * @param   { Boolean } mustIncludeRoot - flag to decide whether the root must be parsed as well
   * @returns { Array } all the expressions found
   */
  function parseExpressions(root, mustIncludeRoot) {
    var this$1 = this;

    var expressions = [];

    walkNodes(root, function (dom) {
      var type = dom.nodeType;
      var attr;
      var tagImpl;

      if (!mustIncludeRoot && dom === root) {
        return;
      }

      // text node
      if (type === 3 && dom.parentNode.tagName !== 'STYLE' && tmpl.hasExpr(dom.nodeValue)) {
        expressions.push({ dom: dom, expr: dom.nodeValue });
      }

      if (type !== 1) {
        return;
      }

      var isVirtual = dom.tagName === 'VIRTUAL';

      // loop. each does it's own thing (for now)
      if (attr = getAttr(dom, LOOP_DIRECTIVE)) {
        if (isVirtual) {
          setAttr(dom, 'loopVirtual', true);
        } // ignore here, handled in _each
        expressions.push(_each(dom, this$1, attr));
        return false;
      }

      // if-attrs become the new parent. Any following expressions (either on the current
      // element, or below it) become children of this expression.
      if (attr = getAttr(dom, CONDITIONAL_DIRECTIVE)) {
        expressions.push(Object.create(IfExpr).init(dom, this$1, attr));
        return false;
      }

      if (attr = getAttr(dom, IS_DIRECTIVE)) {
        if (tmpl.hasExpr(attr)) {
          expressions.push({
            isRtag: true,
            expr: attr,
            dom: dom,
            attrs: [].slice.call(dom.attributes)
          });

          return false;
        }
      }

      // if this is a tag, stop traversing here.
      // we ignore the root, since parseExpressions is called while we're mounting that root
      tagImpl = getTag(dom);

      if (isVirtual) {
        if (getAttr(dom, 'virtualized')) {
          dom.parentElement.removeChild(dom);
        } // tag created, remove from dom
        if (!tagImpl && !getAttr(dom, 'virtualized') && !getAttr(dom, 'loopVirtual')) // ok to create virtual tag
          {
            tagImpl = { tmpl: dom.outerHTML };
          }
      }

      if (tagImpl && (dom !== root || mustIncludeRoot)) {
        if (isVirtual) {
          // handled in update
          if (getAttr(dom, IS_DIRECTIVE)) {
            warn("Virtual tags shouldn't be used together with the \"" + IS_DIRECTIVE + "\" attribute - https://github.com/riot/riot/issues/2511");
          }
          // can not remove attribute like directives
          // so flag for removal after creation to prevent maximum stack error
          setAttr(dom, 'virtualized', true);
          var tag = createTag({ tmpl: dom.outerHTML }, { root: dom, parent: this$1 }, dom.innerHTML);

          expressions.push(tag); // no return, anonymous tag, keep parsing
        } else {
          expressions.push(initChildTag(tagImpl, {
            root: dom,
            parent: this$1
          }, dom.innerHTML, this$1));
          return false;
        }
      }

      // attribute expressions
      parseAttributes.apply(this$1, [dom, dom.attributes, function (attr, expr) {
        if (!expr) {
          return;
        }
        expressions.push(expr);
      }]);
    });

    return expressions;
  }

  /**
   * Calls `fn` for every attribute on an element. If that attr has an expression,
   * it is also passed to fn.
   * @this Tag
   * @param   { HTMLElement } dom - dom node to parse
   * @param   { Array } attrs - array of attributes
   * @param   { Function } fn - callback to exec on any iteration
   */
  function parseAttributes(dom, attrs, fn) {
    var this$1 = this;

    each(attrs, function (attr) {
      if (!attr) {
        return false;
      }

      var name = attr.name;
      var bool = isBoolAttr(name);
      var expr;

      if (contains(REF_DIRECTIVES, name) && dom.tagName.toLowerCase() !== YIELD_TAG) {
        expr = Object.create(RefExpr).init(dom, this$1, name, attr.value);
      } else if (tmpl.hasExpr(attr.value)) {
        expr = { dom: dom, expr: attr.value, attr: name, bool: bool };
      }

      fn(attr, expr);
    });
  }

  /*
    Includes hacks needed for the Internet Explorer version 9 and below
    See: http://kangax.github.io/compat-table/es5/#ie8
         http://codeplanet.io/dropping-ie8/
  */

  var reHasYield = /<yield\b/i;
  var reYieldAll = /<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/ig;
  var reYieldSrc = /<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/ig;
  var reYieldDest = /<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/ig;
  var rootEls = { tr: 'tbody', th: 'tr', td: 'tr', col: 'colgroup' };
  var tblTags = IE_VERSION && IE_VERSION < 10 ? RE_SPECIAL_TAGS : RE_SPECIAL_TAGS_NO_OPTION;
  var GENERIC = 'div';
  var SVG = 'svg';

  /*
    Creates the root element for table or select child elements:
    tr/th/td/thead/tfoot/tbody/caption/col/colgroup/option/optgroup
  */
  function specialTags(el, tmpl, tagName) {

    var select = tagName[0] === 'o',
        parent = select ? 'select>' : 'table>';

    // trim() is important here, this ensures we don't have artifacts,
    // so we can check if we have only one element inside the parent
    el.innerHTML = '<' + parent + tmpl.trim() + '</' + parent;
    parent = el.firstChild;

    // returns the immediate parent if tr/th/td/col is the only element, if not
    // returns the whole tree, as this can include additional elements
    /* istanbul ignore next */
    if (select) {
      parent.selectedIndex = -1; // for IE9, compatible w/current riot behavior
    } else {
      // avoids insertion of cointainer inside container (ex: tbody inside tbody)
      var tname = rootEls[tagName];
      if (tname && parent.childElementCount === 1) {
        parent = $(tname, parent);
      }
    }
    return parent;
  }

  /*
    Replace the yield tag from any tag template with the innerHTML of the
    original tag in the page
  */
  function replaceYield(tmpl, html) {
    // do nothing if no yield
    if (!reHasYield.test(tmpl)) {
      return tmpl;
    }

    // be careful with #1343 - string on the source having `$1`
    var src = {};

    html = html && html.replace(reYieldSrc, function (_, ref, text) {
      src[ref] = src[ref] || text; // preserve first definition
      return '';
    }).trim();

    return tmpl.replace(reYieldDest, function (_, ref, def) {
      // yield with from - to attrs
      return src[ref] || def || '';
    }).replace(reYieldAll, function (_, def) {
      // yield without any "from"
      return html || def || '';
    });
  }

  /**
   * Creates a DOM element to wrap the given content. Normally an `DIV`, but can be
   * also a `TABLE`, `SELECT`, `TBODY`, `TR`, or `COLGROUP` element.
   *
   * @param   { String } tmpl  - The template coming from the custom tag definition
   * @param   { String } html - HTML content that comes from the DOM element where you
   *           will mount the tag, mostly the original tag in the page
   * @param   { Boolean } isSvg - true if the root node is an svg
   * @returns { HTMLElement } DOM element with _tmpl_ merged through `YIELD` with the _html_.
   */
  function mkdom(tmpl, html, isSvg$$1) {
    var match = tmpl && tmpl.match(/^\s*<([-\w]+)/);
    var tagName = match && match[1].toLowerCase();
    var el = mkEl(isSvg$$1 ? SVG : GENERIC);

    // replace all the yield tags with the tag inner html
    tmpl = replaceYield(tmpl, html);

    /* istanbul ignore next */
    if (tblTags.test(tagName)) {
      el = specialTags(el, tmpl, tagName);
    } else {
      setInnerHTML(el, tmpl, isSvg$$1);
    }

    return el;
  }

  /**
   * Another way to create a riot tag a bit more es6 friendly
   * @param { HTMLElement } el - tag DOM selector or DOM node/s
   * @param { Object } opts - tag logic
   * @returns { Tag } new riot tag instance
   */
  function Tag$1(el, opts) {
    // get the tag properties from the class constructor
    var ref = this;
    var name = ref.name;
    var tmpl = ref.tmpl;
    var css = ref.css;
    var attrs = ref.attrs;
    var onCreate = ref.onCreate;
    // register a new tag and cache the class prototype
    if (!__TAG_IMPL[name]) {
      tag$1(name, tmpl, css, attrs, onCreate);
      // cache the class constructor
      __TAG_IMPL[name].class = this.constructor;
    }

    // mount the tag using the class instance
    mountTo(el, name, opts, this);
    // inject the component css
    if (css) {
      styleManager.inject();
    }

    return this;
  }

  /**
   * Create a new riot tag implementation
   * @param   { String }   name - name/id of the new riot tag
   * @param   { String }   tmpl - tag template
   * @param   { String }   css - custom tag css
   * @param   { String }   attrs - root tag attributes
   * @param   { Function } fn - user function
   * @returns { String } name/id of the tag just created
   */
  function tag$1(name, tmpl, css, attrs, fn) {
    if (isFunction(attrs)) {
      fn = attrs;

      if (/^[\w-]+\s?=/.test(css)) {
        attrs = css;
        css = '';
      } else {
        attrs = '';
      }
    }

    if (css) {
      if (isFunction(css)) {
        fn = css;
      } else {
        styleManager.add(css);
      }
    }

    name = name.toLowerCase();
    __TAG_IMPL[name] = { name: name, tmpl: tmpl, attrs: attrs, fn: fn };

    return name;
  }

  /**
   * Create a new riot tag implementation (for use by the compiler)
   * @param   { String }   name - name/id of the new riot tag
   * @param   { String }   tmpl - tag template
   * @param   { String }   css - custom tag css
   * @param   { String }   attrs - root tag attributes
   * @param   { Function } fn - user function
   * @returns { String } name/id of the tag just created
   */
  function tag2$1(name, tmpl, css, attrs, fn) {
    if (css) {
      styleManager.add(css, name);
    }

    __TAG_IMPL[name] = { name: name, tmpl: tmpl, attrs: attrs, fn: fn };

    return name;
  }

  /**
   * Mount a tag using a specific tag implementation
   * @param   { * } selector - tag DOM selector or DOM node/s
   * @param   { String } tagName - tag implementation name
   * @param   { Object } opts - tag logic
   * @returns { Array } new tags instances
   */
  function mount$1(selector, tagName, opts) {
    var tags = [];
    var elem, allTags;

    function pushTagsTo(root) {
      if (root.tagName) {
        var riotTag = getAttr(root, IS_DIRECTIVE),
            tag;

        // have tagName? force riot-tag to be the same
        if (tagName && riotTag !== tagName) {
          riotTag = tagName;
          setAttr(root, IS_DIRECTIVE, tagName);
        }

        tag = mountTo(root, riotTag || root.tagName.toLowerCase(), opts);

        if (tag) {
          tags.push(tag);
        }
      } else if (root.length) {
        each(root, pushTagsTo);
      } // assume nodeList
    }

    // inject styles into DOM
    styleManager.inject();

    if (isObject(tagName)) {
      opts = tagName;
      tagName = 0;
    }

    // crawl the DOM to find the tag
    if (isString(selector)) {
      selector = selector === '*' ?
      // select all registered tags
      // & tags found with the riot-tag attribute set
      allTags = selectTags() :
      // or just the ones named like the selector
      selector + selectTags(selector.split(/, */));

      // make sure to pass always a selector
      // to the querySelectorAll function
      elem = selector ? $$(selector) : [];
    } else
      // probably you have passed already a tag or a NodeList
      {
        elem = selector;
      }

    // select all the registered and mount them inside their root elements
    if (tagName === '*') {
      // get all custom tags
      tagName = allTags || selectTags();
      // if the root els it's just a single tag
      if (elem.tagName) {
        elem = $$(tagName, elem);
      } else {
        // select all the children for all the different root elements
        var nodeList = [];

        each(elem, function (_el) {
          return nodeList.push($$(tagName, _el));
        });

        elem = nodeList;
      }
      // get rid of the tagName
      tagName = 0;
    }

    pushTagsTo(elem);

    return tags;
  }

  // Create a mixin that could be globally shared across all the tags
  var mixins = {};
  var globals = mixins[GLOBAL_MIXIN] = {};
  var mixins_id = 0;

  /**
   * Create/Return a mixin by its name
   * @param   { String }  name - mixin name (global mixin if object)
   * @param   { Object }  mix - mixin logic
   * @param   { Boolean } g - is global?
   * @returns { Object }  the mixin logic
   */
  function mixin$1(name, mix, g) {
    // Unnamed global
    if (isObject(name)) {
      mixin$1("__" + mixins_id++ + "__", name, true);
      return;
    }

    var store = g ? globals : mixins;

    // Getter
    if (!mix) {
      if (isUndefined(store[name])) {
        throw new Error("Unregistered mixin: " + name);
      }

      return store[name];
    }

    // Setter
    store[name] = isFunction(mix) ? extend(mix.prototype, store[name] || {}) && mix : extend(store[name] || {}, mix);
  }

  /**
   * Update all the tags instances created
   * @returns { Array } all the tags instances
   */
  function update$1() {
    return each(__TAGS_CACHE, function (tag) {
      return tag.update();
    });
  }

  function unregister$1(name) {
    __TAG_IMPL[name] = null;
  }

  var version$1 = 'v3.8.1';

  var core = Object.freeze({
    Tag: Tag$1,
    tag: tag$1,
    tag2: tag2$1,
    mount: mount$1,
    mixin: mixin$1,
    update: update$1,
    unregister: unregister$1,
    version: version$1
  });

  /**
   * We need to update opts for this tag. That requires updating the expressions
   * in any attributes on the tag, and then copying the result onto opts.
   * @this Tag
   * @param   {Boolean} isLoop - is it a loop tag?
   * @param   { Tag }  parent - parent tag node
   * @param   { Boolean }  isAnonymous - is it a tag without any impl? (a tag not registered)
   * @param   { Object }  opts - tag options
   * @param   { Array }  instAttrs - tag attributes array
   */
  function updateOpts(isLoop, parent, isAnonymous, opts, instAttrs) {
    // isAnonymous `each` tags treat `dom` and `root` differently. In this case
    // (and only this case) we don't need to do updateOpts, because the regular parse
    // will update those attrs. Plus, isAnonymous tags don't need opts anyway
    if (isLoop && isAnonymous) {
      return;
    }
    var ctx = isLoop ? inheritParentProps.call(this) : parent || this;

    each(instAttrs, function (attr) {
      if (attr.expr) {
        updateExpression.call(ctx, attr.expr);
      }
      // normalize the attribute names
      opts[toCamel(attr.name).replace(ATTRS_PREFIX, '')] = attr.expr ? attr.expr.value : attr.value;
    });
  }

  /**
   * Manage the mount state of a tag triggering also the observable events
   * @this Tag
   * @param { Boolean } value - ..of the isMounted flag
   */
  function setMountState(value) {
    var ref = this.__;
    var isAnonymous = ref.isAnonymous;

    defineProperty(this, 'isMounted', value);

    if (!isAnonymous) {
      if (value) {
        this.trigger('mount');
      } else {
        this.trigger('unmount');
        this.off('*');
        this.__.wasCreated = false;
      }
    }
  }

  /**
   * Tag creation factory function
   * @constructor
   * @param { Object } impl - it contains the tag template, and logic
   * @param { Object } conf - tag options
   * @param { String } innerHTML - html that eventually we need to inject in the tag
   */
  function createTag(impl, conf, innerHTML) {
    if (impl === void 0) impl = {};
    if (conf === void 0) conf = {};

    var tag = conf.context || {};
    var opts = extend({}, conf.opts);
    var parent = conf.parent;
    var isLoop = conf.isLoop;
    var isAnonymous = !!conf.isAnonymous;
    var skipAnonymous = settings$1.skipAnonymousTags && isAnonymous;
    var item = conf.item;
    // available only for the looped nodes
    var index = conf.index;
    // All attributes on the Tag when it's first parsed
    var instAttrs = [];
    // expressions on this type of Tag
    var implAttrs = [];
    var expressions = [];
    var root = conf.root;
    var tagName = conf.tagName || getTagName(root);
    var isVirtual = tagName === 'virtual';
    var isInline = !isVirtual && !impl.tmpl;
    var dom;

    // make this tag observable
    if (!skipAnonymous) {
      observable$1(tag);
    }
    // only call unmount if we have a valid __TAG_IMPL (has name property)
    if (impl.name && root._tag) {
      root._tag.unmount(true);
    }

    // not yet mounted
    defineProperty(tag, 'isMounted', false);

    defineProperty(tag, '__', {
      isAnonymous: isAnonymous,
      instAttrs: instAttrs,
      innerHTML: innerHTML,
      tagName: tagName,
      index: index,
      isLoop: isLoop,
      isInline: isInline,
      // tags having event listeners
      // it would be better to use weak maps here but we can not introduce breaking changes now
      listeners: [],
      // these vars will be needed only for the virtual tags
      virts: [],
      wasCreated: false,
      tail: null,
      head: null,
      parent: null,
      item: null
    });

    // create a unique id to this tag
    // it could be handy to use it also to improve the virtual dom rendering speed
    defineProperty(tag, '_riot_id', uid()); // base 1 allows test !t._riot_id
    defineProperty(tag, 'root', root);
    extend(tag, { opts: opts }, item);
    // protect the "tags" and "refs" property from being overridden
    defineProperty(tag, 'parent', parent || null);
    defineProperty(tag, 'tags', {});
    defineProperty(tag, 'refs', {});

    if (isInline || isLoop && isAnonymous) {
      dom = root;
    } else {
      if (!isVirtual) {
        root.innerHTML = '';
      }
      dom = mkdom(impl.tmpl, innerHTML, isSvg(root));
    }

    /**
     * Update the tag expressions and options
     * @param   { * }  data - data we want to use to extend the tag properties
     * @returns { Tag } the current tag instance
     */
    defineProperty(tag, 'update', function tagUpdate(data) {
      var nextOpts = {};
      var canTrigger = tag.isMounted && !skipAnonymous;

      // inherit properties from the parent tag
      if (isAnonymous && parent) {
        extend(tag, parent);
      }
      extend(tag, data);

      updateOpts.apply(tag, [isLoop, parent, isAnonymous, nextOpts, instAttrs]);

      if (canTrigger && tag.isMounted && isFunction(tag.shouldUpdate) && !tag.shouldUpdate(data, nextOpts)) {
        return tag;
      }

      extend(opts, nextOpts);

      if (canTrigger) {
        tag.trigger('update', data);
      }
      updateAllExpressions.call(tag, expressions);
      if (canTrigger) {
        tag.trigger('updated');
      }

      return tag;
    });

    /**
     * Add a mixin to this tag
     * @returns { Tag } the current tag instance
     */
    defineProperty(tag, 'mixin', function tagMixin() {
      each(arguments, function (mix) {
        var instance;
        var obj;
        var props = [];

        // properties blacklisted and will not be bound to the tag instance
        var propsBlacklist = ['init', '__proto__'];

        mix = isString(mix) ? mixin$1(mix) : mix;

        // check if the mixin is a function
        if (isFunction(mix)) {
          // create the new mixin instance
          instance = new mix();
        } else {
          instance = mix;
        }

        var proto = Object.getPrototypeOf(instance);

        // build multilevel prototype inheritance chain property list
        do {
          props = props.concat(Object.getOwnPropertyNames(obj || instance));
        } while (obj = Object.getPrototypeOf(obj || instance));

        // loop the keys in the function prototype or the all object keys
        each(props, function (key) {
          // bind methods to tag
          // allow mixins to override other properties/parent mixins
          if (!contains(propsBlacklist, key)) {
            // check for getters/setters
            var descriptor = getPropDescriptor(instance, key) || getPropDescriptor(proto, key);
            var hasGetterSetter = descriptor && (descriptor.get || descriptor.set);

            // apply method only if it does not already exist on the instance
            if (!tag.hasOwnProperty(key) && hasGetterSetter) {
              Object.defineProperty(tag, key, descriptor);
            } else {
              tag[key] = isFunction(instance[key]) ? instance[key].bind(tag) : instance[key];
            }
          }
        });

        // init method will be called automatically
        if (instance.init) {
          instance.init.bind(tag)(opts);
        }
      });

      return tag;
    });

    /**
     * Mount the current tag instance
     * @returns { Tag } the current tag instance
     */
    defineProperty(tag, 'mount', function tagMount() {
      root._tag = tag; // keep a reference to the tag just created

      // Read all the attrs on this instance. This give us the info we need for updateOpts
      parseAttributes.apply(parent, [root, root.attributes, function (attr, expr) {
        if (!isAnonymous && RefExpr.isPrototypeOf(expr)) {
          expr.tag = tag;
        }
        attr.expr = expr;
        instAttrs.push(attr);
      }]);

      // update the root adding custom attributes coming from the compiler
      walkAttrs(impl.attrs, function (k, v) {
        implAttrs.push({ name: k, value: v });
      });
      parseAttributes.apply(tag, [root, implAttrs, function (attr, expr) {
        if (expr) {
          expressions.push(expr);
        } else {
          setAttr(root, attr.name, attr.value);
        }
      }]);

      // initialiation
      updateOpts.apply(tag, [isLoop, parent, isAnonymous, opts, instAttrs]);

      // add global mixins
      var globalMixin = mixin$1(GLOBAL_MIXIN);

      if (globalMixin && !skipAnonymous) {
        for (var i in globalMixin) {
          if (globalMixin.hasOwnProperty(i)) {
            tag.mixin(globalMixin[i]);
          }
        }
      }

      if (impl.fn) {
        impl.fn.call(tag, opts);
      }

      if (!skipAnonymous) {
        tag.trigger('before-mount');
      }

      // parse layout after init. fn may calculate args for nested custom tags
      each(parseExpressions.apply(tag, [dom, isAnonymous]), function (e) {
        return expressions.push(e);
      });

      tag.update(item);

      if (!isAnonymous && !isInline) {
        while (dom.firstChild) {
          root.appendChild(dom.firstChild);
        }
      }

      defineProperty(tag, 'root', root);

      // if we need to wait that the parent "mount" or "updated" event gets triggered
      if (!skipAnonymous && tag.parent) {
        var p = getImmediateCustomParentTag(tag.parent);
        p.one(!p.isMounted ? 'mount' : 'updated', function () {
          setMountState.call(tag, true);
        });
      } else {
        // otherwise it's not a child tag we can trigger its mount event
        setMountState.call(tag, true);
      }

      tag.__.wasCreated = true;

      return tag;
    });

    /**
     * Unmount the tag instance
     * @param { Boolean } mustKeepRoot - if it's true the root node will not be removed
     * @returns { Tag } the current tag instance
     */
    defineProperty(tag, 'unmount', function tagUnmount(mustKeepRoot) {
      var el = tag.root;
      var p = el.parentNode;
      var tagIndex = __TAGS_CACHE.indexOf(tag);

      if (!skipAnonymous) {
        tag.trigger('before-unmount');
      }

      // clear all attributes coming from the mounted tag
      walkAttrs(impl.attrs, function (name) {
        if (startsWith(name, ATTRS_PREFIX)) {
          name = name.slice(ATTRS_PREFIX.length);
        }

        remAttr(root, name);
      });

      // remove all the event listeners
      tag.__.listeners.forEach(function (dom) {
        Object.keys(dom[RIOT_EVENTS_KEY]).forEach(function (eventName) {
          dom.removeEventListener(eventName, dom[RIOT_EVENTS_KEY][eventName]);
        });
      });

      // remove tag instance from the global tags cache collection
      if (tagIndex !== -1) {
        __TAGS_CACHE.splice(tagIndex, 1);
      }

      // clean up the parent tags object
      if (parent && !isAnonymous) {
        var ptag = getImmediateCustomParentTag(parent);

        if (isVirtual) {
          Object.keys(tag.tags).forEach(function (tagName) {
            return arrayishRemove(ptag.tags, tagName, tag.tags[tagName]);
          });
        } else {
          arrayishRemove(ptag.tags, tagName, tag);
        }
      }

      // unmount all the virtual directives
      if (tag.__.virts) {
        each(tag.__.virts, function (v) {
          if (v.parentNode) {
            v.parentNode.removeChild(v);
          }
        });
      }

      // allow expressions to unmount themselves
      unmountAll(expressions);
      each(instAttrs, function (a) {
        return a.expr && a.expr.unmount && a.expr.unmount();
      });

      // clear the tag html if it's necessary
      if (mustKeepRoot) {
        setInnerHTML(el, '');
      }
      // otherwise detach the root tag from the DOM
      else if (p) {
          p.removeChild(el);
        }

      // custom internal unmount function to avoid relying on the observable
      if (tag.__.onUnmount) {
        tag.__.onUnmount();
      }

      // weird fix for a weird edge case #2409 and #2436
      // some users might use your software not as you've expected
      // so I need to add these dirty hacks to mitigate unexpected issues
      if (!tag.isMounted) {
        setMountState.call(tag, true);
      }

      setMountState.call(tag, false);

      delete tag.root._tag;

      return tag;
    });

    return tag;
  }

  /**
   * Detect the tag implementation by a DOM node
   * @param   { Object } dom - DOM node we need to parse to get its tag implementation
   * @returns { Object } it returns an object containing the implementation of a custom tag (template and boot function)
   */
  function getTag(dom) {
    return dom.tagName && __TAG_IMPL[getAttr(dom, IS_DIRECTIVE) || getAttr(dom, IS_DIRECTIVE) || dom.tagName.toLowerCase()];
  }

  /**
   * Move the position of a custom tag in its parent tag
   * @this Tag
   * @param   { String } tagName - key where the tag was stored
   * @param   { Number } newPos - index where the new tag will be stored
   */
  function moveChildTag(tagName, newPos) {
    var parent = this.parent;
    var tags;
    // no parent no move
    if (!parent) {
      return;
    }

    tags = parent.tags[tagName];

    if (isArray(tags)) {
      tags.splice(newPos, 0, tags.splice(tags.indexOf(this), 1)[0]);
    } else {
      arrayishAdd(parent.tags, tagName, this);
    }
  }

  /**
   * Create a new child tag including it correctly into its parent
   * @param   { Object } child - child tag implementation
   * @param   { Object } opts - tag options containing the DOM node where the tag will be mounted
   * @param   { String } innerHTML - inner html of the child node
   * @param   { Object } parent - instance of the parent tag including the child custom tag
   * @returns { Object } instance of the new child tag just created
   */
  function initChildTag(child, opts, innerHTML, parent) {
    var tag = createTag(child, opts, innerHTML);
    var tagName = opts.tagName || getTagName(opts.root, true);
    var ptag = getImmediateCustomParentTag(parent);
    // fix for the parent attribute in the looped elements
    defineProperty(tag, 'parent', ptag);
    // store the real parent tag
    // in some cases this could be different from the custom parent tag
    // for example in nested loops
    tag.__.parent = parent;

    // add this tag to the custom parent tag
    arrayishAdd(ptag.tags, tagName, tag);

    // and also to the real parent tag
    if (ptag !== parent) {
      arrayishAdd(parent.tags, tagName, tag);
    }

    return tag;
  }

  /**
   * Loop backward all the parents tree to detect the first custom parent tag
   * @param   { Object } tag - a Tag instance
   * @returns { Object } the instance of the first custom parent tag found
   */
  function getImmediateCustomParentTag(tag) {
    var ptag = tag;
    while (ptag.__.isAnonymous) {
      if (!ptag.parent) {
        break;
      }
      ptag = ptag.parent;
    }
    return ptag;
  }

  /**
   * Trigger the unmount method on all the expressions
   * @param   { Array } expressions - DOM expressions
   */
  function unmountAll(expressions) {
    each(expressions, function (expr) {
      if (expr.unmount) {
        expr.unmount(true);
      } else if (expr.tagName) {
        expr.tag.unmount(true);
      } else if (expr.unmount) {
        expr.unmount();
      }
    });
  }

  /**
   * Get the tag name of any DOM node
   * @param   { Object } dom - DOM node we want to parse
   * @param   { Boolean } skipDataIs - hack to ignore the data-is attribute when attaching to parent
   * @returns { String } name to identify this dom node in riot
   */
  function getTagName(dom, skipDataIs) {
    var child = getTag(dom);
    var namedTag = !skipDataIs && getAttr(dom, IS_DIRECTIVE);
    return namedTag && !tmpl.hasExpr(namedTag) ? namedTag : child ? child.name : dom.tagName.toLowerCase();
  }

  /**
   * Set the property of an object for a given key. If something already
   * exists there, then it becomes an array containing both the old and new value.
   * @param { Object } obj - object on which to set the property
   * @param { String } key - property name
   * @param { Object } value - the value of the property to be set
   * @param { Boolean } ensureArray - ensure that the property remains an array
   * @param { Number } index - add the new item in a certain array position
   */
  function arrayishAdd(obj, key, value, ensureArray, index) {
    var dest = obj[key];
    var isArr = isArray(dest);
    var hasIndex = !isUndefined(index);

    if (dest && dest === value) {
      return;
    }

    // if the key was never set, set it once
    if (!dest && ensureArray) {
      obj[key] = [value];
    } else if (!dest) {
      obj[key] = value;
    }
    // if it was an array and not yet set
    else {
        if (isArr) {
          var oldIndex = dest.indexOf(value);
          // this item never changed its position
          if (oldIndex === index) {
            return;
          }
          // remove the item from its old position
          if (oldIndex !== -1) {
            dest.splice(oldIndex, 1);
          }
          // move or add the item
          if (hasIndex) {
            dest.splice(index, 0, value);
          } else {
            dest.push(value);
          }
        } else {
          obj[key] = [dest, value];
        }
      }
  }

  /**
   * Removes an item from an object at a given key. If the key points to an array,
   * then the item is just removed from the array.
   * @param { Object } obj - object on which to remove the property
   * @param { String } key - property name
   * @param { Object } value - the value of the property to be removed
   * @param { Boolean } ensureArray - ensure that the property remains an array
  */
  function arrayishRemove(obj, key, value, ensureArray) {
    if (isArray(obj[key])) {
      var index = obj[key].indexOf(value);
      if (index !== -1) {
        obj[key].splice(index, 1);
      }
      if (!obj[key].length) {
        delete obj[key];
      } else if (obj[key].length === 1 && !ensureArray) {
        obj[key] = obj[key][0];
      }
    } else if (obj[key] === value) {
      delete obj[key];
    } // otherwise just delete the key
  }

  /**
   * Mount a tag creating new Tag instance
   * @param   { Object } root - dom node where the tag will be mounted
   * @param   { String } tagName - name of the riot tag we want to mount
   * @param   { Object } opts - options to pass to the Tag instance
   * @param   { Object } ctx - optional context that will be used to extend an existing class ( used in riot.Tag )
   * @returns { Tag } a new Tag instance
   */
  function mountTo(root, tagName, opts, ctx) {
    var impl = __TAG_IMPL[tagName];
    var implClass = __TAG_IMPL[tagName].class;
    var context = ctx || (implClass ? Object.create(implClass.prototype) : {});
    // cache the inner HTML to fix #855
    var innerHTML = root._innerHTML = root._innerHTML || root.innerHTML;
    var conf = extend({ root: root, opts: opts, context: context }, { parent: opts ? opts.parent : null });
    var tag;

    if (impl && root) {
      tag = createTag(impl, conf, innerHTML);
    }

    if (tag && tag.mount) {
      tag.mount(true);
      // add this tag to the virtualDom variable
      if (!contains(__TAGS_CACHE, tag)) {
        __TAGS_CACHE.push(tag);
      }
    }

    return tag;
  }

  /**
   * makes a tag virtual and replaces a reference in the dom
   * @this Tag
   * @param { tag } the tag to make virtual
   * @param { ref } the dom reference location
   */
  function makeReplaceVirtual(tag, ref) {
    var frag = createFrag();
    makeVirtual.call(tag, frag);
    ref.parentNode.replaceChild(frag, ref);
  }

  /**
   * Adds the elements for a virtual tag
   * @this Tag
   * @param { Node } src - the node that will do the inserting or appending
   * @param { Tag } target - only if inserting, insert before this tag's first child
   */
  function makeVirtual(src, target) {
    var this$1 = this;

    var head = createDOMPlaceholder();
    var tail = createDOMPlaceholder();
    var frag = createFrag();
    var sib;
    var el;

    this.root.insertBefore(head, this.root.firstChild);
    this.root.appendChild(tail);

    this.__.head = el = head;
    this.__.tail = tail;

    while (el) {
      sib = el.nextSibling;
      frag.appendChild(el);
      this$1.__.virts.push(el); // hold for unmounting
      el = sib;
    }

    if (target) {
      src.insertBefore(frag, target.__.head);
    } else {
      src.appendChild(frag);
    }
  }

  /**
   * Return a temporary context containing also the parent properties
   * @this Tag
   * @param { Tag } - temporary tag context containing all the parent properties
   */
  function inheritParentProps() {
    if (this.parent) {
      return extend(Object.create(this), this.parent);
    }
    return this;
  }

  /**
   * Move virtual tag and all child nodes
   * @this Tag
   * @param { Node } src  - the node that will do the inserting
   * @param { Tag } target - insert before this tag's first child
   */
  function moveVirtual(src, target) {
    var this$1 = this;

    var el = this.__.head;
    var sib;
    var frag = createFrag();

    while (el) {
      sib = el.nextSibling;
      frag.appendChild(el);
      el = sib;
      if (el === this$1.__.tail) {
        frag.appendChild(el);
        src.insertBefore(frag, target.__.head);
        break;
      }
    }
  }

  /**
   * Get selectors for tags
   * @param   { Array } tags - tag names to select
   * @returns { String } selector
   */
  function selectTags(tags) {
    // select all tags
    if (!tags) {
      var keys = Object.keys(__TAG_IMPL);
      return keys + selectTags(keys);
    }

    return tags.filter(function (t) {
      return !/[^-\w]/.test(t);
    }).reduce(function (list, t) {
      var name = t.trim().toLowerCase();
      return list + ",[" + IS_DIRECTIVE + "=\"" + name + "\"]";
    }, '');
  }

  var tags = Object.freeze({
    getTag: getTag,
    moveChildTag: moveChildTag,
    initChildTag: initChildTag,
    getImmediateCustomParentTag: getImmediateCustomParentTag,
    unmountAll: unmountAll,
    getTagName: getTagName,
    arrayishAdd: arrayishAdd,
    arrayishRemove: arrayishRemove,
    mountTo: mountTo,
    makeReplaceVirtual: makeReplaceVirtual,
    makeVirtual: makeVirtual,
    inheritParentProps: inheritParentProps,
    moveVirtual: moveVirtual,
    selectTags: selectTags
  });

  /**
   * Riot public api
   */
  var settings = settings$1;
  var util = {
    tmpl: tmpl,
    brackets: brackets,
    styleManager: styleManager,
    vdom: __TAGS_CACHE,
    styleNode: styleManager.styleNode,
    // export the riot internal utils as well
    dom: dom,
    check: check,
    misc: misc,
    tags: tags
  };

  // export the core props/methods
  var Tag = Tag$1;
  var tag = tag$1;
  var tag2 = tag2$1;
  var mount = mount$1;
  var mixin = mixin$1;
  var update = update$1;
  var unregister = unregister$1;
  var version = version$1;
  var observable = observable$1;

  var riot$1 = extend({}, core, {
    observable: observable$1,
    settings: settings,
    util: util
  });

  exports.settings = settings;
  exports.util = util;
  exports.Tag = Tag;
  exports.tag = tag;
  exports.tag2 = tag2;
  exports.mount = mount;
  exports.mixin = mixin;
  exports.update = update;
  exports.unregister = unregister;
  exports.version = version;
  exports.observable = observable;
  exports['default'] = riot$1;

  Object.defineProperty(exports, '__esModule', { value: true });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./blaze.min.css", function() {
			var newContent = require("!!../../css-loader/index.js!./blaze.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/*!v3.6.3*/@charset \"UTF-8\";html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}body{margin:0}.o-container{margin:auto}@media (min-width:20em){.o-container--xsmall\\@xsmall{max-width:20em}.o-container--small\\@xsmall{max-width:30em}.o-container--medium\\@xsmall{max-width:48em}.o-container--large\\@xsmall{max-width:64em}.o-container--xlarge\\@xsmall{max-width:78em}.o-container--super\\@xsmall{max-width:116em}}@media (min-width:30em){.o-container--xsmall\\@small{max-width:20em}.o-container--small\\@small{max-width:30em}.o-container--medium\\@small{max-width:48em}.o-container--large\\@small{max-width:64em}.o-container--xlarge\\@small{max-width:78em}.o-container--super\\@small{max-width:116em}}@media (min-width:48em){.o-container--xsmall\\@medium{max-width:20em}.o-container--small\\@medium{max-width:30em}.o-container--medium\\@medium{max-width:48em}.o-container--large\\@medium{max-width:64em}.o-container--xlarge\\@medium{max-width:78em}.o-container--super\\@medium{max-width:116em}}@media (min-width:64em){.o-container--xsmall\\@large{max-width:20em}.o-container--small\\@large{max-width:30em}.o-container--medium\\@large{max-width:48em}.o-container--large\\@large{max-width:64em}.o-container--xlarge\\@large{max-width:78em}.o-container--super\\@large{max-width:116em}}@media (min-width:78em){.o-container--xsmall\\@xlarge{max-width:20em}.o-container--small\\@xlarge{max-width:30em}.o-container--medium\\@xlarge{max-width:48em}.o-container--large\\@xlarge{max-width:64em}.o-container--xlarge\\@xlarge{max-width:78em}.o-container--super\\@xlarge{max-width:116em}}@media (min-width:116em){.o-container--xsmall\\@super{max-width:20em}.o-container--small\\@super{max-width:30em}.o-container--medium\\@super{max-width:48em}.o-container--large\\@super{max-width:64em}.o-container--xlarge\\@super{max-width:78em}.o-container--super\\@super{max-width:116em}}.o-container--xsmall{max-width:20em}.o-container--small{max-width:30em}.o-container--medium{max-width:48em}.o-container--large{max-width:64em}.o-container--xlarge{max-width:78em}.o-container--super{max-width:116em}.o-grid{display:-ms-flexbox;display:flex}.o-grid--wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.o-grid--top{-ms-flex-align:start;align-items:flex-start}.o-grid--center{-ms-flex-align:center;align-items:center}.o-grid--bottom{-ms-flex-align:end;align-items:flex-end}.o-grid--full{-ms-flex-wrap:wrap;flex-wrap:wrap}.o-grid--full>.o-grid__cell{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;margin-left:0}.o-grid--no-gutter>.o-grid__cell{padding-right:.001em;padding-left:.001em}.o-grid__cell{-ms-flex:1;flex:1;padding-right:1em;padding-left:1em}.o-grid__cell--width-5{-ms-flex:0 0 5%;flex:0 0 5%;max-width:5%}.o-grid__cell--offset-5{margin-left:5%}.o-grid__cell--width-10{-ms-flex:0 0 10%;flex:0 0 10%;max-width:10%}.o-grid__cell--offset-10{margin-left:10%}.o-grid__cell--width-15{-ms-flex:0 0 15%;flex:0 0 15%;max-width:15%}.o-grid__cell--offset-15{margin-left:15%}.o-grid__cell--width-20{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.o-grid__cell--offset-20{margin-left:20%}.o-grid__cell--width-25{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.o-grid__cell--offset-25{margin-left:25%}.o-grid__cell--width-30{-ms-flex:0 0 30%;flex:0 0 30%;max-width:30%}.o-grid__cell--offset-30{margin-left:30%}.o-grid__cell--width-33{-ms-flex:0 0 33.33333%;flex:0 0 33.33333%;max-width:33.33333%}.o-grid__cell--offset-33{margin-left:33.33333%}.o-grid__cell--width-35{-ms-flex:0 0 35%;flex:0 0 35%;max-width:35%}.o-grid__cell--offset-35{margin-left:35%}.o-grid__cell--width-40{-ms-flex:0 0 40%;flex:0 0 40%;max-width:40%}.o-grid__cell--offset-40{margin-left:40%}.o-grid__cell--width-45{-ms-flex:0 0 45%;flex:0 0 45%;max-width:45%}.o-grid__cell--offset-45{margin-left:45%}.o-grid__cell--width-50{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.o-grid__cell--offset-50{margin-left:50%}.o-grid__cell--width-55{-ms-flex:0 0 55%;flex:0 0 55%;max-width:55%}.o-grid__cell--offset-55{margin-left:55%}.o-grid__cell--width-60{-ms-flex:0 0 60%;flex:0 0 60%;max-width:60%}.o-grid__cell--offset-60{margin-left:60%}.o-grid__cell--width-65{-ms-flex:0 0 65%;flex:0 0 65%;max-width:65%}.o-grid__cell--offset-65{margin-left:65%}.o-grid__cell--width-66{-ms-flex:0 0 66.66667%;flex:0 0 66.66667%;max-width:66.66667%}.o-grid__cell--offset-66{margin-left:66.66667%}.o-grid__cell--width-70{-ms-flex:0 0 70%;flex:0 0 70%;max-width:70%}.o-grid__cell--offset-70{margin-left:70%}.o-grid__cell--width-75{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.o-grid__cell--offset-75{margin-left:75%}.o-grid__cell--width-80{-ms-flex:0 0 80%;flex:0 0 80%;max-width:80%}.o-grid__cell--offset-80{margin-left:80%}.o-grid__cell--width-85{-ms-flex:0 0 85%;flex:0 0 85%;max-width:85%}.o-grid__cell--offset-85{margin-left:85%}.o-grid__cell--width-90{-ms-flex:0 0 90%;flex:0 0 90%;max-width:90%}.o-grid__cell--offset-90{margin-left:90%}.o-grid__cell--width-95{-ms-flex:0 0 95%;flex:0 0 95%;max-width:95%}.o-grid__cell--offset-95{margin-left:95%}.o-grid__cell--width-100{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.o-grid__cell--offset-100{margin-left:100%}.o-grid__cell--top{-ms-flex-item-align:start;align-self:flex-start}.o-grid__cell--center{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.o-grid__cell--bottom{-ms-flex-item-align:end;align-self:flex-end}.o-grid__cell--no-gutter{padding-right:.001em;padding-left:.001em}.o-grid__cell--width-fixed{-ms-flex:0 1 auto;flex:0 1 auto}.o-grid__cell--hidden{display:none}.o-grid__cell--visible{display:initial}@media (max-width:19.99em){.o-grid.o-grid--xsmall-fit>.o-grid__cell:not([class*=o-grid__cell--width]){-ms-flex:1;flex:1}.o-grid.o-grid--xsmall-full{-ms-flex-wrap:wrap;flex-wrap:wrap}.o-grid.o-grid--xsmall-full>.o-grid__cell{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;margin-left:0}}@media (min-width:20em) and (max-width:29.99em){.o-grid.o-grid--small-fit>.o-grid__cell:not([class*=o-grid__cell--width]){-ms-flex:1;flex:1}.o-grid.o-grid--small-full{-ms-flex-wrap:wrap;flex-wrap:wrap}.o-grid.o-grid--small-full>.o-grid__cell{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;margin-left:0}}@media (min-width:30em) and (max-width:47.99em){.o-grid.o-grid--medium-fit>.o-grid__cell:not([class*=o-grid__cell--width]){-ms-flex:1;flex:1}.o-grid.o-grid--medium-full{-ms-flex-wrap:wrap;flex-wrap:wrap}.o-grid.o-grid--medium-full>.o-grid__cell{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;margin-left:0}}@media (min-width:48em) and (max-width:63.99em){.o-grid.o-grid--large-fit>.o-grid__cell:not([class*=o-grid__cell--width]){-ms-flex:1;flex:1}.o-grid.o-grid--large-full{-ms-flex-wrap:wrap;flex-wrap:wrap}.o-grid.o-grid--large-full>.o-grid__cell{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;margin-left:0}}@media (min-width:64em) and (max-width:77.99em){.o-grid.o-grid--xlarge-fit>.o-grid__cell:not([class*=o-grid__cell--width]){-ms-flex:1;flex:1}.o-grid.o-grid--xlarge-full{-ms-flex-wrap:wrap;flex-wrap:wrap}.o-grid.o-grid--xlarge-full>.o-grid__cell{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;margin-left:0}}@media (min-width:64em){.o-grid.o-grid--super-fit>.o-grid__cell:not([class*=o-grid__cell--width]){-ms-flex:1;flex:1}.o-grid.o-grid--super-full{-ms-flex-wrap:wrap;flex-wrap:wrap}.o-grid.o-grid--super-full>.o-grid__cell{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;margin-left:0}}@media (min-width:20em){.o-grid__cell--width-5\\@xsmall{-ms-flex:0 0 5%;flex:0 0 5%;max-width:5%}.o-grid__cell--offset-5\\@xsmall{margin-left:5%}.o-grid__cell--width-10\\@xsmall{-ms-flex:0 0 10%;flex:0 0 10%;max-width:10%}.o-grid__cell--offset-10\\@xsmall{margin-left:10%}.o-grid__cell--width-15\\@xsmall{-ms-flex:0 0 15%;flex:0 0 15%;max-width:15%}.o-grid__cell--offset-15\\@xsmall{margin-left:15%}.o-grid__cell--width-20\\@xsmall{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.o-grid__cell--offset-20\\@xsmall{margin-left:20%}.o-grid__cell--width-25\\@xsmall{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.o-grid__cell--offset-25\\@xsmall{margin-left:25%}.o-grid__cell--width-30\\@xsmall{-ms-flex:0 0 30%;flex:0 0 30%;max-width:30%}.o-grid__cell--offset-30\\@xsmall{margin-left:30%}.o-grid__cell--width-33\\@xsmall{-ms-flex:0 0 33.33333%;flex:0 0 33.33333%;max-width:33.33333%}.o-grid__cell--offset-33\\@xsmall{margin-left:33.33333%}.o-grid__cell--width-35\\@xsmall{-ms-flex:0 0 35%;flex:0 0 35%;max-width:35%}.o-grid__cell--offset-35\\@xsmall{margin-left:35%}.o-grid__cell--width-40\\@xsmall{-ms-flex:0 0 40%;flex:0 0 40%;max-width:40%}.o-grid__cell--offset-40\\@xsmall{margin-left:40%}.o-grid__cell--width-45\\@xsmall{-ms-flex:0 0 45%;flex:0 0 45%;max-width:45%}.o-grid__cell--offset-45\\@xsmall{margin-left:45%}.o-grid__cell--width-50\\@xsmall{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.o-grid__cell--offset-50\\@xsmall{margin-left:50%}.o-grid__cell--width-55\\@xsmall{-ms-flex:0 0 55%;flex:0 0 55%;max-width:55%}.o-grid__cell--offset-55\\@xsmall{margin-left:55%}.o-grid__cell--width-60\\@xsmall{-ms-flex:0 0 60%;flex:0 0 60%;max-width:60%}.o-grid__cell--offset-60\\@xsmall{margin-left:60%}.o-grid__cell--width-65\\@xsmall{-ms-flex:0 0 65%;flex:0 0 65%;max-width:65%}.o-grid__cell--offset-65\\@xsmall{margin-left:65%}.o-grid__cell--width-66\\@xsmall{-ms-flex:0 0 66.66667%;flex:0 0 66.66667%;max-width:66.66667%}.o-grid__cell--offset-66\\@xsmall{margin-left:66.66667%}.o-grid__cell--width-70\\@xsmall{-ms-flex:0 0 70%;flex:0 0 70%;max-width:70%}.o-grid__cell--offset-70\\@xsmall{margin-left:70%}.o-grid__cell--width-75\\@xsmall{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.o-grid__cell--offset-75\\@xsmall{margin-left:75%}.o-grid__cell--width-80\\@xsmall{-ms-flex:0 0 80%;flex:0 0 80%;max-width:80%}.o-grid__cell--offset-80\\@xsmall{margin-left:80%}.o-grid__cell--width-85\\@xsmall{-ms-flex:0 0 85%;flex:0 0 85%;max-width:85%}.o-grid__cell--offset-85\\@xsmall{margin-left:85%}.o-grid__cell--width-90\\@xsmall{-ms-flex:0 0 90%;flex:0 0 90%;max-width:90%}.o-grid__cell--offset-90\\@xsmall{margin-left:90%}.o-grid__cell--width-95\\@xsmall{-ms-flex:0 0 95%;flex:0 0 95%;max-width:95%}.o-grid__cell--offset-95\\@xsmall{margin-left:95%}.o-grid__cell--hidden\\@xsmall{display:none}.o-grid__cell--visible\\@xsmall{display:initial}.o-grid__cell--width-100\\@xsmall{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.o-grid__cell--offset-100\\@xsmall{margin-left:100%}.o-grid__cell--width-fixed\\@xsmall{-ms-flex:0 1 auto;flex:0 1 auto}}@media (min-width:30em){.o-grid__cell--width-5\\@small{-ms-flex:0 0 5%;flex:0 0 5%;max-width:5%}.o-grid__cell--offset-5\\@small{margin-left:5%}.o-grid__cell--width-10\\@small{-ms-flex:0 0 10%;flex:0 0 10%;max-width:10%}.o-grid__cell--offset-10\\@small{margin-left:10%}.o-grid__cell--width-15\\@small{-ms-flex:0 0 15%;flex:0 0 15%;max-width:15%}.o-grid__cell--offset-15\\@small{margin-left:15%}.o-grid__cell--width-20\\@small{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.o-grid__cell--offset-20\\@small{margin-left:20%}.o-grid__cell--width-25\\@small{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.o-grid__cell--offset-25\\@small{margin-left:25%}.o-grid__cell--width-30\\@small{-ms-flex:0 0 30%;flex:0 0 30%;max-width:30%}.o-grid__cell--offset-30\\@small{margin-left:30%}.o-grid__cell--width-33\\@small{-ms-flex:0 0 33.33333%;flex:0 0 33.33333%;max-width:33.33333%}.o-grid__cell--offset-33\\@small{margin-left:33.33333%}.o-grid__cell--width-35\\@small{-ms-flex:0 0 35%;flex:0 0 35%;max-width:35%}.o-grid__cell--offset-35\\@small{margin-left:35%}.o-grid__cell--width-40\\@small{-ms-flex:0 0 40%;flex:0 0 40%;max-width:40%}.o-grid__cell--offset-40\\@small{margin-left:40%}.o-grid__cell--width-45\\@small{-ms-flex:0 0 45%;flex:0 0 45%;max-width:45%}.o-grid__cell--offset-45\\@small{margin-left:45%}.o-grid__cell--width-50\\@small{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.o-grid__cell--offset-50\\@small{margin-left:50%}.o-grid__cell--width-55\\@small{-ms-flex:0 0 55%;flex:0 0 55%;max-width:55%}.o-grid__cell--offset-55\\@small{margin-left:55%}.o-grid__cell--width-60\\@small{-ms-flex:0 0 60%;flex:0 0 60%;max-width:60%}.o-grid__cell--offset-60\\@small{margin-left:60%}.o-grid__cell--width-65\\@small{-ms-flex:0 0 65%;flex:0 0 65%;max-width:65%}.o-grid__cell--offset-65\\@small{margin-left:65%}.o-grid__cell--width-66\\@small{-ms-flex:0 0 66.66667%;flex:0 0 66.66667%;max-width:66.66667%}.o-grid__cell--offset-66\\@small{margin-left:66.66667%}.o-grid__cell--width-70\\@small{-ms-flex:0 0 70%;flex:0 0 70%;max-width:70%}.o-grid__cell--offset-70\\@small{margin-left:70%}.o-grid__cell--width-75\\@small{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.o-grid__cell--offset-75\\@small{margin-left:75%}.o-grid__cell--width-80\\@small{-ms-flex:0 0 80%;flex:0 0 80%;max-width:80%}.o-grid__cell--offset-80\\@small{margin-left:80%}.o-grid__cell--width-85\\@small{-ms-flex:0 0 85%;flex:0 0 85%;max-width:85%}.o-grid__cell--offset-85\\@small{margin-left:85%}.o-grid__cell--width-90\\@small{-ms-flex:0 0 90%;flex:0 0 90%;max-width:90%}.o-grid__cell--offset-90\\@small{margin-left:90%}.o-grid__cell--width-95\\@small{-ms-flex:0 0 95%;flex:0 0 95%;max-width:95%}.o-grid__cell--offset-95\\@small{margin-left:95%}.o-grid__cell--hidden\\@small{display:none}.o-grid__cell--visible\\@small{display:initial}.o-grid__cell--width-100\\@small{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.o-grid__cell--offset-100\\@small{margin-left:100%}.o-grid__cell--width-fixed\\@small{-ms-flex:0 1 auto;flex:0 1 auto}}@media (min-width:48em){.o-grid__cell--width-5\\@medium{-ms-flex:0 0 5%;flex:0 0 5%;max-width:5%}.o-grid__cell--offset-5\\@medium{margin-left:5%}.o-grid__cell--width-10\\@medium{-ms-flex:0 0 10%;flex:0 0 10%;max-width:10%}.o-grid__cell--offset-10\\@medium{margin-left:10%}.o-grid__cell--width-15\\@medium{-ms-flex:0 0 15%;flex:0 0 15%;max-width:15%}.o-grid__cell--offset-15\\@medium{margin-left:15%}.o-grid__cell--width-20\\@medium{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.o-grid__cell--offset-20\\@medium{margin-left:20%}.o-grid__cell--width-25\\@medium{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.o-grid__cell--offset-25\\@medium{margin-left:25%}.o-grid__cell--width-30\\@medium{-ms-flex:0 0 30%;flex:0 0 30%;max-width:30%}.o-grid__cell--offset-30\\@medium{margin-left:30%}.o-grid__cell--width-33\\@medium{-ms-flex:0 0 33.33333%;flex:0 0 33.33333%;max-width:33.33333%}.o-grid__cell--offset-33\\@medium{margin-left:33.33333%}.o-grid__cell--width-35\\@medium{-ms-flex:0 0 35%;flex:0 0 35%;max-width:35%}.o-grid__cell--offset-35\\@medium{margin-left:35%}.o-grid__cell--width-40\\@medium{-ms-flex:0 0 40%;flex:0 0 40%;max-width:40%}.o-grid__cell--offset-40\\@medium{margin-left:40%}.o-grid__cell--width-45\\@medium{-ms-flex:0 0 45%;flex:0 0 45%;max-width:45%}.o-grid__cell--offset-45\\@medium{margin-left:45%}.o-grid__cell--width-50\\@medium{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.o-grid__cell--offset-50\\@medium{margin-left:50%}.o-grid__cell--width-55\\@medium{-ms-flex:0 0 55%;flex:0 0 55%;max-width:55%}.o-grid__cell--offset-55\\@medium{margin-left:55%}.o-grid__cell--width-60\\@medium{-ms-flex:0 0 60%;flex:0 0 60%;max-width:60%}.o-grid__cell--offset-60\\@medium{margin-left:60%}.o-grid__cell--width-65\\@medium{-ms-flex:0 0 65%;flex:0 0 65%;max-width:65%}.o-grid__cell--offset-65\\@medium{margin-left:65%}.o-grid__cell--width-66\\@medium{-ms-flex:0 0 66.66667%;flex:0 0 66.66667%;max-width:66.66667%}.o-grid__cell--offset-66\\@medium{margin-left:66.66667%}.o-grid__cell--width-70\\@medium{-ms-flex:0 0 70%;flex:0 0 70%;max-width:70%}.o-grid__cell--offset-70\\@medium{margin-left:70%}.o-grid__cell--width-75\\@medium{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.o-grid__cell--offset-75\\@medium{margin-left:75%}.o-grid__cell--width-80\\@medium{-ms-flex:0 0 80%;flex:0 0 80%;max-width:80%}.o-grid__cell--offset-80\\@medium{margin-left:80%}.o-grid__cell--width-85\\@medium{-ms-flex:0 0 85%;flex:0 0 85%;max-width:85%}.o-grid__cell--offset-85\\@medium{margin-left:85%}.o-grid__cell--width-90\\@medium{-ms-flex:0 0 90%;flex:0 0 90%;max-width:90%}.o-grid__cell--offset-90\\@medium{margin-left:90%}.o-grid__cell--width-95\\@medium{-ms-flex:0 0 95%;flex:0 0 95%;max-width:95%}.o-grid__cell--offset-95\\@medium{margin-left:95%}.o-grid__cell--hidden\\@medium{display:none}.o-grid__cell--visible\\@medium{display:initial}.o-grid__cell--width-100\\@medium{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.o-grid__cell--offset-100\\@medium{margin-left:100%}.o-grid__cell--width-fixed\\@medium{-ms-flex:0 1 auto;flex:0 1 auto}}@media (min-width:64em){.o-grid__cell--width-5\\@large{-ms-flex:0 0 5%;flex:0 0 5%;max-width:5%}.o-grid__cell--offset-5\\@large{margin-left:5%}.o-grid__cell--width-10\\@large{-ms-flex:0 0 10%;flex:0 0 10%;max-width:10%}.o-grid__cell--offset-10\\@large{margin-left:10%}.o-grid__cell--width-15\\@large{-ms-flex:0 0 15%;flex:0 0 15%;max-width:15%}.o-grid__cell--offset-15\\@large{margin-left:15%}.o-grid__cell--width-20\\@large{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.o-grid__cell--offset-20\\@large{margin-left:20%}.o-grid__cell--width-25\\@large{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.o-grid__cell--offset-25\\@large{margin-left:25%}.o-grid__cell--width-30\\@large{-ms-flex:0 0 30%;flex:0 0 30%;max-width:30%}.o-grid__cell--offset-30\\@large{margin-left:30%}.o-grid__cell--width-33\\@large{-ms-flex:0 0 33.33333%;flex:0 0 33.33333%;max-width:33.33333%}.o-grid__cell--offset-33\\@large{margin-left:33.33333%}.o-grid__cell--width-35\\@large{-ms-flex:0 0 35%;flex:0 0 35%;max-width:35%}.o-grid__cell--offset-35\\@large{margin-left:35%}.o-grid__cell--width-40\\@large{-ms-flex:0 0 40%;flex:0 0 40%;max-width:40%}.o-grid__cell--offset-40\\@large{margin-left:40%}.o-grid__cell--width-45\\@large{-ms-flex:0 0 45%;flex:0 0 45%;max-width:45%}.o-grid__cell--offset-45\\@large{margin-left:45%}.o-grid__cell--width-50\\@large{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.o-grid__cell--offset-50\\@large{margin-left:50%}.o-grid__cell--width-55\\@large{-ms-flex:0 0 55%;flex:0 0 55%;max-width:55%}.o-grid__cell--offset-55\\@large{margin-left:55%}.o-grid__cell--width-60\\@large{-ms-flex:0 0 60%;flex:0 0 60%;max-width:60%}.o-grid__cell--offset-60\\@large{margin-left:60%}.o-grid__cell--width-65\\@large{-ms-flex:0 0 65%;flex:0 0 65%;max-width:65%}.o-grid__cell--offset-65\\@large{margin-left:65%}.o-grid__cell--width-66\\@large{-ms-flex:0 0 66.66667%;flex:0 0 66.66667%;max-width:66.66667%}.o-grid__cell--offset-66\\@large{margin-left:66.66667%}.o-grid__cell--width-70\\@large{-ms-flex:0 0 70%;flex:0 0 70%;max-width:70%}.o-grid__cell--offset-70\\@large{margin-left:70%}.o-grid__cell--width-75\\@large{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.o-grid__cell--offset-75\\@large{margin-left:75%}.o-grid__cell--width-80\\@large{-ms-flex:0 0 80%;flex:0 0 80%;max-width:80%}.o-grid__cell--offset-80\\@large{margin-left:80%}.o-grid__cell--width-85\\@large{-ms-flex:0 0 85%;flex:0 0 85%;max-width:85%}.o-grid__cell--offset-85\\@large{margin-left:85%}.o-grid__cell--width-90\\@large{-ms-flex:0 0 90%;flex:0 0 90%;max-width:90%}.o-grid__cell--offset-90\\@large{margin-left:90%}.o-grid__cell--width-95\\@large{-ms-flex:0 0 95%;flex:0 0 95%;max-width:95%}.o-grid__cell--offset-95\\@large{margin-left:95%}.o-grid__cell--hidden\\@large{display:none}.o-grid__cell--visible\\@large{display:initial}.o-grid__cell--width-100\\@large{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.o-grid__cell--offset-100\\@large{margin-left:100%}.o-grid__cell--width-fixed\\@large{-ms-flex:0 1 auto;flex:0 1 auto}}@media (min-width:78em){.o-grid__cell--width-5\\@xlarge{-ms-flex:0 0 5%;flex:0 0 5%;max-width:5%}.o-grid__cell--offset-5\\@xlarge{margin-left:5%}.o-grid__cell--width-10\\@xlarge{-ms-flex:0 0 10%;flex:0 0 10%;max-width:10%}.o-grid__cell--offset-10\\@xlarge{margin-left:10%}.o-grid__cell--width-15\\@xlarge{-ms-flex:0 0 15%;flex:0 0 15%;max-width:15%}.o-grid__cell--offset-15\\@xlarge{margin-left:15%}.o-grid__cell--width-20\\@xlarge{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.o-grid__cell--offset-20\\@xlarge{margin-left:20%}.o-grid__cell--width-25\\@xlarge{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.o-grid__cell--offset-25\\@xlarge{margin-left:25%}.o-grid__cell--width-30\\@xlarge{-ms-flex:0 0 30%;flex:0 0 30%;max-width:30%}.o-grid__cell--offset-30\\@xlarge{margin-left:30%}.o-grid__cell--width-33\\@xlarge{-ms-flex:0 0 33.33333%;flex:0 0 33.33333%;max-width:33.33333%}.o-grid__cell--offset-33\\@xlarge{margin-left:33.33333%}.o-grid__cell--width-35\\@xlarge{-ms-flex:0 0 35%;flex:0 0 35%;max-width:35%}.o-grid__cell--offset-35\\@xlarge{margin-left:35%}.o-grid__cell--width-40\\@xlarge{-ms-flex:0 0 40%;flex:0 0 40%;max-width:40%}.o-grid__cell--offset-40\\@xlarge{margin-left:40%}.o-grid__cell--width-45\\@xlarge{-ms-flex:0 0 45%;flex:0 0 45%;max-width:45%}.o-grid__cell--offset-45\\@xlarge{margin-left:45%}.o-grid__cell--width-50\\@xlarge{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.o-grid__cell--offset-50\\@xlarge{margin-left:50%}.o-grid__cell--width-55\\@xlarge{-ms-flex:0 0 55%;flex:0 0 55%;max-width:55%}.o-grid__cell--offset-55\\@xlarge{margin-left:55%}.o-grid__cell--width-60\\@xlarge{-ms-flex:0 0 60%;flex:0 0 60%;max-width:60%}.o-grid__cell--offset-60\\@xlarge{margin-left:60%}.o-grid__cell--width-65\\@xlarge{-ms-flex:0 0 65%;flex:0 0 65%;max-width:65%}.o-grid__cell--offset-65\\@xlarge{margin-left:65%}.o-grid__cell--width-66\\@xlarge{-ms-flex:0 0 66.66667%;flex:0 0 66.66667%;max-width:66.66667%}.o-grid__cell--offset-66\\@xlarge{margin-left:66.66667%}.o-grid__cell--width-70\\@xlarge{-ms-flex:0 0 70%;flex:0 0 70%;max-width:70%}.o-grid__cell--offset-70\\@xlarge{margin-left:70%}.o-grid__cell--width-75\\@xlarge{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.o-grid__cell--offset-75\\@xlarge{margin-left:75%}.o-grid__cell--width-80\\@xlarge{-ms-flex:0 0 80%;flex:0 0 80%;max-width:80%}.o-grid__cell--offset-80\\@xlarge{margin-left:80%}.o-grid__cell--width-85\\@xlarge{-ms-flex:0 0 85%;flex:0 0 85%;max-width:85%}.o-grid__cell--offset-85\\@xlarge{margin-left:85%}.o-grid__cell--width-90\\@xlarge{-ms-flex:0 0 90%;flex:0 0 90%;max-width:90%}.o-grid__cell--offset-90\\@xlarge{margin-left:90%}.o-grid__cell--width-95\\@xlarge{-ms-flex:0 0 95%;flex:0 0 95%;max-width:95%}.o-grid__cell--offset-95\\@xlarge{margin-left:95%}.o-grid__cell--hidden\\@xlarge{display:none}.o-grid__cell--visible\\@xlarge{display:initial}.o-grid__cell--width-100\\@xlarge{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.o-grid__cell--offset-100\\@xlarge{margin-left:100%}.o-grid__cell--width-fixed\\@xlarge{-ms-flex:0 1 auto;flex:0 1 auto}}@media (min-width:116em){.o-grid__cell--width-5\\@super{-ms-flex:0 0 5%;flex:0 0 5%;max-width:5%}.o-grid__cell--offset-5\\@super{margin-left:5%}.o-grid__cell--width-10\\@super{-ms-flex:0 0 10%;flex:0 0 10%;max-width:10%}.o-grid__cell--offset-10\\@super{margin-left:10%}.o-grid__cell--width-15\\@super{-ms-flex:0 0 15%;flex:0 0 15%;max-width:15%}.o-grid__cell--offset-15\\@super{margin-left:15%}.o-grid__cell--width-20\\@super{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.o-grid__cell--offset-20\\@super{margin-left:20%}.o-grid__cell--width-25\\@super{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.o-grid__cell--offset-25\\@super{margin-left:25%}.o-grid__cell--width-30\\@super{-ms-flex:0 0 30%;flex:0 0 30%;max-width:30%}.o-grid__cell--offset-30\\@super{margin-left:30%}.o-grid__cell--width-33\\@super{-ms-flex:0 0 33.33333%;flex:0 0 33.33333%;max-width:33.33333%}.o-grid__cell--offset-33\\@super{margin-left:33.33333%}.o-grid__cell--width-35\\@super{-ms-flex:0 0 35%;flex:0 0 35%;max-width:35%}.o-grid__cell--offset-35\\@super{margin-left:35%}.o-grid__cell--width-40\\@super{-ms-flex:0 0 40%;flex:0 0 40%;max-width:40%}.o-grid__cell--offset-40\\@super{margin-left:40%}.o-grid__cell--width-45\\@super{-ms-flex:0 0 45%;flex:0 0 45%;max-width:45%}.o-grid__cell--offset-45\\@super{margin-left:45%}.o-grid__cell--width-50\\@super{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.o-grid__cell--offset-50\\@super{margin-left:50%}.o-grid__cell--width-55\\@super{-ms-flex:0 0 55%;flex:0 0 55%;max-width:55%}.o-grid__cell--offset-55\\@super{margin-left:55%}.o-grid__cell--width-60\\@super{-ms-flex:0 0 60%;flex:0 0 60%;max-width:60%}.o-grid__cell--offset-60\\@super{margin-left:60%}.o-grid__cell--width-65\\@super{-ms-flex:0 0 65%;flex:0 0 65%;max-width:65%}.o-grid__cell--offset-65\\@super{margin-left:65%}.o-grid__cell--width-66\\@super{-ms-flex:0 0 66.66667%;flex:0 0 66.66667%;max-width:66.66667%}.o-grid__cell--offset-66\\@super{margin-left:66.66667%}.o-grid__cell--width-70\\@super{-ms-flex:0 0 70%;flex:0 0 70%;max-width:70%}.o-grid__cell--offset-70\\@super{margin-left:70%}.o-grid__cell--width-75\\@super{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.o-grid__cell--offset-75\\@super{margin-left:75%}.o-grid__cell--width-80\\@super{-ms-flex:0 0 80%;flex:0 0 80%;max-width:80%}.o-grid__cell--offset-80\\@super{margin-left:80%}.o-grid__cell--width-85\\@super{-ms-flex:0 0 85%;flex:0 0 85%;max-width:85%}.o-grid__cell--offset-85\\@super{margin-left:85%}.o-grid__cell--width-90\\@super{-ms-flex:0 0 90%;flex:0 0 90%;max-width:90%}.o-grid__cell--offset-90\\@super{margin-left:90%}.o-grid__cell--width-95\\@super{-ms-flex:0 0 95%;flex:0 0 95%;max-width:95%}.o-grid__cell--offset-95\\@super{margin-left:95%}.o-grid__cell--hidden\\@super{display:none}.o-grid__cell--visible\\@super{display:initial}.o-grid__cell--width-100\\@super{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.o-grid__cell--offset-100\\@super{margin-left:100%}.o-grid__cell--width-fixed\\@super{-ms-flex:0 1 auto;flex:0 1 auto}}.o-image{display:block;max-width:100%;height:auto}.o-panel-container{position:relative}.o-panel{position:absolute;top:0;right:0;bottom:0;left:0;overflow:auto;-webkit-overflow-scrolling:touch}.o-panel--nav-top{top:3.55em}.o-panel--nav-bottom{bottom:3.55em}.c-card__body .o-panel{padding:.5em}.o-media{display:-ms-flexbox;display:flex}.o-media .c-heading{padding:0}.o-media__body,.o-media__image{-ms-flex:1;flex:1;padding-right:1em;padding-left:1em;padding-right:.001em;padding-left:.001em}.o-media__body--top,.o-media__image--top{-ms-flex-item-align:start;align-self:flex-start}.o-media__body--center,.o-media__image--center{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.o-media__body--bottom,.o-media__image--bottom{-ms-flex-item-align:end;align-self:flex-end}.o-media__image{-ms-flex:0 1 auto;flex:0 1 auto;width:3em}.o-media__body{margin-left:.5em}.o-fieldset,.o-fieldset.c-list{display:block;width:100%;margin:.5em 0;padding:0;border:0}.o-fieldset__legend{display:block;width:100%;padding:1em 0;cursor:pointer;padding:.25em 0}.o-form-element{position:relative;padding:1em 0}.o-form-element .c-label:first-child{padding:0 0 .5em}.o-modal{display:block;position:fixed;top:50%;left:50%;width:80%;transform:translate(-50%,-50%);border:0 solid #96a8b2;border-radius:4px;background-color:#fff;overflow:hidden;z-index:500}.o-modal .c-card{background-color:transparent;box-shadow:none}.o-modal .c-card__body{position:relative}.o-modal--ghost{background-color:transparent;color:#fff}.o-modal--ghost .c-heading{color:#fff}.o-modal--full{top:1em;left:1em;width:calc(100% - 2em);height:calc(100% - 2em);transform:none}.o-modal--full .c-card__body{position:absolute;top:2.5em;bottom:3.5em;width:100%;overflow-x:hidden;overflow-y:auto}.o-modal--full .c-card__footer{position:absolute;bottom:0;width:100%}.o-drawer{position:absolute;background-color:#fff;color:#111;z-index:500;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}.o-drawer>.c-card{background-color:transparent;box-shadow:none}.o-drawer:not(.o-drawer--visible).u-high,.o-drawer:not(.o-drawer--visible).u-higher,.o-drawer:not(.o-drawer--visible).u-highest{box-shadow:none}.o-drawer--bottom,.o-drawer--top{left:0;width:80%;height:auto;margin-left:10%;transform:translate(0)}.o-drawer--bottom{top:100%;border-radius:4px 4px 0 0}.o-drawer--bottom.o-drawer--visible{transform:translateY(-99%)}.o-drawer--top{bottom:100%;border-radius:0 0 4px 4px}.o-drawer--top.o-drawer--visible{transform:translateY(99%)}.o-drawer--left,.o-drawer--right{top:0;width:260px;height:100%}.o-drawer--left .c-card__footer--block,.o-drawer--right .c-card__footer--block{position:absolute;bottom:0;width:100%}.o-drawer--left .c-card__footer--block .c-button,.o-drawer--right .c-card__footer--block .c-button{border-radius:0}.o-drawer--left{left:0;transform:translateX(-100%)}.o-drawer--left.o-drawer--visible{transform:translateX(-1%)}.o-drawer--right{left:100%;transform:translate(0)}.o-drawer--right.o-drawer--visible{transform:translateX(-99%)}.c-text{color:#111;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:400;line-height:1.55}.c-text--mono{font-family:Consolas,Andale Mono WT,Andale Mono,Lucida Console,Lucida Sans Typewriter,DejaVu Sans Mono,Bitstream Vera Sans Mono,Liberation Mono,Nimbus Mono L,Monaco,Courier New,Courier,monospace}.c-text--highlight{margin:-.125em;padding:.25em .25em .125em;background-color:#ffeb3b;color:#111}.c-text--quiet{color:#96a8b2}.c-text--loud{font-weight:700}.c-text--help[title]{border-bottom:1px dashed #96a8b2;cursor:help}.c-pre{margin:0}.c-code{margin:-.125em;padding:.25em .25em .125em;background-color:#e5eaec;color:#111;display:inline;font-family:Consolas,Andale Mono WT,Andale Mono,Lucida Console,Lucida Sans Typewriter,DejaVu Sans Mono,Bitstream Vera Sans Mono,Liberation Mono,Nimbus Mono L,Monaco,Courier New,Courier,monospace;font-weight:400}.c-code--multiline{display:block;padding:.5em 1em;border-radius:4px;white-space:pre;word-wrap:normal;overflow-x:auto}.c-kbd{margin:-.125em;padding:.25em .25em .125em;background-color:#96a8b2;color:#fff;display:inline;font-family:Consolas,Andale Mono WT,Andale Mono,Lucida Console,Lucida Sans Typewriter,DejaVu Sans Mono,Bitstream Vera Sans Mono,Liberation Mono,Nimbus Mono L,Monaco,Courier New,Courier,monospace;font-weight:400;border-bottom:2px solid #7b929e;border-radius:4px}.c-blockquote{border-left:5px solid #96a8b2;display:block;margin:0;padding:1em 1.5em;font-family:Georgia,Cambria,Times New Roman,Times,serif}.c-blockquote--brand{border-left:5px solid #2c3e50}.c-blockquote--info{border-left:5px solid #2196f3}.c-blockquote--warning{border-left:5px solid #ff9800}.c-blockquote--success{border-left:5px solid #4caf50}.c-blockquote--error{border-left:5px solid #f44336}.c-blockquote__body{display:block;margin:0;padding:.5em 0;font-size:1.25em}.c-blockquote__footer{color:#96a8b2;font-style:italic}.c-blockquote__footer,.c-paragraph{display:block;margin:0;padding:.5em 0}.c-badge{border:1px solid #96a8b2;background-color:#96a8b2;color:#fff;display:inline-block;margin:0;padding:.25em .5em;border-radius:4px;font-size:.8em;font-weight:700;line-height:1.2}.c-badge.c-badge--ghost{border:1px solid #96a8b2;background-color:transparent;color:#96a8b2}.c-badge--rounded{border-radius:30em}.c-badge--brand{border:1px solid #2c3e50;background-color:#2c3e50;color:#fff}.c-badge--brand.c-badge--ghost{border:1px solid #2c3e50;background-color:transparent;color:#2c3e50}.c-badge--info{border:1px solid #2196f3;background-color:#2196f3;color:#fff}.c-badge--info.c-badge--ghost{border:1px solid #2196f3;background-color:transparent;color:#2196f3}.c-badge--warning{border:1px solid #ff9800;background-color:#ff9800;color:#fff}.c-badge--warning.c-badge--ghost{border:1px solid #ff9800;background-color:transparent;color:#ff9800}.c-badge--success{border:1px solid #4caf50;background-color:#4caf50;color:#fff}.c-badge--success.c-badge--ghost{border:1px solid #4caf50;background-color:transparent;color:#4caf50}.c-badge--error{border:1px solid #f44336;background-color:#f44336;color:#fff}.c-badge--error.c-badge--ghost{border:1px solid #f44336;background-color:transparent;color:#f44336}.c-heading,.c-heading__sub{margin:0;padding:1em 0 .5em;font-weight:400}.c-heading__sub{padding:0;font-size:.8em;opacity:.6}.c-address{display:block;margin:0;padding:.5em 0;font-style:normal}.c-address__heading{display:block;font-weight:700}.c-table{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;margin:0;padding:0;border:0;border-collapse:collapse;border-spacing:0}.c-table__caption{margin-left:0;padding:.5em 0;color:#96a8b2;font-size:.8em;text-align:left}.c-table__body,.c-table__caption,.c-table__head,.c-table__row{display:-ms-flexbox;display:flex;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.c-table__body,.c-table__head,.c-table__row{-ms-flex-wrap:wrap;flex-wrap:wrap}.c-table--striped :not(.c-table__row--heading).c-table__row:nth-of-type(odd){background-color:#e5eaec;color:initial}.c-table__cell{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;padding:.5em;text-align:left;overflow:auto}.c-table__row--heading .c-table__cell{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;border-bottom:1px solid #b0bec5;background-color:#cad4d8;color:initial;font-size:1em;font-weight:700}.c-table--striped .c-table__row--heading .c-table__cell{background-color:#fff;color:initial}.c-table--clickable :not(.c-table__row--heading).c-table__row:hover .c-table__cell,.c-table__row--clickable:hover .c-table__cell{background-color:initial;color:#0c7fda;cursor:pointer}.c-table__row--disabled{background-color:initial;color:#96a8b2;cursor:default}.c-table--clickable :not(.c-table__row--heading).c-table__row--disabled:hover .c-table__cell,.c-table__row--disabled:hover .c-table__cell{background-color:initial;color:#96a8b2;cursor:not-allowed}.c-table--condensed{font-size:.8em}.c-table--condensed .c-table__cell{padding:.25em}.c-card{padding:0;list-style:none;display:block;width:100%;border-radius:4px;background-color:#fff;box-shadow:0 0 1px hsla(0,0%,7%,.6);overflow:hidden}.c-card>.o-image:not(:first-child){padding:1em 0 0}.c-card+.c-card{margin:.5em 0 0}.c-card__header{padding:1em 1em 0}.c-card__header .c-heading{padding:0}.c-card__item{padding:.5em}.c-card__body,.c-card__footer{padding:1em}.c-card__item+.c-card__footer--block{padding:0}.c-card__footer--block{padding:.5em 0 0}.c-card__footer--block .c-input-group .c-button{border-bottom:0}.c-card__footer--block .c-input-group .c-button:first-child{border-left:0;border-top-left-radius:0;border-bottom-left-radius:0}.c-card__footer--block .c-input-group .c-button:last-child{border-right:0;border-top-right-radius:0;border-bottom-right-radius:0}.c-card__item:not(:last-child){border-bottom:1px solid rgba(202,212,216,.5)}.c-card--accordion label.c-card__item{display:block;position:relative;width:100%;padding-left:2em;cursor:pointer}.c-card--accordion label.c-card__item:before{position:absolute;left:.75em;content:\"+\"}.c-card--accordion>input,.c-card--accordion>input+.c-card__item+.c-card__item{display:none}.c-card--accordion>input:checked+.c-card__item+.c-card__item{display:block}.c-card--accordion>input:checked+.c-card__item:before{transform:rotate(45deg)}.c-card--menu{display:block;width:100%;max-height:280px;margin:.5em 0 0;z-index:100;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}.c-card--grouped .c-card__item:not(:last-child){border-bottom:0}.c-card__divider{height:1px;background-color:#96a8b2;overflow:hidden}.c-card__item--divider{background-color:#96a8b2;color:#fff;font-weight:700}.c-card__item--brand{background-color:#2c3e50;color:#fff}.c-card__item--info{background-color:#2196f3;color:#fff}.c-card__item--warning{background-color:#ff9800;color:#fff}.c-card__item--success{background-color:#4caf50;color:#fff}.c-card__item--error{background-color:#f44336;color:#fff}.c-card__item--disabled{cursor:not-allowed;opacity:.6}.c-card--accordion label.c-card__item:not(.c-card__item--disabled):not(.c-card__item--divider):hover,.c-card--menu .c-card__item:not(.c-card__item--disabled):not(.c-card__item--divider):hover{background-color:#e5eaec;cursor:pointer}.c-card--accordion label.c-card__item:not(.c-card__item--disabled):not(.c-card__item--divider):hover.c-card__item--brand,.c-card--menu .c-card__item:not(.c-card__item--disabled):not(.c-card__item--divider):hover.c-card__item--brand{background-color:#3c556e}.c-card--accordion label.c-card__item:not(.c-card__item--disabled):not(.c-card__item--divider):hover.c-card__item--info,.c-card--menu .c-card__item:not(.c-card__item--disabled):not(.c-card__item--divider):hover.c-card__item--info{background-color:#4dabf5}.c-card--accordion label.c-card__item:not(.c-card__item--disabled):not(.c-card__item--divider):hover.c-card__item--warning,.c-card--menu .c-card__item:not(.c-card__item--disabled):not(.c-card__item--divider):hover.c-card__item--warning{background-color:#ffab2e}.c-card--accordion label.c-card__item:not(.c-card__item--disabled):not(.c-card__item--divider):hover.c-card__item--success,.c-card--menu .c-card__item:not(.c-card__item--disabled):not(.c-card__item--divider):hover.c-card__item--success{background-color:#6abe6e}.c-card--accordion label.c-card__item:not(.c-card__item--disabled):not(.c-card__item--divider):hover.c-card__item--error,.c-card--menu .c-card__item:not(.c-card__item--disabled):not(.c-card__item--divider):hover.c-card__item--error{background-color:#f66c62}.c-card--accordion>input:checked+.c-card__item,.c-card__item--active{background-color:rgba(202,212,216,.5);font-weight:700}.c-card--accordion>input:checked+.c-card__item.c-card__item--brand,.c-card__item--active.c-card__item--brand{background-color:#1c2732}.c-card--accordion>input:checked+.c-card__item.c-card__item--info,.c-card__item--active.c-card__item--info{background-color:#0c7fda}.c-card--accordion>input:checked+.c-card__item.c-card__item--warning,.c-card__item--active.c-card__item--warning{background-color:#d17d00}.c-card--accordion>input:checked+.c-card__item.c-card__item--success,.c-card__item--active.c-card__item--success{background-color:#3e8f41}.c-card--accordion>input:checked+.c-card__item.c-card__item--error,.c-card__item--active.c-card__item--error{background-color:#ef1d0d}.c-button{border:1px solid transparent;background-color:#96a8b2;color:#fff;display:inline-block;max-width:100%;margin:0;padding:.5em;border-radius:4px;outline:0;font-family:inherit;font-size:1em;line-height:normal;text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden;vertical-align:middle;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.c-button.c-button--active{background-color:#7b929e}.c-button:not(:disabled):hover{background-color:#b0bec5}.c-button:not(:disabled):focus{border-color:#2196f3;box-shadow:inset 0 0 0 2px #4dabf5}.c-button:not(:disabled):active{background-color:#7b929e}.c-button:disabled{cursor:not-allowed;opacity:.5}.c-button--close{border:1px solid transparent;color:inherit;position:absolute;right:.5em;padding:0;outline:0;font-size:1.4em;font-weight:700;line-height:1}.c-button--close,.c-button--close.c-button--active{background-color:transparent}.c-button--close:not(:disabled):hover{background-color:hsla(0,0%,9%,0)}.c-button--close:not(:disabled):focus{border-color:#2196f3;box-shadow:inset 0 0 0 2px #4dabf5}.c-button--close:not(:disabled):active{background-color:transparent}.c-button--block{display:inline-block;width:100%}.c-button--rounded{border-radius:30em}.c-button--brand{border:1px solid transparent;background-color:#2c3e50;color:#fff}.c-button--brand.c-button--active{background-color:#1c2732}.c-button--brand:not(:disabled):hover{background-color:#3c556e}.c-button--brand:not(:disabled):focus{border-color:#2196f3;box-shadow:inset 0 0 0 2px #4dabf5}.c-button--brand:not(:disabled):active{background-color:#1c2732}.c-button--info{border:1px solid transparent;background-color:#2196f3;color:#fff}.c-button--info.c-button--active{background-color:#0c7fda}.c-button--info:not(:disabled):hover{background-color:#4dabf5}.c-button--info:not(:disabled):focus{border-color:#2196f3;box-shadow:inset 0 0 0 2px #4dabf5}.c-button--info:not(:disabled):active{background-color:#0c7fda}.c-button--warning{border:1px solid transparent;background-color:#ff9800;color:#fff}.c-button--warning.c-button--active{background-color:#d17d00}.c-button--warning:not(:disabled):hover{background-color:#ffab2e}.c-button--warning:not(:disabled):focus{border-color:#2196f3;box-shadow:inset 0 0 0 2px #4dabf5}.c-button--warning:not(:disabled):active{background-color:#d17d00}.c-button--success{border:1px solid transparent;background-color:#4caf50;color:#fff}.c-button--success.c-button--active{background-color:#3e8f41}.c-button--success:not(:disabled):hover{background-color:#6abe6e}.c-button--success:not(:disabled):focus{border-color:#2196f3;box-shadow:inset 0 0 0 2px #4dabf5}.c-button--success:not(:disabled):active{background-color:#3e8f41}.c-button--error{border:1px solid transparent;background-color:#f44336;color:#fff}.c-button--error.c-button--active{background-color:#ef1d0d}.c-button--error:not(:disabled):hover{background-color:#f66c62}.c-button--error:not(:disabled):focus{border-color:#2196f3;box-shadow:inset 0 0 0 2px #4dabf5}.c-button--error:not(:disabled):active{background-color:#ef1d0d}.c-button--ghost{border:1px solid #96a8b2;background-color:transparent;color:#96a8b2}.c-button--ghost.c-button--active{border-color:#7b929e;background-color:#7b929e;color:#fff}.c-button--ghost:not(:disabled):hover{background-color:#96a8b2;color:#fff}.c-button--ghost:not(:disabled):focus{border-color:#2196f3;box-shadow:inset 0 0 0 2px #4dabf5}.c-button--ghost:not(:disabled):active{border-color:#7b929e;background-color:#7b929e;color:#fff}.c-button--ghost-brand{border:1px solid #2c3e50;background-color:transparent;color:#2c3e50}.c-button--ghost-brand.c-button--active{border-color:#1c2732;background-color:#1c2732;color:#fff}.c-button--ghost-brand:not(:disabled):hover{background-color:#2c3e50;color:#fff}.c-button--ghost-brand:not(:disabled):focus{border-color:#2196f3;box-shadow:inset 0 0 0 2px #4dabf5}.c-button--ghost-brand:not(:disabled):active{border-color:#1c2732;background-color:#1c2732;color:#fff}.c-button--ghost-info{border:1px solid #2196f3;background-color:transparent;color:#2196f3}.c-button--ghost-info.c-button--active{border-color:#0c7fda;background-color:#0c7fda;color:#fff}.c-button--ghost-info:not(:disabled):hover{background-color:#2196f3;color:#fff}.c-button--ghost-info:not(:disabled):focus{border-color:#2196f3;box-shadow:inset 0 0 0 2px #4dabf5}.c-button--ghost-info:not(:disabled):active{border-color:#0c7fda;background-color:#0c7fda;color:#fff}.c-button--ghost-warning{border:1px solid #ff9800;background-color:transparent;color:#ff9800}.c-button--ghost-warning.c-button--active{border-color:#d17d00;background-color:#d17d00;color:#fff}.c-button--ghost-warning:not(:disabled):hover{background-color:#ff9800;color:#fff}.c-button--ghost-warning:not(:disabled):focus{border-color:#2196f3;box-shadow:inset 0 0 0 2px #4dabf5}.c-button--ghost-warning:not(:disabled):active{border-color:#d17d00;background-color:#d17d00;color:#fff}.c-button--ghost-success{border:1px solid #4caf50;background-color:transparent;color:#4caf50}.c-button--ghost-success.c-button--active{border-color:#3e8f41;background-color:#3e8f41;color:#fff}.c-button--ghost-success:not(:disabled):hover{background-color:#4caf50;color:#fff}.c-button--ghost-success:not(:disabled):focus{border-color:#2196f3;box-shadow:inset 0 0 0 2px #4dabf5}.c-button--ghost-success:not(:disabled):active{border-color:#3e8f41;background-color:#3e8f41;color:#fff}.c-button--ghost-error{border:1px solid #f44336;background-color:transparent;color:#f44336}.c-button--ghost-error.c-button--active{border-color:#ef1d0d;background-color:#ef1d0d;color:#fff}.c-button--ghost-error:not(:disabled):hover{background-color:#f44336;color:#fff}.c-button--ghost-error:not(:disabled):focus{border-color:#2196f3;box-shadow:inset 0 0 0 2px #4dabf5}.c-button--ghost-error:not(:disabled):active{border-color:#ef1d0d;background-color:#ef1d0d;color:#fff}.c-button__icon-left{padding-right:.5em}.c-button__icon-right{padding-left:.5em}.c-link{background-color:transparent;color:#0c7fda;text-decoration:none;cursor:pointer}.c-link:not(:disabled):visited{color:#0966af}.c-link:not(:disabled):active,.c-link:not(:disabled):hover{background-color:transparent;color:#2196f3}.c-link:hover{text-decoration:underline}.c-link--brand{background-color:transparent;color:#2c3e50}.c-link--brand:not(:disabled):visited{color:#1c2732}.c-link--brand:not(:disabled):active,.c-link--brand:not(:disabled):hover{background-color:transparent;color:#3c556e}.c-link--info{background-color:transparent;color:#2196f3}.c-link--info:not(:disabled):visited{color:#0c7fda}.c-link--info:not(:disabled):active,.c-link--info:not(:disabled):hover{background-color:transparent;color:#4dabf5}.c-link--warning{background-color:transparent;color:#ff9800}.c-link--warning:not(:disabled):visited{color:#d17d00}.c-link--warning:not(:disabled):active,.c-link--warning:not(:disabled):hover{background-color:transparent;color:#ffab2e}.c-link--success{background-color:transparent;color:#4caf50}.c-link--success:not(:disabled):visited{color:#3e8f41}.c-link--success:not(:disabled):active,.c-link--success:not(:disabled):hover{background-color:transparent;color:#6abe6e}.c-link--error{background-color:transparent;color:#f44336}.c-link--error:not(:disabled):visited{color:#ef1d0d}.c-link--error:not(:disabled):active,.c-link--error:not(:disabled):hover{background-color:transparent;color:#f66c62}.c-list{display:block;margin:0;list-style-position:outside}.c-list,.c-list .c-list{padding:0 0 0 1em}.c-list__item{padding:0}.c-list__item--unstyled{list-style:none}.c-list--ordered,.c-list--unstyled{padding:0;list-style:none}.c-list--ordered{counter-reset:a}.c-list--ordered .c-list__item:before{padding:0 .5em 0 0;content:counters(a,\".\") \" \";counter-increment:a}.c-list--inline,.c-list--inline .c-list--inline{padding:0}.c-list--inline .c-list__item{display:inline-block;width:auto;padding-right:1em}.c-list--inline:not(.c-list--unstyled) .c-list__item:before{padding:0 .5em 0 0;content:\"\\2022\"}.c-breadcrumbs{display:block;margin:0;padding:0;list-style:none}.c-breadcrumbs__crumb{display:inline-block;width:auto;padding:0}.c-breadcrumbs__crumb:not(:last-child):after{padding:0 .5em;color:#96a8b2;content:\"/\"}.c-tree{display:block;margin:0;padding:0;list-style:none}.c-tree .c-tree{padding:0 0 0 1em}.c-tree__item{padding:0}.c-tree__item:before{display:inline-block;padding:0 .5em 0 0;transform-origin:30% 50%;color:#cad4d8;content:\"\\2013\"}.c-tree__item--expandable:before{color:#b0bec5;content:\"\\276F\"}.c-tree__item--expandable .c-tree{display:none}.c-tree__item--expanded:before{transform:rotate(90deg);color:#7b929e;content:\"\\276F\"}.c-tabs,.c-tree__item--expanded .c-tree{display:block}.c-tabs__headings{display:-ms-flexbox;display:flex;text-align:center;cursor:pointer}.c-tab-heading{-ms-flex:1;flex:1;margin:0;padding:1em;box-shadow:inset 0 -.2em 0 0 #e5eaec}.c-tabs__nav{overflow:hidden}.c-tabs__nav .c-tabs__headings{margin-bottom:-1em;padding-bottom:1em;overflow-y:hidden;overflow-x:auto}.c-tabs__nav .c-tab-heading{white-space:nowrap}.c-tab-heading--active{box-shadow:inset 0 -.2em 0 0 #96a8b2}.c-tabs--brand .c-tab-heading--active{box-shadow:inset 0 -.2em 0 0 #2c3e50}.c-tabs--info .c-tab-heading--active{box-shadow:inset 0 -.2em 0 0 #2196f3}.c-tabs--warning .c-tab-heading--active{box-shadow:inset 0 -.2em 0 0 #ff9800}.c-tabs--success .c-tab-heading--active{box-shadow:inset 0 -.2em 0 0 #4caf50}.c-tabs--error .c-tab-heading--active{box-shadow:inset 0 -.2em 0 0 #f44336}.c-tab-heading--disabled{background-color:initial;color:#96a8b2;cursor:not-allowed}.c-tabs__tab{display:none;padding:1em}.c-tabs__tab--active{display:block}.o-field{position:relative}.o-field .c-field:disabled~.c-icon{color:#96a8b2}.o-field .c-icon{position:absolute;top:50%;transform:translateY(-50%)}.o-field--icon-right .c-field+.c-icon{right:.5em}.o-field--icon-right .c-field{padding-right:2em}.o-field--icon-left .c-icon:first-child{left:.5em}.o-field--icon-left .c-field{padding-left:2em}.c-fieldset,.c-fieldset.c-list{display:block;width:100%;margin:.5em 0;padding:0;border:0}.c-fieldset__legend{padding:1em 0;padding:.25em 0}.c-fieldset__legend,.c-label{display:block;width:100%;cursor:pointer}.c-label{padding:1em 0}.c-field{display:block;width:100%;margin:0;padding:.5em;border:1px solid #96a8b2;border-radius:4px;outline:0;background-color:#fff;font-family:inherit;font-size:1em;font-weight:400;resize:vertical;-webkit-appearance:none;-moz-appearance:none;appearance:none}.c-field:focus{border-color:#2196f3;box-shadow:inset 0 0 0 2px #4dabf5}select.c-field{cursor:pointer}select.c-field::-ms-expand{display:none}select.c-field:not([multiple]){padding-right:1em;background-image:url(\"data:image/png;base64,R0lGODlhDwAUAIABAAAAAP///yH5BAEAAAEALAAAAAAPABQAAAIXjI+py+0Po5wH2HsXzmw//lHiSJZmUAAAOw==\");background-repeat:no-repeat;background-position:99% 50%}.c-field input{margin-right:.125em;outline:0;font-size:1em}.c-field--label{margin:.5em 0 0}.c-field--error{border-color:#f44336;color:#f44336}.c-field--success{border-color:#4caf50;color:inherit}.c-field--choice{border:0;border-radius:0;background-color:transparent}.c-field--disabled,.c-field:disabled,.c-fieldset--disabled .c-field,.c-fieldset:disabled .c-field{color:#96a8b2;cursor:not-allowed;border-color:#96a8b2;background-color:#e5eaec}.c-field--disabled.c-field--choice,.c-field:disabled.c-field--choice,.c-fieldset--disabled .c-field.c-field--choice,.c-fieldset:disabled .c-field.c-field--choice{background-color:transparent}.c-field input:disabled{color:#96a8b2;cursor:not-allowed}.c-input-group{display:-ms-flexbox;display:flex}.c-input-group .c-button{border-radius:0}.c-input-group .c-button:not(:first-child){border-left-width:0}.c-input-group .c-button:first-child{border-top-left-radius:4px;border-bottom-left-radius:4px}.c-input-group .c-button:last-child{border-top-right-radius:4px;border-bottom-right-radius:4px}.c-input-group .o-field{-ms-flex:1;flex:1}.c-input-group .o-field .c-field{border-radius:0}.c-input-group .o-field:not(:first-child) .c-field{border-left-width:0}.c-input-group .o-field:first-child .c-field{border-top-left-radius:4px;border-bottom-left-radius:4px}.c-input-group .o-field:last-child .c-field{border-top-right-radius:4px;border-bottom-right-radius:4px}.c-input-group .o-field--fixed{-ms-flex:0 1 auto;flex:0 1 auto}.c-input-group--rounded .c-button:first-child{border-top-left-radius:30em;border-bottom-left-radius:30em}.c-input-group--rounded .c-button:last-child{border-top-right-radius:30em;border-bottom-right-radius:30em}.c-input-group--rounded .o-field:first-child .c-field{border-top-left-radius:30em;border-bottom-left-radius:30em}.c-input-group--rounded .o-field:last-child .c-field{border-top-right-radius:30em;border-bottom-right-radius:30em}.c-input-group--rounded-left .c-button:first-child,.c-input-group--rounded-left .o-field:first-child .c-field{border-top-left-radius:30em;border-bottom-left-radius:30em}.c-input-group--rounded-right .c-button:last-child,.c-input-group--rounded-right .o-field:last-child .c-field{border-top-right-radius:30em;border-bottom-right-radius:30em}.c-input-group--stacked{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.c-input-group--stacked .c-button:not(:first-child),.c-input-group--stacked .o-field:not(:first-child) .c-field{border-left-width:1px}.c-input-group--stacked .c-button,.c-input-group--stacked .o-field{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;margin-left:0}.c-input-group--stacked .c-button:not(:first-child){border-top:0}.c-input-group--stacked .c-button:not(:first-child):not(:last-child){border-radius:0}.c-input-group--stacked .c-button:first-child{border-radius:4px 4px 0 0}.c-input-group--stacked .c-button:last-child{border-radius:0 0 4px 4px}.c-input-group--stacked .o-field:not(:first-child) .c-field{border-top:0}.c-input-group--stacked .o-field:not(:first-child):not(:last-child) .c-field{border-radius:0}.c-input-group--stacked .o-field:first-child .c-field{border-radius:4px 4px 0 0}.c-input-group--stacked .o-field:last-child .c-field{border-radius:0 0 4px 4px}.c-hint{position:absolute;padding:0 .5em;transform:scale(.8);transform-origin:top left;color:#7b929e;font-size:1em;opacity:0;pointer-events:none}.c-field:focus~.c-hint,.c-hint--static,.c-label__field:focus~.c-hint{transform:scale(.9);opacity:1}.c-hint--success{color:#4caf50}.c-hint--error{color:#f44336}.c-toggle{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:auto;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.c-toggle input:not(:checked)+.c-toggle__track{background-color:#e5eaec}.c-toggle input:not(:checked)+.c-toggle__track .c-toggle__handle{transform:translateZ(0)}.c-toggle input:disabled+.c-toggle__track,.c-toggle input:disabled+.c-toggle__track .c-toggle__handle{background-color:#e5eaec;cursor:not-allowed}.c-toggle--brand .c-toggle__track{background-color:#2c3e50}.c-toggle--info .c-toggle__track{background-color:#2196f3}.c-toggle--warning .c-toggle__track{background-color:#ff9800}.c-toggle--success .c-toggle__track{background-color:#4caf50}.c-toggle--error .c-toggle__track{background-color:#f44336}.c-toggle input{display:none}.c-toggle__track{-ms-flex:1;flex:1;padding-right:1em;padding-left:1em;-ms-flex:0 1 auto;flex:0 1 auto;background-color:#96a8b2;position:relative;width:1em;height:.5em;margin:0 .5em;border-radius:30em}.c-toggle__handle{position:absolute;top:-.25em;left:0;width:1em;height:1em;transform:translateX(100%);border-radius:30em;background-color:#fff;box-shadow:0 1px 4px -1px #111}.c-tags{position:relative;width:100%;text-align:left}.c-tags .c-card--menu{position:absolute;width:100%}.c-tags__container{padding-right:.25em}.c-tag,.c-tags__container{display:inline-block;max-width:70%}.c-tag{position:relative;margin:.125em;padding:.5em 1.5em .5em .5em}.c-tag__close{position:absolute;top:7px;right:5px;color:#e5eaec;font-weight:700}.c-tags__field-container{display:inline-block;position:absolute;width:30%;margin:.125em;cursor:pointer}.c-range{width:100%;padding:.5em 0;outline:0;-webkit-appearance:none}.c-range:not(:disabled)::-webkit-slider-runnable-track{background-color:#96a8b2}.c-range:not(:disabled)::-moz-range-track{background-color:#96a8b2}.c-range:not(:disabled)::-ms-track{background-color:#96a8b2}.c-range--brand:not(:disabled)::-webkit-slider-runnable-track{background-color:#2c3e50}.c-range--brand:not(:disabled)::-moz-range-track{background-color:#2c3e50}.c-range--brand:not(:disabled)::-ms-track{background-color:#2c3e50}.c-range--info:not(:disabled)::-webkit-slider-runnable-track{background-color:#2196f3}.c-range--info:not(:disabled)::-moz-range-track{background-color:#2196f3}.c-range--info:not(:disabled)::-ms-track{background-color:#2196f3}.c-range--warning:not(:disabled)::-webkit-slider-runnable-track{background-color:#ff9800}.c-range--warning:not(:disabled)::-moz-range-track{background-color:#ff9800}.c-range--warning:not(:disabled)::-ms-track{background-color:#ff9800}.c-range--success:not(:disabled)::-webkit-slider-runnable-track{background-color:#4caf50}.c-range--success:not(:disabled)::-moz-range-track{background-color:#4caf50}.c-range--success:not(:disabled)::-ms-track{background-color:#4caf50}.c-range--error:not(:disabled)::-webkit-slider-runnable-track{background-color:#f44336}.c-range--error:not(:disabled)::-moz-range-track{background-color:#f44336}.c-range--error:not(:disabled)::-ms-track{background-color:#f44336}.c-range::-webkit-slider-runnable-track{width:100%;height:10px;border:0;border-radius:30em;box-shadow:none;cursor:pointer}.c-range::-webkit-slider-thumb{width:20px;height:20px;margin:-5px 0 0;border:0;border-radius:30em;background-color:#fff;box-shadow:0 1px 4px -1px #111;cursor:pointer;-webkit-appearance:none}.c-range::-moz-range-track{width:100%;height:10px;border:0;border-radius:30em;box-shadow:none;cursor:pointer}.c-range::-moz-range-thumb{width:20px;height:20px;margin:-5px 0 0;border:0;border-radius:30em;background-color:#fff;box-shadow:0 1px 4px -1px #111;cursor:pointer}.c-range::-ms-track{width:100%;height:10px;border:0;border-radius:30em;box-shadow:none;cursor:pointer;border-color:transparent;background-color:transparent;color:transparent}.c-range::-ms-fill-lower,.c-range::-ms-fill-upper{border:0;border-radius:30em;background-color:#96a8b2;box-shadow:none}.c-range::-ms-thumb{width:20px;height:20px;margin:-5px 0 0;border:0;border-radius:30em;background-color:#fff;box-shadow:0 1px 4px -1px #111;cursor:pointer}.c-range:not(:disabled):active::-webkit-slider-thumb{transform:scale(1.4)}.c-range:not(:disabled):active::-moz-range-thumb{transform:scale(1.4)}.c-range:not(:disabled):active::-ms-thumb{transform:scale(1.4)}.c-range:focus::-webkit-slider-thumb{border-color:#2196f3;box-shadow:inset 0 0 0 2px #4dabf5}.c-range:focus::-moz-range-thumb{border-color:#2196f3;box-shadow:inset 0 0 0 2px #4dabf5}.c-range:focus::-ms-thumb{border-color:#2196f3;box-shadow:inset 0 0 0 2px #4dabf5}.c-range:disabled::-webkit-slider-runnable-track,.c-range:disabled::-webkit-slider-thumb{background-color:#e5eaec;cursor:not-allowed}.c-range:disabled::-moz-range-thumb,.c-range:disabled::-moz-range-track{background-color:#e5eaec;cursor:not-allowed}.c-range:disabled::-ms-thumb,.c-range:disabled::-ms-track{background-color:#e5eaec;cursor:not-allowed}.c-pagination{display:block;width:100%;padding:1em;font-size:.8em;text-align:center}.c-pagination__controls{display:inline-block;text-align:center}.c-pagination__controls--backward{float:left;text-align:left}.c-pagination__controls--forward{float:right;text-align:right}.c-pagination__control,.c-pagination__page{border:1px solid transparent;background-color:#96a8b2;color:#fff;display:inline-block;max-width:100%;margin:0;padding:.5em;border-radius:4px;outline:0;font-family:inherit;font-size:1em;line-height:normal;text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden;vertical-align:middle;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid #2c3e50;background-color:transparent;color:#2c3e50;min-width:2.4em;border-radius:30em}.c-pagination__control.c-button--active,.c-pagination__page.c-button--active{background-color:#7b929e}.c-pagination__control:not(:disabled):hover,.c-pagination__page:not(:disabled):hover{background-color:#b0bec5}.c-pagination__control:not(:disabled):active,.c-pagination__page:not(:disabled):active{background-color:#7b929e}.c-pagination__control:disabled,.c-pagination__page:disabled{cursor:not-allowed;opacity:.5}.c-pagination__control.c-button--active,.c-pagination__page.c-button--active{border-color:#1c2732;background-color:#1c2732;color:#fff}.c-pagination__control:not(:disabled):hover,.c-pagination__page:not(:disabled):hover{background-color:#2c3e50;color:#fff}.c-pagination__control:not(:disabled):focus,.c-pagination__page:not(:disabled):focus{border-color:#2196f3;box-shadow:inset 0 0 0 2px #4dabf5}.c-pagination__control:not(:disabled):active,.c-pagination__page:not(:disabled):active{border-color:#1c2732;background-color:#1c2732;color:#fff}.c-pagination__page--current{background-color:#2c3e50;color:#fff}.c-pagination__ellipsis{padding:0 1em}.c-overlay{display:block;position:fixed;top:0;right:0;bottom:0;left:0;width:100%;height:100%;background-color:hsla(0,0%,7%,.4);opacity:0;visibility:hidden;z-index:400}.c-overlay--visible{opacity:1;visibility:visible}.c-overlay--fullpage{position:fixed}.c-overlay--transparent{background-color:transparent}.c-overlay--dismissable{cursor:pointer}.c-bubble{display:inline-block;position:relative;padding:1em;border-radius:4px;background-color:#111;color:#fff;text-align:center;white-space:nowrap}.c-bubble:after{display:block;position:absolute;width:0;height:0;border:10px solid transparent;content:\"\"}.c-bubble--top:after{bottom:-20px;left:50%;transform:translateX(-50%);border-top-color:#111}.c-bubble--right:after{top:50%;left:-20px;transform:translateY(-50%);border-right-color:#111}.c-bubble--bottom:after{top:-20px;left:50%;transform:translateX(-50%);border-bottom-color:#111}.c-bubble--left:after{top:50%;right:-20px;transform:translateY(-50%);border-left-color:#111}.c-tooltip{position:relative;overflow:visible}.c-tooltip:after,.c-tooltip:before{visibility:hidden;z-index:300}.c-tooltip:before{position:absolute;border:.6em solid transparent;content:\"\"}.c-tooltip:after{position:absolute;padding:.25em .5em;border:1px solid #111;border-radius:4px;background-color:#111;color:#fff;line-height:1.45;white-space:nowrap;content:attr(aria-label);visibility:hidden}.c-tooltip:hover:after,.c-tooltip:hover:before{visibility:visible}.c-tooltip--top:before{top:0;left:50%;transform:translate(-50%,-1em);border-top-color:#111}.c-tooltip--top:after{top:0;left:50%;transform:translate(-50%,-3em)}.c-tooltip--right:before{top:50%;left:100%;transform:translateY(-50%);border-right-color:#111}.c-tooltip--right:after{top:50%;left:100%;transform:translate(1em,-50%)}.c-tooltip--bottom:before{bottom:0;left:50%;transform:translate(-50%,1em);border-bottom-color:#111}.c-tooltip--bottom:after{bottom:0;left:50%;transform:translate(-50%,3em)}.c-tooltip--left:before{top:50%;right:100%;transform:translateY(-50%);border-left-color:#111}.c-tooltip--left:after{top:50%;right:100%;transform:translate(-1em,-50%)}.c-alerts{display:block;position:absolute;width:250px;max-height:100%;background-color:transparent;z-index:300;overflow-y:auto}.c-alerts--topleft{top:1em;left:1em}.c-alerts--topright{top:1em;right:1em}.c-alerts--bottomleft{bottom:0;left:1em}.c-alerts--bottomright{right:1em;bottom:0}.c-alert{background-color:#96a8b2;color:#fff;position:relative;margin:0 0 1em;padding:1em 3em 1em 1em;border-radius:4px}.c-alert--brand{background-color:#2c3e50;color:#fff}.c-alert--info{background-color:#2196f3;color:#fff}.c-alert--warning{background-color:#ff9800;color:#fff}.c-alert--success{background-color:#4caf50;color:#fff}.c-alert--error{background-color:#f44336;color:#fff}.c-calendar{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;padding-right:.001em;padding-left:.001em;max-width:400px;padding:.25em;border:1px solid #96a8b2;border-radius:4px;background-color:#fff;text-align:center;z-index:200}.c-calendar__control,.c-calendar__date{background-color:#fff;color:#96a8b2;display:inline;-ms-flex:0 0 14.28%;flex:0 0 14.28%;max-width:14.28%;margin:0;padding:1em .5em;border:1px solid transparent;border-radius:4px;outline:0;font-size:1em;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.c-calendar__control.c-button--active,.c-calendar__date.c-button--active{background-color:#e8e8e8}.c-calendar__control:not(:disabled):hover,.c-calendar__date:not(:disabled):hover{background-color:#fff}.c-calendar__control:not(:disabled):focus,.c-calendar__date:not(:disabled):focus{border-color:#2196f3;box-shadow:inset 0 0 0 2px #4dabf5}.c-calendar__control:not(:disabled):active,.c-calendar__date:not(:disabled):active{background-color:#e8e8e8}.c-calendar__header{-ms-flex:1;flex:1;-ms-flex:0 0 70%;flex:0 0 70%;max-width:70%}.c-calendar__day,.c-calendar__header{padding-right:1em;padding-left:1em;padding-right:.001em;padding-left:.001em;padding:.5em 0}.c-calendar__day{-ms-flex:1;flex:1;-ms-flex:0 0 14.28%;flex:0 0 14.28%;max-width:14.28%;font-weight:700}.c-calendar__date:hover{border:1px solid #96a8b2}.c-calendar__date--in-month{color:#111}.c-calendar__date--today{border-color:#cad4d8}.c-calendar__date--selected,.c-calendar__date--selected:hover{border:1px solid transparent;background-color:#2c3e50;color:#fff;border-color:#2c3e50}.c-calendar__date--selected.c-button--active,.c-calendar__date--selected:hover.c-button--active{background-color:#1c2732}.c-calendar__date--selected:hover:not(:disabled):hover,.c-calendar__date--selected:not(:disabled):hover{background-color:#3c556e}.c-calendar__date--selected:hover:not(:disabled):focus,.c-calendar__date--selected:not(:disabled):focus{border-color:#2196f3;box-shadow:inset 0 0 0 2px #4dabf5}.c-calendar__date--selected:hover:not(:disabled):active,.c-calendar__date--selected:not(:disabled):active{background-color:#1c2732}.c-nav{background-color:#111;color:#fff;width:100%;margin:0;padding:0;z-index:300}.c-nav__content,.c-nav__item{display:block;height:3.5em;padding:0 1em;color:inherit;line-height:3.5em;vertical-align:middle}.c-nav__content .o-image,.c-nav__item .o-image{height:100%}.c-nav__item{text-decoration:none;cursor:pointer}.c-nav__item:not(:disabled):hover{background-color:#7b929e;color:#fff}.c-nav__item:not(:disabled):focus{box-shadow:inset 0 0 0 2px #4dabf5}.c-nav__item:not(:disabled):active{background-color:#647c88;color:#fff}.c-nav--inline .c-nav__content,.c-nav--inline .c-nav__item{display:inline-block}.c-nav--inline .c-nav__content--right,.c-nav--inline .c-nav__item--right{float:right}.c-nav--light{background-color:#f2f2ea;color:#3f2d26}.c-nav--top{top:0;bottom:auto}.c-nav--bottom,.c-nav--top{position:absolute;right:0;left:0}.c-nav--bottom{top:auto;bottom:0}.c-nav--left{right:auto;left:0}.c-nav--left,.c-nav--right{position:absolute;top:0;bottom:0}.c-nav--right{right:0;left:auto}.c-nav--fixed{position:fixed}.c-nav__item--active{background-color:#7b929e;color:#fff}.c-nav__item--brand:not(:disabled):hover{background-color:#2c3e50;color:#fff}.c-nav__item--brand:not(:disabled):focus{box-shadow:inset 0 0 0 2px #4dabf5}.c-nav__item--brand:not(:disabled):active{background-color:#1c2732;color:#fff}.c-nav__item--brand.c-nav__item--active{background-color:#2c3e50;color:#fff}.c-nav__item--info:not(:disabled):hover{background-color:#2196f3;color:#fff}.c-nav__item--info:not(:disabled):focus{box-shadow:inset 0 0 0 2px #4dabf5}.c-nav__item--info:not(:disabled):active{background-color:#0c7fda;color:#fff}.c-nav__item--info.c-nav__item--active{background-color:#2196f3;color:#fff}.c-nav__item--warning:not(:disabled):hover{background-color:#ff9800;color:#fff}.c-nav__item--warning:not(:disabled):focus{box-shadow:inset 0 0 0 2px #4dabf5}.c-nav__item--warning:not(:disabled):active{background-color:#d17d00;color:#fff}.c-nav__item--warning.c-nav__item--active{background-color:#ff9800;color:#fff}.c-nav__item--success:not(:disabled):hover{background-color:#4caf50;color:#fff}.c-nav__item--success:not(:disabled):focus{box-shadow:inset 0 0 0 2px #4dabf5}.c-nav__item--success:not(:disabled):active{background-color:#3e8f41;color:#fff}.c-nav__item--success.c-nav__item--active{background-color:#4caf50;color:#fff}.c-nav__item--error:not(:disabled):hover{background-color:#f44336;color:#fff}.c-nav__item--error:not(:disabled):focus{box-shadow:inset 0 0 0 2px #4dabf5}.c-nav__item--error:not(:disabled):active{background-color:#ef1d0d;color:#fff}.c-nav__item--error.c-nav__item--active{background-color:#f44336;color:#fff}.c-progress{display:block;border:0;border-radius:4px;background-color:#e5eaec;color:#fff;text-align:center;overflow:hidden}.c-progress--rounded{border-radius:30em}.c-progress__bar{display:block;height:100%;float:left;border-radius:0;background-color:#96a8b2;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.c-progress__bar:after{color:transparent!important;content:\"-\"}.c-progress__bar--brand{background-color:#2c3e50}.c-progress__bar--info{background-color:#2196f3}.c-progress__bar--warning{background-color:#ff9800}.c-progress__bar--success{background-color:#4caf50}.c-progress__bar--error{background-color:#f44336}.c-avatar{display:inline-block;position:relative;width:3em;height:3em;margin:0;border-radius:30em;background-color:#2c3e50;color:#fff}.c-avatar[data-text]:after{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);content:attr(data-text)}.c-avatar__img{display:block;width:100%;height:100%;border-radius:30em;overflow:hidden}.c-avatar__img+.c-avatar__img{position:absolute;right:0;bottom:0;width:50%;height:50%}.u-centered{text-align:center}.u-justified{text-align:justify}.u-left{text-align:left}.u-right{text-align:right}.u-center-block{position:relative}.u-absolute-center,.u-center-block__content{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.u-center-block__content--vertical{left:auto;transform:translateY(-50%)}.u-center-block__content--horizontal{top:auto;transform:translateX(-50%)}.u-no-overflow{overflow:hidden}.u-letter-box--super{padding-top:3em;padding-bottom:3em}.u-letter-box--xlarge{padding-top:2em;padding-bottom:2em}.u-letter-box--large{padding-top:1.5em;padding-bottom:1.5em}.u-letter-box--medium{padding-top:1em;padding-bottom:1em}.u-letter-box--small{padding-top:.5em;padding-bottom:.5em}.u-letter-box--xsmall{padding-top:.25em;padding-bottom:.25em}.u-letter-box--tiny{padding-top:.125em;padding-bottom:.125em}.u-letter-box--none{padding-top:0;padding-bottom:0}.u-pillar-box--super{padding-right:3em;padding-left:3em}.u-pillar-box--xlarge{padding-right:2em;padding-left:2em}.u-pillar-box--large{padding-right:1.5em;padding-left:1.5em}.u-pillar-box--medium{padding-right:1em;padding-left:1em}.u-pillar-box--small{padding-right:.5em;padding-left:.5em}.u-pillar-box--xsmall{padding-right:.25em;padding-left:.25em}.u-pillar-box--tiny{padding-right:.125em;padding-left:.125em}.u-pillar-box--none{padding-right:0;padding-left:0}.u-window-box--super{padding:3em}.u-window-box--xlarge{padding:2em}.u-window-box--large{padding:1.5em}.u-window-box--medium{padding:1em}.u-window-box--small{padding:.5em}.u-window-box--xsmall{padding:.25em}.u-window-box--tiny{padding:.125em}.u-window-box--none{padding:0}.u-high,.u-higher,.u-highest{border:0}.u-high{box-shadow:0 0 1px hsla(0,0%,7%,.6),0 5px 10px -3px hsla(0,0%,7%,.4)}.u-higher{box-shadow:0 0 1px hsla(0,0%,7%,.6),0 10px 25px -4px hsla(0,0%,7%,.4)}.u-highest{box-shadow:0 0 1px hsla(0,0%,7%,.6),0 20px 55px -8px hsla(0,0%,7%,.4)}.u-super{font-size:2em}.u-xlarge{font-size:1.5em}.u-large{font-size:1.25em}.u-medium{font-size:1em}.u-small{font-size:.8em}.u-xsmall{font-size:.67em}.u-visible{visibility:visible}.u-invisible{visibility:hidden}.u-display-none{display:none}.u-display-initial{display:initial}.u-display-inline{display:inline}.u-display-inline-block{display:inline-block}.u-display-block{display:block}.u-display-table{display:table}.u-display-table-cell{display:table-cell}.u-display-flex{display:-ms-flexbox;display:flex}.u-display-inline-flex{display:-ms-inline-flexbox;display:inline-flex}", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Contains all similar functions of Dynamic Fields.
 */
var AbstractField = function () {

  /**
   * Default constructor.
   */
  function AbstractField() {
    _classCallCheck(this, AbstractField);
  }

  /** 
   * Create a wrapper element. 
   *
   * @param Name of the dynamic field. example dynamic_text.
   */


  AbstractField.prototype.createWrapperSpan = function createWrapperSpan(dynamicFieldName) {
    var wrapper = document.createElement("span");
    wrapper.classList.add(dynamicFieldName);
    wrapper.classList.add("o-grid");
    return wrapper;
  };

  /**
   * Create a label.
   *
   * @param id Id of the input.
   * @param labelText Label test show in display.
   * @return Label element.
   */


  AbstractField.prototype.createLabel = function createLabel(id, labelText) {
    var label = document.createElement("label");
    label.setAttribute("for", id);
    var textNode = document.createTextNode(labelText);
    label.appendChild(textNode);
    label.classList.add("o-grid-small--fit");
    label.classList.add("o-grid--medium-fit");
    label.classList.add("o-grid--large-fit");
    return label;
  };

  /**
   * Creates wrapper div to be used to give fields a uniform look.
   */


  AbstractField.prototype.createWrapperGrid = function createWrapperGrid() {
    var grid = document.createElement("div");
    grid.classList.add("o-grid__cell");
    return grid;
  };

  return AbstractField;
}();

exports.default = AbstractField;


module.exports = AbstractField;

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _riot = __webpack_require__(0);

var _riot2 = _interopRequireDefault(_riot);

__webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inputDescriptions = [{
  "id": "1",
  "label": "checkbox",
  "type": "checkbox",
  "values": [{ "value": "test", "label": "y" }, { "value": "test2", "label": "n" }]
}, {
  "id": "2",
  "label": "password",
  "type": "password"
}, {
  "id": "3",
  "label": "select",
  "type": "select",
  "values": [{ "value": "test", "label": "y" }, { "value": "test2", "label": "n" }]
}, {
  "id": "4",
  "label": "textarea",
  "type": "textarea"
}, {
  "id": "name",
  "label": "test",
  "type": "text"
}];

_riot2.default.mount("dynamic_form", { "input_descriptions": inputDescriptions, "id": "formId", "action": "testActin", "method": "testMethod", "submit": true });

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('dynamic_form', '<form class="dynamic_form" ref="{id}" id="{id}" action="{action}" method="{method}"> <span each="{inp in inputs}"> <raw content="{inp.outerHTML}"></raw> </span> <button type="submit" if="{submit}">Submit</button> </form>', 'dynamic_form .dynamic_check input,[data-is="dynamic_form"] .dynamic_check input{ margin-left: 20px; } dynamic_form span.o-grid,[data-is="dynamic_form"] span.o-grid{ padding-bottom:20px; } dynamic_form span.o-grid:last,[data-is="dynamic_form"] span.o-grid:last{ padding-bottom:0px; } dynamic_form div.o-grid__cell.label,[data-is="dynamic_form"] div.o-grid__cell.label{ width : 100%; text-align : right; }', '', function(opts) {
'use strict';

var _riot = __webpack_require__(0);

var _riot2 = _interopRequireDefault(_riot);

__webpack_require__(3);

var _InputFactory = __webpack_require__(20);

var _InputFactory2 = _interopRequireDefault(_InputFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = this;
var descriptions = opts.input_descriptions;
var factory = new _InputFactory2.default();

component.inputs = descriptions.map(function (description) {

  return factory.build(description);
});

component.id = opts.id;
component.method = opts.method;
component.action = opts.action;
component.submit = opts.submit;
});

riot.tag2('raw', '<span></span>', '', '', function(opts) {
"use strict";

this.root.innerHTML = opts.content;
});

    
  

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TextField = __webpack_require__(21);

var _TextField2 = _interopRequireDefault(_TextField);

var _TextAreaField = __webpack_require__(22);

var _TextAreaField2 = _interopRequireDefault(_TextAreaField);

var _PasswordField = __webpack_require__(23);

var _PasswordField2 = _interopRequireDefault(_PasswordField);

var _SelectField = __webpack_require__(24);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _CheckField = __webpack_require__(25);

var _CheckField2 = _interopRequireDefault(_CheckField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
  Creates inputs based on descriptions.
*/
var InputFactory = function () {

  /**
   * Default constructor.
   */
  function InputFactory() {
    _classCallCheck(this, InputFactory);
  }

  /**
    Build an input.
     @param inputDescription Json object description of object.
    @return Created input.
  */


  InputFactory.prototype.build = function build(inputDescription) {
    var element = undefined;
    switch (inputDescription.type.toLowerCase()) {
      case "text":
        return new _TextField2.default().build(inputDescription);
        break;
      case "textarea":
        return new _TextAreaField2.default().build(inputDescription);
        break;
      case "password":
        return new _PasswordField2.default().build(inputDescription);
        break;
      case "checkbox":
        return new _CheckField2.default().build(inputDescription);
        break;
      case "select":
        return new _SelectField2.default().build(inputDescription);
        break;
      default:
        console.error("Unable to create an element.");
        break;
    }
  };

  return InputFactory;
}();

exports.default = InputFactory;


module.exports = InputFactory;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AbstractField2 = __webpack_require__(6);

var _AbstractField3 = _interopRequireDefault(_AbstractField2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Create a text input.
 */
var TextField = function (_AbstractField) {
  _inherits(TextField, _AbstractField);

  /**
   * Default constructor.
   */
  function TextField() {
    _classCallCheck(this, TextField);

    return _possibleConstructorReturn(this, _AbstractField.call(this));
  }

  /**
   * Create the input element.
   *
   * @param id Id of the element being created.
   * @return Input element.
   */


  TextField.prototype.createElement = function createElement(id) {
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", id);
    input.setAttribute("name", id);
    input.classList.add("c-field");
    return input;
  };

  TextField.prototype.build = function build(inputDescription) {
    var specialClass = "dynamic_text";
    var wrapper = this.createWrapperSpan(specialClass);
    var label = this.createLabel(inputDescription.id, inputDescription.label);
    var element = this.createElement(inputDescription.id);
    var labelGrid = this.createWrapperGrid();
    labelGrid.classList.add("label");
    labelGrid.classList.add("o-grid__cell--width-30");
    var inputGrid = this.createWrapperGrid();
    labelGrid.appendChild(label);
    inputGrid.appendChild(element);
    wrapper.appendChild(labelGrid);
    wrapper.appendChild(inputGrid);
    return wrapper;
  };

  return TextField;
}(_AbstractField3.default);

exports.default = TextField;


module.exports = TextField;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AbstractField2 = __webpack_require__(6);

var _AbstractField3 = _interopRequireDefault(_AbstractField2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Create a text_area input.
 */
var TextAreaField = function (_AbstractField) {
  _inherits(TextAreaField, _AbstractField);

  /**
   * Default constructor.
   */
  function TextAreaField() {
    _classCallCheck(this, TextAreaField);

    return _possibleConstructorReturn(this, _AbstractField.call(this));
  }

  /**
   * Create the input element.
   *
   * @param id Id of the element being created.
   * @return Input element.
   */


  TextAreaField.prototype.createElement = function createElement(id) {
    var input = document.createElement("textarea");
    input.setAttribute("id", id);
    input.setAttribute("name", id);
    input.classList.add("c-field");
    return input;
  };

  TextAreaField.prototype.build = function build(inputDescription) {
    var specialClass = "dynamic_textarea";
    var wrapper = this.createWrapperSpan(specialClass);
    var label = this.createLabel(inputDescription.id, inputDescription.label);
    var element = this.createElement(inputDescription.id);
    var labelGrid = this.createWrapperGrid();
    labelGrid.classList.add("label");
    labelGrid.classList.add("o-grid__cell--width-30");
    var inputGrid = this.createWrapperGrid();
    labelGrid.appendChild(label);
    inputGrid.appendChild(element);
    wrapper.appendChild(labelGrid);
    wrapper.appendChild(inputGrid);
    return wrapper;
  };

  return TextAreaField;
}(_AbstractField3.default);

exports.default = TextAreaField;


module.exports = TextAreaField;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AbstractField2 = __webpack_require__(6);

var _AbstractField3 = _interopRequireDefault(_AbstractField2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
  Create a password input.
*/
var PasswordField = function (_AbstractField) {
  _inherits(PasswordField, _AbstractField);

  /**
   * Default constructor.
   */
  function PasswordField() {
    _classCallCheck(this, PasswordField);

    return _possibleConstructorReturn(this, _AbstractField.call(this));
  }

  /**
   * Create the input element.
   *
   * @param id Id of the element being created.
   * @return Input element.
   */


  PasswordField.prototype.createElement = function createElement(id) {
    var input = document.createElement("input");
    input.setAttribute("type", "password");
    input.setAttribute("id", id);
    input.setAttribute("name", id);
    input.classList.add("c-field");
    return input;
  };

  PasswordField.prototype.build = function build(inputDescription) {
    var specialClass = "dynamic_password";
    var wrapper = this.createWrapperSpan(specialClass);
    var label = this.createLabel(inputDescription.id, inputDescription.label);
    var element = this.createElement(inputDescription.id);
    var labelGrid = this.createWrapperGrid();
    labelGrid.classList.add("label");
    labelGrid.classList.add("o-grid__cell--width-30");
    var inputGrid = this.createWrapperGrid();
    labelGrid.appendChild(label);
    inputGrid.appendChild(element);
    wrapper.appendChild(labelGrid);
    wrapper.appendChild(inputGrid);
    return wrapper;
  };

  return PasswordField;
}(_AbstractField3.default);

exports.default = PasswordField;


module.exports = PasswordField;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AbstractField2 = __webpack_require__(6);

var _AbstractField3 = _interopRequireDefault(_AbstractField2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
  Create a select input.
*/
var SelectField = function (_AbstractField) {
  _inherits(SelectField, _AbstractField);

  /**
   * Default constructor.
   */
  function SelectField() {
    _classCallCheck(this, SelectField);

    return _possibleConstructorReturn(this, _AbstractField.call(this));
  }

  /**
   * Create the input element.
   *
   * @param id Id of selectbox.
   * @param listOfValues List of options.
   * @param multiple Boolean representing if it is a multiple select box.
   * @return Selectbox.
   */


  SelectField.prototype.createElements = function createElements(id) {
    var listOfValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var multiple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var select = document.createElement("select");
    select.setAttribute("name", id);
    select.classList.add("c-field");

    // Evaluate if select field allows multiple values to be selected.
    if (multiple) {
      select.setAttribute("multiple", true);
    }
    for (var i = 0; i < listOfValues.length; i++) {
      var item = listOfValues[i];
      var option = document.createElement("option");
      option.setAttribute("name", id);
      option.setAttribute("value", item.value);
      option.classList.add("c-field");
      var textNode = document.createTextNode(item.label);
      option.appendChild(textNode);
      select.appendChild(option);
    }
    return select;
  };

  SelectField.prototype.build = function build(inputDescription) {
    var specialClass = "dynamic_select";
    var wrapper = this.createWrapperSpan(specialClass);
    var label = this.createLabel(inputDescription.id, inputDescription.label);
    var element = this.createElements(inputDescription.id, inputDescription.values, inputDescription.multiple);
    var labelGrid = this.createWrapperGrid();
    labelGrid.classList.add("label");
    labelGrid.classList.add("o-grid__cell--width-30");
    var inputGrid = this.createWrapperGrid();
    labelGrid.appendChild(label);
    inputGrid.appendChild(element);
    wrapper.appendChild(labelGrid);
    wrapper.appendChild(inputGrid);
    return wrapper;
  };

  return SelectField;
}(_AbstractField3.default);

exports.default = SelectField;


module.exports = SelectField;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AbstractField2 = __webpack_require__(6);

var _AbstractField3 = _interopRequireDefault(_AbstractField2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
  Create a check input.
*/
var CheckField = function (_AbstractField) {
  _inherits(CheckField, _AbstractField);

  /**
   * Default constructor.
   */
  function CheckField(inputDescription) {
    _classCallCheck(this, CheckField);

    return _possibleConstructorReturn(this, _AbstractField.call(this));
  }

  /**
   * Create the input element.
   *
   * @param id ID of the field.
   * @param listOfValues Values to be used as checkboxes.
   * @return checkbox span.
   */


  CheckField.prototype.createElements = function createElements(id, listOfValues) {
    var wrapper = document.createElement("span");
    for (var i = 0; i < listOfValues.length; i++) {
      var item = listOfValues[i];
      var input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      input.setAttribute("name", id);
      input.setAttribute("value", item.value);
      var textNode = document.createTextNode(item.label);
      wrapper.appendChild(input);
      wrapper.appendChild(textNode);
    }
    return wrapper;
  };

  CheckField.prototype.build = function build(inputDescription) {
    var specialClass = "dynamic_check";
    var wrapper = this.createWrapperSpan(specialClass);
    var label = this.createLabel(inputDescription.id, inputDescription.label);
    var element = this.createElements(inputDescription.id, inputDescription.values);
    var labelGrid = this.createWrapperGrid();
    labelGrid.classList.add("label");
    labelGrid.classList.add("o-grid__cell--width-30");
    var inputGrid = this.createWrapperGrid();
    labelGrid.appendChild(label);
    inputGrid.appendChild(element);
    wrapper.appendChild(labelGrid);
    wrapper.appendChild(inputGrid);
    return wrapper;
  };

  return CheckField;
}(_AbstractField3.default);

exports.default = CheckField;


module.exports = CheckField;

/***/ })
/******/ ]);