MQ_DEF("Header", "<header class=\"hd\" dir=\"rtl\" style=\"font-family: 'IBM Plex Sans Arabic', system-ui, sans-serif; color: #0F1E35; background: #FFFFFF; box-shadow: 0 1px 0 rgba(15,30,53,0.06), 0 8px 24px -18px rgba(15,30,53,0.25); position: relative; z-index: 5\">\n<a class=\"skip\" href=\"#main\">{{c.skip}}</a>\n<sc-if value=\"{{hasBanner}}\" hint-placeholder-val=\"{{false}}\"><div role=\"status\" style=\"padding: 10px 20px; background: #F6EBD0; color: #5E4710; font-size: 14px; line-height: 1.7; text-align: center\">{{banner}}</div></sc-if>\n<div style=\"max-width: 1240px; margin: 0 auto; padding: 14px 20px; display: flex; align-items: center; justify-content: space-between; gap: 16px 32px; box-sizing: border-box\">\n<a href=\"Main.dc.html\" aria-label=\"{{c.siteName}}، الصفحة الرئيسية\" style=\"display: flex; align-items: center; gap: 12px; text-decoration: none; color: #0F1E35; min-width: 0\">\n<span style=\"flex: 0 0 44px; width: 44px; height: 44px; border-radius: 10px; background: #0F1E35; display: flex; align-items: center; justify-content: center\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#C9A24D\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 3v18M7 21h10M4 7h16M6 7l-3 7a3 3 0 0 0 6 0L6 7zM18 7l-3 7a3 3 0 0 0 6 0l-3-7z\"></path></svg>\n</span>\n<span style=\"display: flex; flex-direction: column; line-height: 1.25; min-width: 0\">\n<span title=\"{{c.siteName}}\" style=\"font-size: 17px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: min(320px, 46vw)\">{{c.siteName}}</span>\n<span style=\"font-size: 12px; color: #3A4860; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: min(320px, 46vw)\">{{c.tagline}}</span>\n</span>\n</a>\n\n<div class=\"hd-desk\">\n<nav aria-label=\"القائمة الرئيسية\" style=\"flex: 1 1 auto; display: flex; justify-content: center; gap: 28px\">\n<sc-for list=\"{{links}}\" as=\"l\" hint-placeholder-count=\"5\">\n<a href=\"{{l.href}}\" aria-current=\"{{l.current}}\" style=\"display: inline-block; padding: 10px 2px; font-size: 16px; font-weight: {{l.weight}}; color: {{l.color}}; text-decoration: none; border-bottom: 2px solid {{l.line}}; white-space: nowrap\">{{l.label}}</a>\n</sc-for>\n</nav>\n<form role=\"search\" onSubmit=\"{{submit}}\" class=\"fw\" style=\"flex: 0 1 220px; min-width: 150px; display: flex; align-items: center; gap: 8px; background: #FAF7F0; border: 1px solid #8F8778; border-radius: 999px; padding: 0 6px 0 14px; height: 44px; box-sizing: border-box\">\n<label for=\"site-q\" style=\"position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)\">ابحث في الموقع</label>\n<input id=\"site-q\" type=\"search\" value=\"{{q}}\" onChange=\"{{onQ}}\" placeholder=\"{{searchPh}}\" style=\"flex: 1; min-width: 0; border: none; background: transparent; outline: none; font: inherit; font-size: 16px; color: #0F1E35\">\n<button type=\"submit\" aria-label=\"بحث\" style=\"flex: 0 0 34px; width: 34px; height: 34px; border: none; border-radius: 50%; background: transparent; display: flex; align-items: center; justify-content: center; cursor: pointer\">\n<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#3A4860\" stroke-width=\"1.8\" stroke-linecap=\"round\" aria-hidden=\"true\"><circle cx=\"11\" cy=\"11\" r=\"7\"></circle><path d=\"M20 20l-3.5-3.5\"></path></svg>\n</button>\n</form>\n<a href=\"Login.dc.html\" style=\"flex: 0 0 auto; display: inline-flex; align-items: center; gap: 8px; height: 44px; padding: 0 18px; border-radius: 999px; background: #0F1E35; color: #FFFFFF; font-size: 15px; font-weight: 600; text-decoration: none; white-space: nowrap\">\n<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"8\" r=\"4\"></circle><path d=\"M4 21a8 8 0 0 1 16 0\"></path></svg>{{c.loginLabel}}</a>\n</div>\n\n<div class=\"hd-mob\">\n<button type=\"button\" ref=\"{{menuBtnRef}}\" onClick=\"{{toggle}}\" aria-label=\"{{menuLabel}}\" aria-expanded=\"{{expanded}}\" aria-controls=\"m-menu\" style=\"flex: 0 0 46px; width: 46px; height: 46px; border-radius: 12px; border: 1px solid #8F8778; background: #FFFFFF; display: flex; align-items: center; justify-content: center; cursor: pointer\">\n<sc-if value=\"{{closed}}\" hint-placeholder-val=\"{{true}}\">\n<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#0F1E35\" stroke-width=\"1.8\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M4 7h16M4 12h16M4 17h16\"></path></svg>\n</sc-if>\n<sc-if value=\"{{open}}\" hint-placeholder-val=\"{{false}}\">\n<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#0F1E35\" stroke-width=\"1.8\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M6 6l12 12M18 6L6 18\"></path></svg>\n</sc-if>\n</button>\n</div>\n</div>\n\n<sc-if value=\"{{showPanel}}\" hint-placeholder-val=\"{{false}}\">\n<div id=\"m-menu\" style=\"padding: 4px 20px 24px; border-top: 1px solid #F0EBDF; display: flex; flex-direction: column; gap: 4px\">\n<form role=\"search\" onSubmit=\"{{submit}}\" class=\"fw\" style=\"display: flex; align-items: center; gap: 8px; background: #FAF7F0; border: 1px solid #8F8778; border-radius: 14px; padding: 0 6px 0 14px; height: 50px; margin: 14px 0 8px; box-sizing: border-box\">\n<label for=\"site-q-m\" style=\"position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)\">ابحث في الموقع</label>\n<input id=\"site-q-m\" type=\"search\" value=\"{{q}}\" onChange=\"{{onQ}}\" placeholder=\"{{searchPh}}\" style=\"flex: 1; min-width: 0; border: none; background: transparent; outline: none; font: inherit; font-size: 16px; color: #0F1E35\">\n<button type=\"submit\" aria-label=\"بحث\" style=\"flex: 0 0 40px; width: 40px; height: 40px; border: none; background: transparent; display: flex; align-items: center; justify-content: center; cursor: pointer\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#3A4860\" stroke-width=\"1.8\" stroke-linecap=\"round\" aria-hidden=\"true\"><circle cx=\"11\" cy=\"11\" r=\"7\"></circle><path d=\"M20 20l-3.5-3.5\"></path></svg>\n</button>\n</form>\n<nav aria-label=\"القائمة الرئيسية\" style=\"display: flex; flex-direction: column\">\n<sc-for list=\"{{links}}\" as=\"l\" hint-placeholder-count=\"5\">\n<a href=\"{{l.href}}\" aria-current=\"{{l.current}}\" style=\"display: flex; align-items: center; justify-content: space-between; min-height: 52px; padding: 0 12px; border-radius: 12px; font-size: 17px; font-weight: {{l.weight}}; color: #0F1E35; background: {{l.mbg}}; text-decoration: none\">{{l.label}}<span style=\"width: 6px; height: 6px; border-radius: 50%; background: {{l.line}}\"></span></a>\n</sc-for>\n</nav>\n<div style=\"display: flex; flex-direction: column; gap: 10px; margin-top: 12px; padding-top: 16px; border-top: 1px solid #F0EBDF\">\n<a href=\"Login.dc.html\" style=\"display: flex; align-items: center; justify-content: center; gap: 8px; height: 52px; border-radius: 14px; background: #0F1E35; color: #FFFFFF; font-size: 16px; font-weight: 600; text-decoration: none\">{{c.mobileLogin}}</a>\n<a href=\"LawyerRegister.dc.html\" style=\"display: flex; align-items: center; justify-content: center; height: 48px; font-size: 15px; font-weight: 600; color: #0F1E35; text-decoration: underline; text-decoration-color: #C9A24D; text-underline-offset: 6px\">{{c.joinText}}</a>\n</div>\n</div>\n</sc-if>\n<a ref=\"{{searchLinkRef}}\" href=\"Search.dc.html\" tabindex=\"-1\" aria-hidden=\"true\" style=\"position: absolute; width: 1px; height: 1px; overflow: hidden; opacity: 0\">بحث</a>\n</header>", "\nbody{margin:0}\n.hd a:focus-visible,.hd button:focus-visible{outline:2px solid #C9A24D;outline-offset:2px}\n.hd .fw:focus-within{outline:2px solid #C9A24D;outline-offset:2px}\n.skip{position:absolute;inset-inline-start:12px;top:-60px;z-index:20;background:#0F1E35;color:#FFFFFF;padding:10px 16px;border-radius:10px;font-weight:600;text-decoration:none}\n.skip:focus{top:10px}\n.hd-desk{display:contents}\n.hd-mob{display:none}\n@media (max-width:1100px){.hd-desk{display:none}.hd-mob{display:flex}}\n", function (DCLogic, React) {
"use strict";
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { mobile: false, open: false, q: '' };
    this.searchLinkRef = (el) => { this.searchLink = el; };
    this.menuBtnRef = (el) => { this.menuBtn = el; };
    this.onKey = (e) => { if (e.key === 'Escape' && this.state.open) { this.setState({ open: false }); try { if (this.menuBtn) this.menuBtn.focus(); } catch (er) {} } };
  }
  componentDidMount() {
    try {
      this.mq = window.matchMedia('(max-width: 1100px)');
      this.onMq = () => this.setState({ mobile: this.mq.matches, open: false });
      this.onMq();
      if (this.mq.addEventListener) this.mq.addEventListener('change', this.onMq);
      window.addEventListener('keydown', this.onKey);
    } catch (e) {}
    try {
      const st = (JSON.parse(window.localStorage.getItem('mq_cms') || '{}') || {}).site || {};
      if (st.numerals === 'latin' && !window.__mqLatin) {
        window.__mqLatin = true;
        const AR = /[٠-٩۰-۹]/g, map = (d) => { const i = '٠١٢٣٤٥٦٧٨٩'.indexOf(d); return String(i >= 0 ? i : '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)); };
        const skip = (el) => !el || /^(INPUT|TEXTAREA|SCRIPT|STYLE)$/.test(el.tagName) || (el.closest && el.closest('[data-keep-digits]'));
        const fix = (node) => { if (node.nodeType === 3) { if (!skip(node.parentElement) && /[٠-٩۰-۹]/.test(node.nodeValue)) node.nodeValue = node.nodeValue.replace(AR, map); return; } if (node.nodeType !== 1 || skip(node)) return; const w = document.createTreeWalker(node, 4); let t; while ((t = w.nextNode())) { if (!skip(t.parentElement) && /[٠-٩۰-۹]/.test(t.nodeValue)) t.nodeValue = t.nodeValue.replace(AR, map); } ['aria-label', 'title', 'placeholder'].forEach((a) => { node.querySelectorAll && node.querySelectorAll('[' + a + ']').forEach((el) => { const v = el.getAttribute(a); if (/[٠-٩۰-۹]/.test(v)) el.setAttribute(a, v.replace(AR, map)); }); }); };
        fix(document.body);
        this.numObs = new MutationObserver((ms) => ms.forEach((m) => { if (m.type === 'characterData') fix(m.target); else m.addedNodes.forEach(fix); }));
        this.numObs.observe(document.body, { subtree: true, childList: true, characterData: true });
      }
    } catch (e) {}
  }
  componentWillUnmount() {
    try { if (this.mq && this.mq.removeEventListener) this.mq.removeEventListener('change', this.onMq); window.removeEventListener('keydown', this.onKey); if (this.numObs) { this.numObs.disconnect(); window.__mqLatin = false; } } catch (e) {}
  }
  renderVals() {
    const active = this.props.active ?? 'home';
    const cms = (() => { try { return JSON.parse(window.localStorage.getItem('mq_cms') || '{}') || {}; } catch (e) { return {}; } })();
    const c = { siteName: 'المرجع القانوني العراقي', tagline: 'منصة قانونية متكاملة', loginLabel: 'دخول', searchPh: 'ابحث عن قانون أو محامٍ', skip: 'تخطَّ إلى المحتوى', maintenanceBanner: '', mobileLogin: 'تسجيل الدخول', joinText: 'هل أنت محامٍ؟ انضم إلى المنصة', ...(cms.header || {}) };
    const site = cms.site || {};
    try { const sd = String(site.seoDesc || 'مكتبة القوانين العراقية، ودليل المحامين المقيَّدين في النقابة، ونماذج قانونية إرشادية وأدوات حساب المواعيد والمكافآت.').trim(); if (sd) { let m = document.querySelector('meta[name="description"]'); if (!m) { m = document.createElement('meta'); m.setAttribute('name', 'description'); document.head.appendChild(m); } if (m.getAttribute('content') !== sd) m.setAttribute('content', sd); } if (active === 'home' && String(site.seoTitle || '').trim() && document.title !== site.seoTitle) document.title = site.seoTitle; const lg = String(site.lang || 'ar').split(',')[0]; if (document.documentElement.lang !== lg) document.documentElement.lang = lg; } catch (e) {}
    const banner = (site.maintenance ? (site.maintenanceText || 'نجري صيانة مجدولة.') : '') || String(c.maintenanceBanner || '').trim();
    const { mobile, open, q } = this.state;
    const hrefs = { home: 'Main.dc.html', laws: 'Laws.dc.html', lawyers: 'Lawyers.dc.html', services: 'Services.dc.html', articles: 'Articles.dc.html' };
    const defNav = [{ key: 'home', label: 'الرئيسية', show: true }, { key: 'laws', label: 'القوانين', show: true }, { key: 'lawyers', label: 'المحامون', show: true }, { key: 'services', label: 'الخدمات', show: true }, { key: 'articles', label: 'المقالات', show: true }];
    const items = (c.nav && c.nav.length ? c.nav : defNav).filter((n) => n.show && hrefs[n.key]).map((n) => ({ key: n.key, label: n.label, href: hrefs[n.key] }));
    return {
      c, banner, hasBanner: !!banner, searchPh: (c.searchPh || '') + '…',
      desktop: !mobile, mobile, open, closed: !open,
      showPanel: mobile && open,
      expanded: open ? 'true' : 'false', menuBtnRef: this.menuBtnRef,
      menuLabel: open ? 'إغلاق القائمة' : 'فتح القائمة',
      toggle: () => this.setState({ open: !open }),
      q,
      searchLinkRef: this.searchLinkRef,
      onQ: (e) => this.setState({ q: e.target.value }),
      submit: (e) => {
        e.preventDefault();
        try { window.localStorage.setItem('mq_search', this.state.q.trim()); } catch (err) {}
        if (this.searchLink) this.searchLink.click();
      },
      links: items.map((i) => ({
        ...i,
        current: i.key === active ? 'page' : 'false',
        color: i.key === active ? '#0F1E35' : '#3A4860',
        weight: i.key === active ? '700' : '500',
        line: i.key === active ? '#C9A24D' : 'transparent',
        mbg: i.key === active ? '#FAF7F0' : 'transparent'
      }))
    };
  }
}
return Component;
});
