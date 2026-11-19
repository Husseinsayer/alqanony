MQ_DEF("Laws", "<div dir=\"rtl\" style=\"font-family: 'IBM Plex Sans Arabic', system-ui, sans-serif; color: #0F1E35; background: #FAF7F0; min-height: 100vh\">\n<dc-import name=\"Header\" active=\"laws\" hint-size=\"100%,81px\"></dc-import>\n<main id=\"main\" ref=\"{{topRef}}\" tabindex=\"-1\" style=\"outline: none\">\n\n<sc-if value=\"{{showList}}\" hint-placeholder-val=\"{{true}}\">\n<section style=\"background: #0F1E35\">\n<div style=\"max-width: 1240px; margin: 0 auto; padding: clamp(40px, 6vw, 64px) 20px clamp(96px, 10vw, 120px); display: flex; flex-direction: column; gap: 14px\">\n<span style=\"font-size: 14px; color: #AEB8C8\">الرئيسية / القوانين</span>\n<h1 style=\"margin: 0; font-size: clamp(28px, 5.5vw, 44px); font-weight: 700; color: #FFFFFF\">{{pgHero.t1}}<sc-if value=\"{{pgHero.hasT2}}\" hint-placeholder-val=\"{{false}}\"><br>{{pgHero.t2}}</sc-if></h1>\n<p style=\"margin: 0; font-size: clamp(16px, 2.4vw, 18px); line-height: 1.8; color: #D5DBE5; max-width: 600px\">{{pgHero.text}}</p>\n<form role=\"search\" onSubmit=\"{{noSubmit}}\" class=\"fw\" style=\"margin-top: 10px; display: flex; align-items: center; gap: 12px; background: #FFFFFF; border-radius: 16px; padding: 0 16px; height: 56px; max-width: 640px; box-sizing: border-box\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#3A4860\" stroke-width=\"1.8\" stroke-linecap=\"round\" aria-hidden=\"true\"><circle cx=\"11\" cy=\"11\" r=\"7\"></circle><path d=\"M20 20l-3.5-3.5\"></path></svg>\n<label for=\"law-q\" style=\"position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)\">ابحث عن قانون</label>\n<input id=\"law-q\" type=\"search\" value=\"{{q}}\" onChange=\"{{onQ}}\" placeholder=\"ابحث باسم القانون أو رقمه، مثل: ٤٠ أو العمل\" style=\"flex: 1; min-width: 0; height: 100%; border: none; outline: none; font: inherit; font-size: 16px; color: #0F1E35; background: transparent\">\n</form>\n</div>\n</section>\n\n<section style=\"position: relative; margin-top: -56px; background: #FFFFFF; border-radius: clamp(24px, 4vw, 40px); box-shadow: 0 -24px 48px -32px rgba(11,23,41,0.6)\">\n<div style=\"max-width: 1240px; margin: 0 auto; padding: clamp(32px, 5vw, 56px) 20px clamp(48px, 7vw, 80px)\">\n<div style=\"display: flex; flex-direction: column; gap: 14px; margin-bottom: 28px\">\n<div role=\"group\" aria-label=\"التصنيف\" style=\"display: flex; flex-wrap: nowrap; overflow-x: auto; gap: 8px; padding-bottom: 4px\">\n<sc-for list=\"{{cats}}\" as=\"c\" hint-placeholder-count=\"8\">\n<button type=\"button\" aria-pressed=\"{{c.on}}\" onClick=\"{{c.pick}}\" style=\"flex: 0 0 auto; min-height: 44px; padding: 0 18px; border-radius: 999px; border: 1px solid {{c.border}}; background: {{c.bg}}; color: {{c.fg}}; font: inherit; font-size: 15px; font-weight: 500; cursor: pointer; white-space: nowrap\">{{c.label}}</button>\n</sc-for>\n</div>\n<div role=\"group\" aria-label=\"نطاق التطبيق\" style=\"display: flex; flex-wrap: wrap; align-items: center; gap: 8px\">\n<span style=\"font-size: 14px; color: #3A4860; margin-inline-end: 4px\">نطاق التطبيق:</span>\n<sc-for list=\"{{scopes}}\" as=\"s\" hint-placeholder-count=\"3\">\n<button type=\"button\" aria-pressed=\"{{s.on}}\" onClick=\"{{s.pick}}\" style=\"min-height: 44px; padding: 0 14px; border-radius: 10px; border: 1px solid {{s.border}}; background: {{s.bg}}; color: {{s.fg}}; font: inherit; font-size: 14px; cursor: pointer\">{{s.label}}</button>\n</sc-for>\n</div>\n</div>\n<p role=\"status\" style=\"margin: 0 0 12px; font-size: 14px; color: #3A4860\">{{countLabel}}</p>\n<div style=\"display: flex; flex-direction: column\">\n<sc-for list=\"{{laws}}\" as=\"l\" hint-placeholder-count=\"8\">\n<a class=\"row\" href=\"#main\" onClick=\"{{l.open}}\" style=\"display: flex; align-items: center; gap: 16px; padding: 18px 8px; border-bottom: 1px solid #F0EBDF; color: #0F1E35; border-radius: 8px\">\n<span style=\"flex: 0 0 48px; width: 48px; height: 48px; border-radius: 14px; background: #F3EEE2; display: flex; align-items: center; justify-content: center\">\n<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#0F1E35\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 19V5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2zM4 19a2 2 0 0 0 2 2h12M9 7h6M9 11h6\"></path></svg>\n</span>\n<span style=\"flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 6px\">\n<span style=\"font-size: clamp(16px, 2.4vw, 18px); font-weight: 600; line-height: 1.6\">{{l.title}}</span>\n<span style=\"display: flex; flex-wrap: wrap; align-items: center; gap: 6px 10px; font-size: 13px; color: #3A4860\">\n<span style=\"background: #F3EEE2; padding: 3px 10px; border-radius: 999px\">{{l.catLabel}}</span>\n<span style=\"background: #F3EEE2; padding: 3px 10px; border-radius: 999px\">{{l.scopeLabel}}</span>\n<span>{{l.availability}}</span>\n</span>\n</span>\n<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#3A4860\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M15 6l-6 6 6 6\"></path></svg>\n</a>\n</sc-for>\n<sc-if value=\"{{empty}}\" hint-placeholder-val=\"{{false}}\">\n<p style=\"margin: 0; padding: 48px 0; text-align: center; color: #3A4860; font-size: 16px\">لا توجد نتائج مطابقة. جرّب كلمة أخرى أو أزل عوامل التصفية.</p>\n</sc-if>\n</div>\n</div>\n</section>\n<div style=\"max-width: 1100px; margin: 0 auto; padding: 32px 20px 0; box-sizing: border-box\"><dc-import name=\"AdSlot\" size=\"leader\" place=\"laws-list\" hint-size=\"100%,120px\"></dc-import></div>\n</sc-if>\n\n<sc-if value=\"{{showLaw}}\" hint-placeholder-val=\"{{false}}\">\n<section style=\"background: #0F1E35\">\n<div style=\"max-width: 1000px; margin: 0 auto; padding: 24px 20px clamp(96px, 10vw, 120px); display: flex; flex-direction: column; gap: 14px\">\n<button type=\"button\" onClick=\"{{back}}\" style=\"align-self: flex-start; display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 16px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.3); background: transparent; color: #E6EAF0; font: inherit; font-size: 14px; cursor: pointer\">\n<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#E6EAF0\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M9 6l6 6-6 6\"></path></svg>العودة إلى القوانين</button>\n<span style=\"margin-top: 12px; font-size: 14px; color: #AEB8C8\">القوانين / {{law.catLabel}}</span>\n<h1 ref=\"{{titleRef}}\" tabindex=\"-1\" style=\"margin: 0; font-size: clamp(26px, 5vw, 40px); line-height: 1.45; font-weight: 700; color: #FFFFFF; outline: none\">{{law.title}}</h1>\n<div style=\"display: flex; flex-wrap: wrap; gap: 8px\">\n<span style=\"font-size: 13px; color: #FFFFFF; border: 1px solid rgba(255,255,255,0.3); padding: 4px 12px; border-radius: 999px\">{{law.statusLabel}}</span>\n<span style=\"font-size: 13px; color: #FFFFFF; border: 1px solid rgba(255,255,255,0.3); padding: 4px 12px; border-radius: 999px\">{{law.scopeLabel}}</span>\n</div>\n<span style=\"font-size: 14px; color: #AEB8C8\">{{LT.sourceLine}}</span>\n</div>\n</section>\n\n<section style=\"position: relative; margin-top: -56px; background: #FFFFFF; border-radius: clamp(24px, 4vw, 40px); box-shadow: 0 -24px 48px -32px rgba(11,23,41,0.6)\">\n<div style=\"max-width: 1000px; margin: 0 auto; padding: clamp(32px, 5vw, 48px) 20px clamp(48px, 7vw, 80px); display: flex; flex-direction: column; gap: 22px\">\n\n<sc-if value=\"{{law.hasMeta}}\" hint-placeholder-val=\"{{false}}\">\n<div style=\"display: flex; flex-direction: column; gap: 8px; padding: 16px 18px; border: 1px solid #E3DCCB; border-radius: 16px; background: #FFFFFF; font-size: 14px; line-height: 1.8\">\n<sc-for list=\"{{law.meta}}\" as=\"m\" hint-placeholder-count=\"3\"><div style=\"display: flex; flex-wrap: wrap; justify-content: space-between; gap: 4px 16px\"><span style=\"color: #3A4860\">{{m.k}}</span><span style=\"font-weight: 600\">{{m.v}}</span></div></sc-for>\n<sc-if value=\"{{law.hasSource}}\" hint-placeholder-val=\"{{false}}\"><a href=\"{{law.source}}\" target=\"_blank\" rel=\"noopener\" style=\"align-self: flex-start; font-weight: 600; color: #0F1E35; text-decoration: underline; text-decoration-color: #C9A24D; text-underline-offset: 5px\">النص في المصدر الرسمي</a></sc-if>\n<sc-for list=\"{{law.amends}}\" as=\"a\" hint-placeholder-count=\"2\"><div style=\"padding-top: 8px; border-top: 1px solid #F0EBDF\"><b style=\"font-weight: 600\">{{a.head}}</b> {{a.desc}}</div></sc-for>\n</div>\n</sc-if>\n<sc-if value=\"{{law.hasNote}}\" hint-placeholder-val=\"{{false}}\">\n<div style=\"display: flex; gap: 12px; padding: 16px 18px; border-radius: 14px; background: #F3EEE2\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#0F1E35\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"flex: 0 0 20px; margin-top: 4px\"><circle cx=\"12\" cy=\"12\" r=\"9\"></circle><path d=\"M12 8v5M12 16h.01\"></path></svg>\n<p style=\"margin: 0; font-size: 15px; line-height: 1.9; color: #2B3A52\">{{law.note}}</p>\n</div>\n</sc-if>\n\n<sc-if value=\"{{law.pending}}\" hint-placeholder-val=\"{{false}}\">\n<div style=\"display: flex; flex-direction: column; align-items: center; text-align: center; gap: 10px; padding: 40px 16px; border: 1px dashed #8F8778; border-radius: 18px\">\n<h2 style=\"margin: 0; font-size: 20px; font-weight: 700\">{{pendingTitle}}</h2>\n<p style=\"margin: 0; font-size: 15px; line-height: 1.9; color: #3A4860; max-width: 520px\">{{pendingText}}</p>\n</div>\n</sc-if>\n\n<sc-if value=\"{{law.hasArts}}\" hint-placeholder-val=\"{{true}}\">\n<div style=\"display: flex; flex-wrap: wrap; align-items: center; gap: 12px 16px\">\n<label for=\"art-q\" style=\"font-size: 16px; font-weight: 600\">ابحث في هذا القانون</label>\n<div class=\"fw\" style=\"flex: 1 1 260px; max-width: 460px; display: flex; align-items: center; gap: 10px; height: 52px; padding: 0 8px 0 16px; border: 1px solid #8F8778; border-radius: 14px; background: #FAF7F0; box-sizing: border-box\">\n<input id=\"art-q\" type=\"text\" value=\"{{art}}\" onChange=\"{{onArt}}\" placeholder=\"رقم المادة (١٩ أو ١٩ مكرراً) أو كلمة من النص\" aria-describedby=\"art-q-help\" style=\"flex: 1; min-width: 0; border: none; outline: none; background: transparent; font: inherit; font-size: 17px; font-weight: 600; color: #0F1E35\">\n<sc-if value=\"{{hasArt}}\" hint-placeholder-val=\"{{false}}\">\n<button type=\"button\" onClick=\"{{clearArt}}\" aria-label=\"مسح البحث\" style=\"width: 36px; height: 36px; border: none; border-radius: 50%; background: #ECE6D8; display: flex; align-items: center; justify-content: center; cursor: pointer\">\n<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#0F1E35\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M6 6l12 12M18 6L6 18\"></path></svg>\n</button>\n</sc-if>\n</div>\n<span id=\"art-q-help\" style=\"flex: 1 1 100%; font-size: 13px; color: #3A4860\">{{artHelp}}</span>\n</div>\n\n<sc-if value=\"{{showChips}}\" hint-placeholder-val=\"{{true}}\"><div role=\"group\" aria-label=\"المواد المتاحة\" style=\"display: flex; flex-wrap: nowrap; overflow-x: auto; gap: 8px; padding-bottom: 4px\">\n<sc-for list=\"{{chips}}\" as=\"c\" hint-placeholder-count=\"6\">\n<button type=\"button\" aria-pressed=\"{{c.on}}\" onClick=\"{{c.pick}}\" style=\"flex: 0 0 auto; min-width: 44px; height: 44px; padding: 0 14px; border-radius: 12px; border: 1px solid {{c.border}}; background: {{c.bg}}; color: {{c.fg}}; font: inherit; font-size: 15px; font-weight: 600; cursor: pointer\">{{c.label}}</button>\n</sc-for>\n</div></sc-if>\n<sc-if value=\"{{hasToc}}\" hint-placeholder-val=\"{{false}}\"><nav aria-label=\"أبواب القانون\" style=\"display: flex; flex-wrap: wrap; gap: 8px\"><sc-for list=\"{{toc}}\" as=\"t\" hint-placeholder-count=\"3\"><button type=\"button\" onClick=\"{{t.pick}}\" aria-pressed=\"{{t.on}}\" style=\"min-height: 40px; padding: 0 14px; border-radius: 12px; border: 1px solid {{t.border}}; background: {{t.bg}}; color: {{t.fg}}; font: inherit; font-size: 14px; cursor: pointer; text-align: start\">{{t.label}}</button></sc-for></nav></sc-if>\n\n<p style=\"margin: 0; font-size: 14px; line-height: 1.8; color: #2B3A52; background: #F3EEE2; border-radius: 12px; padding: 12px 16px\">{{kindNote}}</p>\n<sc-if value=\"{{hasCountLine}}\" hint-placeholder-val=\"{{false}}\"><p role=\"status\" style=\"margin: 0; font-size: 14px; color: #3A4860\">{{countLine}}</p></sc-if>\n\n<div role=\"status\" style=\"display: flex; flex-direction: column\">\n<sc-for list=\"{{articles}}\" as=\"a\" hint-placeholder-count=\"5\">\n<sc-if value=\"{{a.hasPart}}\" hint-placeholder-val=\"{{false}}\"><h2 style=\"margin: 28px 0 0; padding: 14px 16px; border-radius: 14px; background: #0F1E35; color: #FFFFFF; font-size: 18px; font-weight: 700; line-height: 1.6\">{{a.part}}</h2></sc-if>\n<sc-if value=\"{{a.hasChap}}\" hint-placeholder-val=\"{{false}}\"><h3 style=\"margin: 20px 0 0; padding: 0 0 8px; border-bottom: 2px solid #C9A24D; font-size: 17px; font-weight: 700; color: #0F1E35; line-height: 1.6\">{{a.chap}}</h3></sc-if>\n<article id=\"{{a.anchor}}\" style=\"display: flex; flex-direction: column; gap: 10px; padding: 24px 0; border-bottom: 1px solid #F0EBDF; opacity: {{a.op}}\">\n<div style=\"display: flex; flex-wrap: wrap; align-items: center; gap: 10px\">\n<h4 style=\"margin: 0; display: flex; align-items: center; gap: 12px; font-size: 19px; font-weight: 700; color: #0F1E35\">\n<span style=\"width: 4px; height: 20px; border-radius: 4px; background: #C9A24D\"></span>{{a.label}}</h4>\n<span style=\"font-size: 12px; color: #3A4860; border: 1px solid #D9D2C3; padding: 2px 10px; border-radius: 999px\">{{a.kindLabel}}</span>\n<sc-if value=\"{{a.hasStatus}}\" hint-placeholder-val=\"{{false}}\"><span style=\"font-size: 12px; color: #5E4710; background: #F6EBD0; padding: 2px 10px; border-radius: 999px\">{{a.statusLabel}}</span></sc-if>\n</div>\n<p style=\"margin: 0; font-size: clamp(16px, 2.4vw, 18px); line-height: 2.1; color: #2B3A52; white-space: pre-line; text-decoration: {{a.deco}}\">{{a.text}}</p>\n<sc-if value=\"{{a.hasNote}}\" hint-placeholder-val=\"{{false}}\"><p style=\"margin: 0; font-size: 14px; line-height: 1.8; color: #3A4860\">{{a.note}}</p></sc-if>\n</article>\n<sc-if value=\"{{a.adAfter}}\" hint-placeholder-val=\"{{false}}\"><div style=\"padding: 20px 0; border-bottom: 1px solid #F0EBDF\"><dc-import name=\"AdSlot\" size=\"inline\" place=\"{{a.adPlace}}\" hint-size=\"100%,120px\"></dc-import></div></sc-if>\n</sc-for>\n<sc-if value=\"{{hasMore}}\" hint-placeholder-val=\"{{false}}\"><div style=\"display: flex; justify-content: center; padding: 20px 0 0\"><button type=\"button\" onClick=\"{{showMore}}\" style=\"min-height: 48px; padding: 0 22px; border-radius: 14px; border: 1px solid #0F1E35; background: #FFFFFF; color: #0F1E35; font: inherit; font-size: 15px; font-weight: 600; cursor: pointer\">{{moreLabel}}</button></div></sc-if>\n<sc-if value=\"{{noArt}}\" hint-placeholder-val=\"{{false}}\">\n<p style=\"margin: 0; padding: 40px 0; text-align: center; color: #3A4860; font-size: 16px; line-height: 1.9\">{{noArtLabel}}</p>\n</sc-if>\n</div>\n</sc-if>\n\n<p style=\"margin: 8px 0 0; font-size: 14px; color: #3A4860\">وجدت اختلافاً عن النص الرسمي؟ <a href=\"Contact.dc.html\" style=\"color: #0F1E35; font-weight: 700; text-decoration: underline; text-decoration-color: #C9A24D; text-underline-offset: 5px\">أبلغنا عن الخطأ</a></p>\n</div>\n</section>\n</sc-if>\n\n</main>\n<div style=\"height: clamp(64px, 9vw, 112px)\"></div>\n<dc-import name=\"Footer\" hint-size=\"100%,460px\"></dc-import>\n</div>", "\nbody{margin:0;background:#FAF7F0}\na{color:#0F1E35;text-decoration:none}\n:focus-visible{outline:2px solid #C9A24D;outline-offset:2px}\n.fw:focus-within{outline:2px solid #C9A24D;outline-offset:2px}\n.row:hover{background:#FCFAF5}\n", function (DCLogic, React) {
"use strict";
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { cat: 'all', scope: 'all', q: '', sel: null, art: '', limit: 40, part: '' };
    this.titleRef = (el) => { this.titleEl = el; };
    this.topRef = (el) => { this.topEl = el; };
  }
  componentDidMount() {
    try {
      const id = window.localStorage.getItem('mq_law');
      if (id) { window.localStorage.removeItem('mq_law'); this.setState({ sel: id }); }
    } catch (e) {}
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
    const pgHero = { t1: pgc.laws_t1 || "مكتبة القوانين العراقية", t2: pgc.laws_t1 != null ? (pgc.laws_t2 || '') : "", text: pgc.laws_text || "تشريعات العراق الاتحادي وإقليم كوردستان، مع حالة النفاذ ونطاق التطبيق لكل قانون." };
    pgHero.hasT2 = !!pgHero.t2;
    const D = '٠١٢٣٤٥٦٧٨٩', P = '۰۱۲۳۴۵۶۷۸۹';
    const toW = (s) => String(s).replace(/[٠-٩]/g, (d) => D.indexOf(d)).replace(/[۰-۹]/g, (d) => P.indexOf(d));
    const ar = (s) => String(s).replace(/[0-9]/g, (d) => D[d]);
    const norm = (s) => toW(s).toLowerCase().replace(/[ً-ْـ]/g, '').replace(/[أإآٱ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي').replace(/ؤ/g, 'و').replace(/ئ/g, 'ي').replace(/\s+/g, ' ').trim();
    const count = (n) => n === 1 ? 'مادة واحدة' : n === 2 ? 'مادتان' : n <= 10 ? ar(n) + ' مواد' : ar(n) + ' مادة';
    const catNames = { all: 'الكل', const: 'الدستور', civil: 'المدني والعقاري', penal: 'الجزائي', family: 'الأحوال الشخصية', labor: 'العمل', trade: 'التجاري', org: 'تنظيمية وإجرائية' };
    const scopeNames = { fed: 'العراق الاتحادي', krg: 'إقليم كوردستان', both: 'الاتحادي والإقليم' };
    const lcfg = cms.lawsCfg || {};
    const LT = { ...{"sourceLine": "المرجع الرسمي: جريدة الوقائع العراقية", "excerptNote": "المعروض مقتطفات وملخصات مختارة بأرقام موادها الحقيقية، ويُشار إلى نوع كل نص. المرجع الملزم هو النص المنشور في جريدة الوقائع العراقية."}, ...lcfg };
    Object.keys(catNames).forEach((k) => { if (lcfg['cat_' + k]) catNames[k] = lcfg['cat_' + k]; });
    const E = 'excerpt', S = 'summary';
    const A = (n, text, kind, sub) => ({ n, sub: sub || '', text, kind: kind || E });
    const all = mergeL([
      { id: 'constitution', title: 'دستور جمهورية العراق لسنة 2005', cat: 'const', scope: 'both', status: 'نافذ', arts: [
        A(1, 'جمهورية العراق دولة اتحادية واحدة مستقلة ذات سيادة كاملة، نظام الحكم فيها جمهوري نيابي (برلماني) ديمقراطي، وهذا الدستور ضامن لوحدة العراق.'),
        A(2, 'الإسلام دين الدولة الرسمي، وهو مصدر أساس للتشريع.', E, 'أولاً'),
        A(5, 'السيادة للقانون، والشعب مصدر السلطات وشرعيتها، يمارسها بالاقتراع السري العام المباشر وعبر مؤسساته الدستورية.'),
        A(14, 'العراقيون متساوون أمام القانون دون تمييز بسبب الجنس أو العرق أو القومية أو الأصل أو اللون أو الدين أو المذهب أو المعتقد أو الرأي أو الوضع الاقتصادي أو الاجتماعي.'),
        A(15, 'لكل فرد الحق في الحياة والأمن والحرية، ولا يجوز الحرمان من هذه الحقوق أو تقييدها إلا وفقاً للقانون، وبناءً على قرار صادر من جهة قضائية مختصة.'),
        A(19, 'القضاء مستقل لا سلطان عليه لغير القانون.', E, 'أولاً'),
        A(19, 'التقاضي حق مصون ومكفول للجميع.', E, 'ثالثاً'),
        A(19, 'حق الدفاع مقدس ومكفول في جميع مراحل التحقيق والمحاكمة.', E, 'رابعاً'),
        A(19, 'المتهم بريء حتى تثبت إدانته في محاكمة قانونية عادلة، ولا يحاكم المتهم عن التهمة ذاتها مرة أخرى بعد الإفراج عنه إلا إذا ظهرت أدلة جديدة.', E, 'خامساً'),
        A(117, 'يقر هذا الدستور عند نفاذه إقليم كوردستان وسلطاته القائمة إقليماً اتحادياً.', E, 'أولاً')] },
      { id: 'civil', title: 'القانون المدني رقم 40 لسنة 1951', cat: 'civil', scope: 'both', status: 'نافذ (معدّل)', arts: [
        A(1, 'تسري النصوص التشريعية على جميع المسائل التي تتناولها هذه النصوص في لفظها أو في فحواها.', E, '1'),
        A(73, 'العقد هو ارتباط الإيجاب الصادر من أحد العاقدين بقبول الآخر على وجه يثبت أثره في المعقود عليه.'),
        A(93, 'كل شخص أهل للتعاقد ما لم يقرر القانون عدم أهليته أو يحد منها.'),
        A(146, 'إذا نفذ العقد كان لازماً، ولا يجوز لأحد العاقدين الرجوع عنه ولا تعديله إلا بمقتضى نص في القانون أو بالتراضي.', E, '1'),
        A(204, 'كل تعدٍّ يصيب الغير بأي ضرر آخر غير ما ذُكر في المواد السابقة يستوجب التعويض.'),
        A(508, 'بيع العقار لا ينعقد إلا إذا سُجّل في الدائرة المختصة واستوفى الشكل الذي نص عليه القانون.'),
        A(1127, 'التعهد بنقل ملكية عقار يقتصر على الالتزام بالتعويض إذا أخلّ أحد الطرفين بتعهده.')] },
      { id: 'civil-procedure', title: 'قانون المرافعات المدنية رقم 83 لسنة 1969', cat: 'civil', scope: 'both', status: 'نافذ (معدّل)', arts: [
        A(1, 'يكون هذا القانون المرجع لكافة قوانين المرافعات والإجراءات إذا لم يكن فيها نص يتعارض معه صراحة.'),
        A(2, 'الدعوى طلب شخص حقه من آخر أمام القضاء.'),
        A(6, 'يشترط في الدعوى أن يكون المدعى به مصلحة معلومة وحالة وممكنة ومحققة، مع جواز الاكتفاء بالمصلحة المحتملة في حالات يبينها النص.', S),
        A(25, 'إذا صادف آخر يوم من المدة عطلة رسمية امتدت المدة إلى أول يوم عمل بعدها.', S),
        A(46, 'تشتمل عريضة الدعوى على: اسم المحكمة، وتاريخ تحريرها، واسم كل من المدعي والمدعى عليه ولقبه ومهنته ومحل إقامته، والمحل المختار للتبليغ، وبيان موضوع الدعوى، ووقائعها وأدلتها وطلبات المدعي وأسانيدها، وتوقيع المدعي أو وكيله.', S),
        A(172, 'تبدأ مدد الطعن من اليوم التالي لتبليغ الحكم.', S),
        A(177, 'مدة الاعتراض على الحكم الغيابي عشرة أيام.', S),
        A(187, 'مدة الاستئناف خمسة عشر يوماً.', S),
        A(204, 'مدة الطعن تمييزاً ثلاثون يوماً، ما لم ينص القانون على مدة أخرى.', S)] },
      { id: 'evidence', title: 'قانون الإثبات رقم 107 لسنة 1979', cat: 'civil', scope: 'both', status: 'نافذ (معدّل)', arts: [] },
      { id: 'rent', title: 'قانون إيجار العقار رقم 87 لسنة 1979', cat: 'civil', scope: 'both', status: 'نافذ (معدّل)', arts: [], note: 'عُدّل هذا القانون مرات كثيرة، ونطابق نصه الموحّد النافذ قبل نشره.' },
      { id: 'land-registration', title: 'قانون التسجيل العقاري رقم 43 لسنة 1971', cat: 'civil', scope: 'both', status: 'نافذ (معدّل)', arts: [
        A(3, 'التصرفات العقارية لا تنعقد إلا بتسجيلها في دائرة التسجيل العقاري.', S)] },
      { id: 'penal', title: 'قانون العقوبات رقم 111 لسنة 1969', cat: 'penal', scope: 'both', status: 'نافذ (معدّل)', arts: [
        A(1, 'لا عقاب على فعل أو امتناع إلا بناءً على قانون ينص على تجريمه وقت اقترافه، ولا يجوز توقيع عقوبات أو تدابير احترازية لم ينص عليها القانون.'),
        A(6, 'تسري أحكام هذا القانون على جميع الجرائم التي ترتكب في العراق.', S),
        A(23, 'الجرائم من حيث جسامتها ثلاثة أنواع: الجنايات والجنح والمخالفات، ويحدد نوع الجريمة بنوع العقوبة الأشد المقررة لها في القانون.'),
        A(48, 'يُعدّ شريكاً في الجريمة من حرّض على ارتكابها، أو اتفق مع غيره على ارتكابها، أو ساعد الفاعل، فوقعت الجريمة بناءً على ذلك.', S)] },
      { id: 'criminal-procedure', title: 'قانون أصول المحاكمات الجزائية رقم 23 لسنة 1971', cat: 'penal', scope: 'both', status: 'نافذ (معدّل)', arts: [
        A(1, 'تُحرَّك الدعوى الجزائية بشكوى شفوية أو تحريرية تُقدَّم إلى قاضي التحقيق أو المحقق أو أي مسؤول في مركز الشرطة أو أي من أعضاء الضبط القضائي، من المتضرر أو من يقوم مقامه قانوناً أو من علم بوقوع الجريمة.', S, 'أ')] },
      { id: 'personal-status', title: 'قانون الأحوال الشخصية رقم 188 لسنة 1959', cat: 'family', scope: 'fed', status: 'نافذ (معدّل)',
        note: 'منذ عام 2025 يتيح القانون رقم 1 لسنة 2025 للمواطنين اختيار الخضوع لأحكام هذا القانون أو لأحكام مدونة المذهب الجعفري، وفي إقليم كوردستان تُطبَّق تعديلات القانون رقم 15 لسنة 2008. تحقق من القانون المطبق على حالتك.', arts: [
        A(3, 'الزواج عقد بين رجل وامرأة تحل له شرعاً، غايته إنشاء رابطة للحياة المشتركة والنسل.', E, '1'),
        A(7, 'يشترط في تمام أهلية الزواج العقل وإكمال الثامنة عشرة.', E, '1'),
        A(8, 'للقاضي أن يأذن بزواج من أكمل الخامسة عشرة إذا ثبتت له أهليته وقابليته البدنية، وفق الشروط التي يحددها النص.', S),
        A(23, 'تجب النفقة للزوجة على الزوج من حين العقد الصحيح ولو كانت مقيمة في بيت أهلها، إلا إذا طالبها الزوج بالانتقال إلى بيته فامتنعت بغير حق.', E, '1'),
        A(24, 'تُعدّ نفقة الزوجة غير الناشز ديناً في ذمة زوجها عن مدة لا تزيد على سنة من تاريخ امتناعه عن الإنفاق.', S, '1'),
        A(57, 'الأم أحق بحضانة الولد وتربيته حال قيام الزوجية وبعد الفرقة، ما لم يتضرر المحضون من ذلك.', E, '1'),
        A(57, 'تستمر الحضانة حتى إتمام المحضون العاشرة، ويجوز للمحكمة تمديدها إلى الخامسة عشرة إذا ثبت أن مصلحته تقتضي ذلك، وللمحضون عند إتمامها حق الاختيار.', S, '4-5')] },
      { id: 'ps-amend-2025', title: 'القانون رقم 1 لسنة 2025 بتعديل قانون الأحوال الشخصية', cat: 'family', scope: 'fed', status: 'نافذ', arts: [],
        note: 'يتيح للمواطنين عند عقد الزواج اختيار الخضوع لأحكام قانون الأحوال الشخصية رقم 188 لسنة 1959 أو لأحكام المذهب الجعفري.' },
      { id: 'jafari-code', title: 'مدونة الأحكام الشرعية في مسائل الأحوال الشخصية وفق المذهب الجعفري', cat: 'family', scope: 'fed', status: 'نافذة لمن اختار الخضوع لها', arts: [],
        note: 'أقرّها مجلس النواب في آب 2025، ونُشرت في الوقائع العراقية العدد 4843 في 8 تشرين الأول 2025 وفق ما أوردته مصادر صحفية.' },
      { id: 'krg-ps-2008', title: 'قانون إقليم كوردستان رقم 15 لسنة 2008 بتعديل تطبيق قانون الأحوال الشخصية', cat: 'family', scope: 'krg', status: 'نافذ في الإقليم', arts: [] },
      { id: 'labour', title: 'قانون العمل رقم 37 لسنة 2015', cat: 'labor', scope: 'fed', status: 'نافذ',
        note: 'يُطبَّق في العراق الاتحادي. أما في إقليم كوردستان فيُطبَّق قانون العمل رقم 71 لسنة 1987 وفق المصادر المتاحة.', arts: [
        A(37, 'يُبرم عقد العمل شفهياً أو تحريرياً.', E, 'أولاً'),
        A(43, 'على العامل الذي ينهي عقد العمل أن يشعر صاحب العمل قبل ثلاثين يوماً على الأقل، وإلا التزم بتعويض يعادل مدة الإشعار أو ما تبقى منها.', S),
        A(45, 'يستحق العامل عند انتهاء خدمته مكافأة نهاية خدمة تعادل أجر أسبوعين عن كل سنة خدمة، باستثناء حالات الإنهاء التي يحددها القانون.', S),
        A(46, 'للعامل الطعن في قرار إنهاء خدمته أمام محكمة العمل خلال ثلاثين يوماً من تاريخ تبليغه به.', S),
        A(47, 'إذا تعذّرت إعادة العامل المفصول بغير وجه حق إلى عمله، استحق تعويضاً يعادل ضعفي مكافأة نهاية الخدمة.', S),
        A(67, 'لا يجوز أن تزيد ساعات العمل على ثماني ساعات في اليوم أو ثمانٍ وأربعين ساعة في الأسبوع.', S, 'أولاً')] },
      { id: 'krg-labour-1987', title: 'قانون العمل رقم 71 لسنة 1987', cat: 'labor', scope: 'krg', status: 'يُطبَّق في الإقليم', arts: [],
        note: 'أُلغي في العراق الاتحادي بصدور القانون رقم 37 لسنة 2015، ويستمر تطبيقه في إقليم كوردستان وفق المصادر المتاحة.' },
      { id: 'commerce', title: 'قانون التجارة رقم 30 لسنة 1984', cat: 'trade', scope: 'both', status: 'نافذ (معدّل)', arts: [
        A(12, 'يلتزم التاجر بمسك الدفاتر التجارية التي يحددها القانون، ومنها دفتر اليومية ودفتر الأستاذ.', S),
        A(39, 'الأوراق التجارية التي ينظمها القانون هي الحوالة التجارية (السفتجة) والسند لأمر والصك.', S)] },
      { id: 'companies', title: 'قانون الشركات رقم 21 لسنة 1997', cat: 'trade', scope: 'both', status: 'نافذ (معدّل)', arts: [] },
      { id: 'advocacy', title: 'قانون المحاماة رقم 173 لسنة 1965', cat: 'org', scope: 'fed', status: 'نافذ (معدّل)', arts: [],
        note: 'مشروع تعديل هذا القانون في مرحلة القراءة الثانية بمجلس النواب منذ آب 2026 وفق مصادر صحفية.' },
      { id: 'krg-advocacy', title: 'قانون المحاماة في إقليم كوردستان رقم 17 لسنة 1999', cat: 'org', scope: 'krg', status: 'نافذ (معدّل)', arts: [] },
      { id: 'notary', title: 'قانون الكاتب العدل رقم 33 لسنة 1998', cat: 'org', scope: 'both', status: 'نافذ', arts: [] },
      { id: 'traffic', title: 'قانون المرور رقم 8 لسنة 2019', cat: 'org', scope: 'fed', status: 'نافذ', arts: [] },
      { id: 'judicial-fees', title: 'قانون الرسوم العدلية رقم 114 لسنة 1981', cat: 'org', scope: 'both', status: 'نافذ (معدّل)', arts: [],
        note: 'عُدّلت مبالغ الرسوم وحدودها بعد صدوره، ونطابق الجدول النافذ قبل نشره.' },
      { id: 'e-signature', title: 'قانون التوقيع الإلكتروني والمعاملات الإلكترونية رقم 78 لسنة 2012', cat: 'org', scope: 'fed', status: 'نافذ', arts: [
        A(3, 'لا تسري أحكام هذا القانون على مسائل الأحوال الشخصية، والوصية والوقف، والتصرفات في الأموال غير المنقولة عدا عقود إيجارها، والتصرفات التي يشترط لها القانون شكلاً معيناً، وإجراءات المحاكم، والمستندات الواجب تصديقها لدى الكاتب العدل.', S, 'ثانياً')] },
      { id: 'consumer', title: 'قانون حماية المستهلك رقم 1 لسنة 2010', cat: 'trade', scope: 'both', status: 'نافذ', arts: [] }
    ], cms.laws).filter(isPub).map((l) => ({ ...l, arts: l.arts || [] })).map((l) => ({
      ...l,
      title: ar(l.title),
      catLabel: catNames[l.cat],
      scopeLabel: scopeNames[l.scope],
      statusLabel: l.status,
      availability: l.arts.length ? count(new Set(l.arts.map((a) => a.n + '|' + (a.bis || 0))).size) + ' متاحة' : (lcfg.pendingShort || 'النصوص قيد الإدخال'),
      pending: l.arts.length === 0,
      hasArts: l.arts.length > 0,
      hasNote: !!l.note,
      meta: [['الجريدة الرسمية', l.gazette], ['تاريخ النفاذ', l.effective ? ar(l.effective) : ''], ['آخر مراجعة قانونية', [l.reviewedAt ? ar(l.reviewedAt) : '', l.reviewer || ''].filter(Boolean).join(' · ')]].filter((x) => x[1]).map(([k, v]) => ({ k, v })),
      source: l.source || '', hasSource: /^https?:\/\//.test(l.source || ''),
      amends: (l.amendments || []).filter((a) => a.ref || a.desc).map((a) => ({ head: (a.date ? ar(a.date) + ' · ' : '') + (a.ref || '') + ':', desc: a.desc || '' }))
    })).map((l) => ({ ...l, hasMeta: l.meta.length > 0 || l.hasSource || l.amends.length > 0 }));

    const { cat, scope, q, sel, art } = this.state;
    const nq = norm(q);
    const laws = all
      .filter((l) => (cat === 'all' || l.cat === cat) && (scope === 'all' || l.scope === scope || l.scope === 'both') && (!nq || norm(l.title + ' ' + l.catLabel).includes(nq)))
      .map((l) => ({ ...l, open: () => this.setState({ sel: l.id, art: '', limit: 40, part: '' }) }));
    const pill = (on) => ({ bg: on ? '#0F1E35' : '#FFFFFF', fg: on ? '#FFFFFF' : '#2B3A52', border: on ? '#0F1E35' : '#8F8778', on: on ? 'true' : 'false' });
    const cats = Object.keys(catNames).map((k) => ({ label: catNames[k], ...pill(k === cat), pick: () => this.setState({ cat: k }) }));
    const scopes = [['all', 'الكل'], ['fed', 'العراق الاتحادي'], ['krg', 'إقليم كوردستان']].map((s) => ({ label: s[1], ...pill(s[0] === scope), pick: () => this.setState({ scope: s[0] }) }));

    const law = sel ? all.find((l) => l.id === sel) : null;
    const BISL = ['', 'مكرراً', 'مكرراً ثانياً', 'مكرراً ثالثاً', 'مكرراً رابعاً', 'مكرراً خامساً'];
    const KINDL = { full: lcfg.fullLabel || 'النص الكامل', excerpt: lcfg.excerptLabel || 'مقتطف من النص', summary: lcfg.summaryLabel || 'ملخص المضمون' };
    const STL = { amended: 'معدّلة', repealed: 'ملغاة' };
    const aLabel = (a) => 'المادة ' + ar(a.n) + (Number(a.bis) ? ' ' + BISL[Number(a.bis)] : '') + (a.sub ? ' / ' + ar(a.sub) : '');
    const artsAll = law ? law.arts.map((a) => ({ ...a, bis: Number(a.bis) || 0 })) : [];
    const qa = toW(art).trim();
    const mNum = qa.match(/^(?:المادة|مادة|م)?\s*(\d{1,4})\s*(مكرر[ةاًه]*\s*(ثانياً|ثانيا|ثالثاً|ثالثا|رابعاً|رابعا|خامساً|خامسا)?)?\s*$/);
    const num = mNum ? parseInt(mNum[1], 10) : NaN;
    const hasNum = !isNaN(num);
    const wantBis = mNum && mNum[2] ? (mNum[3] ? ({ ثانيا: 2, ثالثا: 3, رابعا: 4, خامسا: 5 })[norm(mNum[3]).replace(/[^ء-ي]/g, '').replace(/ا?$/, 'ا')] || 2 : 1) : null;
    const nq2 = !hasNum && qa ? norm(qa) : '';
    const parts = []; artsAll.forEach((a) => { if (a.part && !parts.includes(a.part)) parts.push(a.part); });
    const partSel = parts.includes(this.state.part) ? this.state.part : '';
    const matched = artsAll.filter((a) => (hasNum ? a.n === num && (wantBis == null || a.bis === wantBis) : nq2 ? norm(aLabel(a) + ' ' + a.text + ' ' + (a.part || '') + ' ' + (a.chap || '')).includes(nq2) : (!partSel || a.part === partSel)));
    const lim = this.state.limit || 40;
    const shown = matched.slice(0, lim);
    const articles = shown.map((a, i) => {
      const prev = i > 0 ? shown[i - 1] : null;
      const showHead = !hasNum && !nq2;
      return {
        label: aLabel(a), anchor: 'art-' + a.n + (a.bis ? '-' + a.bis : '') + (a.sub ? '-' + i : ''),
        text: a.text, note: a.note || '', hasNote: !!String(a.note || '').trim(),
        kindLabel: KINDL[a.kind] || KINDL.excerpt,
        hasStatus: !!STL[a.status], statusLabel: STL[a.status] || '', op: a.status === 'repealed' ? '0.72' : '1', deco: a.status === 'repealed' ? 'line-through' : 'none',
        part: a.part || '', chap: a.chap || '',
        hasPart: showHead && !!a.part && (!prev || prev.part !== a.part),
        hasChap: showHead && !!a.chap && (!prev || prev.chap !== a.chap || prev.part !== a.part),
        // إعلان بين المواد: بعد المادة الخامسة ثم بعد الخامسة والعشرين، ولا يُعرض إن كان عدد المواد أقل من ذلك
        adAfter: (i === 4 && shown.length > 6) || (i === 24 && shown.length > 26), adPlace: i === 4 ? 'law-inline' : 'law-inline-2'
      };
    });
    const nums = Array.from(new Set(artsAll.map((a) => a.n)));
    const showChips = nums.length > 1 && nums.length <= 40;
    const chips = law && showChips ? [{ key: 'all', label: 'الكل' }].concat(nums.map((n) => ({ key: n, label: ar(n) }))).map((c) => {
      const on = c.key === 'all' ? !hasNum && !nq2 : num === c.key;
      return { label: c.label, ...pill(on), pick: () => this.setState({ art: c.key === 'all' ? '' : ar(c.key), limit: 40 }) };
    }) : [];
    const toc = parts.length > 1 && !hasNum && !nq2 ? [{ v: '', l: 'كل الأبواب' }].concat(parts.map((p) => ({ v: p, l: p }))).map((t) => ({ label: t.l, ...pill(t.v === partSel), pick: () => this.setState({ part: t.v, limit: 40 }) })) : [];
    const kinds = new Set(artsAll.map((a) => a.kind || 'excerpt'));
    const kindNote = kinds.size === 1 && kinds.has('full') ? (lcfg.fullNote || 'النص الكامل لمواد هذا القانون كما نُشر في جريدة الوقائع العراقية. المرجع الملزم هو النص المنشور في الجريدة الرسمية.') : LT.excerptNote;
    const avail = nums.length > 60 ? 'من ' + ar(Math.min(...nums)) + ' إلى ' + ar(Math.max(...nums)) : nums.map((n) => ar(n)).join('، ');

    return {
      LT,
      pgHero,
      pendingTitle: lcfg.pendingTitle || 'نصوص هذا القانون قيد الإدخال', pendingText: lcfg.pendingText || 'نُدخل النص الحرفي من جريدة الوقائع العراقية، ثم يراجعه المستشار القانوني للمنصة قبل نشره هنا.',
      cats, scopes, laws, q,
      empty: laws.length === 0,
      countLabel: 'عدد القوانين: ' + ar(laws.length),
      noSubmit: (e) => e.preventDefault(),
      onQ: (e) => this.setState({ q: e.target.value }),
      showList: !law, showLaw: !!law,
      law: law || { title: '', catLabel: '', statusLabel: '', scopeLabel: '', note: '', hasNote: false, pending: false, hasArts: false, meta: [], amends: [], hasMeta: false, hasSource: false, source: '' },
      art, hasArt: art !== '',
      onArt: (e) => this.setState({ art: e.target.value, limit: 40 }),
      clearArt: () => this.setState({ art: '' }),
      chips, articles, showChips, toc, hasToc: toc.length > 0, kindNote,
      artHelp: showChips ? 'أو اختر رقماً من القائمة.' : 'المواد المتاحة: ' + avail + '.',
      hasCountLine: matched.length > 0 && (matched.length !== artsAll.length || matched.length > lim), countLine: (nq2 ? 'نتائج البحث: ' : partSel ? partSel + ': ' : '') + count(matched.length) + (matched.length > lim ? '، يُعرض منها ' + ar(shown.length) : ''),
      hasMore: matched.length > lim, moreLabel: 'عرض ' + ar(Math.min(40, matched.length - lim)) + ' أخرى', showMore: () => this.setState({ limit: lim + 40 }),
      noArt: !!law && law.hasArts && articles.length === 0,
      noArtLabel: nq2 ? 'لا توجد مادة تحتوي «' + art + '» في هذا القانون.' : 'هذه المادة غير متاحة بعد في المكتبة. المواد المتاحة: ' + avail + '.',
      titleRef: this.titleRef, topRef: this.topRef,
      back: () => this.setState({ sel: null, art: '' })
    };
  }
}
return Component;
});
