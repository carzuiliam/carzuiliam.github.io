/*! jQuery v3.3.1 (Minified by Carzuilha) | (c) JS Foundation and other contributors | jquery.org/license */ 
!function (e, t) {

	"use strict";

	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)

}

("undefined" != typeof window ? window : this, function (e, t) {
	
	"use strict";
	
	var n = [],
		r = e.document,
		s = n.push,
		l = {},
		c = l.toString,
		f = l.hasOwnProperty,
		p = f.toString,
		h = {},
		g = function e(t) {
			return "function" == typeof t && "number" != typeof t.nodeType
		},
		y = function e(t) {
			return null != t && t === t.window
		};

	function x(e) {
		return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
	}

	var w = function (e, t) {
			return new w.fn.init(e, t)
		};

	w.fn = w.prototype = {
		constructor: w,
		length: 0,
		pushStack: function (e) {
			var t = w.merge(this.constructor(), e);
			return t.prevObject = this, t
		},
		each: function (e) {
			return w.each(this, e)
		}
	}, w.extend = w.fn.extend = function () {
		var e, t, n, r, i, o, a = arguments[0] || {},
			s = 1,
			u = arguments.length,
			l = !1;
		for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
			if (null != (e = arguments[s]))
				for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
		return a
	}, w.extend({
		expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
		each: function (e, t) {
			var n, r = 0;
			if (C(e)) {
				for (n = e.length; r < n; r++)
					if (!1 === t.call(e[r], r, e[r])) break
			} else
				for (r in e)
					if (!1 === t.call(e[r], r, e[r])) break;
			return e
		},
		makeArray: function (e, t) {
			var n = t || [];
			return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
		},
		merge: function (e, t) {
			for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
			return e.length = i, e
		},
	});

	function C(e) {
		var t = !!e && "length" in e && e.length,
			n = x(e);
		return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}

	var E = function (e) {
		var n, r, i, o, s, u, d, g, y, v, m, b = "sizzle" + 1 * new Date,
			w = e.document,
			C = 0,
			D = function (e, t) {
				return e === t && (f = !0), 0
			},
			A = [],
			L = A.push,
			$ = new RegExp(M + "+", "g"),
			V = {
				ID: new RegExp("^#(" + R + ")"),
				CLASS: new RegExp("^\\.(" + R + ")"),
				TAG: new RegExp("^(" + R + "|[*])"),
				ATTR: new RegExp("^" + I),
				PSEUDO: new RegExp("^" + W),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + P + ")$", "i"),
				needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
			},
			Q = /^[^{]+\{\s*\[native \w/,
			J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;

		function oe(e, t, r, i) {
			var o, s, l, c, f, h, v, m = t && t.ownerDocument,
				T = t ? t.nodeType : 9;
			if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
			if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
				if (11 !== T && (f = J.exec(e)))
					if (o = f[1]) {
						if (9 === T) {
							if (!(l = t.getElementById(o))) return r;
							if (l.id === o) return r.push(l), r
						} else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
					} else {
						if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
						if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
					}
				if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
					if (1 !== T) m = t, v = e;
					else if ("object" !== t.nodeName.toLowerCase()) {
						(c = t.getAttribute("id")) ? c = c.replace(te, ne): t.setAttribute("id", c = b), s = (h = a(e)).length;
						while (s--) h[s] = "#" + c + " " + ve(h[s]);
						v = h.join(","), m = K.test(e) && ge(t.parentNode) || t
					}
					if (v) try {
						return L.apply(r, m.querySelectorAll(v)), r
					} catch (e) {} finally {
						c === b && t.removeAttribute("id")
					}
				}
			}
			return u(e.replace(B, "$1"), t, r, i)
		}

		function se(e) {
			return e[b] = !0, e
		}

		function ue(e) {
			var t = d.createElement("fieldset");
			try {
				return !!e(t)
			} catch (e) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		n = oe.support = {}, 
		o = oe.isXML = function (e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return !!t && "HTML" !== t.nodeName
		},
		p = oe.setDocument = function (e) {

			var t, i, a = e ? e.ownerDocument || e : w;
			
			return a !== d && 9 === a.nodeType && a.documentElement ? 
			(d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : 
				i.attachEvent && i.attachEvent("onunload", re)), 

			n.attributes = ue(function (e) {
				return e.className = "i", !e.getAttribute("className")
			}), 
			n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
				return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
			}), 

			r.find.CLASS = n.getElementsByClassName && function (e, t) {
				if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e)
			}, 

			D = t ? function (e, t) {
				if (e === t) return f = !0, 0;
				var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
			} : function (e, t) {
				if (e === t) return f = !0, 0;
				var n, r = 0,
					i = e.parentNode,
					o = t.parentNode,
					a = [e],
					s = [t];
				if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
				if (i === o) return ce(e, t);
				n = e;
				while (n = n.parentNode) a.unshift(n);
				n = t;
				while (n = n.parentNode) s.unshift(n);
				while (a[r] === s[r]) r++;
				return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
			}, d) : d
		}, 

		(r = oe.selectors = {
			match: V,
			attrHandle: {},
			find: {},
			pseudos: {}
		}).pseudos.nth = r.pseudos.eq;

		// Stopped here!

		function me(e, t, n) {
			var r = t.dir,
				i = t.next,
				o = i || r,
				a = n && "parentNode" === o,
				s = C++;
			return t.first ? function (t, n, i) {
				while (t = t[r])
					if (1 === t.nodeType || a) return e(t, n, i);
				return !1
			} : function (t, n, u) {
				var l, c, f, p = [T, s];
				if (u) {
					while (t = t[r])
						if ((1 === t.nodeType || a) && e(t, n, u)) return !0
				} else
					while (t = t[r])
						if (1 === t.nodeType || a)
							if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
							else {
								if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
								if (c[o] = p, p[2] = e(t, n, u)) return !0
							} return !1
			}
		}

		return s = oe.compile = function (e, t) {
			var n, r = [],
				i = [],
				o = S[e + " "];
			if (!o) {
				t || (t = a(e)), n = t.length;
				while (n--)(o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
				(o = S(e, Ee(i, r))).selector = e
			}
			return o
		}, u = oe.select = function (e, t, n, i) {
			var o, u, l, c, f, p = "function" == typeof e && e,
				d = !i && a(e = p.selector || e);
			if (n = n || [], 1 === d.length) {
				if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
					if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
					p && (t = t.parentNode), e = e.slice(u.shift().value.length)
				}
				o = V.needsContext.test(e) ? 0 : u.length;
				while (o--) {
					if (l = u[o], r.relative[c = l.type]) break;
					if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
						if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
						break
					}
				}
			}
			return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n
		}, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
			return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
		}), ue(function (e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || le("type|href|height|width", function (e, t, n) {
			if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), n.attributes && ue(function (e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || le("value", function (e, t, n) {
			if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
		}), ue(function (e) {
			return null == e.getAttribute("disabled")
		}) || le(P, function (e, t, n) {
			var r;
			if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
		}), oe
	}(e);

	w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
	
	w.filter = w.fn.extend({
		find: function (e) {
			var t, n, r = this.length,
				i = this;
			if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
				for (t = 0; t < r; t++)
					if (w.contains(i[t], this)) return !0
			}));
			for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
			return r > 1 ? w.uniqueSort(n) : n
		}
	});

	var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;

	(w.fn.init = function (e, t, n) {
		var i, o;
		if (!e) return this;
		if (n = n || q, "string" == typeof e) {
			if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
			if (i[1]) {
				if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))
					for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
				return this
			}
			return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
		}
		return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
	}).prototype = w.fn, q = w(r);

	function P(e, t) {
		while ((e = e[t]) && 1 !== e.nodeType);
		return e
	}

	var M = /[^\x20\t\r\n\f]+/g;

	function R(e) {
		var t = {};
		return w.each(e.match(M) || [], function (e, n) {
			t[n] = !0
		}), t
	}
	w.Callbacks = function (e) {
		e = "string" == typeof e ? R(e) : w.extend({}, e);
		var t, n, r, i, o = [],
			a = [],
			s = -1,
			u = function () {
				for (i = i || e.once, r = t = !0; a.length; s = -1) {
					n = a.shift();
					while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1)
				}
				e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
			},
			l = {
				add: function () {
					return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
						w.each(n, function (n, r) {
							g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
						})
					}(arguments), n && !t && u()), this
				},
				remove: function () {
					return w.each(arguments, function (e, t) {
						var n;
						while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--
					}), this
				},
				has: function (e) {
					return e ? w.inArray(e, o) > -1 : o.length > 0
				},
				empty: function () {
					return o && (o = []), this
				},
				disable: function () {
					return i = a = [], o = n = "", this
				},
				disabled: function () {
					return !o
				},
				lock: function () {
					return i = a = [], n || t || (o = n = ""), this
				},
				locked: function () {
					return !!i
				},
				fireWith: function (e, n) {
					return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
				},
				fire: function () {
					return l.fireWith(this, arguments), this
				},
				fired: function () {
					return !!r
				}
			};
		return l
	};

	function I(e) {
		return e
	}

	function W(e) {
		throw e
	}

	function $(e, t, n, r) {
		var i;
		try {
			e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
		} catch (e) {
			n.apply(void 0, [e])
		}
	}
	w.extend({
		Deferred: function (t) {
			var n = [
					["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
					["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
				],
				r = "pending",
				i = {
					state: function () {
						return r
					},
					always: function () {
						return o.done(arguments).fail(arguments), this
					},
					"catch": function (e) {
						return i.then(null, e)
					},
					pipe: function () {
						var e = arguments;
						return w.Deferred(function (t) {
							w.each(n, function (n, r) {
								var i = g(e[r[4]]) && e[r[4]];
								o[r[1]](function () {
									var e = i && i.apply(this, arguments);
									e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					then: function (t, r, i) {
						var o = 0;

						function a(t, n, r, i) {
							return function () {
								var s = this,
									u = arguments,
									l = function () {
										var e, l;
										if (!(t < o)) {
											if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
											l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
										}
									},
									c = i ? l : function () {
										try {
											l()
										} catch (e) {
											w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u))
										}
									};
								t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
							}
						}
						return w.Deferred(function (e) {
							n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W))
						}).promise()
					},
					promise: function (e) {
						return null != e ? w.extend(e, i) : i
					}
				},
				o = {};
			return w.each(n, function (e, t) {
				var a = t[2],
					s = t[5];
				i[t[1]] = a.add, s && a.add(function () {
					r = s
				}, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
					return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
				}, o[t[0] + "With"] = a.fireWith
			}), i.promise(o), t && t.call(o, o), o
		},
		when: function (e) {
			var t = arguments.length,
				n = t,
				r = Array(n),
				i = o.call(arguments),
				a = w.Deferred(),
				s = function (e) {
					return function (n) {
						r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
					}
				};
			if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
			while (n--) $(i[n], s(n), a.reject);
			return a.promise()
		}
	});
	
	var F = w.Deferred();
	w.fn.ready = function (e) {
		return F.then(e)["catch"](function (e) {
			w.readyException(e)
		}), this
	}, w.extend({
		isReady: !1,
		readyWait: 1,
		ready: function (e) {
			(!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
		}
	}), w.ready.then = F.then;

	function _() {
		r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready()
	}
	"complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
	var z = function (e, t, n, r, i, o, a) {
			var s = 0,
				u = e.length,
				l = null == n;
			if ("object" === x(n)) {
				i = !0;
				for (s in n) z(e, t, s, n[s], !0, o, a)
			} else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
					return l.call(w(e), n)
				})), t))
				for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
			return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
		},
		X = /^-ms-/,
		U = /-([a-z])/g;

	function V(e, t) {
		return t.toUpperCase()
	}

	function G(e) {
		return e.replace(X, "ms-").replace(U, V)
	}

	var Y = function (e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	};

	function Q() {
		this.expando = w.expando + Q.uid++
	}

	Q.uid = 1, Q.prototype = {
		cache: function (e) {
			var t = e[this.expando];
			return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		get: function (e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
		},
	};

	var J = new Q,
		K = new Q,
		Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		ee = /[A-Z]/g;

	function te(e) {
		return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
	}

	function ne(e, t, n) {
		var r;
		if (void 0 === n && 1 === e.nodeType)
			if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
				try {
					n = te(n)
				} catch (e) {}
				K.set(e, t, n)
			} else n = void 0;
		return n
	}

	var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
		oe = ["Top", "Right", "Bottom", "Left"],
		ae = function (e, t) {
			return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
		},
		se = function (e, t, n, r) {
			var i, o, a = {};
			for (o in t) a[o] = e.style[o], e.style[o] = t[o];
			i = n.apply(e, r || []);
			for (o in t) e.style[o] = a[o];
			return i
		};

	function ue(e, t, n, r) {
		var i, o, a = 20,
			s = r ? function () {
				return r.cur()
			} : function () {
				return w.css(e, t, "")
			},
			u = s(),
			l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
			c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
		if (c && c[3] !== l) {
			u /= 2, l = l || c[3], c = +u || 1;
			while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
			c *= 2, w.style(e, t, c + l), n = n || []
		}
		return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
	}

	function ye(e, t) {
		var n;
		return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n
	}

	var be = r.documentElement,
		we = /^key/,
		Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		Ce = /^([^.]*)(?:\.(.+)|)/;

	function ke() {
		return !1
	}

	function De(e, t, n, r, i, o) {
		var a, s;
		if ("object" == typeof t) {
			"string" != typeof n && (r = r || n, n = void 0);
			for (s in t) De(e, s, n, r, t[s], o);
			return e
		}
		if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;
		else if (!i) return e;
		return 1 === o && (a = i, (i = function (e) {
			return w().off(e), a.apply(this, arguments)
		}).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
			w.event.add(this, t, i, r, n)
		})
	}

	w.event = {
		global: {},
		add: function (e, t, n, r, i) {
			var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
			if (y) {
				n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
					return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
				}), l = (t = (t || "").match(M) || [""]).length;
				while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
					type: d,
					origType: g,
					data: r,
					handler: n,
					guid: n.guid,
					selector: i,
					needsContext: i && w.expr.match.needsContext.test(i),
					namespace: h.join(".")
				}, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
			}
		},
		remove: function (e, t, n, r, i) {
			var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
			if (y && (u = y.events)) {
				l = (t = (t || "").match(M) || [""]).length;
				while (l--)
					if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
						f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
						while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
						a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d])
					} else
						for (d in u) w.event.remove(e, d + t[l], n, r, !0);
				w.isEmptyObject(u) && J.remove(e, "handle events")
			}
		},
		dispatch: function (e) {
			var t = w.event.fix(e),
				n, r, i, o, a, s, u = new Array(arguments.length),
				l = (J.get(this, "events") || {})[t.type] || [],
				c = w.event.special[t.type] || {};
			for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
			if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
				s = w.event.handlers.call(this, t, l), n = 0;
				while ((o = s[n++]) && !t.isPropagationStopped()) {
					t.currentTarget = o.elem, r = 0;
					while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()))
				}
				return c.postDispatch && c.postDispatch.call(this, t), t.result
			}
		},
		handlers: function (e, t) {
			var n, r, i, o, a, s = [],
				u = t.delegateCount,
				l = e.target;
			if (u && l.nodeType && !("click" === e.type && e.button >= 1))
				for (; l !== this; l = l.parentNode || this)
					if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
						for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
						o.length && s.push({
							elem: l,
							handlers: o
						})
					}
			return l = this, u < t.length && s.push({
				elem: l,
				handlers: t.slice(u)
			}), s
		},
		addProp: function (e, t) {
			Object.defineProperty(w.Event.prototype, e, {
				enumerable: !0,
				configurable: !0,
				get: g(t) ? function () {
					if (this.originalEvent) return t(this.originalEvent)
				} : function () {
					if (this.originalEvent) return this.originalEvent[e]
				},
				set: function (t) {
					Object.defineProperty(this, e, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: t
					})
				}
			})
		},
		fix: function (e) {
			return e[w.expando] ? e : new w.Event(e)
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function () {
					if (this !== Se() && this.focus) return this.focus(), !1
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					if (this === Se() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function () {
					if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1
				},
				_default: function (e) {
					return N(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function (e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, w.removeEvent = function (e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	}, w.Event = function (e, t) {
		if (!(this instanceof w.Event)) return new w.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
	}, w.Event.prototype = {
		constructor: w.Event,
		isDefaultPrevented: ke,
		isPropagationStopped: ke,
		isImmediatePropagationStopped: ke,
		isSimulated: !1,
		preventDefault: function () {
			var e = this.originalEvent;
			this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation: function () {
			var e = this.originalEvent;
			this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation: function () {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, w.fn.extend({
		on: function (e, t, n, r) {
			return De(this, e, t, n, r)
		},		
		off: function (e, t, n) {
			var r, i;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof e) {
				for (i in e) this.off(i, t, e[i]);
				return this
			}
			return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
				w.event.remove(this, e, n, t)
			})
		}
	});
	var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		Ae = /<script|<style|<link/i,
		je = /checked\s*(?:[^=]|=\s*.checked.)/i,
		qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
		$e = function (t) {
			var n = t.ownerDocument.defaultView;
			return n && n.opener || (n = e), n.getComputedStyle(t)
		},
		Be = new RegExp(oe.join("|"), "i");
	! function () {
		function t() {
			if (c) {
				l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
				var t = e.getComputedStyle(c);
				i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null
			}
		}

		function n(e) {
			return Math.round(parseFloat(e))
		}

		var i, o, a, s, u, l = r.createElement("div"),
			c = r.createElement("div");
		c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
			pixelBoxStyles: function () {
				return t(), s
			}
		}))
	}();

	function Fe(e, t, n) {
		var r, i, o, a, s = e.style;
		return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
	}

	function _e(e, t) {
		return {
			get: function () {
				if (!e()) return (this.get = t).apply(this, arguments);
				delete this.get
			}
		}
	}
	var ze = /^(none|table(?!-c[ea]).+)/,
		Xe = /^--/,
		Ue = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Ve = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Ge = ["Webkit", "Moz", "ms"],
		Ye = r.createElement("div").style;

	function Qe(e) {
		if (e in Ye) return e;
		var t = e[0].toUpperCase() + e.slice(1),
			n = Ge.length;
		while (n--)
			if ((e = Ge[n] + t) in Ye) return e
	}

	function Je(e) {
		var t = w.cssProps[e];
		return t || (t = w.cssProps[e] = Qe(e) || e), t
	}

	function Ke(e, t, n) {
		var r = ie.exec(t);
		return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
	}

	function Ze(e, t, n, r, i, o) {
		var a = "width" === t ? 1 : 0,
			s = 0,
			u = 0;
		if (n === (r ? "border" : "content")) return 0;
		for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
		return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
	}

	function et(e, t, n) {
		var r = $e(e),
			i = Fe(e, t, r),
			o = "border-box" === w.css(e, "boxSizing", !1, r),
			a = o;
		if (We.test(i)) {
			if (!n) return i;
			i = "auto"
		}
		return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
	}
	w.extend({
		cssHooks: {
			opacity: {
				get: function (e, t) {
					if (t) {
						var n = Fe(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {},
		style: function (e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i, o, a, s = G(t),
					u = Xe.test(t),
					l = e.style;
				if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
				"string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
			}
		},
		css: function (e, t, n, r) {
			var i, o, a, s = G(t);
			return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
		}
	}), w.each(["height", "width"], function (e, t) {
		w.cssHooks[t] = {
			get: function (e, n, r) {
				if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
					return et(e, t, r)
				})
			},
			set: function (e, n, r) {
				var i, o = $e(e),
					a = "border-box" === w.css(e, "boxSizing", !1, o),
					s = r && Ze(e, t, r, a, o);
				return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s)
			}
		}
	}), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
		if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
			marginLeft: 0
		}, function () {
			return e.getBoundingClientRect().left
		})) + "px"
	}), w.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (e, t) {
		w.cssHooks[e + t] = {
			expand: function (n) {
				for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
				return i
			}
		}, "margin" !== e && (w.cssHooks[e + t].set = Ke)
	}), w.fn.extend({
		css: function (e, t) {
			return z(this, function (e, t, n) {
				var r, i, o = {},
					a = 0;
				if (Array.isArray(t)) {
					for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
					return o
				}
				return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
			}, e, t, arguments.length > 1)
		}
	});

	function tt(e, t, n, r, i) {
		return new tt.prototype.init(e, t, n, r, i)
	}
	w.Tween = tt, tt.prototype = {
		constructor: tt,
		init: function (e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
		},
		cur: function () {
			var e = tt.propHooks[this.prop];
			return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
		},
		run: function (e) {
			var t, n = tt.propHooks[this.prop];
			return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
		}
	}, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
		_default: {
			get: function (e) {
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
			},
			set: function (e) {
				w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
		set: function (e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, w.easing = {
		linear: function (e) {
			return e
		},
		swing: function (e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, w.fx = tt.prototype.init, w.fx.step = {};
	var nt, rt, it = /^(?:toggle|show|hide)$/,
		ot = /queueHooks$/;

	function at() {
		rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick())
	}

	function st() {
		return e.setTimeout(function () {
			nt = void 0
		}), nt = Date.now()
	}

	function ut(e, t) {
		var n, r = 0,
			i = {
				height: e
			};
		for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}

	function lt(e, t, n) {
		for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
			if (r = i[o].call(n, t, e)) return r
	}

	function ct(e, t, n) {
		var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
			p = this,
			d = {},
			h = e.style,
			g = e.nodeType && ae(e),
			y = J.get(e, "fxshow");
		n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
			a.unqueued || s()
		}), a.unqueued++, p.always(function () {
			p.always(function () {
				a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
			})
		}));
		for (r in t)
			if (i = t[r], it.test(i)) {
				if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
					if ("show" !== i || !y || void 0 === y[r]) continue;
					g = !0
				}
				d[r] = y && y[r] || w.style(e, r)
			}
		if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
			f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
				h.display = l
			}), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
				h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
			})), u = !1;
			for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {
				display: l
			}), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
				g || fe([e]), J.remove(e, "fxshow");
				for (r in d) w.style(e, r, d[r])
			})), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
		}
	}

	function ft(e, t) {
		var n, r, i, o, a;
		for (n in e)
			if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
				o = a.expand(o), delete e[r];
				for (n in o) n in e || (e[n] = o[n], t[n] = i)
			} else t[r] = i
	}

	function pt(e, t, n) {
		var r, i, o = 0,
			a = pt.prefilters.length,
			s = w.Deferred().always(function () {
				delete u.elem
			}),
			u = function () {
				if (i) return !1;
				for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
				return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
			},
			l = s.promise({
				elem: e,
				props: w.extend({}, t),
				opts: w.extend(!0, {
					specialEasing: {},
					easing: w.easing._default
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: nt || st(),
				duration: n.duration,
				tweens: [],
				createTween: function (t, n) {
					var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
					return l.tweens.push(r), r
				},
				stop: function (t) {
					var n = 0,
						r = t ? l.tweens.length : 0;
					if (i) return this;
					for (i = !0; n < r; n++) l.tweens[n].run(1);
					return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
				}
			}),
			c = l.props;
		for (ft(c, l.opts.specialEasing); o < a; o++)
			if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
		return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
			elem: e,
			anim: l,
			queue: l.opts.queue
		})), l
	}
	w.Animation = w.extend(pt, {
			tweeners: {
				"*": [function (e, t) {
					var n = this.createTween(e, t);
					return ue(n.elem, e, ie.exec(t), n), n
				}]
			},
			tweener: function (e, t) {
				g(e) ? (t = e, e = ["*"]) : e = e.match(M);
				for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
			},
			prefilters: [ct],
			prefilter: function (e, t) {
				t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
			}
		}), w.speed = function (e, t, n) {
			var r = e && "object" == typeof e ? w.extend({}, e) : {
				complete: n || !n && t || g(e) && e,
				duration: e,
				easing: n && t || t && !g(t) && t
			};
			return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
				g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
			}, r
		}, w.fn.extend({
			fadeTo: function (e, t, n, r) {
				return this.filter(ae).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, r)
			},
			animate: function (e, t, n, r) {
				var i = w.isEmptyObject(e),
					o = w.speed(t, n, r),
					a = function () {
						var t = pt(this, w.extend({}, e), o);
						(i || J.get(this, "finish")) && t.stop(!0)
					};
				return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
			},
			stop: function (e, t, n) {
				var r = function (e) {
					var t = e.stop;
					delete e.stop, t(n)
				};
				return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
					var t = !0,
						i = null != e && e + "queueHooks",
						o = w.timers,
						a = J.get(this);
					if (i) a[i] && a[i].stop && r(a[i]);
					else
						for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
					for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
					!t && n || w.dequeue(this, e)
				})
			},
			finish: function (e) {
				return !1 !== e && (e = e || "fx"), this.each(function () {
					var t, n = J.get(this),
						r = n[e + "queue"],
						i = n[e + "queueHooks"],
						o = w.timers,
						a = r ? r.length : 0;
					for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
					for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
					delete n.finish
				})
			}
		}), w.each(["toggle", "show", "hide"], function (e, t) {
			var n = w.fn[t];
			w.fn[t] = function (e, r, i) {
				return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
			}
		}), w.each({
			slideDown: ut("show"),
			slideUp: ut("hide"),
			slideToggle: ut("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function (e, t) {
			w.fn[e] = function (e, n, r) {
				return this.animate(t, e, n, r)
			}
		}), w.timers = [], w.fx.tick = function () {
			var e, t = 0,
				n = w.timers;
			for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
			n.length || w.fx.stop(), nt = void 0
		}, w.fx.timer = function (e) {
			w.timers.push(e), w.fx.start()
		}, w.fx.interval = 13, w.fx.start = function () {
			rt || (rt = !0, at())
		}, w.fx.stop = function () {
			rt = null
		}, w.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, w.fn.delay = function (t, n) {
			return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
				var i = e.setTimeout(n, t);
				r.stop = function () {
					e.clearTimeout(i)
				}
			})
		},
		function () {
			var e = r.createElement("input"),
				t = r.createElement("select").appendChild(r.createElement("option"));
			e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
		}();
	var dt, ht = w.expr.attrHandle;
	w.fn.extend({
		attr: function (e, t) {
			return z(this, w.attr, e, t, arguments.length > 1)
		},
		removeAttr: function (e) {
			return this.each(function () {
				w.removeAttr(this, e)
			})
		}
	}), w.extend({
		attr: function (e, t, n) {
			var r, i, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
		},
		attrHooks: {
			type: {
				set: function (e, t) {
					if (!h.radioValue && "radio" === t && N(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		removeAttr: function (e, t) {
			var n, r = 0,
				i = t && t.match(M);
			if (i && 1 === e.nodeType)
				while (n = i[r++]) e.removeAttribute(n)
		}
	}), dt = {
		set: function (e, t, n) {
			return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
		var n = ht[t] || w.find.attr;
		ht[t] = function (e, t, r) {
			var i, o, a = t.toLowerCase();
			return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i
		}
	});
	var gt = /^(?:input|select|textarea|button)$/i,
		yt = /^(?:a|area)$/i;
	w.fn.extend({
		prop: function (e, t) {
			return z(this, w.prop, e, t, arguments.length > 1)
		},
		removeProp: function (e) {
			return this.each(function () {
				delete this[w.propFix[e] || e]
			})
		}
	}), w.extend({
		prop: function (e, t, n) {
			var r, i, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function (e) {
					var t = w.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	}), h.optSelected || (w.propHooks.selected = {
		get: function (e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function (e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		w.propFix[this.toLowerCase()] = this
	});

	function vt(e) {
		return (e.match(M) || []).join(" ")
	}

	function mt(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}

	function xt(e) {
		return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : []
	}
	w.fn.extend({
		addClass: function (e) {
			var t, n, r, i, o, a, s, u = 0;
			if (g(e)) return this.each(function (t) {
				w(this).addClass(e.call(this, t, mt(this)))
			});
			if ((t = xt(e)).length)
				while (n = this[u++])
					if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
						a = 0;
						while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
						i !== (s = vt(r)) && n.setAttribute("class", s)
					}
			return this
		},
		removeClass: function (e) {
			var t, n, r, i, o, a, s, u = 0;
			if (g(e)) return this.each(function (t) {
				w(this).removeClass(e.call(this, t, mt(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ((t = xt(e)).length)
				while (n = this[u++])
					if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
						a = 0;
						while (o = t[a++])
							while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
						i !== (s = vt(r)) && n.setAttribute("class", s)
					}
			return this
		},
		toggleClass: function (e, t) {
			var n = typeof e,
				r = "string" === n || Array.isArray(e);
			return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
				w(this).toggleClass(e.call(this, n, mt(this), t), t)
			}) : this.each(function () {
				var t, i, o, a;
				if (r) {
					i = 0, o = w(this), a = xt(e);
					while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
				} else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
			})
		},
		hasClass: function (e) {
			var t, n, r = 0;
			t = " " + e + " ";
			while (n = this[r++])
				if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
			return !1
		}
	});
	var bt = /\r/g;
	w.fn.extend({
		val: function (e) {
			var t, n, r, i = this[0]; {
				if (arguments.length) return r = g(e), this.each(function (n) {
					var i;
					1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
						return null == e ? "" : e + ""
					})), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
				});
				if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n
			}
		}
	}), w.extend({
		valHooks: {
			option: {
				get: function (e) {
					var t = w.find.attr(e, "value");
					return null != t ? t : vt(w.text(e))
				}
			},
			select: {
				get: function (e) {
					var t, n, r, i = e.options,
						o = e.selectedIndex,
						a = "select-one" === e.type,
						s = a ? null : [],
						u = a ? o + 1 : i.length;
					for (r = o < 0 ? u : a ? o : 0; r < u; r++)
						if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
							if (t = w(n).val(), a) return t;
							s.push(t)
						}
					return s
				},
				set: function (e, t) {
					var n, r, i = e.options,
						o = w.makeArray(t),
						a = i.length;
					while (a--)((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		}
	}), w.each(["radio", "checkbox"], function () {
		w.valHooks[this] = {
			set: function (e, t) {
				if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
			}
		}, h.checkOn || (w.valHooks[this].get = function (e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	}), h.focusin = "onfocusin" in e;
	var wt = /^(?:focusinfocus|focusoutblur)$/,
		Tt = function (e) {
			e.stopPropagation()
		};
	w.extend(w.event, {
		simulate: function (e, t, n) {
			var r = w.extend(new w.Event, n, {
				type: e,
				isSimulated: !0
			});
			w.event.trigger(r, null, t)
		}
	}), w.fn.extend({
		trigger: function (e, t) {
			return this.each(function () {
				w.event.trigger(e, t, this)
			})
		},
		triggerHandler: function (e, t) {
			var n = this[0];
			if (n) return w.event.trigger(e, t, n, !0)
		}
	}), h.focusin || w.each({
		focus: "focusin",
		blur: "focusout"
	}, function (e, t) {
		var n = function (e) {
			w.event.simulate(t, e.target, w.event.fix(e))
		};
		w.event.special[t] = {
			setup: function () {
				var r = this.ownerDocument || this,
					i = J.access(r, t);
				i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
			},
			teardown: function () {
				var r = this.ownerDocument || this,
					i = J.access(r, t) - 1;
				i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
			}
		}
	});
	var Ct = e.location,
		Et = Date.now(),
		kt = /\?/;
	w.parseXML = function (t) {
		var n;
		if (!t || "string" != typeof t) return null;
		try {
			n = (new e.DOMParser).parseFromString(t, "text/xml")
		} catch (e) {
			n = void 0
		}
		return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
	};
	w.param = function (e, t) {
		var n, r = [],
			i = function (e, t) {
				var n = g(t) ? t() : t;
				r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
			};
		if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
			i(this.name, this.value)
		});
		else
			for (n in e) jt(n, e[n], t, i);
		return r.join("&")
	}, w.fn.extend({
		serialize: function () {
			return w.param(this.serializeArray())
		},
		serializeArray: function () {
			return this.map(function () {
				var e = w.prop(this, "elements");
				return e ? w.makeArray(e) : this
			}).filter(function () {
				var e = this.type;
				return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e))
			}).map(function (e, t) {
				var n = w(this).val();
				return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
					return {
						name: t.name,
						value: e.replace(Dt, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(Dt, "\r\n")
				}
			}).get()
		}
	});
	var qt = /%20/g,
		Lt = /#.*$/,
		Ht = /([?&])_=[^&]*/,
		Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Mt = /^(?:GET|HEAD)$/,
		Rt = /^\/\//,
		It = {},
		Wt = {},
		$t = "*/".concat("*"),
		Bt = r.createElement("a");
	Bt.href = Ct.href;

	function Ft(e) {
		return function (t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r, i = 0,
				o = t.toLowerCase().match(M) || [];
			if (g(n))
				while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}

	function _t(e, t, n, r) {
		var i = {},
			o = e === Wt;

		function a(s) {
			var u;
			return i[s] = !0, w.each(e[s] || [], function (e, s) {
				var l = s(t, n, r);
				return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
			}), u
		}
		return a(t.dataTypes[0]) || !i["*"] && a("*")
	}

	function zt(e, t) {
		var n, r, i = {};
		for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
		return r && w.extend(!0, e, r), e
	}

	function Xt(e, t, n) {
		var r, i, o, a, s = e.contents,
			u = e.dataTypes;
		while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
		if (r)
			for (i in s)
				if (s[i] && s[i].test(r)) {
					u.unshift(i);
					break
				}
		if (u[0] in n) o = u[0];
		else {
			for (i in n) {
				if (!u[0] || e.converters[i + " " + u[0]]) {
					o = i;
					break
				}
				a || (a = i)
			}
			o = o || a
		}
		if (o) return o !== u[0] && u.unshift(o), n[o]
	}

	function Ut(e, t, n, r) {
		var i, o, a, s, u, l = {},
			c = e.dataTypes.slice();
		if (c[1])
			for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
		o = c.shift();
		while (o)
			if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
				if ("*" === o) o = u;
				else if ("*" !== u && u !== o) {
			if (!(a = l[u + " " + o] || l["* " + o]))
				for (i in l)
					if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
						!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
						break
					}
			if (!0 !== a)
				if (a && e["throws"]) t = a(t);
				else try {
					t = a(t)
				} catch (e) {
					return {
						state: "parsererror",
						error: a ? e : "No conversion from " + u + " to " + o
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}

	var Yt = [],
		Qt = /(=)\?(?=&|$)|\?\?/;
	
	w.offset = {
		setOffset: function (e, t, n) {
			var r, i, o, a, s, u, l, c = w.css(e, "position"),
				f = w(e),
				p = {};
			"static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
		}
	}, w.fn.extend({
		offset: function (e) {
			if (arguments.length) return void 0 === e ? this : this.each(function (t) {
				w.offset.setOffset(this, e, t)
			});
			var t, n, r = this[0];
			if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
				top: t.top + n.pageYOffset,
				left: t.left + n.pageXOffset
			}) : {
				top: 0,
				left: 0
			}
		},
		position: function () {
			if (this[0]) {
				var e, t, n, r = this[0],
					i = {
						top: 0,
						left: 0
					};
				if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
				else {
					t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
					while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
					e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
				}
				return {
					top: t.top - i.top - w.css(r, "marginTop", !0),
					left: t.left - i.left - w.css(r, "marginLeft", !0)
				}
			}
		},
		offsetParent: function () {
			return this.map(function () {
				var e = this.offsetParent;
				while (e && "static" === w.css(e, "position")) e = e.offsetParent;
				return e || be
			})
		}
	}), w.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (e, t) {
		var n = "pageYOffset" === t;
		w.fn[e] = function (r) {
			return z(this, function (e, r, i) {
				var o;
				if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
				o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
			}, e, r, arguments.length)
		}
	}), w.each(["top", "left"], function (e, t) {
		w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
			if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n
		})
	}), w.each({
		Height: "height",
		Width: "width"
	}, function (e, t) {
		w.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function (n, r) {
			w.fn[r] = function (i, o) {
				var a = arguments.length && (n || "boolean" != typeof i),
					s = n || (!0 === i || !0 === o ? "margin" : "border");
				return z(this, function (t, n, i) {
					var o;
					return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
				}, t, a ? i : void 0, a)
			}
		})
	}), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
		w.fn[t] = function (e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	});

	var Jt = e.jQuery,
		Kt = e.$;
	return w.noConflict = function (t) {
		return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w
	}, t || (e.jQuery = e.$ = w), w
});