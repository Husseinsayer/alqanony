/*
 * المرجع القانوني العراقي — محرّك العرض في الإنتاج.
 * يعرض صفحات التصميم المترجمة مسبقاً (app/pages/*.js)، ويجلب المحتوى من الخادم،
 * ويزامن تعديلات لوحة التحكم مع قاعدة البيانات.
 */
(function () {
  'use strict';
  var h = React.createElement;
  var VERSION = 'f4f356c1ed';
  // نسخة العرض: تعمل بلا خادم (GitHub Pages أو أي استضافة ثابتة)، والبيانات في متصفح الزائر فقط
  var DEMO = 'true' === 'true';
  var APP = DEMO ? 'app/' : '/app/';
  var BLOB = APP + 'assets/hero.jpg';
  window.__errors = [];

  /* ------------------------------------------------------------ routes */
  var ROUTES = {
    '': ['Main', ''], 'laws': ['Laws', 'مكتبة القوانين'], 'lawyers': ['Lawyers', 'دليل المحامين'], 'lawyer': ['LawyerProfile', 'ملف المحامي'],
    'booking': ['Booking', 'طلب استشارة'], 'services': ['Services', 'الخدمات'], 'articles': ['Articles', 'المقالات القانونية'],
    'assistant': ['SmartLawyer', 'المساعد القانوني'], 'forms': ['Forms', 'النماذج القانونية'], 'calculator': ['Calculator', 'الحاسبة القانونية'],
    'search': ['Search', 'البحث'], 'contact': ['Contact', 'اتصل بنا'], 'about': ['About', 'من نحن'], 'legal': ['Legal', 'السياسات القانونية'],
    'login': ['Login', 'تسجيل الدخول'], 'join': ['LawyerRegister', 'انضم كمحامٍ'],
    'admin': ['AdminDashboard', 'لوحة المعلومات'], 'admin/site': ['AdminSite', 'الواجهة والصفحات'], 'admin/laws': ['AdminLaws', 'القوانين والمواد'],
    'admin/articles': ['AdminArticles', 'المقالات'], 'admin/forms': ['AdminForms', 'النماذج'], 'admin/lawyers': ['AdminLawyers', 'المحامون والتوثيق'],
    'admin/bookings': ['AdminBookings', 'الاستشارات والحجوزات'], 'admin/assistant': ['AdminAssistant', 'المساعد الآلي'], 'admin/calculator': ['AdminCalculator', 'الحاسبة'],
    'admin/inbox': ['AdminInbox', 'الرسائل والتذاكر'], 'admin/ads': ['AdminAds', 'الإعلانات'], 'admin/users': ['AdminUsers', 'المستخدمون والصلاحيات'],
    'admin/settings': ['AdminSettings', 'الإعدادات والنسخ'], 'admin/audit': ['AdminAudit', 'سجل التدقيق']
  };
  var PAGE_TO_PATH = {};
  Object.keys(ROUTES).forEach(function (p) { PAGE_TO_PATH[ROUTES[p][0]] = '/' + p; });
  PAGE_TO_PATH.AdminDashboard = '/admin';
  // في نسخة العرض يكون المسار في الرابط بعد # بحروف لاتينية وشرطات فقط (#laws، #admin-laws)
  function routeHref(p) { return DEMO ? '#' + (p.replace(/^\//, '').replace(/\//g, '-') || 'home') : p; }
  function hashPath() { var x = decodeURIComponent(location.hash.replace(/^#\/?/, '')).replace(/[?].*$/, '').replace(/\/+$/, ''); if (x === 'home') return ''; return x.indexOf('admin-') === 0 ? 'admin/' + x.slice(6) : x; }
  var path = DEMO ? hashPath() : location.pathname.replace(/\/+$/, '').replace(/^\//, '').replace(/\.html$/, '');
  if (path === 'index') path = '';
  var route = ROUTES[path];
  var isAdmin = path === 'admin' || path.indexOf('admin/') === 0;

  /* --------------------------------------------------------------- api */
  function cookie(name) { var m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)')); return m ? decodeURIComponent(m[1]) : ''; }
  var apiBase = '/api/';
  function url(r) { return apiBase === '/api/' ? '/api/' + r : '/api/index.php?r=' + encodeURIComponent(r); }
  function request(method, r, body, isForm) {
    var opt = { method: method, credentials: 'same-origin', headers: { 'Accept': 'application/json' } };
    if (method !== 'GET') opt.headers['X-MQ-CSRF'] = cookie('mq_csrf');
    if (body !== undefined) {
      if (isForm) opt.body = body;
      else { opt.headers['Content-Type'] = 'application/json'; opt.body = JSON.stringify(body); }
    }
    return fetch(url(r), opt).then(function (res) {
      var ct = res.headers.get('content-type') || '';
      if (ct.indexOf('application/json') < 0) {
        if (res.status === 404 && apiBase === '/api/') { apiBase = '/api/index.php'; return request(method, r, body, isForm); }
        var e0 = new Error('تعذّر الاتصال بالخادم. تحقق من الاتصال وأعد المحاولة.'); e0.status = res.status; throw e0;
      }
      return res.json().then(function (data) {
        if (!res.ok || data.ok === false) {
          var e = new Error(data.error || 'تعذّر إتمام الطلب.'); e.status = res.status; e.data = data;
          if (data.code === 'csrf') { return request('GET', 'session').then(function () { return request(method, r, body, isForm); }); }
          throw e;
        }
        return data;
      });
    }, function () { throw new Error('تعذّر الاتصال بالخادم. تحقق من الاتصال بالإنترنت وأعد المحاولة.'); });
  }
  var MQ = window.MQ = {
    live: true, me: null, version: VERSION,
    get: function (r) { return request('GET', r); },
    post: function (r, body) { return request('POST', r, body || {}); },
    upload: function (r, fd) { return request('POST', r, fd, true); },
    logout: function () { return request('POST', 'auth/logout', {}).then(function () { location.href = '/admin/login'; }, function () { location.href = '/admin/login'; }); },
    path: function (page) { return PAGE_TO_PATH[page] || '/'; }
  };

  /* ---------------------------------------------------------- storage */
  var LS = window.localStorage;
  var rawSet = Storage.prototype.setItem;
  function lsWrite(k, v) { try { rawSet.call(LS, k, JSON.stringify(v)); } catch (e) {} }
  function lsRead(k, d) { try { var v = JSON.parse(LS.getItem(k) || 'null'); return v == null ? d : v; } catch (e) { return d; } }

  /* ----------------------------------------------- admin sync (diffs) */
  var snapshot = null, auditKnown = {}, queue = Promise.resolve(), pending = 0, timer = null, dirtyCms = false, dirtyAudit = false;
  var COLL_KEYS = ['upsert', 'removed', 'pending'];
  function isColl(v) { return v && typeof v === 'object' && !Array.isArray(v) && Object.keys(v).every(function (k) { return COLL_KEYS.indexOf(k) >= 0; }) && ('upsert' in v || 'removed' in v || 'pending' in v); }
  function same(a, b) { return JSON.stringify(a === undefined ? null : a) === JSON.stringify(b === undefined ? null : b); }
  function diff(oldC, newC) {
    var ops = [];
    var keys = {}; Object.keys(oldC || {}).concat(Object.keys(newC || {})).forEach(function (k) { keys[k] = 1; });
    Object.keys(keys).forEach(function (m) {
      if (m.charAt(0) === '_') return;
      var o = oldC[m], n = newC[m];
      if (same(o, n)) return;
      if (isColl(o) || isColl(n)) {
        o = o || {}; n = n || {};
        var ou = o.upsert || {}, nu = n.upsert || {}, orm = o.removed || [], nrm = n.removed || [], op = o.pending || {}, np = n.pending || {};
        Object.keys(nu).forEach(function (id) { if (!same(ou[id], nu[id])) ops.push({ t: 'up', m: m, id: id, data: nu[id] }); });
        Object.keys(ou).forEach(function (id) { if (!(id in nu) && nrm.indexOf(id) < 0) ops.push({ t: 'unset', m: m, id: id }); });
        nrm.forEach(function (id) { if (orm.indexOf(id) < 0) ops.push({ t: 'rm', m: m, id: id }); });
        orm.forEach(function (id) { if (nrm.indexOf(id) < 0) ops.push({ t: 'unrm', m: m, id: id }); });
        var pk = {}; Object.keys(op).concat(Object.keys(np)).forEach(function (id) { pk[id] = 1; });
        Object.keys(pk).forEach(function (id) { if (!same(op[id], np[id])) ops.push({ t: 'pend', m: m, id: id, data: np[id] || null }); });
      } else {
        ops.push({ t: 'set', m: m, data: n == null ? null : n });
      }
    });
    return ops;
  }
  function banner(msg, kind) {
    var el = document.getElementById('mq-banner');
    if (!el) { el = document.createElement('div'); el.id = 'mq-banner'; el.setAttribute('role', 'alert'); document.body.appendChild(el); }
    el.className = kind || 'err';
    el.textContent = '';
    var span = document.createElement('span'); span.textContent = msg; el.appendChild(span);
    if (kind !== 'info') {
      var b = document.createElement('button'); b.type = 'button'; b.textContent = 'إعادة التحميل'; b.onclick = function () { location.reload(); }; el.appendChild(b);
    }
    el.hidden = false;
    if (kind === 'info') setTimeout(function () { el.hidden = true; }, 2500);
  }
  function flush() {
    timer = null;
    var cur = lsRead('mq_cms', {});
    var ops = dirtyCms ? diff(snapshot || {}, cur) : [];
    var audit = [];
    if (dirtyAudit) lsRead('mq_audit', []).forEach(function (e) { if (e && e.id && !auditKnown[e.id]) { auditKnown[e.id] = 1; audit.push(e); } });
    dirtyCms = false; dirtyAudit = false;
    if (!ops.length && !audit.length) return;
    var sent = JSON.parse(JSON.stringify(cur));
    pending++;
    queue = queue.then(function () {
      return MQ.post('admin/sync', { ops: ops, audit: audit }).then(function (r) {
        snapshot = sent;
        if (r.errors && r.errors.length) banner('لم تُحفظ بعض التعديلات: ' + r.errors.join(' '), 'err');
      }, function (e) {
        if (e.status === 401) { location.href = '/admin/login?next=' + encodeURIComponent(location.pathname); return; }
        if (e.data && e.data.errors && e.data.errors.length) banner('لم تُحفظ بعض التعديلات: ' + e.data.errors.join(' '), 'err');
        else banner('لم يُحفظ آخر تعديل على الخادم: ' + e.message + ' أعد تحميل الصفحة قبل المتابعة.', 'err');
      }).then(function () { pending--; });
    });
  }
  function installInterceptor() {
    Storage.prototype.setItem = function (k, v) {
      rawSet.call(this, k, v);
      if (this !== LS) return;
      if (k === 'mq_cms') dirtyCms = true;
      else if (k === 'mq_audit') dirtyAudit = true;
      else if (k === 'mq_adminRole') return;
      else return;
      if (!timer) timer = setTimeout(flush, 30);
    };
    window.addEventListener('beforeunload', function (e) { if (pending > 0 || timer) { e.preventDefault(); e.returnValue = ''; } });
  }

  /* ------------------------------------------------------ DC renderer */
  var registry = {};
  window.MQ_DEF = function (name, tpl, styles, factory) { registry[name] = { tpl: tpl, styles: styles, factory: factory }; };
  function lookup(p, scopes) {
    p = p.trim();
    if (p === 'true') return true;
    if (p === 'false') return false;
    if (/^-?\d+(\.\d+)?$/.test(p)) return Number(p);
    var parts = p.split('.');
    for (var i = 0; i < scopes.length; i++) {
      var sc = scopes[i];
      if (sc && Object.prototype.hasOwnProperty.call(sc, parts[0])) {
        var v = sc[parts[0]];
        for (var j = 1; j < parts.length; j++) v = v == null ? undefined : v[parts[j]];
        return v;
      }
    }
    return undefined;
  }
  function interp(str, scopes) {
    var whole = str.match(/^\s*\{\{([^}]*)\}\}\s*$/);
    if (whole) return lookup(whole[1], scopes);
    return str.replace(/\{\{([^}]*)\}\}/g, function (m, p) { var v = lookup(p, scopes); return v == null ? '' : String(v); });
  }
  var ATTR = { 'class': 'className', 'for': 'htmlFor', tabindex: 'tabIndex', maxlength: 'maxLength', inputmode: 'inputMode', autocomplete: 'autoComplete', readonly: 'readOnly', novalidate: 'noValidate', viewbox: 'viewBox', colspan: 'colSpan', 'stroke-width': 'strokeWidth', 'stroke-linecap': 'strokeLinecap', 'stroke-linejoin': 'strokeLinejoin', 'fill-rule': 'fillRule', 'clip-rule': 'clipRule', 'stroke-dasharray': 'strokeDasharray', 'stop-color': 'stopColor', 'text-anchor': 'textAnchor', 'font-size': 'fontSize', 'font-weight': 'fontWeight', 'dominant-baseline': 'dominantBaseline', srcset: 'srcSet', enterkeyhint: 'enterKeyHint', spellcheck: 'spellCheck', datetime: 'dateTime', 'accept-charset': 'acceptCharset' };
  var EVENTS = { onclick: 'onClick', onchange: 'onChange', onsubmit: 'onSubmit', onkeydown: 'onKeyDown', oninput: 'onInput', onfocus: 'onFocus', onblur: 'onBlur', onkeyup: 'onKeyUp', onmouseenter: 'onMouseEnter', onmouseleave: 'onMouseLeave', onscroll: 'onScroll', onpaste: 'onPaste', ondragover: 'onDragOver', ondrop: 'onDrop' };
  function styleObj(s) {
    var o = {};
    String(s).split(';').forEach(function (decl) {
      var i = decl.indexOf(':'); if (i < 0) return;
      var k = decl.slice(0, i).trim(); var v = decl.slice(i + 1).trim(); if (!k) return;
      if (k.indexOf('--') !== 0) k = k.replace(/-([a-z])/g, function (m, c) { return c.toUpperCase(); });
      o[k] = v;
    });
    return o;
  }
  function mapHref(href) {
    if (!href) return href;
    var m = href.match(/^([A-Za-z]+)\.dc\.html(#.*)?$/);
    if (m) return DEMO ? routeHref(PAGE_TO_PATH[m[1]] || '/') : (PAGE_TO_PATH[m[1]] || '/') + (m[2] || '');
    return href;
  }
  function build(node, scopes, key) {
    if (node.nodeType === 3) return interp(node.nodeValue, scopes);
    if (node.nodeType !== 1) return null;
    var tag = node.tagName.toLowerCase();
    var kids = function (n, sc) { return Array.prototype.map.call(n.childNodes, function (c, i) { return build(c, sc, i); }); };
    if (tag === 'helmet') return null;
    if (tag === 'sc-for') {
      var list = interp(node.getAttribute('list'), scopes) || [];
      var as = node.getAttribute('as');
      return h(React.Fragment, { key: key }, list.map(function (it, i) { var sc = {}; sc[as] = it; sc.$index = i; return h(React.Fragment, { key: i }, kids(node, [sc].concat(scopes))); }));
    }
    if (tag === 'sc-if') {
      return interp(node.getAttribute('value'), scopes) ? h(React.Fragment, { key: key }, kids(node, scopes)) : null;
    }
    if (tag === 'dc-import') {
      var props = {}, name = '';
      Array.prototype.forEach.call(node.attributes, function (a) {
        if (a.name === 'name') { name = a.value; return; }
        if (a.name.indexOf('hint-') === 0) return;
        props[a.name.replace(/-([a-z])/g, function (m, c) { return c.toUpperCase(); })] = interp(a.value, scopes);
      });
      return h(Comp, { key: key, name: name, props: props });
    }
    var p = { key: key };
    Array.prototype.forEach.call(node.attributes, function (a) {
      var n = a.name, raw = a.value;
      if (n.indexOf('hint-') === 0) return;
      var val = interp(raw, scopes);
      if (EVENTS[n]) { p[EVENTS[n]] = val; return; }
      if (n === 'ref') { p.ref = val; return; }
      if (n === 'style') { p.style = styleObj(String(val == null ? '' : val)); return; }
      if (n === 'src' && String(val).indexOf('/_blob/') === 0) val = BLOB;
      if (n === 'href' && tag === 'a') val = mapHref(String(val == null ? '' : val));
      if (n === 'value' && (tag === 'input' || tag === 'select' || tag === 'textarea')) { p.value = val == null ? '' : val; return; }
      if (n === 'checked') { p.checked = val === true || val === 'true'; return; }
      if (n === 'disabled') { p.disabled = val === true || val === 'true' || (val !== false && val !== 'false' && val != null && raw.indexOf('{{') < 0); return; }
      if (n === 'type' && tag === 'input' && raw === 'file') { p.type = 'file'; return; }
      p[ATTR[n] || n] = val;
    });
    if ((tag === 'input' || tag === 'select' || tag === 'textarea') && 'value' in p && !p.onChange) p.readOnly = true;
    if (tag === 'input' && 'checked' in p && !p.onChange) p.readOnly = true;
    if (tag === 'input' && p.type === 'file') delete p.value;
    if (tag === 'textarea') return h(tag, p);
    return h.apply(null, [tag, p].concat(kids(node, scopes)));
  }
  function DCLogic(props) { React.Component.call(this, props); }
  DCLogic.prototype = Object.create(React.Component.prototype);
  DCLogic.prototype.constructor = DCLogic;
  DCLogic.prototype.render = function () {
    var vals = this.renderVals();
    var tpl = this.__tpl;
    return h(React.Fragment, null, Array.prototype.map.call(tpl.childNodes, function (c, i) { return build(c, [vals], i); }));
  };
  var classes = {}, stylesDone = {};
  function getClass(name) {
    if (classes[name]) return classes[name];
    var def = registry[name];
    if (!def) throw new Error('page not found: ' + name);
    if (def.styles && !stylesDone[name]) { stylesDone[name] = 1; var st = document.createElement('style'); st.textContent = def.styles; document.head.appendChild(st); }
    var tpl = document.createElement('template'); tpl.innerHTML = def.tpl;
    var Cls = def.factory(DCLogic, React);
    Cls.prototype.__tpl = tpl.content;
    classes[name] = Cls;
    return Cls;
  }
  function loadScript(name) {
    if (registry[name]) return Promise.resolve();
    return new Promise(function (res, rej) {
      var s = document.createElement('script'); s.src = APP + 'pages/' + name + '.js?v=' + VERSION; s.onload = function () { res(); }; s.onerror = function () { rej(new Error('load ' + name)); };
      document.head.appendChild(s);
    });
  }
  function Comp(p) { React.Component.call(this, p); this.state = { ready: !!registry[p.name] }; }
  Comp.prototype = Object.create(React.Component.prototype);
  Comp.prototype.componentDidMount = function () { var self = this; if (!this.state.ready) loadScript(this.props.name).then(function () { self.setState({ ready: true }); }, function (e) { window.__errors.push(e.message); }); };
  Comp.prototype.render = function () { return this.state.ready ? h(getClass(this.props.name), this.props.props) : null; };

  function Boundary(p) { React.Component.call(this, p); this.state = { err: null }; }
  Boundary.prototype = Object.create(React.Component.prototype);
  Boundary.getDerivedStateFromError = function (err) { return { err: err }; };
  Boundary.prototype.componentDidCatch = function (err) { window.__errors.push(String(err && err.message)); };
  Boundary.prototype.render = function () {
    if (!this.state.err) return this.props.children;
    return h('main', { className: 'mq-fatal' }, h('h1', null, 'تعذّر عرض هذه الصفحة'), h('p', null, 'حدث خطأ غير متوقع. أعد تحميل الصفحة، وإن تكرر الخطأ فأبلغنا من صفحة «اتصل بنا».'), h('a', { href: DEMO ? '#home' : '/' }, 'العودة إلى الرئيسية'));
  };

  /* -------------------------------------------------------- navigation */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href');
    var m = href && href.match(/^([A-Za-z]+)\.dc\.html(#.*)?$/);
    if (m) { e.preventDefault(); location.href = DEMO ? routeHref(PAGE_TO_PATH[m[1]] || '/') : (PAGE_TO_PATH[m[1]] || '/') + (m[2] || ''); }
  });

  /* -------------------------------------------------------------- meta */
  function setMeta(cms) {
    var site = (cms && cms.site) || {};
    var name = (cms && cms.header && cms.header.siteName) || site.siteName || 'المرجع القانوني العراقي';
    var t = route ? route[1] : 'الصفحة غير موجودة';
    document.title = isAdmin ? t + ' · لوحة التحكم' : (path === '' ? (site.seoTitle || name) : t + ' | ' + name);
    var d = document.querySelector('meta[name="description"]');
    if (d && site.seoDesc) d.setAttribute('content', site.seoDesc);
    if (isAdmin) { var r = document.createElement('meta'); r.name = 'robots'; r.content = 'noindex, nofollow'; document.head.appendChild(r); }
  }

  function render(page) {
    var root = document.getElementById('root');
    loadScript(page).then(function () {
      ReactDOM.createRoot(root).render(h(Boundary, null, h(Comp, { name: page, props: {} })));
      window.__ready = true;
    }, function () { root.innerHTML = '<main class="mq-fatal"><h1>تعذّر تحميل الصفحة</h1><p>تحقق من اتصالك ثم أعد المحاولة.</p></main>'; window.__ready = true; });
  }
  function notFound() {
    document.title = 'الصفحة غير موجودة';
    document.getElementById('root').innerHTML = '<main class="mq-fatal"><h1>الصفحة غير موجودة</h1><p>ربما تغيّر الرابط أو حُذفت الصفحة.</p><a href="' + (DEMO ? '#home' : '/') + '">العودة إلى الرئيسية</a></main>';
    window.__ready = true;
  }
  function fatal(e) {
    if (e && e.data && e.data.code === 'not_installed') { location.href = '/install/'; return; }
    document.getElementById('root').innerHTML = '';
    var m = document.createElement('main'); m.className = 'mq-fatal';
    var h1 = document.createElement('h1'); h1.textContent = 'الخدمة غير متاحة مؤقتاً';
    var p = document.createElement('p'); p.textContent = (e && e.message) || 'تعذّر الاتصال بالخادم.';
    m.appendChild(h1); m.appendChild(p); document.getElementById('root').appendChild(m);
    window.__ready = true;
  }

  /* -------------------------------------------------------------- boot */
  if (DEMO) {
    // لا خادم: الصفحات تعمل بنمط النموذج التجريبي (localStorage)، والتنقل بين الصفحات دون إعادة تحميل
    delete window.MQ;
    var root0 = null;
    var bar = document.createElement('div'); bar.setAttribute('role', 'note');
    var t0 = document.createElement('span'); t0.textContent = 'نسخة تجريبية للعرض: النماذج لا تُرسل فعلاً، وتعديلات لوحة التحكم تُحفظ في متصفحك فقط.';
    var a1 = document.createElement('a');
    var r1 = document.createElement('button'); r1.type = 'button'; r1.textContent = 'مسح بيانات التجربة';
    r1.onclick = function () { try { ['mq_cms', 'mq_audit', 'mq_adminRole', 'mq_adminBadges'].forEach(function (k) { LS.removeItem(k); }); } catch (er) {} go(); };
    bar.appendChild(t0); bar.appendChild(a1); bar.appendChild(r1);
    document.body.insertBefore(bar, document.body.firstChild);
    var go = function () {
      path = hashPath(); route = ROUTES[path]; isAdmin = path === 'admin' || path.indexOf('admin/') === 0;
      bar.className = 'mq-demo' + (isAdmin ? ' mq-demo-adm' : '');
      a1.href = isAdmin ? '#home' : '#admin'; a1.textContent = isAdmin ? 'عرض الموقع' : 'جرّب لوحة التحكم';
      var el = document.getElementById('root');
      if (!route) { if (root0) { root0.unmount(); root0 = null; } notFound(); return; }
      var pg = route[0];
      setMeta(lsRead('mq_cms', {}));
      loadScript(pg).then(function () {
        if (!root0) { el.innerHTML = ''; root0 = ReactDOM.createRoot(el); }
        root0.render(h(Boundary, { key: pg + ':' + Date.now() }, h(Comp, { name: pg, props: {} })));
        try { window.scrollTo(0, 0); } catch (er) {}
        window.__ready = true;
      }, function () { el.innerHTML = '<main class="mq-fatal"><h1>تعذّر تحميل الصفحة</h1></main>'; window.__ready = true; });
    };
    window.addEventListener('hashchange', go);
    go();
    return;
  }
  if (!route) { notFound(); return; }
  var page = route[0];
  var session = MQ.get('session');
  if (isAdmin) {
    session.then(function (s) {
      if (!s.me || s.me.kind !== 'staff') { location.replace('/admin/login?next=' + encodeURIComponent(location.pathname)); return null; }
      MQ.me = s.me; MQ.mail = s.mail;
      return MQ.get('admin/bootstrap');
    }).then(function (b) {
      if (!b) return;
      lsWrite('mq_cms', b.cms || {});
      lsWrite('mq_audit', b.audit || []);
      lsWrite('mq_adminRole', b.me.role);
      var badges = {};
      ['messages', 'applications', 'bookings', 'adRequests', 'campaigns', 'privacyRequests', 'laws', 'articles', 'forms', 'intents', 'lawyers', 'adSlots', 'testimonials'].forEach(function (m) {
        var c = (b.cms || {})[m] || {}, up = c.upsert || {}, n = Object.keys(c.pending || {}).length;
        Object.keys(up).forEach(function (id) { var r = up[id] || {}; if (r.status === 'new' || r.status === 'pending' || r.state === 'review') n++; });
        badges[m] = n;
      });
      lsWrite('mq_adminBadges', badges);
      snapshot = JSON.parse(JSON.stringify(b.cms || {}));
      (b.audit || []).forEach(function (e) { if (e && e.id) auditKnown[e.id] = 1; });
      installInterceptor();
      setMeta(b.cms);
      render(page);
    }).catch(fatal);
  } else {
    Promise.all([session, MQ.get('cms')]).then(function (r) {
      MQ.me = r[0].me; MQ.mail = r[0].mail;
      lsWrite('mq_cms', r[1].cms || {});
      setMeta(r[1].cms);
      render(page);
    }).catch(fatal);
  }
})();
