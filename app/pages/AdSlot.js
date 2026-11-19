MQ_DEF("AdSlot", "<sc-if value=\"{{show}}\" hint-placeholder-val=\"{{true}}\">\n<aside class=\"ad ad-{{size}}\" aria-label=\"{{label}}\" dir=\"rtl\" style=\"font-family: 'IBM Plex Sans Arabic', system-ui, sans-serif\">\n<div class=\"ad-bar\">\n<span class=\"ad-tag\">{{label}}</span>\n<a href=\"Contact.dc.html\" onClick=\"{{advertise}}\">{{advLabel}}</a>\n</div>\n<sc-if value=\"{{isNet}}\" hint-placeholder-val=\"{{false}}\"><div class=\"ad-unit\" ref=\"{{adRef}}\"></div></sc-if>\n<sc-if value=\"{{isNetPreview}}\" hint-placeholder-val=\"{{false}}\"><div class=\"ad-box ad-net\"><strong>{{netTitle}}</strong><span>{{netSub}}</span></div></sc-if>\n<sc-if value=\"{{hasCmp}}\" hint-placeholder-val=\"{{false}}\">\n<a class=\"ad-box ad-cmp\" href=\"{{cmp.link}}\" target=\"_blank\" rel=\"sponsored noopener\" style=\"text-decoration: none\">\n<sc-if value=\"{{cmp.hasImg}}\" hint-placeholder-val=\"{{false}}\"><img class=\"ad-img-d\" src=\"{{cmp.image}}\" alt=\"{{cmp.title}}\"><img class=\"ad-img-m\" src=\"{{cmp.mImage}}\" alt=\"{{cmp.title}}\"></sc-if>\n<sc-if value=\"{{cmp.noImg}}\" hint-placeholder-val=\"{{true}}\"><span class=\"ad-txt\"><strong>{{cmp.title}}</strong><span>{{cmp.text}}</span><em>{{cmp.advertiser}}</em></span><span class=\"ad-go\">زيارة الموقع</span></sc-if>\n</a>\n</sc-if>\n<sc-if value=\"{{isHouse}}\" hint-placeholder-val=\"{{false}}\"><a class=\"ad-box\" href=\"Contact.dc.html\" onClick=\"{{advertise}}\" style=\"text-decoration: none\"><strong>{{advLabel}}</strong><span>{{houseText}}</span></a></sc-if>\n<sc-if value=\"{{isPlaceholder}}\" hint-placeholder-val=\"{{true}}\">\n<div class=\"ad-box\">\n<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#8F8778\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"></rect><path d=\"M3 15l5-4 4 3 3-2 6 4\"></path></svg>\n<strong>{{placeholder}}</strong>\n<span class=\"ad-dim-d\">{{dimD}}</span>\n<span class=\"ad-dim-m\">{{dimM}}</span>\n</div>\n</sc-if>\n</aside>\n</sc-if>", "\n.ad{display:flex;flex-direction:column;gap:8px;width:100%;margin:0 auto;box-sizing:border-box}\n.ad-bar{display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:12px;color:#3A4860}\n.ad-tag{display:inline-flex;align-items:center;gap:6px;font-weight:600;letter-spacing:0.02em}\n.ad-tag::before{content:\"\";width:6px;height:6px;border-radius:50%;background:#8F8778}\n.ad-bar a{color:#2B3A52;text-decoration:underline;text-decoration-color:#C9A24D;text-underline-offset:4px;min-height:28px;display:inline-flex;align-items:center}\n.ad-bar a:focus-visible{outline:2px solid #C9A24D;outline-offset:2px}\n.ad-box{position:relative;display:flex;align-items:center;justify-content:center;gap:12px;width:100%;margin:0 auto;box-sizing:border-box;border:1px solid #E3DCCB;border-radius:16px;overflow:hidden;color:#3A4860;background-color:#F6F2E8;background-image:repeating-linear-gradient(135deg,rgba(15,30,53,0.035) 0 1px,transparent 1px 14px)}\n.ad-box strong{font-size:14px;font-weight:600;color:#2B3A52}\n.ad-box span{font-size:13px}\n.ad-dim-m{display:none}\n.ad-cmp{background:#FFFFFF !important;background-image:none !important;color:#0F1E35;justify-content:space-between;padding:0 22px;text-align:start}\n.ad-cmp:hover{border-color:#8F8778}\n.ad-cmp:focus-visible{outline:2px solid #C9A24D;outline-offset:2px}\n.ad-txt{display:flex;flex-direction:column;gap:2px;min-width:0}\n.ad-txt strong{font-size:15px;color:#0F1E35}\n.ad-txt span{font-size:13px;color:#3A4860}\n.ad-txt em{font-style:normal;font-size:12px;color:#3A4860}\n.ad-go{flex:0 0 auto;font-size:13px;font-weight:600;padding:8px 14px;border:1px solid #0F1E35;border-radius:10px}\n.ad-img-d,.ad-img-m{width:100%;height:100%;object-fit:cover}\n.ad-img-m{display:none}\n.ad-mpu .ad-cmp{flex-direction:column;justify-content:center;text-align:center;padding:18px}\n.ad-leader{max-width:970px}.ad-leader .ad-box{height:90px}\n.ad-inline{max-width:728px}.ad-inline .ad-box{height:90px}\n.ad-infeed .ad-box{height:120px}\n.ad-mpu{max-width:300px}.ad-mpu .ad-box{height:250px;flex-direction:column}\n.ad-unit{display:block;width:100%;min-height:90px;overflow:hidden;text-align:center}\n.ad-mpu .ad-unit{min-height:250px}.ad-infeed .ad-unit{min-height:120px}\n.ad-unit ins.adsbygoogle{display:block}\n.ad-net{background:#FFFFFF !important;flex-direction:column;gap:4px;text-align:center;padding:12px}\n.ad:has(ins.adsbygoogle[data-ad-status=\"unfilled\"]){display:none}\n@media (max-width:760px){\n.ad-leader .ad-unit,.ad-inline .ad-unit{min-height:100px}.ad-infeed .ad-unit{min-height:250px}\n.ad-leader,.ad-inline{max-width:320px}\n.ad-leader .ad-box,.ad-inline .ad-box{height:100px;flex-direction:column;gap:4px}\n.ad-infeed{max-width:300px}.ad-infeed .ad-box{height:250px;flex-direction:column}\n.ad-dim-d{display:none}.ad-dim-m{display:inline}\n.ad-img-d{display:none}.ad-img-m{display:block}\n.ad-cmp{flex-direction:column;justify-content:center;text-align:center;padding:14px}\n}\n", function (DCLogic, React) {
"use strict";
class Component extends DCLogic {
  // يُدرج وحدة AdSense أو كود الشبكة مرة واحدة في الحاوية، خارج ما يرسمه React
  mountAd(el) {
    const cfg = this.adCfg;
    if (!el || !cfg || el.getAttribute('data-mq-ad')) return;
    el.setAttribute('data-mq-ad', cfg.type);
    const first = document.querySelector('script[nonce]');
    const nonce = first ? (first.nonce || first.getAttribute('nonce') || '') : '';
    try {
      if (cfg.type === 'adsense') {
        const w = window;
        w.adsbygoogle = w.adsbygoogle || [];
        if (cfg.npa) w.adsbygoogle.requestNonPersonalizedAds = 1;
        if (!document.querySelector('script[src*="pagead/js/adsbygoogle.js"]')) {
          const sc = document.createElement('script');
          sc.async = true; sc.crossOrigin = 'anonymous';
          sc.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + encodeURIComponent(cfg.client);
          if (nonce) sc.nonce = nonce;
          document.head.appendChild(sc);
        }
        const ins = document.createElement('ins');
        ins.className = 'adsbygoogle';
        ins.setAttribute('data-ad-client', cfg.client);
        ins.setAttribute('data-ad-slot', cfg.unit);
        if (cfg.format === 'fixed') { ins.style.display = 'inline-block'; ins.style.width = cfg.w + 'px'; ins.style.height = cfg.h + 'px'; }
        else {
          ins.style.display = 'block';
          if (cfg.format === 'in-article') { ins.style.textAlign = 'center'; ins.setAttribute('data-ad-layout', 'in-article'); ins.setAttribute('data-ad-format', 'fluid'); }
          else if (cfg.format === 'in-feed') { ins.setAttribute('data-ad-format', 'fluid'); if (cfg.layoutKey) ins.setAttribute('data-ad-layout-key', cfg.layoutKey); }
          else { ins.setAttribute('data-ad-format', cfg.format || 'auto'); ins.setAttribute('data-full-width-responsive', 'true'); }
        }
        if (cfg.test) ins.setAttribute('data-adtest', 'on');
        el.appendChild(ins);
        w.adsbygoogle.push({});
      } else if (cfg.type === 'code') {
        const box = document.createElement('div');
        box.innerHTML = cfg.code;
        while (box.firstChild) el.appendChild(box.firstChild);
        // السكربتات المضافة عبر innerHTML لا تعمل؛ تُعاد كتابتها لتعمل، مع nonce سياسة الأمان
        Array.prototype.forEach.call(el.querySelectorAll('script'), (old) => {
          const sc = document.createElement('script');
          Array.prototype.forEach.call(old.attributes, (a) => sc.setAttribute(a.name, a.value));
          if (nonce) sc.nonce = nonce;
          sc.text = old.textContent;
          old.parentNode.replaceChild(sc, old);
        });
      }
    } catch (e) { /* لا يُوقف خطأ شبكة الإعلانات عرض الصفحة */ }
  }
  renderVals() {
    const size = ['leader', 'inline', 'infeed', 'mpu'].includes(this.props.size) ? this.props.size : 'leader';
    const cms = (() => { try { return JSON.parse(window.localStorage.getItem('mq_cms') || '{}') || {}; } catch (e) { return {}; } })();
    const mergeL = (seed, c, idk) => { idk = idk || 'id'; c = c || {}; const up = c.upsert || {}; const rm = new Set(c.removed || []); const out = (seed || []).filter((r) => !rm.has(r[idk])).map((r) => (up[r[idk]] ? { ...r, ...up[r[idk]] } : r)); Object.keys(up).forEach((id) => { if (!rm.has(id) && !(seed || []).some((r) => r[idk] === id)) out.push(up[id]); }); return out; };
    const isPub = (r) => (r.state || 'published') === 'published';
    const SLOTS = [{"id": "home-leader", "page": "الرئيسية: قبل التذييل", "size": "leader", "enabled": true, "campaign": "", "fallback": "hide", "network": "direct"}, {"id": "laws-list", "page": "مكتبة القوانين: أسفل القائمة", "size": "leader", "enabled": true, "campaign": "", "fallback": "hide", "network": "direct"}, {"id": "law-inline", "page": "قراءة القانون: بعد المادة الخامسة", "size": "inline", "enabled": true, "campaign": "", "fallback": "hide", "network": "direct"}, {"id": "law-inline-2", "page": "قراءة القانون: بعد المادة الخامسة والعشرين", "size": "inline", "enabled": true, "campaign": "", "fallback": "hide", "network": "direct"}, {"id": "articles-leader", "page": "المقالات: تحت المقال المميّز", "size": "leader", "enabled": true, "campaign": "cmp-1", "fallback": "placeholder", "network": "direct"}, {"id": "articles-infeed", "page": "المقالات: بين البطاقات", "size": "infeed", "enabled": true, "campaign": "", "fallback": "placeholder", "network": "direct"}, {"id": "articles-mpu", "page": "المقالات: العمود الجانبي", "size": "mpu", "enabled": true, "campaign": "cmp-2", "fallback": "placeholder", "network": "direct"}, {"id": "article-inline", "page": "قراءة المقال: بعد القسم الثاني", "size": "inline", "enabled": true, "campaign": "", "fallback": "placeholder", "network": "direct"}, {"id": "article-mpu", "page": "قراءة المقال: بجانب الفهرس", "size": "mpu", "enabled": true, "campaign": "", "fallback": "placeholder", "network": "direct"}, {"id": "forms-mpu", "page": "النماذج: أسفل اللوحة الجانبية", "size": "mpu", "enabled": true, "campaign": "", "fallback": "hide", "network": "direct"}, {"id": "search-inline", "page": "البحث: أسفل النتائج", "size": "inline", "enabled": true, "campaign": "", "fallback": "hide", "network": "direct"}, {"id": "calc-leader", "page": "الحاسبة: أسفل الحاسبة", "size": "leader", "enabled": true, "campaign": "", "fallback": "hide", "network": "direct"}];
    const CMPS = [{"id": "cmp-1", "advertiser": "دار الرافدين للنشر القانوني", "title": "المجموعة التشريعية العراقية – طبعة ٢٠٢٦", "text": "كل القوانين النافذة في مجلدات مفهرسة.", "category": "publishing", "image": "", "mobileImage": "", "link": "https://example.com/books", "start": "2026-11-01", "end": "2026-12-31", "status": "active", "priority": 1, "cap": 3}, {"id": "cmp-2", "advertiser": "معهد بغداد للتدريب المهني", "title": "دورة صياغة العقود التجارية", "text": "تبدأ في كانون الأول، بشهادة معتمدة.", "category": "education", "image": "", "mobileImage": "", "link": "https://example.com/course", "start": "2026-11-05", "end": "2026-11-20", "status": "active", "priority": 2, "cap": 2}, {"id": "cmp-3", "advertiser": "شركة حلول الأرشفة", "title": "أرشفة إلكترونية للمكاتب والشركات", "text": "", "category": "tech", "image": "", "mobileImage": "", "link": "https://example.com/archive", "start": "2026-12-01", "end": "2027-01-31", "status": "paused", "priority": 3, "cap": 3}];
    const pol = { label: 'إعلان', advertiseLabel: 'أعلن معنا', placeholder: 'مساحة إعلانية', ...(cms.adPolicy || {}) };
    const slotId = this.props.place || '';
    const slot = mergeL(SLOTS, cms.adSlots).find((x) => x.id === slotId) || { enabled: true, campaign: '', fallback: 'placeholder' };
    const today = new Date().toISOString().slice(0, 10);
    const ban = { lawyer: pol.banLawyers !== false, political: pol.banPolitical !== false, gambling: pol.banGambling !== false, health: pol.banHealthClaims !== false };
    // شبكات الإعلان: Google AdSense أو كود شبكة أخرى (يعملان في الموقع المنشور فقط، لا في لوحة التحكم ولا في المعاينة)
    const net = ['adsense', 'code'].includes(slot.network) ? slot.network : 'direct';
    const live = !!(window.MQ && window.MQ.live);
    const inAdmin = /^\/admin(\/|$)/.test(window.location.pathname || '') || /^#admin/.test(window.location.hash || '');
    const cm = /^(?:ca-)?(pub-\d{10,20})$/.exec(String(pol.adsenseClient || '').trim());
    const client = cm ? 'ca-' + cm[1] : '';
    const unit = String(slot.adUnit || '').replace(/[^0-9]/g, '');
    const fixedDims = { leader: [728, 90], inline: [728, 90], infeed: [300, 250], mpu: [300, 250] };
    const netReady = net === 'adsense' ? !!(pol.adsenseOn && client && unit) : net === 'code' ? !!String(slot.code || '').trim() : false;
    const runNet = netReady && live && !inAdmin;
    this.adCfg = runNet ? (net === 'adsense'
      ? { type: 'adsense', client, unit, format: slot.adFormat || 'auto', layoutKey: String(slot.layoutKey || '').trim(), test: !!pol.adTest, npa: !!pol.npa, w: fixedDims[size][0], h: fixedDims[size][1] }
      : { type: 'code', code: String(slot.code || '') }) : null;
    const c = net === 'direct' && slot.campaign ? mergeL(CMPS, cms.campaigns).find((x) => x.id === slot.campaign && x.status === 'active' && !ban[x.category] && (!x.start || x.start <= today) && (!x.end || x.end >= today)) : null;
    const fb = slot.fallback || 'placeholder';
    const hasImg = !!(c && /^(https?:|\/|data:)/.test(c.image || ''));
    const dims = {
      leader: ['٩٧٠ × ٩٠ بكسل', '٣٢٠ × ١٠٠ بكسل'],
      inline: ['٧٢٨ × ٩٠ بكسل', '٣٢٠ × ١٠٠ بكسل'],
      infeed: ['عرض كامل × ١٢٠ بكسل', '٣٠٠ × ٢٥٠ بكسل'],
      mpu: ['٣٠٠ × ٢٥٠ بكسل', '٣٠٠ × ٢٥٠ بكسل']
    };
    return {
      size, dimD: dims[size][0], dimM: dims[size][1],
      isNet: runNet, isNetPreview: netReady && !runNet, adRef: (el) => this.mountAd(el),
      netTitle: net === 'adsense' ? 'Google AdSense · وحدة ' + unit : 'كود شبكة إعلانية مخصص',
      netSub: inAdmin ? 'معاينة: يظهر الإعلان الحقيقي في الموقع المنشور' : 'يظهر الإعلان الحقيقي بعد النشر على الخادم',
      show: slot.enabled !== false && (netReady || !(!c && fb === 'hide')), label: String(pol.label || '').trim() || 'إعلان', advLabel: pol.advertiseLabel || 'أعلن معنا', placeholder: pol.placeholder || 'مساحة إعلانية', houseText: pol.houseText || 'ضع إعلانك هنا أمام قرّاء المحتوى القانوني',
      hasCmp: !netReady && !!c, isHouse: !netReady && !c && fb === 'house', isPlaceholder: !netReady && !c && fb !== 'house',
      cmp: c ? { link: c.link, title: c.title, text: c.text || '', advertiser: c.advertiser, image: c.image, mImage: c.mobileImage || c.image, hasImg, noImg: !hasImg } : { link: '', title: '', text: '', advertiser: '', image: '', mImage: '', hasImg: false, noImg: true },
      advertise: () => { try { window.localStorage.setItem('mq_contactTopic', 'ads'); } catch (e) {} }
    };
  }
}
return Component;
});
