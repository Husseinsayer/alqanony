MQ_DEF("AdminFields", "<div class=\"af\" dir=\"rtl\" style=\"font-family: 'IBM Plex Sans Arabic', system-ui, sans-serif\">\n<sc-for list=\"{{form}}\" as=\"f\" hint-placeholder-count=\"6\">\n<sc-if value=\"{{f.isSec}}\" hint-placeholder-val=\"{{false}}\"><div class=\"af-sec\">{{f.label}}</div></sc-if>\n<sc-if value=\"{{f.isField}}\" hint-placeholder-val=\"{{true}}\">\n<div class=\"af-f {{f.cls}}\">\n<sc-if value=\"{{f.spanLabel}}\" hint-placeholder-val=\"{{false}}\"><span id=\"{{f.lbId}}\" class=\"af-lb\">{{f.label}}</span></sc-if>\n<sc-if value=\"{{f.labelEl}}\" hint-placeholder-val=\"{{true}}\"><label for=\"{{f.id}}\">{{f.label}}<sc-if value=\"{{f.required}}\" hint-placeholder-val=\"{{false}}\"><span class=\"req\"> *</span></sc-if></label></sc-if>\n<sc-if value=\"{{f.isText}}\" hint-placeholder-val=\"{{true}}\"><input id=\"{{f.id}}\" type=\"text\" dir=\"{{f.dir}}\" class=\"{{f.bad}}\" value=\"{{f.value}}\" onChange=\"{{f.onChange}}\" placeholder=\"{{f.ph}}\" aria-invalid=\"{{f.invalid}}\" aria-describedby=\"{{f.desc}}\"></sc-if>\n<sc-if value=\"{{f.isNumber}}\" hint-placeholder-val=\"{{false}}\"><input id=\"{{f.id}}\" type=\"text\" inputmode=\"decimal\" class=\"{{f.bad}}\" value=\"{{f.value}}\" onChange=\"{{f.onChange}}\" aria-invalid=\"{{f.invalid}}\" aria-describedby=\"{{f.desc}}\"></sc-if>\n<sc-if value=\"{{f.isDate}}\" hint-placeholder-val=\"{{false}}\"><input id=\"{{f.id}}\" type=\"date\" class=\"{{f.bad}}\" value=\"{{f.value}}\" onChange=\"{{f.onChange}}\" aria-invalid=\"{{f.invalid}}\" aria-describedby=\"{{f.desc}}\"></sc-if>\n<sc-if value=\"{{f.isArea}}\" hint-placeholder-val=\"{{false}}\"><textarea id=\"{{f.id}}\" rows=\"{{f.rows}}\" class=\"{{f.bad}}\" value=\"{{f.value}}\" onChange=\"{{f.onChange}}\" placeholder=\"{{f.ph}}\" aria-invalid=\"{{f.invalid}}\"></textarea></sc-if>\n<sc-if value=\"{{f.isSelect}}\" hint-placeholder-val=\"{{false}}\"><select id=\"{{f.id}}\" class=\"{{f.bad}}\" value=\"{{f.value}}\" onChange=\"{{f.onChange}}\" aria-invalid=\"{{f.invalid}}\" aria-describedby=\"{{f.desc}}\"><sc-for list=\"{{f.opts}}\" as=\"o\" hint-placeholder-count=\"3\"><option value=\"{{o.v}}\">{{o.l}}</option></sc-for></select></sc-if>\n<sc-if value=\"{{f.isToggle}}\" hint-placeholder-val=\"{{false}}\"><button id=\"{{f.id}}\" type=\"button\" class=\"af-sw\" role=\"switch\" aria-checked=\"{{f.ariaOn}}\" onClick=\"{{f.toggle}}\" aria-describedby=\"{{f.desc}}\"><span class=\"tr\" style=\"background: {{f.trBg}}\"><span class=\"kn\" style=\"inset-inline-start: {{f.knX}}\"></span></span>{{f.onLabel}}</button></sc-if>\n<sc-if value=\"{{f.isImage}}\" hint-placeholder-val=\"{{false}}\"><input id=\"{{f.id}}\" type=\"text\" dir=\"ltr\" class=\"{{f.bad}}\" value=\"{{f.value}}\" onChange=\"{{f.onChange}}\" placeholder=\"https://\" aria-invalid=\"{{f.invalid}}\" aria-describedby=\"{{f.desc}}\"><sc-if value=\"{{f.hasImg}}\" hint-placeholder-val=\"{{false}}\"><img class=\"af-thumb\" src=\"{{f.value}}\" alt=\"معاينة الصورة\"></sc-if></sc-if>\n<sc-if value=\"{{f.isInfo}}\" hint-placeholder-val=\"{{false}}\"><div class=\"af-info\">{{f.value}}</div></sc-if>\n<sc-if value=\"{{f.isFiles}}\" hint-placeholder-val=\"{{false}}\"><ul class=\"af-info\" aria-labelledby=\"{{f.lbId}}\" style=\"margin: 0; list-style: none; display: flex; flex-direction: column; gap: 8px\"><sc-for list=\"{{f.files}}\" as=\"x\" hint-placeholder-count=\"2\"><li style=\"display: flex; flex-wrap: wrap; gap: 4px 10px; align-items: baseline\"><span style=\"font-weight: 600\">{{x.label}}</span><a href=\"{{x.url}}\" target=\"_blank\" rel=\"noopener\" style=\"color: #0F1E35; text-decoration: underline; text-decoration-color: #C9A24D; text-underline-offset: 4px; overflow-wrap: anywhere\">{{x.name}}</a></li></sc-for><sc-if value=\"{{f.noFiles}}\" hint-placeholder-val=\"{{false}}\"><li>لا توجد ملفات مرفوعة.</li></sc-if></ul></sc-if>\n<sc-if value=\"{{f.isLawText}}\" hint-placeholder-val=\"{{false}}\"><div role=\"group\" aria-labelledby=\"{{f.lbId}}\"><dc-import name=\"AdminLawText\" value=\"{{f.list}}\" on-change=\"{{f.setList}}\" id-prefix=\"{{f.id}}\" hint-size=\"100%,900px\"></dc-import></div></sc-if>\n<sc-if value=\"{{f.isRep}}\" hint-placeholder-val=\"{{false}}\">\n<div class=\"af-rep\" role=\"group\" aria-labelledby=\"{{f.lbId}}\">\n<sc-for list=\"{{f.items}}\" as=\"it\" hint-placeholder-count=\"2\">\n<div class=\"af-it\">\n<div class=\"af-it-h\">\n<span style=\"font-size: 13px; font-weight: 700; color: #2B3A52\">{{it.title}}</span>\n<sc-if value=\"{{it.movable}}\" hint-placeholder-val=\"{{true}}\"><span style=\"display: flex; gap: 6px\">\n<button type=\"button\" class=\"af-ib\" aria-label=\"تحريك للأعلى\" disabled=\"{{it.first}}\" onClick=\"{{it.up}}\">↑</button>\n<button type=\"button\" class=\"af-ib\" aria-label=\"تحريك للأسفل\" disabled=\"{{it.last}}\" onClick=\"{{it.down}}\">↓</button>\n<button type=\"button\" class=\"af-ib del\" onClick=\"{{it.remove}}\">حذف</button>\n</span></sc-if>\n</div>\n<div class=\"af-it-g\">\n<sc-for list=\"{{it.subs}}\" as=\"s\" hint-placeholder-count=\"2\">\n<div class=\"af-f {{s.cls}}\">\n<label for=\"{{s.id}}\" style=\"font-size: 13px\">{{s.label}}</label>\n<sc-if value=\"{{s.isInfo}}\" hint-placeholder-val=\"{{false}}\"><span id=\"{{s.id}}\" style=\"font-size: 14px; line-height: 1.7; color: #0F1E35\">{{s.value}}</span></sc-if>\n<sc-if value=\"{{s.isText}}\" hint-placeholder-val=\"{{true}}\"><input id=\"{{s.id}}\" type=\"text\" dir=\"{{s.dir}}\" value=\"{{s.value}}\" onChange=\"{{s.onChange}}\"></sc-if>\n<sc-if value=\"{{s.isNumber}}\" hint-placeholder-val=\"{{false}}\"><input id=\"{{s.id}}\" type=\"text\" inputmode=\"decimal\" value=\"{{s.value}}\" onChange=\"{{s.onChange}}\"></sc-if>\n<sc-if value=\"{{s.isDate}}\" hint-placeholder-val=\"{{false}}\"><input id=\"{{s.id}}\" type=\"date\" value=\"{{s.value}}\" onChange=\"{{s.onChange}}\"></sc-if>\n<sc-if value=\"{{s.isArea}}\" hint-placeholder-val=\"{{false}}\"><textarea id=\"{{s.id}}\" rows=\"{{s.rows}}\" value=\"{{s.value}}\" onChange=\"{{s.onChange}}\"></textarea></sc-if>\n<sc-if value=\"{{s.isSelect}}\" hint-placeholder-val=\"{{false}}\"><select id=\"{{s.id}}\" value=\"{{s.value}}\" onChange=\"{{s.onChange}}\"><sc-for list=\"{{s.opts}}\" as=\"o\" hint-placeholder-count=\"3\"><option value=\"{{o.v}}\">{{o.l}}</option></sc-for></select></sc-if>\n<sc-if value=\"{{s.isToggle}}\" hint-placeholder-val=\"{{false}}\"><button id=\"{{s.id}}\" type=\"button\" class=\"af-sw\" role=\"switch\" aria-checked=\"{{s.ariaOn}}\" onClick=\"{{s.toggle}}\"><span class=\"tr\" style=\"background: {{s.trBg}}\"><span class=\"kn\" style=\"inset-inline-start: {{s.knX}}\"></span></span>{{s.onLabel}}</button></sc-if>\n</div>\n</sc-for>\n</div>\n</div>\n</sc-for>\n<sc-if value=\"{{f.canAdd}}\" hint-placeholder-val=\"{{true}}\"><button type=\"button\" class=\"af-add\" onClick=\"{{f.add}}\">+ {{f.addLabel}}</button></sc-if>\n</div>\n</sc-if>\n<sc-if value=\"{{f.hasHelp}}\" hint-placeholder-val=\"{{false}}\"><span id=\"{{f.helpId}}\" class=\"af-help\">{{f.help}}</span></sc-if>\n<sc-if value=\"{{f.hasErr}}\" hint-placeholder-val=\"{{false}}\"><span id=\"{{f.errId}}\" class=\"af-err\" role=\"alert\">{{f.err}}</span></sc-if>\n</div>\n</sc-if>\n</sc-for>\n</div>", "\n.af{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px 20px}\n.af-f{display:flex;flex-direction:column;gap:7px;min-width:0}\n.af-wide{grid-column:1/-1}\n.af-sec{grid-column:1/-1;margin:10px 0 -4px;padding-top:16px;border-top:1px solid #E3DCCB;font-size:15px;font-weight:700;color:#0F1E35}\n.af>.af-sec:first-child{margin-top:0;padding-top:0;border-top:0}\n.af label,.af .af-lb{font-size:14px;font-weight:600;color:#0F1E35}\n.af .req{color:#A3282B}\n.af input[type=text],.af input[type=number],.af input[type=date],.af input[type=url],.af select,.af textarea{width:100%;box-sizing:border-box;border:1px solid #8F8778;border-radius:12px;background:#FFFFFF;font:inherit;font-size:15px;color:#0F1E35}\n.af input[type=text],.af input[type=number],.af input[type=date],.af input[type=url],.af select{height:46px;padding:0 14px}\n.af textarea{padding:12px 14px;line-height:1.8;resize:vertical}\n.af input:focus,.af select:focus,.af textarea:focus{outline:2px solid #C9A24D;outline-offset:1px;border-color:#0F1E35}\n.af .bad{border-color:#A3282B !important}\n.af-help{font-size:12.5px;line-height:1.7;color:#3A4860}\n.af-err{font-size:13px;color:#A3282B}\n.af-sw{align-self:flex-start;display:inline-flex;align-items:center;gap:10px;min-height:40px;padding:0 4px;border:0;background:transparent;font:inherit;font-size:14px;color:#0F1E35;cursor:pointer}\n.af-sw .tr{width:42px;height:24px;border-radius:999px;position:relative;transition:background .15s}\n.af-sw .kn{position:absolute;top:3px;width:18px;height:18px;border-radius:50%;background:#FFFFFF;box-shadow:0 1px 3px rgba(0,0,0,.25);transition:inset-inline-start .15s}\n.af-sw:focus-visible{outline:2px solid #C9A24D;outline-offset:2px;border-radius:8px}\n.af-rep{display:flex;flex-direction:column;gap:12px}\n.af-it{border:1px solid #E3DCCB;border-radius:14px;background:#FAF7F0;padding:14px;display:flex;flex-direction:column;gap:12px}\n.af-it-h{display:flex;align-items:center;justify-content:space-between;gap:10px}\n.af-it-g{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr));gap:12px}\n.af-it-g .af-f.af-wide{grid-column:1/-1}\n.af-ib{display:inline-flex;align-items:center;justify-content:center;min-width:36px;height:36px;padding:0 10px;border:1px solid #D9D2C3;border-radius:10px;background:#FFFFFF;font:inherit;font-size:13px;color:#0F1E35;cursor:pointer}\n.af-ib:hover{border-color:#0F1E35}\n.af-ib.del{color:#A3282B}\n.af-ib:disabled{opacity:.4;cursor:default}\n.af-add{align-self:flex-start;display:inline-flex;align-items:center;gap:8px;min-height:40px;padding:0 14px;border:1px dashed #8F8778;border-radius:12px;background:#FFFFFF;font:inherit;font-size:14px;font-weight:600;color:#0F1E35;cursor:pointer}\n.af-thumb{width:100%;max-width:280px;height:120px;object-fit:cover;border-radius:12px;border:1px solid #E3DCCB;background:#F3EEE2}\n.af-info{padding:12px 14px;border-radius:12px;background:#F3EEE2;font-size:14px;line-height:1.8;color:#2B3A52}\n@media (max-width:760px){.af{grid-template-columns:minmax(0,1fr)}}\n", function (DCLogic, React) {
"use strict";
class Component extends DCLogic {
  renderVals() {
    const D = '٠١٢٣٤٥٦٧٨٩', P = '۰۱۲۳۴۵۶۷۸۹';
    const toW = (x) => String(x == null ? '' : x).replace(/[٠-٩]/g, (d) => D.indexOf(d)).replace(/[۰-۹]/g, (d) => P.indexOf(d));
    const ar = (x) => String(x).replace(/[0-9]/g, (d) => D[d]);
    const fields = this.props.fields || [];
    const v = this.props.value || {};
    const errs = this.props.errs || {};
    const pre = this.props.idPrefix || 'af';
    const emit = (next) => { if (this.props.onChange) this.props.onChange(next); };
    const opts = (o) => (o || []).map((x) => (x && typeof x === 'object' ? { v: String(x.v), l: x.l } : { v: String(x), l: String(x) }));
    const parseNum = (raw) => toW(raw).replace(/[\s,٬]/g, '').replace(/٫/g, '.');
    const sw = (on) => ({ ariaOn: on ? 'true' : 'false', trBg: on ? '#0F1E35' : '#C9C2B3', knX: on ? '21px' : '3px' });
    const flags = (type) => ({
      isText: type === 'text' || type === 'url' || !type, isNumber: type === 'number', isDate: type === 'date',
      isArea: type === 'textarea' || type === 'lines', isSelect: type === 'select', isToggle: type === 'toggle',
      isImage: type === 'image', isInfo: type === 'info', isRep: type === 'repeater', isLawText: type === 'lawtext', isFiles: type === 'files'
    });
    const withCur = (f, list, raw) => { if (raw == null || raw === '' || list.some((o) => o.v === String(raw))) return list; return list.concat([{ v: String(raw), l: String(raw) + ' (غير مدرجة في القائمة)' }]); };
    const valOf = (f, raw) => {
      if (f.type === 'lines') return Array.isArray(raw) ? raw.join('\n') : (raw || '');
      if (f.type === 'number') return raw === '' || raw == null ? '' : ar(raw);
      if (raw == null) return f.type === 'select' ? String((opts(f.options)[0] || {}).v || '') : '';
      return String(raw);
    };
    const changer = (f, setter) => (e) => {
      const raw = e && e.target ? e.target.value : e;
      if (f.type === 'lines') setter(String(raw).split('\n'));
      else if (f.type === 'number') setter(parseNum(raw));
      else setter(raw);
    };
    const form = fields.map((f) => {
      if (f.type === 'section') return { isSec: true, isField: false, label: f.label };
      const id = pre + '-' + f.k;
      const raw = typeof f.get === 'function' ? f.get(v) : v[f.k];
      const set = (val) => emit({ ...v, [f.k]: val });
      const err = errs[f.k] || '';
      const base = {
        isSec: false, isField: true, id, label: f.label, hasLabel: f.type !== 'toggle' || !!f.label, labelEl: f.type !== 'repeater' && f.type !== 'lawtext' && f.type !== 'files' && (f.type !== 'toggle' || !!f.label), spanLabel: f.type === 'repeater' || f.type === 'lawtext' || f.type === 'files', lbId: id + '-lb', helpId: id + '-help', errId: id + '-err', required: !!f.required,
        cls: (f.wide || ['textarea', 'lines', 'repeater', 'info', 'image'].includes(f.type) ? 'af-wide' : ''),
        dir: f.dir || 'auto', ph: f.placeholder || '', rows: String(f.rows || (f.type === 'lines' ? 4 : 4)),
        help: f.help || (f.type === 'lines' ? 'عنصر واحد في كل سطر.' : ''), hasHelp: !!(f.help || f.type === 'lines'),
        err, hasErr: !!err, bad: err ? 'bad' : '', invalid: err ? 'true' : 'false',
        desc: [err ? id + '-err' : '', (f.help || f.type === 'lines') ? id + '-help' : ''].filter(Boolean).join(' ') || null,
        ...flags(f.type)
      };
      if (f.type === 'info') return { ...base, value: String(raw == null ? (f.text || '') : raw) };
      if (f.type === 'toggle') { const on = !!raw; return { ...base, ...sw(on), onLabel: on ? (f.on || 'مفعّل') : (f.off || 'معطّل'), toggle: () => set(!on) }; }
      if (f.type === 'select') return { ...base, value: valOf(f, raw), opts: withCur(f, opts(f.options), raw), onChange: changer(f, set) };
      if (f.type === 'image') return { ...base, value: String(raw || ''), hasImg: /^(https?:|\/|data:)/.test(String(raw || '')), onChange: changer(f, set) };
      if (f.type === 'files') { const fl = (Array.isArray(raw) ? raw : []).filter((x) => x && x.url).map((x) => ({ label: String(x.label || ''), name: String(x.name || 'فتح الملف'), url: String(x.url) })); return { ...base, files: fl, noFiles: fl.length === 0 }; }
      if (f.type === 'lawtext') return { ...base, list: Array.isArray(raw) ? raw : [], setList: (next) => set(next) };
      if (f.type === 'repeater') {
        const list = Array.isArray(raw) ? raw : [];
        const setList = (next) => set(next);
        const items = list.map((item, i) => {
          const setItem = (patch) => setList(list.map((x, j) => (j === i ? { ...x, ...patch } : x)));
          const subs = (f.sub || []).map((s) => {
            const sv = item ? item[s.k] : '';
            const sid = id + '-' + i + '-' + s.k;
            const sb = { id: sid, label: s.label, cls: s.wide || s.type === 'textarea' ? 'af-wide' : '', dir: s.dir || 'auto', rows: String(s.rows || 3), ...flags(s.type) };
            if (s.type === 'toggle') { const on = !!sv; return { ...sb, ...sw(on), onLabel: on ? (s.on || 'نعم') : (s.off || 'لا'), toggle: () => setItem({ [s.k]: !on }) }; }
            if (s.type === 'select') return { ...sb, value: valOf(s, sv), opts: withCur(s, opts(s.options), sv), onChange: changer(s, (x) => setItem({ [s.k]: x })) };
            return { ...sb, value: valOf(s, sv), onChange: changer(s, (x) => setItem({ [s.k]: x })) };
          });
          const tl = typeof f.itemTitle === 'function' ? f.itemTitle(item, i) : '';
          return {
            title: (f.itemLabel || 'عنصر') + ' ' + ar(i + 1) + (tl ? ' · ' + tl : ''), subs, movable: !f.fixed,
            first: i === 0, last: i === list.length - 1,
            up: () => { if (i === 0) return; const n = list.slice(); [n[i - 1], n[i]] = [n[i], n[i - 1]]; setList(n); },
            down: () => { if (i === list.length - 1) return; const n = list.slice(); [n[i + 1], n[i]] = [n[i], n[i + 1]]; setList(n); },
            remove: () => setList(list.filter((_, j) => j !== i))
          };
        });
        const blank = () => { const o = {}; (f.sub || []).forEach((s) => { o[s.k] = s.type === 'toggle' ? false : s.type === 'select' ? String((opts(s.options)[0] || {}).v || '') : ''; }); return { ...o, ...(f.blank ? f.blank(list) : {}) }; };
        return { ...base, items, canAdd: !f.fixed, addLabel: f.addLabel || 'إضافة ' + (f.itemLabel || 'عنصر'), add: () => setList(list.concat([blank()])) };
      }
      return { ...base, value: valOf(f, raw), onChange: changer(f, set) };
    });
    return { form };
  }
}
return Component;
});
