MQ_DEF("Calculator", "<div dir=\"rtl\" style=\"font-family: 'IBM Plex Sans Arabic', system-ui, sans-serif; color: #0F1E35; background: #FAF7F0; min-height: 100vh\">\n<dc-import name=\"Header\" active=\"services\" hint-size=\"100%,81px\"></dc-import>\n<main id=\"main\" tabindex=\"-1\" style=\"outline: none\">\n\n<section style=\"background: #0F1E35\">\n<div style=\"max-width: 1240px; margin: 0 auto; padding: clamp(40px, 6vw, 64px) 20px clamp(96px, 10vw, 120px); display: flex; flex-direction: column; gap: 14px\">\n<span style=\"font-size: 14px; color: #AEB8C8\"><a href=\"Services.dc.html\" style=\"color: #AEB8C8\">الخدمات</a> / الحاسبة القانونية</span>\n<h1 style=\"margin: 0; font-size: clamp(28px, 5.5vw, 44px); font-weight: 700; color: #FFFFFF\">{{pgHero.t1}}<sc-if value=\"{{pgHero.hasT2}}\" hint-placeholder-val=\"{{false}}\"><br>{{pgHero.t2}}</sc-if></h1>\n<p style=\"margin: 0; font-size: clamp(16px, 2.4vw, 18px); line-height: 1.8; color: #D5DBE5; max-width: 620px\">{{pgHero.text}}</p>\n</div>\n</section>\n\n<section style=\"max-width: 1100px; margin: -56px auto 0; padding: 0 20px; position: relative; box-sizing: border-box\">\n<div style=\"background: #FFFFFF; border-radius: clamp(20px, 3vw, 28px); box-shadow: 0 24px 48px -32px rgba(15,30,53,0.35); overflow: hidden\">\n<div style=\"display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; padding: 14px; border-bottom: 1px solid #F0EBDF; background: #FCFAF5\">\n<div role=\"group\" aria-label=\"نوع الحساب\" style=\"display: flex; flex-wrap: nowrap; overflow-x: auto; gap: 6px\">\n<sc-for list=\"{{tabs}}\" as=\"t\" hint-placeholder-count=\"3\">\n<button type=\"button\" aria-pressed=\"{{t.on}}\" onClick=\"{{t.pick}}\" style=\"flex: 0 0 auto; min-height: 48px; padding: 0 18px; border-radius: 12px; border: 1px solid {{t.border}}; background: {{t.bg}}; color: #0F1E35; font: inherit; font-size: 15px; font-weight: 600; cursor: pointer; white-space: nowrap\">{{t.label}}</button>\n</sc-for>\n</div>\n<div style=\"display: flex; align-items: center; gap: 8px\">\n<label for=\"c-region\" style=\"font-size: 14px; color: #3A4860\">المنطقة</label>\n<select id=\"c-region\" value=\"{{region}}\" onChange=\"{{onRegion}}\" style=\"height: 48px; padding: 0 12px; border: 1px solid #8F8778; border-radius: 12px; background: #FFFFFF; font: inherit; font-size: 16px; color: #0F1E35\">\n<option value=\"fed\">العراق الاتحادي</option>\n<option value=\"krg\">إقليم كوردستان</option>\n</select>\n</div>\n</div>\n\n<div style=\"display: flex; flex-wrap: wrap; gap: 28px; padding: clamp(20px, 4vw, 40px)\">\n<div style=\"flex: 999 1 360px; min-width: 0; display: flex; flex-direction: column; gap: 18px\">\n\n<sc-if value=\"{{isEos}}\" hint-placeholder-val=\"{{true}}\">\n<h2 style=\"margin: 0; font-size: 21px; font-weight: 700\">مكافأة نهاية الخدمة</h2>\n<sc-if value=\"{{krgEos}}\" hint-placeholder-val=\"{{false}}\">\n<p style=\"margin: 0; font-size: 15px; line-height: 1.9; color: #2B3A52; background: #F3EEE2; border-radius: 14px; padding: 14px 16px\">{{T.krgNotice}}</p>\n</sc-if>\n<sc-if value=\"{{fedEos}}\" hint-placeholder-val=\"{{true}}\">\n<div style=\"display: flex; flex-direction: column; gap: 8px\">\n<label for=\"c-wage\" style=\"font-size: 14px; font-weight: 600\">الأجر الشهري الأخير (دينار عراقي)</label>\n<input id=\"c-wage\" type=\"text\" inputmode=\"numeric\" dir=\"ltr\" value=\"{{wage}}\" onChange=\"{{onWage}}\" placeholder=\"900,000\" style=\"height: 52px; padding: 0 16px; border: 1px solid #8F8778; border-radius: 14px; background: #FAF7F0; font: inherit; font-size: 16px; color: #0F1E35; text-align: right\">\n</div>\n<div style=\"display: flex; flex-direction: column; gap: 8px\">\n<label for=\"c-years\" style=\"font-size: 14px; font-weight: 600\">مدة الخدمة بالسنوات</label>\n<input id=\"c-years\" type=\"text\" inputmode=\"decimal\" dir=\"ltr\" value=\"{{years}}\" onChange=\"{{onYears}}\" placeholder=\"6.5\" style=\"height: 52px; padding: 0 16px; border: 1px solid #8F8778; border-radius: 14px; background: #FAF7F0; font: inherit; font-size: 16px; color: #0F1E35; text-align: right\">\n</div>\n<div style=\"display: flex; flex-direction: column; gap: 8px\">\n<label for=\"c-reason\" style=\"font-size: 14px; font-weight: 600\">سبب انتهاء الخدمة</label>\n<select id=\"c-reason\" value=\"{{reason}}\" onChange=\"{{onReason}}\" style=\"height: 52px; padding: 0 14px; border: 1px solid #8F8778; border-radius: 14px; background: #FAF7F0; font: inherit; font-size: 16px; color: #0F1E35\">\n<option value=\"normal\">انتهاء الخدمة لسبب غير مستثنى</option>\n<option value=\"excluded\">إنهاء لإخلال جسيم أو حالة مستثناة في المادة ٤٣</option>\n<option value=\"arbitrary\">فصل بغير وجه حق مع تعذّر إعادة العامل</option>\n</select>\n<span style=\"font-size: 13px; color: #3A4860\">إن لم تكن متأكداً من سبب الإنهاء فراجع محامياً، لأنه يغيّر النتيجة.</span>\n</div>\n</sc-if>\n</sc-if>\n\n<sc-if value=\"{{isDeadline}}\" hint-placeholder-val=\"{{false}}\">\n<h2 style=\"margin: 0; font-size: 21px; font-weight: 700\">مواعيد الطعن والاعتراض</h2>\n<div style=\"display: flex; flex-direction: column; gap: 8px\">\n<label for=\"c-type\" style=\"font-size: 14px; font-weight: 600\">نوع الإجراء</label>\n<select id=\"c-type\" value=\"{{dtype}}\" onChange=\"{{onDtype}}\" style=\"height: 52px; padding: 0 14px; border: 1px solid #8F8778; border-radius: 14px; background: #FAF7F0; font: inherit; font-size: 16px; color: #0F1E35\">\n<sc-for list=\"{{dtypes}}\" as=\"o\" hint-placeholder-count=\"6\"><option value=\"{{o.k}}\">{{o.label}}</option></sc-for>\n</select>\n</div>\n<div style=\"display: flex; flex-direction: column; gap: 8px\">\n<label for=\"c-date\" style=\"font-size: 14px; font-weight: 600\">تاريخ التبليغ</label>\n<input id=\"c-date\" type=\"date\" value=\"{{date}}\" onChange=\"{{onDate}}\" style=\"height: 52px; padding: 0 16px; border: 1px solid #8F8778; border-radius: 14px; background: #FAF7F0; font: inherit; font-size: 16px; color: #0F1E35\">\n<span style=\"font-size: 13px; line-height: 1.7; color: #3A4860\">{{T.dateHelp}}</span>\n</div>\n<sc-if value=\"{{labourKrg}}\" hint-placeholder-val=\"{{false}}\">\n<p style=\"margin: 0; font-size: 14px; line-height: 1.8; color: #2B3A52; background: #F3EEE2; border-radius: 12px; padding: 12px 14px\">{{T.labourKrg}}</p>\n</sc-if>\n</sc-if>\n\n<sc-if value=\"{{isFees}}\" hint-placeholder-val=\"{{false}}\">\n<h2 style=\"margin: 0; font-size: 21px; font-weight: 700\">رسوم الدعوى</h2>\n<p style=\"margin: 0; font-size: 15px; line-height: 1.9; color: #2B3A52\">{{T.feesIntro}}</p>\n<div style=\"display: flex; flex-direction: column; gap: 10px; padding: 16px 18px; border: 1px solid #E3DCCB; border-radius: 16px\">\n<h3 style=\"margin: 0; font-size: 16px; font-weight: 700\">ما الذي يحدد رسم الدعوى؟</h3>\n<sc-for list=\"{{feeFactors}}\" as=\"f\" hint-placeholder-count=\"4\">\n<span style=\"display: flex; gap: 10px; font-size: 14px; line-height: 1.8; color: #2B3A52\"><span style=\"flex: 0 0 6px; width: 6px; height: 6px; margin-top: 10px; border-radius: 50%; background: #0F1E35\"></span>{{f}}</span>\n</sc-for>\n</div>\n</sc-if>\n</div>\n\n<div style=\"flex: 1 1 300px; min-width: 0; background: #0F1E35; border-radius: 22px; padding: clamp(22px, 3vw, 30px); display: flex; flex-direction: column; gap: 12px; color: #D5DBE5; align-self: stretch\">\n<span style=\"font-size: 14px; font-weight: 600; color: #C8CFDB\">{{resultTitle}}</span>\n<span aria-live=\"polite\" style=\"font-size: clamp(26px, 5vw, 38px); font-weight: 700; color: #FFFFFF; line-height: 1.4\">{{result}}</span>\n<span style=\"font-size: 14px; line-height: 1.8\">{{resultNote}}</span>\n<sc-if value=\"{{hasBasis}}\" hint-placeholder-val=\"{{true}}\">\n<span style=\"font-size: 13px; line-height: 1.8; color: #AEB8C8\">السند: {{basis}}</span>\n</sc-if>\n<div style=\"margin-top: auto; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.12); display: flex; flex-direction: column; gap: 10px\">\n<span style=\"font-size: 13px; line-height: 1.8; color: #AEB8C8\">{{T.disclaimer}}</span>\n<a href=\"Lawyers.dc.html\" style=\"font-size: 15px; font-weight: 700; color: #FFFFFF; text-decoration: underline; text-decoration-color: #C9A24D; text-underline-offset: 6px\">{{T.lawyerLink}}</a>\n</div>\n</div>\n</div>\n</div>\n</section>\n<div style=\"max-width: 1100px; margin: 0 auto; padding: 40px 20px 0; box-sizing: border-box\"><dc-import name=\"AdSlot\" size=\"leader\" place=\"calc-leader\" hint-size=\"100%,120px\"></dc-import></div>\n\n</main>\n<div style=\"height: clamp(64px, 9vw, 112px)\"></div>\n<dc-import name=\"Footer\" hint-size=\"100%,460px\"></dc-import>\n</div>", "\nbody{margin:0;background:#FAF7F0}\na{color:#0F1E35;text-decoration:none}\n:focus-visible{outline:2px solid #C9A24D;outline-offset:2px}\n", function (DCLogic, React) {
"use strict";
class Component extends DCLogic {
  constructor(props) {
    super(props);
    let reg0 = 'fed'; try { const c0 = JSON.parse(window.localStorage.getItem('mq_cms') || '{}'); if (c0.site && c0.site.defaultRegion === 'krg') reg0 = 'krg'; } catch (e) {}
    this.state = { tab: 'eos', region: reg0, wage: '', years: '', reason: 'normal', dtype: 'appeal', date: '' };
  }
  renderVals() {
    const cms = (() => { try { return JSON.parse(window.localStorage.getItem('mq_cms') || '{}') || {}; } catch (e) { return {}; } })();
    const mergeL = (seed, c, idk) => { idk = idk || 'id'; c = c || {}; const up = c.upsert || {}; const rm = new Set(c.removed || []); const out = (seed || []).filter((r) => !rm.has(r[idk])).map((r) => (up[r[idk]] ? { ...r, ...up[r[idk]] } : r)); Object.keys(up).forEach((id) => { if (!rm.has(id) && !(seed || []).some((r) => r[idk] === id)) out.push(up[id]); }); return out; };
    const isPub = (r) => (r.state || 'published') === 'published';
    const pgc = cms.pages || {};
    const pgHero = { t1: pgc.calculator_t1 || "الحاسبة القانونية", t2: pgc.calculator_t1 != null ? (pgc.calculator_t2 || '') : "", text: pgc.calculator_text || "نتائج تقديرية مبنية على نصوص القانون، مع ذكر المادة التي تستند إليها كل نتيجة." };
    pgHero.hasT2 = !!pgHero.t2;
    const cc = { divisor: 30, daysPerYear: 14, arbitraryMult: 2, weekend: '5,6', useHolidays: true, feesNote: '', eosBasis: '', krgEos: '', ...(cms.calc || {}) };
    const T = { ...{"krgNotice": "في إقليم كوردستان يُطبَّق قانون العمل رقم ٧١ لسنة ١٩٨٧ وفق المصادر المتاحة، وهذه الحاسبة مبنية على القانون الاتحادي. راجع محامياً مقيَّداً في نقابة محامي كوردستان لحساب مستحقاتك.", "dateHelp": "تبدأ المدة من اليوم التالي للتبليغ لا من تاريخ صدور الحكم.", "labourKrg": "هذا الميعاد من قانون العمل الاتحادي، وقد يختلف في إقليم كوردستان.", "feesIntro": "حساب الرسوم متوقف مؤقتاً حتى نعتمد جدول الرسوم النافذ، لأن مبالغ الرسوم وحدودها عُدّلت بعد صدور القانون، وأي رقم غير محدّث قد يضللك.", "disclaimer": "النتيجة تقديرية للاسترشاد فقط ولا تُعدّ رأياً قانونياً.", "lawyerLink": "راجع النتيجة مع محامٍ"}, ...cc };
    const HOL = [{"id": "h-0101", "date": "2026-01-01", "name": "رأس السنة الميلادية", "recurring": true}, {"id": "h-0106", "date": "2026-01-06", "name": "عيد الجيش", "recurring": true}, {"id": "h-0321", "date": "2026-03-21", "name": "عيد نوروز", "recurring": true}, {"id": "h-0501", "date": "2026-05-01", "name": "عيد العمال", "recurring": true}, {"id": "h-0714", "date": "2026-07-14", "name": "ذكرى ثورة ١٤ تموز", "recurring": true}, {"id": "h-1003", "date": "2026-10-03", "name": "اليوم الوطني", "recurring": true}, {"id": "h-1225", "date": "2026-12-25", "name": "عيد الميلاد", "recurring": true}];
    const hols = mergeL(HOL, cms.holidays);
    const wkd = String(cc.weekend || '5,6').split(',').filter((x) => x !== '').map(Number);
    const isHol = (d) => { if (!cc.useHolidays) return null; const iso = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); return hols.find((h) => h.date === iso || (h.recurring && h.date && h.date.slice(5) === iso.slice(5))) || null; };
    const D = '٠١٢٣٤٥٦٧٨٩', P = '۰۱۲۳۴۵۶۷۸۹';
    const toW = (x) => String(x).replace(/[٠-٩]/g, (d) => D.indexOf(d)).replace(/[۰-۹]/g, (d) => P.indexOf(d));
    const ar = (x) => String(x).replace(/[0-9]/g, (d) => D[d]);
    const num = (x) => {
      const t = toW(x).replace(/[\s,٬'_]/g, '').replace(/٫/g, '.').replace(/[^0-9.]/g, '');
      if (!t || (t.match(/\./g) || []).length > 1) return null;
      const n = parseFloat(t);
      return isNaN(n) ? null : n;
    };
    const money = (n) => { try { return Math.round(n).toLocaleString('ar-IQ') + ' دينار'; } catch (e) { return ar(Math.round(n)) + ' دينار'; } };
    const s = this.state;
    const dtypesBase = [
      { k: 'objection', label: 'اعتراض على حكم غيابي (١٠ أيام)', days: 10, basis: 'المادة ١٧٧ من قانون المرافعات المدنية' },
      { k: 'appeal', label: 'استئناف حكم بدائي (١٥ يوماً)', days: 15, basis: 'المادة ١٨٧ من قانون المرافعات المدنية' },
      { k: 'retrial', label: 'إعادة المحاكمة (١٥ يوماً)', days: 15, basis: 'المادة ١٩٨ من قانون المرافعات المدنية' },
      { k: 'cassation', label: 'الطعن تمييزاً (٣٠ يوماً)', days: 30, basis: 'المادة ٢٠٤ من قانون المرافعات المدنية' },
      { k: 'cassation-ps', label: 'الطعن تمييزاً في حكم أحوال شخصية (١٠ أيام)', days: 10, basis: 'المادة ٢٠٤ من قانون المرافعات المدنية، وفق مصادر شارحة' },
      { k: 'correction', label: 'تصحيح القرار التمييزي (٧ أيام)', days: 7, basis: 'المادة ٢٢١ من قانون المرافعات المدنية' },
      { k: 'labour', label: 'الطعن في إنهاء الخدمة أمام محكمة العمل (٣٠ يوماً)', days: 30, basis: 'المادة ٤٦ من قانون العمل رقم ٣٧ لسنة ٢٠١٥' }
    ];
    const dTxt = (n) => (n === 1 ? 'يوم واحد' : n === 2 ? 'يومان' : n <= 10 ? ar(n) + ' أيام' : ar(n) + ' يوماً');
    const dtypes = mergeL(dtypesBase.map((d) => ({ id: d.k, ...d, enabled: true })), cms.deadlines).filter((d) => d.enabled !== false).map((d) => ({ ...d, k: d.id || d.k, days: Number(d.days), label: String(d.label || '').replace(/\s*\([^)]*\)\s*$/, '') + ' (' + dTxt(Number(d.days)) + ')' }));
    let resultTitle = '', result = '—', resultNote = '', basis = '';
    const krg = s.region === 'krg';
    if (s.tab === 'eos') {
      resultTitle = 'المكافأة التقديرية';
      basis = cc.eosBasis || 'المادتان ٤٥ و٤٧ من قانون العمل رقم ٣٧ لسنة ٢٠١٥';
      const w = num(s.wage), y = num(s.years);
      if (krg) { result = 'غير متاح'; resultNote = cc.krgEos || 'اختر «العراق الاتحادي» أو راجع محامياً في الإقليم.'; basis = ''; }
      else if (s.reason === 'excluded') { result = 'لا مكافأة غالباً'; resultNote = 'الإنهاء في الحالات المستثناة في المادة ٤٣ لا يرتّب مكافأة نهاية الخدمة. تحقق من تكييف سبب الإنهاء مع محامٍ.'; }
      else if (w !== null && y !== null && w > 0 && y > 0) {
        const base = (w / Number(cc.divisor || 30)) * Number(cc.daysPerYear || 14) * y;
        const total = s.reason === 'arbitrary' ? base * Number(cc.arbitraryMult || 2) : base;
        result = money(total);
        resultNote = 'أجر ' + ar(Number(cc.daysPerYear || 14)) + ' يوماً عن كل سنة خدمة، على أساس الأجر اليومي = الأجر الشهري ÷ ' + ar(Number(cc.divisor || 30)) + (s.reason === 'arbitrary' ? (Number(cc.arbitraryMult || 2) === 2 ? '، مضاعفاً لتعذّر إعادة العامل.' : '، مضروباً في ' + ar(cc.arbitraryMult) + ' لتعذّر إعادة العامل.') : '.') + ' أساس الأجر المعتمد في الاحتساب يحتاج تأكيداً من محامٍ.';
      } else resultNote = 'أدخل الأجر الشهري ومدة الخدمة لعرض النتيجة. يمكنك الكتابة بالأرقام العربية أو الإنجليزية، مع الفواصل أو بدونها.';
    }
    if (s.tab === 'deadline') {
      const t = dtypes.find((x) => x.k === s.dtype) || dtypes[0] || dtypesBase[1];
      resultTitle = 'آخر يوم لتقديم ' + t.label.replace(/\s*\(.*\)$/, '');
      basis = t.basis + '، والمادتان ١٧٢ و٢٥ منه لبدء المدة وامتدادها';
      if (s.date) {
        const d = new Date(s.date + 'T00:00:00');
        d.setDate(d.getDate() + t.days);
        let moved = 0, holName = '';
        for (let g = 0; g < 30; g++) { const hh = isHol(d); if (!wkd.includes(d.getDay()) && !hh) break; if (hh && !holName) holName = hh.name; d.setDate(d.getDate() + 1); moved++; }
        try { result = d.toLocaleDateString('ar-IQ', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }); } catch (e) { result = ar(d.toISOString().slice(0, 10)); }
        resultNote = 'المدة ' + dTxt(t.days) + ' تبدأ من اليوم التالي للتبليغ.' + (moved ? (holName ? ' وقع آخر يوم في عطلة رسمية (' + holName + ') فامتدت المدة إلى أول يوم عمل.' : ' وقع آخر يوم في عطلة نهاية الأسبوع فامتدت المدة إلى أول يوم عمل.') : '') + (cc.useHolidays ? ' احتُسبت العطل الرسمية المسجّلة في المنصة، فتحقق من أي عطلة طارئة يعلنها مجلس الوزراء.' : ' لم تُحتسب العطل الرسمية، وإذا وقع آخر يوم في إحداها امتدت المدة إلى أول يوم عمل بعدها.');
      } else resultNote = 'اختر نوع الإجراء وتاريخ التبليغ لعرض النتيجة.';
    }
    if (s.tab === 'fees') {
      resultTitle = 'رسوم الدعوى';
      result = 'قيد الاعتماد';
      resultNote = cc.feesNote || 'سنفعّل الحساب بعد اعتماد جدول الرسوم النافذ من المستشار القانوني للمنصة.';
      basis = 'قانون الرسوم العدلية رقم ١١٤ لسنة ١٩٨١ (المعدّل)';
    }
    const tabsDef = [{ k: 'eos', label: 'مكافأة نهاية الخدمة' }, { k: 'deadline', label: 'مواعيد الطعن' }, { k: 'fees', label: 'رسوم الدعوى' }];
    return {
      T,
      pgHero,
      tabs: tabsDef.map((t) => ({ label: t.label, on: t.k === s.tab ? 'true' : 'false', bg: t.k === s.tab ? '#FFFFFF' : 'transparent', border: t.k === s.tab ? '#0F1E35' : 'transparent', pick: () => this.setState({ tab: t.k }) })),
      region: s.region, onRegion: (e) => this.setState({ region: e.target.value }),
      isEos: s.tab === 'eos', isDeadline: s.tab === 'deadline', isFees: s.tab === 'fees',
      krgEos: krg, fedEos: !krg,
      labourKrg: krg && s.dtype === 'labour',
      wage: s.wage, years: s.years, reason: s.reason, dtype: s.dtype, date: s.date,
      onWage: (e) => this.setState({ wage: e.target.value }),
      onYears: (e) => this.setState({ years: e.target.value }),
      onReason: (e) => this.setState({ reason: e.target.value }),
      onDtype: (e) => this.setState({ dtype: e.target.value }),
      onDate: (e) => this.setState({ date: e.target.value }),
      dtypes,
      feeFactors: (cc.feeFactors && cc.feeFactors.length) ? cc.feeFactors : ['نسبة من قيمة الدعوى، مع حد أدنى وحد أعلى يحددهما الجدول النافذ.', 'رسوم مقطوعة لبعض أنواع الدعاوى، ورسوم خاصة بدعاوى الأحوال الشخصية.', 'رسوم مستقلة للاستئناف والتمييز.', 'إعفاءات، منها إعفاء العمال من رسوم الدعاوى العمالية وفق المصادر المتاحة.'],
      resultTitle, result, resultNote, basis, hasBasis: !!basis
    };
  }
}
return Component;
});
