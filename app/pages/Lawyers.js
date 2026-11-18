MQ_DEF("Lawyers", "<div dir=\"rtl\" style=\"font-family: 'IBM Plex Sans Arabic', system-ui, sans-serif; color: #0F1E35; background: #FAF7F0; min-height: 100vh\">\n<dc-import name=\"Header\" active=\"lawyers\" hint-size=\"100%,81px\"></dc-import>\n<main id=\"main\" ref=\"{{topRef}}\" tabindex=\"-1\" style=\"outline: none\">\n\n<sc-if value=\"{{showProfile}}\" hint-placeholder-val=\"{{false}}\">\n<dc-import name=\"LawyerProfile\" lawyer=\"{{sel}}\" on-back=\"{{back}}\" on-book=\"{{startBooking}}\" hint-size=\"100%,1300px\"></dc-import>\n</sc-if>\n\n<sc-if value=\"{{showBooking}}\" hint-placeholder-val=\"{{false}}\">\n<section style=\"background: #0F1E35\">\n<div style=\"max-width: 900px; margin: 0 auto; padding: 24px 20px 120px; box-sizing: border-box\">\n<button type=\"button\" onClick=\"{{endBooking}}\" style=\"display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 16px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.3); background: transparent; color: #E6EAF0; font: inherit; font-size: 14px; cursor: pointer\">\n<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#E6EAF0\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M9 6l6 6-6 6\"></path></svg>العودة إلى ملف المحامي</button>\n</div>\n</section>\n<div style=\"max-width: 900px; margin: -88px auto 0; padding: 0 20px; box-sizing: border-box\">\n<dc-import name=\"Booking\" lawyer=\"{{sel}}\" on-close=\"{{endBooking}}\" hint-size=\"100%,720px\"></dc-import>\n</div>\n</sc-if>\n\n<sc-if value=\"{{showList}}\" hint-placeholder-val=\"{{true}}\">\n<section style=\"background: #0F1E35\">\n<div style=\"max-width: 1240px; margin: 0 auto; padding: clamp(40px, 6vw, 64px) 20px clamp(96px, 10vw, 120px); display: flex; flex-direction: column; gap: 14px\">\n<span style=\"font-size: 14px; color: #AEB8C8\">الرئيسية / المحامون</span>\n<h1 style=\"margin: 0; font-size: clamp(28px, 5.5vw, 44px); font-weight: 700; color: #FFFFFF\">{{pgHero.t1}}<sc-if value=\"{{pgHero.hasT2}}\" hint-placeholder-val=\"{{false}}\"><br>{{pgHero.t2}}</sc-if></h1>\n<p style=\"margin: 0; font-size: clamp(16px, 2.4vw, 18px); line-height: 1.8; color: #D5DBE5; max-width: 600px\">{{pgHero.text}}</p>\n</div>\n</section>\n\n<section style=\"position: relative; margin-top: -56px; background: #FFFFFF; border-radius: clamp(24px, 4vw, 40px); box-shadow: 0 -24px 48px -32px rgba(11,23,41,0.6)\">\n<div style=\"max-width: 1240px; margin: 0 auto; padding: clamp(32px, 5vw, 48px) 20px clamp(48px, 7vw, 80px)\">\n<div style=\"display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 20px\">\n<div class=\"fw\" style=\"flex: 2 1 260px; display: flex; align-items: center; gap: 10px; height: 52px; padding: 0 16px; border: 1px solid #8F8778; border-radius: 14px; background: #FAF7F0; box-sizing: border-box\">\n<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#3A4860\" stroke-width=\"1.8\" stroke-linecap=\"round\" aria-hidden=\"true\"><circle cx=\"11\" cy=\"11\" r=\"7\"></circle><path d=\"M20 20l-3.5-3.5\"></path></svg>\n<label for=\"lw-q\" style=\"position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)\">ابحث باسم المحامي</label>\n<input id=\"lw-q\" type=\"search\" value=\"{{q}}\" onChange=\"{{onQ}}\" placeholder=\"ابحث باسم المحامي\" style=\"flex: 1; min-width: 0; border: none; outline: none; background: transparent; font: inherit; font-size: 16px; color: #0F1E35\">\n</div>\n<div style=\"flex: 1 1 200px; display: flex; flex-direction: column\">\n<label for=\"lw-gov\" style=\"position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)\">المحافظة</label>\n<select id=\"lw-gov\" value=\"{{gov}}\" onChange=\"{{onGov}}\" style=\"height: 52px; padding: 0 14px; border: 1px solid #8F8778; border-radius: 14px; background: #FAF7F0; font: inherit; font-size: 16px; color: #0F1E35\">\n<sc-for list=\"{{govs}}\" as=\"g\" hint-placeholder-count=\"5\"><option value=\"{{g.value}}\">{{g.label}}</option></sc-for>\n</select>\n</div>\n</div>\n<div role=\"group\" aria-label=\"مجال الممارسة\" style=\"display: flex; flex-wrap: nowrap; overflow-x: auto; gap: 8px; padding-bottom: 4px; margin-bottom: 24px\">\n<sc-for list=\"{{specs}}\" as=\"s\" hint-placeholder-count=\"8\">\n<button type=\"button\" aria-pressed=\"{{s.on}}\" onClick=\"{{s.pick}}\" style=\"flex: 0 0 auto; min-height: 44px; padding: 0 18px; border-radius: 999px; border: 1px solid {{s.border}}; background: {{s.bg}}; color: {{s.fg}}; font: inherit; font-size: 15px; font-weight: 500; cursor: pointer; white-space: nowrap\">{{s.label}}</button>\n</sc-for>\n</div>\n<div style=\"display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px 16px; margin-bottom: 18px\">\n<p role=\"status\" style=\"margin: 0; font-size: 14px; color: #3A4860\">{{countLabel}}</p>\n<p style=\"margin: 0; font-size: 13px; color: #3A4860\">{{WT.demoNote}}</p>\n</div>\n\n<div class=\"lw-grid\">\n<sc-for list=\"{{lawyers}}\" as=\"l\" hint-placeholder-count=\"8\">\n<a class=\"card\" href=\"#main\" onClick=\"{{l.open}}\" style=\"display: flex; flex-direction: column; gap: 14px; padding: 20px; background: #FFFFFF; border: 1px solid #E3DCCB; border-radius: 20px; color: #0F1E35\">\n<div style=\"display: flex; align-items: center; gap: 12px\">\n<sc-if value=\"{{l.hasPhoto}}\" hint-placeholder-val=\"{{false}}\"><img src=\"{{l.photo}}\" alt=\"\" style=\"flex: 0 0 56px; width: 56px; height: 56px; border-radius: 50%; object-fit: cover\"></sc-if>\n<sc-if value=\"{{l.noPhoto}}\" hint-placeholder-val=\"{{true}}\"><span aria-hidden=\"true\" style=\"flex: 0 0 56px; width: 56px; height: 56px; border-radius: 50%; background: {{l.tone}}; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 600; color: #FFFFFF\">{{l.initial}}</span></sc-if>\n<span style=\"display: flex; flex-direction: column; gap: 2px; min-width: 0\">\n<span style=\"display: flex; align-items: center; gap: 6px; font-size: 16px; font-weight: 700\">{{l.name}}<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" role=\"img\" aria-label=\"موثّق\" style=\"flex: 0 0 16px\"><path d=\"M12 2l2.4 1.8 3 .1.9 2.8 2.4 1.8-.9 2.9.9 2.8-2.4 1.8-.9 2.8-3 .1L12 20.8l-2.4-1.8-3-.1-.9-2.8-2.4-1.8.9-2.8-.9-2.9 2.4-1.8.9-2.8 3-.1z\" fill=\"#C9A24D\"></path><path d=\"M8.5 12l2.4 2.4 4.6-4.6\" fill=\"none\" stroke=\"#0F1E35\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></span>\n<span style=\"font-size: 14px; color: #2B3A52\">{{l.field}}</span>\n</span>\n</div>\n<div style=\"display: flex; flex-direction: column; gap: 4px; font-size: 13px; color: #3A4860\">\n<span>{{l.gov}} · {{l.yearsLabel}} منذ القيد</span>\n<span>{{l.unionLabel}}</span>\n</div>\n<span style=\"margin-top: auto; padding-top: 12px; border-top: 1px solid #F0EBDF; font-size: 14px; font-weight: 600\">عرض الملف ←</span>\n</a>\n</sc-for>\n</div>\n<sc-if value=\"{{empty}}\" hint-placeholder-val=\"{{false}}\">\n<p style=\"margin: 0; padding: 48px 0; text-align: center; color: #3A4860; font-size: 16px\">{{emptyText}}</p>\n</sc-if>\n</div>\n</section>\n</sc-if>\n\n</main>\n<div style=\"height: clamp(64px, 9vw, 112px)\"></div>\n<dc-import name=\"Footer\" hint-size=\"100%,460px\"></dc-import>\n</div>", "\nbody{margin:0;background:#FAF7F0}\na{color:#0F1E35;text-decoration:none}\n:focus-visible{outline:2px solid #C9A24D;outline-offset:2px}\n.fw:focus-within{outline:2px solid #C9A24D;outline-offset:2px}\n.lw-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px}\n@media (max-width:1100px){.lw-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}\n@media (max-width:820px){.lw-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}\n@media (max-width:540px){.lw-grid{grid-template-columns:minmax(0,1fr)}}\n.card:hover{box-shadow:0 18px 36px -24px rgba(15,30,53,0.45)}\n", function (DCLogic, React) {
"use strict";
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { spec: 'all', gov: 'all', q: '', sel: null, booking: false };
    this.topRef = (el) => { this.topEl = el; };
  }
  componentDidMount() {
    try {
      const id = window.localStorage.getItem('mq_lawyer');
      if (id) { window.localStorage.removeItem('mq_lawyer'); this.setState({ sel: id }); }
      const f = window.localStorage.getItem('mq_lawyerFilter');
      if (f) { window.localStorage.removeItem('mq_lawyerFilter'); const o = JSON.parse(f); this.setState({ spec: o.spec || 'all', gov: o.gov || 'all' }); }
    } catch (e) {}
  }
  componentDidUpdate(pp, ps) {
    if (ps.sel !== this.state.sel || ps.booking !== this.state.booking) {
      try { if (this.topEl) this.topEl.scrollIntoView({ block: 'start' }); if (!this.state.sel && this.topEl) this.topEl.focus({ preventScroll: true }); } catch (e) {}
    }
  }
  renderVals() {
    const cms = (() => { try { return JSON.parse(window.localStorage.getItem('mq_cms') || '{}') || {}; } catch (e) { return {}; } })();
    const mergeL = (seed, c, idk) => { idk = idk || 'id'; c = c || {}; const up = c.upsert || {}; const rm = new Set(c.removed || []); const out = (seed || []).filter((r) => !rm.has(r[idk])).map((r) => (up[r[idk]] ? { ...r, ...up[r[idk]] } : r)); Object.keys(up).forEach((id) => { if (!rm.has(id) && !(seed || []).some((r) => r[idk] === id)) out.push(up[id]); }); return out; };
    const isPub = (r) => (r.state || 'published') === 'published';
    const pgc = cms.pages || {};
    const pgHero = { t1: pgc.lawyers_t1 || "دليل المحامين الموثّقين", t2: pgc.lawyers_t1 != null ? (pgc.lawyers_t2 || '') : "", text: pgc.lawyers_text || "محامون تحققنا من قيدهم في نقابة المحامين العراقيين أو نقابة محامي كوردستان. اختر حسب مجال الممارسة والمحافظة." };
    pgHero.hasT2 = !!pgHero.t2;
    const lyc = cms.lawyersCfg || {};
    const D = '٠١٢٣٤٥٦٧٨٩', P = '۰۱۲۳۴۵۶۷۸۹';
    const toW = (s) => String(s).replace(/[٠-٩]/g, (d) => D.indexOf(d)).replace(/[۰-۹]/g, (d) => P.indexOf(d));
    const ar = (s) => String(s).replace(/[0-9]/g, (d) => D[d]);
    const norm = (s) => toW(s).toLowerCase().replace(/[ً-ْـ]/g, '').replace(/[أإآٱ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي').replace(/\s+/g, ' ').trim();
    const yrs = (n) => n <= 1 ? 'سنة واحدة' : n === 2 ? 'سنتان' : n <= 10 ? ar(n) + ' سنوات' : ar(n) + ' سنة';
    const months = ['كانون الثاني', 'شباط', 'آذار', 'نيسان', 'أيار', 'حزيران', 'تموز', 'آب', 'أيلول', 'تشرين الأول', 'تشرين الثاني', 'كانون الأول'];
    const dateAr = (iso) => { const [y, m, d] = iso.split('-').map(Number); return ar(d) + ' ' + months[m - 1] + ' ' + ar(y); };
    const thisYear = new Date().getFullYear();
    const unions = { iraq: 'نقابة المحامين العراقيين', krd: 'نقابة محامي كوردستان' };
    const specNames = { all: 'الكل', trade: 'التجاري والشركات', family: 'الأحوال الشخصية', penal: 'الجزائي', labor: 'العمل', estate: 'العقارات والإيجار', admin: 'الإداري', arb: 'التحكيم' };
    Object.keys(specNames).forEach((k) => { if (lyc['spec_' + k]) specNames[k] = lyc['spec_' + k]; });
    if (String(lyc.allAreas || '').trim()) specNames.all = lyc.allAreas;
    const WT = { ...{"demoNote": "الملفات المعروضة نماذج تجريبية لأغراض التصميم."}, ...lyc };
    const tones = ['#1C3660', '#24426F', '#2C4C7C'];
    const all = mergeL([
      { id: 'ali-aljubouri', name: 'أ. علي حسن الجبوري', spec: 'trade', gov: 'بغداد', union: 'iraq', barYear: 2008, initial: 'ع', langs: 'العربية، الإنجليزية', verified: '2026-09-14', areas: ['تأسيس الشركات', 'العقود التجارية', 'النزاعات التجارية'], edu: ['بكالوريوس القانون، جامعة بغداد', 'ماجستير القانون الخاص'], bio: 'يعمل في قضايا الشركات والعقود التجارية، ويتولى صياغة عقود التأسيس ومتابعة النزاعات التجارية أمام محاكم البداءة في بغداد.' },
      { id: 'zainab-almousawi', name: 'أ. زينب كاظم الموسوي', spec: 'family', gov: 'النجف', union: 'iraq', barYear: 2014, initial: 'ز', langs: 'العربية', verified: '2026-08-30', areas: ['الزواج والطلاق', 'النفقة', 'الحضانة'], edu: ['بكالوريوس القانون، جامعة الكوفة'], bio: 'تعمل في قضايا الأحوال الشخصية أمام محاكم النجف، وتشمل النفقة والحضانة والتفريق.' },
      { id: 'ahmed-alsaadi', name: 'أ. أحمد عبد الكريم السعدي', spec: 'penal', gov: 'البصرة', union: 'iraq', barYear: 2011, initial: 'أ', langs: 'العربية، الإنجليزية', verified: '2026-10-02', areas: ['الدفاع في القضايا الجزائية', 'الشكاوى الجزائية', 'الجرائم المالية'], edu: ['بكالوريوس القانون، جامعة البصرة'], bio: 'يترافع في القضايا الجزائية في البصرة، ويتابع الشكاوى من مرحلة التحقيق حتى المحاكمة.' },
      { id: 'sara-alobaidi', name: 'أ. سارة جاسم العبيدي', spec: 'labor', gov: 'أربيل', union: 'krd', barYear: 2017, initial: 'س', langs: 'العربية، الكوردية، الإنجليزية', verified: '2026-09-21', areas: ['عقود العمل', 'إنهاء الخدمة', 'الضمان الاجتماعي'], edu: ['بكالوريوس القانون، جامعة صلاح الدين'], bio: 'تعمل في قضايا العمل في إقليم كوردستان، وتقدّم الاستشارات لأصحاب العمل والعمال.' },
      { id: 'mustafa-altamimi', name: 'أ. مصطفى رعد التميمي', spec: 'estate', gov: 'كربلاء', union: 'iraq', barYear: 2015, initial: 'م', langs: 'العربية', verified: '2026-07-18', areas: ['عقود الإيجار', 'نقل الملكية', 'نزاعات العقارات'], edu: ['بكالوريوس القانون، جامعة كربلاء'], bio: 'يعمل في قضايا العقارات والإيجار، ويرافق موكليه في إجراءات التسجيل العقاري.' },
      { id: 'noor-saleh', name: 'أ. نور الهدى صالح', spec: 'admin', gov: 'نينوى', union: 'iraq', barYear: 2018, initial: 'ن', langs: 'العربية، الإنجليزية', verified: '2026-09-05', areas: ['الطعون الإدارية', 'قضايا الموظفين'], edu: ['بكالوريوس القانون، جامعة الموصل', 'ماجستير القانون العام'], bio: 'تعمل في القضايا الإدارية وقضايا الموظفين أمام محاكم نينوى.' },
      { id: 'haider-alrubaie', name: 'أ. حيدر فاضل الربيعي', spec: 'arb', gov: 'بابل', union: 'iraq', barYear: 2012, initial: 'ح', langs: 'العربية، الإنجليزية', verified: '2026-08-11', areas: ['التحكيم التجاري', 'تسوية النزاعات', 'عقود المقاولات'], edu: ['بكالوريوس القانون، جامعة بابل'], bio: 'يعمل في التحكيم وتسوية النزاعات التجارية وعقود المقاولات.' },
      { id: 'hiba-aldulaimi', name: 'أ. هبة سعد الدليمي', spec: 'family', gov: 'الأنبار', union: 'iraq', barYear: 2019, initial: 'هـ', langs: 'العربية', verified: '2026-10-12', areas: ['الطلاق', 'النفقة', 'إثبات النسب'], edu: ['بكالوريوس القانون، جامعة الأنبار'], bio: 'تعمل في قضايا الأحوال الشخصية في الأنبار.' }
    ], cms.lawyers).filter((l) => (l.status || 'active') === 'active').map((l) => ({ areas: [], edu: [], langs: 'العربية', ...l }));
    if (lyc.order === 'alpha') all.sort((a, b) => a.name.replace(/^أ\.\s*/, '').localeCompare(b.name.replace(/^أ\.\s*/, ''), 'ar'));
    else { let seed = Number(new Date().toISOString().slice(0, 10).replace(/-/g, '')); const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }; for (let i = all.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [all[i], all[j]] = [all[j], all[i]]; } }
    const allL = all.map((l, i) => ({
      ...l, hasPhoto: /^(https?:|\/|data:)/.test(l.photo || ''), noPhoto: !/^(https?:|\/|data:)/.test(l.photo || ''), tone: tones[i % 3], field: specNames[l.spec], unionLabel: unions[l.union],
      yearsLabel: yrs(thisYear - l.barYear), verifiedLabel: dateAr(l.verified)
    }));
    all.length = 0; allL.forEach((x) => all.push(x));
    const { spec, gov, q, sel, booking } = this.state;
    const nq = norm(q);
    const lawyers = all
      .filter((l) => (spec === 'all' || l.spec === spec) && (gov === 'all' || l.gov === gov) && (!nq || norm(l.name).includes(nq)))
      .map((l) => ({ ...l, open: () => this.setState({ sel: l.id, booking: false }) }));
    const selected = all.find((l) => l.id === sel) || null;
    const govList = ['all'].concat(lyc.govs && lyc.govs.length ? lyc.govs : ['بغداد', 'البصرة', 'نينوى', 'أربيل', 'السليمانية', 'دهوك', 'حلبجة', 'كركوك', 'الأنبار', 'صلاح الدين', 'ديالى', 'بابل', 'كربلاء', 'النجف', 'واسط', 'القادسية', 'ذي قار', 'ميسان', 'المثنى']);
    const pill = (on) => ({ bg: on ? '#0F1E35' : '#FFFFFF', fg: on ? '#FFFFFF' : '#2B3A52', border: on ? '#0F1E35' : '#8F8778', on: on ? 'true' : 'false' });
    return {
      WT, hasDemoNote: !!WT.demoNote,
      pgHero,
      q, gov, lawyers, emptyText: lyc.emptyText || 'لا يوجد بعد محامون موثّقون مطابقون لهذا الاختيار. جرّب مجالاً آخر أو «كل المحافظات».',
      empty: lawyers.length === 0,
      countLabel: 'عدد المحامين: ' + ar(lawyers.length),
      govs: govList.map((g) => ({ value: g, label: g === 'all' ? 'كل المحافظات' : g })),
      specs: Object.keys(specNames).map((k) => ({ label: specNames[k], ...pill(k === spec), pick: () => this.setState({ spec: k }) })),
      onQ: (e) => this.setState({ q: e.target.value }),
      onGov: (e) => this.setState({ gov: e.target.value }),
      sel: selected,
      showList: !selected, showProfile: !!selected && !booking, showBooking: !!selected && booking,
      back: () => this.setState({ sel: null, booking: false }),
      startBooking: () => this.setState({ booking: true }),
      endBooking: () => this.setState({ booking: false }),
      topRef: this.topRef
    };
  }
}
return Component;
});
