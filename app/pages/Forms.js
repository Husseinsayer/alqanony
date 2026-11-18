MQ_DEF("Forms", "<div dir=\"rtl\" style=\"font-family: 'IBM Plex Sans Arabic', system-ui, sans-serif; color: #0F1E35; background: #FAF7F0; min-height: 100vh\">\n<dc-import name=\"Header\" active=\"services\" hint-size=\"100%,81px\"></dc-import>\n<main id=\"main\" ref=\"{{topRef}}\" tabindex=\"-1\" style=\"outline: none\">\n\n<sc-if value=\"{{showList}}\" hint-placeholder-val=\"{{true}}\">\n<section style=\"background: #0F1E35\">\n<div style=\"max-width: 1240px; margin: 0 auto; padding: clamp(40px, 6vw, 64px) 20px clamp(96px, 10vw, 120px); display: flex; flex-direction: column; gap: 14px\">\n<span style=\"font-size: 14px; color: #AEB8C8\"><a href=\"Services.dc.html\" style=\"color: #AEB8C8\">الخدمات</a> / النماذج القانونية</span>\n<h1 style=\"margin: 0; font-size: clamp(28px, 5.5vw, 44px); font-weight: 700; color: #FFFFFF\">{{pgHero.t1}}<sc-if value=\"{{pgHero.hasT2}}\" hint-placeholder-val=\"{{false}}\"><br>{{pgHero.t2}}</sc-if></h1>\n<p style=\"margin: 0; font-size: clamp(16px, 2.4vw, 18px); line-height: 1.8; color: #D5DBE5; max-width: 620px\">{{pgHero.text}}</p>\n<form role=\"search\" onSubmit=\"{{noSubmit}}\" class=\"fw\" style=\"margin-top: 10px; display: flex; align-items: center; gap: 10px; height: 56px; padding: 0 16px; background: #FFFFFF; border-radius: 16px; max-width: 560px; box-sizing: border-box\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#3A4860\" stroke-width=\"1.8\" stroke-linecap=\"round\" aria-hidden=\"true\"><circle cx=\"11\" cy=\"11\" r=\"7\"></circle><path d=\"M20 20l-3.5-3.5\"></path></svg>\n<label for=\"fm-q\" style=\"position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)\">ابحث عن نموذج</label>\n<input id=\"fm-q\" type=\"search\" value=\"{{q}}\" onChange=\"{{onQ}}\" placeholder=\"ابحث عن نموذج، مثل: إيجار\" style=\"flex: 1; min-width: 0; border: none; outline: none; background: transparent; font: inherit; font-size: 16px; color: #0F1E35\">\n</form>\n</div>\n</section>\n\n<section style=\"position: relative; margin-top: -56px; background: #FFFFFF; border-radius: clamp(24px, 4vw, 40px); box-shadow: 0 -24px 48px -32px rgba(11,23,41,0.6)\">\n<div style=\"max-width: 1240px; margin: 0 auto; padding: clamp(32px, 5vw, 48px) 20px clamp(48px, 7vw, 80px)\">\n<div role=\"group\" aria-label=\"تصنيف النماذج\" style=\"display: flex; flex-wrap: nowrap; overflow-x: auto; gap: 8px; padding-bottom: 4px; margin-bottom: 24px\">\n<sc-for list=\"{{cats}}\" as=\"c\" hint-placeholder-count=\"6\">\n<button type=\"button\" aria-pressed=\"{{c.on}}\" onClick=\"{{c.pick}}\" style=\"flex: 0 0 auto; min-height: 44px; padding: 0 18px; border-radius: 999px; border: 1px solid {{c.border}}; background: {{c.bg}}; color: {{c.fg}}; font: inherit; font-size: 15px; font-weight: 500; cursor: pointer; white-space: nowrap\">{{c.label}}</button>\n</sc-for>\n</div>\n<p role=\"status\" style=\"margin: 0 0 18px; font-size: 14px; color: #3A4860\">{{countLabel}}</p>\n<div class=\"fm-grid\">\n<sc-for list=\"{{forms}}\" as=\"f\" hint-placeholder-count=\"6\">\n<a class=\"card\" href=\"#main\" onClick=\"{{f.open}}\" style=\"display: flex; flex-direction: column; gap: 12px; padding: 22px; border: 1px solid #E3DCCB; border-radius: 20px; background: #FFFFFF; color: #0F1E35\">\n<div style=\"display: flex; align-items: center; justify-content: space-between; gap: 12px\">\n<span style=\"width: 46px; height: 46px; border-radius: 14px; background: #F3EEE2; display: flex; align-items: center; justify-content: center\">\n<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#0F1E35\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h4\"></path></svg>\n</span>\n<span style=\"font-size: 12px; color: #2B3A52; background: #F3EEE2; padding: 4px 12px; border-radius: 999px\">{{f.catLabel}}</span>\n</div>\n<h2 style=\"margin: 0; font-size: 18px; font-weight: 700; line-height: 1.6\">{{f.title}}</h2>\n<p style=\"margin: 0; font-size: 14px; line-height: 1.8; color: #3A4860; flex: 1\">{{f.desc}}</p>\n<span style=\"font-size: 13px; color: #3A4860\">{{f.need}}</span>\n<span style=\"padding-top: 12px; border-top: 1px solid #F0EBDF; font-size: 14px; font-weight: 600\">معاينة النموذج ←</span>\n</a>\n</sc-for>\n</div>\n<sc-if value=\"{{empty}}\" hint-placeholder-val=\"{{false}}\">\n<p style=\"margin: 0; padding: 48px 0; text-align: center; color: #3A4860; font-size: 16px\">لا توجد نماذج مطابقة لبحثك.</p>\n</sc-if>\n</div>\n</section>\n</sc-if>\n\n<sc-if value=\"{{showForm}}\" hint-placeholder-val=\"{{false}}\">\n<section style=\"background: #0F1E35\">\n<div style=\"max-width: 1240px; margin: 0 auto; padding: 24px 20px clamp(96px, 10vw, 112px); display: flex; flex-direction: column; gap: 14px\">\n<button type=\"button\" onClick=\"{{back}}\" style=\"align-self: flex-start; display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 16px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.3); background: transparent; color: #E6EAF0; font: inherit; font-size: 14px; cursor: pointer\">\n<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#E6EAF0\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M9 6l6 6-6 6\"></path></svg>العودة إلى النماذج</button>\n<span style=\"margin-top: 12px; font-size: 14px; color: #AEB8C8\">النماذج القانونية / {{sel.catLabel}}</span>\n<h1 ref=\"{{titleRef}}\" tabindex=\"-1\" style=\"margin: 0; font-size: clamp(26px, 5vw, 40px); font-weight: 700; color: #FFFFFF; outline: none\">{{sel.title}}</h1>\n</div>\n</section>\n\n<section style=\"max-width: 1240px; margin: -56px auto 0; padding: 0 20px; position: relative; display: flex; flex-wrap: wrap; gap: 24px; align-items: flex-start; box-sizing: border-box\">\n<div style=\"flex: 999 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 18px\">\n<div role=\"note\" style=\"display: flex; gap: 12px; padding: 18px 20px; border-radius: 18px; background: #FFFFFF; border: 1.5px solid #C9A24D; box-shadow: 0 24px 48px -32px rgba(15,30,53,0.35)\">\n<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#0F1E35\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"flex: 0 0 22px; margin-top: 3px\"><path d=\"M12 3l9 16H3z\"></path><path d=\"M12 10v4M12 17h.01\"></path></svg>\n<div style=\"display: flex; flex-direction: column; gap: 4px\"><span style=\"font-size: 16px; font-weight: 700\">قبل أن تستخدم هذا النموذج</span><span style=\"font-size: 15px; line-height: 1.9; color: #2B3A52\">{{sel.warn}}</span><span style=\"font-size: 13px; color: #3A4860\">{{sel.basis}}</span></div>\n</div>\n<div style=\"background: #FFFFFF; border-radius: clamp(20px, 3vw, 28px); padding: clamp(14px, 3vw, 24px)\">\n<div style=\"background: #FCFBF8; border: 1px solid #E3DCCB; border-radius: 12px; padding: clamp(22px, 5vw, 52px) clamp(18px, 5vw, 60px); display: flex; flex-direction: column; gap: 16px; font-size: 15px; line-height: 2.1; color: #2B3A52\">\n<div style=\"text-align: center; display: flex; flex-direction: column; gap: 4px; padding-bottom: 14px; border-bottom: 1px solid #E3DCCB\">\n<span style=\"font-size: 13px; color: #3A4860\">{{sel.topLine}}</span>\n<span style=\"font-size: clamp(19px, 3.5vw, 23px); font-weight: 700; color: #0F1E35\">{{sel.docTitle}}</span>\n</div>\n<p style=\"margin: 0\">{{sel.opening}}</p>\n<sc-for list=\"{{sel.fields}}\" as=\"x\" hint-placeholder-count=\"4\">\n<div style=\"display: flex; flex-wrap: wrap; gap: 4px 12px\"><span style=\"font-weight: 600; color: #0F1E35\">{{x}}:</span><span style=\"flex: 1; min-width: 140px; border-bottom: 1px dashed #8F8778\"></span></div>\n</sc-for>\n<sc-for list=\"{{sel.clauses}}\" as=\"c\" hint-placeholder-count=\"3\">\n<p style=\"margin: 0\"><span style=\"font-weight: 700; color: #0F1E35\">{{c.n}}</span> {{c.text}}</p>\n</sc-for>\n<div style=\"display: flex; flex-wrap: wrap; justify-content: space-between; gap: 24px; margin-top: 20px\">\n<sc-for list=\"{{sel.signs}}\" as=\"s\" hint-placeholder-count=\"2\">\n<div style=\"flex: 1 1 160px; display: flex; flex-direction: column; gap: 22px; text-align: center\"><span style=\"font-weight: 600; color: #0F1E35\">{{s}}</span><span style=\"border-bottom: 1px solid #8F8778\"></span><span style=\"font-size: 13px; color: #3A4860\">الاسم والتوقيع</span></div>\n</sc-for>\n</div>\n</div>\n</div>\n</div>\n\n<aside style=\"flex: 1 1 280px; min-width: 0; background: #FFFFFF; border-radius: clamp(20px, 3vw, 28px); padding: 24px; display: flex; flex-direction: column; gap: 14px; box-shadow: 0 24px 48px -32px rgba(15,30,53,0.35)\">\n<h2 style=\"margin: 0; font-size: 18px; font-weight: 700\">عن هذا النموذج</h2>\n<p style=\"margin: 0; font-size: 14px; line-height: 1.9; color: #2B3A52\">{{sel.desc}}</p>\n<div style=\"display: flex; flex-direction: column; gap: 10px; font-size: 14px; padding: 12px 0; border-top: 1px solid #F0EBDF; border-bottom: 1px solid #F0EBDF\">\n<div style=\"display: flex; justify-content: space-between; gap: 12px\"><span style=\"color: #3A4860\">النوع</span><span style=\"font-weight: 600\">{{sel.kindLabel}}</span></div>\n<div style=\"display: flex; justify-content: space-between; gap: 12px\"><span style=\"color: #3A4860\">يحتاج</span><span style=\"font-weight: 600; text-align: end\">{{sel.need}}</span></div>\n</div>\n<div class=\"side-actions\" style=\"display: flex; flex-direction: column; gap: 10px\">\n<button type=\"button\" onClick=\"{{print}}\" style=\"min-height: 52px; border: none; border-radius: 14px; background: #C9A24D; color: #0F1E35; font: inherit; font-size: 16px; font-weight: 700; cursor: pointer\">طباعة المسودة</button>\n<button type=\"button\" onClick=\"{{download}}\" style=\"min-height: 48px; border: 1px solid #8F8778; border-radius: 14px; background: #FFFFFF; color: #0F1E35; font: inherit; font-size: 15px; cursor: pointer\">تنزيل PDF أو Word</button>\n</div>\n<span style=\"font-size: 13px; line-height: 1.8; color: #3A4860\">{{sel.versionLine}}</span>\n<sc-if value=\"{{hasDisclaimer}}\" hint-placeholder-val=\"{{true}}\"><span style=\"font-size: 13px; line-height: 1.8; color: #3A4860\">{{formsDisclaimer}}</span></sc-if>\n<sc-if value=\"{{hasNotice}}\" hint-placeholder-val=\"{{false}}\">\n<p role=\"status\" style=\"margin: 0; font-size: 13px; line-height: 1.8; color: #2B3A52; background: #F3EEE2; border-radius: 12px; padding: 12px 14px\">{{notice}}</p>\n</sc-if>\n<p style=\"margin: 0; font-size: 13px; line-height: 1.8; color: #3A4860\">لمراجعة الصياغة حسب حالتك <a href=\"Lawyers.dc.html\" style=\"color: #0F1E35; font-weight: 700; text-decoration: underline; text-decoration-color: #C9A24D; text-underline-offset: 5px\">استشر محامياً</a>.</p>\n</aside>\n</section>\n<div class=\"mbar\" style=\"position: sticky; bottom: 0; z-index: 4; margin-top: 20px; padding: 12px 20px calc(12px + env(safe-area-inset-bottom)); background: rgba(255,255,255,0.97); box-shadow: 0 -8px 24px -16px rgba(15,30,53,0.4); gap: 10px\">\n<button type=\"button\" onClick=\"{{download}}\" style=\"flex: 1; min-height: 48px; border: 1px solid #8F8778; border-radius: 12px; background: #FFFFFF; color: #0F1E35; font: inherit; font-size: 15px; cursor: pointer\">تنزيل</button>\n<button type=\"button\" onClick=\"{{print}}\" style=\"flex: 1; min-height: 48px; border: none; border-radius: 12px; background: #C9A24D; color: #0F1E35; font: inherit; font-size: 15px; font-weight: 700; cursor: pointer\">طباعة</button>\n</div>\n</sc-if>\n\n</main>\n<div style=\"height: clamp(64px, 9vw, 112px)\"></div>\n<dc-import name=\"Footer\" hint-size=\"100%,460px\"></dc-import>\n</div>", "\nbody{margin:0;background:#FAF7F0}\na{color:#0F1E35;text-decoration:none}\n:focus-visible{outline:2px solid #C9A24D;outline-offset:2px}\n.fw:focus-within{outline:2px solid #C9A24D;outline-offset:2px}\n.fm-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}\n@media (max-width:1000px){.fm-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}\n@media (max-width:640px){.fm-grid{grid-template-columns:minmax(0,1fr)}}\n.card:hover{box-shadow:0 18px 36px -24px rgba(15,30,53,0.45)}\n.mbar{display:none}\n@media (max-width:860px){.mbar{display:flex}.side-actions{display:none !important}}\n", function (DCLogic, React) {
"use strict";
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { cat: 'all', q: '', sel: null, notice: '' };
    this.titleRef = (el) => { this.titleEl = el; };
    this.topRef = (el) => { this.topEl = el; };
  }
  componentDidMount() {
    try { const id = window.localStorage.getItem('mq_form'); if (id) { window.localStorage.removeItem('mq_form'); this.setState({ sel: id }); } } catch (e) {}
  }
  componentDidUpdate(pp, ps) {
    if (ps.sel !== this.state.sel) {
      const el = this.state.sel ? this.titleEl : this.topEl;
      try { if (el) { el.focus({ preventScroll: true }); el.scrollIntoView({ block: 'start' }); } } catch (e) {}
    }
  }
  renderVals() {
    const cms = (() => { try { return JSON.parse(window.localStorage.getItem('mq_cms') || '{}') || {}; } catch (e) { return {}; } })();
    const mergeL = (seed, c, idk) => { idk = idk || 'id'; c = c || {}; const up = c.upsert || {}; const rm = new Set(c.removed || []); const out = (seed || []).filter((r) => !rm.has(r[idk])).map((r) => (up[r[idk]] ? { ...r, ...up[r[idk]] } : r)); Object.keys(up).forEach((id) => { if (!rm.has(id) && !(seed || []).some((r) => r[idk] === id)) out.push(up[id]); }); return out; };
    const isPub = (r) => (r.state || 'published') === 'published';
    const pgc = cms.pages || {};
    const pgHero = { t1: pgc.forms_t1 || "النماذج القانونية", t2: pgc.forms_t1 != null ? (pgc.forms_t2 || '') : "", text: pgc.forms_text || "نماذج إرشادية تساعدك على تحضير المحتوى، ولكل منها تنبيه بما يلزمه من تسجيل أو تصديق رسمي." };
    pgHero.hasT2 = !!pgHero.t2;
    const D = '٠١٢٣٤٥٦٧٨٩', P = '۰۱۲۳۴۵۶۷۸۹';
    const toW = (s) => String(s).replace(/[٠-٩]/g, (d) => D.indexOf(d)).replace(/[۰-۹]/g, (d) => P.indexOf(d));
    const ar = (s) => String(s).replace(/[0-9]/g, (d) => D[d]);
    const norm = (s) => toW(s).toLowerCase().replace(/[ً-ْـ]/g, '').replace(/[أإآٱ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي').replace(/\s+/g, ' ').trim();
    const names = { all: 'الكل', contracts: 'العقود', poa: 'الوكالات', suits: 'الدعاوى والطعون', labor: 'العمل', family: 'الأحوال الشخصية' };
    const kinds = {
      contract: { label: 'عقد', top: 'جمهورية العراق', opening: 'إنه في يوم ........ الموافق ..../..../........ اتفق كل من:' },
      petition: { label: 'عريضة إلى المحكمة', top: 'إلى محكمة ........ المحترمة', opening: 'نتقدم بهذه العريضة وفق البيانات الآتية:' },
      letter: { label: 'إشعار', top: 'إلى / ........ المحترم', opening: 'تحية طيبة، وبعد:' },
      poa: { label: 'مسودة لدى الكاتب العدل', top: 'مسودة إرشادية لمحتوى الوكالة', opening: 'يُعرض هذا المحتوى على الكاتب العدل لتنظيم الوكالة أو تصديقها:' }
    };
    const ord = ['أولاً', 'ثانياً', 'ثالثاً', 'رابعاً', 'خامساً', 'سادساً', 'سابعاً', 'ثامناً', 'تاسعاً', 'عاشراً'];
    const fcfg = cms.formsCfg || {};
    Object.keys(names).forEach((k) => { if (fcfg['cat_' + k]) names[k] = fcfg['cat_' + k]; });
    Object.keys(kinds).forEach((k) => { if (fcfg['kind_' + k]) kinds[k] = { ...kinds[k], label: fcfg['kind_' + k] }; });
    const all = mergeL([
      { id: 'rent-home', title: 'عقد إيجار سكني', cat: 'contracts', kind: 'contract', need: 'توقيع الطرفين وشاهدين',
        desc: 'ينظّم العلاقة بين المؤجر والمستأجر لعقار سكني: الأجرة والمدة وحالة العقار والتزامات الطرفين.',
        warn: 'أحكام التخلية وامتداد العقد والإيجار من الباطن يحكمها قانون إيجار العقار النافذ ولا يجوز الاتفاق على خلافها. راجع كذلك واجب إيداع نسخة من العقد لدى دائرة ضريبة العقار.',
        basis: 'قانون إيجار العقار رقم ٨٧ لسنة ١٩٧٩ (المعدّل)',
        fields: ['المؤجر (الاسم الكامل ورقم الهوية)', 'المستأجر (الاسم الكامل ورقم الهوية)', 'عنوان العقار ورقمه', 'الأجرة الشهرية وطريقة دفعها', 'مدة الإيجار وتاريخ بدئها', 'مبلغ التأمين إن وُجد'],
        clauses: ['يقر المستأجر باستلام العقار بالحالة المبيّنة في محضر الجرد المرفق بهذا العقد.', 'تُدفع الأجرة في الموعد المتفق عليه مقابل وصل موقّع من المؤجر.', 'يتحمل المستأجر أجور الماء والكهرباء خلال مدة العقد ما لم يُتفق على خلاف ذلك.', 'يُراعى في التخلية والإيجار من الباطن وامتداد العقد ما يقرره قانون إيجار العقار النافذ.'],
        signs: ['المؤجر', 'المستأجر', 'الشاهدان'] },
      { id: 'rent-shop', title: 'عقد إيجار محل تجاري', cat: 'contracts', kind: 'contract', need: 'توقيع الطرفين وشاهدين',
        desc: 'لإيجار محل أو مكتب لنشاط تجاري، مع تحديد النشاط المسموح به وتوزيع النفقات.',
        warn: 'بعض العقارات التجارية مستثناة من أحكام قانون إيجار العقار، وأحكام التجديد والامتداد تختلف بحسب نوع العقار. راجع محامياً قبل التوقيع.',
        basis: 'قانون إيجار العقار رقم ٨٧ لسنة ١٩٧٩ (المعدّل)',
        fields: ['المؤجر', 'المستأجر', 'عنوان المحل ورقمه', 'النشاط التجاري المسموح به', 'الأجرة والمدة'],
        clauses: ['يلتزم المستأجر بممارسة النشاط المذكور فقط ما لم يوافق المؤجر كتابةً على غيره.', 'يتحمل المستأجر رسوم الخدمات خلال مدة العقد ما لم يُتفق على خلاف ذلك.', 'يخضع تجديد العقد وامتداده للقانون النافذ.'],
        signs: ['المؤجر', 'المستأجر'] },
      { id: 'car', title: 'اتفاق أولي على بيع مركبة', cat: 'contracts', kind: 'contract', need: 'التسجيل لدى مديرية المرور',
        desc: 'اتفاق تمهيدي بين البائع والمشتري يسبق تسجيل نقل ملكية المركبة.',
        warn: 'لا يكتمل بيع المركبة إلا بتسجيل نقل الملكية لدى مديرية المرور، وتبقى المركبة مسجلة باسم البائع حتى ذلك الحين. هذا الاتفاق لا ينقل الملكية وحده.',
        basis: 'قانون المرور رقم ٨ لسنة ٢٠١٩',
        fields: ['البائع', 'المشتري', 'نوع المركبة وموديلها', 'رقم اللوحة ورقم الهيكل (الشاصي)', 'الثمن وطريقة دفعه'],
        clauses: ['يقر البائع بخلو المركبة من أي حجز أو رهن، ويقدّم براءة ذمة من الغرامات المرورية.', 'يتعهد الطرفان بمراجعة مديرية المرور لتسجيل نقل الملكية خلال ........ يوماً من تاريخ هذا الاتفاق.', 'يحدد الطرفان من يتحمل المسؤولية عن المركبة حتى إتمام التسجيل.'],
        signs: ['البائع', 'المشتري'] },
      { id: 'property', title: 'تعهد بنقل ملكية عقار', cat: 'contracts', kind: 'contract', need: 'التسجيل في دائرة التسجيل العقاري',
        desc: 'تعهد يسبق التسجيل الرسمي، ولا يُعدّ بيعاً للعقار.',
        warn: 'بيع العقار لا ينعقد إلا بتسجيله في دائرة التسجيل العقاري. هذا التعهد لا ينقل الملكية، وأثره عند الإخلال يقتصر في الأصل على التعويض. العربون والشرط الجزائي حكمان مختلفان، فاستشر محامياً قبل دفع أي مبلغ.',
        basis: 'المادتان ٥٠٨ و١١٢٧ من القانون المدني، والمادة ٣ من قانون التسجيل العقاري',
        fields: ['الطرف الأول (المالك)', 'الطرف الثاني', 'رقم العقار وتسلسله وموقعه', 'مساحة العقار', 'المبلغ المتفق عليه'],
        clauses: ['يتعهد الطرف الأول بنقل ملكية العقار وتسجيله باسم الطرف الثاني في دائرة التسجيل العقاري خلال ........ يوماً.', 'يُدفع الثمن أو باقيه عند إتمام التسجيل في الدائرة المختصة.', 'يحدد الطرفان أثر العدول أو الإخلال بعد استشارة محامٍ.'],
        signs: ['الطرف الأول', 'الطرف الثاني'] },
      { id: 'poa-general', title: 'مسودة وكالة عامة', cat: 'poa', kind: 'poa', need: 'التنظيم لدى الكاتب العدل',
        desc: 'لتحضير محتوى وكالة عامة قبل مراجعة الكاتب العدل.',
        warn: 'لا تكون الوكالة نافذة إلا إذا نُظّمت أو صُدّقت لدى الكاتب العدل. هذه المسودة لتحضير المحتوى فقط، ولا يجوز توقيعها على أنها وكالة.',
        basis: 'قانون الكاتب العدل رقم ٣٣ لسنة ١٩٩٨',
        fields: ['الموكّل (الاسم الكامل ورقم الهوية)', 'الوكيل (الاسم الكامل ورقم الهوية)', 'نطاق التصرفات المخوّلة'],
        clauses: ['تُحدَّد التصرفات المخوّلة للوكيل بدقة، ويُذكر ما يُستثنى منها.', 'تنتهي الوكالة بإنجاز موضوعها أو بعزل الوكيل أو بوفاة أحد الطرفين، في الحدود التي يقررها القانون.'],
        signs: ['الموكّل'] },
      { id: 'poa-special', title: 'مسودة وكالة خاصة', cat: 'poa', kind: 'poa', need: 'التنظيم لدى الكاتب العدل',
        desc: 'لتحضير محتوى وكالة في تصرف محدد بعينه.',
        warn: 'لا تكون الوكالة نافذة إلا إذا نُظّمت أو صُدّقت لدى الكاتب العدل. الوكالات المتصلة بالتصرفات العقارية لا تُبرم إلكترونياً.',
        basis: 'قانون الكاتب العدل رقم ٣٣ لسنة ١٩٩٨، والمادة ٣ من قانون التوقيع الإلكتروني',
        fields: ['الموكّل', 'الوكيل', 'موضوع الوكالة بالتحديد', 'مدة الوكالة إن وُجدت'],
        clauses: ['تقتصر صلاحيات الوكيل على الموضوع المحدد أعلاه.', 'تنتهي الوكالة بإنجاز موضوعها أو بانتهاء مدتها.'],
        signs: ['الموكّل'] },
      { id: 'civil-suit', title: 'عريضة دعوى مدنية', cat: 'suits', kind: 'petition', need: 'تقديمها للمحكمة ودفع الرسم',
        desc: 'الصيغة الأساسية لإقامة دعوى أمام محكمة البداءة، بالبيانات التي يوجبها القانون.',
        warn: 'تُرفق بالعريضة نسخ بعدد المدعى عليهم وقائمة بالمستندات مع صورها، ويُوقَّع على كل ورقة. تُعدّ الدعوى قائمة من تاريخ دفع الرسم.',
        basis: 'المواد ٤٦ و٤٧ و٤٨ من قانون المرافعات المدنية',
        fields: ['تاريخ تحرير العريضة', 'المدعي: الاسم واللقب والمهنة ومحل الإقامة', 'المدعى عليه: الاسم واللقب والمهنة ومحل الإقامة', 'المحل المختار للتبليغ', 'موضوع الدعوى وقيمتها'],
        clauses: ['الوقائع: ........................................', 'الأدلة والمستندات: ........................................', 'الطلبات: دعوة المدعى عليه للمرافعة والحكم بما ورد أعلاه وتحميله الرسوم والمصاريف.'],
        signs: ['المدعي أو وكيله'] },
      { id: 'appeal', title: 'لائحة استئنافية', cat: 'suits', kind: 'petition', need: 'تقديمها خلال ١٥ يوماً',
        desc: 'للطعن بالحكم البدائي أمام محكمة الاستئناف مع بيان أسباب الطعن.',
        warn: 'مدة الاستئناف خمسة عشر يوماً تبدأ من اليوم التالي لتبليغ الحكم. بعض الأحكام لا تقبل الاستئناف وتُطعن تمييزاً فقط، ومنها أحكام الأحوال الشخصية. تحقق من ذلك قبل التقديم.',
        basis: 'المادتان ١٧٢ و١٨٧ من قانون المرافعات المدنية',
        fields: ['المستأنِف', 'المستأنَف عليه', 'المحكمة التي أصدرت الحكم', 'رقم الحكم وتاريخه وتاريخ التبليغ به'],
        clauses: ['أسباب الاستئناف: ........................................', 'الطلب: قبول الاستئناف شكلاً، وفسخ الحكم المستأنف موضوعاً.'],
        signs: ['المستأنِف أو وكيله'] },
      { id: 'work-contract', title: 'عقد عمل', cat: 'labor', kind: 'contract', need: 'توقيع الطرفين',
        desc: 'يحدد طبيعة العمل والأجر وساعات العمل والإجازات وفق قانون العمل الاتحادي.',
        warn: 'مُعدّ وفق قانون العمل رقم ٣٧ لسنة ٢٠١٥ النافذ في العراق الاتحادي. في إقليم كوردستان يُطبَّق قانون مختلف، فراجع محامياً.',
        basis: 'قانون العمل رقم ٣٧ لسنة ٢٠١٥، وقانون التقاعد والضمان الاجتماعي للعمال رقم ١٨ لسنة ٢٠٢٣',
        fields: ['صاحب العمل', 'العامل', 'العمل المكلف به', 'الأجر الشهري', 'تاريخ المباشرة'],
        clauses: ['مدة التجربة ........ ولا تزيد على ثلاثة أشهر.', 'لا تزيد ساعات العمل على ثماني ساعات في اليوم أو ثمانٍ وأربعين ساعة في الأسبوع.', 'يستحق العامل إجازة سنوية مدفوعة الأجر لا تقل عن واحد وعشرين يوماً بعد سنة خدمة.', 'يُشمل العامل بالضمان الاجتماعي وفق القانون.'],
        signs: ['صاحب العمل', 'العامل'] },
      { id: 'resignation', title: 'إشعار إنهاء عقد عمل من العامل', cat: 'labor', kind: 'letter', need: 'إشعار قبل ٣٠ يوماً',
        desc: 'إشعار رسمي من عامل في القطاع الخاص بإنهاء عقد العمل.',
        warn: 'على العامل إشعار صاحب العمل قبل ثلاثين يوماً على الأقل، وإلا التزم بتعويض يعادل مدة الإشعار أو ما تبقى منها. موظفو الدولة تحكمهم قوانين الخدمة المدنية لا هذا النموذج.',
        basis: 'المادة ٤٣ من قانون العمل رقم ٣٧ لسنة ٢٠١٥',
        fields: ['اسم العامل', 'العمل الذي يشغله', 'تاريخ الإشعار', 'آخر يوم عمل (بعد ثلاثين يوماً على الأقل)'],
        clauses: ['أُشعركم بإنهاء عقد عملي اعتباراً من تاريخ هذا الإشعار، على أن يكون آخر يوم عمل لي التاريخ المذكور أعلاه.', 'أطلب احتساب مستحقاتي وفق قانون العمل.'],
        signs: ['العامل'] },
      { id: 'alimony', title: 'عريضة دعوى نفقة', cat: 'family', kind: 'petition', need: 'محكمة الأحوال الشخصية',
        desc: 'للمطالبة بنفقة الزوجة أو الأولاد أمام محكمة الأحوال الشخصية.',
        warn: 'نفقة الزوجة غير الناشز دين في ذمة الزوج عن مدة لا تزيد على سنة من تاريخ امتناعه. تختلف الأحكام بحسب القانون المطبق على عقد زواجك: القانون رقم ١٨٨، أو مدونة المذهب الجعفري، أو قانون الإقليم.',
        basis: 'المادتان ٢٣ و٢٤ من قانون الأحوال الشخصية رقم ١٨٨ لسنة ١٩٥٩',
        fields: ['المدعية', 'المدعى عليه', 'تاريخ عقد الزواج والقانون المطبق عليه', 'أسماء الأولاد وأعمارهم إن وُجدوا'],
        clauses: ['الوقائع: ........................................', 'الطلبات: الحكم بنفقة ماضية عن مدة لا تزيد على سنة من تاريخ الامتناع، ونفقة مستمرة، ونفقة الأولاد إن وُجدوا.'],
        signs: ['المدعية أو وكيلها'] },
      { id: 'custody', title: 'عريضة دعوى حضانة', cat: 'family', kind: 'petition', need: 'محكمة الأحوال الشخصية',
        desc: 'للمطالبة بحضانة الأولاد مع بيان مصلحة المحضون.',
        warn: 'وفق القانون رقم ١٨٨: الأم أحق بالحضانة ما لم يتضرر المحضون، وتستمر حتى العاشرة ويجوز تمديدها إلى الخامسة عشرة. تختلف الأحكام في مدونة المذهب الجعفري وفي إقليم كوردستان، فحدد القانون المطبق على عقد زواجك.',
        basis: 'المادة ٥٧ من قانون الأحوال الشخصية رقم ١٨٨ لسنة ١٩٥٩',
        fields: ['المدعي', 'المدعى عليه', 'أسماء الأولاد وأعمارهم', 'القانون المطبق على عقد الزواج'],
        clauses: ['الوقائع ومصلحة المحضون: ........................................', 'الطلبات: الحكم بالحضانة لما فيه مصلحة المحضون.'],
        signs: ['المدعي أو وكيله'] }
    ], cms.forms).filter(isPub).map((f) => ({ fields: [], clauses: [], signs: [], ...f, kind: kinds[f.kind] ? f.kind : 'contract' })).map((f) => ({
      ...f, catLabel: names[f.cat], kindLabel: kinds[f.kind].label, topLine: kinds[f.kind].top,
      versionLine: 'الإصدار ' + (f.version || '١٫٠') + (f.versionDate ? ' · ' + ar(f.versionDate) : ''),
      opening: kinds[f.kind].opening, docTitle: f.kind === 'poa' ? f.title.replace('مسودة ', '') : f.title,
      clauses: f.clauses.map((t, j) => ({ n: (ord[j] || ar(j + 1)) + ':', text: t }))
    }));
    const { cat, q, sel, notice } = this.state;
    const nq = norm(q);
    const forms = all.filter((f) => (cat === 'all' || f.cat === cat) && (!nq || norm(f.title + ' ' + f.desc).includes(nq)))
      .map((f) => ({ ...f, open: () => this.setState({ sel: f.id, notice: '' }) }));
    const selected = all.find((f) => f.id === sel) || null;
    const pill = (on) => ({ bg: on ? '#0F1E35' : '#FFFFFF', fg: on ? '#FFFFFF' : '#2B3A52', border: on ? '#0F1E35' : '#8F8778', on: on ? 'true' : 'false' });
    return {
      formsDisclaimer: fcfg.disclaimer || '', hasDisclaimer: !!fcfg.disclaimer,
      pgHero,
      q, forms, empty: forms.length === 0,
      countLabel: 'عدد النماذج: ' + ar(forms.length),
      cats: Object.keys(names).map((k) => ({ label: names[k], ...pill(k === cat), pick: () => this.setState({ cat: k }) })),
      noSubmit: (e) => e.preventDefault(),
      onQ: (e) => this.setState({ q: e.target.value }),
      showList: !selected, showForm: !!selected,
      sel: selected || { versionLine: '', title: '', catLabel: '', desc: '', warn: '', basis: '', fields: [], clauses: [], signs: [], kindLabel: '', need: '', topLine: '', opening: '', docTitle: '' },
      notice, hasNotice: !!notice,
      print: () => { if (selected && selected.noPrint) { this.setState({ notice: 'الطباعة غير متاحة لهذا النموذج حالياً.' }); return; } try { window.print(); } catch (e) { this.setState({ notice: 'تعذّرت الطباعة من هذه المعاينة. افتح الصفحة في نافذة مستقلة ثم اطبعها.' }); } },
      download: () => this.setState({ notice: selected && selected.noDownload ? 'التنزيل غير متاح لهذا النموذج حالياً.' : 'ملفات PDF وWord القابلة للتعبئة تُتاح بعد اعتماد صياغة النموذج من المستشار القانوني للمنصة.' }),
      back: () => this.setState({ sel: null, notice: '' }),
      titleRef: this.titleRef, topRef: this.topRef
    };
  }
}
return Component;
});
