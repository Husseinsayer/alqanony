MQ_DEF("AdminAudit", "<div dir=\"rtl\" style=\"font-family: 'IBM Plex Sans Arabic', system-ui, sans-serif; color: #0F1E35; background: #FAF7F0; min-height: 100vh\">\n<dc-import name=\"AdminSidebar\" active=\"audit\" hint-size=\"264px,100%\"></dc-import>\n<main class=\"adm-main\" id=\"main\">\n<header style=\"display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 12px 24px; margin-bottom: 20px\">\n<div style=\"display: flex; flex-direction: column; gap: 6px; min-width: 0\">\n<span style=\"font-size: 13px; color: #3A4860\">لوحة التحكم / سجل التدقيق</span>\n<h1 style=\"margin: 0; font-size: clamp(24px, 3.4vw, 32px); font-weight: 700\">سجل التدقيق</h1>\n<p style=\"margin: 0; font-size: 15px; line-height: 1.8; color: #3A4860; max-width: 780px\">كل تعديل في اللوحة: من غيّره ومتى، والقيمة قبل التعديل وبعده. يمكنك استعادة أي حالة سابقة بنقرة، وتُسجَّل الاستعادة نفسها.</p>\n</div>\n\n</header>\n\n<sc-if value=\"{{noAcc}}\" hint-placeholder-val=\"{{false}}\"><p role=\"note\" class=\"adm-note\" style=\"margin: 0\">لا يملك دورك صلاحية الاطلاع على هذه الصفحة. راجع المدير العام إن احتجت إليها.</p></sc-if>\n<sc-if value=\"{{hasAcc}}\" hint-placeholder-val=\"{{true}}\"><div style=\"display: flex; flex-direction: column; gap: 16px\">\n<div style=\"display: flex; flex-wrap: wrap; gap: 10px\">\n<input type=\"search\" class=\"adm-in\" aria-label=\"بحث في السجل\" placeholder=\"ابحث بالعنصر أو الوحدة…\" value=\"{{q}}\" onChange=\"{{onQ}}\" style=\"flex: 1 1 260px\">\n<select class=\"adm-in\" aria-label=\"الوحدة\" value=\"{{mod}}\" onChange=\"{{onMod}}\"><sc-for list=\"{{modOpts}}\" as=\"o\" hint-placeholder-count=\"5\"><option value=\"{{o.v}}\">{{o.l}}</option></sc-for></select>\n<select class=\"adm-in\" aria-label=\"نوع العملية\" value=\"{{act}}\" onChange=\"{{onAct}}\"><sc-for list=\"{{actOpts}}\" as=\"o\" hint-placeholder-count=\"5\"><option value=\"{{o.v}}\">{{o.l}}</option></sc-for></select>\n</div>\n<sc-if value=\"{{hasMsg}}\" hint-placeholder-val=\"{{false}}\"><p role=\"status\" class=\"adm-note\" style=\"margin: 0\">{{msg}}</p></sc-if>\n<div class=\"adm-card\">\n<sc-if value=\"{{empty}}\" hint-placeholder-val=\"{{false}}\"><p style=\"margin: 0; padding: 40px 20px; text-align: center; font-size: 15px; color: #3A4860\">{{emptyText}}</p></sc-if>\n<sc-for list=\"{{rows}}\" as=\"r\" hint-placeholder-count=\"6\">\n<div class=\"au-row\">\n<span style=\"display: flex; flex-direction: column; gap: 2px; font-size: 13px; color: #3A4860\"><span style=\"font-weight: 600; color: #0F1E35\">{{r.when}}</span><span>{{r.role}}</span></span>\n<span style=\"display: flex; flex-direction: column; gap: 4px; min-width: 0\">\n<span style=\"display: flex; flex-wrap: wrap; align-items: center; gap: 8px\"><span class=\"au-b\" style=\"background: {{r.bg}}; color: {{r.fg}}\">{{r.action}}</span><span style=\"font-size: 13px; color: #3A4860\">{{r.label}}</span></span>\n<span style=\"font-size: 15px; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap\">{{r.title}}</span>\n<span style=\"font-size: 12.5px; color: #3A4860\">{{r.changed}}</span>\n</span>\n<span style=\"display: flex; gap: 8px; flex-wrap: wrap\">\n<button type=\"button\" class=\"adm-btn sec\" onClick=\"{{r.toggle}}\" aria-expanded=\"{{r.expanded}}\" style=\"min-height: 38px; font-size: 13px\">{{r.toggleLabel}}</button>\n<sc-if value=\"{{r.canRestore}}\" hint-placeholder-val=\"{{true}}\"><button type=\"button\" class=\"adm-btn sec\" onClick=\"{{r.restore}}\" style=\"min-height: 38px; font-size: 13px\">استعادة ما قبل هذا التعديل</button></sc-if>\n</span>\n<sc-if value=\"{{r.isOpen}}\" hint-placeholder-val=\"{{false}}\">\n<div class=\"au-diff\"><div style=\"display: flex; flex-direction: column; gap: 6px\"><span style=\"font-size: 13px; font-weight: 600\">قبل</span><pre>{{r.before}}</pre></div><div style=\"display: flex; flex-direction: column; gap: 6px\"><span style=\"font-size: 13px; font-weight: 600\">بعد</span><pre>{{r.after}}</pre></div></div>\n</sc-if>\n</div>\n</sc-for>\n<sc-if value=\"{{more}}\" hint-placeholder-val=\"{{false}}\"><div style=\"padding: 14px 18px; border-top: 1px solid #F0EBDF\"><button type=\"button\" class=\"adm-btn sec\" onClick=\"{{showMore}}\">عرض المزيد</button></div></sc-if>\n</div>\n</div></sc-if>\n</main>\n</div>", "\nbody{margin:0;background:#FAF7F0}\na{color:#0F1E35}\n.adm-main{margin-inline-start:264px;padding:28px clamp(16px,3vw,40px) 72px;box-sizing:border-box;min-width:0}\n.adm-tabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid #E3DCCB;margin:0 0 22px;scrollbar-width:thin}\n.adm-tab{flex:0 0 auto;min-height:46px;padding:0 16px;border:0;border-bottom:2px solid transparent;background:transparent;font:inherit;font-size:15px;color:#3A4860;cursor:pointer;white-space:nowrap}\n.adm-tab[aria-selected=true]{color:#0F1E35;font-weight:700;border-bottom-color:#C9A24D}\n.adm-tab:focus-visible,.adm-btn:focus-visible{outline:2px solid #C9A24D;outline-offset:2px}\n.adm-card{border:1px solid #E3DCCB;border-radius:18px;background:#FFFFFF}\n.adm-note{padding:12px 16px;border-radius:12px;background:#F3EEE2;font-size:14px;line-height:1.8;color:#2B3A52}\n.adm-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:46px;padding:0 18px;border-radius:12px;font:inherit;font-size:14px;font-weight:600;cursor:pointer;white-space:nowrap;text-decoration:none;box-sizing:border-box}\n.adm-btn.pri{background:#C9A24D;border:1px solid #C9A24D;color:#0F1E35;font-weight:700}\n.adm-btn.sec{background:#FFFFFF;border:1px solid #8F8778;color:#0F1E35}\n.adm-btn.dan{background:#FFFFFF;border:1px solid #A3282B;color:#A3282B}\n.adm-btn:disabled{opacity:.45;cursor:not-allowed}\n.adm-in{height:46px;padding:0 14px;border:1px solid #8F8778;border-radius:12px;background:#FFFFFF;font:inherit;font-size:15px;color:#0F1E35;box-sizing:border-box;max-width:100%}\n.adm-in:focus{outline:2px solid #C9A24D;outline-offset:1px}\n.au-row{display:grid;grid-template-columns:150px minmax(0,1fr) auto;gap:14px;align-items:center;padding:14px 18px;border-top:1px solid #F0EBDF}\n.au-row:first-child{border-top:0}\n.au-b{display:inline-flex;align-items:center;height:24px;padding:0 10px;border-radius:999px;font-size:12px;font-weight:600}\n.au-diff{grid-column:1/-1;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}\n.au-diff pre{margin:0;padding:12px;border-radius:12px;background:#FAF7F0;border:1px solid #F0EBDF;font:12.5px/1.7 ui-monospace,Menlo,monospace;white-space:pre-wrap;word-break:break-word;max-height:260px;overflow:auto;direction:ltr;text-align:left}\n@media (max-width:760px){.au-row{grid-template-columns:minmax(0,1fr)}.au-diff{grid-template-columns:minmax(0,1fr)}}\n@media (max-width:1100px){.adm-main{margin-inline-start:0;padding:20px 16px 56px}}\n", function (DCLogic, React) {
"use strict";
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { tab: '', q: '', mod: 'all', act: 'all', open: '', limit: 30, msg: '', tick: 0 };
    this.S = {"govs": ["بغداد", "البصرة", "نينوى", "أربيل", "السليمانية", "دهوك", "حلبجة", "كركوك", "الأنبار", "صلاح الدين", "ديالى", "بابل", "كربلاء", "النجف", "واسط", "القادسية", "ذي قار", "ميسان", "المثنى"]};

  }

  renderVals() {
    const D = '٠١٢٣٤٥٦٧٨٩', P = '۰۱۲۳۴۵۶۷۸۹';
    const ar = (x) => String(x).replace(/[0-9]/g, (d) => D[d]);
    const toW = (x) => String(x == null ? '' : x).replace(/[٠-٩]/g, (d) => D.indexOf(d)).replace(/[۰-۹]/g, (d) => P.indexOf(d));
    const norm = (s) => toW(s).toLowerCase().replace(/[ً-ْـ]/g, '').replace(/[أإآٱ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي').replace(/ؤ/g, 'و').replace(/ئ/g, 'ي');
    const S = this.S;
    const opts = (o) => Object.keys(o).filter((k) => k !== 'all').map((k) => ({ v: k, l: o[k] }));
    const mapOf = (o, tone) => { const m = {}; Object.keys(o).forEach((k) => { m[k] = [o[k], tone || 'muted']; }); return m; };
    const readJ = (k, d) => { try { const v = JSON.parse(window.localStorage.getItem(k) || 'null'); return v == null ? d : v; } catch (e) { return d; } };
    const writeJ = (k, v) => { try { window.localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
    const cms = readJ('mq_cms', {});
    const mergeL = (seed, c, idk) => { idk = idk || 'id'; c = c || {}; const up = c.upsert || {}; const rm = new Set(c.removed || []); const out = (seed || []).filter((r) => !rm.has(r[idk])).map((r) => (up[r[idk]] ? { ...r, ...up[r[idk]] } : r)); Object.keys(up).forEach((id) => { if (!rm.has(id) && !(seed || []).some((r) => r[idk] === id)) out.push(up[id]); }); return out; };
    const today = new Date().toISOString().slice(0, 10);
    const stateMap = { published: ['منشور', 'navy'], review: ['بانتظار المراجعة', 'gold'], draft: ['مسودة', 'muted'] };
    const stateOpts = [{ v: 'published', l: 'منشور' }, { v: 'review', l: 'بانتظار المراجعة' }, { v: 'draft', l: 'مسودة' }];
    const ROLE_DEF = {"editor":{"site":"publish","laws":"edit","articles":"edit","forms":"edit","assistant":"edit","holidays":"publish","search":"publish"},"reviewer":{"laws":"publish","articles":"publish","forms":"publish","assistant":"publish","calculator":"publish","holidays":"publish","legal":"publish"},"verifier":{"lawyers":"publish"},"ads":{"ads":"publish"},"support":{"inbox":"publish","bookings":"publish","contact":"publish","templates":"publish","privacy":"publish"},"analyst":{}};
    const myRole = readJ('mq_adminRole', 'super');
    const levelOf = (grp) => (myRole === 'super' ? 'publish' : ((cms.roles && cms.roles[myRole] && cms.roles[myRole][grp]) || ((ROLE_DEF[myRole] || {})[grp]) || 'view'));
    const plural = (n, one, two, few, many) => (n === 1 ? one : n === 2 ? two : n >= 3 && n <= 10 ? ar(n) + ' ' + few : ar(n) + ' ' + many);
    const yearsTxt = (n) => plural(Number(n), 'سنة واحدة', 'سنتين', 'سنوات', 'سنة');
    const legalPublish = (r, ctx, what) => (!ctx.asRevision && (r.state || 'published') === 'published' && !['super', 'reviewer'].includes(ctx.role) ? 'نشر ' + what + ' يتطلب دور «المراجع القانوني». اختر «بانتظار المراجعة» ليراجعه المستشار القانوني قبل النشر.' : '');

    const log = readJ('mq_audit', []);
    const roleNames = { super: 'المدير العام', editor: 'محرر المحتوى', reviewer: 'المراجع القانوني', verifier: 'موثّق المحامين', ads: 'مدير الإعلانات', support: 'الدعم الفني', analyst: 'المحلل', agent: 'وكيل ذكي' };
    const acts = { create: ['إضافة', '#E3EAF4', '#1C3660'], update: ['تعديل', '#F3EEE2', '#2B3A52'], delete: ['حذف', '#F7E3E3', '#A3282B'], settings: ['حفظ إعدادات', '#F3EEE2', '#2B3A52'], reset: ['استعادة الافتراضي', '#F6EBD0', '#5E4710'], import: ['استيراد', '#F6EBD0', '#5E4710'], restore: ['استعادة', '#E3EAF4', '#1C3660'], revision: ['تعديل معلّق', '#F6EBD0', '#5E4710'], login: ['تسجيل دخول', '#E3EAF4', '#1C3660'], logout: ['تسجيل خروج', '#F3EEE2', '#2B3A52'], password: ['تعيين كلمة مرور', '#F3EEE2', '#2B3A52'], view: ['اطلاع على مستند', '#F3EEE2', '#2B3A52'], install: ['تثبيت', '#E3EAF4', '#1C3660'], reject: ['رفض تعديل', '#F7E3E3', '#A3282B'], approve: ['اعتماد', '#E3EAF4', '#1C3660'], backup: ['نسخة احتياطية', '#E3EAF4', '#1C3660'], 'delete-backup': ['حذف نسخة احتياطية', '#F7E3E3', '#A3282B'] };
    const st = this.state;
    const nq = norm(st.q).trim();
    const mods = {}; log.forEach((e) => { mods[e.module] = e.label || e.module; });
    let list = log.filter((e) => (st.mod === 'all' || e.module === st.mod) && (st.act === 'all' || e.action === st.act) && (!nq || norm((e.title || '') + ' ' + (e.label || '') + ' ' + (e.rowId || '')).includes(nq)));
    const shown = list.slice(0, st.limit);
    const pretty = (o, keys) => { if (o == null) return '— لا شيء —'; if (typeof o !== 'object') return String(o); const src = keys && keys.length ? Object.fromEntries(keys.map((k) => [k, o[k]])) : o; const s = JSON.stringify(src, null, 2); return s.length > 2400 ? s.slice(0, 2400) + '\n…' : s; };
    const changedKeys = (b, a) => { if (!b || !a || typeof b !== 'object' || typeof a !== 'object') return []; return Array.from(new Set(Object.keys(b).concat(Object.keys(a)))).filter((k) => JSON.stringify(b[k]) !== JSON.stringify(a[k])); };
    const fmt = (iso) => { try { const d = new Date(iso); return d.toLocaleDateString('ar-IQ', { day: 'numeric', month: 'short' }) + ' · ' + d.toLocaleTimeString('ar-IQ', { hour: '2-digit', minute: '2-digit' }); } catch (e) { return ar(String(iso).slice(0, 16)); } };
    const isSuper = readJ('mq_adminRole', 'super') === 'super';
    const restore = (e) => () => {
      if (!isSuper) { this.setState({ msg: 'الاستعادة متاحة للمدير العام فقط، لأنها قد تعيد نشر محتوى قانوني دون مراجعة.' }); return; }
      const c = readJ('mq_cms', {});
      const now = JSON.parse(JSON.stringify(c));
      if (e.all) { writeJ('mq_cms', e.before || {}); }
      else if (e.single) { if (e.before == null) delete c[e.module]; else c[e.module] = e.before; writeJ('mq_cms', c); }
      else {
        const m = c[e.module] = c[e.module] || { upsert: {}, removed: [] }; m.upsert = m.upsert || {}; m.removed = m.removed || [];
        if (e.before) { m.upsert[e.rowId] = e.before; m.removed = m.removed.filter((x) => x !== e.rowId); }
        else { delete m.upsert[e.rowId]; if (!m.removed.includes(e.rowId)) m.removed.push(e.rowId); }
        writeJ('mq_cms', c);
      }
      const a = readJ('mq_audit', []);
      a.unshift({ id: 'A' + Date.now().toString(36), at: new Date().toISOString(), role: readJ('mq_adminRole', 'super'), module: e.module, label: e.label, rowId: e.rowId, title: e.title, action: 'restore', before: e.all ? now : e.single ? now[e.module] || null : ((now[e.module] || {}).upsert || {})[e.rowId] || null, after: e.before, single: e.single, all: e.all });
      writeJ('mq_audit', a.slice(0, 300));
      this.setState({ msg: 'استُعيدت حالة «' + (e.title || e.label) + '» كما كانت قبل ' + fmt(e.at) + '، وتظهر الآن في الموقع.', tick: st.tick + 1 });
    };
    const lvA = levelOf('audit');
    const vals = {
      hasAcc: lvA !== 'none', noAcc: lvA === 'none',
      q: st.q, onQ: (e) => this.setState({ q: e.target.value }), mod: st.mod, onMod: (e) => this.setState({ mod: e.target.value }), act: st.act, onAct: (e) => this.setState({ act: e.target.value }),
      modOpts: [{ v: 'all', l: 'كل الوحدات' }].concat(Object.keys(mods).map((k) => ({ v: k, l: mods[k] }))),
      actOpts: [{ v: 'all', l: 'كل العمليات' }].concat(Object.keys(acts).map((k) => ({ v: k, l: acts[k][0] }))),
      empty: !shown.length, emptyText: log.length ? 'لا توجد عمليات مطابقة.' : 'لم تُسجَّل أي عملية بعد. كل حفظ أو حذف في اللوحة يظهر هنا.',
      rows: shown.map((e) => {
        const a = acts[e.action] || [e.action, '#F3EEE2', '#2B3A52'];
        const keys = e.all ? [] : changedKeys(e.before, e.after);
        const isOpen = st.open === e.id;
        return { when: fmt(e.at), role: roleNames[e.role] || e.role, action: a[0], bg: a[1], fg: a[2], label: e.label || e.module, title: e.title || e.rowId || e.label,
          changed: keys.length ? 'الحقول المتغيرة: ' + keys.slice(0, 8).join('، ') + (keys.length > 8 ? '…' : '') : (e.action === 'create' ? 'عنصر جديد' : e.action === 'delete' ? 'حُذف العنصر' : ''),
          isOpen, expanded: isOpen ? 'true' : 'false', toggleLabel: isOpen ? 'إخفاء التفاصيل' : 'التفاصيل', toggle: () => this.setState({ open: isOpen ? '' : e.id }),
          before: pretty(e.before, keys), after: pretty(e.after, keys), canRestore: isSuper && !['revision', 'reject', 'login', 'logout', 'password', 'view', 'install', 'delete-account', 'backup', 'delete-backup'].includes(e.action) && !(e.module === 'backup' && e.action === 'restore') && !(e.module === 'settings' && e.action === 'reset' && e.before === undefined) && (e.before !== undefined || e.after !== undefined), restore: restore(e) };
      }),
      more: list.length > st.limit, showMore: () => this.setState({ limit: st.limit + 30 }),
      hasMsg: !!st.msg, msg: st.msg
    };
    const TABS = [];
    const tab = TABS.some((t) => t[0] === this.state.tab) ? this.state.tab : (TABS[0] || [''])[0];
    const flags = {}; TABS.forEach((t) => { flags['isT_' + t[0]] = t[0] === tab; });
    return { ...vals, ...flags, tabs: TABS.map((t) => ({ label: t[1], on: t[0] === tab ? 'true' : 'false', pick: () => this.setState({ tab: t[0] }) })) };
  }
}
return Component;
});
