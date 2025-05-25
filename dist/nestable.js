(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Nestable = factory());
})(this, (function () { 'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
      if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
        t && (r = t);
        var n = 0,
          F = function () {};
        return {
          s: F,
          n: function () {
            return n >= r.length ? {
              done: !0
            } : {
              done: !1,
              value: r[n++]
            };
          },
          e: function (r) {
            throw r;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o,
      a = !0,
      u = !1;
    return {
      s: function () {
        t = t.call(r);
      },
      n: function () {
        var r = t.next();
        return a = r.done, r;
      },
      e: function (r) {
        u = !0, o = r;
      },
      f: function () {
        try {
          a || null == t.return || t.return();
        } finally {
          if (u) throw o;
        }
      }
    };
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e && _setPrototypeOf(t, e);
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  var DOM = {
    select: function select(selector) {
      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
      return parent.querySelector(selector);
    },
    selectAll: function selectAll(selector) {
      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
      return parent.querySelectorAll(selector);
    },
    /**
    * Get an elements children that match the selector
    * @param  {Node} elem The base element
    * @param  {String} selector CSS3 selector string
    * @return {Array}
    */
    children: function children(elem, selector) {
      var arr = [];
      var children = elem.children;
      var l = children.length;
      for (var i = 0; i < l; ++i) {
        var child = children[i];
        if (child.matches(selector)) {
          arr.push(child);
        }
      }
      return arr;
    },
    /**
    * Get all DOM element up the tree that match the selector
    * @param  {Node} elem The base element
    * @param  {String} selector CSS3 selector string
    * @return {Array}
    */
    parents: function parents(elem, selector) {
      // Set up a parent array
      var parents = [];

      // Push each parent element to the array
      for (; elem && elem !== document; elem = elem.parentNode) {
        if (selector) {
          if (elem.matches(selector)) {
            parents.push(elem);
          }
          continue;
        }
        parents.push(elem);
      }

      // Return our parent array
      return parents;
    },
    /**
    * Get an element's DOMRect relative to the document instead of the viewport.
    * @param  {Object} el  HTMLElement
    * @return {Object}     Formatted DOMRect copy
    */
    rect: function rect(el) {
      var w = window,
        st = w.pageYOffset !== undefined ? w.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop,
        o = el.getBoundingClientRect(),
        x = w.pageXOffset,
        y = st;
      return {
        left: o.left + x,
        top: o.top + y,
        height: o.height,
        width: o.width
      };
    }
  };

  var Emitter = /*#__PURE__*/function () {
    function Emitter() {
      _classCallCheck(this, Emitter);
    }
    return _createClass(Emitter, [{
      key: "on",
      value:
      /**
      * Add custom event listener
      * @param  {String} event
      * @param  {Function} callback
      * @return {Void}
      */
      function on(listener, fn, capture) {
        if (typeof listener === "string") {
          this.listeners = this.listeners || {};
          this.listeners[listener] = this.listeners[listener] || [];
          this.listeners[listener].push(fn);
        } else {
          arguments[0].addEventListener(arguments[1], arguments[2], false);
        }
      }

      /**
      * Remove custom listener listener
      * @param  {String} listener
      * @param  {Function} callback
      * @return {Void}
      */
    }, {
      key: "off",
      value: function off(listener, fn) {
        if (typeof listener === "string") {
          this.listeners = this.listeners || {};
          if (listener in this.listeners === false) return;
          this.listeners[listener].splice(this.listeners[listener].indexOf(fn), 1);
        } else {
          arguments[0].removeEventListener(arguments[1], arguments[2]);
        }
      }

      /**
      * Fire custom listener
      * @param  {String} listener
      * @return {Void}
      */
    }, {
      key: "emit",
      value: function emit(listener) {
        this.listeners = this.listeners || {};
        if (listener in this.listeners === false) return;
        for (var i = 0; i < this.listeners[listener].length; i++) {
          this.listeners[listener][i].apply(this, Array.prototype.slice.call(arguments, 1));
        }
      }
    }]);
  }();

  var Nestable = /*#__PURE__*/function (_Emitter) {
    function Nestable(list, options) {
      var _this;
      _classCallCheck(this, Nestable);
      _this = _callSuper(this, Nestable);
      _this.defaultConfig = {
        threshold: 40,
        animation: 0,
        collapseButtonContent: "–",
        expandButtonContent: "+",
        includeContent: false,
        maxDepth: 3,
        showPlaceholderOnMove: false,
        nodes: {
          list: "ol",
          item: "li"
        },
        classes: {
          list: "nst-list",
          item: "nst-item",
          content: "nst-content",
          parent: "nst-parent",
          dragging: "nst-dragging",
          handle: "nst-handle",
          placeholder: "nst-placeholder",
          container: "nst-container",
          button: "nst-button",
          collapsed: "nst-collapsed",
          disabled: "nst-disabled",
          error: "nst-error",
          moving: "nst-moving"
        }
      };
      _this.config = Object.assign({}, _this.defaultConfig, options);
      if (options) {
        if (options.nodes) {
          _this.config.nodes = Object.assign({}, _this.defaultConfig.nodes, options.nodes);
        }
        if (options.classes) {
          _this.config.classes = Object.assign({}, _this.defaultConfig.classes, options.classes);
        }
      }
      _this.parent = typeof list === "string" ? DOM.select(list) : list;
      if (!_this.parent) {
        return _possibleConstructorReturn(_this, console.error("Node (".concat(list, ") not found.")));
      }
      if (_this.parent._nestable) {
        return _possibleConstructorReturn(_this, console.error("There is already a Nestable instance active on this node."));
      }
      _this.initialised = false;
      _this.disabled = true;
      _this.last = {
        x: 0,
        y: 0
      };
      _this.init();
      return _this;
    }
    _inherits(Nestable, _Emitter);
    return _createClass(Nestable, [{
      key: "init",
      value: function init(options) {
        var _this2 = this;
        if (!this.initialised) {
          this.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch;
          if (options) {
            this.config = Object.assign({}, this.defaultConfig, options);
          }
          this.dragDepth = 0;
          this.parent.classList.add(this.config.classes.list);
          this.parent.classList.add(this.config.classes.parent);
          var items = DOM.children(this.parent, this.config.nodes.item);
          var _iterator = _createForOfIteratorHelper(items),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;
              this._nest(item);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          this.placeholder = document.createElement(this.config.nodes.item);
          this.placeholder.classList.add(this.config.classes.placeholder);
          this._getData();
          this.parent._nestable = this;
          if (!window._nestableInstances) {
            window._nestableInstances = 1;
            this.id = 1;
          } else {
            window._nestableInstances += 1;
            this.id = window._nestableInstances;
          }
          this.enable();
          this._getData();
          setTimeout(function () {
            _this2.emit("init");
          }, 10);
          this.initialised = true;
          if (this.config.json) {
            this.load(this.config.json);
          }
          if (this.config.data) {
            var req = new XMLHttpRequest();
            req.responseType = 'json';
            req.open('GET', this.config.data, true);
            req.onload = function () {
              _this2.load(req);
            };
            req.send(null);
          }
        }
      }
    }, {
      key: "load",
      value: function load(data) {
        var _this3 = this;
        this.removeAll();
        if ("response" in data) {
          data = data.response;
        }
        var _nest2 = function nest(item) {
          var el = document.createElement(_this3.config.nodes.item);
          el.textContent = item.content;
          el.setAttribute("data-name", item.content);
          if (item.hasOwnProperty('id') && item.id != null) {
            el.setAttribute("data-id", item.id);
          }
          if (item.hasOwnProperty('url') && item.url != null) {
            el.setAttribute("data-url", item.url);
          }
          if (item.hasOwnProperty('visible') && item.visible != null) {
            el.setAttribute("data-visibile", item.visible);
          }
          /*
          if (item.hasOwnProperty('parent') && item.parent != null) {
              el.setAttribute("data-parent", item.parent);
          }
          if (item.hasOwnProperty('position') && item.position != null) {
              el.setAttribute("data-position", item.position);
          }
          */

          if (item.children) {
            var list = document.createElement(_this3.config.nodes.list);
            el.appendChild(list);
            var _iterator2 = _createForOfIteratorHelper(item.children),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var child = _step2.value;
                list.appendChild(_nest2(child));
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          return el;
        };
        var _iterator3 = _createForOfIteratorHelper(data),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var item = _step3.value;
            this._nest(this.parent.appendChild(_nest2(item)));
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        this.emit("loaded");
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this4 = this;
        if (this.initialised) {
          this.initialised = false;
          this.disable();
          this.parent.classList.remove(this.config.classes.list);
          this.parent.classList.remove(this.config.classes.parent);
          delete this.parent._nestable;
          if (window._nestableInstances) {
            window._nestableInstances -= 1;
          }
          var _destroyItem = function destroyItem(item) {
            item.classList.remove(_this4.config.classes.item);
            item.classList.remove(_this4.config.classes.collapsed);
            var listEl = item.querySelector(_this4.config.nodes.list);
            var contentEl = item.querySelector(".".concat(_this4.config.classes.content));
            item.querySelector(".".concat(_this4.config.classes.handle));
            var buttonEl = item.querySelector(".".concat(_this4.config.classes.button));

            // default handle is also the content container
            contentEl.classList.contains(_this4.config.classes.handle);
            var div = document.createDocumentFragment();
            for (var i = contentEl.childNodes.length - 1; i >= 0; i--) {
              div.insertBefore(contentEl.childNodes[i], div.firstChild);
            }
            item.insertBefore(div, contentEl);
            item.removeChild(contentEl);
            if (listEl) {
              listEl.classList.remove(_this4.config.classes.list);
              item.removeChild(buttonEl);
              var _items = DOM.children(listEl, _this4.config.nodes.item);
              var _iterator4 = _createForOfIteratorHelper(_items),
                _step4;
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var _item = _step4.value;
                  _destroyItem(_item);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            }
          };
          var items = DOM.children(this.parent, this.config.nodes.item);
          var _iterator5 = _createForOfIteratorHelper(items),
            _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var item = _step5.value;
              _destroyItem(item);
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
          this.emit("destroy", this.parent);
        }
      }
    }, {
      key: "bind",
      value: function bind() {
        this.events = {
          start: this._onMouseDown.bind(this),
          move: this._onMouseMove.bind(this),
          end: this._onMouseUp.bind(this)
        };
        if (this.touch) {
          this.parent.addEventListener("touchstart", this.events.start, false);
          document.addEventListener("touchmove", this.events.move, false);
          document.addEventListener("touchend", this.events.end, false);
          document.addEventListener("touchcancel", this.events.end, false);
        } else {
          this.parent.addEventListener("mousedown", this.events.start, false);
          document.addEventListener("mousemove", this.events.move, false);
          document.addEventListener("mouseup", this.events.end, false);
        }
      }
    }, {
      key: "unbind",
      value: function unbind() {
        this.parent.removeEventListener("mousedown", this.events.start);
        document.removeEventListener("mousemove", this.events.move);
        document.removeEventListener("mouseup", this.events.end);
      }
    }, {
      key: "enable",
      value: function enable() {
        if (this.disabled) {
          this.bind();
          this.parent.classList.remove(this.config.classes.disabled);
          this.disabled = false;
        }
      }
    }, {
      key: "disable",
      value: function disable() {
        if (!this.disabled) {
          this.unbind();
          this.parent.classList.add(this.config.classes.disabled);
          this.disabled = true;
        }
      }
    }, {
      key: "serialise",
      value: function serialise() {
        this.serialize();
      }
    }, {
      key: "serialize",
      value: function serialize() {
        return this._getData("data");
      }
    }, {
      key: "json",
      value: function json() {
        // Convert the structure from this._getData() to a JSON-friendly format
        function traverseData(data) {
          var _this5 = this;
          return data.map(function (item) {
            var result = {};

            // If includeContent is enabled, use the content, otherwise use data-name or data-id
            if (item.data) {
              /*
              if (this.config.includeContent && item.content) {
                  result.content = item.content;
              } else if (item.data.name) {
                  result.content = item.data.name;
              } else if (item.data.id) {
                  result.id = item.data.id;
              }
              */
              result.name = item.data.name || null;
              result.id = item.data.id || null;
              result.url = item.data.url || null;
              result.visible = item.data.visible || null;
              // Copy all dataset properties
              Object.assign(result, item.data);
            }
            if (item.children && item.children.length) {
              result.children = traverseData.call(_this5, item.children);
            }
            return result;
          });
        }
        return traverseData.call(this, this._getData("data"));
      }
    }, {
      key: "collapseAll",
      value: function collapseAll() {
        var items = DOM.selectAll(".".concat(this.config.classes.item), this.parent);
        var _iterator6 = _createForOfIteratorHelper(items),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var item = _step6.value;
            if (!item.classList.contains(this.config.classes.collapsed)) {
              var btn = item.querySelector(".".concat(this.config.classes.button));
              if (btn) {
                this._collapseList(item, btn);
              }
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
    }, {
      key: "expandAll",
      value: function expandAll() {
        var items = DOM.selectAll(".".concat(this.config.classes.item), this.parent);
        var _iterator7 = _createForOfIteratorHelper(items),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var item = _step7.value;
            if (item.classList.contains(this.config.classes.collapsed)) {
              var btn = item.querySelector(".".concat(this.config.classes.button));
              if (btn) {
                this._expandList(item, btn);
              }
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
    }, {
      key: "add",
      value: function add(element, parent) {
        if (!parent) {
          parent = this.parent;
        }
        this._nest(element);
        if (parent !== this.parent) {
          var listEl = DOM.select(this.config.nodes.list, parent);
          if (!listEl) {
            parent = this._makeParent(parent);
          } else {
            parent = listEl;
          }
        }
        parent.appendChild(element);
        this.update();
      }
    }, {
      key: "remove",
      value: function remove(element) {
        var removeChildElements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var parentEl = element.closest(this.config.nodes.list);
        if (!removeChildElements) {
          var childList = element.querySelector(".".concat(this.config.classes.list));
          if (childList) {
            var childElements = DOM.children(childList, this.config.nodes.item);
            if (childElements.length) {
              var frag = document.createDocumentFragment();
              for (var i = childElements.length - 1; i >= 0; i--) {
                var childElement = childElements[i];
                frag.insertBefore(childElement, frag.firstElementChild);
              }
              parentEl.replaceChild(frag, element);
            }
          }
        } else {
          parentEl.removeChild(element);
        }
        this.update();
      }
    }, {
      key: "removeAll",
      value: function removeAll() {
        var nodes = this.parent.children;
        for (var i = nodes.length - 1; i >= 0; i--) {
          this.parent.removeChild(nodes[i]);
        }
      }
    }, {
      key: "update",
      value: function update() {
        this._getData("nodes");
        this.emit("update");
      }
    }, {
      key: "_nest",
      value: function _nest(el) {
        var handle = el.querySelector(".".concat(this.config.classes.handle));
        var content = document.createElement("div");
        content.classList.add(this.config.classes.content);
        var nodes = el.childNodes;
        if (!handle) {
          content.classList.add(this.config.classes.handle);
          for (var i = nodes.length - 1; i >= 0; i--) {
            var node = nodes[i];
            if (node.nodeName.toLowerCase() !== this.config.nodes.list) {
              content.insertBefore(node, content.firstChild);
            }
          }
        } else {
          for (var i = nodes.length - 1; i >= 0; i--) {
            var _node = nodes[i];
            if (_node !== handle && _node.nodeName.toLowerCase() !== this.config.nodes.list) {
              content.insertBefore(_node, content.firstChild);
            }
          }
        }
        el.classList.add(this.config.classes.item);
        var list = el.querySelector(this.config.nodes.list);
        if (list) {
          el.insertBefore(content, list);
          var parent = this._makeParent(el);
          var items = DOM.children(parent, this.config.nodes.item);
          if (el.classList.contains(this.config.classes.collapsed)) {
            this._collapseList(el);
          }
          var _iterator8 = _createForOfIteratorHelper(items),
            _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var _i = _step8.value;
              this._nest(_i);
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        } else {
          el.appendChild(content);
        }
      }
    }, {
      key: "_isDisabled",
      value: function _isDisabled(item) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "disabled";
        if (item === null) {
          return false;
        }

        // item has the [data-nestable-disabled] attribute
        if ("nestableDisabled" in item.dataset) {
          if (type === "disabled" && (!item.dataset.nestableDisabled.length || item.dataset.nestableDisabled === "disabled") || type === "dragging" && item.dataset.nestableDisabled === "dragging" || type === "nesting" && item.dataset.nestableDisabled === "nesting") {
            return true;
          }
        }
        if (item.classList.contains(this.config.classes.disabled)) {
          return true;
        }
        var listEls = DOM.parents(item, ".".concat(this.config.classes.disabled));
        if (listEls.length) {
          return true;
        }
        return false;
      }

      /**
       * Get mouse / touch event
       * @return {Object}
       */
    }, {
      key: "_getEvent",
      value: function _getEvent(e) {
        if (this.touch) {
          if (e.type === "touchend") {
            return e.changedTouches[0];
          }
          return e.touches[0];
        }
        return e;
      }
    }, {
      key: "_onMouseDown",
      value: function _onMouseDown(e) {
        var evt = this._getEvent(e);
        var button = e.target.closest(".".concat(this.config.classes.button));
        var item = e.target.closest(".".concat(this.config.classes.item));
        if (button) {
          return this._toggleList(item, button);
        }
        var handle = e.target.closest(".".concat(this.config.classes.handle));
        if (!handle) {
          return false;
        }
        if (item) {
          if (this._isDisabled(item) || this._isDisabled(item.parentNode.closest(".".concat(this.config.classes.item)))) {
            return false;
          }
          if (this._isDisabled(item, "dragging")) {
            this.emit("error.dragging.disabled", item);
            return false;
          }
          e.preventDefault();
          this.parent.classList.add(this.config.classes.moving);
          item.classList.add(this.config.classes.dragging);
          var rect = DOM.rect(item);
          this.origin = {
            x: evt.pageX,
            y: evt.pageY,
            original: {
              x: evt.pageX,
              y: evt.pageY
            }
          };
          this.hierarchy = {
            movedNode: item,
            originalParent: item.parentNode,
            originalParentItem: item.parentNode.closest(".".concat(this.config.classes.item))
          };
          this.active = {
            maxDepth: false,
            collapsedParent: false,
            disabledParent: false,
            confinedParent: false,
            node: item,
            rect: rect,
            parent: false,
            axis: false
          };

          // item has the [data-nestable-parent] attribute
          if ("nestableParent" in item.dataset) {
            var parent = document.getElementById(item.dataset.nestableParent);
            if (parent) {
              this.active.parent = parent;
            }
          }

          // item has the [data-nestable-axis] attribute
          if ("nestableAxis" in item.dataset) {
            var axis = item.dataset.nestableAxis;
            if (axis === "x") {
              this.active.axis = "x";
            } else if (axis === "y") {
              this.active.axis = "y";
            }
          }
          this.placeholder.style.height = "".concat(rect.height, "px");
          // this.placeholder.style.width = `${rect.width}px`;

          if (this.config.showPlaceholderOnMove) {
            this.placeholder.style.opacity = 0;
          }
          if (!this.container) {
            this.container = document.createElement(this.config.nodes.list);
            this.container.classList.add(this.config.classes.list);
            this.container.classList.add(this.config.classes.container);
            this.container.id = "nestable_".concat(this.id);
          }
          this.container.style.left = "".concat(rect.left, "px");
          this.container.style.top = "".concat(rect.top, "px");
          this.container.style.height = "".concat(rect.height, "px");
          this.container.style.width = "".concat(rect.width, "px");
          item.parentNode.insertBefore(this.placeholder, item);
          document.body.appendChild(this.container);
          this.container.appendChild(item);
          this.newParent = false;
          this.dragDepth = 0;

          // total depth of dragging item
          var items = DOM.selectAll(this.config.nodes.item, item);
          for (var i = 0; i < items.length; i++) {
            var depth = DOM.parents(items[i], this.config.nodes.list).length - 1;
            if (depth > this.dragDepth) {
              this.dragDepth = depth;
            }
          }
          this.emit("start", this.active);
        }
      }
    }, {
      key: "_onMouseMove",
      value: function _onMouseMove(e) {
        if (this.active) {
          if (this.config.showPlaceholderOnMove) {
            this.placeholder.style.opacity = 1;
          }
          e = this._getEvent(e);
          var x = e.pageX - this.origin.x;
          var y = e.pageY - this.origin.y;
          if (e.pageY > this.last.y) {
            this.last.dirY = 1;
          } else if (e.pageY < this.last.y) {
            this.last.dirY = -1;
          }
          if (e.pageX > this.last.x) {
            this.last.dirX = 1;
          } else if (e.pageX < this.last.x) {
            this.last.dirX = -1;
          }
          var movement = false;
          if (Math.abs(x) > Math.abs(y)) {
            movement = "x";
          } else if (Math.abs(x) < Math.abs(y)) {
            movement = "y";
          }
          var scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
          var elements = document.elementsFromPoint(e.pageX, e.pageY - scrollTop);
          if (movement === "x" && this.active.axis !== "y") {
            if (this.last.dirX > 0 && x > this.config.threshold) {
              // moving right				

              var prevEl = this.placeholder.previousElementSibling;
              if (prevEl) {
                if (prevEl.classList.contains(this.config.classes.collapsed)) {
                  if (!this.active.collapsedParent) {
                    this.emit("error.collapsed", this.active.node, prevEl);
                    this.active.collapsedParent = true;
                  }
                } else {
                  var disabled = this._isDisabled(prevEl);
                  var cantNest = this._isDisabled(prevEl, "nesting");
                  if (!disabled) {
                    var depth = DOM.parents(this.placeholder, this.config.nodes.list).length;
                    var allowNesting = depth + this.dragDepth <= this.config.maxDepth;
                    var parentEl = prevEl.querySelector(this.config.nodes.list);
                    if (cantNest) {
                      if (!this.active.nestDisabled) {
                        this.emit("error.nesting.disabled", this.active.node);
                        this.active.nestDisabled = true;
                      }
                    } else {
                      if (allowNesting) {
                        this.active.maxDepth = false;
                        var oldParent = this.placeholder.closest(".".concat(this.config.classes.list));
                        if (!parentEl) {
                          parentEl = this._makeParent(prevEl);
                        }
                        this._moveElement(this.placeholder, {
                          parent: parentEl,
                          type: "appendChild"
                        });
                        this.emit("nest", parentEl, oldParent);
                        this.origin.x = e.pageX;
                      } else {
                        if (!this.active.maxDepth) {
                          this.emit("error.maxdepth", this.active.node, this.config.maxDepth);
                          this.active.maxDepth = true;
                        }
                      }
                    }
                  } else {
                    if (!this.active.disabledParent) {
                      this.emit("error.disabled");
                      this.active.disabledParent = true;
                    }
                  }
                }
              }
            } else if (this.last.dirX < 0 && x < -this.config.threshold) {
              // moving left

              this.active.maxDepth = false;
              this.active.nestDisabled = false;
              this.active.disabledParent = false;
              this.active.collapsedParent = false;
              // this.active.confinedParent = false;

              var listEl = this.placeholder.closest(this.config.nodes.list);
              var _parentEl = listEl.closest(this.config.nodes.item);
              if (_parentEl && (listEl.childElementCount > 1 && this.placeholder !== listEl.firstElementChild || listEl.childElementCount < 2 && this.placeholder === listEl.firstElementChild)) {
                var nextEl = _parentEl.nextElementSibling;
                var _oldParent = this.placeholder.closest(".".concat(this.config.classes.list));
                if (nextEl) {
                  var list = nextEl.closest(this.config.nodes.list);
                  this._moveElement(this.placeholder, {
                    parent: list,
                    type: "insertBefore",
                    sibling: nextEl
                  });
                  this.origin.x = e.pageX;
                } else {
                  this._moveElement(this.placeholder, {
                    parent: _parentEl.closest(this.config.nodes.list),
                    type: "appendChild"
                  });
                  this.origin.x = e.pageX;
                }
                this.emit("unnest", _parentEl, _oldParent);
              }
            }
          } else {
            // check if we're over a valid item
            var _iterator9 = _createForOfIteratorHelper(elements),
              _step9;
            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var element = _step9.value;
                var moveY = element !== this.active.node && !this.active.node.contains(element) && element.classList.contains(this.config.classes.content) && this.active.axis !== "x";
                if (moveY) {
                  var item = element.closest(".".concat(this.config.classes.item));
                  if (item) {
                    if (movement === "y") {
                      var childListEl = item.querySelector(this.config.nodes.list);
                      if (childListEl && !item.classList.contains(this.config.classes.collapsed)) {
                        // item is parent
                        if (this.last.dirY > 0) {
                          // moving item down
                          this._moveElement(this.placeholder, {
                            parent: item.lastElementChild,
                            type: "insertBefore",
                            sibling: item.lastElementChild.firstElementChild,
                            animatable: item.querySelector(".".concat(this.config.classes.content))
                          });
                        } else if (this.last.dirY < 0) {
                          // moving item up
                          this._moveElement(this.placeholder, {
                            parent: item.parentNode,
                            type: "insertBefore",
                            sibling: item,
                            animatable: item.querySelector(".".concat(this.config.classes.content))
                          });
                        }
                        this.emit("reorder");
                      } else {
                        // item is not a parent
                        if (this.last.dirY > 0) {
                          // moving item down
                          var _nextEl = item.nextElementSibling;
                          if (_nextEl) {
                            // item has an item below it
                            this._moveElement(this.placeholder, {
                              parent: item.parentNode,
                              type: "insertBefore",
                              sibling: _nextEl,
                              animatable: item.querySelector(".".concat(this.config.classes.content))
                            });
                          } else {
                            // item is last in list				
                            this._moveElement(this.placeholder, {
                              parent: item.closest(this.config.nodes.list),
                              type: "appendChild",
                              animatable: item.querySelector(".".concat(this.config.classes.content))
                            });
                          }
                        } else if (this.last.dirY < 0) {
                          // moving item up
                          this._moveElement(this.placeholder, {
                            parent: item.parentNode,
                            type: "insertBefore",
                            sibling: item,
                            animatable: item.querySelector(".".concat(this.config.classes.content))
                          });
                        }
                        this.emit("reorder");
                      }
                    }
                  }
                  var _parentEl2 = item.closest(".".concat(this.config.classes.parent));
                  if (_parentEl2) {
                    if (_parentEl2 !== this.parent) {
                      if (_parentEl2._nestable) {
                        this.newParent = _parentEl2;
                      }
                    }
                  }
                }
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
          }
          this.placeholder.classList.toggle(this.config.classes.error, this.active.disabledParent || this.active.maxDepth || this.active.collapsedParent || this.active.confinedParent);
          var mx = e.pageX - this.origin.original.x;
          var my = e.pageY - this.origin.original.y;

          // item movement is confined
          if (this.active.axis) {
            if (this.active.axis === "x") {
              my = 0;
            } else if (this.active.axis === "y") {
              mx = 0;
            }
          }
          this.container.style.transform = "translate3d(".concat(mx, "px, ").concat(my, "px, 0)");
          this.lastParent = this.placeholder.parentNode;
          this.hierarchy.newParent = this.lastParent;
          this.hierarchy.newParentItem = this.lastParent.closest(".".concat(this.config.classes.item));
          this.emit("move", this.active);
        }
        this.last = {
          x: e.pageX,
          y: e.pageY
        };
      }
    }, {
      key: "_moveElement",
      value: function _moveElement(el, type) {
        var ppos = false;
        var ipos = false;

        // prevent moving if item has disabled parents
        if (this._isDisabled(type.parent) || this._isDisabled(type.parent.closest(".".concat(this.config.classes.item)))) {
          return false;
        }

        // prevent moving if item is confined to parent with data-nestable-parent
        if (this.active.parent) {
          if (!DOM.parents(type.parent, "#".concat(this.active.parent.id)).includes(this.active.parent)) {
            if (!this.active.confinedParent) {
              this.emit("error.confined", el, this.active.parent, type.parent);
              this.active.confinedParent = true;
            }
            return false;
          }
        }
        var listEl = el.closest(this.config.nodes.list);

        // if animation is enabled, we need to get the original position of the element first
        if (this.config.animation > 0) {
          ppos = DOM.rect(this.placeholder);
          if (type.animatable) {
            ipos = DOM.rect(type.animatable);
          }
        }
        if (type.type === "insertBefore") {
          type.parent.insertBefore(el, type.sibling);
        } else if (type.type === "appendChild") {
          type.parent.appendChild(el);
        }
        if (!listEl.childElementCount) {
          this._unmakeParent(listEl.parentNode);
        }
        this.emit("order.change", this.active.node, type.parent, listEl);

        // animate the elements
        if (this.config.animation > 0) {
          this._animateElement(this.placeholder, ppos);
          if (type.animatable && ipos) {
            this._animateElement(type.animatable, ipos);
          }
        }
      }
    }, {
      key: "_animateElement",
      value: function _animateElement(el, obj) {
        // Animate an element's change in position
        // caused by a change in the DOM order
        var css = el.style;

        // Get the node's positon AFTER the change
        var r = DOM.rect(el);

        // Calculate the difference in position
        var x = obj.left - r.left;
        var y = obj.top - r.top;

        // Move the node to it's original position before the DOM change
        css.transform = "translate3d(".concat(x, "px, ").concat(y, "px, 0px)");
        // css.zIndex = 10000;

        // Trigger a repaint so the next bit works
        this._repaint(el);

        // Reset the transform, but add a transition so it's smooth
        css.transform = "translate3d(0px, 0px, 0px)";
        css.transition = "transform ".concat(this.config.animation, "ms");

        // Reset the style
        setTimeout(function () {
          // console.log("foo")
          // css.zIndex = "";
          css.transform = "";
          css.transition = "";
        }, this.config.animation);
      }
    }, {
      key: "_repaint",
      value: function _repaint(el) {
        return el.offsetHeight;
      }
    }, {
      key: "_onMouseUp",
      value: function _onMouseUp(e) {
        if (this.active) {
          if (this.config.showPlaceholderOnMove) {
            this.placeholder.style.opacity = 0;
          }
          e = this._getEvent(e);
          var prect = DOM.rect(this.active.node);

          // this.active.node.removeAttribute("style");
          this.container.removeAttribute("style");
          this.parent.classList.remove(this.config.classes.moving);
          this.placeholder.parentNode.replaceChild(this.active.node, this.placeholder);
          this._animateElement(this.active.node, prect);
          this.placeholder.classList.remove(this.config.classes.error);
          this.active.node.classList.remove(this.config.classes.dragging);
          this.active = false;
          document.body.removeChild(this.container);
          this._getData();
          if (this.newParent) {
            this.hierarchy.newInstance = this.newParent._nestable;
            this.newParent._nestable._getData();
          }
          this.hierarchy.hierarchy = this.data;
          this.emit("stop", this.hierarchy);
          this.update();
        }
      }
    }, {
      key: "_toggleList",
      value: function _toggleList(item, btn) {
        if (!item.classList.contains(this.config.classes.collapsed)) {
          this._collapseList(item, btn);
        } else {
          this._expandList(item, btn);
        }
      }
    }, {
      key: "_collapseList",
      value: function _collapseList(item, btn) {
        if (!btn) {
          btn = item.querySelector(".".concat(this.config.classes.button));
        }
        btn.textContent = this.config.expandButtonContent;
        item.classList.add(this.config.classes.collapsed);
        this.emit("list.collapse", item);
      }
    }, {
      key: "_expandList",
      value: function _expandList(item, btn) {
        if (!btn) {
          btn = item.querySelector(".".concat(this.config.classes.button));
        }
        btn.textContent = this.config.collapseButtonContent;
        item.classList.remove(this.config.classes.collapsed);
        this.emit("list.expand", item);
      }
    }, {
      key: "_makeParent",
      value: function _makeParent(el) {
        var parentEl = el.querySelector(this.config.nodes.list);
        if (!parentEl) {
          parentEl = document.createElement(this.config.nodes.list);
          parentEl.classList.add(this.config.classes.list);
          el.appendChild(parentEl);
        } else {
          parentEl.classList.add(this.config.classes.list);
        }
        var button = document.createElement("button");
        button.classList.add(this.config.classes.button);
        button.type = "button";
        button.textContent = this.config.collapseButtonContent;
        el.insertBefore(button, el.firstElementChild);
        return parentEl;
      }
    }, {
      key: "_unmakeParent",
      value: function _unmakeParent(el) {
        var list = el.querySelector(this.config.nodes.list);
        var btn = el.querySelector("button");
        if (list) {
          el.removeChild(list);
        }
        if (btn) {
          el.removeChild(btn);
        }
        return;
      }
    }, {
      key: "_getData",
      value: function _getData() {
        var _this6 = this;
        var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "nodes";
        var data = [];
        var _step0 = function step(level) {
          var array = [];
          var items = DOM.children(level, _this6.config.nodes.item);
          items.forEach(function (li) {
            var item = {};
            if (type === "nodes") {
              item.node = li;
            } else {
              item.data = Object.assign({}, li.dataset);
              if (_this6.config.includeContent) {
                var content = li.querySelector(".".concat(_this6.config.classes.content));
                if (content) {
                  item.content = content.innerHTML;
                }
              }
            }
            var sub = li.querySelector(_this6.config.nodes.list);
            if (sub) {
              item.children = _step0(sub);
            }
            array.push(item);
          });
          return array;
        };
        data = _step0(this.parent);
        if (type === "nodes") {
          this.data = data;
        }
        return data;
      }
    }]);
  }(Emitter);

  return Nestable;

}));
