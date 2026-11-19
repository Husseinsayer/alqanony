MQ_DEF("Legal", "<div dir=\"rtl\" style=\"font-family: 'IBM Plex Sans Arabic', system-ui, sans-serif; color: #0F1E35; background: #FAF7F0; min-height: 100vh\">\n<dc-import name=\"Header\" active=\"none\" hint-size=\"100%,81px\"></dc-import>\n<main id=\"main\" tabindex=\"-1\" style=\"outline: none\">\n\n<section style=\"background: #0F1E35\">\n<div style=\"max-width: 900px; margin: 0 auto; padding: clamp(40px, 6vw, 64px) 20px clamp(96px, 10vw, 120px); display: flex; flex-direction: column; gap: 12px\">\n<span style=\"font-size: 14px; color: #AEB8C8\">الرئيسية / السياسات</span>\n<h1 style=\"margin: 0; font-size: clamp(28px, 5.5vw, 44px); font-weight: 700; color: #FFFFFF\">{{pageTitle}}</h1>\n<span style=\"font-size: 15px; color: #C8CFDB\">{{versionLine}}</span>\n</div>\n</section>\n\n<section style=\"position: relative; margin-top: -56px; background: #FFFFFF; border-radius: clamp(24px, 4vw, 40px); box-shadow: 0 -24px 48px -32px rgba(11,23,41,0.6)\">\n<div style=\"max-width: 900px; margin: 0 auto; padding: clamp(32px, 5vw, 48px) 20px clamp(48px, 7vw, 80px)\">\n<div role=\"group\" aria-label=\"السياسات\" style=\"display: flex; flex-wrap: nowrap; overflow-x: auto; gap: 6px; padding: 6px; background: #FAF7F0; border-radius: 16px; margin-bottom: 24px\">\n<sc-for list=\"{{tabs}}\" as=\"t\" hint-placeholder-count=\"3\">\n<button type=\"button\" aria-pressed=\"{{t.on}}\" onClick=\"{{t.pick}}\" style=\"flex: 1 0 auto; min-height: 46px; padding: 0 18px; border-radius: 12px; border: 1px solid {{t.border}}; background: {{t.bg}}; color: #0F1E35; font: inherit; font-size: 15px; font-weight: 600; cursor: pointer; white-space: nowrap\">{{t.label}}</button>\n</sc-for>\n</div>\n<sc-if value=\"{{isDraft}}\" hint-placeholder-val=\"{{true}}\"><p style=\"margin: 0 0 8px; font-size: 14px; line-height: 1.8; color: #2B3A52; background: #F3EEE2; border-radius: 12px; padding: 12px 16px\">{{lg.draftNote}}</p></sc-if>\n<sc-for list=\"{{sections}}\" as=\"s\" hint-placeholder-count=\"6\">\n<section style=\"padding: 24px 0; border-bottom: 1px solid #F0EBDF; display: flex; flex-direction: column; gap: 10px\">\n<h2 style=\"margin: 0; font-size: 20px; font-weight: 700\">{{s.h}}</h2>\n<p style=\"margin: 0; font-size: 16px; line-height: 2.1; color: #2B3A52\">{{s.p}}</p>\n<sc-if value=\"{{s.hasList}}\" hint-placeholder-val=\"{{false}}\">\n<ul style=\"margin: 0; padding-inline-start: 20px; display: flex; flex-direction: column; gap: 6px; font-size: 15px; line-height: 1.9; color: #2B3A52\">\n<sc-for list=\"{{s.list}}\" as=\"i\" hint-placeholder-count=\"3\"><li>{{i}}</li></sc-for>\n</ul>\n</sc-if>\n</section>\n</sc-for>\n<sc-if value=\"{{hasPrefs}}\" hint-placeholder-val=\"{{false}}\"><button type=\"button\" onClick=\"{{openPrefs}}\" style=\"margin-top: 24px; min-height: 46px; padding: 0 18px; border-radius: 12px; border: 1px solid #8F8778; background: #FFFFFF; color: #0F1E35; font: inherit; font-size: 15px; font-weight: 600; cursor: pointer\">إعدادات ملفات تعريف الارتباط</button></sc-if>\n<p style=\"margin: 28px 0 0; font-size: 15px; color: #3A4860\">لأي سؤال أو طلب يخص بياناتك <a href=\"Contact.dc.html\" style=\"color: #0F1E35; font-weight: 700; text-decoration: underline; text-decoration-color: #C9A24D; text-underline-offset: 5px\">تواصل معنا</a>.</p>\n</div>\n</section>\n\n</main>\n<div style=\"height: clamp(64px, 9vw, 112px)\"></div>\n<dc-import name=\"Footer\" hint-size=\"100%,460px\"></dc-import>\n</div>", "\nbody{margin:0;background:#FAF7F0}\na{color:#0F1E35;text-decoration:none}\n:focus-visible{outline:2px solid #C9A24D;outline-offset:2px}\n", function (DCLogic, React) {
"use strict";
class Component extends DCLogic {
  constructor(props) { super(props); this.state = { tab: 'privacy' }; }
  componentDidMount() {
    try { const t = window.localStorage.getItem('mq_legalTab'); if (t) { window.localStorage.removeItem('mq_legalTab'); this.setState({ tab: t }); } } catch (e) {}
  }
  renderVals() {
    const cms = (() => { try { return JSON.parse(window.localStorage.getItem('mq_cms') || '{}') || {}; } catch (e) { return {}; } })();
    const mergeL = (seed, c, idk) => { idk = idk || 'id'; c = c || {}; const up = c.upsert || {}; const rm = new Set(c.removed || []); const out = (seed || []).filter((r) => !rm.has(r[idk])).map((r) => (up[r[idk]] ? { ...r, ...up[r[idk]] } : r)); Object.keys(up).forEach((id) => { if (!rm.has(id) && !(seed || []).some((r) => r[idk] === id)) out.push(up[id]); }); return out; };
    const isPub = (r) => (r.state || 'published') === 'published';
    const lg = { version: '٠٫٩', status: 'draft', effective: '', draftNote: "مسودة أولية يعتمدها المستشار القانوني للمنصة قبل النشر. نعلن أي تعديل جوهري ونحدّث رقم الإصدار.", ...(cms.legal || {}) };
    const S = (h, p, list) => ({ h, p, list: list || [], hasList: !!(list && list.length) });
    const docs = {
      privacy: { label: 'سياسة الخصوصية', sections: [
        S('من يعالج بياناتك', 'تعالج بياناتك الجهة المشغّلة للمنصة المذكورة في صفحة «من نحن». لا يوجد في العراق حتى الآن قانون شامل لحماية البيانات الشخصية، ونلتزم بحماية الخصوصية التي يكفلها الدستور وبهذه السياسة.'),
        S('البيانات التي نجمعها والغرض منها', 'نجمع ما يلزم لتقديم الخدمة فقط:', [
          'بيانات الحساب: الاسم والهاتف والبريد، لتسجيل الدخول والتواصل.',
          'طلبات الاستشارة: موضوع القضية وملخصها، لإيصالها إلى المحامي الذي تختاره.',
          'محادثات المساعد القانوني الآلي: لتقديم الإجابة وتحسين الخدمة، مع حجب البيانات الشخصية قدر الإمكان.',
          'بيانات المحامين: الهوية المهنية والبطاقة الوطنية والصورة ومكالمة التحقق بالفيديو، للتحقق من القيد فقط.',
          'بيانات استخدام مجهّلة، لقياس أداء الموقع.'
        ]),
        S('مع من نشارك البيانات', 'لا نبيع بياناتك. نشاركها فقط في الحالات الآتية:', [
          'المحامي الذي تختاره، في حدود طلب الاستشارة.',
          'مزودو الخدمة الذين يعملون لحسابنا: الاستضافة، والرسائل النصية، ومزوّد نموذج الذكاء الاصطناعي للمساعد الآلي، بموجب التزامات سرية.',
          'الجهات الرسمية عند وجود طلب قانوني ملزم.'
        ]),
        S('ملفات تعريف الارتباط والإعلانات', 'نستخدم ملفات ارتباط ضرورية لتسجيل الدخول وحماية النماذج من الإساءة. وقد يعرض الموقع إعلانات من Google AdSense أو شبكات إعلانية أخرى، وتحمل كل مساحة إعلانية كلمة «إعلان» ومنفصلة عن المحتوى:', [
          'يستخدم مزودو الخدمة من جهات خارجية، ومنهم Google، ملفات تعريف الارتباط لعرض الإعلانات بناءً على زياراتك السابقة لهذا الموقع أو لمواقع أخرى.',
          'يتيح ملف تعريف الارتباط الخاص بالإعلانات لـ Google وشركائها عرض إعلانات لك بناءً على زياراتك لهذا الموقع و/أو لمواقع أخرى على الإنترنت.',
          'يمكنك إيقاف الإعلانات المخصّصة من إعدادات الإعلانات في Google ‏(adssettings.google.com)، أو إيقاف ملفات الارتباط لدى مورّدين آخرين عبر ‏aboutads.info.',
          'لزوار المنطقة الاقتصادية الأوروبية والمملكة المتحدة وسويسرا تظهر رسالة موافقة قبل استخدام ملفات الارتباط الإعلانية، ويمكن تغيير الاختيار في أي وقت.',
          'لا نبيع بياناتك للمعلنين، ولا نشاركهم بيانات حسابك أو طلباتك أو استشاراتك.',
          'نقيس عدد الزيارات والصفحات الأكثر قراءة بـ Google Analytics بعد موافقتك فقط، بصورة إجمالية لا تحدد هويتك، ويمكنك تغيير اختيارك من «إعدادات ملفات تعريف الارتباط» في هذه الصفحة.'
        ]),
        S('مدة الاحتفاظ', 'نحتفظ بكل فئة للمدة اللازمة لغرضها فقط:', [
          'مستندات تحقق المحامين: تُحذف خلال ٩٠ يوماً من قرار القبول أو الرفض، ولا تُسجَّل مكالمة الفيديو.',
          'محادثات المساعد الآلي: تُحذف بعد ٣٠ يوماً ما لم تحفظها بنفسك في حسابك.',
          'بيانات الحساب: طوال مدة الحساب، وتُحذف عند طلب حذفه إلا ما يلزم القانون بحفظه.'
        ]),
        S('الاستضافة وحماية البيانات', 'تُنقل البيانات عبر اتصال مشفّر، وتُحفظ المستندات الحساسة مشفّرة في تخزين خاص لا يصل إليه إلا الموظفون المخوّلون. نحدد موقع الاستضافة في هذه السياسة قبل الإطلاق، ونخطر المتأثرين عند أي اختراق يمسّ بياناتهم.'),
        S('حقوقك', 'يحق لك الاطلاع على بياناتك وتصحيحها وحذفها وسحب موافقتك. أرسل طلبك عبر صفحة التواصل باختيار «طلب يخص بياناتي الشخصية»، ونرد خلال ١٥ يوم عمل.')
      ] },
      terms: { label: 'شروط الاستخدام', sections: [
        S('طبيعة الخدمة', 'المرجع القانوني العراقي منصة معلومات قانونية ودليل للمحامين. المنصة ليست مكتب محاماة، ولا تقدّم استشارة قانونية بنفسها.'),
        S('العلاقة مع المحامين', 'المحامون المسجّلون مستقلون. لا تنشأ علاقة محاماة إلا بتوكيل مباشر بينك وبين المحامي، والأتعاب يُتفق عليها بينكما مباشرة. المنصة لا تتقاضى نسبة من الأتعاب ولا تضمن نتيجة أي قضية.'),
        S('شروط الحساب', 'يجب أن يكون عمر المستخدم ١٨ سنة على الأقل، وأن يقدّم معلومات صحيحة ويحافظ على سرية كلمة المرور.'),
        S('الاستخدام المقبول', 'يُمنع إساءة استخدام المنصة، ونشر محتوى مخالف للقانون أو مسيء، وانتحال صفة الغير، ونشر وقائع قضايا الآخرين أو عرائضهم.'),
        S('الشكاوى على المحامين', 'يمكنك تقديم شكوى على محامٍ أو خدمة عبر صفحة التواصل. نراجع الشكوى ونوقف الملف عند الحاجة، ولا يمسّ ذلك حقك في الشكوى أمام النقابة المختصة.'),
        S('حدود المسؤولية', 'المنصة غير مسؤولة عن مضمون الاستشارات التي يقدّمها المحامون، ولا عن قرارات تُتخذ اعتماداً على المعلومات العامة فقط. لا يعفي هذا البند المنصة من مسؤوليتها عن الغش أو الخطأ الجسيم.'),
        S('إنهاء الحساب', 'يحق لك حذف حسابك في أي وقت، ويحق للمنصة إيقاف الحساب المخالف لهذه الشروط بعد إشعار صاحبه.'),
        S('القانون الواجب التطبيق', 'تخضع هذه الشروط للقانون العراقي، وتختص محاكم بغداد بالنظر في أي نزاع ينشأ عنها، مع مراعاة ما يقرره القانون للمستخدمين في إقليم كوردستان.')
      ] },
      disclaimer: { label: 'إخلاء المسؤولية', sections: [
        S('معلومات عامة لا استشارة', 'المقالات وشروح المواد والنماذج والمساعد الآلي للمعلومات العامة، ولا تُعدّ استشارة قانونية في حالة بعينها.'),
        S('المساعد القانوني الآلي', 'إجاباته آلية واسترشادية وقد لا تشمل تفاصيل حالتك، ولا تتمتع المحادثة معه بالسرية المهنية التي تتمتع بها المحادثة مع محامٍ.'),
        S('النصوص القانونية', 'نعرض مقتطفات وملخصات بأرقام موادها الحقيقية. المرجع الملزم هو النص المنشور في جريدة الوقائع العراقية، وقد لا تكون كل التعديلات منعكسة فوراً.'),
        S('الاتحادي والإقليم', 'بعض القوانين تختلف بين العراق الاتحادي وإقليم كوردستان، مثل قانون العمل وأحكام الأحوال الشخصية وقانون المحاماة. نبيّن نطاق التطبيق لكل قانون.'),
        S('النماذج', 'النماذج إرشادية، ولا تغني عن التسجيل أو التصديق الرسمي الذي يشترطه القانون، مثل تسجيل العقار والمركبة وتنظيم الوكالة لدى الكاتب العدل.'),
        S('الحاسبة', 'نتائجها تقديرية تعتمد على القيم المُدخلة، وقد تختلف عما تقرره المحكمة أو الجهة المختصة.')
      ] }
    };
    ['privacy', 'terms', 'disclaimer'].forEach((k) => { if (lg[k] && lg[k].length) docs[k] = { ...docs[k], sections: lg[k].filter((x) => x.h || x.p).map((x) => S(x.h, x.p, String(x.listText || '').split('\n').map((t) => t.trim()).filter(Boolean))) }; });
    const tab = docs[this.state.tab] ? this.state.tab : 'privacy';
    const arD = (x) => String(x).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);
    const prefsOn = !!(window.MQ && window.MQ.hasCookiePrefs && window.MQ.hasCookiePrefs());
    return {
      hasPrefs: prefsOn, openPrefs: () => { try { window.MQ.cookiePrefs(); } catch (e) {} },
      lg,
      pageTitle: docs[tab].label,
      isDraft: lg.status !== 'effective', versionLine: 'الإصدار ' + lg.version + ' · ' + (lg.status === 'effective' ? 'نافذ من ' + arD(lg.effective || '') : 'مسودة للمراجعة القانونية'),
      sections: docs[tab].sections,
      tabs: Object.keys(docs).map((k) => ({ label: docs[k].label, on: k === tab ? 'true' : 'false', bg: k === tab ? '#FFFFFF' : 'transparent', border: k === tab ? '#0F1E35' : 'transparent', pick: () => this.setState({ tab: k }) }))
    };
  }
}
return Component;
});
