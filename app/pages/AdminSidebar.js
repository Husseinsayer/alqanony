MQ_DEF("AdminSidebar", "<div dir=\"rtl\" style=\"font-family: 'IBM Plex Sans Arabic', system-ui, sans-serif\">\n<div class=\"as-mob\">\n<span style=\"display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 15px\">\n<span style=\"width: 34px; height: 34px; border-radius: 9px; border: 1px solid rgba(201,162,77,.5); display: flex; align-items: center; justify-content: center\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#C9A24D\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 3v18M7 21h10M4 7h16M6 7l-3 7a3 3 0 0 0 6 0L6 7zM18 7l-3 7a3 3 0 0 0 6 0l-3-7z\"></path></svg></span>لوحة التحكم</span>\n<button type=\"button\" class=\"as-mb\" ref=\"{{mbRef}}\" aria-expanded=\"{{expanded}}\" aria-controls=\"as-nav\" onClick=\"{{toggle}}\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"1.8\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M4 7h16M4 12h16M4 17h16\"></path></svg>القائمة</button>\n</div>\n<sc-if value=\"{{open}}\" hint-placeholder-val=\"{{false}}\"><div class=\"as-ov\" onClick=\"{{toggle}}\"></div></sc-if>\n<nav id=\"as-nav\" class=\"as {{openCls}}\" aria-label=\"أقسام لوحة التحكم\" ref=\"{{navRef}}\">\n<div style=\"display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 20px 20px 12px\">\n<a href=\"AdminDashboard.dc.html\" style=\"display: flex; align-items: center; gap: 12px; min-width: 0\">\n<span style=\"flex: 0 0 40px; width: 40px; height: 40px; border-radius: 10px; border: 1px solid rgba(201,162,77,.5); display: flex; align-items: center; justify-content: center\"><svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#C9A24D\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 3v18M7 21h10M4 7h16M6 7l-3 7a3 3 0 0 0 6 0L6 7zM18 7l-3 7a3 3 0 0 0 6 0l-3-7z\"></path></svg></span>\n<span style=\"display: flex; flex-direction: column; line-height: 1.3; min-width: 0\"><span style=\"font-size: 15px; font-weight: 700; color: #FFFFFF\">لوحة التحكم</span><span style=\"font-size: 12px; color: #8D9AB0\">المرجع القانوني العراقي</span></span>\n</a>\n<button type=\"button\" class=\"as-x as-mb\" onClick=\"{{toggle}}\" aria-label=\"إغلاق القائمة\" style=\"padding: 0 10px\">✕</button>\n</div>\n<div class=\"as-scroll\">\n<sc-for list=\"{{groups}}\" as=\"g\" hint-placeholder-count=\"4\">\n<div class=\"as-g\">{{g.label}}</div>\n<sc-for list=\"{{g.items}}\" as=\"i\" hint-placeholder-count=\"3\">\n<a class=\"as-l\" href=\"{{i.href}}\" aria-current=\"{{i.cur}}\">\n<svg width=\"19\" height=\"19\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"{{i.ic}}\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"flex: 0 0 19px\"><path d=\"{{i.icon}}\"></path></svg>\n<span>{{i.label}}</span>\n<sc-if value=\"{{i.hasN}}\" hint-placeholder-val=\"{{false}}\"><span class=\"as-n\" aria-label=\"{{i.nLabel}}\">{{i.n}}</span></sc-if>\n</a>\n</sc-for>\n</sc-for>\n</div>\n<div style=\"padding: 14px 16px 18px; border-top: 1px solid rgba(255,255,255,.08); display: flex; flex-direction: column; gap: 10px\">\n<sc-if value=\"{{demo}}\" hint-placeholder-val=\"{{true}}\"><label for=\"as-role\" style=\"font-size: 12px; color: #8D9AB0\">الدور الحالي (للتجربة)</label>\n<select id=\"as-role\" value=\"{{role}}\" onChange=\"{{onRole}}\" style=\"height: 42px; padding: 0 10px; border-radius: 10px; border: 1px solid rgba(255,255,255,.25); background: #13284A; color: #FFFFFF; font: inherit; font-size: 14px\">\n<sc-for list=\"{{roles}}\" as=\"r\" hint-placeholder-count=\"7\"><option value=\"{{r.v}}\">{{r.l}}</option></sc-for>\n</select></sc-if>\n<sc-if value=\"{{live}}\" hint-placeholder-val=\"{{false}}\"><div style=\"display: flex; flex-direction: column; gap: 2px; min-width: 0\"><span style=\"font-size: 14px; font-weight: 700; color: #FFFFFF; overflow: hidden; text-overflow: ellipsis; white-space: nowrap\">{{meName}}</span><span style=\"font-size: 12px; color: #8D9AB0\">{{meRole}}</span></div>\n<button type=\"button\" onClick=\"{{logout}}\" style=\"align-self: flex-start; min-height: 38px; padding: 0 14px; border-radius: 10px; border: 1px solid rgba(255,255,255,.35); background: transparent; color: #FFFFFF; font: inherit; font-size: 13.5px; cursor: pointer\">تسجيل الخروج</button></sc-if>\n<a href=\"Main.dc.html\" style=\"display: inline-flex; align-items: center; gap: 8px; font-size: 13.5px; color: #FFFFFF; text-decoration: underline; text-decoration-color: #C9A24D; text-underline-offset: 5px\">عرض الموقع</a>\n</div>\n</nav>\n</div>", "\n.as{position:fixed;top:0;bottom:0;inset-inline-start:0;z-index:40;width:264px;background:#0F1E35;color:#C8CFDB;display:flex;flex-direction:column;box-sizing:border-box}\n.as-scroll{flex:1;overflow-y:auto;padding:8px 12px 16px}\n.as a{color:inherit;text-decoration:none}\n.as-g{margin:16px 10px 6px;font-size:12px;font-weight:600;color:#8D9AB0;letter-spacing:.02em}\n.as-l{display:flex;align-items:center;gap:12px;min-height:42px;padding:0 12px;border-radius:10px;font-size:14.5px;color:#C8CFDB}\n.as-l:hover{background:rgba(255,255,255,.06);color:#FFFFFF}\n.as-l[aria-current=page]{background:rgba(201,162,77,.14);color:#FFFFFF;font-weight:600;box-shadow:inset -3px 0 0 #C9A24D}\n.as-l:focus-visible,.as-x:focus-visible,.as-mb:focus-visible{outline:2px solid #C9A24D;outline-offset:2px}\n.as-n{margin-inline-start:auto;min-width:22px;height:22px;padding:0 7px;border-radius:999px;background:#C9A24D;color:#0F1E35;font-size:12px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box}\n.as-mob{display:none;position:sticky;top:0;z-index:40;align-items:center;justify-content:space-between;gap:12px;padding:10px 16px;background:#0F1E35;color:#FFFFFF}\n.as-mb{display:inline-flex;align-items:center;gap:8px;min-height:42px;padding:0 14px;border-radius:10px;border:1px solid rgba(255,255,255,.3);background:transparent;color:#FFFFFF;font:inherit;font-size:14px;cursor:pointer}\n.as-ov{position:fixed;inset:0;z-index:45;background:rgba(11,23,41,.55)}\n.as-x{display:none}\n@media (max-width:1100px){\n.as{width:min(300px,86vw);transform:translateX(105%);visibility:hidden;transition:transform .2s ease,visibility .2s;z-index:50;box-shadow:-20px 0 50px -20px rgba(0,0,0,.6)}\n.as.open{transform:none;visibility:visible}\n.as-mob{display:flex}\n.as-x{display:inline-flex}\n}\n", function (DCLogic, React) {
"use strict";
class Component extends DCLogic {
  constructor(props) {
    super(props);
    let role = 'super';
    try { role = JSON.parse(window.localStorage.getItem('mq_adminRole') || '"super"') || 'super'; } catch (e) {}
    this.state = { open: false, role, tick: 0 };
    this.mbRef = (el) => { this.mbEl = el; };
    this.navRef = (el) => { this.navEl = el; };
    this.onKey = (e) => {
      if (!this.state.open) return;
      if (e.key === 'Escape') { e.preventDefault(); this.setState({ open: false }); return; }
      if (e.key === 'Tab' && this.navEl) {
        const els = Array.from(this.navEl.querySelectorAll('a[href], button:not([disabled]), select')).filter((x) => x.offsetParent !== null);
        if (!els.length) return;
        const first = els[0], last = els[els.length - 1];
        if (e.shiftKey && (document.activeElement === first || !this.navEl.contains(document.activeElement))) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && (document.activeElement === last || !this.navEl.contains(document.activeElement))) { e.preventDefault(); first.focus(); }
      }
    };
    this.onBadges = () => this.setState({ tick: this.state.tick + 1 });
  }
  componentDidMount() { try { window.addEventListener('keydown', this.onKey); window.addEventListener('mq-badges', this.onBadges); } catch (e) {} }
  componentWillUnmount() { try { window.removeEventListener('keydown', this.onKey); window.removeEventListener('mq-badges', this.onBadges); } catch (e) {} }
  componentDidUpdate(pp, ps) {
    if (!ps.open && this.state.open) { try { const a = this.navEl && this.navEl.querySelector('a[aria-current="page"], a[href]'); if (a) a.focus(); } catch (e) {} }
    if (ps.open && !this.state.open) { try { if (this.mbEl && this.mbEl.offsetParent !== null) this.mbEl.focus(); } catch (e) {} }
  }
  renderVals() {
    const D = '٠١٢٣٤٥٦٧٨٩';
    const ar = (x) => String(x).replace(/[0-9]/g, (d) => D[d]);
    let badges = {};
    try { badges = JSON.parse(window.localStorage.getItem('mq_adminBadges') || '{}') || {}; } catch (e) {}
    const def = { lawyers: 3, bookings: 2, inbox: 3, ads: 1 };
    const cnt = (k, mods) => { let n = 0, any = false; mods.forEach((m) => { if (badges[m] != null) { n += badges[m]; any = true; } }); return any ? n : def[k] || 0; };
    const I = {
      dashboard: 'M4 13h7V4H4zM13 20h7v-9h-7zM13 4v5h7V4zM4 20h7v-5H4z',
      audit: 'M12 8v4l3 2M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5',
      site: 'M3 5h18v14H3zM3 9h18M7 5v4',
      laws: 'M12 3v18M7 21h10M4 7h16M6 7l-3 7a3 3 0 0 0 6 0L6 7zM18 7l-3 7a3 3 0 0 0 6 0l-3-7z',
      articles: 'M5 4h14v16H5zM8 8h8M8 12h8M8 16h5',
      forms: 'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5',
      lawyers: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0',
      bookings: 'M4 6h16v14H4zM4 10h16M9 3v4M15 3v4',
      assistant: 'M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z',
      calculator: 'M6 3h12v18H6zM9 7h6M9 12h1M14 12h1M9 16h1M14 16h1',
      inbox: 'M3 13l3-8h12l3 8M3 13v6h18v-6M3 13h5l1 3h6l1-3h5',
      ads: 'M3 10v4h3l6 4V6L6 10zM16 9a4 4 0 0 1 0 6',
      users: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21a7 7 0 0 1 14 0M17 11a3 3 0 1 0 0-6M22 21a6 6 0 0 0-4-5.6',
      seo: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-5.2-5.2M8 11.5l2 2 3.5-4',
      agents: 'M9 3h6M12 3v3M6 6h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zM9 11v1M15 11v1M9 15h6M2 11v3M22 11v3',
      settings: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-2.9-1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 3 15H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.2-2.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 9 4.6V4a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 2.9 1.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0 1.2 2.9H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z'
    };
    const G = [
      ['نظرة عامة', [['dashboard', 'لوحة المعلومات', 'AdminDashboard'], ['audit', 'سجل التدقيق', 'AdminAudit']]],
      ['المحتوى', [['site', 'الواجهة والصفحات', 'AdminSite'], ['laws', 'القوانين والمواد', 'AdminLaws'], ['articles', 'المقالات', 'AdminArticles'], ['forms', 'النماذج', 'AdminForms']]],
      ['الخدمات', [['lawyers', 'المحامون والتوثيق', 'AdminLawyers', ['applications']], ['bookings', 'الاستشارات والحجوزات', 'AdminBookings', ['bookings']], ['assistant', 'المساعد الآلي', 'AdminAssistant'], ['calculator', 'الحاسبة', 'AdminCalculator']]],
      ['التشغيل', [['inbox', 'الرسائل والتذاكر', 'AdminInbox', ['messages']], ['ads', 'الإعلانات', 'AdminAds', ['adRequests']], ['users', 'المستخدمون والصلاحيات', 'AdminUsers'], ['agents', 'الوكلاء الأذكياء', 'AdminAgents'], ['seo', 'السيو ومحركات البحث', 'AdminSeo'], ['settings', 'الإعدادات والنسخ', 'AdminSettings']]]
    ];
    const active = this.props.active || 'dashboard';
    const roles = [['super', 'المدير العام'], ['editor', 'محرر المحتوى'], ['reviewer', 'المراجع القانوني'], ['verifier', 'موثّق المحامين'], ['ads', 'مدير الإعلانات'], ['support', 'الدعم الفني'], ['analyst', 'المحلل']];
    return {
      open: this.state.open, openCls: this.state.open ? 'open' : '', expanded: this.state.open ? 'true' : 'false',
      toggle: () => this.setState({ open: !this.state.open }), mbRef: this.mbRef, navRef: this.navRef,
      role: this.state.role,
      live: !!(window.MQ && window.MQ.me), demo: !(window.MQ && window.MQ.me),
      meName: window.MQ && window.MQ.me ? window.MQ.me.name : '', meRole: window.MQ && window.MQ.me ? ((roles.find((x) => x[0] === window.MQ.me.role) || [])[1] || window.MQ.me.role) : '',
      logout: () => { if (window.MQ) window.MQ.logout(); },
      roles: roles.map(([v, l]) => ({ v, l })),
      onRole: (e) => { const r = e.target.value; try { window.localStorage.setItem('mq_adminRole', JSON.stringify(r)); window.location.reload(); } catch (er) {} this.setState({ role: r }); },
      groups: G.map(([label, items]) => ({
        label,
        items: items.map(([k, l, f, mods]) => {
          const n = mods ? cnt(k, mods) : 0;
          return { label: l, href: f + '.dc.html', icon: I[k], cur: k === active ? 'page' : 'false', ic: k === active ? '#C9A24D' : '#8D9AB0', hasN: n > 0, n: ar(n), nLabel: ar(n) + ' بانتظار الإجراء' };
        })
      }))
    };
  }
}
return Component;
});
