MQ_DEF("Booking", "<div class=\"bk\" dir=\"rtl\" ref=\"{{rootRef}}\" style=\"font-family: 'IBM Plex Sans Arabic', system-ui, sans-serif; color: #0F1E35; background: #FFFFFF; border-radius: clamp(20px, 3vw, 28px); box-shadow: 0 24px 48px -32px rgba(15,30,53,0.35); overflow: hidden\">\n\n<sc-if value=\"{{done}}\" hint-placeholder-val=\"{{false}}\">\n<div role=\"status\" style=\"padding: clamp(24px, 5vw, 48px); display: flex; flex-direction: column; align-items: center; text-align: center; gap: 16px\">\n<span style=\"width: 68px; height: 68px; border-radius: 50%; background: #F3EEE2; display: flex; align-items: center; justify-content: center\">\n<svg width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#0F1E35\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12l5 5L20 7\"></path></svg>\n</span>\n<h2 ref=\"{{doneRef}}\" tabindex=\"-1\" style=\"margin: 0; font-size: clamp(22px, 4vw, 28px); font-weight: 700; outline: none\">أُرسل طلبك إلى {{lawyerName}}</h2>\n<p style=\"margin: 0; font-size: 15px; line-height: 1.9; color: #3A4860; max-width: 460px\">رقم الطلب <bdi style=\"font-weight: 700; color: #0F1E35\">{{ticket}}</bdi>. يؤكد المحامي الموعد أو يقترح بديلاً خلال يومي عمل، وتصلك رسالة على <bdi>{{phone}}</bdi>.</p>\n<div style=\"width: 100%; max-width: 460px; border: 1px solid #ECE6D8; border-radius: 16px; padding: 6px 18px; text-align: start\">\n<sc-for list=\"{{summary}}\" as=\"r\" hint-placeholder-count=\"4\">\n<div style=\"display: flex; justify-content: space-between; gap: 16px; padding: 10px 0; border-bottom: 1px solid #F4F0E6; font-size: 14px\"><span style=\"color: #3A4860\">{{r.k}}</span><span style=\"font-weight: 600\">{{r.v}}</span></div>\n</sc-for>\n</div>\n<p style=\"margin: 0; font-size: 13px; line-height: 1.8; color: #3A4860; max-width: 460px\">{{BT.feesDone}}</p>\n<button type=\"button\" onClick=\"{{close}}\" style=\"min-height: 48px; padding: 0 24px; border-radius: 12px; border: 1px solid #8F8778; background: #FFFFFF; font: inherit; font-size: 15px; color: #0F1E35; cursor: pointer\">العودة إلى ملف المحامي</button>\n</div>\n</sc-if>\n\n<sc-if value=\"{{editing}}\" hint-placeholder-val=\"{{true}}\">\n<div style=\"display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 16px clamp(18px, 3vw, 28px); border-bottom: 1px solid #F0EBDF; background: #FCFAF5\">\n<div style=\"display: flex; flex-direction: column; gap: 2px\">\n<span style=\"font-size: 13px; color: #3A4860\">طلب استشارة من {{lawyerName}}</span>\n<span style=\"font-size: 13px; font-weight: 600\">الخطوة {{stepNum}} من ٤</span>\n</div>\n<button type=\"button\" onClick=\"{{close}}\" style=\"min-height: 44px; padding: 0 14px; border-radius: 10px; border: 1px solid #8F8778; background: #FFFFFF; font: inherit; font-size: 14px; color: #0F1E35; cursor: pointer\">إلغاء</button>\n</div>\n<div aria-hidden=\"true\" style=\"height: 3px; background: #ECE6D8\"><div style=\"height: 3px; width: {{progress}}; background: #C9A24D\"></div></div>\n\n<div style=\"padding: clamp(20px, 4vw, 32px); display: flex; flex-direction: column; gap: 20px\">\n<h2 ref=\"{{headRef}}\" tabindex=\"-1\" style=\"margin: 0; font-size: clamp(20px, 3.5vw, 24px); font-weight: 700; outline: none\">{{stepTitle}}</h2>\n\n<sc-if value=\"{{hasSendErr}}\" hint-placeholder-val=\"{{false}}\"><p role=\"alert\" style=\"margin: 0; padding: 12px 16px; border-radius: 12px; background: #FBEDED; color: #A3282B; font-size: 14px; font-weight: 600\">{{sendErr}}</p></sc-if>\n<sc-if value=\"{{err}}\" hint-placeholder-val=\"{{false}}\">\n<p role=\"alert\" style=\"margin: 0; padding: 12px 16px; border-radius: 12px; background: #FBEDED; color: #A3282B; font-size: 14px; font-weight: 600\">{{errText}}</p>\n</sc-if>\n\n<sc-if value=\"{{s1}}\" hint-placeholder-val=\"{{true}}\">\n<fieldset style=\"margin: 0; padding: 0; border: none; min-width: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px\">\n<legend class=\"sr\">نوع الاستشارة</legend>\n<sc-for list=\"{{types}}\" as=\"t\" hint-placeholder-count=\"4\">\n<label class=\"opt\" style=\"display: flex; gap: 12px; align-items: flex-start; padding: 16px; border: 1.5px solid {{t.border}}; border-radius: 16px; background: {{t.bg}}; cursor: pointer\">\n<input type=\"radio\" name=\"bk-type\" checked=\"{{t.on}}\" onChange=\"{{t.pick}}\" style=\"width: 20px; height: 20px; margin-top: 3px; accent-color: #0F1E35\">\n<span style=\"display: flex; flex-direction: column; gap: 4px\"><span style=\"font-size: 16px; font-weight: 700\">{{t.label}}</span><span style=\"font-size: 13px; line-height: 1.7; color: #3A4860\">{{t.desc}}</span></span>\n</label>\n</sc-for>\n</fieldset>\n</sc-if>\n\n<sc-if value=\"{{s2}}\" hint-placeholder-val=\"{{false}}\">\n<sc-if value=\"{{isMessage}}\" hint-placeholder-val=\"{{false}}\">\n<p style=\"margin: 0; font-size: 15px; line-height: 1.9; color: #2B3A52; background: #F3EEE2; border-radius: 14px; padding: 14px 16px\">الاستشارة المكتوبة لا تحتاج موعداً. يرد المحامي على رسالتك خلال يومي عمل وفق ميثاق المنصة.</p>\n</sc-if>\n<sc-if value=\"{{needsSlot}}\" hint-placeholder-val=\"{{true}}\">\n<fieldset style=\"margin: 0; padding: 0; border: none; min-width: 0; display: flex; flex-direction: column; gap: 10px\">\n<legend style=\"font-size: 15px; font-weight: 600; margin-bottom: 10px\">اختر اليوم</legend>\n<div style=\"display: flex; flex-wrap: nowrap; overflow-x: auto; gap: 8px; padding-bottom: 4px\">\n<sc-for list=\"{{days}}\" as=\"d\" hint-placeholder-count=\"6\">\n<label class=\"opt\" style=\"flex: 0 0 auto; display: flex; flex-direction: column; align-items: center; gap: 2px; min-width: 92px; padding: 10px 12px; border: 1.5px solid {{d.border}}; border-radius: 14px; background: {{d.bg}}; color: {{d.fg}}; cursor: pointer\">\n<input class=\"sr\" type=\"radio\" name=\"bk-day\" checked=\"{{d.on}}\" onChange=\"{{d.pick}}\">\n<span style=\"font-size: 13px\">{{d.wd}}</span><span style=\"font-size: 15px; font-weight: 700\">{{d.dm}}</span>\n</label>\n</sc-for>\n</div>\n</fieldset>\n<fieldset style=\"margin: 0; padding: 0; border: none; min-width: 0; display: flex; flex-direction: column; gap: 10px\">\n<legend style=\"font-size: 15px; font-weight: 600; margin-bottom: 10px\">اختر الوقت</legend>\n<div style=\"display: flex; flex-wrap: wrap; gap: 8px\">\n<sc-for list=\"{{slots}}\" as=\"s\" hint-placeholder-count=\"5\">\n<label class=\"opt\" style=\"display: inline-flex; align-items: center; min-height: 44px; padding: 0 16px; border: 1.5px solid {{s.border}}; border-radius: 12px; background: {{s.bg}}; color: {{s.fg}}; font-size: 15px; font-weight: 600; cursor: pointer\">\n<input class=\"sr\" type=\"radio\" name=\"bk-slot\" checked=\"{{s.on}}\" onChange=\"{{s.pick}}\">{{s.label}}</label>\n</sc-for>\n</div>\n<span style=\"font-size: 13px; color: #3A4860\">المواعيد المعروضة مبدئية، ويؤكدها المحامي بعد استلام الطلب.</span>\n</fieldset>\n</sc-if>\n</sc-if>\n\n<sc-if value=\"{{s3}}\" hint-placeholder-val=\"{{false}}\">\n<div style=\"display: flex; flex-direction: column; gap: 8px\">\n<label for=\"bk-area\" style=\"font-size: 14px; font-weight: 600\">موضوع الاستشارة</label>\n<select id=\"bk-area\" value=\"{{area}}\" onChange=\"{{onArea}}\" style=\"height: 52px; padding: 0 14px; border: 1px solid {{areaB}}; border-radius: 14px; background: #FAF7F0; font: inherit; font-size: 16px; color: #0F1E35\">\n<option value=\"\">اختر الموضوع</option>\n<sc-for list=\"{{areas}}\" as=\"a\" hint-placeholder-count=\"3\"><option value=\"{{a}}\">{{a}}</option></sc-for>\n</select>\n</div>\n<div style=\"display: flex; flex-direction: column; gap: 8px\">\n<label for=\"bk-brief\" style=\"font-size: 14px; font-weight: 600\">ملخص مختصر لقضيتك</label>\n<textarea id=\"bk-brief\" rows=\"5\" value=\"{{brief}}\" onChange=\"{{onBrief}}\" aria-describedby=\"bk-brief-hint\" style=\"padding: 14px 16px; border: 1px solid {{briefB}}; border-radius: 14px; background: #FAF7F0; font: inherit; font-size: 16px; line-height: 1.8; color: #0F1E35; resize: vertical\"></textarea>\n<span id=\"bk-brief-hint\" style=\"font-size: 13px; line-height: 1.7; color: #3A4860\">اكتب الوقائع الأساسية فقط، ولا تكتب أرقام هويات أو كلمات مرور. {{briefCount}}</span>\n</div>\n<div style=\"display: flex; flex-direction: column; gap: 8px\">\n<label for=\"bk-phone\" style=\"font-size: 14px; font-weight: 600\">رقم الهاتف للتواصل</label>\n<input id=\"bk-phone\" type=\"tel\" autocomplete=\"tel\" dir=\"ltr\" value=\"{{phone}}\" onChange=\"{{onPhone}}\" placeholder=\"07XXXXXXXXX\" style=\"height: 52px; padding: 0 16px; border: 1px solid {{phoneB}}; border-radius: 14px; background: #FAF7F0; font: inherit; font-size: 16px; color: #0F1E35; text-align: right\">\n</div>\n<div style=\"display: flex; flex-direction: column; gap: 8px\">\n<label for=\"bk-email\" style=\"font-size: 14px; font-weight: 600\">البريد الإلكتروني (اختياري)</label>\n<input id=\"bk-email\" type=\"email\" autocomplete=\"email\" dir=\"ltr\" value=\"{{email}}\" onChange=\"{{onEmail}}\" aria-describedby=\"bk-email-hint\" placeholder=\"name@example.com\" style=\"height: 52px; padding: 0 16px; border: 1px solid {{emailB}}; border-radius: 14px; background: #FAF7F0; font: inherit; font-size: 16px; color: #0F1E35; text-align: right\">\n<span id=\"bk-email-hint\" style=\"font-size: 13px; color: #3A4860\">نرسل إليه رقم الطلب وتأكيد الموعد.</span>\n</div>\n<label style=\"display: flex; align-items: flex-start; gap: 10px; font-size: 14px; line-height: 1.8; color: #2B3A52; cursor: pointer\">\n<input type=\"checkbox\" checked=\"{{consent}}\" onChange=\"{{onConsent}}\" style=\"width: 20px; height: 20px; margin-top: 4px; accent-color: #0F1E35\">\n<span>{{BT.consent}} <a href=\"Legal.dc.html\" style=\"color: #0F1E35; font-weight: 600; text-decoration: underline; text-decoration-color: #C9A24D; text-underline-offset: 5px\">سياسة الخصوصية</a>.</span>\n</label>\n</sc-if>\n\n<sc-if value=\"{{s4}}\" hint-placeholder-val=\"{{false}}\">\n<div style=\"border: 1px solid #ECE6D8; border-radius: 16px; padding: 6px 18px\">\n<sc-for list=\"{{summary}}\" as=\"r\" hint-placeholder-count=\"5\">\n<div style=\"display: flex; flex-wrap: wrap; justify-content: space-between; gap: 4px 16px; padding: 12px 0; border-bottom: 1px solid #F4F0E6; font-size: 15px\"><span style=\"color: #3A4860\">{{r.k}}</span><span style=\"font-weight: 600; overflow-wrap: anywhere\">{{r.v}}</span></div>\n</sc-for>\n</div>\n<p style=\"margin: 0; font-size: 14px; line-height: 1.8; color: #2B3A52; background: #F3EEE2; border-radius: 12px; padding: 12px 16px\">{{BT.feesNote}}</p>\n</sc-if>\n\n<div style=\"display: flex; flex-wrap: wrap-reverse; justify-content: space-between; gap: 12px; padding-top: 18px; border-top: 1px solid #F0EBDF\">\n<sc-if value=\"{{canBack}}\" hint-placeholder-val=\"{{false}}\">\n<button type=\"button\" onClick=\"{{prev}}\" style=\"min-height: 52px; padding: 0 22px; border-radius: 14px; border: 1px solid #8F8778; background: #FFFFFF; font: inherit; font-size: 15px; color: #0F1E35; cursor: pointer\">السابق</button>\n</sc-if>\n<sc-if value=\"{{noBack}}\" hint-placeholder-val=\"{{true}}\"><span></span></sc-if>\n<button type=\"button\" onClick=\"{{next}}\" disabled=\"{{sending}}\" style=\"min-height: 52px; padding: 0 30px; border-radius: 14px; border: none; background: #C9A24D; color: #0F1E35; font: inherit; font-size: 16px; font-weight: 700; cursor: pointer\">{{nextLabel}}</button>\n</div>\n</div>\n</sc-if>\n</div>", "\nbody{margin:0}\n.bk :focus-visible{outline:2px solid #C9A24D;outline-offset:2px}\n.bk .opt:focus-within{outline:2px solid #C9A24D;outline-offset:2px}\n.bk .opt{position:relative}\n.bk .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\n", function (DCLogic, React) {
"use strict";
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { step: 1, type: '', day: '', slot: '', area: '', brief: '', phone: '', email: '', consent: false, tried: false, done: false, ticket: '', sending: false, sendErr: '' };
    this.headRef = (el) => { this.headEl = el; };
    this.doneRef = (el) => { this.doneEl = el; };
    this.rootRef = (el) => { this.rootEl = el; };
  }
  componentDidUpdate(pp, ps) {
    if (ps.step !== this.state.step || ps.done !== this.state.done) {
      const el = this.state.done ? this.doneEl : this.headEl;
      try { if (this.rootEl) this.rootEl.scrollIntoView({ block: 'start' }); if (el) el.focus({ preventScroll: true }); } catch (e) {}
    }
  }
  renderVals() {
    const cms = (() => { try { return JSON.parse(window.localStorage.getItem('mq_cms') || '{}') || {}; } catch (e) { return {}; } })();
    const bc = { weekend: '5,6', daysAhead: 6, minBrief: 30, ...(cms.booking || {}) };
    const BT = { ...{"consent": "أوافق على إرسال هذه المعلومات إلى المحامي المختار فقط، وفق", "feesDone": "الأتعاب يُتفق عليها مع المحامي مباشرة، ولا تنشأ علاقة توكيل إلا باتفاق صريح بينكما.", "feesNote": "لا تدفع شيئاً عبر المنصة الآن. الأتعاب يُتفق عليها مع المحامي مباشرة بعد تأكيد الموعد."}, ...bc };
    const wk = String(bc.weekend || '').split(',').filter((x) => x !== '').map(Number);
    const minB = Number(bc.minBrief ?? 30);
    const s = this.state;
    const L = this.props.lawyer || { name: 'المحامي', areas: ['استشارة عامة'] };
    const D = '٠١٢٣٤٥٦٧٨٩', P = '۰۱۲۳۴۵۶۷۸۹';
    const toW = (x) => String(x).replace(/[٠-٩]/g, (d) => D.indexOf(d)).replace(/[۰-۹]/g, (d) => P.indexOf(d));
    const ar = (x) => String(x).replace(/[0-9]/g, (d) => D[d]);
    const typesBase = [
      { k: 'msg', label: 'استشارة مكتوبة', desc: 'ترسل سؤالك ويرد المحامي كتابةً.' },
      { k: 'call', label: 'مكالمة هاتفية', desc: 'مكالمة في موعد تختاره.' },
      { k: 'video', label: 'مكالمة فيديو', desc: 'لقاء مرئي عبر الإنترنت.' },
      { k: 'office', label: 'حضور في المكتب', desc: 'زيارة مكتب المحامي في ' + (L.gov || 'محافظته') + '.' }
    ];
    const typesDef = (bc.types && bc.types.length ? bc.types.filter((t) => t.enabled !== false).map((t) => { const base = typesBase.find((x) => x.k === t.k); return { k: t.k, label: t.label || (base || {}).label, desc: t.k === 'office' && base ? base.desc : (t.desc || (base || {}).desc || '') }; }) : typesBase);
    const sel = (on) => ({ border: on ? '#0F1E35' : '#D9D2C3', bg: on ? '#F3EEE2' : '#FFFFFF', fg: '#0F1E35', on });
    const days = [];
    const d0 = new Date(); d0.setHours(0, 0, 0, 0);
    const dAhead = Math.max(1, Math.min(30, Number(bc.daysAhead ?? 6) || 6));
    for (let i = 1; days.length < dAhead && i < dAhead * 3 + 7; i++) {
      const d = new Date(d0); d.setDate(d0.getDate() + i);
      if (wk.includes(d.getDay())) continue;
      const key = d.toISOString().slice(0, 10);
      let wd = '', dm = '';
      try { wd = d.toLocaleDateString('ar-IQ', { weekday: 'long' }); dm = d.toLocaleDateString('ar-IQ', { day: 'numeric', month: 'long' }); } catch (e) { wd = key; }
      days.push({ key, wd, dm });
    }
    const slotsDef = (bc.slots && bc.slots.length) ? bc.slots : ['10:00', '11:30', '13:00', '16:00', '18:00'];
    const phoneW = toW(s.phone).replace(/[\s-]/g, '');
    const v = {
      1: !!s.type,
      2: s.type === 'msg' || (!!s.day && !!s.slot),
      3: !!s.area && s.brief.trim().length >= minB && /^(\+964|00964|0)7\d{9}$/.test(phoneW) && (!s.email.trim() || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s.email.trim())) && s.consent,
      4: true
    };
    const errTexts = { 1: 'اختر نوع الاستشارة.', 2: 'اختر اليوم والوقت.', 3: 'أكمل الموضوع والملخص (' + ar(minB) + ' حرفاً على الأقل) ورقم هاتف صحيح، ووافق على إرسال البيانات.' };
    const bad = (cond) => (s.tried && !cond ? '#A3282B' : '#8F8778');
    const typeLabel = (typesDef.find((t) => t.k === s.type) || {}).label || '';
    const dayObj = days.find((d) => d.key === s.day);
    const summary = [
      { k: 'المحامي', v: L.name },
      { k: 'نوع الاستشارة', v: typeLabel },
      { k: 'الموعد', v: s.type === 'msg' ? 'رد خلال يومي عمل' : (dayObj ? dayObj.wd + ' ' + dayObj.dm + '، الساعة ' + ar(s.slot) : '') },
      { k: 'الموضوع', v: s.area },
      { k: 'رقم التواصل', v: s.phone }
    ];
    const titles = { 1: 'ما نوع الاستشارة التي تحتاجها؟', 2: 'متى يناسبك؟', 3: 'أخبرنا عن قضيتك باختصار', 4: 'راجع طلبك وأرسله' };
    const close = () => { if (typeof this.props.onClose === 'function') this.props.onClose(); };
    return {
      BT,
      lawyerName: L.name, done: s.done, editing: !s.done, ticket: s.ticket, phone: s.phone,
      stepNum: ar(s.step), progress: (s.step / 4 * 100) + '%', stepTitle: titles[s.step],
      s1: s.step === 1, s2: s.step === 2, s3: s.step === 3, s4: s.step === 4,
      err: s.tried && !v[s.step], errText: errTexts[s.step] || '',
      types: typesDef.map((t) => ({ ...t, ...sel(s.type === t.k), pick: () => this.setState({ type: t.k }) })),
      isMessage: s.type === 'msg', needsSlot: s.type !== 'msg',
      days: days.map((d) => { const on = s.day === d.key; return { ...d, border: on ? '#0F1E35' : '#D9D2C3', bg: on ? '#0F1E35' : '#FFFFFF', fg: on ? '#FFFFFF' : '#0F1E35', on, pick: () => this.setState({ day: d.key }) }; }),
      slots: slotsDef.map((t) => { const on = s.slot === t; return { label: ar(t), border: on ? '#0F1E35' : '#D9D2C3', bg: on ? '#0F1E35' : '#FFFFFF', fg: on ? '#FFFFFF' : '#0F1E35', on, pick: () => this.setState({ slot: t }) }; }),
      areas: (L.areas || []).concat(['موضوع آخر']),
      area: s.area, brief: s.brief, consent: s.consent,
      areaB: bad(!!s.area), briefB: bad(s.brief.trim().length >= minB), phoneB: bad(/^(\+964|00964|0)7\d{9}$/.test(phoneW)),
      briefCount: '(' + ar(s.brief.trim().length) + ' حرفاً)',
      onArea: (e) => this.setState({ area: e.target.value }),
      onBrief: (e) => this.setState({ brief: e.target.value }),
      onPhone: (e) => this.setState({ phone: e.target.value }),
      email: s.email, onEmail: (e) => this.setState({ email: e.target.value }), emailB: s.tried && s.email.trim() && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s.email.trim()) ? '#A3282B' : '#8F8778',
      sending: s.sending, sendErr: s.sendErr, hasSendErr: !!s.sendErr,
      onConsent: (e) => this.setState({ consent: e.target.checked }),
      summary,
      canBack: s.step > 1, noBack: s.step === 1,
      prev: () => this.setState({ step: s.step - 1, tried: false }),
      nextLabel: s.step === 4 ? (s.sending ? 'جارٍ الإرسال…' : 'إرسال الطلب') : 'التالي',
      next: () => {
        if (!v[s.step]) { this.setState({ tried: true }); return; }
        if (s.step < 4) this.setState({ step: s.step + 1, tried: false });
        else if (window.MQ && window.MQ.live) {
          if (s.sending) return;
          this.setState({ sending: true, sendErr: '' });
          window.MQ.post('forms/booking', { lawyer: L.id, type: s.type, day: s.day, slot: s.slot, area: s.area, brief: s.brief, phone: s.phone, email: s.email.trim(), consent: s.consent })
            .then((r) => this.setState({ sending: false, done: true, ticket: ar(r.ticket) }))
            .catch((er) => this.setState({ sending: false, sendErr: er.message }));
        }
        else this.setState({ done: true, ticket: 'BK-' + ar(Math.floor(100000 + Math.random() * 900000)) });
      },
      close, headRef: this.headRef, doneRef: this.doneRef, rootRef: this.rootRef
    };
  }
}
return Component;
});
