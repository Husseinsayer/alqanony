MQ_DEF("About", "<div dir=\"rtl\" style=\"font-family: 'IBM Plex Sans Arabic', system-ui, sans-serif; color: #0F1E35; background: #FAF7F0; min-height: 100vh\">\n<dc-import name=\"Header\" active=\"none\" hint-size=\"100%,81px\"></dc-import>\n<main id=\"main\" tabindex=\"-1\" style=\"outline: none\">\n\n<section style=\"background: #0F1E35\">\n<div style=\"max-width: 1000px; margin: 0 auto; padding: clamp(40px, 6vw, 72px) 20px clamp(96px, 10vw, 128px); display: flex; flex-direction: column; gap: 14px\">\n<span style=\"font-size: 14px; color: #AEB8C8\">الرئيسية / من نحن</span>\n<h1 style=\"margin: 0; font-size: clamp(30px, 6vw, 46px); line-height: 1.35; font-weight: 700; color: #FFFFFF\">{{pgHero.t1}}<sc-if value=\"{{pgHero.hasT2}}\" hint-placeholder-val=\"{{false}}\"><br>{{pgHero.t2}}</sc-if></h1>\n<p style=\"margin: 0; font-size: clamp(16px, 2.5vw, 19px); line-height: 1.9; color: #D5DBE5; max-width: 660px\">{{pgHero.text}}</p>\n</div>\n</section>\n\n<section style=\"position: relative; margin-top: -56px; background: #FFFFFF; border-radius: clamp(24px, 4vw, 40px); box-shadow: 0 -24px 48px -32px rgba(11,23,41,0.6)\">\n<div style=\"max-width: 1000px; margin: 0 auto; padding: clamp(40px, 6vw, 72px) 20px; display: flex; flex-direction: column; gap: clamp(48px, 7vw, 72px)\">\n\n<div style=\"display: flex; flex-direction: column; gap: 24px\">\n<div style=\"display: flex; flex-direction: column; gap: 10px\">\n<h2 style=\"margin: 0; font-size: clamp(24px, 4.5vw, 32px); font-weight: 700\">{{T.verifyTitle}}</h2>\n<p style=\"margin: 0; font-size: 16px; line-height: 1.9; color: #3A4860\">{{T.verifyIntro}}</p>\n</div>\n<ol style=\"margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column\">\n<sc-for list=\"{{steps}}\" as=\"s\" hint-placeholder-count=\"4\">\n<li style=\"display: flex; gap: 18px; padding: 20px 0; border-top: 1px solid #F0EBDF\">\n<span style=\"flex: 0 0 44px; width: 44px; height: 44px; border-radius: 50%; border: 1.5px solid #0F1E35; display: flex; align-items: center; justify-content: center; font-size: 17px; font-weight: 700\">{{s.n}}</span>\n<div style=\"display: flex; flex-direction: column; gap: 4px\"><span style=\"font-size: 18px; font-weight: 700\">{{s.t}}</span><span style=\"font-size: 15px; line-height: 1.9; color: #2B3A52\">{{s.d}}</span></div>\n</li>\n</sc-for>\n</ol>\n<p style=\"margin: 0; font-size: 15px; line-height: 1.9; color: #2B3A52; background: #F3EEE2; border-radius: 14px; padding: 14px 18px\">{{T.badgeNote}}</p>\n</div>\n\n<div style=\"display: flex; flex-wrap: wrap; gap: 32px 48px\">\n<sc-for list=\"{{pillars}}\" as=\"p\" hint-placeholder-count=\"4\">\n<div style=\"flex: 1 1 280px; display: flex; flex-direction: column; gap: 8px\">\n<h2 style=\"margin: 0; font-size: 21px; font-weight: 700\">{{p.h}}</h2>\n<p style=\"margin: 0; font-size: 15px; line-height: 1.9; color: #2B3A52\">{{p.p}}</p>\n</div>\n</sc-for>\n</div>\n\n<div style=\"background: #FAF7F0; border-radius: 24px; padding: clamp(22px, 4vw, 34px); display: flex; flex-direction: column; gap: 14px\">\n<div style=\"display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 8px\">\n<h2 style=\"margin: 0; font-size: 21px; font-weight: 700\">{{T.operatorTitle}}</h2>\n<span style=\"font-size: 13px; color: #3A4860\">{{T.operatorNote}}</span>\n</div>\n<sc-for list=\"{{operator}}\" as=\"o\" hint-placeholder-count=\"4\">\n<div style=\"display: flex; flex-wrap: wrap; justify-content: space-between; gap: 6px 16px; padding-bottom: 12px; border-bottom: 1px solid #E3DCCB; font-size: 15px\"><span style=\"color: #3A4860\">{{o.k}}</span><span style=\"font-weight: 600\">{{o.v}}</span></div>\n</sc-for>\n</div>\n\n<div style=\"text-align: center; display: flex; flex-direction: column; align-items: center; gap: 14px\">\n<h2 style=\"margin: 0; font-size: clamp(22px, 4vw, 28px); font-weight: 700\">{{T.ctaTitle}}</h2>\n<a href=\"Contact.dc.html\" style=\"display: inline-flex; align-items: center; min-height: 54px; padding: 0 30px; border-radius: 12px; background: #C9A24D; color: #0F1E35; font-weight: 700; font-size: 16px\">{{T.ctaBtn}}</a>\n</div>\n\n</div>\n</section>\n\n</main>\n<div style=\"height: clamp(64px, 9vw, 112px)\"></div>\n<dc-import name=\"Footer\" hint-size=\"100%,460px\"></dc-import>\n</div>", "\nbody{margin:0;background:#FAF7F0}\na{color:#0F1E35;text-decoration:none}\n:focus-visible{outline:2px solid #C9A24D;outline-offset:2px}\n", function (DCLogic, React) {
"use strict";
class Component extends DCLogic {
  renderVals() {
    const cms = (() => { try { return JSON.parse(window.localStorage.getItem('mq_cms') || '{}') || {}; } catch (e) { return {}; } })();
    const pgc = cms.pages || {};
    const pgHero = { t1: pgc.about_t1 || "نجعل القانون أقرب", t2: pgc.about_t1 != null ? (pgc.about_t2 || '') : "وأوضح لكل عراقي", text: pgc.about_text || "المرجع القانوني العراقي منصة معلومات قانونية ودليل للمحامين المقيَّدين. نجمع التشريعات العراقية بمصادرها، ونصل المواطن بمحامٍ تحققنا من قيده في النقابة المختصة." };
    pgHero.hasT2 = !!pgHero.t2;
    const ab = cms.about || {};
    const T = { ...{"verifyTitle": "كيف نتحقق من المحامين؟", "verifyIntro": "يمر كل طلب انضمام بأربع مراحل، ولا يظهر ملف المحامي قبل اكتمالها. نتحقق عبر نقابة المحامين العراقيين لمحامي العراق الاتحادي، وعبر نقابة محامي كوردستان لمحامي الإقليم.", "badgeNote": "علامة «موثّق» تعني أننا تحققنا من القيد وصلاحية الهوية المهنية في تاريخ التحقق المذكور في ملف المحامي. وهي ليست تقييماً لكفاءته ولا لجودة خدمته، ولا نرتّب المحامين بالأفضلية.", "operatorTitle": "الجهة المشغّلة للمنصة", "operatorNote": "تُستكمل البيانات عند التسجيل الرسمي", "ctaTitle": "لديك سؤال عن المنصة؟", "ctaBtn": "تواصل معنا"}, ...ab };
    const R = {
      steps: [
        { n: '١', t: 'مراجعة المستندات', d: 'نراجع هوية النقابة والبطاقة الوطنية وتأييد النقابة، ونتأكد من وضوحها وتطابق بياناتها.' },
        { n: '٢', t: 'التحقق لدى النقابة المختصة', d: 'نطابق رقم القيد وصلاحية الممارسة مع النقابة المختصة، ونتأكد من عدم وجود منع من الممارسة.' },
        { n: '٣', t: 'مكالمة تحقق بالفيديو', d: 'مكالمة قصيرة يطابق فيها فريقنا وجه المحامي مع هويته الأصلية، ولا نسجّلها.' },
        { n: '٤', t: 'المتابعة الدورية', d: 'نعيد التحقق سنوياً عند تجديد الهوية المهنية، ونراجع الشكاوى، ونوقف أي ملف يخالف ميثاق المنصة.' }
      ],
      pillars: [
        { h: 'مصادر القوانين', p: 'نعتمد جريدة الوقائع العراقية مرجعاً للنصوص، ونبيّن لكل قانون حالة نفاذه ونطاق تطبيقه في العراق الاتحادي أو الإقليم.' },
        { h: 'المقالات والنماذج', p: 'تكتبها هيئة التحرير ويراجعها المستشار القانوني للمنصة قبل النشر، مع الإحالة إلى المادة التي يستند إليها كل حكم.' },
        { h: 'خصوصية بياناتك', p: 'تصل تفاصيل استشارتك إلى المحامي الذي تختاره، ولا نشارك بياناتك إلا وفق سياسة الخصوصية.' },
        { h: 'حدود الخدمة', p: 'المنصة ليست مكتب محاماة، ولا تتقاضى نسبة من أتعاب المحامين. المحتوى للمعلومات العامة ولا يغني عن استشارة محامٍ.' }
      ],
      operator: [
        { k: 'اسم الشركة', v: '[اسم الشركة المسجّلة]' },
        { k: 'رقم شهادة التأسيس', v: '[رقم التسجيل]' },
        { k: 'العنوان', v: '[العنوان]، بغداد' },
        { k: 'المستشار القانوني للمنصة', v: '[الاسم ورقم القيد]' }
      ]
    };
    return {
      pgHero, T,
      steps: (ab.steps && ab.steps.length) ? ab.steps.filter((x) => x && String(x.t || '').trim()).map((x, i) => ({ n: String(i + 1).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]), t: x.t, d: x.d })) : R.steps,
      pillars: (ab.pillars && ab.pillars.length) ? ab.pillars : R.pillars,
      operator: ((ab.operator && ab.operator.length) ? ab.operator : R.operator).filter((o) => o && String(o.k || '').trim() && String(o.v || '').trim() && !/\[[^\]]*\]/.test(String(o.v)))
    };
  }
}
return Component;
});
