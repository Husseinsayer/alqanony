MQ_DEF("AdminBookings", "<div dir=\"rtl\" style=\"font-family: 'IBM Plex Sans Arabic', system-ui, sans-serif; color: #0F1E35; background: #FAF7F0; min-height: 100vh\">\n<dc-import name=\"AdminSidebar\" active=\"bookings\" hint-size=\"264px,100%\"></dc-import>\n<main class=\"adm-main\" id=\"main\">\n<header style=\"display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 12px 24px; margin-bottom: 20px\">\n<div style=\"display: flex; flex-direction: column; gap: 6px; min-width: 0\">\n<span style=\"font-size: 13px; color: #3A4860\">لوحة التحكم / الاستشارات والحجوزات</span>\n<h1 style=\"margin: 0; font-size: clamp(24px, 3.4vw, 32px); font-weight: 700\">الاستشارات والحجوزات</h1>\n<p style=\"margin: 0; font-size: 15px; line-height: 1.8; color: #3A4860; max-width: 780px\">تابع طلبات الاستشارة وحالاتها، وتحكّم في أنواع الاستشارة والمواعيد المتاحة وأيام العطلة وشروط الطلب.</p>\n</div>\n\n</header>\n<div class=\"adm-tabs\" role=\"tablist\" aria-label=\"أقسام الصفحة\">\n<sc-for list=\"{{tabs}}\" as=\"t\" hint-placeholder-count=\"3\"><button type=\"button\" role=\"tab\" class=\"adm-tab\" aria-selected=\"{{t.on}}\" onClick=\"{{t.pick}}\">{{t.label}}</button></sc-for>\n</div>\n<sc-if value=\"{{isT_list}}\" hint-placeholder-val=\"{{false}}\">\n<p class=\"adm-note\" style=\"margin: 0 0 16px\">طلبات تجريبية. بيانات المستخدمين مخفية جزئياً، وتظهر كاملة للمحامي المختار فقط.</p>\n<dc-import name=\"AdminCrud\" module=\"bookings\" schema=\"{{bkSchema}}\" hint-size=\"100%,820px\"></dc-import>\n</sc-if>\n<sc-if value=\"{{isT_cfg}}\" hint-placeholder-val=\"{{false}}\">\n<dc-import name=\"AdminForm\" module=\"booking\" schema=\"{{cfgSchema}}\" hint-size=\"100%,900px\"></dc-import>\n</sc-if>\n</main>\n</div>", "\nbody{margin:0;background:#FAF7F0}\na{color:#0F1E35}\n.adm-main{margin-inline-start:264px;padding:28px clamp(16px,3vw,40px) 72px;box-sizing:border-box;min-width:0}\n.adm-tabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid #E3DCCB;margin:0 0 22px;scrollbar-width:thin}\n.adm-tab{flex:0 0 auto;min-height:46px;padding:0 16px;border:0;border-bottom:2px solid transparent;background:transparent;font:inherit;font-size:15px;color:#3A4860;cursor:pointer;white-space:nowrap}\n.adm-tab[aria-selected=true]{color:#0F1E35;font-weight:700;border-bottom-color:#C9A24D}\n.adm-tab:focus-visible,.adm-btn:focus-visible{outline:2px solid #C9A24D;outline-offset:2px}\n.adm-card{border:1px solid #E3DCCB;border-radius:18px;background:#FFFFFF}\n.adm-note{padding:12px 16px;border-radius:12px;background:#F3EEE2;font-size:14px;line-height:1.8;color:#2B3A52}\n.adm-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:46px;padding:0 18px;border-radius:12px;font:inherit;font-size:14px;font-weight:600;cursor:pointer;white-space:nowrap;text-decoration:none;box-sizing:border-box}\n.adm-btn.pri{background:#C9A24D;border:1px solid #C9A24D;color:#0F1E35;font-weight:700}\n.adm-btn.sec{background:#FFFFFF;border:1px solid #8F8778;color:#0F1E35}\n.adm-btn.dan{background:#FFFFFF;border:1px solid #A3282B;color:#A3282B}\n.adm-btn:disabled{opacity:.45;cursor:not-allowed}\n.adm-in{height:46px;padding:0 14px;border:1px solid #8F8778;border-radius:12px;background:#FFFFFF;font:inherit;font-size:15px;color:#0F1E35;box-sizing:border-box;max-width:100%}\n.adm-in:focus{outline:2px solid #C9A24D;outline-offset:1px}\n\n@media (max-width:1100px){.adm-main{margin-inline-start:0;padding:20px 16px 56px}}\n", function (DCLogic, React) {
"use strict";
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { tab: 'list' };
    this.S = {"bookings": [{"id": "BK-482913", "user": "م. ع.", "phone": "07XX XXX 1290", "lawyer": "ali-aljubouri", "type": "call", "day": "2026-11-16", "slot": "11:30", "area": "العقود التجارية", "brief": "أحتاج مراجعة عقد توريد قبل توقيعه، وفيه شرط جزائي أريد فهمه.", "status": "new", "created": "2026-11-12", "note": ""}, {"id": "BK-482977", "user": "ر. ح.", "phone": "07XX XXX 5521", "lawyer": "zainab-almousawi", "type": "msg", "day": "", "slot": "", "area": "النفقة", "brief": "انفصلت عن زوجي منذ ستة أشهر ولم يدفع النفقة، ما الإجراء؟", "status": "new", "created": "2026-11-13", "note": ""}, {"id": "BK-481204", "user": "ك. ع.", "phone": "07XX XXX 3008", "lawyer": "sara-alobaidi", "type": "video", "day": "2026-11-15", "slot": "16:00", "area": "إنهاء الخدمة", "brief": "أُنهيت خدمتي دون إشعار مسبق بعد سبع سنوات عمل.", "status": "confirmed", "created": "2026-11-09", "note": "أكد المحامي الموعد."}, {"id": "BK-479310", "user": "س. م.", "phone": "07XX XXX 8812", "lawyer": "ahmed-alsaadi", "type": "office", "day": "2026-11-05", "slot": "10:00", "area": "الشكاوى الجزائية", "brief": "تعرّضت لاحتيال في بيع سيارة وأريد تقديم شكوى.", "status": "done", "created": "2026-11-01", "note": ""}, {"id": "BK-478552", "user": "ع. ج.", "phone": "07XX XXX 6640", "lawyer": "ali-aljubouri", "type": "call", "day": "2026-11-03", "slot": "13:00", "area": "تأسيس الشركات", "brief": "أريد تأسيس شركة محدودة مع شريكين.", "status": "cancelled", "created": "2026-10-30", "note": "ألغاه المستخدم."}], "lawyers": [{"id": "ali-aljubouri", "name": "أ. علي حسن الجبوري", "spec": "trade", "gov": "بغداد", "union": "iraq", "barYear": 2008, "initial": "ع", "langs": "العربية، الإنجليزية", "verified": "2026-09-14", "areas": ["تأسيس الشركات", "العقود التجارية", "النزاعات التجارية"], "edu": ["بكالوريوس القانون، جامعة بغداد", "ماجستير القانون الخاص"], "bio": "يعمل في قضايا الشركات والعقود التجارية، ويتولى صياغة عقود التأسيس ومتابعة النزاعات التجارية أمام محاكم البداءة في بغداد."}, {"id": "zainab-almousawi", "name": "أ. زينب كاظم الموسوي", "spec": "family", "gov": "النجف", "union": "iraq", "barYear": 2014, "initial": "ز", "langs": "العربية", "verified": "2026-08-30", "areas": ["الزواج والطلاق", "النفقة", "الحضانة"], "edu": ["بكالوريوس القانون، جامعة الكوفة"], "bio": "تعمل في قضايا الأحوال الشخصية أمام محاكم النجف، وتشمل النفقة والحضانة والتفريق."}, {"id": "ahmed-alsaadi", "name": "أ. أحمد عبد الكريم السعدي", "spec": "penal", "gov": "البصرة", "union": "iraq", "barYear": 2011, "initial": "أ", "langs": "العربية، الإنجليزية", "verified": "2026-10-02", "areas": ["الدفاع في القضايا الجزائية", "الشكاوى الجزائية", "الجرائم المالية"], "edu": ["بكالوريوس القانون، جامعة البصرة"], "bio": "يترافع في القضايا الجزائية في البصرة، ويتابع الشكاوى من مرحلة التحقيق حتى المحاكمة."}, {"id": "sara-alobaidi", "name": "أ. سارة جاسم العبيدي", "spec": "labor", "gov": "أربيل", "union": "krd", "barYear": 2017, "initial": "س", "langs": "العربية، الكوردية، الإنجليزية", "verified": "2026-09-21", "areas": ["عقود العمل", "إنهاء الخدمة", "الضمان الاجتماعي"], "edu": ["بكالوريوس القانون، جامعة صلاح الدين"], "bio": "تعمل في قضايا العمل في إقليم كوردستان، وتقدّم الاستشارات لأصحاب العمل والعمال."}, {"id": "mustafa-altamimi", "name": "أ. مصطفى رعد التميمي", "spec": "estate", "gov": "كربلاء", "union": "iraq", "barYear": 2015, "initial": "م", "langs": "العربية", "verified": "2026-07-18", "areas": ["عقود الإيجار", "نقل الملكية", "نزاعات العقارات"], "edu": ["بكالوريوس القانون، جامعة كربلاء"], "bio": "يعمل في قضايا العقارات والإيجار، ويرافق موكليه في إجراءات التسجيل العقاري."}, {"id": "noor-saleh", "name": "أ. نور الهدى صالح", "spec": "admin", "gov": "نينوى", "union": "iraq", "barYear": 2018, "initial": "ن", "langs": "العربية، الإنجليزية", "verified": "2026-09-05", "areas": ["الطعون الإدارية", "قضايا الموظفين"], "edu": ["بكالوريوس القانون، جامعة الموصل", "ماجستير القانون العام"], "bio": "تعمل في القضايا الإدارية وقضايا الموظفين أمام محاكم نينوى."}, {"id": "haider-alrubaie", "name": "أ. حيدر فاضل الربيعي", "spec": "arb", "gov": "بابل", "union": "iraq", "barYear": 2012, "initial": "ح", "langs": "العربية، الإنجليزية", "verified": "2026-08-11", "areas": ["التحكيم التجاري", "تسوية النزاعات", "عقود المقاولات"], "edu": ["بكالوريوس القانون، جامعة بابل"], "bio": "يعمل في التحكيم وتسوية النزاعات التجارية وعقود المقاولات."}, {"id": "hiba-aldulaimi", "name": "أ. هبة سعد الدليمي", "spec": "family", "gov": "الأنبار", "union": "iraq", "barYear": 2019, "initial": "هـ", "langs": "العربية", "verified": "2026-10-12", "areas": ["الطلاق", "النفقة", "إثبات النسب"], "edu": ["بكالوريوس القانون، جامعة الأنبار"], "bio": "تعمل في قضايا الأحوال الشخصية في الأنبار."}], "bookingTypes": [{"k": "msg", "label": "استشارة مكتوبة", "desc": "ترسل سؤالك ويرد المحامي كتابةً.", "enabled": true}, {"k": "call", "label": "مكالمة هاتفية", "desc": "مكالمة في موعد تختاره.", "enabled": true}, {"k": "video", "label": "مكالمة فيديو", "desc": "لقاء مرئي عبر الإنترنت.", "enabled": true}, {"k": "office", "label": "حضور في المكتب", "desc": "زيارة مكتب المحامي في محافظته.", "enabled": true}], "govs": ["بغداد", "البصرة", "نينوى", "أربيل", "السليمانية", "دهوك", "حلبجة", "كركوك", "الأنبار", "صلاح الدين", "ديالى", "بابل", "كربلاء", "النجف", "واسط", "القادسية", "ذي قار", "ميسان", "المثنى"]};

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

    const lawyersAll = mergeL(S.lawyers, cms.lawyers);
    const lName = (id) => (lawyersAll.find((l) => l.id === id) || {}).name || id;
    const bcfgDefaults = { types: S.bookingTypes.map((t) => ({ k: t.k, label: t.label, desc: t.desc, enabled: true })), slots: ['10:00', '11:30', '13:00', '16:00', '18:00'], weekend: '5,6', daysAhead: 6, minBrief: 30,
      consent: "أوافق على إرسال هذه المعلومات إلى المحامي المختار فقط، وفق", feesNote: "لا تدفع شيئاً عبر المنصة الآن. الأتعاب يُتفق عليها مع المحامي مباشرة بعد تأكيد الموعد.", feesDone: "الأتعاب يُتفق عليها مع المحامي مباشرة، ولا تنشأ علاقة توكيل إلا باتفاق صريح بينكما." };
    const bcfg = { ...bcfgDefaults, ...(cms.booking || {}) };
    const tName = (k) => ((bcfg.types || []).find((t) => t.k === k) || {}).label || k;
    const bStatus = { new: ['جديد', 'gold'], confirmed: ['مؤكد', 'ok'], done: ['منجز', 'navy'], cancelled: ['ملغى', 'err'] };
    const bkSchema = {
      group: 'bookings', singular: 'طلب', plural: 'طلبات الاستشارة', siteless: true, seed: S.bookings, titleKey: 'area', noCreate: true, editLabel: 'فتح',
      searchKeys: ['id', 'area', 'brief', 'user'],
      columns: [
        { k: 'id', label: 'رقم الطلب', strong: true },
        { k: 'lawyer', label: 'المحامي', get: (r) => lName(r.lawyer) },
        { k: 'type', label: 'النوع', get: (r) => tName(r.type) },
        { k: 'day', label: 'الموعد', get: (r) => (r.day ? r.day + ' · ' + r.slot : 'كتابية') },
        { k: 'area', label: 'الموضوع' },
        { k: 'status', label: 'الحالة', type: 'badge', map: bStatus }
      ],
      filters: [{ k: 'status', label: 'الحالات', options: [{ v: 'new', l: 'جديد' }, { v: 'confirmed', l: 'مؤكد' }, { v: 'done', l: 'منجز' }, { v: 'cancelled', l: 'ملغى' }] }, { k: 'lawyer', label: 'المحامين', options: lawyersAll.map((l) => ({ v: l.id, l: l.name })) }],
      fields: [
        { k: 'id', label: 'رقم الطلب', type: 'info' }, { k: 'user', label: 'المستخدم (مخفي جزئياً)', type: 'info' },
        { k: 'phone', label: 'الهاتف (مخفي جزئياً)', type: 'info' }, { k: 'created', label: 'تاريخ الطلب', type: 'info' },
        { k: 'lawyer', label: 'المحامي', type: 'select', options: lawyersAll.map((l) => ({ v: l.id, l: l.name })), help: 'تحويل الطلب إلى محامٍ آخر يتطلب موافقة المستخدم.' },
        { k: 'type', label: 'نوع الاستشارة', type: 'select', options: (bcfg.types || []).map((t) => ({ v: t.k, l: t.label })) },
        { k: 'day', label: 'اليوم', type: 'date' }, { k: 'slot', label: 'الوقت', type: 'select', options: [{ v: '', l: '—' }].concat((bcfg.slots || []).map((s) => ({ v: s, l: s }))) },
        { k: 'area', label: 'الموضوع', wide: true }, { k: 'brief', label: 'ملخص المستخدم', type: 'info' },
        { k: 'status', label: 'الحالة', type: 'select', options: [{ v: 'new', l: 'جديد' }, { v: 'confirmed', l: 'مؤكد' }, { v: 'done', l: 'منجز' }, { v: 'cancelled', l: 'ملغى' }] },
        { k: 'note', label: 'ملاحظة داخلية', type: 'textarea', rows: 2 }
      ],
      validate: (r) => (r.type !== 'msg' && (!r.day || !r.slot) && r.status !== 'cancelled' ? 'حدّد اليوم والوقت لهذا النوع من الاستشارة.' : ''),
      bulk: [{ label: 'تأكيد', apply: (r) => ({ ...r, status: 'confirmed' }) }, { label: 'إنجاز', apply: (r) => ({ ...r, status: 'done' }) }, { label: 'إلغاء', apply: (r) => ({ ...r, status: 'cancelled' }) }],
      badge: (rows) => rows.filter((r) => r.status === 'new').length,
      preview: (r) => ({ kicker: r.id + ' · ' + tName(r.type), title: r.area, body: r.brief, meta: ['المحامي: ' + lName(r.lawyer), r.day ? 'الموعد: ' + r.day + ' الساعة ' + r.slot : 'استشارة مكتوبة'] })
    };
    const cfgSchema = {
      group: 'bookings', title: 'إعدادات الحجز', desc: 'تظهر في خطوات طلب الاستشارة من ملف كل محامٍ.', roles: ['support'], siteHref: 'Lawyers.dc.html',
      defaults: bcfgDefaults,
      fields: [
        { k: 'types', label: 'أنواع الاستشارة', type: 'repeater', itemLabel: 'نوع', itemTitle: (t) => (t && t.label) || '', sub: [{ k: 'k', label: 'المعرّف', dir: 'ltr' }, { k: 'label', label: 'الاسم' }, { k: 'desc', label: 'الوصف', wide: true }, { k: 'enabled', label: 'متاح', type: 'toggle', on: 'متاح', off: 'معطّل' }] },
        { k: 'slots', label: 'الأوقات المتاحة', type: 'lines', rows: 5, help: 'وقت واحد في كل سطر بصيغة 24 ساعة، مثل 16:00.' },
        { k: 'weekend', label: 'أيام العطلة الأسبوعية', type: 'select', options: [{ v: '5,6', l: 'الجمعة والسبت' }, { v: '5', l: 'الجمعة فقط' }, { v: '', l: 'بلا عطلة' }] },
        { k: 'daysAhead', label: 'عدد الأيام المعروضة للحجز', type: 'number', min: 1, max: 30 },
        { k: 'minBrief', label: 'أقل عدد أحرف لملخص المشكلة', type: 'number', min: 0, max: 1000 },
        { k: 'consent', label: 'نص الموافقة (يليه رابط سياسة الخصوصية)', type: 'textarea', rows: 2 },
        { k: 'feesNote', label: 'تنبيه الأتعاب في خطوة المراجعة', type: 'textarea', rows: 2 },
        { k: 'feesDone', label: 'سطر الأتعاب بعد الإرسال', type: 'textarea', rows: 2 }
      ],
      validate: (v) => { const bad = (v.slots || []).filter((s) => !/^([01]\d|2[0-3]):[0-5]\d$/.test(toW(s))); return bad.length ? { slots: 'صيغة غير صحيحة: ' + bad.join('، ') } : !(v.types || []).some((t) => t.enabled) ? { types: 'فعّل نوعاً واحداً على الأقل.' } : {}; },
      preview: (v) => ({ kicker: 'الخطوة ١ من ٤', title: 'اختر نوع الاستشارة', body: (v.types || []).filter((t) => t.enabled).map((t) => '• ' + t.label + ': ' + t.desc).join('\n'), meta: ['الأوقات: ' + (v.slots || []).join('، '), 'الحد الأدنى للملخص: ' + ar(v.minBrief) + ' حرفاً'] })
    };
    const vals = { bkSchema, cfgSchema };
    const TABS = [["list", "الطلبات"], ["cfg", "إعدادات الحجز"]];
    const tab = TABS.some((t) => t[0] === this.state.tab) ? this.state.tab : (TABS[0] || [''])[0];
    const flags = {}; TABS.forEach((t) => { flags['isT_' + t[0]] = t[0] === tab; });
    return { ...vals, ...flags, tabs: TABS.map((t) => ({ label: t[1], on: t[0] === tab ? 'true' : 'false', pick: () => this.setState({ tab: t[0] }) })) };
  }
}
return Component;
});
