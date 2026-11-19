MQ_DEF("Contact", "<div dir=\"rtl\" style=\"font-family: 'IBM Plex Sans Arabic', 'Cairo', system-ui, sans-serif; color: #0F1E35; background: #FAF7F0; min-height: 100vh\">\n<dc-import name=\"Header\" active=\"none\" hint-size=\"100%,81px\"></dc-import>\n<main id=\"main\" tabindex=\"-1\" style=\"outline: none\">\n\n<section style=\"background: #0F1E35\">\n<div style=\"max-width: 1240px; margin: 0 auto; padding: clamp(36px, 5vw, 56px) 20px clamp(96px, 10vw, 112px); display: flex; flex-direction: column; gap: 12px\">\n<span style=\"font-size: 14px; color: #AEB8C8\">الرئيسية / اتصل بنا</span>\n<h1 style=\"margin: 0; font-size: clamp(28px, 5.5vw, 44px); font-weight: 700; color: #FFFFFF\">{{pgHero.t1}}<sc-if value=\"{{pgHero.hasT2}}\" hint-placeholder-val=\"{{false}}\"><br>{{pgHero.t2}}</sc-if></h1>\n<p style=\"margin: 0; font-size: clamp(15px, 2.4vw, 18px); line-height: 1.8; color: #D5DBE5; max-width: 600px\">لأسئلة المنصة والاقتراحات والإبلاغ عن خطأ في نص قانوني. لطلب استشارة في قضية <a href=\"Lawyers.dc.html\" style=\"color: #FFFFFF; font-weight: 600; text-decoration: underline; text-decoration-color: #C9A24D; text-underline-offset: 5px\">اختر محامياً</a>.<sc-if value=\"{{pgHero.hasText}}\" hint-placeholder-val=\"{{false}}\"><br>{{pgHero.text}}</sc-if></p>\n</div>\n</section>\n\n<section style=\"max-width: 1240px; margin: -72px auto 0; padding: 0 20px; position: relative; display: flex; flex-wrap: wrap; gap: 24px; align-items: flex-start; box-sizing: border-box\">\n\n<div style=\"flex: 999 1 520px; min-width: 0; background: #FFFFFF; border-radius: clamp(20px, 3vw, 28px); padding: clamp(22px, 4vw, 40px); box-shadow: 0 24px 48px -32px rgba(15,30,53,0.35)\">\n<sc-if value=\"{{sent}}\" hint-placeholder-val=\"{{false}}\">\n<div role=\"status\" style=\"display: flex; flex-direction: column; align-items: center; text-align: center; gap: 14px; padding: 40px 0\">\n<span style=\"width: 64px; height: 64px; border-radius: 50%; background: #F3EEE2; display: flex; align-items: center; justify-content: center\">\n<svg width=\"30\" height=\"30\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#0F1E35\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12l5 5L20 7\"></path></svg>\n</span>\n<h2 style=\"margin: 0; font-size: 22px; font-weight: 700\">وصلتنا رسالتك</h2>\n<p style=\"margin: 0; font-size: 15px; line-height: 1.9; color: #3A4860; max-width: 420px\">رقم المتابعة <bdi>{{ticket}}</bdi>. {{autoReply}}</p>\n<button type=\"button\" onClick=\"{{again}}\" style=\"height: 46px; padding: 0 20px; border-radius: 12px; border: 1px solid #8F8778; background: #FFFFFF; font: inherit; font-size: 15px; color: #0F1E35; cursor: pointer\">إرسال رسالة أخرى</button>\n</div>\n</sc-if>\n<sc-if value=\"{{editing}}\" hint-placeholder-val=\"{{true}}\">\n<form onSubmit=\"{{submit}}\" novalidate style=\"display: flex; flex-direction: column; gap: 18px\">\n<h2 style=\"margin: 0; font-size: 22px; font-weight: 700\">أرسل رسالة</h2>\n<div style=\"display: flex; flex-wrap: wrap; gap: 18px\">\n<div style=\"flex: 1 1 220px; min-width: 0; display: flex; flex-direction: column; gap: 8px\">\n<label for=\"ct-name\" style=\"font-size: 14px; font-weight: 600\">الاسم الكامل</label>\n<input id=\"ct-name\" aria-describedby=\"ct-name-e\" type=\"text\" autocomplete=\"name\" value=\"{{name}}\" onChange=\"{{onName}}\" aria-invalid=\"{{nameInvalid}}\" style=\"height: 52px; width: 100%; min-width: 0; box-sizing: border-box; padding: 0 16px; border: 1px solid {{nameBorder}}; border-radius: 14px; background: #FAF7F0; font: inherit; font-size: 16px; color: #0F1E35\">\n<sc-if value=\"{{nameErr}}\" hint-placeholder-val=\"{{false}}\"><span id=\"ct-name-e\" style=\"font-size: 13px; color: #A3282B\">اكتب اسمك.</span></sc-if>\n</div>\n<div style=\"flex: 1 1 220px; min-width: 0; display: flex; flex-direction: column; gap: 8px\">\n<label for=\"ct-contact\" style=\"font-size: 14px; font-weight: 600\">البريد الإلكتروني أو رقم الهاتف</label>\n<input id=\"ct-contact\" aria-describedby=\"ct-contact-e\" type=\"text\" autocomplete=\"email\" dir=\"ltr\" value=\"{{contact}}\" onChange=\"{{onContact}}\" aria-invalid=\"{{contactInvalid}}\" style=\"height: 52px; width: 100%; min-width: 0; box-sizing: border-box; padding: 0 16px; border: 1px solid {{contactBorder}}; border-radius: 14px; background: #FAF7F0; font: inherit; font-size: 16px; color: #0F1E35; text-align: right\">\n<sc-if value=\"{{contactErr}}\" hint-placeholder-val=\"{{false}}\"><span id=\"ct-contact-e\" style=\"font-size: 13px; color: #A3282B\">أدخل بريداً صحيحاً أو رقم هاتف عراقياً (مثل 07XXXXXXXXX).</span></sc-if>\n</div>\n</div>\n<div style=\"display: flex; flex-direction: column; gap: 8px\">\n<label for=\"ct-topic\" style=\"font-size: 14px; font-weight: 600\">موضوع الرسالة</label>\n<select id=\"ct-topic\" value=\"{{topic}}\" onChange=\"{{onTopic}}\" style=\"height: 52px; padding: 0 16px; border: 1px solid #8F8778; border-radius: 14px; background: #FAF7F0; font: inherit; font-size: 16px; color: #0F1E35\">\n<sc-for list=\"{{topics}}\" as=\"t\" hint-placeholder-count=\"6\"><option value=\"{{t.v}}\">{{t.l}}</option></sc-for>\n</select>\n</div>\n<div style=\"display: flex; flex-direction: column; gap: 8px\">\n<label for=\"ct-msg\" style=\"font-size: 14px; font-weight: 600\">رسالتك</label>\n<textarea id=\"ct-msg\" aria-describedby=\"ct-msg-e\" rows=\"6\" value=\"{{msg}}\" onChange=\"{{onMsg}}\" aria-invalid=\"{{msgInvalid}}\" style=\"padding: 14px 16px; border: 1px solid {{msgBorder}}; border-radius: 14px; background: #FAF7F0; font: inherit; font-size: 16px; line-height: 1.8; color: #0F1E35; resize: vertical\"></textarea>\n<sc-if value=\"{{msgErr}}\" hint-placeholder-val=\"{{false}}\"><span id=\"ct-msg-e\" style=\"font-size: 13px; color: #A3282B\">اكتب رسالة من ٢٠ حرفاً على الأقل.</span></sc-if>\n</div>\n<label style=\"display: flex; align-items: flex-start; gap: 10px; font-size: 14px; line-height: 1.8; color: #3A4860; cursor: pointer\">\n<input type=\"checkbox\" checked=\"{{agree}}\" onChange=\"{{onAgree}}\" style=\"width: 20px; height: 20px; margin-top: 4px; accent-color: #0F1E35\">\n<span>أوافق على معالجة بياناتي للرد على رسالتي وفق <a href=\"Legal.dc.html\" style=\"color: #0F1E35; font-weight: 600; text-decoration: underline; text-decoration-color: #C9A24D; text-underline-offset: 5px\">سياسة الخصوصية</a>.</span>\n</label>\n<sc-if value=\"{{agreeErr}}\" hint-placeholder-val=\"{{false}}\"><span style=\"font-size: 13px; color: #A3282B\">يلزم الموافقة على سياسة الخصوصية للإرسال.</span></sc-if>\n<div aria-hidden=\"true\" style=\"position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap\"><label>اترك هذا الحقل فارغاً<input type=\"text\" tabindex=\"-1\" autocomplete=\"off\" value=\"{{website}}\" onChange=\"{{onWebsite}}\"></label></div>\n<sc-if value=\"{{hasSendErr}}\" hint-placeholder-val=\"{{false}}\"><p role=\"alert\" style=\"margin: 0; padding: 12px 16px; border-radius: 12px; background: #FBEDED; color: #A3282B; font-size: 14px; font-weight: 600\">{{sendErr}}</p></sc-if>\n<button type=\"submit\" disabled=\"{{sending}}\" style=\"align-self: flex-start; height: 54px; padding: 0 34px; border: none; border-radius: 14px; background: #C9A24D; color: #0F1E35; font: inherit; font-size: 16px; font-weight: 700; cursor: pointer\">{{sendLabel}}</button>\n</form>\n</sc-if>\n</div>\n\n<aside style=\"flex: 1 1 280px; min-width: 0; display: flex; flex-direction: column; gap: 20px\">\n<div style=\"background: #FFFFFF; border-radius: clamp(20px, 3vw, 28px); padding: 26px; display: flex; flex-direction: column; gap: 16px; box-shadow: 0 24px 48px -32px rgba(15,30,53,0.35); font-size: 15px\">\n<h2 style=\"margin: 0; font-size: 18px; font-weight: 700\">معلومات التواصل</h2>\n<div style=\"display: flex; flex-direction: column; gap: 4px\"><span style=\"color: #3A4860; font-size: 13px\">العنوان</span><span style=\"font-weight: 600\">{{addr}}</span></div>\n<sc-for list=\"{{infos}}\" as=\"x\" hint-placeholder-count=\"2\"><div style=\"display: flex; flex-direction: column; gap: 4px\"><span style=\"color: #3A4860; font-size: 13px\">{{x.k}}</span><bdi style=\"font-weight: 600\">{{x.v}}</bdi></div></sc-for>\n<sc-if value=\"{{noInfos}}\" hint-placeholder-val=\"{{true}}\"><p style=\"margin: 0; font-size: 14px; line-height: 1.8; color: #3A4860\">{{CTT.noChannels}}</p></sc-if>\n</div>\n<div style=\"background: #FFFFFF; border-radius: clamp(20px, 3vw, 28px); padding: 26px; display: flex; flex-direction: column; gap: 4px; box-shadow: 0 24px 48px -32px rgba(15,30,53,0.35)\">\n<h2 style=\"margin: 0 0 8px; font-size: 18px; font-weight: 700\">أسئلة شائعة</h2>\n<sc-for list=\"{{faq}}\" as=\"f\" hint-placeholder-count=\"4\">\n<div style=\"border-top: 1px solid #F0EBDF\">\n<button type=\"button\" onClick=\"{{f.toggle}}\" aria-expanded=\"{{f.expanded}}\" style=\"width: 100%; min-height: 52px; display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 10px 0; border: none; background: transparent; font: inherit; font-size: 15px; font-weight: 600; color: #0F1E35; text-align: start; cursor: pointer\">{{f.q}}<span aria-hidden=\"true\" style=\"font-size: 20px; color: #0F1E35\">{{f.sign}}</span></button>\n<sc-if value=\"{{f.open}}\" hint-placeholder-val=\"{{false}}\"><p style=\"margin: 0 0 14px; font-size: 14px; line-height: 1.9; color: #3A4860\">{{f.a}}</p></sc-if>\n</div>\n</sc-for>\n</div>\n</aside>\n</section>\n\n</main>\n<div style=\"height: clamp(64px, 9vw, 112px)\"></div>\n<dc-import name=\"Footer\" hint-size=\"100%,460px\"></dc-import>\n</div>", "\nbody{margin:0;background:#FAF7F0}\na{color:#0F1E35;text-decoration:none}\n:focus-visible{outline:2px solid #C9A24D;outline-offset:2px}\n", function (DCLogic, React) {
"use strict";
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { name: '', contact: '', topic: 'general', msg: '', agree: false, tried: false, sent: false, ticket: '', faq: -1, sending: false, sendErr: '', website: '' };
  }
  componentDidMount() {
    try { const t = window.localStorage.getItem('mq_contactTopic'); if (t) { window.localStorage.removeItem('mq_contactTopic'); this.setState({ topic: t }); } } catch (e) {}
  }
  renderVals() {
    const cms = (() => { try { return JSON.parse(window.localStorage.getItem('mq_cms') || '{}') || {}; } catch (e) { return {}; } })();
    const pgc = cms.pages || {};
    const pgHero = { t1: pgc.contact_t1 || "تواصل معنا", t2: pgc.contact_t1 != null ? (pgc.contact_t2 || '') : "", text: pgc.contact_text || "" };
    pgHero.hasT2 = !!pgHero.t2; pgHero.hasText = !!String(pgHero.text).trim();
    const ctc = { email: '', phone: '', hours: '', autoReply: '', ...(cms.contact || {}) };
    const CTT = { ...{"noChannels": "نتواصل عبر نموذج الرسائل لنحفظ رقم متابعة لكل طلب. تُضاف قنوات الهاتف والبريد عند الإطلاق الرسمي."}, ...ctc };
    const addr = (cms.footer && cms.footer.address) || 'بغداد، العراق';
    const s = this.state;
    const ar = (x) => String(x).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);
    const contact = s.contact.trim().replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).replace(/[\s-]/g, '');
    const okContact = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(contact) || /^(\+964|00964|0)7\d{9}$/.test(contact);
    const v = { name: s.name.trim().length >= 2, contact: okContact, msg: s.msg.trim().length >= 20, agree: s.agree };
    const err = (k) => s.tried && !v[k];
    const border = (k) => (err(k) ? '#A3282B' : '#8F8778');
    const faqsBase = [
      { q: 'هل الاستشارة عبر المنصة سرية؟', a: 'تصل تفاصيل استشارتك إلى المحامي الذي تختاره، ولا نشاركها إلا وفق سياسة الخصوصية. علماً بأن المحادثة مع المساعد الآلي لا تتمتع بالسرية المهنية.' },
      { q: 'كيف أعرف أن المحامي موثّق؟', a: 'تظهر علامة «موثّق» واسم النقابة وتاريخ آخر تحقق في ملف المحامي، بعد التحقق من قيده في نقابة المحامين العراقيين أو نقابة محامي كوردستان.' },
      { q: 'وجدت خطأ في نص قانون، ماذا أفعل؟', a: 'اختر «الإبلاغ عن خطأ في نص قانوني» في النموذج واذكر اسم القانون ورقم المادة.' },
      { q: 'أنا محامٍ، كيف أنضم؟', a: 'قدّم طلبك من صفحة «انضم كمحامٍ» (الرابط في أسفل الصفحة وفي القائمة)، وارفع مستندات إثبات الصفة لبدء التحقق.' }
    ];
    const faqs = (ctc.faqs && ctc.faqs.length) ? ctc.faqs.filter((f) => f.q) : faqsBase;
    const topicsBase = [{ v: 'general', l: 'استفسار عام' }, { v: 'error', l: 'الإبلاغ عن خطأ في نص قانوني' }, { v: 'lawyer', l: 'انضمام محامٍ إلى المنصة' }, { v: 'complaint', l: 'شكوى على محامٍ أو خدمة' }, { v: 'privacy', l: 'طلب يخص بياناتي الشخصية' }, { v: 'ads', l: 'الإعلان على المنصة' }];
    const infos = [['البريد', ctc.email], ['الهاتف', ctc.phone], ['ساعات الرد', ctc.hours]].filter((x) => x[1]).map(([k, v]) => ({ k, v }));
    return {
      CTT,
      pgHero,
      sent: s.sent, editing: !s.sent, ticket: s.ticket,
      topics: (ctc.topics && ctc.topics.length) ? ctc.topics.filter((t) => t.v && t.l) : topicsBase, addr, infos, noInfos: !infos.length, autoReply: ctc.autoReply || 'سنرد عليك على وسيلة التواصل التي أدخلتها.',
      name: s.name, contact: s.contact, topic: s.topic, msg: s.msg, agree: s.agree,
      nameErr: err('name'), contactErr: err('contact'), msgErr: err('msg'), agreeErr: err('agree'),
      nameInvalid: err('name') ? 'true' : 'false', contactInvalid: err('contact') ? 'true' : 'false', msgInvalid: err('msg') ? 'true' : 'false',
      nameBorder: border('name'), contactBorder: border('contact'), msgBorder: border('msg'),
      onName: (e) => this.setState({ name: e.target.value }),
      onContact: (e) => this.setState({ contact: e.target.value }),
      onTopic: (e) => this.setState({ topic: e.target.value }),
      onMsg: (e) => this.setState({ msg: e.target.value }),
      onAgree: (e) => this.setState({ agree: e.target.checked }),
      submit: (e) => {
        e.preventDefault();
        if (v.name && v.contact && v.msg && v.agree && window.MQ && window.MQ.live) {
          if (this.state.sending) return;
          this.setState({ sending: true, sendErr: '' });
          window.MQ.post('forms/contact', { name: s.name, contact: s.contact, topic: s.topic, msg: s.msg, agree: true, website: s.website || '' })
            .then((r) => this.setState({ sending: false, sent: true, tried: false, ticket: '#' + ar(r.ticket) }))
            .catch((er) => this.setState({ sending: false, sendErr: er.message }));
          return;
        }
        if (v.name && v.contact && v.msg && v.agree) {
          const num = String(Math.floor(10000 + Math.random() * 90000));
          const tps = (ctc.topics && ctc.topics.length) ? ctc.topics : [{ v: 'general', team: 'فريق الدعم' }, { v: 'error', team: 'فريق المحتوى' }, { v: 'lawyer', team: 'فريق التوثيق' }, { v: 'complaint', team: 'فريق الدعم' }, { v: 'privacy', team: 'مسؤول الخصوصية' }, { v: 'ads', team: 'مدير الإعلانات' }];
          const tp = tps.find((t) => t.v === s.topic) || {};
          const isMail = contact.includes('@');
          const maskC = isMail ? contact.slice(0, 1) + '•••@' + contact.split('@')[1] : '07XX XXX ' + contact.slice(-4);
          const nm = s.name.trim().split(/\s+/).map((w) => w.slice(0, 1) + '.').join(' ');
          const when = new Date().toISOString().slice(0, 10);
          const body = s.msg.trim();
          try {
            const c = JSON.parse(window.localStorage.getItem('mq_cms') || '{}') || {};
            if (s.topic === 'ads') {
              const m = c.adRequests = c.adRequests || { upsert: {}, removed: [] }; m.upsert = m.upsert || {};
              const id = 'AR-' + num; m.upsert[id] = { id, company: nm, contact: maskC, budget: 'غير محدد', slots: '—', msg: body, status: 'new', created: when, note: '' };
            } else {
              const m = c.messages = c.messages || { upsert: {}, removed: [] }; m.upsert = m.upsert || {};
              const id = 'T-' + num; const tl = (tp.l || topicsBase.find((t) => t.v === s.topic) || {}).l || 'رسالة';
              m.upsert[id] = { id, topic: s.topic, subject: tl + ': ' + body.slice(0, 50) + (body.length > 50 ? '…' : ''), name: nm, contact: maskC, msg: body, status: 'new', priority: s.topic === 'error' || s.topic === 'complaint' ? 'high' : 'normal', assignee: tp.team || '', law: '', article: '', reply: '', note: '', created: when };
            }
            window.localStorage.setItem('mq_cms', JSON.stringify(c));
            const b = JSON.parse(window.localStorage.getItem('mq_adminBadges') || '{}') || {}; const bk = s.topic === 'ads' ? 'adRequests' : 'messages';
            if (b[bk] != null) { b[bk] += 1; window.localStorage.setItem('mq_adminBadges', JSON.stringify(b)); }
          } catch (er) {}
          this.setState({ sent: true, tried: false, ticket: '#' + ar((s.topic === 'ads' ? 'AR-' : 'T-') + num) });
        }
        else this.setState({ tried: true });
      },
      again: () => this.setState({ name: '', contact: '', msg: '', agree: false, sent: false, tried: false, sendErr: '' }),
      sending: s.sending, sendErr: s.sendErr, hasSendErr: !!s.sendErr, sendLabel: s.sending ? 'جارٍ الإرسال…' : 'إرسال الرسالة',
      website: s.website, onWebsite: (e) => this.setState({ website: e.target.value }),
      faq: faqs.map((f, i) => ({
        ...f, open: s.faq === i, expanded: s.faq === i ? 'true' : 'false', sign: s.faq === i ? '−' : '+',
        toggle: () => this.setState({ faq: s.faq === i ? -1 : i })
      }))
    };
  }
}
return Component;
});
