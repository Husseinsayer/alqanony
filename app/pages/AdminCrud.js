MQ_DEF("AdminCrud", "<div class=\"ac\" dir=\"rtl\" style=\"font-family: 'IBM Plex Sans Arabic', system-ui, sans-serif; color: #0F1E35\">\n<sc-if value=\"{{locked}}\" hint-placeholder-val=\"{{false}}\">\n<div role=\"note\" style=\"padding: 12px 16px; border-radius: 12px; background: #F3EEE2; font-size: 14px; line-height: 1.8; color: #2B3A52\">{{lockText}}</div>\n</sc-if>\n<sc-if value=\"{{hasAccess}}\" hint-placeholder-val=\"{{true}}\">\n<div class=\"ac-bar\">\n<label class=\"ac-search\">\n<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#3A4860\" stroke-width=\"1.8\" stroke-linecap=\"round\" aria-hidden=\"true\"><circle cx=\"11\" cy=\"11\" r=\"7\"></circle><path d=\"M20 20l-3.5-3.5\"></path></svg>\n<span style=\"position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)\">بحث في {{plural}}</span>\n<input type=\"search\" value=\"{{q}}\" onChange=\"{{onQ}}\" placeholder=\"{{searchPh}}\">\n</label>\n<sc-for list=\"{{filters}}\" as=\"fl\" hint-placeholder-count=\"2\">\n<select class=\"ac-sel\" aria-label=\"{{fl.label}}\" value=\"{{fl.value}}\" onChange=\"{{fl.onChange}}\">\n<sc-for list=\"{{fl.opts}}\" as=\"o\" hint-placeholder-count=\"3\"><option value=\"{{o.v}}\">{{o.l}}</option></sc-for>\n</select>\n</sc-for>\n<button type=\"button\" class=\"ac-btn sec\" onClick=\"{{exportCsv}}\">تصدير CSV</button>\n<sc-if value=\"{{canCreate}}\" hint-placeholder-val=\"{{true}}\"><button type=\"button\" class=\"ac-btn pri\" onClick=\"{{create}}\" disabled=\"{{locked}}\">+ إضافة {{singular}}</button></sc-if>\n</div>\n\n<sc-if value=\"{{hasSel}}\" hint-placeholder-val=\"{{false}}\">\n<div class=\"ac-bulk\" role=\"region\" aria-label=\"إجراءات جماعية\">\n<span style=\"font-weight: 600\">{{selLabel}}</span>\n<sc-for list=\"{{bulk}}\" as=\"b\" hint-placeholder-count=\"2\"><button type=\"button\" class=\"ac-btn\" onClick=\"{{b.run}}\" disabled=\"{{locked}}\">{{b.label}}</button></sc-for>\n<sc-if value=\"{{canDelete}}\" hint-placeholder-val=\"{{true}}\"><button type=\"button\" class=\"ac-btn\" onClick=\"{{askBulkDel}}\" disabled=\"{{locked}}\">حذف المحدد</button></sc-if>\n<button type=\"button\" class=\"ac-btn\" onClick=\"{{clearSel}}\" style=\"margin-inline-start: auto\">إلغاء التحديد</button>\n<sc-if value=\"{{bulkConfirm}}\" hint-placeholder-val=\"{{false}}\"><div role=\"alert\" style=\"flex-basis: 100%; display: flex; flex-wrap: wrap; align-items: center; gap: 10px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,.2)\"><span style=\"flex: 1 1 260px\">{{bulkWarn}}</span><button type=\"button\" class=\"ac-btn\" onClick=\"{{bulkDelete}}\" style=\"background: #A3282B; border-color: #A3282B\">تأكيد الحذف</button><button type=\"button\" class=\"ac-btn\" onClick=\"{{cancelBulkDel}}\">تراجع</button></div></sc-if>\n</div>\n</sc-if>\n\n<div class=\"ac-wrap\">\n<sc-if value=\"{{empty}}\" hint-placeholder-val=\"{{false}}\"><div class=\"ac-empty\">{{emptyText}}</div></sc-if>\n<sc-if value=\"{{notEmpty}}\" hint-placeholder-val=\"{{true}}\">\n<div class=\"ac-tw\">\n<div class=\"ac-table\" role=\"table\" aria-label=\"{{plural}}\" style=\"--cols: {{gridCols}}\">\n<div class=\"ac-tr ac-th-row\" role=\"row\">\n<span class=\"ac-td\" role=\"columnheader\"><input type=\"checkbox\" class=\"ac-chk\" aria-label=\"تحديد كل الصفحة\" checked=\"{{allOn}}\" onChange=\"{{toggleAll}}\"></span>\n<sc-for list=\"{{cols}}\" as=\"c\" hint-placeholder-count=\"4\"><span class=\"ac-td\" role=\"columnheader\"><button type=\"button\" class=\"ac-th\" onClick=\"{{c.sort}}\" aria-label=\"ترتيب حسب {{c.label}}\">{{c.label}}<span aria-hidden=\"true\" style=\"color: #C9A24D\">{{c.arrow}}</span></button></span></sc-for>\n<span class=\"ac-td\" role=\"columnheader\"><span style=\"position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)\">إجراءات</span></span>\n</div>\n<sc-for list=\"{{page}}\" as=\"r\" hint-placeholder-count=\"6\">\n<div class=\"ac-tr\" role=\"row\">\n<span class=\"ac-td\" role=\"cell\"><input type=\"checkbox\" class=\"ac-chk\" aria-label=\"تحديد {{r.title}}\" checked=\"{{r.on}}\" onChange=\"{{r.toggle}}\"></span>\n<sc-for list=\"{{r.cells}}\" as=\"c\" hint-placeholder-count=\"4\">\n<span class=\"ac-td\" role=\"cell\" title=\"{{c.text}}\"><sc-if value=\"{{c.isBadge}}\" hint-placeholder-val=\"{{false}}\"><span class=\"ac-badge\" style=\"background: {{c.bg}}; color: {{c.fg}}\">{{c.text}}</span></sc-if><sc-if value=\"{{c.isPlain}}\" hint-placeholder-val=\"{{true}}\"><span class=\"ac-ell\" style=\"font-weight: {{c.weight}}\">{{c.text}}</span></sc-if></span>\n</sc-for>\n<span class=\"ac-td\" role=\"cell\"><button type=\"button\" class=\"ac-row-btn\" onClick=\"{{r.edit}}\">{{editLabel}}</button></span>\n</div>\n</sc-for>\n</div>\n</div>\n<div class=\"ac-cards\">\n<sc-for list=\"{{page}}\" as=\"r\" hint-placeholder-count=\"4\">\n<div class=\"ac-card\">\n<div style=\"display: flex; align-items: center; gap: 10px\">\n<input type=\"checkbox\" class=\"ac-chk\" aria-label=\"تحديد {{r.title}}\" checked=\"{{r.on}}\" onChange=\"{{r.toggle}}\">\n<span style=\"flex: 1; min-width: 0; font-size: 15px; font-weight: 700; overflow: hidden; text-overflow: ellipsis; white-space: nowrap\">{{r.title}}</span>\n<button type=\"button\" class=\"ac-row-btn\" onClick=\"{{r.edit}}\">{{editLabel}}</button>\n</div>\n<sc-for list=\"{{r.rest}}\" as=\"c\" hint-placeholder-count=\"2\"><div class=\"ac-kv\"><b>{{c.label}}:</b><span>{{c.text}}</span></div></sc-for>\n</div>\n</sc-for>\n</div>\n</sc-if>\n<div class=\"ac-foot\">\n<span>{{countLabel}}</span>\n<div class=\"ac-pg\" role=\"navigation\" aria-label=\"الصفحات\">\n<sc-for list=\"{{pages}}\" as=\"p\" hint-placeholder-count=\"2\"><button type=\"button\" aria-current=\"{{p.cur}}\" onClick=\"{{p.go}}\">{{p.n}}</button></sc-for>\n</div>\n</div>\n</div>\n\n</sc-if>\n<sc-if value=\"{{editing}}\" hint-placeholder-val=\"{{false}}\">\n<div class=\"ac-ov\" onClick=\"{{close}}\"></div>\n<div class=\"ac-dr\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"{{dlgId}}\" ref=\"{{drRef}}\">\n<div class=\"ac-dr-h\">\n<div style=\"display: flex; flex-direction: column; gap: 2px; min-width: 0\">\n<span style=\"font-size: 12.5px; color: #3A4860\">{{dlgKicker}}</span>\n<h2 id=\"{{dlgId}}\" ref=\"{{headRef}}\" tabindex=\"-1\" style=\"margin: 0; font-size: 20px; font-weight: 700; outline: none; overflow: hidden; text-overflow: ellipsis; white-space: nowrap\">{{dlgTitle}}</h2>\n</div>\n<button type=\"button\" class=\"ac-row-btn\" onClick=\"{{close}}\" aria-label=\"إغلاق\">✕</button>\n</div>\n<div class=\"ac-dr-b\">\n<div class=\"ac-dr-g\">\n<div style=\"display: flex; flex-direction: column; gap: 16px; min-width: 0\">\n<sc-if value=\"{{hasPending}}\" hint-placeholder-val=\"{{false}}\"><div role=\"note\" style=\"display: flex; flex-wrap: wrap; align-items: center; gap: 10px; padding: 12px 16px; border-radius: 12px; background: #F6EBD0; color: #5E4710; font-size: 14px; line-height: 1.8\"><span style=\"flex: 1 1 260px\">{{pendingText}}</span><sc-if value=\"{{canReview}}\" hint-placeholder-val=\"{{false}}\"><button type=\"button\" class=\"ac-btn sec\" onClick=\"{{rejectPending}}\" style=\"min-height: 38px\">رفض التعديل</button></sc-if></div></sc-if>\n<sc-if value=\"{{hasFormErr}}\" hint-placeholder-val=\"{{false}}\"><div role=\"alert\" style=\"padding: 12px 16px; border-radius: 12px; background: #F7E3E3; color: #A3282B; font-size: 14px; line-height: 1.8\">{{formErr}}</div></sc-if>\n<div style=\"padding: 20px; border: 1px solid #E3DCCB; border-radius: 18px; background: #FFFFFF\">\n<dc-import name=\"AdminFields\" fields=\"{{fields}}\" value=\"{{draft}}\" errs=\"{{errs}}\" on-change=\"{{onDraft}}\" id-prefix=\"{{module}}\" hint-size=\"100%,600px\"></dc-import>\n</div>\n</div>\n<aside class=\"ac-pv\" aria-label=\"معاينة\">\n<span style=\"font-size: 13px; font-weight: 700; color: #2B3A52\">معاينة كما سيظهر في الموقع</span>\n<div style=\"display: flex; flex-direction: column; gap: 10px; padding: 20px; border: 1px solid #E3DCCB; border-radius: 18px; background: #FFFFFF\">\n<sc-if value=\"{{pv.hasKicker}}\" hint-placeholder-val=\"{{true}}\"><span style=\"align-self: flex-start; font-size: 12px; font-weight: 600; color: #2B3A52; background: #F3EEE2; padding: 4px 12px; border-radius: 999px\">{{pv.kicker}}</span></sc-if>\n<span style=\"font-size: 18px; line-height: 1.6; font-weight: 700\">{{pv.title}}</span>\n<sc-if value=\"{{pv.hasBody}}\" hint-placeholder-val=\"{{true}}\"><span style=\"font-size: 14px; line-height: 1.85; color: #3A4860; white-space: pre-line\">{{pv.body}}</span></sc-if>\n<sc-for list=\"{{pv.meta}}\" as=\"m\" hint-placeholder-count=\"2\"><span style=\"font-size: 13px; color: #3A4860; padding-top: 8px; border-top: 1px solid #F0EBDF\">{{m}}</span></sc-for>\n</div>\n<sc-if value=\"{{pv.hasNote}}\" hint-placeholder-val=\"{{false}}\"><span style=\"font-size: 12.5px; line-height: 1.8; color: #3A4860\">{{pv.note}}</span></sc-if>\n<sc-if value=\"{{hasSite}}\" hint-placeholder-val=\"{{false}}\"><a class=\"ac-btn sec\" href=\"{{siteHref}}\" onClick=\"{{openSite}}\" style=\"align-self: flex-start\">عرضه في الموقع</a></sc-if>\n</aside>\n</div>\n</div>\n<sc-if value=\"{{confirmDel}}\" hint-placeholder-val=\"{{false}}\">\n<div role=\"alert\" style=\"display: flex; flex-wrap: wrap; align-items: center; gap: 10px; padding: 12px 24px; background: #F7E3E3; color: #A3282B; font-size: 14px\">\n<span style=\"flex: 1 1 280px\">{{delWarn}}</span>\n<button type=\"button\" class=\"ac-btn dan-s\" onClick=\"{{doDelete}}\">تأكيد الحذف</button>\n<button type=\"button\" class=\"ac-btn sec\" onClick=\"{{cancelDel}}\">تراجع</button>\n</div>\n</sc-if>\n<div class=\"ac-dr-f\">\n<button type=\"button\" class=\"ac-btn pri\" onClick=\"{{save}}\" disabled=\"{{locked}}\">{{saveLabel}}</button>\n<button type=\"button\" class=\"ac-btn sec\" onClick=\"{{close}}\">إلغاء</button>\n<sc-if value=\"{{canDelRow}}\" hint-placeholder-val=\"{{false}}\"><button type=\"button\" class=\"ac-btn dan\" onClick=\"{{askDel}}\" disabled=\"{{locked}}\" style=\"margin-inline-start: auto\">حذف</button></sc-if>\n</div>\n</div>\n</sc-if>\n\n<sc-if value=\"{{hasToast}}\" hint-placeholder-val=\"{{false}}\"><div class=\"ac-toast\" role=\"status\">{{toast}}</div></sc-if>\n</div>", "\n.ac{display:flex;flex-direction:column;gap:16px;min-width:0}\n.ac-bar{display:flex;flex-wrap:wrap;align-items:center;gap:10px}\n.ac-search{flex:1 1 260px;display:flex;align-items:center;gap:8px;height:46px;padding:0 14px;border:1px solid #8F8778;border-radius:12px;background:#FFFFFF;box-sizing:border-box}\n.ac-search input{flex:1;min-width:0;border:0;background:transparent;font:inherit;font-size:15px;color:#0F1E35;outline:none}\n.ac-search:focus-within{outline:2px solid #C9A24D;outline-offset:1px}\n.ac-sel{height:46px;padding:0 12px;border:1px solid #8F8778;border-radius:12px;background:#FFFFFF;font:inherit;font-size:14px;color:#0F1E35;max-width:100%}\n.ac-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:46px;padding:0 18px;border-radius:12px;font:inherit;font-size:14px;font-weight:600;cursor:pointer;white-space:nowrap;box-sizing:border-box;text-decoration:none}\n.ac-btn.pri{background:#C9A24D;border:1px solid #C9A24D;color:#0F1E35;font-weight:700}\n.ac-btn.sec{background:#FFFFFF;border:1px solid #8F8778;color:#0F1E35}\n.ac-btn.dan{background:#FFFFFF;border:1px solid #A3282B;color:#A3282B}\n.ac-btn.dan-s{background:#A3282B;border:1px solid #A3282B;color:#FFFFFF}\n.ac-btn:disabled{opacity:.45;cursor:not-allowed}\n.ac-btn:focus-visible,.ac-th:focus-visible,.ac-row-btn:focus-visible{outline:2px solid #C9A24D;outline-offset:2px}\n.ac-bulk{display:flex;flex-wrap:wrap;align-items:center;gap:10px;padding:10px 14px;border-radius:14px;background:#0F1E35;color:#FFFFFF;font-size:14px}\n.ac-bulk .ac-btn{min-height:38px;padding:0 14px;background:transparent;border:1px solid rgba(255,255,255,.35);color:#FFFFFF}\n.ac-wrap{border:1px solid #E3DCCB;border-radius:18px;background:#FFFFFF;overflow:hidden}\n.ac-tw{overflow-x:auto}\n.ac-table{min-width:760px;font-size:14px}\n.ac-tr{display:grid;grid-template-columns:var(--cols);align-items:center;border-bottom:1px solid #F0EBDF;min-height:56px}\n.ac-tr:last-child{border-bottom:0}\n.ac-th-row{position:sticky;top:0;z-index:1;min-height:46px;background:#FAF7F0;border-bottom:1px solid #E3DCCB;font-weight:600;color:#2B3A52}\n.ac-tr:not(.ac-th-row):hover{background:#FCFAF5}\n.ac-td{padding:0 14px;min-width:0;overflow:hidden;white-space:nowrap;position:relative}\n.ac-ell{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#0F1E35}\n.ac-th{border:0;background:transparent;font:inherit;font-weight:600;color:inherit;cursor:pointer;padding:0;display:inline-flex;align-items:center;gap:4px}\n.ac-badge{display:inline-flex;align-items:center;height:26px;padding:0 10px;border-radius:999px;font-size:12.5px;font-weight:600;white-space:nowrap}\n.ac-row-btn{min-height:36px;padding:0 12px;border:1px solid #D9D2C3;border-radius:10px;background:#FFFFFF;font:inherit;font-size:13px;color:#0F1E35;cursor:pointer}\n.ac-row-btn:hover{border-color:#0F1E35}\n.ac-chk{width:18px;height:18px;accent-color:#0F1E35;cursor:pointer}\n.ac-cards{display:none;flex-direction:column}\n.ac-card{display:flex;flex-direction:column;gap:6px;padding:14px 16px;border-bottom:1px solid #F0EBDF}\n.ac-card:last-child{border-bottom:0}\n.ac-kv{display:flex;gap:8px;font-size:13px;color:#3A4860;min-width:0}\n.ac-kv b{font-weight:600;color:#2B3A52;flex:0 0 auto}\n.ac-kv span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.ac-foot{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;padding:12px 16px;border-top:1px solid #E3DCCB;background:#FAF7F0;font-size:13px;color:#3A4860}\n.ac-pg{display:flex;gap:6px}\n.ac-pg button{min-width:36px;height:36px;border-radius:10px;border:1px solid #D9D2C3;background:#FFFFFF;font:inherit;font-size:13px;color:#0F1E35;cursor:pointer}\n.ac-pg button[aria-current=page]{background:#0F1E35;border-color:#0F1E35;color:#FFFFFF}\n.ac-empty{padding:40px 20px;text-align:center;font-size:15px;color:#3A4860}\n.ac-ov{position:fixed;inset:0;z-index:60;background:rgba(11,23,41,.5)}\n.ac-dr{position:fixed;top:0;bottom:0;inset-inline-end:0;z-index:61;width:min(1040px,100%);background:#FAF7F0;display:flex;flex-direction:column;box-shadow:24px 0 60px -20px rgba(0,0,0,.45)}\n.ac-dr-h{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:16px 24px;background:#FFFFFF;border-bottom:1px solid #E3DCCB}\n.ac-dr-b{flex:1;overflow-y:auto;padding:24px}\n.ac-dr-g{display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:24px;align-items:start}\n.ac-pv{position:sticky;top:0;display:flex;flex-direction:column;gap:10px}\n.ac-dr-f{display:flex;flex-wrap:wrap;align-items:center;gap:10px;padding:14px 24px;background:#FFFFFF;border-top:1px solid #E3DCCB}\n.ac-toast{position:fixed;bottom:24px;inset-inline-start:50%;transform:translateX(50%);z-index:80;padding:12px 20px;border-radius:12px;background:#0F1E35;color:#FFFFFF;font-size:14px;box-shadow:0 18px 40px -16px rgba(0,0,0,.5);max-width:calc(100% - 32px)}\n@media (max-width:900px){.ac-dr-g{grid-template-columns:minmax(0,1fr)}.ac-pv{position:static}}\n@media (max-width:760px){.ac-tw{display:none}.ac-cards{display:flex}.ac-dr-b{padding:16px}.ac-dr-h,.ac-dr-f{padding:12px 16px}}\n", function (DCLogic, React) {
"use strict";
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { q: '', flt: {}, sortK: '', sortDir: 1, pg: 0, sel: {}, editId: null, draft: null, errs: {}, formErr: '', confirmDel: false, bulkConfirm: false, toast: '', tick: 0 };
    this.headRef = (el) => { this.headEl = el; };
    this.drRef = (el) => { this.drEl = el; };
    this.onKey = (e) => {
      if (this.state.editId == null || !this.drEl) return;
      if (e.key === 'Escape') { e.preventDefault(); this.setState({ editId: null, draft: null, confirmDel: false }); return; }
      if (e.key === 'Tab') {
        const els = Array.from(this.drEl.querySelectorAll('button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter((x) => x.offsetParent !== null);
        if (!els.length) return;
        const first = els[0], last = els[els.length - 1];
        if (e.shiftKey && (document.activeElement === first || !els.includes(document.activeElement))) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && (document.activeElement === last || !els.includes(document.activeElement))) { e.preventDefault(); first.focus(); }
      }
    };
  }
  componentDidMount() { try { window.addEventListener('keydown', this.onKey); } catch (e) {} }
  setInert(on) {
    try {
      (this.inerted || []).forEach((el) => el.removeAttribute('inert')); this.inerted = [];
      if (!on || !this.drEl) return;
      let n = this.drEl;
      while (n && n.parentElement && n !== document.body) {
        Array.from(n.parentElement.children).forEach((sib) => { if (sib !== n && !sib.classList.contains('ac-ov') && !sib.hasAttribute('inert') && !['SCRIPT', 'STYLE', 'LINK'].includes(sib.tagName)) { sib.setAttribute('inert', ''); this.inerted.push(sib); } });
        n = n.parentElement;
      }
    } catch (e) {}
  }
  componentDidUpdate(pp, ps) {
    if (ps.editId == null && this.state.editId != null) { this.setInert(true); try { if (this.headEl) this.headEl.focus(); } catch (e) {} }
    if (ps.editId != null && this.state.editId == null) { this.setInert(false); try { if (this.opener && document.contains(this.opener)) this.opener.focus(); } catch (e) {} }
  }
  componentWillUnmount() { clearTimeout(this.tt); this.setInert(false); try { window.removeEventListener('keydown', this.onKey); } catch (e) {} }
  renderVals() {
    const D = '٠١٢٣٤٥٦٧٨٩';
    const ar = (x) => String(x).replace(/[0-9]/g, (d) => D[d]);
    const norm = (s) => String(s == null ? '' : s).replace(/[٠-٩]/g, (d) => D.indexOf(d)).toLowerCase().replace(/[ً-ْـ]/g, '').replace(/[أإآٱ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي');
    const S = this.props.schema || {};
    const mod = this.props.module || S.module || 'items';
    const idk = S.idKey || 'id';
    const tk = S.titleKey || 'title';
    const fields = S.fields || [];
    const st = this.state;
    const LS = (() => { try { return window.localStorage; } catch (e) { return null; } })();
    const readJ = (k, d) => { try { const v = JSON.parse(LS.getItem(k) || 'null'); return v == null ? d : v; } catch (e) { return d; } };
    const writeJ = (k, v) => { try { LS.setItem(k, JSON.stringify(v)); } catch (e) {} };
    const role = readJ('mq_adminRole', 'super');
    const roleNames = { super: 'المدير العام', editor: 'محرر المحتوى', reviewer: 'المراجع القانوني', verifier: 'موثّق المحامين', ads: 'مدير الإعلانات', support: 'الدعم الفني', analyst: 'المحلل' };
    const cms = readJ('mq_cms', {});
    const grp = S.group || mod;
    const ROLE_DEF = {"editor":{"site":"publish","laws":"edit","articles":"edit","forms":"edit","assistant":"edit","holidays":"publish","search":"publish"},"reviewer":{"laws":"publish","articles":"publish","forms":"publish","assistant":"publish","calculator":"publish","holidays":"publish","legal":"publish"},"verifier":{"lawyers":"publish"},"ads":{"ads":"publish"},"support":{"inbox":"publish","bookings":"publish","contact":"publish","templates":"publish","privacy":"publish"},"analyst":{}};
    const lvl = role === 'super' ? 'publish' : ((cms.roles && cms.roles[role] && cms.roles[role][grp]) || ((ROLE_DEF[role] || {})[grp]) || 'view');
    const locked = lvl === 'none' || lvl === 'view';
    const canDel = lvl === 'publish' && !S.noDelete;
    const isReviewer = role === 'super' || role === 'reviewer';
    const merge = (seed, c) => {
      c = c || {}; const up = c.upsert || {}; const rm = new Set(c.removed || []);
      const out = (seed || []).filter((r) => !rm.has(r[idk])).map((r) => (up[r[idk]] ? { ...r, ...up[r[idk]] } : r));
      Object.keys(up).forEach((id) => { if (!rm.has(id) && !(seed || []).some((r) => r[idk] === id)) out.push(up[id]); });
      return out;
    };
    const rows = merge(S.seed, cms[mod]);
    if (S.badge) { try { const b = readJ('mq_adminBadges', {}); const n = S.badge(rows); if (b[mod] !== n) { b[mod] = n; writeJ('mq_adminBadges', b); setTimeout(() => { try { window.dispatchEvent(new Event('mq-badges')); } catch (e) {} }, 0); } } catch (e) {} }
    let customToast = false;
    const toast = (t) => { clearTimeout(this.tt); this.setState({ toast: t }); this.tt = setTimeout(() => this.setState({ toast: '' }), 3200); };
    const audit = (e) => {
      const a = readJ('mq_audit', []);
      a.unshift({ id: 'A' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), at: new Date().toISOString(), role, module: mod, label: S.plural || mod, ...e });
      writeJ('mq_audit', a.slice(0, 300));
    };
    const api = {
      upsert: (m, row, key, beforeRow) => { const c = readJ('mq_cms', {}); const k = key || 'id'; c[m] = c[m] || { upsert: {}, removed: [] }; c[m].upsert = c[m].upsert || {}; c[m].upsert[row[k]] = row; c[m].removed = (c[m].removed || []).filter((x) => x !== row[k]); writeJ('mq_cms', c); audit({ module: m, rowId: row[k], title: row.name || row.title || row[k], action: beforeRow ? 'update' : 'create', before: beforeRow || null, after: row }); },
      toast: (t) => { customToast = true; toast(t); }
    };
    const persist = (row, before, action) => {
      const c = readJ('mq_cms', {});
      c[mod] = c[mod] || { upsert: {}, removed: [] }; c[mod].upsert = c[mod].upsert || {}; c[mod].removed = c[mod].removed || [];
      c[mod].pending = c[mod].pending || {};
      if (row) delete c[mod].pending[row[idk]];
      if (action === 'delete') { delete c[mod].pending[before[idk]]; delete c[mod].upsert[before[idk]]; if (!c[mod].removed.includes(before[idk])) c[mod].removed.push(before[idk]); }
      else { c[mod].upsert[row[idk]] = row; c[mod].removed = c[mod].removed.filter((x) => x !== row[idk]); }
      try { const merged = merge(S.seed, c[mod]); c._counts = { ...(c._counts || {}), [mod]: merged.filter((r) => (r.state || 'published') === 'published' && (r.status == null || ['active', 'published'].includes(r.status) || mod !== 'lawyers')).length }; } catch (e) {}
      writeJ('mq_cms', c);
      audit({ rowId: (row || before)[idk], title: String((row || before)[tk] || (row || before)[idk]), action, before: before || null, after: row || null });
      if (this.props.onSaved) { try { this.props.onSaved(row, action); } catch (e) {} }
      if (S.afterSave && row) { try { S.afterSave(row, before, api); } catch (e) {} }
    };
    const toNum = (x) => { if (x === '' || x == null) return ''; const n = Number(String(x).replace(/[٠-٩]/g, (d) => D.indexOf(d))); return isNaN(n) ? x : n; };
    const clean = (obj) => {
      const o = { ...obj };
      fields.forEach((f) => {
        if (f.type === 'number') o[f.k] = toNum(o[f.k]);
        if (f.type === 'repeater' && Array.isArray(o[f.k])) o[f.k] = o[f.k].map((it) => { const x = { ...it }; (f.sub || []).forEach((sf) => { if (sf.type === 'number') x[sf.k] = toNum(x[sf.k]); else if (typeof x[sf.k] === 'string' && sf.type !== 'textarea') x[sf.k] = x[sf.k].trim(); }); return x; });
        if (f.type === 'lines' && Array.isArray(o[f.k])) o[f.k] = o[f.k].map((x) => String(x).trim()).filter(Boolean);
        if (typeof o[f.k] === 'string' && f.type !== 'textarea') o[f.k] = o[f.k].trim();
      });
      return o;
    };
    const tones = { navy: ['#0F1E35', '#FFFFFF'], gold: ['#F6EBD0', '#5E4710'], muted: ['#F3EEE2', '#2B3A52'], err: ['#F7E3E3', '#A3282B'], ok: ['#E3EAF4', '#1C3660'] };
    const cell = (c, r) => {
      const raw = typeof c.get === 'function' ? c.get(r) : r[c.k];
      if (c.type === 'badge') { const m = (c.map || {})[String(raw)] || [String(raw == null ? '—' : raw), 'muted']; const t = tones[m[1]] || tones.muted; return { label: c.label, text: m[0], raw: m[0], isBadge: true, isPlain: false, bg: t[0], fg: t[1] }; }
      let text = raw;
      if (c.type === 'count') text = ar(Array.isArray(raw) ? raw.length : 0);
      else if (c.type === 'bool') { const t = raw ? tones.ok : tones.muted; return { label: c.label, text: raw ? (c.yes || 'نعم') : (c.no || 'لا'), isBadge: true, isPlain: false, bg: t[0], fg: t[1] }; }
      else if (c.type === 'date') text = raw ? ar(String(raw).slice(0, 10)) : '—';
      else if (Array.isArray(raw)) text = raw.join('، ');
      else if (raw == null || raw === '') text = '—';
      const rawT = c.type === 'count' ? String(Array.isArray(raw) ? raw.length : 0) : String(text);
      return { label: c.label, text: ar(String(text)), raw: rawT, isBadge: false, isPlain: true, weight: c.strong ? '600' : '400' };
    };
    const cols = (S.columns || []).slice();
    const flDefs = S.filters || [];
    const fv = (k) => (st.flt[k] == null ? 'all' : st.flt[k]);
    let list = rows.filter((r) => flDefs.every((f) => { const v = fv(f.k); if (v === 'all') return true; const rv = typeof f.get === 'function' ? f.get(r) : r[f.k]; return String(rv) === v; }));
    const nq = norm(st.q).trim();
    if (nq) list = list.filter((r) => norm((S.searchKeys || [tk]).map((k) => { const x = r[k]; return Array.isArray(x) ? x.map((y) => (typeof y === 'object' ? Object.values(y).join(' ') : y)).join(' ') : x; }).join(' ')).includes(nq));
    if (st.sortK) {
      const c = cols.find((x) => x.k === st.sortK) || { k: st.sortK };
      const order = c.type === 'badge' && c.map ? Object.keys(c.map) : null;
      const g = (r) => { const v = typeof c.get === 'function' ? c.get(r) : r[c.k]; if (order) { const i = order.indexOf(String(v)); return i < 0 ? 999 : i; } if (c.type === 'bool') return v ? 1 : 0; return Array.isArray(v) ? v.length : v; };
      list = list.slice().sort((a, b) => { const x = g(a), y = g(b); if (typeof x === 'number' && typeof y === 'number') return (x - y) * st.sortDir; return String(x == null ? '' : x).localeCompare(String(y == null ? '' : y), 'ar') * st.sortDir; });
    }
    else { const pd = (cms[mod] && cms[mod].pending) || {}; if (Object.keys(pd).length) list = list.filter((r) => pd[r[idk]]).concat(list.filter((r) => !pd[r[idk]])); }
    const per = S.perPage || 10;
    const nPages = Math.max(1, Math.ceil(list.length / per));
    const pg = Math.min(st.pg, nPages - 1);
    const pageRows = list.slice(pg * per, pg * per + per);
    const selIds = Object.keys(st.sel).filter((k) => st.sel[k]);
    const editing = st.editId != null;
    const isNew = st.editId === '__new';
    const orig = isNew ? null : rows.find((r) => String(r[idk]) === String(st.editId)) || null;
    const draft = st.draft || {};
    const pvRaw = editing && S.preview ? (() => { try { return S.preview(draft) || {}; } catch (e) { return {}; } })() : {};
    const pv = { kicker: pvRaw.kicker || '', hasKicker: !!pvRaw.kicker, title: pvRaw.title || draft[tk] || 'بلا عنوان', body: pvRaw.body || '', hasBody: !!pvRaw.body, meta: (pvRaw.meta || []).filter(Boolean).map((m) => ar(m)), note: pvRaw.note || '', hasNote: !!pvRaw.note };
    const pendingAll = (cms[mod] && cms[mod].pending) || {};
    const pendingRow = !isNew && st.editId != null ? pendingAll[st.editId] : null;
    const remember = () => { try { this.opener = document.activeElement; } catch (e) {} };
    const openEdit = (r) => { remember(); const p = pendingAll[r[idk]]; this.setState({ editId: r[idk], draft: JSON.parse(JSON.stringify(p ? { ...r, ...p } : r)), errs: {}, formErr: '', confirmDel: false }); };
    const fieldsEff = isNew ? fields : fields.map((f) => (f.k === idk ? { ...f, type: 'info', required: false, help: 'لا يتغيّر المعرّف بعد الإنشاء حتى لا تنكسر الروابط إليه.' } : f));
    const save = () => {
      if (locked) return;
      const row = clean(draft);
      if (!isNew && orig) row[idk] = orig[idk];
      if (S.beforeSave) Object.assign(row, S.beforeSave(row, orig) || {});
      if (isNew && !String(row[idk] || '').trim()) row[idk] = (S.idPrefix || mod) + '-' + Date.now().toString(36);
      const errs = {};
      fields.forEach((f) => {
        const v = row[f.k];
        if (f.required && (v == null || String(Array.isArray(v) ? v.join('') : v).trim() === '')) errs[f.k] = 'هذا الحقل مطلوب.';
        if (f.type === 'number' && v !== '' && v != null) { if (typeof v !== 'number' || !isFinite(v)) errs[f.k] = 'أدخل رقماً صحيحاً.'; else if (v < (f.min != null ? f.min : 0)) errs[f.k] = 'القيمة أقل من المسموح.'; else if (f.max != null && v > f.max) errs[f.k] = 'القيمة أكبر من المسموح (' + ar(f.max) + ').'; }
        if (f.type === 'repeater' && Array.isArray(v)) (f.sub || []).forEach((sf) => { if (sf.type !== 'number') return; v.forEach((it, i) => { const x = it[sf.k]; if (x !== '' && x != null && (typeof x !== 'number' || x < 0)) errs[f.k] = '«' + sf.label + '» في ' + (f.itemLabel || 'العنصر') + ' ' + ar(i + 1) + ' يجب أن يكون رقماً موجباً.'; }); });
      });
      if (isNew && rows.some((r) => String(r[idk]) === String(row[idk]))) errs[idk] = 'هذا المعرّف مستخدم.';
      const hasState = 'state' in row || fields.some((f) => f.k === 'state');
      const gated = hasState && (row.state || 'published') === 'published' && (lvl === 'edit' || (S.reviewGate && !isReviewer));
      const asRevision = gated && !!orig && (orig.state || 'published') === 'published';
      let formErr = '';
      if (gated && !asRevision) formErr = 'لا تملك صلاحية النشر هنا. احفظ العنصر «مسودة» أو «بانتظار المراجعة».';
      if (S.validate && !formErr) { const r = S.validate(row, { role, isNew, rows, before: orig, asRevision }); if (typeof r === 'string') formErr = r; else if (r) Object.assign(errs, r); }
      if (Object.keys(errs).length || formErr) { this.setState({ errs, formErr: formErr || 'راجع الحقول المظللة بالأحمر.' }); return; }
      if (asRevision) {
        const c = readJ('mq_cms', {}); c[mod] = c[mod] || { upsert: {}, removed: [] }; c[mod].pending = c[mod].pending || {}; c[mod].pending[row[idk]] = row; writeJ('mq_cms', c);
        audit({ rowId: row[idk], title: String(row[tk] || row[idk]), action: 'revision', before: orig, after: row });
        this.setState({ editId: null, draft: null, errs: {}, formErr: '', tick: st.tick + 1 });
        toast('حُفظ تعديلك بانتظار مراجعة المستشار القانوني. النسخة المنشورة باقية للزوار حتى يعتمده.');
        return;
      }
      persist(row, orig, isNew ? 'create' : 'update');
      this.setState({ editId: null, draft: null, errs: {}, formErr: '', tick: st.tick + 1 });
      if (!customToast) {
        const hidden = 'state' in row && row.state !== 'published';
        toast(S.siteless ? 'حُفظ.' : hidden ? 'حُفظ «' + (row[tk] || row[idk]) + '» ولن يظهر للزوار قبل نشره.' : row.publishAt && row.publishAt > new Date().toISOString().slice(0, 10) ? 'حُفظ، ويظهر للزوار في ' + ar(row.publishAt) + '.' : isNew ? 'أُضيف «' + (row[tk] || row[idk]) + '» ويظهر الآن في الموقع.' : 'حُفظت التعديلات وتظهر الآن في الموقع.');
      }
    };
    const rejectPending = () => { if (!isReviewer) return; const c = readJ('mq_cms', {}); if (c[mod] && c[mod].pending) { const p = c[mod].pending[st.editId]; delete c[mod].pending[st.editId]; writeJ('mq_cms', c); audit({ rowId: st.editId, title: String((p && p[tk]) || st.editId), action: 'reject', before: p || null, after: null }); } this.setState({ editId: null, draft: null, tick: st.tick + 1 }); toast('رُفض التعديل المعلّق، وبقيت النسخة المنشورة.'); };
    const runBulk = (b) => () => {
      if (locked) return;
      const chosen = list.filter((r) => st.sel[r[idk]]);
      let blocked = 0, same = 0;
      chosen.forEach((r) => { const next = b.apply({ ...r }); if (JSON.stringify(next) === JSON.stringify(r)) { same++; return; } if (next.state === 'published' && (lvl === 'edit' || (S.reviewGate && !isReviewer))) { blocked++; return; } if (S.validate) { const e = S.validate(next, { role, isNew: false, rows, before: r }); if (e && (typeof e === 'string' || Object.keys(e).length)) { blocked++; return; } } persist(next, r, 'update'); });
      this.setState({ sel: {}, tick: st.tick + 1 });
      const done = chosen.length - blocked - same;
      toast('طُبّق «' + b.label + '» على ' + ar(done) + ' عنصر' + (same ? '، وتُرك ' + ar(same) + ' دون تغيير لأنه لا ينطبق عليه' : '') + (blocked ? '، ورُفض ' + ar(blocked) + ' لا تسمح به صلاحيتك' : '') + '.');
    };
    const bulkDelete = () => {
      if (locked || !canDel) return;
      const chosen = list.filter((r) => st.sel[r[idk]]);
      chosen.forEach((r) => persist(null, r, 'delete'));
      this.setState({ sel: {}, bulkConfirm: false, tick: st.tick + 1 });
      toast('حُذف ' + ar(chosen.length) + ' عنصر. يمكنك استعادتها من سجل التدقيق.');
    };
    const exportCsv = () => {
      try {
        const esc = (x) => '"' + String(x == null ? '' : x).replace(/"/g, '""') + '"';
        const head = [idk].concat(cols.map((c) => c.label));
        const lines = [head.map(esc).join(',')].concat(list.map((r) => [r[idk]].concat(cols.map((c) => cell(c, r).raw)).map(esc).join(',')));
        const blob = new Blob(['﻿' + lines.join('\n')], { type: 'text/csv;charset=utf-8' });
        const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = mod + '.csv'; document.body.appendChild(a); a.click(); a.remove();
        toast('صُدّر ' + ar(list.length) + ' صف إلى ملف CSV.');
      } catch (e) { toast('تعذّر التصدير في هذا المتصفح.'); }
    };
    const allOn = pageRows.length > 0 && pageRows.every((r) => st.sel[r[idk]]);
    const siteHref = S.siteHref || '';
    return {
      module: mod, plural: S.plural || 'العناصر', singular: S.singular || 'عنصر', editLabel: S.editLabel || 'تعديل',
      searchPh: S.searchPh || 'ابحث في ' + (S.plural || 'العناصر') + '…',
      hasAccess: lvl !== 'none', fields: fieldsEff,
      hasPending: !!pendingRow, canReview: !!pendingRow && isReviewer, rejectPending,
      pendingText: pendingRow ? (isReviewer ? 'هذه نسخة معدّلة بانتظار مراجعتك. «اعتماد التعديل ونشره» يظهرها للزوار.' : 'لهذا العنصر تعديل محفوظ بانتظار المراجعة. النسخة المنشورة باقية للزوار.') : '',
      bulkConfirm: st.bulkConfirm, bulkWarn: 'سيُحذف ' + ar(list.filter((r) => st.sel[r[idk]]).length) + ' عنصر من الموقع فوراً. يمكن استعادتها من سجل التدقيق.', askBulkDel: () => this.setState({ bulkConfirm: true }), cancelBulkDel: () => this.setState({ bulkConfirm: false }),
      delWarn: orig ? ((S.deleteWarn && S.deleteWarn(orig)) || '') + 'حذف «' + String(orig[tk] || orig[idk]) + '» يزيله من الموقع فوراً. يمكنك استعادته لاحقاً من سجل التدقيق.' : '',
      drRef: this.drRef,
      locked, lockText: 'دورك الحالي «' + (roleNames[role] || role) + '» ' + (lvl === 'none' ? 'لا يتيح الوصول إلى' : 'يتيح العرض فقط في') + ' هذه الوحدة. غيّر الدور من الشريط الجانبي للتجربة، أو الصلاحيات من «المستخدمون والصلاحيات».',
      q: st.q, onQ: (e) => this.setState({ q: e.target.value, pg: 0, sel: {}, bulkConfirm: false }),
      filters: flDefs.map((f) => ({ label: f.label, value: fv(f.k), opts: [{ v: 'all', l: f.allLabel || ('كل ' + f.label) }].concat((f.options || []).map((o) => (typeof o === 'object' ? { v: String(o.v), l: o.l } : { v: String(o), l: String(o) }))), onChange: (e) => this.setState({ sel: {}, bulkConfirm: false, flt: { ...st.flt, [f.k]: e.target.value }, pg: 0 }) })),
      canCreate: !S.noCreate, canDelete: canDel,
      create: () => { if (locked) return; remember(); const b = S.blank ? S.blank(rows) : {}; this.setState({ editId: '__new', draft: b, errs: {}, formErr: '', confirmDel: false }); },
      exportCsv,
      hasSel: selIds.length > 0, selLabel: 'محدد: ' + ar(selIds.length),
      bulk: (S.bulk || []).map((b) => ({ label: b.label, run: runBulk(b) })),
      bulkDelete, clearSel: () => this.setState({ sel: {} }),
      empty: list.length === 0, notEmpty: list.length > 0,
      emptyText: rows.length ? 'لا توجد نتائج مطابقة للبحث أو التصفية.' : (S.emptyText || 'لا توجد عناصر بعد.'),
      cols: cols.map((c) => ({ label: c.label, arrow: st.sortK === c.k ? (st.sortDir > 0 ? '▲' : '▼') : '', sort: () => this.setState({ sortK: c.k, sortDir: st.sortK === c.k ? -st.sortDir : 1 }) })),
      gridCols: '44px ' + cols.map((c, i) => (i === 0 ? 'minmax(200px, 2.2fr)' : c.w || 'minmax(96px, 1fr)')).join(' ') + ' 96px',
      allOn, toggleAll: () => { const n = { ...st.sel }; pageRows.forEach((r) => { n[r[idk]] = !allOn; }); this.setState({ sel: n }); },
      page: pageRows.map((r) => {
        const cells = cols.map((c) => cell(c, r));
        if (pendingAll[r[idk]] && cells[0] && cells[0].isPlain) cells[0] = { ...cells[0], text: cells[0].text + ' · تعديل معلّق' };
        return { title: ar(String(r[tk] || r[idk])) + (pendingAll[r[idk]] ? ' · تعديل معلّق' : ''), on: !!st.sel[r[idk]], toggle: () => this.setState({ sel: { ...st.sel, [r[idk]]: !st.sel[r[idk]] } }), cells, rest: cells.slice(1), edit: () => openEdit(r) };
      }),
      countLabel: ar(list.length) + ' من ' + ar(rows.length) + (list.length > per ? ' · صفحة ' + ar(pg + 1) + ' من ' + ar(nPages) : ''),
      pages: nPages > 1 ? Array.from({ length: nPages }, (_, i) => ({ n: ar(i + 1), cur: i === pg ? 'page' : 'false', go: () => this.setState({ pg: i }) })) : [],
      editing, dlgId: 'dlg-' + mod, headRef: this.headRef,
      dlgKicker: isNew ? 'إضافة ' + (S.singular || 'عنصر') : 'تعديل ' + (S.singular || 'عنصر') + ' · \u2066' + String(st.editId || '') + '\u2069',
      dlgTitle: String(draft[tk] || (isNew ? (S.singular || 'عنصر') + ' جديد' : '')),
      draft, errs: st.errs, onDraft: (next) => this.setState({ draft: next }),
      hasFormErr: !!st.formErr, formErr: st.formErr,
      pv, hasSite: !!siteHref && !isNew, siteHref,
      openSite: () => { if (S.siteKey) { try { LS.setItem(S.siteKey, String(draft[idk])); } catch (e) {} } },
      saveLabel: isNew ? ((('state' in draft) && draft.state !== 'published') || S.siteless ? 'إضافة' : 'إضافة ونشر') : (pendingRow && isReviewer ? 'اعتماد التعديل ونشره' : 'حفظ التعديلات'),
      save, close: () => this.setState({ editId: null, draft: null, confirmDel: false }),
      canDelRow: !isNew && canDel, confirmDel: st.confirmDel,
      askDel: () => this.setState({ confirmDel: true }), cancelDel: () => this.setState({ confirmDel: false }),
      doDelete: () => { if (locked || !canDel || !orig) return; persist(null, orig, 'delete'); this.setState({ editId: null, draft: null, confirmDel: false, tick: st.tick + 1 }); toast('حُذف العنصر. يمكنك استعادته من سجل التدقيق.'); },
      hasToast: !!st.toast, toast: st.toast
    };
  }
}
return Component;
});
