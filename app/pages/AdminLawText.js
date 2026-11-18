MQ_DEF("AdminLawText", "<div class=\"lt\" dir=\"rtl\" style=\"font-family: 'IBM Plex Sans Arabic', system-ui, sans-serif\">\n\n<div class=\"lt-stats\" role=\"status\" aria-live=\"polite\">\n<sc-for list=\"{{stats}}\" as=\"s\" hint-placeholder-count=\"4\"><span class=\"lt-stat\">{{s.k}} <b>{{s.v}}</b></span></sc-for>\n</div>\n\n<sc-if value=\"{{hasIssues}}\" hint-placeholder-val=\"{{false}}\">\n<ul class=\"lt-iss\" aria-label=\"فحص الترقيم\">\n<sc-for list=\"{{issues}}\" as=\"i\" hint-placeholder-count=\"2\"><li class=\"lt-i {{i.cls}}\"><span class=\"tx\">{{i.text}}</span><sc-if value=\"{{i.hasFix}}\" hint-placeholder-val=\"{{false}}\"><button type=\"button\" class=\"lt-b sm\" onClick=\"{{i.fix}}\">{{i.fixLabel}}</button></sc-if></li></sc-for>\n</ul>\n</sc-if>\n\n<div class=\"lt-bar\">\n<input class=\"lt-q\" type=\"search\" value=\"{{q}}\" onChange=\"{{onQ}}\" placeholder=\"ابحث برقم المادة أو بكلمة من نصها\" aria-label=\"البحث في المواد\">\n<button type=\"button\" class=\"lt-b pri\" onClick=\"{{addEnd}}\">+ إضافة مادة</button>\n<button type=\"button\" class=\"lt-b\" onClick=\"{{toggleBulk}}\" aria-expanded=\"{{bulkExp}}\">إدخال بالجملة</button>\n<button type=\"button\" class=\"lt-b\" onClick=\"{{toggleTools}}\" aria-expanded=\"{{toolsExp}}\">أدوات الترقيم</button>\n</div>\n\n<sc-if value=\"{{toolsOpen}}\" hint-placeholder-val=\"{{false}}\">\n<div class=\"lt-pan\">\n<h3>أدوات الترقيم</h3>\n<p>«ترتيب حسب الرقم» يرتّب المواد تصاعدياً مع المكرر والفقرات دون تغيير أي رقم. أما «إعادة الترقيم» فتغيّر الأرقام نفسها، فاستعملها للمسودات المكتوبة يدوياً فقط: أرقام المواد المنشورة يجب أن تطابق جريدة الوقائع العراقية.</p>\n<div class=\"lt-bar\">\n<button type=\"button\" class=\"lt-b\" onClick=\"{{sortAll}}\" disabled=\"{{noArts}}\">ترتيب حسب الرقم</button>\n</div>\n<div class=\"lt-g\">\n<div class=\"lt-f\"><label for=\"{{ids.renum}}\">إعادة الترقيم تسلسلياً ابتداءً من</label><input id=\"{{ids.renum}}\" type=\"text\" inputmode=\"numeric\" value=\"{{renumFrom}}\" onChange=\"{{onRenumFrom}}\"></div>\n<div class=\"lt-f\"><span class=\"lb\">التطبيق</span>\n<sc-if value=\"{{renumAsk}}\" hint-placeholder-val=\"{{false}}\"><span class=\"lt-acts\"><button type=\"button\" class=\"lt-b dan\" onClick=\"{{doRenum}}\">تأكيد: {{renumSummary}}</button><button type=\"button\" class=\"lt-b\" onClick=\"{{cancelRenum}}\">تراجع</button></span></sc-if>\n<sc-if value=\"{{renumIdle}}\" hint-placeholder-val=\"{{true}}\"><button type=\"button\" class=\"lt-b\" onClick=\"{{askRenum}}\" disabled=\"{{noArts}}\">إعادة الترقيم…</button></sc-if>\n</div>\n</div>\n</div>\n</sc-if>\n\n<sc-if value=\"{{bulkOpen}}\" hint-placeholder-val=\"{{false}}\">\n<div class=\"lt-pan\">\n<h3>إدخال المواد بالجملة</h3>\n<p>الصق نص القانون أو جزءاً منه. يتعرّف المحلل على «المادة ١» و«المادة (١)» و«المادة -١-» و«المادة الأولى» و«المادة ١٢ مكرراً» وعلى الأبواب والفصول، ويقبل الأرقام العربية والهندية. راجع المعاينة قبل الاعتماد.</p>\n<div class=\"lt-f w\"><label for=\"{{ids.bulk}}\">النص</label><textarea id=\"{{ids.bulk}}\" rows=\"10\" value=\"{{bulkText}}\" onChange=\"{{onBulkText}}\" placeholder=\"الباب الأول: أحكام عامة&#10;المادة 1: …&#10;المادة 2: …\"></textarea></div>\n<div class=\"lt-g\">\n<div class=\"lt-f\"><label for=\"{{ids.mode}}\">طريقة الإدخال</label><select id=\"{{ids.mode}}\" value=\"{{bulkMode}}\" onChange=\"{{onBulkMode}}\"><sc-for list=\"{{modeOpts}}\" as=\"o\" hint-placeholder-count=\"3\"><option value=\"{{o.v}}\">{{o.l}}</option></sc-for></select></div>\n<div class=\"lt-f\"><label for=\"{{ids.kind}}\">نوع النص</label><select id=\"{{ids.kind}}\" value=\"{{bulkKind}}\" onChange=\"{{onBulkKind}}\"><sc-for list=\"{{kindOpts}}\" as=\"o\" hint-placeholder-count=\"3\"><option value=\"{{o.v}}\">{{o.l}}</option></sc-for></select></div>\n<div class=\"lt-f\"><label for=\"{{ids.start}}\">إن لم توجد عناوين مواد: رقّم المقاطع ابتداءً من</label><input id=\"{{ids.start}}\" type=\"text\" inputmode=\"numeric\" value=\"{{bulkStart}}\" onChange=\"{{onBulkStart}}\"></div>\n</div>\n<button type=\"button\" class=\"lt-sw\" role=\"switch\" aria-checked=\"{{splitSw.on}}\" onClick=\"{{toggleSplit}}\"><span class=\"tr\" style=\"background: {{splitSw.bg}}\"><span class=\"kn\" style=\"inset-inline-start: {{splitSw.x}}\"></span></span>فصل فقرات المادة (أولاً، ثانياً… أو ١-، ٢-… أو أ-، ب-…) إلى بنود مستقلة</button>\n<div class=\"lt-acts\">\n<button type=\"button\" class=\"lt-b pri\" onClick=\"{{analyze}}\" disabled=\"{{bulkEmpty}}\">تحليل النص</button>\n<button type=\"button\" class=\"lt-b\" onClick=\"{{closeBulk}}\">إغلاق</button>\n</div>\n<sc-if value=\"{{hasParsed}}\" hint-placeholder-val=\"{{false}}\">\n<div class=\"lt-stats\" role=\"status\"><sc-for list=\"{{pStats}}\" as=\"s\" hint-placeholder-count=\"3\"><span class=\"lt-stat\">{{s.k}} <b>{{s.v}}</b></span></sc-for></div>\n<sc-if value=\"{{pHasIssues}}\" hint-placeholder-val=\"{{false}}\"><ul class=\"lt-iss\"><sc-for list=\"{{pIssues}}\" as=\"i\" hint-placeholder-count=\"2\"><li class=\"lt-i {{i.cls}}\"><span class=\"tx\">{{i.text}}</span></li></sc-for></ul></sc-if>\n<div class=\"lt-prev\" aria-label=\"معاينة المواد المستخرجة\">\n<sc-for list=\"{{pRows}}\" as=\"r\" hint-placeholder-count=\"4\"><div class=\"lt-pr {{r.cls}}\"><span class=\"h\">{{r.h}}</span><sc-if value=\"{{r.hasS}}\" hint-placeholder-val=\"{{true}}\"><span class=\"s\">{{r.s}}</span></sc-if></div></sc-for>\n</div>\n<div class=\"lt-acts\">\n<button type=\"button\" class=\"lt-b pri\" onClick=\"{{applyBulk}}\" disabled=\"{{pNone}}\">{{applyLabel}}</button>\n<button type=\"button\" class=\"lt-b\" onClick=\"{{discardParsed}}\">تعديل النص</button>\n</div>\n</sc-if>\n</div>\n</sc-if>\n\n<div class=\"lt-list\">\n<sc-for list=\"{{rows}}\" as=\"r\" hint-placeholder-count=\"3\">\n<sc-if value=\"{{r.hasHead}}\" hint-placeholder-val=\"{{false}}\"><div class=\"lt-head\">{{r.head}}</div></sc-if>\n<div class=\"lt-row {{r.cls}}\">\n<div class=\"lt-rh\">\n<span class=\"lt-num\">{{r.label}}</span>\n<span class=\"lt-tag\">{{r.kindLabel}}</span>\n<sc-if value=\"{{r.hasStatus}}\" hint-placeholder-val=\"{{false}}\"><span class=\"lt-tag st\">{{r.statusLabel}}</span></sc-if>\n<sc-if value=\"{{r.hasFlag}}\" hint-placeholder-val=\"{{false}}\"><span class=\"lt-tag bad\">{{r.flag}}</span></sc-if>\n<span class=\"lt-sp\"></span>\n<span class=\"lt-acts\">\n<button type=\"button\" class=\"lt-b sm\" onClick=\"{{r.toggle}}\" aria-expanded=\"{{r.exp}}\">{{r.toggleLabel}}</button>\n<button type=\"button\" class=\"lt-b sm\" aria-label=\"{{r.upAria}}\" onClick=\"{{r.up}}\" disabled=\"{{r.first}}\">↑</button>\n<button type=\"button\" class=\"lt-b sm\" aria-label=\"{{r.downAria}}\" onClick=\"{{r.down}}\" disabled=\"{{r.last}}\">↓</button>\n<sc-if value=\"{{r.askDel}}\" hint-placeholder-val=\"{{false}}\"><button type=\"button\" class=\"lt-b sm dan\" onClick=\"{{r.del}}\">تأكيد الحذف</button><button type=\"button\" class=\"lt-b sm\" onClick=\"{{r.cancelDel}}\">تراجع</button></sc-if>\n<sc-if value=\"{{r.noAskDel}}\" hint-placeholder-val=\"{{true}}\"><button type=\"button\" class=\"lt-b sm dan\" aria-label=\"{{r.delAria}}\" onClick=\"{{r.ask}}\">حذف</button></sc-if>\n</span>\n</div>\n<sc-if value=\"{{r.closed}}\" hint-placeholder-val=\"{{true}}\"><p class=\"lt-snip\">{{r.snip}}</p></sc-if>\n<sc-if value=\"{{r.open}}\" hint-placeholder-val=\"{{false}}\">\n<div class=\"lt-g\">\n<div class=\"lt-f\"><label for=\"{{r.ids.n}}\">رقم المادة</label><input id=\"{{r.ids.n}}\" type=\"text\" inputmode=\"numeric\" value=\"{{r.nVal}}\" onChange=\"{{r.onN}}\"></div>\n<div class=\"lt-f\"><label for=\"{{r.ids.bis}}\">مكرر</label><select id=\"{{r.ids.bis}}\" value=\"{{r.bisVal}}\" onChange=\"{{r.onBis}}\"><sc-for list=\"{{bisOpts}}\" as=\"o\" hint-placeholder-count=\"3\"><option value=\"{{o.v}}\">{{o.l}}</option></sc-for></select></div>\n<div class=\"lt-f\"><label for=\"{{r.ids.sub}}\">الفقرة (اختياري)</label><input id=\"{{r.ids.sub}}\" type=\"text\" value=\"{{r.a.sub}}\" onChange=\"{{r.onSub}}\" placeholder=\"أولاً، ١، أ\"></div>\n<div class=\"lt-f\"><label for=\"{{r.ids.kind}}\">نوع النص</label><select id=\"{{r.ids.kind}}\" value=\"{{r.a.kind}}\" onChange=\"{{r.onKind}}\"><sc-for list=\"{{kindOpts}}\" as=\"o\" hint-placeholder-count=\"3\"><option value=\"{{o.v}}\">{{o.l}}</option></sc-for></select></div>\n<div class=\"lt-f\"><label for=\"{{r.ids.status}}\">الحالة</label><select id=\"{{r.ids.status}}\" value=\"{{r.a.status}}\" onChange=\"{{r.onStatus}}\"><sc-for list=\"{{statusOpts}}\" as=\"o\" hint-placeholder-count=\"3\"><option value=\"{{o.v}}\">{{o.l}}</option></sc-for></select></div>\n<div class=\"lt-f\"><label for=\"{{r.ids.part}}\">الباب أو الكتاب</label><input id=\"{{r.ids.part}}\" type=\"text\" value=\"{{r.a.part}}\" onChange=\"{{r.onPart}}\" placeholder=\"الباب الأول: أحكام عامة\"></div>\n<div class=\"lt-f\"><label for=\"{{r.ids.chap}}\">الفصل أو الفرع</label><input id=\"{{r.ids.chap}}\" type=\"text\" value=\"{{r.a.chap}}\" onChange=\"{{r.onChap}}\" placeholder=\"الفصل الثاني: …\"></div>\n<div class=\"lt-f w\"><label for=\"{{r.ids.text}}\">نص المادة</label><textarea id=\"{{r.ids.text}}\" rows=\"6\" value=\"{{r.a.text}}\" onChange=\"{{r.onText}}\"></textarea></div>\n<div class=\"lt-f w\"><label for=\"{{r.ids.note}}\">ملاحظة تظهر تحت المادة (اختياري)</label><input id=\"{{r.ids.note}}\" type=\"text\" value=\"{{r.a.note}}\" onChange=\"{{r.onNote}}\" placeholder=\"عُدّلت بموجب القانون رقم … لسنة …\"></div>\n</div>\n<div class=\"lt-acts\">\n<button type=\"button\" class=\"lt-b\" onClick=\"{{r.insertAfter}}\">+ إدراج مادة بعدها</button>\n<button type=\"button\" class=\"lt-b\" onClick=\"{{r.dupBis}}\">+ إضافة «مكرر» لها</button>\n<button type=\"button\" class=\"lt-b pri\" onClick=\"{{r.toggle}}\">تم</button>\n</div>\n</sc-if>\n</div>\n</sc-for>\n<sc-if value=\"{{empty}}\" hint-placeholder-val=\"{{false}}\"><div class=\"lt-empty\">{{emptyText}}</div></sc-if>\n</div>\n\n<sc-if value=\"{{multiPage}}\" hint-placeholder-val=\"{{false}}\">\n<div class=\"lt-pg\">\n<span>{{pageLabel}}</span>\n<span class=\"lt-acts\"><button type=\"button\" class=\"lt-b sm\" onClick=\"{{prevPage}}\" disabled=\"{{isFirstPage}}\">السابق</button><button type=\"button\" class=\"lt-b sm\" onClick=\"{{nextPage}}\" disabled=\"{{isLastPage}}\">التالي</button></span>\n</div>\n</sc-if>\n\n</div>", "\n.lt{display:flex;flex-direction:column;gap:14px;min-width:0;color:#0F1E35}\n.lt *{box-sizing:border-box}\n.lt-stats{display:flex;flex-wrap:wrap;gap:8px}\n.lt-stat{display:inline-flex;align-items:baseline;gap:6px;padding:8px 12px;border-radius:12px;background:#FFFFFF;border:1px solid #E3DCCB;font-size:13px;color:#3A4860}\n.lt-stat b{font-size:16px;color:#0F1E35}\n.lt-iss{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px}\n.lt-i{display:flex;flex-wrap:wrap;align-items:center;gap:8px 10px;padding:9px 12px;border-radius:12px;font-size:13.5px;line-height:1.7}\n.lt-i.err{background:#F7E3E3;color:#7A1D20}\n.lt-i.warn{background:#F6EBD0;color:#5E4710}\n.lt-i.info{background:#F3EEE2;color:#2B3A52}\n.lt-i .tx{flex:1 1 260px;min-width:0}\n.lt-bar{display:flex;flex-wrap:wrap;gap:8px;align-items:center}\n.lt-q{flex:1 1 220px;min-width:0;height:44px;padding:0 14px;border:1px solid #8F8778;border-radius:12px;background:#FFFFFF;font:inherit;font-size:14.5px;color:#0F1E35}\n.lt-b{display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:44px;padding:0 14px;border-radius:12px;border:1px solid #8F8778;background:#FFFFFF;font:inherit;font-size:14px;font-weight:600;color:#0F1E35;cursor:pointer;white-space:nowrap}\n.lt-b.pri{background:#C9A24D;border-color:#C9A24D;font-weight:700}\n.lt-b.dan{border-color:#A3282B;color:#A3282B}\n.lt-b.sm{min-height:34px;padding:0 10px;font-size:13px;border-radius:10px}\n.lt-b:disabled{opacity:.45;cursor:not-allowed}\n.lt-b:focus-visible,.lt-q:focus,.lt input:focus,.lt select:focus,.lt textarea:focus{outline:2px solid #C9A24D;outline-offset:1px}\n.lt-pan{display:flex;flex-direction:column;gap:12px;padding:16px;border:1px solid #D9D2C3;border-radius:16px;background:#FFFFFF}\n.lt-pan h3{margin:0;font-size:15.5px;font-weight:700}\n.lt-pan p{margin:0;font-size:13.5px;line-height:1.8;color:#3A4860}\n.lt-g{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,170px),1fr));gap:10px 12px}\n.lt-f{display:flex;flex-direction:column;gap:6px;min-width:0}\n.lt-f.w{grid-column:1/-1}\n.lt-f label,.lt-f .lb{font-size:13px;font-weight:600;color:#0F1E35}\n.lt input[type=text],.lt select{width:100%;height:42px;padding:0 12px;border:1px solid #8F8778;border-radius:11px;background:#FFFFFF;font:inherit;font-size:14.5px;color:#0F1E35}\n.lt textarea{width:100%;padding:10px 12px;border:1px solid #8F8778;border-radius:11px;background:#FFFFFF;font:inherit;font-size:15px;line-height:1.9;color:#0F1E35;resize:vertical}\n.lt-sw{align-self:flex-start;display:inline-flex;align-items:center;gap:10px;min-height:38px;padding:0 2px;border:0;background:transparent;font:inherit;font-size:13.5px;color:#0F1E35;cursor:pointer;text-align:start}\n.lt-sw .tr{flex:0 0 auto;width:40px;height:22px;border-radius:999px;position:relative}\n.lt-sw .kn{position:absolute;top:3px;width:16px;height:16px;border-radius:50%;background:#FFFFFF;box-shadow:0 1px 3px rgba(0,0,0,.25)}\n.lt-prev{display:flex;flex-direction:column;gap:0;border:1px solid #E3DCCB;border-radius:12px;background:#FAF7F0;max-height:320px;overflow:auto}\n.lt-pr{display:flex;flex-direction:column;gap:2px;padding:9px 12px;border-bottom:1px solid #EDE7DA;font-size:13.5px;line-height:1.7}\n.lt-pr .h{font-weight:700;color:#0F1E35}\n.lt-pr .s{color:#3A4860}\n.lt-pr.hd{background:#F3EEE2;font-weight:700;color:#5E4710}\n.lt-list{display:flex;flex-direction:column;gap:8px}\n.lt-head{margin-top:6px;padding:6px 2px;font-size:13.5px;font-weight:700;color:#5E4710;border-bottom:1px dashed #C9A24D}\n.lt-row{display:flex;flex-direction:column;gap:8px;padding:12px 14px;border:1px solid #E3DCCB;border-radius:14px;background:#FFFFFF}\n.lt-row.on{border-color:#0F1E35;box-shadow:0 0 0 1px #0F1E35}\n.lt-row.bad{border-color:#A3282B}\n.lt-rh{display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px}\n.lt-num{font-size:15px;font-weight:700;color:#0F1E35}\n.lt-tag{font-size:12px;padding:2px 9px;border-radius:999px;border:1px solid #D9D2C3;color:#3A4860;background:#FAF7F0}\n.lt-tag.st{border-color:#C9A24D;color:#5E4710;background:#F6EBD0}\n.lt-tag.bad{border-color:#A3282B;color:#A3282B;background:#FFFFFF}\n.lt-sp{flex:1 1 auto}\n.lt-acts{display:flex;flex-wrap:wrap;gap:6px}\n.lt-snip{margin:0;font-size:14px;line-height:1.85;color:#2B3A52;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}\n.lt-empty{padding:28px 12px;text-align:center;border:1px dashed #8F8778;border-radius:14px;font-size:14px;line-height:1.9;color:#3A4860}\n.lt-pg{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px;font-size:13.5px;color:#3A4860}\n", function (DCLogic, React) {
"use strict";
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { q: '', page: 0, edit: null, del: null, bulk: false, tools: false, text: '', mode: 'append', kind: 'full', split: false, start: '1', parsed: null, renumFrom: '1', renumAsk: false, focusId: '' };
  }
  componentDidUpdate() {
    if (this.state.focusId) { const id = this.state.focusId; this.setState({ focusId: '' }); try { const el = document.getElementById(id); if (el) { el.focus(); if (el.scrollIntoView) el.scrollIntoView({ block: 'center' }); } } catch (e) {} }
  }
  renderVals() {
    const D = '٠١٢٣٤٥٦٧٨٩', PD = '۰۱۲۳۴۵۶۷۸۹';
    const ar = (x) => String(x).replace(/[0-9]/g, (d) => D[d]);
    const toW = (x) => String(x == null ? '' : x).replace(/[٠-٩]/g, (d) => D.indexOf(d)).replace(/[۰-۹]/g, (d) => PD.indexOf(d));
    const nrm = (s) => toW(s).replace(/[ً-ْٰـ]/g, '').replace(/[أإآٱ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي');
    const plural = (n, one, two, few, many) => (n === 1 ? one : n === 2 ? two : n >= 3 && n <= 10 ? ar(n) + ' ' + few : ar(n) + ' ' + many);
    const pre = (this.props.idPrefix || 'lt') + '-lt';
    const st = this.state;
    const BIS = ['', 'مكرراً', 'مكرراً ثانياً', 'مكرراً ثالثاً', 'مكرراً رابعاً', 'مكرراً خامساً'];
    const KIND = { full: 'النص الكامل', excerpt: 'مقتطف من النص', summary: 'ملخص المضمون' };
    const STATUS = { active: 'نافذة', amended: 'معدّلة', repealed: 'ملغاة' };
    const ORDW = ['أولاً', 'ثانياً', 'ثالثاً', 'رابعاً', 'خامساً', 'سادساً', 'سابعاً', 'ثامناً', 'تاسعاً', 'عاشراً'];
    const LET = 'أبجدهوزحطيكلمنسعفصقرشتثخذضظغ';

    // ---------- model ----------
    const intOf = (x) => { const t = toW(x).replace(/[^0-9]/g, ''); return t === '' ? '' : parseInt(t, 10); };
    const normA = (a) => {
      a = a || {};
      const n = typeof a.n === 'number' ? a.n : intOf(a.n);
      return { n: n === '' ? '' : n, bis: Math.max(0, Math.min(5, Number(a.bis) || 0)), sub: String(a.sub || ''), part: String(a.part || ''), chap: String(a.chap || ''), kind: KIND[a.kind] ? a.kind : 'excerpt', status: STATUS[a.status] ? a.status : 'active', text: String(a.text || ''), note: String(a.note || '') };
    };
    const list = (Array.isArray(this.props.value) ? this.props.value : []).map(normA);
    const emit = (next) => { if (this.props.onChange) this.props.onChange(next.map(normA)); };
    const letters = (x) => nrm(x).replace(/[^\u0621-\u064A0-9]/g, '');
    const ORDN = ORDW.map(letters);
    const subRank = (x) => {
      const t = letters(String(x || '').trim());
      if (!t) return 0;
      const oi = ORDN.findIndex((w) => w === t || w === t + 'ا');
      if (oi >= 0) return oi + 1;
      if (/^[0-9]+$/.test(t)) return parseInt(t, 10);
      const li = LET.indexOf(String(x).trim().slice(0, 1).replace(/[إآ]/g, 'أ'));
      return li >= 0 ? li + 1 : 99;
    };
    const keyOf = (a) => (a.n === '' ? -1 : a.n) * 1000 + a.bis * 100 + Math.min(99, subRank(a.sub));
    const label = (a) => (a.n === '' ? 'مادة بلا رقم' : 'المادة ' + ar(a.n)) + (a.bis ? ' ' + BIS[a.bis] : '') + (a.sub ? ' / ' + ar(a.sub) : '');
    const sortL = (l) => l.map((a, i) => ({ a, i })).sort((x, y) => keyOf(x.a) - keyOf(y.a) || x.i - y.i).map((x) => x.a);
    const ranges = (nums) => { const out = []; let s = null, p = null; nums.forEach((n) => { if (s === null) { s = n; p = n; } else if (n === p + 1) p = n; else { out.push(s === p ? ar(s) : ar(s) + '–' + ar(p)); s = n; p = n; } }); if (s !== null) out.push(s === p ? ar(s) : ar(s) + '–' + ar(p)); return out; };

    const analyzeL = (l) => {
      const seen = {}; const dups = []; let noNum = 0, noText = 0, order = 0;
      l.forEach((a, i) => {
        if (a.n === '' || !(a.n > 0)) noNum++;
        if (!a.text.trim()) noText++;
        const k = a.n + '|' + a.bis + '|' + nrm(a.sub).trim();
        if (a.n !== '' && seen[k] != null) dups.push(label(a)); else seen[k] = i;
        if (i > 0 && a.n !== '' && l[i - 1].n !== '' && keyOf(a) < keyOf(l[i - 1])) order++;
      });
      const ns = Array.from(new Set(l.filter((a) => a.n > 0).map((a) => a.n))).sort((x, y) => x - y);
      const have = new Set(ns); const missing = [];
      if (ns.length) for (let n = ns[0]; n <= ns[ns.length - 1] && missing.length < 5000; n++) if (!have.has(n)) missing.push(n);
      const orphan = l.filter((a) => a.bis > 0 && !l.some((b) => b.n === a.n && b.bis === a.bis - 1)).map(label);
      const fullShare = l.length ? l.filter((a) => a.kind === 'full').length / l.length : 0;
      return { dups, noNum, noText, order, missing, orphan, ns, fullShare, distinct: new Set(l.filter((a) => a.n > 0).map((a) => a.n + '|' + a.bis)).size };
    };

    // ---------- parser ----------
    const ORD = { اول: 1, اولي: 1, حادي: 1, حاديه: 1, ثاني: 2, ثانيه: 2, ثالث: 3, ثالثه: 3, رابع: 4, رابعه: 4, خامس: 5, خامسه: 5, سادس: 6, سادسه: 6, سابع: 7, سابعه: 7, ثامن: 8, ثامنه: 8, تاسع: 9, تاسعه: 9, عاشر: 10, عاشره: 10 };
    const TENS = { عشرون: 20, عشرين: 20, ثلاثون: 30, ثلاثين: 30, اربعون: 40, اربعين: 40, خمسون: 50, خمسين: 50, ستون: 60, ستين: 60, سبعون: 70, سبعين: 70, ثمانون: 80, ثمانين: 80, تسعون: 90, تسعين: 90 };
    const HUND = { مائه: 100, مئه: 100, مايه: 100, مئتين: 200, مائتين: 200, مئتان: 200, مائتان: 200 };
    const bare = (w) => { let x = nrm(w).replace(/[^ء-ي]/g, ''); const strip = (y) => (y.startsWith('ال') ? y.slice(2) : y); let y = strip(x); if (ORD[y] || TENS[y] || HUND[y] || y === 'عشر' || y === 'عشره' || y === 'بعد') return y; if (x.startsWith('و')) { y = strip(x.slice(1)); if (ORD[y] || TENS[y] || HUND[y]) return y; } return null; };
    const ordinal = (words) => {
      let total = 0, unit = 0, used = 0;
      for (let i = 0; i < words.length; i++) {
        const raw = words[i]; const w = bare(raw); if (!w) break;
        if (ORD[w]) unit = ORD[w]; else if (w === 'عشر' || w === 'عشره') unit += 10; else if (TENS[w]) total += TENS[w]; else if (HUND[w]) total += HUND[w]; else if (w !== 'بعد') break;
        used = i + 1;
        if (/[:：\-–—.)]$/.test(raw)) break;
      }
      const n = total + unit;
      return used && n > 0 ? { n, used } : null;
    };
    const BISRE = /^[(\[]?\s*(مكرراً|مكررًا|مكررا|مكررة|مكرره|مكرر)\s*(ثانياً|ثانيا|ثالثاً|ثالثا|رابعاً|رابعا|خامساً|خامسا)?\s*[)\]]?/;
    const BISN = { ثانيا: 2, ثالثا: 3, رابعا: 4, خامسا: 5 };
    const SEP = /^[\s:：\-–—.)]+/;
    const REF = /^(من|في|السابق|المذكور|اعلاه|أعلاه|المشار|و\s|،)/;
    const headerOf = (line) => {
      const t = toW(line).replace(/ـ/g, '').replace(/^[•*▪◦·\s]+/, '').trim();
      let m = t.match(/^[(\[]?\s*(?:ال)?ماد[ةه]\s*(?:رقم\s*)?[(\[«\-–—]?\s*(\d{1,4})\s*[)\]»\-–—]?\s*/);
      let n = 0, rest = '', ok = false, bracket = false;
      if (m) { n = parseInt(m[1], 10); rest = t.slice(m[0].length); bracket = /[(\[«\-–—]\s*\d/.test(m[0]); ok = true; }
      else {
        const m2 = t.match(/^(?:ال)?ماد[ةه]\s+(.+)$/);
        if (m2) { const words = m2[1].split(/\s+/); const o = ordinal(words); if (o) { n = o.n; rest = words.slice(o.used).join(' '); ok = true; bracket = /[:：\-–—.)]$/.test(words[o.used - 1]); } }
        if (!ok) { const m3 = t.match(/^م\s*[\/.]?\s*(\d{1,4})(\s*[\-–—:.)]|\s*$)/); if (m3) { n = parseInt(m3[1], 10); rest = t.slice(m3[0].length); ok = true; bracket = true; } }
      }
      if (!ok || !(n > 0)) return null;
      let bis = 0; const b = rest.match(BISRE);
      if (b && b[0].trim()) { bis = b[2] ? (BISN[nrm(b[2]).replace(/[^ء-ي]/g, '').replace(/ا?$/, 'ا')] || 2) : 1; rest = rest.slice(b[0].length); }
      const hadSep = SEP.test(rest) || bracket;
      rest = rest.replace(SEP, '');
      if (rest && !hadSep && REF.test(rest)) return null;
      return { n, bis, rest: rest.trim() };
    };
    const HEADRE = /^(الكتاب|الباب|الفصل|الفرع|القسم)\s+(.+)$/;
    const headingOf = (line) => {
      const t = toW(line).replace(/ـ/g, '').replace(/^[•*▪◦·\s]+/, '').trim();
      if (t.length > 140) return null;
      const m = t.match(HEADRE); if (!m) return null;
      const words = m[2].split(/\s+/); let used = 0; let numTxt = '';
      const d = words[0].match(/^[(\[]?(\d{1,3})[)\]]?[:：\-–—.]?$/);
      if (d) { used = 1; numTxt = ar(d[1]); } else { const o = ordinal(words); if (!o) return null; used = o.used; numTxt = words.slice(0, used).join(' ').replace(/[:：\-–—.)]+$/, ''); }
      const title = words.slice(used).join(' ').replace(SEP, '').trim();
      return { level: /الكتاب|الباب/.test(m[1]) ? 'part' : 'chap', label: m[1] + ' ' + numTxt, title };
    };
    const PARA = [/^(أولاً|اولاً|أولا|اولا|ثانياً|ثانيا|ثالثاً|ثالثا|رابعاً|رابعا|خامساً|خامسا|سادساً|سادسا|سابعاً|سابعا|ثامناً|ثامنا|تاسعاً|تاسعا|عاشراً|عاشرا)\s*[\-–—:.)]\s*/, /^(\d{1,2})\s*[\-–—.)]\s+/, /^([أ-ي])\s*[\-–—.)]\s+/];
    const parse = (text, opt) => {
      const lines = String(text || '').replace(/\r/g, '').split('\n');
      const out = []; const heads = []; const intro = []; let part = '', chap = '', cur = null, headerCount = 0;
      const push = () => { if (cur) { cur.text = cur.lines.join('\n').replace(/\n{3,}/g, '\n\n').trim(); delete cur.lines; out.push(cur); cur = null; } };
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i]; const tl = line.trim();
        const hd = tl ? headingOf(tl) : null;
        if (hd) {
          push();
          let title = hd.title;
          if (!title) { let j = i + 1; while (j < lines.length && !lines[j].trim()) j++; if (j < lines.length) { const nx = lines[j].trim(); if (nx.length <= 90 && !headerOf(nx) && !headingOf(nx)) { title = nx.replace(SEP, ''); i = j; } } }
          const txt = hd.label + (title ? ': ' + title : '');
          if (hd.level === 'part') { part = txt; chap = ''; } else chap = txt;
          heads.push({ txt, at: out.length });
          continue;
        }
        const h = tl ? headerOf(tl) : null;
        if (h) { push(); headerCount++; cur = { n: h.n, bis: h.bis, sub: '', part, chap, kind: opt.kind, status: 'active', note: '', lines: h.rest ? [h.rest] : [] }; continue; }
        if (cur) cur.lines.push(tl); else if (tl) intro.push(tl);
      }
      push();
      let items = out;
      if (!headerCount) {
        const s0 = intOf(opt.start) || 1; items = [];
        String(text || '').replace(/\r/g, '').split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean).forEach((b) => {
          if (headingOf(b.split('\n')[0]) && b.split('\n').length <= 2) return;
          items.push({ n: s0 + items.length, bis: 0, sub: '', part: '', chap: '', kind: opt.kind, status: 'active', note: '', text: b });
        });
        intro.length = 0;
      }
      if (opt.split) {
        const sp = [];
        items.forEach((a) => {
          const ls = a.text.split('\n'); const parts = []; let curP = null; const lead = [];
          ls.forEach((l) => { const t = l.trim(); let m = null; for (const re of PARA) { m = t.match(re); if (m) break; } if (m) { if (curP) parts.push(curP); curP = { sub: m[1], lines: [t.slice(m[0].length)] }; } else if (curP) curP.lines.push(t); else if (t) lead.push(t); });
          if (curP) parts.push(curP);
          if (parts.length < 2) { sp.push(a); return; }
          if (lead.length) parts[0].lines.unshift(lead.join(' '));
          parts.forEach((p) => sp.push({ ...a, sub: p.sub, text: p.lines.join('\n').trim() }));
        });
        items = sp;
      }
      return { items: items.map(normA), heads, intro, auto: !headerCount };
    };

    // ---------- issues ----------
    const an = analyzeL(list);
    const issuesOf = (a, withFix) => {
      const out = [];
      if (a.noNum) out.push({ cls: 'err', text: plural(a.noNum, 'مادة واحدة', 'مادتان', 'مواد', 'مادة') + ' بلا رقم صحيح.' });
      if (a.noText) out.push({ cls: 'err', text: plural(a.noText, 'مادة واحدة', 'مادتان', 'مواد', 'مادة') + ' بلا نص.' });
      if (a.dups.length) out.push({ cls: 'err', text: 'أرقام مكررة: ' + a.dups.slice(0, 8).join('، ') + (a.dups.length > 8 ? '…' : '') + '. لكل مادة (مع المكرر والفقرة) رقم واحد.' });
      if (a.order) out.push({ cls: 'warn', text: plural(a.order, 'موضع واحد', 'موضعان', 'مواضع', 'موضعاً') + ' خارج الترتيب التصاعدي.', fix: withFix ? () => emit(sortL(list)) : null, fixLabel: 'ترتيب حسب الرقم' });
      if (a.orphan.length) out.push({ cls: 'warn', text: 'مكرر بلا مادة أصلية قبله: ' + a.orphan.slice(0, 6).join('، ') + '.' });
      if (a.missing.length) { const rg = ranges(a.missing); out.push({ cls: a.fullShare > 0.6 ? 'warn' : 'info', text: 'أرقام غير موجودة بين ' + ar(a.ns[0]) + ' و' + ar(a.ns[a.ns.length - 1]) + ': ' + rg.slice(0, 12).join('، ') + (rg.length > 12 ? '…' : '') + (a.fullShare > 0.6 ? '. تحقّق أنها ملغاة أو لم تُدخل بعد.' : '. طبيعي إن كانت المختارات مقتطفات.') }); }
      return out.map((x) => ({ ...x, hasFix: !!x.fix }));
    };
    const issues = issuesOf(an, true);

    // ---------- list rows ----------
    const qn = nrm(st.q).trim();
    const qNum = intOf(st.q);
    const qIsNum = /^[\s0-9٠-٩۰-۹]+$/.test(st.q) && qNum !== '';
    const idx = list.map((a, i) => i).filter((i) => { if (!qn) return true; const a = list[i]; if (qIsNum) return a.n === qNum; return nrm(label(a) + ' ' + a.text + ' ' + a.part + ' ' + a.chap + ' ' + a.note).includes(qn); });
    const PER = 20;
    const pages = Math.max(1, Math.ceil(idx.length / PER));
    const page = Math.min(st.page, pages - 1);
    const slice = idx.slice(page * PER, page * PER + PER);
    const setA = (i, patch) => emit(list.map((x, j) => (j === i ? { ...x, ...patch } : x)));
    const pageOf = (i) => Math.floor(i / PER);
    const openAt = (i, next, fid) => { emit(next); this.setState({ q: '', page: pageOf(i), edit: i, del: null, focusId: fid || (pre + '-' + i + '-text') }); };
    const newAfter = (i) => { const b = list[i] || list[list.length - 1] || {}; return normA({ n: b.n > 0 ? b.n + 1 : (list.length ? '' : 1), part: b.part, chap: b.chap, kind: b.kind || 'full' }); };
    const rows = slice.map((i, k) => {
      const a = list[i]; const prev = list[i - 1];
      const headTxt = []; if (a.part && (!prev || prev.part !== a.part)) headTxt.push(a.part); if (a.chap && (!prev || prev.chap !== a.chap || prev.part !== a.part)) headTxt.push(a.chap);
      const open = st.edit === i;
      const k2 = a.n + '|' + a.bis + '|' + nrm(a.sub).trim();
      const dup = a.n !== '' && list.some((b, j) => j !== i && (b.n + '|' + b.bis + '|' + nrm(b.sub).trim()) === k2);
      const flag = a.n === '' || !(a.n > 0) ? 'بلا رقم' : dup ? 'رقم مكرر' : !a.text.trim() ? 'بلا نص' : '';
      const ids = { n: pre + '-' + i + '-n', bis: pre + '-' + i + '-bis', sub: pre + '-' + i + '-sub', kind: pre + '-' + i + '-kind', status: pre + '-' + i + '-status', part: pre + '-' + i + '-part', chap: pre + '-' + i + '-chap', text: pre + '-' + i + '-text', note: pre + '-' + i + '-note' };
      const lb = label(a);
      return {
        a, ids, label: lb, kindLabel: KIND[a.kind], hasStatus: a.status !== 'active', statusLabel: STATUS[a.status], hasFlag: !!flag, flag,
        hasHead: headTxt.length > 0 && !qn, head: headTxt.join(' · '),
        cls: open ? 'on' : flag ? 'bad' : '', open, closed: !open, exp: open ? 'true' : 'false', toggleLabel: open ? 'إغلاق' : 'تعديل',
        snip: a.text.trim() ? a.text.trim().slice(0, 220) : '— لم يُكتب النص بعد —',
        nVal: a.n === '' ? '' : ar(a.n), bisVal: String(a.bis),
        first: i === 0, last: i === list.length - 1, upAria: 'تحريك ' + lb + ' للأعلى', downAria: 'تحريك ' + lb + ' للأسفل', delAria: 'حذف ' + lb,
        askDel: st.del === i, noAskDel: st.del !== i,
        toggle: () => this.setState({ edit: open ? null : i, del: null, focusId: open ? '' : ids.text }),
        up: () => { if (i === 0) return; const n = list.slice(); [n[i - 1], n[i]] = [n[i], n[i - 1]]; emit(n); this.setState({ edit: st.edit === i ? i - 1 : st.edit, page: pageOf(i - 1) }); },
        down: () => { if (i === list.length - 1) return; const n = list.slice(); [n[i + 1], n[i]] = [n[i], n[i + 1]]; emit(n); this.setState({ edit: st.edit === i ? i + 1 : st.edit, page: pageOf(i + 1) }); },
        ask: () => this.setState({ del: i }), cancelDel: () => this.setState({ del: null }),
        del: () => { emit(list.filter((_, j) => j !== i)); this.setState({ del: null, edit: null }); },
        onN: (e) => setA(i, { n: intOf(e.target.value) }),
        onBis: (e) => setA(i, { bis: Number(e.target.value) || 0 }),
        onSub: (e) => setA(i, { sub: e.target.value }), onKind: (e) => setA(i, { kind: e.target.value }), onStatus: (e) => setA(i, { status: e.target.value }),
        onPart: (e) => setA(i, { part: e.target.value }), onChap: (e) => setA(i, { chap: e.target.value }),
        onText: (e) => setA(i, { text: e.target.value }), onNote: (e) => setA(i, { note: e.target.value }),
        insertAfter: () => { const n = list.slice(); n.splice(i + 1, 0, newAfter(i)); openAt(i + 1, n, pre + '-' + (i + 1) + '-n'); },
        dupBis: () => { const top = list.filter((b) => b.n === a.n).reduce((m, b) => Math.max(m, b.bis), 0); let at = i; while (at + 1 < list.length && list[at + 1].n === a.n) at++; const n = list.slice(); n.splice(at + 1, 0, normA({ n: a.n, bis: Math.min(5, top + 1), part: a.part, chap: a.chap, kind: a.kind })); openAt(at + 1, n); }
      };
    });

    // ---------- bulk ----------
    const P = st.parsed;
    const merged = (() => {
      if (!P) return null;
      if (st.mode === 'replace') return P.items;
      if (st.mode === 'append') return list.concat(P.items);
      const out = list.slice(); let upd = 0, add = 0;
      P.items.forEach((p) => { const k = p.n + '|' + p.bis + '|' + nrm(p.sub).trim(); const j = out.findIndex((b) => (b.n + '|' + b.bis + '|' + nrm(b.sub).trim()) === k); if (j >= 0) { out[j] = { ...out[j], text: p.text, kind: p.kind, part: p.part || out[j].part, chap: p.chap || out[j].chap }; upd++; } else { out.push(p); add++; } });
      const s = sortL(out); s.upd = upd; s.add = add; return s;
    })();
    const pAn = P ? analyzeL(P.items) : null;
    const after = merged ? analyzeL(merged) : null;
    const pIssues = [];
    if (P) {
      if (!P.items.length) pIssues.push({ cls: 'err', text: 'لم يُعثر على أي مادة. تأكد أن كل مادة تبدأ بسطر مثل «المادة ١» أو «المادة الأولى»، أو افصل المقاطع بسطر فارغ.' });
      if (P.auto && P.items.length) pIssues.push({ cls: 'warn', text: 'لم يُعثر على عناوين «المادة …»، فرُقّمت المقاطع المفصولة بسطر فارغ تلقائياً ابتداءً من ' + ar(intOf(st.start) || 1) + '. راجع الأرقام قبل الاعتماد.' });
      if (P.intro.length) pIssues.push({ cls: 'info', text: 'تُركت ' + plural(P.intro.length, 'سطر واحد', 'سطران', 'أسطر', 'سطراً') + ' قبل أول مادة (مثل الديباجة أو الأسباب الموجبة): «' + P.intro.join(' ').slice(0, 120) + '…». أضفها إلى ملاحظة القانون إن احتجت إليها.' });
      issuesOf(pAn, false).forEach((x) => pIssues.push({ ...x, text: 'في النص الملصوق: ' + x.text }));
      if (st.mode !== 'replace' && after && after.dups.length > pAn.dups.length) pIssues.push({ cls: 'err', text: 'بعد ' + (st.mode === 'append' ? 'الإضافة' : 'الدمج') + ' ستتكرر أرقام موجودة: ' + after.dups.slice(0, 8).join('، ') + '. اختر «دمج» لتحديث المواد ذات الرقم نفسه بدل تكرارها.' });
    }
    const pRows = [];
    if (P) {
      let hi = 0;
      P.items.slice(0, 60).forEach((a, i) => {
        while (hi < P.heads.length && P.heads[hi].at <= i) { pRows.push({ cls: 'hd', h: P.heads[hi].txt, s: '', hasS: false }); hi++; }
        pRows.push({ cls: '', h: label(a), s: a.text.slice(0, 140) || '— بلا نص —', hasS: true });
      });
      if (P.items.length > 60) pRows.push({ cls: 'hd', h: 'و' + plural(P.items.length - 60, 'مادة أخرى', 'مادتان أخريان', 'مواد أخرى', 'مادة أخرى'), s: '', hasS: false });
    }
    const pFirst = P && P.items.length ? label(P.items[0]) : '', pLast = P && P.items.length ? label(P.items[P.items.length - 1]) : '';
    const applyLabel = !P ? '' : st.mode === 'replace' ? 'استبدال كل المواد بـ ' + plural(P.items.length, 'مادة واحدة', 'مادتين', 'مواد', 'مادة') : st.mode === 'append' ? 'إضافة ' + plural(P.items.length, 'مادة واحدة', 'مادتين', 'مواد', 'مادة') + ' في آخر القانون' : 'دمج: تحديث ' + ar(merged.upd) + ' وإضافة ' + ar(merged.add);

    // ---------- renumber ----------
    const rFrom = intOf(st.renumFrom) || 1;
    const renumbered = () => { let n = rFrom - 1, lastK = null; return list.map((a) => { const k = a.n + '|' + a.bis; if (k !== lastK) { n++; lastK = k; } return { ...a, n, bis: 0 }; }); };
    const groups = (() => { let c = 0, lastK = null; list.forEach((a) => { const k = a.n + '|' + a.bis; if (k !== lastK) { c++; lastK = k; } }); return c; })();
    const sw = (on) => ({ on: on ? 'true' : 'false', bg: on ? '#0F1E35' : '#C9C2B3', x: on ? '21px' : '3px' });

    const stats = [
      { k: 'البنود المُدخلة', v: ar(list.length) },
      { k: 'المواد المختلفة', v: ar(an.distinct) },
      { k: 'النطاق', v: an.ns.length ? ar(an.ns[0]) + '–' + ar(an.ns[an.ns.length - 1]) : '—' },
      { k: 'أرقام غير موجودة في النطاق', v: ar(an.missing.length) }
    ];

    return {
      ids: { renum: pre + '-renum', bulk: pre + '-bulk', mode: pre + '-mode', kind: pre + '-bkind', start: pre + '-start' },
      stats, issues, hasIssues: issues.length > 0,
      q: st.q, onQ: (e) => this.setState({ q: e.target.value, page: 0 }),
      addEnd: () => { const n = list.concat([newAfter(list.length - 1)]); openAt(n.length - 1, n, pre + '-' + (n.length - 1) + '-n'); },
      toggleBulk: () => this.setState({ bulk: !st.bulk, focusId: st.bulk ? '' : pre + '-bulk' }), bulkExp: st.bulk ? 'true' : 'false', bulkOpen: st.bulk,
      toggleTools: () => this.setState({ tools: !st.tools, renumAsk: false }), toolsExp: st.tools ? 'true' : 'false', toolsOpen: st.tools,
      noArts: list.length === 0,
      sortAll: () => emit(sortL(list)),
      renumFrom: st.renumFrom, onRenumFrom: (e) => this.setState({ renumFrom: e.target.value, renumAsk: false }),
      renumAsk: st.renumAsk, renumIdle: !st.renumAsk, askRenum: () => this.setState({ renumAsk: true }), cancelRenum: () => this.setState({ renumAsk: false }),
      renumSummary: 'ترقيم ' + plural(groups, 'مادة واحدة', 'مادتين', 'مواد', 'مادة') + ' من ' + ar(rFrom) + ' إلى ' + ar(rFrom + Math.max(groups, 1) - 1),
      doRenum: () => { emit(renumbered()); this.setState({ renumAsk: false }); },
      bulkText: st.text, onBulkText: (e) => this.setState({ text: e.target.value, parsed: null }), bulkEmpty: !st.text.trim(),
      modeOpts: [{ v: 'append', l: 'إضافة في آخر المواد الحالية' }, { v: 'merge', l: 'دمج: تحديث المواد بالرقم نفسه وإضافة الجديدة' }, { v: 'replace', l: 'استبدال كل المواد الحالية' }],
      bulkMode: st.mode, onBulkMode: (e) => this.setState({ mode: e.target.value }),
      kindOpts: Object.keys(KIND).map((k) => ({ v: k, l: KIND[k] })), bulkKind: st.kind, onBulkKind: (e) => this.setState({ kind: e.target.value, parsed: null }),
      statusOpts: Object.keys(STATUS).map((k) => ({ v: k, l: STATUS[k] })),
      bisOpts: BIS.map((b, i) => ({ v: String(i), l: i ? b : 'لا' })),
      bulkStart: st.start, onBulkStart: (e) => this.setState({ start: e.target.value, parsed: null }),
      splitSw: sw(st.split), toggleSplit: () => this.setState({ split: !st.split, parsed: null }),
      analyze: () => this.setState({ parsed: parse(st.text, { kind: st.kind, split: st.split, start: st.start }) }),
      closeBulk: () => this.setState({ bulk: false, parsed: null }),
      hasParsed: !!P, pNone: !P || !P.items.length,
      pStats: P ? [{ k: 'البنود المستخرجة', v: ar(P.items.length) }, { k: 'الأبواب والفصول', v: ar(P.heads.length) }, { k: 'النطاق', v: P.items.length ? pFirst.replace('المادة ', '').replace(/ \/.*$/, '') + ' ← ' + pLast.replace('المادة ', '').replace(/ \/.*$/, '') : '—' }] : [],
      pIssues, pHasIssues: pIssues.length > 0, pRows, applyLabel,
      applyBulk: () => { if (!merged || !P.items.length) return; emit(merged); this.setState({ parsed: null, text: '', bulk: false, q: '', page: 0, edit: null }); },
      discardParsed: () => this.setState({ parsed: null, focusId: pre + '-bulk' }),
      rows, empty: rows.length === 0,
      emptyText: list.length ? 'لا توجد مادة تطابق «' + st.q + '».' : 'لم تُدخل أي مادة بعد. أضف مادة، أو الصق نص القانون كاملاً من «إدخال بالجملة».',
      multiPage: pages > 1, pageLabel: 'الصفحة ' + ar(page + 1) + ' من ' + ar(pages) + ' · ' + plural(idx.length, 'بند واحد', 'بندان', 'بنود', 'بنداً'),
      isFirstPage: page === 0, isLastPage: page >= pages - 1,
      prevPage: () => this.setState({ page: Math.max(0, page - 1), edit: null }), nextPage: () => this.setState({ page: Math.min(pages - 1, page + 1), edit: null })
    };
  }
}
return Component;
});
