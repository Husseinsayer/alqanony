MQ_DEF("AdminLawyers", "<div dir=\"rtl\" style=\"font-family: 'IBM Plex Sans Arabic', system-ui, sans-serif; color: #0F1E35; background: #FAF7F0; min-height: 100vh\">\n<dc-import name=\"AdminSidebar\" active=\"lawyers\" hint-size=\"264px,100%\"></dc-import>\n<main class=\"adm-main\" id=\"main\">\n<header style=\"display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 12px 24px; margin-bottom: 20px\">\n<div style=\"display: flex; flex-direction: column; gap: 6px; min-width: 0\">\n<span style=\"font-size: 13px; color: #3A4860\">لوحة التحكم / المحامون والتوثيق</span>\n<h1 style=\"margin: 0; font-size: clamp(24px, 3.4vw, 32px); font-weight: 700\">المحامون والتوثيق</h1>\n<p style=\"margin: 0; font-size: 15px; line-height: 1.8; color: #3A4860; max-width: 780px\">راجع طلبات الانضمام مستنداً مستنداً وفق مراحل التحقق الأربع، وأدِر دليل المحامين وإعادة التحقق الدورية والإيقاف. ترتيب الدليل عشوائي متناوب دائماً، ولا ترتيب مدفوعاً.</p>\n</div>\n\n</header>\n<div class=\"adm-tabs\" role=\"tablist\" aria-label=\"أقسام الصفحة\">\n<sc-for list=\"{{tabs}}\" as=\"t\" hint-placeholder-count=\"3\"><button type=\"button\" role=\"tab\" class=\"adm-tab\" aria-selected=\"{{t.on}}\" onClick=\"{{t.pick}}\">{{t.label}}</button></sc-for>\n</div>\n<sc-if value=\"{{isT_queue}}\" hint-placeholder-val=\"{{false}}\">\n<p class=\"adm-note\" style=\"margin: 0 0 16px\">طلبات تجريبية لعرض سير العمل. عند ربط الخادم تصل الطلبات الحقيقية من صفحة «تسجيل محامٍ جديد» مع مستنداتها.</p>\n<dc-import name=\"AdminCrud\" module=\"applications\" schema=\"{{appSchema}}\" hint-size=\"100%,820px\"></dc-import>\n</sc-if>\n<sc-if value=\"{{isT_dir}}\" hint-placeholder-val=\"{{false}}\">\n<dc-import name=\"AdminCrud\" module=\"lawyers\" schema=\"{{dirSchema}}\" hint-size=\"100%,820px\"></dc-import>\n</sc-if>\n<sc-if value=\"{{isT_cfg}}\" hint-placeholder-val=\"{{false}}\">\n<dc-import name=\"AdminForm\" module=\"lawyersCfg\" schema=\"{{cfgSchema}}\" hint-size=\"100%,900px\"></dc-import>\n</sc-if>\n</main>\n</div>", "\nbody{margin:0;background:#FAF7F0}\na{color:#0F1E35}\n.adm-main{margin-inline-start:264px;padding:28px clamp(16px,3vw,40px) 72px;box-sizing:border-box;min-width:0}\n.adm-tabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid #E3DCCB;margin:0 0 22px;scrollbar-width:thin}\n.adm-tab{flex:0 0 auto;min-height:46px;padding:0 16px;border:0;border-bottom:2px solid transparent;background:transparent;font:inherit;font-size:15px;color:#3A4860;cursor:pointer;white-space:nowrap}\n.adm-tab[aria-selected=true]{color:#0F1E35;font-weight:700;border-bottom-color:#C9A24D}\n.adm-tab:focus-visible,.adm-btn:focus-visible{outline:2px solid #C9A24D;outline-offset:2px}\n.adm-card{border:1px solid #E3DCCB;border-radius:18px;background:#FFFFFF}\n.adm-note{padding:12px 16px;border-radius:12px;background:#F3EEE2;font-size:14px;line-height:1.8;color:#2B3A52}\n.adm-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:46px;padding:0 18px;border-radius:12px;font:inherit;font-size:14px;font-weight:600;cursor:pointer;white-space:nowrap;text-decoration:none;box-sizing:border-box}\n.adm-btn.pri{background:#C9A24D;border:1px solid #C9A24D;color:#0F1E35;font-weight:700}\n.adm-btn.sec{background:#FFFFFF;border:1px solid #8F8778;color:#0F1E35}\n.adm-btn.dan{background:#FFFFFF;border:1px solid #A3282B;color:#A3282B}\n.adm-btn:disabled{opacity:.45;cursor:not-allowed}\n.adm-in{height:46px;padding:0 14px;border:1px solid #8F8778;border-radius:12px;background:#FFFFFF;font:inherit;font-size:15px;color:#0F1E35;box-sizing:border-box;max-width:100%}\n.adm-in:focus{outline:2px solid #C9A24D;outline-offset:1px}\n\n@media (max-width:1100px){.adm-main{margin-inline-start:0;padding:20px 16px 56px}}\n", function (DCLogic, React) {
"use strict";
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { tab: 'queue' };
    this.S = {"lawyers": [{"id": "ali-aljubouri", "name": "أ. علي حسن الجبوري", "spec": "trade", "gov": "بغداد", "union": "iraq", "barYear": 2008, "initial": "ع", "langs": "العربية، الإنجليزية", "verified": "2026-09-14", "areas": ["تأسيس الشركات", "العقود التجارية", "النزاعات التجارية"], "edu": ["بكالوريوس القانون، جامعة بغداد", "ماجستير القانون الخاص"], "bio": "يعمل في قضايا الشركات والعقود التجارية، ويتولى صياغة عقود التأسيس ومتابعة النزاعات التجارية أمام محاكم البداءة في بغداد."}, {"id": "zainab-almousawi", "name": "أ. زينب كاظم الموسوي", "spec": "family", "gov": "النجف", "union": "iraq", "barYear": 2014, "initial": "ز", "langs": "العربية", "verified": "2026-08-30", "areas": ["الزواج والطلاق", "النفقة", "الحضانة"], "edu": ["بكالوريوس القانون، جامعة الكوفة"], "bio": "تعمل في قضايا الأحوال الشخصية أمام محاكم النجف، وتشمل النفقة والحضانة والتفريق."}, {"id": "ahmed-alsaadi", "name": "أ. أحمد عبد الكريم السعدي", "spec": "penal", "gov": "البصرة", "union": "iraq", "barYear": 2011, "initial": "أ", "langs": "العربية، الإنجليزية", "verified": "2026-10-02", "areas": ["الدفاع في القضايا الجزائية", "الشكاوى الجزائية", "الجرائم المالية"], "edu": ["بكالوريوس القانون، جامعة البصرة"], "bio": "يترافع في القضايا الجزائية في البصرة، ويتابع الشكاوى من مرحلة التحقيق حتى المحاكمة."}, {"id": "sara-alobaidi", "name": "أ. سارة جاسم العبيدي", "spec": "labor", "gov": "أربيل", "union": "krd", "barYear": 2017, "initial": "س", "langs": "العربية، الكوردية، الإنجليزية", "verified": "2026-09-21", "areas": ["عقود العمل", "إنهاء الخدمة", "الضمان الاجتماعي"], "edu": ["بكالوريوس القانون، جامعة صلاح الدين"], "bio": "تعمل في قضايا العمل في إقليم كوردستان، وتقدّم الاستشارات لأصحاب العمل والعمال."}, {"id": "mustafa-altamimi", "name": "أ. مصطفى رعد التميمي", "spec": "estate", "gov": "كربلاء", "union": "iraq", "barYear": 2015, "initial": "م", "langs": "العربية", "verified": "2026-07-18", "areas": ["عقود الإيجار", "نقل الملكية", "نزاعات العقارات"], "edu": ["بكالوريوس القانون، جامعة كربلاء"], "bio": "يعمل في قضايا العقارات والإيجار، ويرافق موكليه في إجراءات التسجيل العقاري."}, {"id": "noor-saleh", "name": "أ. نور الهدى صالح", "spec": "admin", "gov": "نينوى", "union": "iraq", "barYear": 2018, "initial": "ن", "langs": "العربية، الإنجليزية", "verified": "2026-09-05", "areas": ["الطعون الإدارية", "قضايا الموظفين"], "edu": ["بكالوريوس القانون، جامعة الموصل", "ماجستير القانون العام"], "bio": "تعمل في القضايا الإدارية وقضايا الموظفين أمام محاكم نينوى."}, {"id": "haider-alrubaie", "name": "أ. حيدر فاضل الربيعي", "spec": "arb", "gov": "بابل", "union": "iraq", "barYear": 2012, "initial": "ح", "langs": "العربية، الإنجليزية", "verified": "2026-08-11", "areas": ["التحكيم التجاري", "تسوية النزاعات", "عقود المقاولات"], "edu": ["بكالوريوس القانون، جامعة بابل"], "bio": "يعمل في التحكيم وتسوية النزاعات التجارية وعقود المقاولات."}, {"id": "hiba-aldulaimi", "name": "أ. هبة سعد الدليمي", "spec": "family", "gov": "الأنبار", "union": "iraq", "barYear": 2019, "initial": "هـ", "langs": "العربية", "verified": "2026-10-12", "areas": ["الطلاق", "النفقة", "إثبات النسب"], "edu": ["بكالوريوس القانون، جامعة الأنبار"], "bio": "تعمل في قضايا الأحوال الشخصية في الأنبار."}], "applications": [{"id": "LR-30418", "name": "أ. حيدر نوري الكعبي", "spec": "estate", "gov": "كربلاء", "union": "iraq", "barYear": 2019, "phone": "07XX XXX 4412", "email": "h•••@mail.iq", "office": "شارع الإسكان، كربلاء", "bio": "يعمل في قضايا الإيجار والتسجيل العقاري أمام محاكم كربلاء.", "submitted": "2026-11-10", "stage": "docs", "videoAt": "", "docs": [{"label": "هوية نقابة المحامين – الوجه الأمامي", "file": "bar-front.jpg · معاينة آمنة بعد ربط الخادم", "state": "ok", "note": ""}, {"label": "هوية نقابة المحامين – الوجه الخلفي", "file": "bar-back.jpg · معاينة آمنة بعد ربط الخادم", "state": "ok", "note": ""}, {"label": "البطاقة الوطنية الموحدة أو هوية الأحوال المدنية", "file": "national-id.pdf · معاينة آمنة بعد ربط الخادم", "state": "pending", "note": ""}, {"label": "كتاب تأييد من النقابة المختصة", "file": "bar-letter.pdf · معاينة آمنة بعد ربط الخادم", "state": "pending", "note": ""}, {"label": "صورة شخصية احترافية", "file": "photo.jpg · معاينة آمنة بعد ربط الخادم", "state": "ok", "note": ""}, {"label": "شهادة البكالوريوس في القانون (اختياري)", "file": "لم يُرفع (اختياري)", "state": "na", "note": ""}], "status": "pending", "reason": "", "message": ""}, {"id": "LR-30422", "name": "أ. نور الهدى سامي", "spec": "family", "gov": "السليمانية", "union": "krd", "barYear": 2021, "phone": "07XX XXX 0937", "email": "n•••@mail.iq", "office": "السليمانية", "bio": "تعمل في قضايا الأحوال الشخصية في إقليم كوردستان.", "submitted": "2026-11-11", "stage": "union", "videoAt": "2026-11-17", "docs": [{"label": "هوية نقابة المحامين – الوجه الأمامي", "file": "bar-front.jpg · معاينة آمنة بعد ربط الخادم", "state": "ok", "note": ""}, {"label": "هوية نقابة المحامين – الوجه الخلفي", "file": "bar-back.jpg · معاينة آمنة بعد ربط الخادم", "state": "ok", "note": ""}, {"label": "البطاقة الوطنية الموحدة أو هوية الأحوال المدنية", "file": "national-id.pdf · معاينة آمنة بعد ربط الخادم", "state": "ok", "note": ""}, {"label": "كتاب تأييد من النقابة المختصة", "file": "bar-letter.pdf · معاينة آمنة بعد ربط الخادم", "state": "ok", "note": ""}, {"label": "صورة شخصية احترافية", "file": "photo.jpg · معاينة آمنة بعد ربط الخادم", "state": "ok", "note": ""}, {"label": "شهادة البكالوريوس في القانون (اختياري)", "file": "degree.pdf · معاينة آمنة بعد ربط الخادم", "state": "ok", "note": ""}], "status": "pending", "reason": "", "message": ""}, {"id": "LR-30427", "name": "أ. مصطفى جبار الركابي", "spec": "penal", "gov": "ذي قار", "union": "iraq", "barYear": 2025, "phone": "07XX XXX 7781", "email": "m•••@mail.iq", "office": "الناصرية", "bio": "محامٍ في القضايا الجزائية.", "submitted": "2026-11-12", "stage": "docs", "videoAt": "", "docs": [{"label": "هوية نقابة المحامين – الوجه الأمامي", "file": "bar-front.jpg · معاينة آمنة بعد ربط الخادم", "state": "ok", "note": ""}, {"label": "هوية نقابة المحامين – الوجه الخلفي", "file": "bar-back.jpg · معاينة آمنة بعد ربط الخادم", "state": "rejected", "note": "الصورة غير واضحة، يُطلب رفعها مجدداً."}, {"label": "البطاقة الوطنية الموحدة أو هوية الأحوال المدنية", "file": "national-id.pdf · معاينة آمنة بعد ربط الخادم", "state": "ok", "note": ""}, {"label": "كتاب تأييد من النقابة المختصة", "file": "bar-letter.pdf · معاينة آمنة بعد ربط الخادم", "state": "pending", "note": ""}, {"label": "صورة شخصية احترافية", "file": "photo.jpg · معاينة آمنة بعد ربط الخادم", "state": "ok", "note": ""}, {"label": "شهادة البكالوريوس في القانون (اختياري)", "file": "لم يُرفع (اختياري)", "state": "na", "note": ""}], "status": "pending", "reason": "", "message": ""}], "govs": ["بغداد", "البصرة", "نينوى", "أربيل", "السليمانية", "دهوك", "حلبجة", "كركوك", "الأنبار", "صلاح الدين", "ديالى", "بابل", "كربلاء", "النجف", "واسط", "القادسية", "ذي قار", "ميسان", "المثنى"]};

  }

  renderVals() {
    const D = '٠١٢٣٤٥٦٧٨٩';
    const ar = (x) => String(x).replace(/[0-9]/g, (d) => D[d]);
    const S = this.S;
    const opts = (o) => Object.keys(o).filter((k) => k !== 'all').map((k) => ({ v: k, l: o[k] }));
    const mapOf = (o, tone) => { const m = {}; Object.keys(o).forEach((k) => { m[k] = [o[k], tone || 'muted']; }); return m; };
    const readJ = (k, d) => { try { const v = JSON.parse(window.localStorage.getItem(k) || 'null'); return v == null ? d : v; } catch (e) { return d; } };
    const cms = readJ('mq_cms', {});
    const mergeL = (seed, c, idk) => { idk = idk || 'id'; c = c || {}; const up = c.upsert || {}; const rm = new Set(c.removed || []); const out = (seed || []).filter((r) => !rm.has(r[idk])).map((r) => (up[r[idk]] ? { ...r, ...up[r[idk]] } : r)); Object.keys(up).forEach((id) => { if (!rm.has(id) && !(seed || []).some((r) => r[idk] === id)) out.push(up[id]); }); return out; };
    const today = new Date().toISOString().slice(0, 10);
    const plural = (n, one, two, few, many) => (n === 1 ? one : n === 2 ? two : n >= 3 && n <= 10 ? ar(n) + ' ' + few : ar(n) + ' ' + many);
    const yearsTxt = (n) => plural(Number(n), 'سنة واحدة', 'سنتين', 'سنوات', 'سنة');

    const specNames = { trade: 'التجاري والشركات', family: 'الأحوال الشخصية', penal: 'الجزائي', labor: 'العمل', estate: 'العقارات والإيجار', admin: 'الإداري', arb: 'التحكيم' };
    Object.keys(specNames).forEach((k) => { const v = (cms.lawyersCfg || {})['spec_' + k]; if (v) specNames[k] = v; });
    const unions = { iraq: 'نقابة المحامين العراقيين', krd: 'نقابة محامي كوردستان' };
    const lcfgDefaults = { govs: S.govs, minYears: 2, maxSpecs: 3, reverifyMonths: 12,
      specList: ['التجاري والشركات', 'الأحوال الشخصية', 'الجزائي', 'العمل', 'العقارات والإيجار', 'الإداري', 'المدني', 'التحكيم', 'الملكية الفكرية', 'الضرائب'],
      badgeText: 'تشهد العلامة بأننا تحققنا من القيد وصلاحية الهوية المهنية في هذا التاريخ، ولا تُعدّ تقييماً لجودة الخدمة.',
      emptyText: 'لا يوجد بعد محامون موثّقون مطابقون لهذا الاختيار. جرّب مجالاً آخر أو «كل المحافظات».',
      spec_trade: 'التجاري والشركات', spec_family: 'الأحوال الشخصية', spec_penal: 'الجزائي', spec_labor: 'العمل', spec_estate: 'العقارات والإيجار', spec_admin: 'الإداري', spec_arb: 'التحكيم', allAreas: 'كل المجالات',
      demoNote: "الملفات المعروضة نماذج تجريبية لأغراض التصميم.", areasNote: "يحددها المحامي بنفسه، ولا يوجد في العراق نظام رسمي لاعتماد التخصص.", bookBlurb: "اختر نوع الاستشارة والموعد، وتصل تفاصيلك إلى هذا المحامي فقط.", feesShort: "الأتعاب يُتفق عليها مع المحامي مباشرة.",
      perks: ["ملف مهني بعلامة «موثّق» يعزز ثقة العملاء بك", "استقبال طلبات الاستشارة من عملاء في محافظتك ومجال ممارستك", "نشر مقالات قانونية باسمك ضمن مكتبة المنصة", "إدارة طلبات الاستشارة والمواعيد من لوحة واحدة"],
      docs: [{ k: 'barFront', label: 'هوية نقابة المحامين – الوجه الأمامي', hint: 'هوية سارية للسنة الحالية وبيانات واضحة.', optional: false }, { k: 'barBack', label: 'هوية نقابة المحامين – الوجه الخلفي', hint: 'تظهر فيها صلاحية الهوية بوضوح.', optional: false }, { k: 'nid', label: 'البطاقة الوطنية الموحدة أو هوية الأحوال المدنية', hint: 'الوجهان في ملف واحد أو صورة واحدة.', optional: false }, { k: 'degree', label: 'شهادة البكالوريوس في القانون (اختياري)', hint: 'يكفي القيد في النقابة، ونطلبها فقط إن أردت عرض المؤهل في ملفك.', optional: true }, { k: 'practice', label: 'كتاب تأييد من النقابة المختصة', hint: 'يثبت استمرار القيد وعدم المنع من الممارسة، بحسب ما تصدره النقابة.', optional: false }, { k: 'photo', label: 'صورة شخصية احترافية', hint: 'بخلفية سادة، تظهر في ملفك العام.', optional: false }],
      order: 'random', disclaimer: 'الإدراج في الدليل لا يعني تزكية من المنصة، ولا نأخذ أي نسبة من أتعاب المحامين.' };
    const lcfg = { ...lcfgDefaults, ...(cms.lawyersCfg || {}) };
    const govOpts = (lcfg.govs || S.govs).map((g) => ({ v: g, l: g }));
    const thisYear = new Date().getFullYear();
    const monthsSince = (d) => { if (!d) return 999; const a = new Date(d + 'T00:00:00'); const b = new Date(); return (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth()); };

    const stages = { docs: '١. مراجعة المستندات', union: '٢. المطابقة مع النقابة', video: '٣. مكالمة الفيديو', final: '٤. القرار النهائي' };
    const appStatus = { pending: ['بانتظار القرار', 'gold'], approved: ['مقبول ومنشور', 'navy'], rejected: ['مرفوض', 'err'] };
    const docStates = [{ v: 'pending', l: 'بانتظار المراجعة' }, { v: 'ok', l: 'مقبول' }, { v: 'rejected', l: 'مرفوض، يُطلب بديل' }, { v: 'na', l: 'غير مقدَّم (اختياري)' }];
    const docsDone = (r) => (r.docs || []).filter((d) => d.state === 'ok' || d.state === 'na').length + '/' + (r.docs || []).length;
    const appSchema = {
      group: 'lawyers', singular: 'طلب', plural: 'طلبات الانضمام', roles: ['verifier'], seed: S.applications, titleKey: 'name', noCreate: true, editLabel: 'مراجعة',
      searchKeys: ['name', 'id', 'gov'], searchPh: 'ابحث بالاسم أو رقم الطلب أو المحافظة…',
      columns: [
        { k: 'name', label: 'المتقدّم', strong: true },
        { k: 'gov', label: 'المحافظة' },
        { k: 'union', label: 'النقابة', type: 'badge', map: { iraq: ['العراقيين', 'ok'], krd: ['كوردستان', 'ok'] } },
        { k: 'stage', label: 'المرحلة', type: 'badge', map: mapOf(stages, 'muted') },
        { k: 'docs', label: 'المستندات المقبولة', get: (r) => docsDone(r) },
        { k: 'submitted', label: 'تاريخ التقديم', type: 'date' },
        { k: 'status', label: 'الحالة', type: 'badge', map: appStatus }
      ],
      filters: [{ k: 'status', label: 'الحالات', options: [{ v: 'pending', l: 'بانتظار القرار' }, { v: 'approved', l: 'مقبول' }, { v: 'rejected', l: 'مرفوض' }] }, { k: 'stage', label: 'المراحل', options: opts(stages) }],
      fields: [
        { type: 'section', label: 'بيانات المتقدّم' },
        { k: 'name', label: 'الاسم كما في هوية النقابة', required: true },
        { k: 'id', label: 'رقم الطلب', type: 'info' },
        { k: 'spec', label: 'المجال الرئيسي', type: 'select', options: opts(specNames) },
        { k: 'gov', label: 'المحافظة', type: 'select', options: govOpts },
        { k: 'union', label: 'النقابة', type: 'select', options: opts(unions) },
        { k: 'barYear', label: 'سنة القيد في النقابة', type: 'number' },
        { k: 'phone', label: 'الهاتف (مخفي جزئياً)', type: 'info' },
        { k: 'email', label: 'البريد (مخفي جزئياً)', type: 'info' },
        { k: 'office', label: 'عنوان المكتب', wide: true },
        { k: 'bio', label: 'النبذة التي ستظهر في الملف', type: 'textarea', rows: 3 },
        { type: 'section', label: 'مراحل التحقق' },
        { k: 'stage', label: 'المرحلة الحالية', type: 'select', options: opts(stages) },
        { k: 'videoAt', label: 'موعد مكالمة الفيديو', type: 'date' },
        { k: 'files', label: 'فتح الملفات المرفوعة', type: 'files', wide: true },
        { k: 'docs', label: 'المستندات المرفوعة', type: 'repeater', fixed: true, itemLabel: 'مستند', itemTitle: (d) => (d && d.label) || '', help: 'لا تُحذف مستندات المتقدّم ولا تُعدَّل؛ تُقبل أو تُرفض مع ملاحظة.', sub: [{ k: 'file', label: 'الملف', type: 'info' }, { k: 'state', label: 'نتيجة المراجعة', type: 'select', options: docStates }, { k: 'note', label: 'ملاحظة للمتقدّم' }] },
        { type: 'section', label: 'القرار' },
        { k: 'status', label: 'القرار', type: 'select', options: [{ v: 'pending', l: 'بانتظار القرار' }, { v: 'approved', l: 'قبول ونشر في الدليل' }, { v: 'rejected', l: 'رفض' }] },
        { k: 'reason', label: 'سبب الرفض (يُرسل للمتقدّم)', type: 'textarea', rows: 2 },
        { k: 'message', label: 'ملاحظة داخلية', type: 'textarea', rows: 2 }
      ],
      validate: (r, ctx) => {
        if (r.status === 'approved') {
          const notOk = (r.docs || []).filter((d) => d.state !== 'ok' && d.state !== 'na');
          if (notOk.length) return 'لا يمكن القبول قبل قبول كل المستندات المطلوبة. المتبقي: ' + notOk.map((d) => d.label).join('، ') + '.';
          if (r.stage !== 'final') return 'انقل الطلب إلى «٤. القرار النهائي» بعد اجتياز المطابقة مع النقابة ومكالمة الفيديو.';
          if (thisYear - Number(r.barYear) < Number(lcfg.minYears)) return 'شرط الانضمام: مضيّ ' + yearsTxt(lcfg.minYears) + ' على الأقل على القيد. سنة القيد ' + ar(r.barYear) + '.';
        }
        if (r.status === 'rejected' && !String(r.reason || '').trim()) return { reason: 'اكتب سبب الرفض ليصل إلى المتقدّم.' };
        return '';
      },
      afterSave: (row, before, api) => {
        const lid = 'lawyer-' + String(row.id).toLowerCase().replace(/^lr-/, '');
        const existing = mergeL(S.lawyers, readJ('mq_cms', {}).lawyers).find((l) => l.id === lid) || null;
        const UNAPPROVED = 'أُلغي قبول طلب الانضمام';
        if (row.status === 'approved' && (!before || before.status !== 'approved')) {
          const nm = String(row.name || '');
          if (!existing) {
            api.upsert('lawyers', { id: lid, name: nm, spec: row.spec, gov: row.gov, union: row.union, barYear: Number(row.barYear), initial: nm.replace(/^أ\.\s*/, '').charAt(0), langs: 'العربية', verified: today, areas: [], edu: [], bio: row.bio || '', status: 'active', fromApp: row.id }, 'id', null);
            api.toast('قُبل الطلب ونُشر ملف «' + nm + '» في دليل المحامين.');
          } else if (existing.status === 'hidden' && existing.statusNote === UNAPPROVED) {
            api.upsert('lawyers', { ...existing, status: 'active', statusNote: '', verified: today }, 'id', existing);
            api.toast('أُعيد قبول الطلب وأُعيد إظهار ملف «' + nm + '» كما كان.');
          } else {
            api.toast('قُبل الطلب. ملف «' + nm + '» موجود في الدليل بحالته الحالية (' + ({ active: 'ظاهر', suspended: 'موقوف', hidden: 'مخفي' }[existing.status || 'active']) + ')، ولم يتغيّر.');
          }
        }
        if (before && before.status === 'approved' && row.status !== 'approved' && existing && (existing.status || 'active') === 'active') {
          api.upsert('lawyers', { ...existing, status: 'hidden', statusNote: UNAPPROVED }, 'id', existing);
          api.toast('أُلغي القبول وأُخفي ملف «' + existing.name + '» من الدليل.');
        }
      },
      badge: (rows) => rows.filter((r) => r.status === 'pending').length,
      preview: (r) => ({ kicker: (unions[r.union] || '') + ' · ' + (r.gov || ''), title: r.name, body: r.bio, meta: ['المرحلة: ' + (stages[r.stage] || ''), 'المستندات المقبولة: ' + docsDone(r), 'سنوات القيد: ' + ar(thisYear - Number(r.barYear || thisYear))], note: 'يظهر الملف في الدليل فقط بعد القبول، بتاريخ التحقق اليوم.' })
    };
    const lStatus = { active: ['ظاهر', 'navy'], suspended: ['موقوف', 'err'], hidden: ['مخفي', 'muted'] };
    const dirSchema = {
      group: 'lawyers', singular: 'محامٍ', plural: 'المحامين', idPrefix: 'lawyer', roles: ['verifier'], seed: S.lawyers, titleKey: 'name',
      searchKeys: ['name', 'gov', 'areas', 'bio', 'id'], siteHref: 'Lawyers.dc.html', siteKey: 'mq_lawyer',
      columns: [
        { k: 'name', label: 'المحامي', strong: true },
        { k: 'spec', label: 'المجال', type: 'badge', map: mapOf(specNames) },
        { k: 'gov', label: 'المحافظة' },
        { k: 'union', label: 'النقابة', type: 'badge', map: { iraq: ['العراقيين', 'ok'], krd: ['كوردستان', 'ok'] } },
        { k: 'verified', label: 'آخر تحقق', type: 'date' },
        { k: 'due', label: 'إعادة التحقق', type: 'badge', get: (r) => (monthsSince(r.verified) >= Number(lcfg.reverifyMonths) ? 'due' : 'ok'), map: { due: ['مستحقة', 'err'], ok: ['سارية', 'ok'] } },
        { k: 'status', label: 'الظهور', type: 'badge', map: lStatus, get: (r) => r.status || 'active' }
      ],
      filters: [{ k: 'spec', label: 'المجالات', options: opts(specNames) }, { k: 'gov', label: 'المحافظات', options: govOpts }, { k: 'status', label: 'حالات الظهور', get: (r) => r.status || 'active', options: [{ v: 'active', l: 'ظاهر' }, { v: 'suspended', l: 'موقوف' }, { v: 'hidden', l: 'مخفي' }] }],
      fields: [
        { type: 'section', label: 'الملف العام' },
        { k: 'name', label: 'الاسم', required: true }, { k: 'id', label: 'المعرّف', dir: 'ltr', required: true },
        { k: 'spec', label: 'المجال الرئيسي', type: 'select', options: opts(specNames) }, { k: 'gov', label: 'المحافظة', type: 'select', options: govOpts },
        { k: 'union', label: 'النقابة', type: 'select', options: opts(unions) }, { k: 'barYear', label: 'سنة القيد', type: 'number', required: true },
        { k: 'langs', label: 'اللغات' }, { k: 'initial', label: 'الحرف في الصورة الرمزية' },
        { k: 'photo', label: 'رابط الصورة الشخصية', type: 'image', help: 'تظهر بعد التحقق من أنها صورة المحامي نفسه.' },
        { k: 'bio', label: 'النبذة', type: 'textarea', rows: 3, required: true },
        { k: 'areas', label: 'مجالات الممارسة التفصيلية', type: 'lines', rows: 3 }, { k: 'edu', label: 'المؤهلات', type: 'lines', rows: 3 },
        { type: 'section', label: 'التوثيق والظهور' },
        { k: 'verified', label: 'تاريخ آخر تحقق', type: 'date', required: true },
        { k: 'status', label: 'الظهور في الدليل', type: 'select', options: [{ v: 'active', l: 'ظاهر' }, { v: 'suspended', l: 'موقوف (شكوى أو انتهاء الهوية)' }, { v: 'hidden', l: 'مخفي بطلب المحامي' }] },
        { k: 'statusNote', label: 'سبب الإيقاف (داخلي)', type: 'textarea', rows: 2 },
        { k: 'rankInfo', label: 'الترتيب في الدليل', type: 'info', text: 'يُعرض المحامون بترتيب عشوائي متناوب. لا توجد في اللوحة أي وسيلة لتقديم محامٍ على آخر أو تمييزه مقابل مال، ولا تقييمات بالنجوم.' }
      ],
      blank: () => ({ spec: 'trade', gov: 'بغداد', union: 'iraq', langs: 'العربية', status: 'active', verified: today, areas: [], edu: [] }),
      validate: (r) => {
        if (thisYear - Number(r.barYear) < Number(lcfg.minYears)) return { barYear: 'يشترط مضيّ ' + yearsTxt(lcfg.minYears) + ' على القيد.' };
        if (r.verified > today) return { verified: 'تاريخ التحقق لا يكون في المستقبل.' };
        if (r.status === 'suspended' && !String(r.statusNote || '').trim()) return { statusNote: 'اذكر سبب الإيقاف.' };
        return '';
      },
      bulk: [{ label: 'إيقاف', apply: (r) => ({ ...r, status: 'suspended', statusNote: r.statusNote || 'إيقاف جماعي من اللوحة' }) }, { label: 'إظهار', apply: (r) => ({ ...r, status: 'active' }) }, { label: 'تجديد التحقق اليوم', apply: (r) => ({ ...r, verified: today }) }],
      preview: (r) => ({ kicker: 'موثّق · ' + (unions[r.union] || ''), title: r.name, body: r.bio, meta: [(specNames[r.spec] || '') + ' · ' + (r.gov || ''), 'في المهنة منذ ' + ar(r.barYear || ''), 'آخر تحقق: ' + ar(r.verified || '—')], note: (r.status || 'active') === 'active' ? '' : 'لن يظهر هذا المحامي في الدليل.' })
    };
    const cfgSchema = {
      group: 'lawyers', title: 'قواعد الدليل والتسجيل', desc: 'تطبَّق هذه القواعد على صفحة المحامين، وصفحة التسجيل، وقرارات طابور التوثيق.', roles: ['verifier'], siteHref: 'Lawyers.dc.html',
      defaults: lcfgDefaults,
      fields: [
        { type: 'section', label: 'شروط الانضمام' },
        { k: 'minYears', label: 'أقل عدد سنوات على القيد', type: 'number' }, { k: 'maxSpecs', label: 'أقصى عدد مجالات يختارها المحامي', type: 'number' },
        { k: 'reverifyMonths', label: 'إعادة التحقق كل (شهر)', type: 'number' },
        { k: 'order', label: 'ترتيب الدليل', type: 'select', options: [{ v: 'random', l: 'عشوائي متناوب (موصى به)' }, { v: 'alpha', l: 'أبجدي' }], help: 'لا يوجد خيار ترتيب مدفوع أو «مميّز».' },
        { k: 'specList', label: 'المجالات في نموذج التسجيل', type: 'lines', rows: 6 },
        { k: 'docs', label: 'المستندات المطلوبة في التسجيل', type: 'repeater', itemLabel: 'مستند', itemTitle: (d) => (d && d.label) || '', sub: [{ k: 'k', label: 'المعرّف', dir: 'ltr' }, { k: 'label', label: 'اسم المستند', wide: true }, { k: 'hint', label: 'التوضيح', wide: true }, { k: 'optional', label: 'إلزامي؟', type: 'toggle', on: 'اختياري', off: 'إلزامي' }] },
        { k: 'conditions', label: 'شروط الانضمام الظاهرة (اتركها فارغة لاستخدام الافتراضي)', type: 'repeater', itemLabel: 'شرط', sub: [{ k: 't', label: 'الشرط', wide: true }, { k: 'd', label: 'التوضيح', type: 'textarea', rows: 2 }] },
        { k: 'perks', label: 'لماذا تنضم؟', type: 'lines', rows: 4 },
        { type: 'section', label: 'أسماء المجالات في الدليل والرئيسية' },
        { k: 'allAreas', label: 'خيار «كل المجالات»' }, { k: 'spec_trade', label: 'التجاري' }, { k: 'spec_family', label: 'الأحوال الشخصية' }, { k: 'spec_penal', label: 'الجزائي' }, { k: 'spec_labor', label: 'العمل' }, { k: 'spec_estate', label: 'العقارات' }, { k: 'spec_admin', label: 'الإداري' }, { k: 'spec_arb', label: 'التحكيم' },
        { k: 'govs', label: 'المحافظات', type: 'lines', rows: 6 },
        { type: 'section', label: 'نصوص' },
        { k: 'badgeText', label: 'معنى علامة «موثّق» في ملف المحامي', type: 'textarea', rows: 2 },
        { k: 'emptyText', label: 'رسالة عدم وجود نتائج', type: 'textarea', rows: 2 },
        { k: 'disclaimer', label: 'سطر عدم التزكية (الصفحة الرئيسية)', type: 'textarea', rows: 2 },
        { k: 'demoNote', label: 'ملاحظة أعلى الدليل (اتركها فارغة لإخفائها)', type: 'textarea', rows: 2 },
        { k: 'areasNote', label: 'ملاحظة تحت مجالات الممارسة في الملف', type: 'textarea', rows: 2 },
        { k: 'bookBlurb', label: 'وصف طلب الاستشارة في الملف', type: 'textarea', rows: 2 }, { k: 'feesShort', label: 'سطر الأتعاب في الملف' }
      ],
      validate: (v) => ((v.govs || []).length < 1 ? { govs: 'أضف محافظة واحدة على الأقل.' } : Number(v.minYears) < 0 ? { minYears: 'قيمة غير صحيحة.' } : {}),
      preview: (v) => ({ kicker: 'معنى علامة «موثّق»', title: 'الدليل: ' + (v.order === 'alpha' ? 'ترتيب أبجدي' : 'ترتيب عشوائي متناوب'), body: v.badgeText, meta: ['الانضمام بعد ' + ar(v.minYears) + ' سنة قيد', 'إعادة التحقق كل ' + ar(v.reverifyMonths) + ' شهراً', ar((v.govs || []).length) + ' محافظة · ' + ar((v.specList || []).length) + ' مجالات'] })
    };
    const vals = { appSchema, dirSchema, cfgSchema };
    const TABS = [["queue", "طابور التوثيق"], ["dir", "دليل المحامين"], ["cfg", "قواعد الدليل والتسجيل"]];
    const tab = TABS.some((t) => t[0] === this.state.tab) ? this.state.tab : (TABS[0] || [''])[0];
    const flags = {}; TABS.forEach((t) => { flags['isT_' + t[0]] = t[0] === tab; });
    return { ...vals, ...flags, tabs: TABS.map((t) => ({ label: t[1], on: t[0] === tab ? 'true' : 'false', pick: () => this.setState({ tab: t[0] }) })) };
  }
}
return Component;
});
