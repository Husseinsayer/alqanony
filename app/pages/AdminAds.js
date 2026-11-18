MQ_DEF("AdminAds", "<div dir=\"rtl\" style=\"font-family: 'IBM Plex Sans Arabic', system-ui, sans-serif; color: #0F1E35; background: #FAF7F0; min-height: 100vh\">\n<dc-import name=\"AdminSidebar\" active=\"ads\" hint-size=\"264px,100%\"></dc-import>\n<main class=\"adm-main\" id=\"main\">\n<header style=\"display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 12px 24px; margin-bottom: 20px\">\n<div style=\"display: flex; flex-direction: column; gap: 6px; min-width: 0\">\n<span style=\"font-size: 13px; color: #3A4860\">لوحة التحكم / الإعلانات</span>\n<h1 style=\"margin: 0; font-size: clamp(24px, 3.4vw, 32px); font-weight: 700\">الإعلانات</h1>\n<p style=\"margin: 0; font-size: 15px; line-height: 1.8; color: #3A4860; max-width: 780px\">تحكّم في كل موضع إعلاني وحملته، واستقبل طلبات المعلنين، وطبّق سياسة الإعلانات. كل إعلان يحمل كلمة «إعلان» دائماً.</p>\n</div>\n\n</header>\n<div class=\"adm-tabs\" role=\"tablist\" aria-label=\"أقسام الصفحة\">\n<sc-for list=\"{{tabs}}\" as=\"t\" hint-placeholder-count=\"3\"><button type=\"button\" role=\"tab\" class=\"adm-tab\" aria-selected=\"{{t.on}}\" onClick=\"{{t.pick}}\">{{t.label}}</button></sc-for>\n</div>\n<sc-if value=\"{{isT_perf}}\" hint-placeholder-val=\"{{false}}\">\n<div style=\"display: flex; flex-direction: column; gap: 18px\">\n<p class=\"adm-note\" style=\"margin: 0\">أرقام تجريبية حتى ربط خادم الإعلانات.</p>\n<div class=\"perf-grid\"><sc-for list=\"{{kpis}}\" as=\"k\" hint-placeholder-count=\"4\"><div class=\"adm-card\" style=\"padding: 18px; display: flex; flex-direction: column; gap: 6px\"><span style=\"font-size: 13px; color: #3A4860\">{{k.label}}</span><span style=\"font-size: 28px; font-weight: 700\">{{k.v}}</span></div></sc-for></div>\n<div class=\"adm-card\" style=\"padding: 20px; display: flex; flex-direction: column; gap: 14px\">\n<h2 style=\"margin: 0; font-size: 17px; font-weight: 700\">نسبة النقر لكل حملة</h2>\n<sc-for list=\"{{bars}}\" as=\"b\" hint-placeholder-count=\"3\">\n<div style=\"display: grid; grid-template-columns: minmax(120px, 240px) minmax(0, 1fr) 64px; align-items: center; gap: 12px; font-size: 14px\">\n<span style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap\">{{b.label}}</span>\n<span style=\"height: 12px; border-radius: 4px 0 0 4px; background: #F6F3EC; display: flex\"><span title=\"{{b.v}}\" style=\"display: block; height: 12px; width: {{b.w}}; border-radius: 4px 0 0 4px; background: #2F5D9A\"></span></span>\n<span style=\"font-weight: 600; text-align: end\">{{b.v}}</span>\n</div>\n</sc-for>\n</div>\n</div>\n</sc-if>\n<sc-if value=\"{{isT_slots}}\" hint-placeholder-val=\"{{false}}\">\n<dc-import name=\"AdminCrud\" module=\"adSlots\" schema=\"{{slotSchema}}\" hint-size=\"100%,820px\"></dc-import>\n</sc-if>\n<sc-if value=\"{{isT_cmp}}\" hint-placeholder-val=\"{{false}}\">\n<dc-import name=\"AdminCrud\" module=\"campaigns\" schema=\"{{cmpSchema}}\" hint-size=\"100%,820px\"></dc-import>\n</sc-if>\n<sc-if value=\"{{isT_req}}\" hint-placeholder-val=\"{{false}}\">\n<dc-import name=\"AdminCrud\" module=\"adRequests\" schema=\"{{reqSchema}}\" hint-size=\"100%,820px\"></dc-import>\n</sc-if>\n<sc-if value=\"{{isT_policy}}\" hint-placeholder-val=\"{{false}}\">\n<dc-import name=\"AdminForm\" module=\"adPolicy\" schema=\"{{polSchema}}\" hint-size=\"100%,900px\"></dc-import>\n</sc-if>\n</main>\n</div>", "\nbody{margin:0;background:#FAF7F0}\na{color:#0F1E35}\n.adm-main{margin-inline-start:264px;padding:28px clamp(16px,3vw,40px) 72px;box-sizing:border-box;min-width:0}\n.adm-tabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid #E3DCCB;margin:0 0 22px;scrollbar-width:thin}\n.adm-tab{flex:0 0 auto;min-height:46px;padding:0 16px;border:0;border-bottom:2px solid transparent;background:transparent;font:inherit;font-size:15px;color:#3A4860;cursor:pointer;white-space:nowrap}\n.adm-tab[aria-selected=true]{color:#0F1E35;font-weight:700;border-bottom-color:#C9A24D}\n.adm-tab:focus-visible,.adm-btn:focus-visible{outline:2px solid #C9A24D;outline-offset:2px}\n.adm-card{border:1px solid #E3DCCB;border-radius:18px;background:#FFFFFF}\n.adm-note{padding:12px 16px;border-radius:12px;background:#F3EEE2;font-size:14px;line-height:1.8;color:#2B3A52}\n.adm-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:46px;padding:0 18px;border-radius:12px;font:inherit;font-size:14px;font-weight:600;cursor:pointer;white-space:nowrap;text-decoration:none;box-sizing:border-box}\n.adm-btn.pri{background:#C9A24D;border:1px solid #C9A24D;color:#0F1E35;font-weight:700}\n.adm-btn.sec{background:#FFFFFF;border:1px solid #8F8778;color:#0F1E35}\n.adm-btn.dan{background:#FFFFFF;border:1px solid #A3282B;color:#A3282B}\n.adm-btn:disabled{opacity:.45;cursor:not-allowed}\n.adm-in{height:46px;padding:0 14px;border:1px solid #8F8778;border-radius:12px;background:#FFFFFF;font:inherit;font-size:15px;color:#0F1E35;box-sizing:border-box;max-width:100%}\n.adm-in:focus{outline:2px solid #C9A24D;outline-offset:1px}\n.perf-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}@media (max-width:900px){.perf-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}\n@media (max-width:1100px){.adm-main{margin-inline-start:0;padding:20px 16px 56px}}\n", function (DCLogic, React) {
"use strict";
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { tab: 'perf' };
    this.S = {"adSlots": [{"id": "articles-leader", "page": "المقالات: تحت المقال المميّز", "size": "leader", "enabled": true, "campaign": "cmp-1", "fallback": "placeholder"}, {"id": "articles-infeed", "page": "المقالات: بين البطاقات", "size": "infeed", "enabled": true, "campaign": "", "fallback": "placeholder"}, {"id": "articles-mpu", "page": "المقالات: العمود الجانبي", "size": "mpu", "enabled": true, "campaign": "cmp-2", "fallback": "placeholder"}, {"id": "article-inline", "page": "قراءة المقال: بعد القسم الثاني", "size": "inline", "enabled": true, "campaign": "", "fallback": "placeholder"}, {"id": "article-mpu", "page": "قراءة المقال: بجانب الفهرس", "size": "mpu", "enabled": true, "campaign": "", "fallback": "placeholder"}], "campaigns": [{"id": "cmp-1", "advertiser": "دار الرافدين للنشر القانوني", "title": "المجموعة التشريعية العراقية – طبعة ٢٠٢٦", "text": "كل القوانين النافذة في مجلدات مفهرسة.", "category": "publishing", "image": "", "mobileImage": "", "link": "https://example.com/books", "start": "2026-11-01", "end": "2026-12-31", "status": "active", "priority": 1, "cap": 3, "impressions": 18420, "clicks": 212}, {"id": "cmp-2", "advertiser": "معهد بغداد للتدريب المهني", "title": "دورة صياغة العقود التجارية", "text": "تبدأ في كانون الأول، بشهادة معتمدة.", "category": "education", "image": "", "mobileImage": "", "link": "https://example.com/course", "start": "2026-11-05", "end": "2026-11-20", "status": "active", "priority": 2, "cap": 2, "impressions": 9310, "clicks": 141}, {"id": "cmp-3", "advertiser": "شركة حلول الأرشفة", "title": "أرشفة إلكترونية للمكاتب والشركات", "text": "", "category": "tech", "image": "", "mobileImage": "", "link": "https://example.com/archive", "start": "2026-12-01", "end": "2027-01-31", "status": "paused", "priority": 3, "cap": 3, "impressions": 0, "clicks": 0}], "adRequests": [{"id": "AR-1042", "company": "مطبعة دجلة", "contact": "d•••@mail.iq", "budget": "٥٠٠ ألف دينار شهرياً", "slots": "المقالات", "msg": "نود الإعلان عن خدمات طباعة العقود والنماذج.", "status": "new", "created": "2026-11-12", "note": ""}, {"id": "AR-1039", "company": "مكتب محاماة في بغداد", "contact": "07XX XXX 0091", "budget": "غير محدد", "slots": "كل الصفحات", "msg": "نود الإعلان عن مكتبنا.", "status": "declined", "created": "2026-11-07", "note": "مرفوض: سياسة المنصة لا تقبل إعلانات المحامين ومكاتب المحاماة."}], "govs": ["بغداد", "البصرة", "نينوى", "أربيل", "السليمانية", "دهوك", "حلبجة", "كركوك", "الأنبار", "صلاح الدين", "ديالى", "بابل", "كربلاء", "النجف", "واسط", "القادسية", "ذي قار", "ميسان", "المثنى"]};

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

    const polDefaults = { banLawyers: true, banPolitical: true, banGambling: true, banHealthClaims: true, label: 'إعلان', advertiseLabel: 'أعلن معنا', placeholder: 'مساحة إعلانية', houseText: 'ضع إعلانك هنا أمام قرّاء المحتوى القانوني', maxPerPage: 3, review: true,
      policyLine: 'الإعلانات منفصلة عن المحتوى التحريري وتحمل كلمة «إعلان»، ولا تؤثر في ما نكتبه. ولا نقبل إعلانات المحامين ومكاتب المحاماة.' };
    const pol = { ...polDefaults, ...(cms.adPolicy || {}) };
    const cats = { publishing: 'نشر وكتب', education: 'تعليم وتدريب', tech: 'تقنية', finance: 'خدمات مالية', government: 'جهات حكومية', lawyer: 'محامون ومكاتب محاماة', political: 'سياسي', gambling: 'مراهنات', health: 'صحة' };
    const banned = { lawyer: pol.banLawyers, political: pol.banPolitical, gambling: pol.banGambling, health: pol.banHealthClaims };
    const cmpAll = mergeL(S.campaigns, cms.campaigns);
    const slotsAll = mergeL(S.adSlots, cms.adSlots);
    const sizes = { leader: 'شريط عريض ٩٧٠×٩٠', inline: 'داخل النص ٧٢٨×٩٠', infeed: 'بين البطاقات', mpu: 'مربع ٣٠٠×٢٥٠' };
    const cStatus = { active: ['نشطة', 'navy'], paused: ['متوقفة', 'muted'], ended: ['منتهية', 'muted'], review: ['بانتظار المراجعة', 'gold'] };
    const slotSchema = {
      group: 'ads', singular: 'موضع', plural: 'المواضع الإعلانية', roles: ['ads'], seed: S.adSlots, titleKey: 'page', noCreate: true, noDelete: true,
      columns: [{ k: 'page', label: 'الموضع', strong: true }, { k: 'size', label: 'المقاس', type: 'badge', map: mapOf(sizes) }, { k: 'enabled', label: 'مفعّل', type: 'bool' }, { k: 'campaign', label: 'الحملة', get: (r) => ((cmpAll.find((c) => c.id === r.campaign) || {}).title || '— بلا حملة —') }],
      fields: [
        { k: 'page', label: 'الموضع', type: 'info' }, { k: 'size', label: 'المقاس', type: 'info', get: (r) => sizes[r.size] },
        { k: 'enabled', label: 'الحالة', type: 'toggle', on: 'مفعّل ويظهر في الصفحة', off: 'معطّل: لا يظهر شيء' },
        { k: 'campaign', label: 'الحملة المعروضة', type: 'select', options: [{ v: '', l: '— بلا حملة —' }].concat(cmpAll.map((c) => ({ v: c.id, l: c.title }))) },
        { k: 'fallback', label: 'حين لا توجد حملة نشطة', type: 'select', options: [{ v: 'placeholder', l: 'عرض «مساحة إعلانية»' }, { v: 'house', l: 'إعلان ذاتي: «أعلن معنا»' }, { v: 'hide', l: 'إخفاء الموضع' }] }
      ],
      bulk: [{ label: 'تفعيل', apply: (r) => ({ ...r, enabled: true }) }, { label: 'تعطيل', apply: (r) => ({ ...r, enabled: false }) }],
      preview: (r) => { const c = cmpAll.find((x) => x.id === r.campaign); return { kicker: pol.label + ' · ' + (sizes[r.size] || ''), title: !r.enabled ? 'الموضع معطّل' : c ? c.title : pol.placeholder, body: c && r.enabled ? c.text + '\n' + c.advertiser : '', meta: [r.page] }; },
      siteHref: 'Articles.dc.html'
    };
    const cmpSchema = {
      group: 'ads', singular: 'حملة', plural: 'الحملات', idPrefix: 'cmp', roles: ['ads'], seed: S.campaigns, searchKeys: ['title', 'advertiser'],
      columns: [{ k: 'title', label: 'الحملة', strong: true }, { k: 'advertiser', label: 'المعلن' }, { k: 'category', label: 'الفئة', type: 'badge', map: mapOf(cats) }, { k: 'end', label: 'تنتهي', type: 'date' }, { k: 'impressions', label: 'المشاهدات' }, { k: 'status', label: 'الحالة', type: 'badge', map: { ...cStatus, banned: ['محظورة بالسياسة', 'err'] }, get: (r) => (banned[r.category] ? 'banned' : r.status === 'active' && r.end && r.end < today ? 'ended' : r.status) }],
      filters: [{ k: 'status', label: 'الحالات', options: opts({ active: 'نشطة', paused: 'متوقفة', ended: 'منتهية', review: 'بانتظار المراجعة' }) }],
      fields: [
        { k: 'title', label: 'عنوان الإعلان', required: true, wide: true }, { k: 'advertiser', label: 'المعلن', required: true },
        { k: 'category', label: 'فئة النشاط', type: 'select', options: opts(cats) }, { k: 'text', label: 'نص قصير', wide: true },
        { k: 'image', label: 'صورة الكمبيوتر (بالمقاس الصحيح)', type: 'image' }, { k: 'mobileImage', label: 'صورة الجوال (٣٢٠×١٠٠ أو ٣٠٠×٢٥٠)', type: 'image' },
        { k: 'link', label: 'رابط الوجهة', dir: 'ltr', required: true },
        { k: 'start', label: 'البداية', type: 'date', required: true }, { k: 'end', label: 'النهاية', type: 'date', required: true },
        { k: 'priority', label: 'الأولوية', type: 'number', help: 'للتدوير بين حملات الموضع الواحد؛ يطبّقه خادم الإعلانات.' }, { k: 'cap', label: 'أقصى مرات الظهور للزائر يومياً', type: 'number', help: 'يطبّقه خادم الإعلانات.' },
        { k: 'status', label: 'الحالة', type: 'select', options: opts({ review: 'بانتظار المراجعة', active: 'نشطة', paused: 'متوقفة', ended: 'منتهية' }) }
      ],
      blank: () => ({ category: 'publishing', status: 'review', priority: 5, cap: 3, impressions: 0, clicks: 0, start: today, end: today }),
      validate: (r, ctx) => {
        if (ctx.isNew && pol.review && r.status === 'active') return { status: 'سياسة الإعلانات تشترط مراجعة كل حملة جديدة: احفظها «بانتظار المراجعة» ثم فعّلها بعد مراجعتها.' };
        if (banned[r.category]) return 'فئة «' + cats[r.category] + '» ممنوعة وفق سياسة الإعلانات. عدّل السياسة أولاً إن قررت الإدارة ذلك.';
        if (!/^https:\/\//.test(r.link || '')) return { link: 'استخدم رابطاً آمناً يبدأ بـ https://' };
        if (r.end < r.start) return { end: 'النهاية قبل البداية.' };
        return '';
      },
      bulk: [{ label: 'إيقاف', apply: (r) => ({ ...r, status: 'paused' }) }, { label: 'تفعيل', apply: (r) => ({ ...r, status: 'active' }) }],
      preview: (r) => ({ kicker: pol.label, title: r.title, body: (r.text || '') + '\n' + (r.advertiser || ''), meta: ['من ' + (r.start || '') + ' إلى ' + (r.end || ''), 'نسبة النقر: ' + (r.impressions ? (100 * r.clicks / r.impressions).toFixed(2) + '٪' : '—')], note: 'يظهر الإعلان بوسم «' + pol.label + '» ومنفصلاً بصرياً عن المحتوى.' })
    };
    const reqSchema = {
      group: 'ads', singular: 'طلب', plural: 'طلبات المعلنين', siteless: true, seed: S.adRequests, titleKey: 'company', noCreate: true, editLabel: 'فتح',
      columns: [{ k: 'company', label: 'الجهة', strong: true }, { k: 'budget', label: 'الميزانية' }, { k: 'slots', label: 'المواضع المطلوبة' }, { k: 'created', label: 'التاريخ', type: 'date' }, { k: 'status', label: 'الحالة', type: 'badge', map: { new: ['جديد', 'gold'], contacted: ['تم التواصل', 'ok'], won: ['تحوّل إلى حملة', 'navy'], declined: ['مرفوض', 'err'] } }],
      fields: [{ k: 'company', label: 'الجهة', type: 'info' }, { k: 'contact', label: 'التواصل (مخفي جزئياً)', type: 'info' }, { k: 'msg', label: 'الرسالة', type: 'info' }, { k: 'status', label: 'الحالة', type: 'select', options: opts({ new: 'جديد', contacted: 'تم التواصل', won: 'تحوّل إلى حملة', declined: 'مرفوض' }) }, { k: 'note', label: 'ملاحظة', type: 'textarea', rows: 3 }],
      badge: (rows) => rows.filter((r) => r.status === 'new').length,
      preview: (r) => ({ kicker: 'طلب إعلان', title: r.company, body: r.msg, meta: ['الميزانية: ' + r.budget] })
    };
    const polSchema = {
      group: 'ads', title: 'سياسة الإعلانات', desc: 'قواعد مفروضة على كل حملة قبل حفظها، ونصوص تظهر في المواضع الإعلانية.', roles: ['ads'], defaults: polDefaults, siteHref: 'Articles.dc.html',
      fields: [
        { type: 'section', label: 'الفئات الممنوعة' },
        { k: 'banLawyers', label: 'المحامون ومكاتب المحاماة', type: 'toggle', on: 'ممنوع', off: 'مسموح' }, { k: 'banPolitical', label: 'الإعلانات السياسية', type: 'toggle', on: 'ممنوع', off: 'مسموح' },
        { k: 'banGambling', label: 'المراهنات', type: 'toggle', on: 'ممنوع', off: 'مسموح' }, { k: 'banHealthClaims', label: 'الادعاءات الصحية', type: 'toggle', on: 'ممنوع', off: 'مسموح' },
        { type: 'section', label: 'قواعد العرض' },
        { k: 'label', label: 'وسم الإعلان', required: true, help: 'إلزامي في كل موضع.' }, { k: 'advertiseLabel', label: 'نص رابط «أعلن معنا»' },
        { k: 'placeholder', label: 'نص الموضع الفارغ' }, { k: 'houseText', label: 'نص الإعلان الذاتي «أعلن معنا»' },
        { k: 'maxPerPage', label: 'أقصى عدد إعلانات في الصفحة', type: 'number', help: 'يطبّقه خادم الإعلانات عند الربط؛ المواضع الحالية في صفحة المقالات خمسة.' },
        { k: 'review', label: 'مراجعة الحملات', type: 'toggle', on: 'كل حملة جديدة تُراجع قبل التفعيل', off: 'بلا مراجعة' },
        { k: 'policyLine', label: 'سطر السياسة الظاهر للزوار', type: 'textarea', rows: 3 }
      ],
      preview: (v) => ({ kicker: v.label + ' · ' + v.advertiseLabel, title: v.placeholder, body: v.policyLine })
    };
    const imp = cmpAll.reduce((s, c) => s + Number(c.impressions || 0), 0), clk = cmpAll.reduce((s, c) => s + Number(c.clicks || 0), 0);
    const maxCtr = Math.max(0.01, ...cmpAll.map((c) => (c.impressions ? c.clicks / c.impressions : 0)));
    const vals = {
      slotSchema, cmpSchema, reqSchema, polSchema,
      kpis: [{ label: 'المشاهدات هذا الشهر', v: imp.toLocaleString('ar-IQ') }, { label: 'النقرات', v: clk.toLocaleString('ar-IQ') }, { label: 'نسبة النقر', v: imp ? ar((100 * clk / imp).toFixed(2)) + '٪' : '—' }, { label: 'المواضع المفعّلة', v: ar(slotsAll.filter((s) => s.enabled).length) + ' من ' + ar(slotsAll.length) }],
      bars: cmpAll.map((c) => { const r = c.impressions ? c.clicks / c.impressions : 0; return { label: c.title, w: Math.round((r / maxCtr) * 100) + '%', v: ar((100 * r).toFixed(2)) + '٪' }; })
    };
    const TABS = [["perf", "الأداء"], ["slots", "المواضع"], ["cmp", "الحملات"], ["req", "طلبات المعلنين"], ["policy", "السياسة"]];
    const tab = TABS.some((t) => t[0] === this.state.tab) ? this.state.tab : (TABS[0] || [''])[0];
    const flags = {}; TABS.forEach((t) => { flags['isT_' + t[0]] = t[0] === tab; });
    return { ...vals, ...flags, tabs: TABS.map((t) => ({ label: t[1], on: t[0] === tab ? 'true' : 'false', pick: () => this.setState({ tab: t[0] }) })) };
  }
}
return Component;
});
