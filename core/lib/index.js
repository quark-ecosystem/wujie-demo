var de = Object.defineProperty;
var pe = (r, e, t) => e in r ? de(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var T = (r, e, t) => (pe(r, typeof e != "symbol" ? e + "" : e, t), t);
function M(r) {
  "@babel/helpers - typeof";
  return M = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, M(r);
}
function he(r, e) {
  if (M(r) != "object" || !r)
    return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e || "default");
    if (M(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
function fe(r) {
  var e = he(r, "string");
  return M(e) == "symbol" ? e : e + "";
}
function x(r, e, t) {
  return (e = fe(e)) in r ? Object.defineProperty(r, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = t, r;
}
var R = {}, ee = [], ve = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function te(r) {
  var e = r.parentNode;
  e && e.removeChild(r);
}
function k(r) {
  return typeof r == "function";
}
var W = ee.slice, m = { _catchError: function(r, e, t, n) {
  for (var o, l, i; e = e._parent; )
    if ((o = e._component) && !o._processingException)
      try {
        if ((l = o.constructor) && l.getDerivedStateFromError != null && (Object.assign(o, l.getDerivedStateFromError(r)), i = o._dirty), o.componentDidCatch != null && (o.componentDidCatch(r, n || {}), i = o._dirty), i)
          return o._pendingError = o;
      } catch (a) {
        r = a;
      }
  throw r;
} }, me = 0;
function re(r, e, t) {
  var n, o, l, i = {};
  for (l in e)
    l == "key" ? n = e[l] : l == "ref" ? o = e[l] : i[l] = e[l];
  if (arguments.length > 2 && (i.children = arguments.length > 3 ? W.call(arguments, 2) : t), typeof r == "function" && r.defaultProps != null)
    for (l in r.defaultProps)
      i[l] === void 0 && (i[l] = r.defaultProps[l]);
  return H(r, i, n, o, null);
}
function H(r, e, t, n, o) {
  var l = { type: r, props: e, key: t, ref: n, _children: null, _parent: null, _depth: 0, _dom: null, _nextDom: void 0, _component: null, _hydrating: null, constructor: void 0, _original: o ?? ++me };
  return o == null && m.vnode != null && m.vnode(l), l;
}
function O(r) {
  return r.children;
}
function ne(r) {
  this.props = r, this._dirty = !1;
}
function q(r, e) {
  if (e == null)
    return r._parent ? q(r._parent, r._parent._children.indexOf(r) + 1) : null;
  for (var t; e < r._children.length; e++)
    if ((t = r._children[e]) != null && t._dom != null)
      return t._dom;
  return typeof r.type == "function" ? q(r) : null;
}
function Q(r, e, t, n, o, l, i) {
  var a, s, u, c, y, D, _, f = n && n._children || ee, d = f.length;
  for (t._children = [], a = 0; a < e.length; a++)
    if ((c = (c = e[a]) == null || typeof c == "boolean" || typeof c == "function" ? t._children[a] = null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? t._children[a] = H(null, c, null, null, c) : Array.isArray(c) ? t._children[a] = H(O, { children: c }, null, null, null) : c._depth > 0 ? t._children[a] = H(c.type, c.props, c.key, c.ref ? c.ref : null, c._original) : t._children[a] = c) != null) {
      if (c._parent = t, c._depth = t._depth + 1, (u = f[a]) === null || u && c.key == u.key && c.type === u.type)
        f[a] = void 0;
      else
        for (s = 0; s < d; s++) {
          if ((u = f[s]) && c.key == u.key && c.type === u.type) {
            f[s] = void 0;
            break;
          }
          u = null;
        }
      ae(r, c, u = u || R, o, l, i), y = c._dom, (s = c.ref) && u.ref != s && (_ || (_ = []), u.ref && _.push(u.ref, null, c), _.push(s, c._component || y, c)), y != null ? (D == null && (D = y), typeof c.type == "function" && c._children === u._children ? c._nextDom = i = oe(c, i, r) : i = le(r, c, u, f, y, i), typeof t.type == "function" && (t._nextDom = i)) : i && u._dom == i && i.parentNode != r && (i = q(u));
    }
  for (t._dom = D, a = d; a--; )
    f[a] != null && (typeof t.type == "function" && f[a]._dom != null && f[a]._dom == t._nextDom && (t._nextDom = ie(n).nextSibling), ce(f[a], f[a]));
  if (_)
    for (a = 0; a < _.length; a++)
      se(_[a], _[++a], _[++a]);
}
function oe(r, e, t) {
  for (var n = r._children, o = 0; n && o < n.length; o++) {
    var l = n[o];
    l && (l._parent = r, e = typeof l.type == "function" ? oe(l, e, t) : le(t, l, l, n, l._dom, e));
  }
  return e;
}
function le(r, e, t, n, o, l) {
  var i;
  if (e._nextDom !== void 0)
    i = e._nextDom, e._nextDom = void 0;
  else if (t == null || o != l || o.parentNode == null)
    e:
      if (l == null || l.parentNode !== r)
        r.appendChild(o), i = null;
      else {
        for (var a = l, s = 0; (a = a.nextSibling) && s < n.length; s += 1)
          if (a == o)
            break e;
        r.insertBefore(o, l), i = l;
      }
  return l = i !== void 0 ? i : o.nextSibling;
}
function ie(r) {
  if (r.type == null || typeof r.type == "string")
    return r._dom;
  if (r._children)
    for (var e = r._children.length - 1; e >= 0; e--) {
      var t = r._children[e];
      if (t) {
        var n = ie(t);
        if (n)
          return n;
      }
    }
  return null;
}
function X(r, e, t) {
  e[0] === "-" ? r.setProperty(e, t ?? "") : t == null ? r[e] = "" : typeof t != "number" || ve.test(e) ? r[e] = t : r[e] = t + "px";
}
function j(r, e, t, n, o) {
  var l;
  e:
    if (e === "style")
      if (typeof t == "string")
        r.style.cssText = t;
      else {
        if (typeof n == "string" && (r.style.cssText = n = ""), n)
          for (e in n)
            t && e in t || X(r.style, e, "");
        if (t)
          for (e in t)
            n && t[e] === n[e] || X(r.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      if (l = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in r ? e.toLowerCase().slice(2) : e.slice(2), r._listeners || (r._listeners = {}), r._listeners[e + l] = t, t) {
        if (!n) {
          var i = l ? Z : Y;
          r.addEventListener(e, i, l);
        }
      } else {
        var a = l ? Z : Y;
        r.removeEventListener(e, a, l);
      }
    else if (e !== "dangerouslySetInnerHTML") {
      if (o)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in r)
        try {
          r[e] = t ?? "";
          break e;
        } catch {
        }
      typeof t == "function" || (t == null || t === !1 && e.indexOf("-") == -1 ? r.removeAttribute(e) : r.setAttribute(e, t));
    }
}
function Y(r) {
  return this._listeners[r.type + !1](m.event ? m.event(r) : r);
}
function Z(r) {
  return this._listeners[r.type + !0](m.event ? m.event(r) : r);
}
function ae(r, e, t, n, o, l) {
  var i, a = e.type;
  if (e.constructor !== void 0)
    return null;
  (i = m._diff) && i(e);
  try {
    e:
      if (typeof a == "function") {
        var s, u, c, y = e.props;
        if (t._component)
          c = (s = e._component = t._component)._processingException = s._pendingError;
        else {
          if ("prototype" in a && a.prototype.render && process.env.NODE_ENV === "development")
            throw new Error("Class component in render method is not supported.");
          e._component = s = new ne(y), s.constructor = a, s.render = ye, s.props = y, u = s._dirty = !0;
        }
        if (s.props, s._vnode = e, !u) {
          if (e._original === t._original) {
            e._dom = t._dom, e._children = t._children, e._children.forEach((d) => {
              d && (d._parent = e);
            });
            break e;
          }
        }
        s.props = y, s._parentDom = r;
        var D = m._render, _ = 0;
        do
          s._dirty = !1, D && D(e), i = s.render(s.props);
        while (s._dirty && ++_ < 25);
        var f = i != null && i.type === O && i.key == null ? i.props.children : i;
        Q(r, Array.isArray(f) ? f : [f], e, t, n, o, l), s.base = e._dom, c && (s._pendingError = s._processingException = null);
      } else
        o == null && e._original === t._original ? (e._children = t._children, e._dom = t._dom) : e._dom = function(d, C, P, L, v) {
          var w = P.props, g = C.props, b = C.type, p = 0;
          if (b === "svg" && (L = !0), v != null)
            for (; p < v.length; p++) {
              var A = v[p];
              if (A && "setAttribute" in A == !!b && (b ? A.localName === b : A.nodeType === 3)) {
                d = A, v[p] = null;
                break;
              }
            }
          if (d == null) {
            if (b === null)
              return document.createTextNode(g);
            d = L ? document.createElementNS("http://www.w3.org/2000/svg", b) : document.createElement(b, g.is && g), v = null;
          }
          if (b === null)
            w !== g && (d.data = g);
          else {
            v = v && W.call(d.childNodes);
            var I = (w = P.props || R).dangerouslySetInnerHTML, S = g.dangerouslySetInnerHTML;
            if (v != null)
              for (w = {}, p = 0; p < d.attributes.length; p++)
                w[d.attributes[p].name] = d.attributes[p].value;
            if ((S || I) && (S && (I && S.__html == I.__html || S.__html === d.innerHTML) || (d.innerHTML = S && S.__html || "")), function(K, N, U, J) {
              var h;
              for (h in U)
                h === "children" || h === "key" || h in N || j(K, h, null, U[h], J);
              for (h in N)
                h !== "children" && h !== "key" && h !== "value" && h !== "checked" && U[h] !== N[h] && j(K, h, N[h], U[h], J);
            }(d, g, w, L), S)
              C._children = [];
            else if (p = C.props.children, Q(d, Array.isArray(p) ? p : [p], C, P, L && b !== "foreignObject", v, v ? v[0] : P._children && q(P, 0)), v != null)
              for (p = v.length; p--; )
                v[p] != null && te(v[p]);
            "value" in g && (p = g.value) !== void 0 && (p !== d.value || b === "progress" && !p || b === "option" && p !== w.value) && j(d, "value", p, w.value, !1), "checked" in g && (p = g.checked) !== void 0 && p !== d.checked && j(d, "checked", p, w.checked, !1);
          }
          return d;
        }(t._dom, e, t, n, o);
    (i = m.diffed) && i(e);
  } catch (d) {
    e._original = null, o != null && (e._dom = l, o[o.indexOf(l)] = null), m._catchError(d, e, t);
  }
}
function se(r, e, t) {
  try {
    typeof r == "function" ? r(e) : r.current = e;
  } catch (n) {
    m._catchError(n, t);
  }
}
function ce(r, e, t) {
  var n;
  if (m.unmount && m.unmount(r), (n = r.ref) && (n.current && n.current !== r._dom || se(n, null, e)), (n = r._component) != null && (n.base = n._parentDom = null, r._component = void 0), n = r._children)
    for (var o = 0; o < n.length; o++)
      n[o] && ce(n[o], e, t || typeof r.type != "function");
  t || r._dom == null || te(r._dom), r._parent = r._dom = r._nextDom = void 0;
}
function ye(r) {
  return this.constructor(r);
}
ne.prototype.render = O;
class V {
  constructor() {
    x(this, "map", /* @__PURE__ */ new Map());
  }
  get(e, t) {
    var n = this.map.get(e);
    if (n)
      return t ? n.get(t) : n;
  }
  set(e, t, n) {
    var o, l = this.map.get(e);
    l || (l = /* @__PURE__ */ new Map(), this.map.set(e, l)), (o = l) === null || o === void 0 || o.set(t, n);
  }
  forEach(e) {
    this.map.forEach((t, n) => {
      t.forEach((o, l) => {
        e(o, n, l);
      });
    });
  }
  delete(e) {
    this.map.delete(e);
  }
  deleteAll() {
    this.map.forEach((e, t) => {
      this.map.delete(t);
    });
  }
}
class _e {
  constructor() {
    x(this, "eventMap", new V()), x(this, "bindListener", (e, t, n) => {
      if (e && t && n) {
        var o = this.eventMap.get(e, t);
        o || (o = /* @__PURE__ */ new Set(), this.eventMap.set(e, t, o)), o.has(n) || (o.add(n), e.addEventListener(t, n, !0));
      }
    }), x(this, "removeAllListener", () => {
      this.eventMap.forEach((e, t, n) => {
        e.forEach((o) => {
          t.removeEventListener(n, o, !0);
        });
      }), this.eventMap.deleteAll();
    });
  }
}
var ge = O;
~location.href.indexOf("localhost") && console.info("%cquarkc@".concat("1.0.58"), "color: white;background:#9f57f8;font-weight:bold;font-size:10px;padding:2px 6px;border-radius: 5px", "Running in dev mode.");
var B = (r) => !(r || r === !1 || r === 0), be = { observed: !0, type: String, converter: (r, e) => {
  var t = r;
  switch (e) {
    case Number:
      t = B(r) ? r : Number(r);
      break;
    case Boolean:
      t = !([null, "false", !1, void 0].indexOf(r) > -1);
  }
  return t;
} }, ue = function() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return (e, t) => e.constructor.createProperty(t, r);
}, $ = new V(), F = new V();
function xe(r) {
  var { tag: e, style: t = "" } = typeof r == "string" ? { tag: r } : r;
  return (n) => {
    class o extends n {
      static get observedAttributes() {
        var i = [], a = $.get(n);
        return a && a.forEach((s, u) => {
          s.observed && i.push(u);
        }), i;
      }
      static isBooleanProperty(i) {
        var a = !1, s = $.get(n);
        return s && s.forEach((u, c) => {
          if (u.type === Boolean && i === c)
            return a = !0;
        }), a;
      }
      constructor() {
        super();
        var i = this.attachShadow({ mode: "open" });
        if (i)
          if (typeof CSSStyleSheet == "function" && i.adoptedStyleSheets) {
            var a = new CSSStyleSheet();
            a.replaceSync(t), i.adoptedStyleSheets = [a];
          } else {
            var s = document.createElement("style");
            s.innerHTML = t, i.append(s);
          }
        var u = F.get(Object.getPrototypeOf(this.constructor));
        u && u.forEach((c, y) => {
          Object.defineProperty(this, y, c(this[y]));
        });
      }
    }
    customElements.get(e) || customElements.define(e, o);
  };
}
class E extends HTMLElement {
  constructor() {
    super(...arguments), x(this, "eventController", new _e()), x(this, "_controllers", void 0), x(this, "rootPatch", (e) => {
      this.shadowRoot && function(t, n) {
        m._root && m._root(t, n);
        var o = n._children;
        t = n._children = re(O, null, [t]), ae(n, t, o || R, n.ownerSVGElement !== void 0, o ? null : n.firstChild ? W.call(n.childNodes) : null, o ? o._dom : n.firstChild);
      }(e, this.shadowRoot);
    }), x(this, "$on", (e, t, n) => this.eventController.bindListener(n || this, e, t));
  }
  static getPropertyDescriptor(e, t) {
    return (n) => ({ get() {
      var o = this.getAttribute(e);
      return B(n) || !B(o) || t.type === Boolean && o === "" ? (k(t.converter) && (o = t.converter(o, t.type)), o) : n;
    }, set(o) {
      var l = o;
      k(t.converter) && (l = t.converter(o, t.type)), B(l) ? this.removeAttribute(e) : typeof l == "boolean" ? l ? this.setAttribute(e, "") : this.removeAttribute(e) : this.setAttribute(e, l);
    }, configurable: !0, enumerable: !0 });
  }
  static getStateDescriptor(e) {
    return (t) => {
      var n = t;
      return { get: () => n, set(o) {
        var l, i = n;
        n = o, this._render(), (l = this._controllers) === null || l === void 0 || l.forEach((a) => {
          var s;
          return (s = a.hostUpdated) === null || s === void 0 ? void 0 : s.call(a);
        }), k(this.componentDidUpdate) && this.componentDidUpdate(e, i, o);
      }, configurable: !0, enumerable: !0 };
    };
  }
  static createProperty(e, t) {
    var n = Object.assign({}, be, t), o = t.attribute || e;
    $.set(this, o, n), F.set(this, e, this.getPropertyDescriptor(o, n));
  }
  static createState(e) {
    F.set(this, e, this.getStateDescriptor(e));
  }
  _render() {
    var e = this.render();
    this.rootPatch(e);
  }
  addController(e) {
    var t, n;
    ((t = this._controllers) !== null && t !== void 0 ? t : this._controllers = /* @__PURE__ */ new Set()).add(e), this.shadowRoot && this.isConnected && ((n = e.hostConnected) === null || n === void 0 || n.call(e));
  }
  removeController(e) {
    var t;
    (t = this._controllers) === null || t === void 0 || t.delete(e);
  }
  requestUpdate() {
    var e;
    this._render(), (e = this._controllers) === null || e === void 0 || e.forEach((t) => {
      var n;
      return (n = t.hostUpdated) === null || n === void 0 ? void 0 : n.call(t);
    });
  }
  update() {
    this._render();
  }
  _updateProperty() {
    this.constructor.observedAttributes.forEach((e) => {
      this[e] = this[e];
    });
  }
  _updateBooleanProperty(e) {
    this.constructor.isBooleanProperty(e) && (this[e] || (this[e] = this[e]));
  }
  $emit(e, t) {
    return this.dispatchEvent(new CustomEvent(e, Object.assign({ bubbles: !0 }, t)));
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  shouldComponentUpdate(e, t, n) {
    return t !== n;
  }
  componentDidUpdate(e, t, n) {
  }
  render() {
    return "";
  }
  connectedCallback() {
    var e, t;
    this._updateProperty(), (e = this._controllers) === null || e === void 0 || e.forEach((n) => {
      var o;
      return (o = n.hostConnected) === null || o === void 0 ? void 0 : o.call(n);
    }), this._render(), (t = this._controllers) === null || t === void 0 || t.forEach((n) => {
      var o;
      return (o = n.hostMounted) === null || o === void 0 ? void 0 : o.call(n);
    }), k(this.componentDidMount) && this.componentDidMount();
  }
  attributeChangedCallback(e, t, n) {
    var o, l = this[e] || n;
    k(this.shouldComponentUpdate) && !this.shouldComponentUpdate(e, t, l) || (this._render(), (o = this._controllers) === null || o === void 0 || o.forEach((i) => {
      var a;
      return (a = i.hostUpdated) === null || a === void 0 ? void 0 : a.call(i);
    }), k(this.componentDidUpdate) && this.componentDidUpdate(e, t, l), n !== t && this._updateBooleanProperty(e));
  }
  disconnectedCallback() {
    var e;
    k(this.componentWillUnmount) && this.componentWillUnmount(), this.eventController.removeAllListener(), (e = this._controllers) === null || e === void 0 || e.forEach((t) => {
      var n;
      return (n = t.hostDisconnected) === null || n === void 0 ? void 0 : n.call(t);
    }), this.rootPatch(null);
  }
}
x(E, "h", re), x(E, "Fragment", ge);
const Ee = `:root{font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;color-scheme:light dark;color:#333;background-color:#242424}:host{display:block;margin:0 auto;padding:2rem;text-align:center;width:500px}:host .title{color:#333;font-size:20px;font-weight:600}:host .title a{color:#0070f3;text-decoration:none}:host .title a:hover,:host .title a:focus,:host .title a:active{text-decoration:underline}.logo{height:6em;padding:1.5em;will-change:filter}.logo:hover{filter:drop-shadow(0 0 2em #646cffaa);transition:all .5s}.card{padding:2em}button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;cursor:pointer;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}.read-the-docs{color:#888}@media (prefers-color-scheme: light){:root{color:#213547;background-color:#fff}a:hover{color:#747bff}button{background-color:#f9f9f9}}
`;
var we = Object.defineProperty, Se = Object.getOwnPropertyDescriptor, G = (r, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? Se(e, t) : e, l = r.length - 1, i; l >= 0; l--)
    (i = r[l]) && (o = (n ? i(e, t, o) : i(o)) || o);
  return n && o && we(e, t, o), o;
};
let z = class extends E {
  constructor() {
    super(...arguments);
    // 外部属性
    T(this, "count", 0);
    T(this, "text", "");
    T(this, "add", () => {
      this.count += 1;
    });
  }
  componentDidMount() {
    console.log("dom loaded!");
  }
  render() {
    return /* @__PURE__ */ E.h(E.Fragment, null, /* @__PURE__ */ E.h("div", null, /* @__PURE__ */ E.h("a", { href: "https://quarkc.hellobike.com", target: "_blank" }, /* @__PURE__ */ E.h(
      "img",
      {
        src: "https://quark-design.hellobike.com/assets/quark-logo.f9a6a307.png",
        class: "logo",
        alt: "quark logo"
      }
    ))), /* @__PURE__ */ E.h("span", { class: "title" }, "我是 Web Components 组件"));
  }
};
G([
  ue({ type: Number })
], z.prototype, "count", 2);
G([
  ue({ type: String })
], z.prototype, "text", 2);
z = G([
  xe({ tag: "my-component", style: Ee })
], z);
