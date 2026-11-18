MQ_DEF("AdminCalculator", "<div dir=\"rtl\" style=\"font-family: 'IBM Plex Sans Arabic', system-ui, sans-serif; color: #0F1E35; background: #FAF7F0; min-height: 100vh\">\n<dc-import name=\"AdminSidebar\" active=\"calculator\" hint-size=\"264px,100%\"></dc-import>\n<main class=\"adm-main\" id=\"main\">\n<header style=\"display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 12px 24px; margin-bottom: 20px\">\n<div style=\"display: flex; flex-direction: column; gap: 6px; min-width: 0\">\n<span style=\"font-size: 13px; color: #3A4860\">لوحة التحكم / الحاسبة القانونية</span>\n<h1 style=\"margin: 0; font-size: clamp(24px, 3.4vw, 32px); font-weight: 700\">الحاسبة القانونية</h1>\n<p style=\"margin: 0; font-size: 15px; line-height: 1.8; color: #3A4860; max-width: 780px\">تحكّم في معاملات حساب مكافأة نهاية الخدمة، وجدول مواعيد الطعن، وأيام العطل التي تمتد بها المدد، وتفعيل حساب الرسوم.</p>\n</div>\n\n</header>\n<div class=\"adm-tabs\" role=\"tablist\" aria-label=\"أقسام الصفحة\">\n<sc-for list=\"{{tabs}}\" as=\"t\" hint-placeholder-count=\"3\"><button type=\"button\" role=\"tab\" class=\"adm-tab\" aria-selected=\"{{t.on}}\" onClick=\"{{t.pick}}\">{{t.label}}</button></sc-for>\n</div>\n<sc-if value=\"{{isT_cfg}}\" hint-placeholder-val=\"{{false}}\">\n<dc-import name=\"AdminForm\" module=\"calc\" schema=\"{{cfgSchema}}\" hint-size=\"100%,900px\"></dc-import>\n</sc-if>\n<sc-if value=\"{{isT_dl}}\" hint-placeholder-val=\"{{false}}\">\n<dc-import name=\"AdminCrud\" module=\"deadlines\" schema=\"{{dlSchema}}\" hint-size=\"100%,820px\"></dc-import>\n</sc-if>\n<sc-if value=\"{{isT_hol}}\" hint-placeholder-val=\"{{false}}\">\n<p class=\"adm-note\" style=\"margin: 0 0 16px\">قائمة أولية بالعطل ثابتة التاريخ لمراجعتها. تحقق منها مع قانون العطل الرسمية النافذ، وأضف العطل الدينية وما يعلنه مجلس الوزراء لكل سنة.</p>\n<dc-import name=\"AdminCrud\" module=\"holidays\" schema=\"{{holSchema}}\" hint-size=\"100%,820px\"></dc-import>\n</sc-if>\n</main>\n</div>", "\nbody{margin:0;background:#FAF7F0}\na{color:#0F1E35}\n.adm-main{margin-inline-start:264px;padding:28px clamp(16px,3vw,40px) 72px;box-sizing:border-box;min-width:0}\n.adm-tabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid #E3DCCB;margin:0 0 22px;scrollbar-width:thin}\n.adm-tab{flex:0 0 auto;min-height:46px;padding:0 16px;border:0;border-bottom:2px solid transparent;background:transparent;font:inherit;font-size:15px;color:#3A4860;cursor:pointer;white-space:nowrap}\n.adm-tab[aria-selected=true]{color:#0F1E35;font-weight:700;border-bottom-color:#C9A24D}\n.adm-tab:focus-visible,.adm-btn:focus-visible{outline:2px solid #C9A24D;outline-offset:2px}\n.adm-card{border:1px solid #E3DCCB;border-radius:18px;background:#FFFFFF}\n.adm-note{padding:12px 16px;border-radius:12px;background:#F3EEE2;font-size:14px;line-height:1.8;color:#2B3A52}\n.adm-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:46px;padding:0 18px;border-radius:12px;font:inherit;font-size:14px;font-weight:600;cursor:pointer;white-space:nowrap;text-decoration:none;box-sizing:border-box}\n.adm-btn.pri{background:#C9A24D;border:1px solid #C9A24D;color:#0F1E35;font-weight:700}\n.adm-btn.sec{background:#FFFFFF;border:1px solid #8F8778;color:#0F1E35}\n.adm-btn.dan{background:#FFFFFF;border:1px solid #A3282B;color:#A3282B}\n.adm-btn:disabled{opacity:.45;cursor:not-allowed}\n.adm-in{height:46px;padding:0 14px;border:1px solid #8F8778;border-radius:12px;background:#FFFFFF;font:inherit;font-size:15px;color:#0F1E35;box-sizing:border-box;max-width:100%}\n.adm-in:focus{outline:2px solid #C9A24D;outline-offset:1px}\n\n@media (max-width:1100px){.adm-main{margin-inline-start:0;padding:20px 16px 56px}}\n", function (DCLogic, React) {
"use strict";
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { tab: 'cfg' };
    this.S = {"deadlines": [{"id": "objection", "k": "objection", "label": "اعتراض على حكم غيابي (١٠ أيام)", "days": 10, "basis": "المادة ١٧٧ من قانون المرافعات المدنية", "enabled": true}, {"id": "appeal", "k": "appeal", "label": "استئناف حكم بدائي (١٥ يوماً)", "days": 15, "basis": "المادة ١٨٧ من قانون المرافعات المدنية", "enabled": true}, {"id": "retrial", "k": "retrial", "label": "إعادة المحاكمة (١٥ يوماً)", "days": 15, "basis": "المادة ١٩٨ من قانون المرافعات المدنية", "enabled": true}, {"id": "cassation", "k": "cassation", "label": "الطعن تمييزاً (٣٠ يوماً)", "days": 30, "basis": "المادة ٢٠٤ من قانون المرافعات المدنية", "enabled": true}, {"id": "cassation-ps", "k": "cassation-ps", "label": "الطعن تمييزاً في حكم أحوال شخصية (١٠ أيام)", "days": 10, "basis": "المادة ٢٠٤ من قانون المرافعات المدنية، وفق مصادر شارحة", "enabled": true}, {"id": "correction", "k": "correction", "label": "تصحيح القرار التمييزي (٧ أيام)", "days": 7, "basis": "المادة ٢٢١ من قانون المرافعات المدنية", "enabled": true}, {"id": "labour", "k": "labour", "label": "الطعن في إنهاء الخدمة أمام محكمة العمل (٣٠ يوماً)", "days": 30, "basis": "المادة ٤٦ من قانون العمل رقم ٣٧ لسنة ٢٠١٥", "enabled": true}], "holidays": [{"id": "h-0101", "date": "2026-01-01", "name": "رأس السنة الميلادية", "recurring": true}, {"id": "h-0106", "date": "2026-01-06", "name": "عيد الجيش", "recurring": true}, {"id": "h-0321", "date": "2026-03-21", "name": "عيد نوروز", "recurring": true}, {"id": "h-0501", "date": "2026-05-01", "name": "عيد العمال", "recurring": true}, {"id": "h-0714", "date": "2026-07-14", "name": "ذكرى ثورة ١٤ تموز", "recurring": true}, {"id": "h-1003", "date": "2026-10-03", "name": "اليوم الوطني", "recurring": true}, {"id": "h-1225", "date": "2026-12-25", "name": "عيد الميلاد", "recurring": true}], "govs": ["بغداد", "البصرة", "نينوى", "أربيل", "السليمانية", "دهوك", "حلبجة", "كركوك", "الأنبار", "صلاح الدين", "ديالى", "بابل", "كربلاء", "النجف", "واسط", "القادسية", "ذي قار", "ميسان", "المثنى"]};

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

    const ccDefaults = { ...{"krgNotice": "في إقليم كوردستان يُطبَّق قانون العمل رقم ٧١ لسنة ١٩٨٧ وفق المصادر المتاحة، وهذه الحاسبة مبنية على القانون الاتحادي. راجع محامياً مقيَّداً في نقابة محامي كوردستان لحساب مستحقاتك.", "dateHelp": "تبدأ المدة من اليوم التالي للتبليغ لا من تاريخ صدور الحكم.", "labourKrg": "هذا الميعاد من قانون العمل الاتحادي، وقد يختلف في إقليم كوردستان.", "feesIntro": "حساب الرسوم متوقف مؤقتاً حتى نعتمد جدول الرسوم النافذ، لأن مبالغ الرسوم وحدودها عُدّلت بعد صدور القانون، وأي رقم غير محدّث قد يضللك.", "disclaimer": "النتيجة تقديرية للاسترشاد فقط ولا تُعدّ رأياً قانونياً.", "lawyerLink": "راجع النتيجة مع محامٍ", "feeFactors": ["نسبة من قيمة الدعوى، مع حد أدنى وحد أعلى يحددهما الجدول النافذ.", "رسوم مقطوعة لبعض أنواع الدعاوى، ورسوم خاصة بدعاوى الأحوال الشخصية.", "رسوم مستقلة للاستئناف والتمييز.", "إعفاءات، منها إعفاء العمال من رسوم الدعاوى العمالية وفق المصادر المتاحة."]}, divisor: 30, daysPerYear: 14, arbitraryMult: 2, weekend: '5,6', useHolidays: true, feesEnabled: false,
      feesNote: 'سنفعّل الحساب بعد اعتماد جدول الرسوم النافذ من المستشار القانوني للمنصة.', eosBasis: 'المادتان ٤٥ و٤٧ من قانون العمل رقم ٣٧ لسنة ٢٠١٥', krgEos: 'اختر «العراق الاتحادي» أو راجع محامياً في الإقليم.' };
    const cfgSchema = {
      group: 'calculator', title: 'معاملات الحساب', desc: 'أي تغيير هنا يغيّر نتائج الحاسبة للزوار فوراً، فراجعه مع المستشار القانوني.', roles: ['reviewer'], siteHref: 'Calculator.dc.html', defaults: ccDefaults,
      fields: [
        { type: 'section', label: 'مكافأة نهاية الخدمة' },
        { k: 'divisor', label: 'الأجر اليومي = الأجر الشهري ÷', type: 'number' }, { k: 'daysPerYear', label: 'أيام المكافأة عن كل سنة', type: 'number' },
        { k: 'arbitraryMult', label: 'المضاعِف عند تعذّر إعادة العامل', type: 'number' }, { k: 'eosBasis', label: 'الأساس القانوني' },
        { k: 'krgEos', label: 'رسالة إقليم كوردستان في النتيجة', type: 'textarea', rows: 2 },
        { k: 'krgNotice', label: 'تنبيه إقليم كوردستان أعلى الحاسبة', type: 'textarea', rows: 3 },
        { type: 'section', label: 'المواعيد' },
        { k: 'weekend', label: 'أيام العطلة التي تمتد بها المدة', type: 'select', options: [{ v: '5,6', l: 'الجمعة والسبت' }, { v: '5', l: 'الجمعة فقط' }] },
        { k: 'dateHelp', label: 'شرح تاريخ التبليغ' }, { k: 'labourKrg', label: 'تنبيه ميعاد العمل في الإقليم' },
        { k: 'useHolidays', label: 'العطل الرسمية', type: 'toggle', on: 'تمتد المدة إذا صادف آخرها عطلة رسمية', off: 'تُتجاهل العطل الرسمية' },
        { type: 'section', label: 'رسوم الدعوى' },
        { k: 'feesInfo', label: 'حالة الحساب', type: 'info', text: 'معطّل «قيد الاعتماد» حتى يُدخَل جدول الرسوم النافذ ويعتمده المستشار القانوني، ويتطلب ذلك إضافة جدول الرسوم في الحاسبة.' },
        { k: 'feesNote', label: 'الرسالة في خانة النتيجة', type: 'textarea', rows: 2 },
        { k: 'feesIntro', label: 'شرح توقف حساب الرسوم', type: 'textarea', rows: 3 },
        { k: 'feeFactors', label: 'ما الذي يحدد رسم الدعوى', type: 'lines', rows: 4 },
        { type: 'section', label: 'نصوص عامة' },
        { k: 'disclaimer', label: 'تنبيه النتيجة التقديرية', type: 'textarea', rows: 2 }, { k: 'lawyerLink', label: 'رابط مراجعة المحامي' }
      ],
      validate: (v) => (!(Number(v.divisor) > 0) ? { divisor: 'يجب أن يكون أكبر من صفر.' } : !(Number(v.daysPerYear) > 0) ? { daysPerYear: 'يجب أن يكون أكبر من صفر.' } : {}),
      preview: (v) => { const w = 1000000, y = 5; const base = (w / Number(v.divisor || 30)) * Number(v.daysPerYear || 14) * y; return { kicker: 'مثال: أجر مليون دينار، ٥ سنوات', title: Math.round(base).toLocaleString('ar-IQ') + ' دينار', body: 'وعند تعذّر الإعادة: ' + Math.round(base * Number(v.arbitraryMult || 1)).toLocaleString('ar-IQ') + ' دينار', meta: [v.eosBasis] }; }
    };
    const dlSchema = {
      group: 'calculator', singular: 'ميعاد', plural: 'مواعيد الطعن', idPrefix: 'dl', roles: ['reviewer'], seed: S.deadlines, titleKey: 'label', siteHref: 'Calculator.dc.html',
      columns: [{ k: 'label', label: 'الإجراء', strong: true }, { k: 'days', label: 'المدة (يوم)' }, { k: 'basis', label: 'الأساس القانوني' }, { k: 'enabled', label: 'ظاهر', type: 'bool' }],
      fields: [{ k: 'label', label: 'الاسم كما يظهر', required: true, wide: true }, { k: 'id', label: 'المعرّف', dir: 'ltr', required: true }, { k: 'days', label: 'المدة بالأيام', type: 'number', required: true }, { k: 'basis', label: 'الأساس القانوني', required: true, wide: true }, { k: 'enabled', label: 'الظهور', type: 'toggle', on: 'ظاهر في الحاسبة', off: 'مخفي' }],
      blank: () => ({ enabled: true }),
      validate: (r) => (!(Number(r.days) > 0) ? { days: 'أدخل عدد أيام صحيحاً.' } : ''),
      preview: (r) => ({ kicker: 'آخر يوم لتقديم الطعن', title: r.label, body: ar(r.days || 0) + ' يوماً تبدأ من اليوم التالي للتبليغ.', meta: [r.basis] })
    };
    const holSchema = {
      group: 'holidays', singular: 'عطلة', plural: 'العطل الرسمية', idPrefix: 'hol', seed: S.holidays, titleKey: 'name',
      columns: [{ k: 'name', label: 'العطلة', strong: true }, { k: 'date', label: 'التاريخ', type: 'date' }, { k: 'recurring', label: 'سنوية', type: 'bool' }],
      fields: [{ k: 'name', label: 'اسم العطلة', required: true }, { k: 'date', label: 'التاريخ', type: 'date', required: true }, { k: 'recurring', label: 'التكرار', type: 'toggle', on: 'تتكرر كل سنة في اليوم نفسه', off: 'لهذه السنة فقط' }, { k: 'ref', label: 'القرار أو القانون', wide: true }],
      blank: () => ({ recurring: false }),
      preview: (r) => ({ kicker: r.recurring ? 'سنوية' : 'لمرة واحدة', title: r.name, body: ar(r.date || '') })
    };
    const vals = { cfgSchema, dlSchema, holSchema };
    const TABS = [["cfg", "المعادلات والإعدادات"], ["dl", "مواعيد الطعن"], ["hol", "العطل الرسمية"]];
    const tab = TABS.some((t) => t[0] === this.state.tab) ? this.state.tab : (TABS[0] || [''])[0];
    const flags = {}; TABS.forEach((t) => { flags['isT_' + t[0]] = t[0] === tab; });
    return { ...vals, ...flags, tabs: TABS.map((t) => ({ label: t[1], on: t[0] === tab ? 'true' : 'false', pick: () => this.setState({ tab: t[0] }) })) };
  }
}
return Component;
});
