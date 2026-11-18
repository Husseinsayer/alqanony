MQ_DEF("AdminForm", "<div dir=\"rtl\" style=\"font-family: 'IBM Plex Sans Arabic', system-ui, sans-serif; color: #0F1E35; display: flex; flex-direction: column; gap: 14px\">\n<sc-if value=\"{{locked}}\" hint-placeholder-val=\"{{false}}\"><div role=\"note\" style=\"padding: 12px 16px; border-radius: 12px; background: #F3EEE2; font-size: 14px; line-height: 1.8; color: #2B3A52\">{{lockText}}</div></sc-if>\n<sc-if value=\"{{hasAccess}}\" hint-placeholder-val=\"{{true}}\">\n<div class=\"ao {{pvCls}}\">\n<div class=\"ao-card\">\n<sc-if value=\"{{hasHead}}\" hint-placeholder-val=\"{{true}}\">\n<div style=\"padding: 18px 22px 0; display: flex; flex-direction: column; gap: 4px\">\n<h2 style=\"margin: 0; font-size: 18px; font-weight: 700\">{{title}}</h2>\n<sc-if value=\"{{hasDesc}}\" hint-placeholder-val=\"{{true}}\"><p style=\"margin: 0; font-size: 14px; line-height: 1.8; color: #3A4860\">{{desc}}</p></sc-if>\n</div>\n</sc-if>\n<div class=\"ao-b\">\n<dc-import name=\"AdminFields\" fields=\"{{fields}}\" value=\"{{value}}\" errs=\"{{errs}}\" on-change=\"{{onChange}}\" id-prefix=\"{{module}}\" hint-size=\"100%,500px\"></dc-import>\n</div>\n<div class=\"ao-f\">\n<button type=\"button\" class=\"ao-btn pri\" onClick=\"{{save}}\" disabled=\"{{saveOff}}\">حفظ ونشر</button>\n<button type=\"button\" class=\"ao-btn sec\" onClick=\"{{revert}}\" disabled=\"{{clean}}\">تراجع عن غير المحفوظ</button>\n<span aria-live=\"polite\" style=\"font-size: 13px; color: {{stateFg}}\">{{stateText}}</span>\n<sc-if value=\"{{noConfirm}}\" hint-placeholder-val=\"{{true}}\"><button type=\"button\" class=\"ao-btn dan\" onClick=\"{{askReset}}\" disabled=\"{{locked}}\" style=\"margin-inline-start: auto\">استعادة الافتراضي</button></sc-if>\n<sc-if value=\"{{confirmReset}}\" hint-placeholder-val=\"{{false}}\"><span role=\"alert\" style=\"flex-basis: 100%; display: flex; flex-wrap: wrap; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 12px; background: #F7E3E3; color: #A3282B; font-size: 14px\"><span style=\"flex: 1 1 240px\">ستُحذف كل التعديلات في «{{title}}» ويعود النص الأصلي إلى الموقع. يمكن التراجع من سجل التدقيق.</span><button type=\"button\" class=\"ao-btn\" onClick=\"{{reset}}\" style=\"background: #A3282B; border: 1px solid #A3282B; color: #FFFFFF\">تأكيد</button><button type=\"button\" class=\"ao-btn sec\" onClick=\"{{cancelReset}}\">تراجع</button></span></sc-if>\n</div>\n</div>\n<sc-if value=\"{{hasPv}}\" hint-placeholder-val=\"{{false}}\">\n<aside class=\"ao-pv\" aria-label=\"معاينة\">\n<span style=\"font-size: 13px; font-weight: 700; color: #2B3A52\">معاينة كما سيظهر في الموقع</span>\n<div style=\"display: flex; flex-direction: column; gap: 10px; padding: 20px; border-radius: 18px; background: {{pv.bg}}; color: {{pv.fg}}; border: 1px solid #E3DCCB\">\n<sc-if value=\"{{pv.hasKicker}}\" hint-placeholder-val=\"{{true}}\"><span style=\"font-size: 12.5px; font-weight: 600; opacity: .85\">{{pv.kicker}}</span></sc-if>\n<span style=\"font-size: 20px; line-height: 1.5; font-weight: 700; white-space: pre-line\">{{pv.title}}</span>\n<sc-if value=\"{{pv.hasBody}}\" hint-placeholder-val=\"{{true}}\"><span style=\"font-size: 14px; line-height: 1.85; opacity: .9; white-space: pre-line\">{{pv.body}}</span></sc-if>\n<sc-for list=\"{{pv.meta}}\" as=\"m\" hint-placeholder-count=\"2\"><span style=\"font-size: 13px; padding-top: 8px; border-top: 1px solid rgba(143,135,120,.35)\">{{m}}</span></sc-for>\n</div>\n<sc-if value=\"{{hasSite}}\" hint-placeholder-val=\"{{false}}\"><a class=\"ao-btn sec\" href=\"{{siteHref}}\" style=\"align-self: flex-start; text-decoration: none\">افتح الصفحة في الموقع</a></sc-if>\n</aside>\n</sc-if>\n</div>\n</sc-if>\n<sc-if value=\"{{hasToast}}\" hint-placeholder-val=\"{{false}}\"><div class=\"ao-toast\" role=\"status\">{{toast}}</div></sc-if>\n</div>", "\n.ao{display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:24px;align-items:start}\n.ao.nopv{grid-template-columns:minmax(0,1fr)}\n.ao-card{border:1px solid #E3DCCB;border-radius:18px;background:#FFFFFF;overflow:clip}\n.ao-b{padding:22px}\n.ao-f{position:sticky;bottom:0;display:flex;flex-wrap:wrap;align-items:center;gap:10px;padding:14px 22px;background:#FFFFFF;border-top:1px solid #E3DCCB}\n.ao-btn{display:inline-flex;align-items:center;justify-content:center;min-height:46px;padding:0 18px;border-radius:12px;font:inherit;font-size:14px;font-weight:600;cursor:pointer;white-space:nowrap}\n.ao-btn.pri{background:#C9A24D;border:1px solid #C9A24D;color:#0F1E35;font-weight:700}\n.ao-btn.sec{background:#FFFFFF;border:1px solid #8F8778;color:#0F1E35}\n.ao-btn.dan{background:#FFFFFF;border:1px solid #A3282B;color:#A3282B}\n.ao-btn:disabled{opacity:.45;cursor:not-allowed}\n.ao-btn:focus-visible{outline:2px solid #C9A24D;outline-offset:2px}\n.ao-pv{position:sticky;top:16px;display:flex;flex-direction:column;gap:10px}\n.ao-toast{position:fixed;bottom:24px;inset-inline-start:50%;transform:translateX(50%);z-index:80;padding:12px 20px;border-radius:12px;background:#0F1E35;color:#FFFFFF;font-size:14px;box-shadow:0 18px 40px -16px rgba(0,0,0,.5);max-width:calc(100% - 32px)}\n@media (max-width:1000px){.ao{grid-template-columns:minmax(0,1fr)}.ao-pv{position:static}}\n@media (max-width:760px){.ao-b{padding:16px}.ao-f{padding:12px 16px}}\n", function (DCLogic, React) {
"use strict";
class Component extends DCLogic {
  constructor(props) {
    super(props);
    let d0 = null;
    try { const k = 'mq_draft_' + (props.module || ''); const raw = window.sessionStorage.getItem(k); if (raw) d0 = JSON.parse(raw); } catch (e) {}
    this.state = { draft: d0, restored: !!d0, errs: {}, toast: '', tick: 0, confirmReset: false };
  }
  componentWillUnmount() { clearTimeout(this.tt); }
  renderVals() {
    const D = '٠١٢٣٤٥٦٧٨٩';
    const ar = (x) => String(x).replace(/[0-9]/g, (d) => D[d]);
    const S = this.props.schema || {};
    const mod = this.props.module || S.module || 'settings';
    const fields = S.fields || [];
    const LS = (() => { try { return window.localStorage; } catch (e) { return null; } })();
    const readJ = (k, d) => { try { const v = JSON.parse(LS.getItem(k) || 'null'); return v == null ? d : v; } catch (e) { return d; } };
    const writeJ = (k, v) => { try { LS.setItem(k, JSON.stringify(v)); } catch (e) {} };
    const role = readJ('mq_adminRole', 'super');
    const roleNames = { super: 'المدير العام', editor: 'محرر المحتوى', reviewer: 'المراجع القانوني', verifier: 'موثّق المحامين', ads: 'مدير الإعلانات', support: 'الدعم الفني', analyst: 'المحلل' };
    const cms = readJ('mq_cms', {});
    const grp = S.group || mod;
    const ROLE_DEF = {"editor":{"site":"publish","laws":"edit","articles":"edit","forms":"edit","assistant":"edit","holidays":"publish","search":"publish"},"reviewer":{"laws":"publish","articles":"publish","forms":"publish","assistant":"publish","calculator":"publish","holidays":"publish","legal":"publish"},"verifier":{"lawyers":"publish"},"ads":{"ads":"publish"},"support":{"inbox":"publish","bookings":"publish","contact":"publish","templates":"publish","privacy":"publish"},"analyst":{}};
    const lvl = role === 'super' ? 'publish' : ((cms.roles && cms.roles[role] && cms.roles[role][grp]) || ((ROLE_DEF[role] || {})[grp]) || 'view');
    const locked = lvl !== 'publish';
    const DK = 'mq_draft_' + mod;
    const keepDraft = (d) => { try { if (d) window.sessionStorage.setItem(DK, JSON.stringify(d)); else window.sessionStorage.removeItem(DK); } catch (e) {} };
    const saved = { ...(S.defaults || {}), ...(cms[mod] || {}) };
    const value = this.state.draft || saved;
    const dirty = !!this.state.draft && JSON.stringify(this.state.draft) !== JSON.stringify(saved);
    const toast = (t) => { clearTimeout(this.tt); this.setState({ toast: t }); this.tt = setTimeout(() => this.setState({ toast: '' }), 3200); };
    const audit = (action, before, after) => {
      const a = readJ('mq_audit', []);
      a.unshift({ id: 'A' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), at: new Date().toISOString(), role, module: mod, label: S.title || mod, rowId: '', title: S.title || mod, action, before, after, single: true });
      writeJ('mq_audit', a.slice(0, 300));
    };
    const D2 = '٠١٢٣٤٥٦٧٨٩';
    const toNum = (x) => { if (x === '' || x == null) return ''; const n = Number(String(x).replace(/[٠-٩]/g, (d) => D2.indexOf(d))); return isNaN(n) ? x : n; };
    const cleanV = (o) => {
      const x = { ...o };
      fields.forEach((f) => {
        if (f.type === 'number') x[f.k] = toNum(x[f.k]);
        if (typeof x[f.k] === 'string' && !['textarea'].includes(f.type)) x[f.k] = x[f.k].trim();
        if (f.type === 'repeater' && Array.isArray(x[f.k])) x[f.k] = x[f.k].map((it) => { const y = { ...it }; (f.sub || []).forEach((sf) => { if (sf.type === 'number') y[sf.k] = toNum(y[sf.k]); else if (typeof y[sf.k] === 'string' && sf.type !== 'textarea') y[sf.k] = y[sf.k].trim(); }); return y; });
        if (f.type === 'lines' && Array.isArray(x[f.k])) x[f.k] = x[f.k].map((s) => String(s).trim()).filter(Boolean);
        if (f.type === 'repeater' && Array.isArray(x[f.k])) x[f.k] = x[f.k].filter((it) => it && Object.values(it).some((vv) => vv !== '' && vv != null && vv !== false));
      });
      return x;
    };
    const pvRaw = S.preview ? (() => { try { return S.preview(value) || {}; } catch (e) { return {}; } })() : null;
    const pv = pvRaw ? { kicker: pvRaw.kicker || '', hasKicker: !!pvRaw.kicker, title: pvRaw.title || '', body: pvRaw.body || '', hasBody: !!pvRaw.body, meta: (pvRaw.meta || []).filter(Boolean).map((m) => ar(m)), bg: pvRaw.dark ? '#0F1E35' : '#FFFFFF', fg: pvRaw.dark ? '#FFFFFF' : '#0F1E35' } : { meta: [] };
    return {
      module: mod, title: S.title || '', desc: S.desc || '', hasHead: !!S.title, hasDesc: !!S.desc,
      fields, value, errs: this.state.errs,
      locked, lockText: 'دورك الحالي «' + (roleNames[role] || role) + '» ' + (lvl === 'none' ? 'لا يتيح الوصول إلى هذه الوحدة.' : lvl === 'edit' ? 'يتيح التعديل دون نشر، وحفظ هذه الإعدادات ينشرها مباشرة فيتطلب صلاحية «نشر».' : 'يتيح العرض فقط في هذه الوحدة.'),
      hasAccess: lvl !== 'none', restored: this.state.restored && dirty,
      onChange: (next) => { keepDraft(next); this.setState({ draft: next, restored: false }); },
      saveOff: locked || !dirty, clean: !dirty,
      stateText: dirty ? (this.state.restored ? 'استُعيدت تعديلات لم تُحفظ من قبل' : 'تعديلات غير محفوظة') : 'كل التعديلات محفوظة', stateFg: dirty ? '#A3282B' : '#3A4860',
      save: () => {
        if (locked) return;
        const next = cleanV(value);
        const errs = {};
        fields.forEach((f) => {
          const v = next[f.k];
          if (f.required && (v == null || String(Array.isArray(v) ? v.join('') : v).trim() === '')) errs[f.k] = 'هذا الحقل مطلوب.';
          if (f.type === 'number' && v !== '' && v != null) { if (typeof v !== 'number' || !isFinite(v)) errs[f.k] = 'أدخل رقماً صحيحاً.'; else if (v < (f.min != null ? f.min : 0)) errs[f.k] = 'القيمة أقل من المسموح.'; else if (f.max != null && v > f.max) errs[f.k] = 'القيمة أكبر من المسموح (' + ar(f.max) + ').'; }
          if (f.type === 'repeater' && Array.isArray(v)) (f.sub || []).forEach((sf) => { v.forEach((it, i) => { const x = it[sf.k]; if (sf.type === 'number' && x !== '' && x != null && (typeof x !== 'number' || x < 0)) errs[f.k] = '«' + sf.label + '» في ' + (f.itemLabel || 'العنصر') + ' ' + ar(i + 1) + ' يجب أن يكون رقماً موجباً.'; if (sf.required && String(x == null ? '' : x).trim() === '') errs[f.k] = '«' + sf.label + '» مطلوب في ' + (f.itemLabel || 'العنصر') + ' ' + ar(i + 1) + '.'; }); });
        });
        if (S.validate) Object.assign(errs, S.validate(next, { role }) || {});
        if (Object.keys(errs).length) { this.setState({ errs }); toast('راجع الحقول المظللة بالأحمر.'); return; }
        const c = readJ('mq_cms', {}); const before = c[mod] || null; c[mod] = next; writeJ('mq_cms', c);
        audit('settings', before, next);
        keepDraft(null);
        this.setState({ draft: null, restored: false, errs: {} });
        toast((S.afterSaveMsg && S.afterSaveMsg(next)) || S.savedMsg || ('حُفظ «' + (S.title || mod) + '» ويظهر الآن في الموقع.'));
      },
      revert: () => { keepDraft(null); this.setState({ draft: null, restored: false, errs: {} }); },
      noConfirm: !this.state.confirmReset, confirmReset: this.state.confirmReset, askReset: () => this.setState({ confirmReset: true }), cancelReset: () => this.setState({ confirmReset: false }),
      reset: () => {
        if (locked) return;
        const c = readJ('mq_cms', {}); const before = c[mod] || null; delete c[mod]; writeJ('mq_cms', c);
        audit('reset', before, null);
        keepDraft(null);
        this.setState({ draft: null, restored: false, errs: {}, confirmReset: false, tick: this.state.tick + 1 });
        toast('أُعيدت القيم الافتراضية.');
      },
      hasPv: !!pvRaw, pvCls: pvRaw ? '' : 'nopv', pv,
      hasSite: !!S.siteHref, siteHref: S.siteHref || '',
      hasToast: !!this.state.toast, toast: this.state.toast
    };
  }
}
return Component;
});
