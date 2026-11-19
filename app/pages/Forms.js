MQ_DEF("Forms", "<div dir=\"rtl\" style=\"font-family: 'IBM Plex Sans Arabic', system-ui, sans-serif; color: #0F1E35; background: #FAF7F0; min-height: 100vh\">\n<dc-import name=\"Header\" active=\"services\" hint-size=\"100%,81px\"></dc-import>\n<main id=\"main\" ref=\"{{topRef}}\" tabindex=\"-1\" style=\"outline: none\">\n\n<sc-if value=\"{{showList}}\" hint-placeholder-val=\"{{true}}\">\n<section style=\"background: #0F1E35\">\n<div style=\"max-width: 1240px; margin: 0 auto; padding: clamp(40px, 6vw, 64px) 20px clamp(96px, 10vw, 120px); display: flex; flex-direction: column; gap: 14px\">\n<span style=\"font-size: 14px; color: #AEB8C8\"><a href=\"Services.dc.html\" style=\"color: #AEB8C8\">الخدمات</a> / النماذج القانونية</span>\n<h1 style=\"margin: 0; font-size: clamp(28px, 5.5vw, 44px); font-weight: 700; color: #FFFFFF\">{{pgHero.t1}}<sc-if value=\"{{pgHero.hasT2}}\" hint-placeholder-val=\"{{false}}\"><br>{{pgHero.t2}}</sc-if></h1>\n<p style=\"margin: 0; font-size: clamp(16px, 2.4vw, 18px); line-height: 1.8; color: #D5DBE5; max-width: 620px\">{{pgHero.text}}</p>\n<form role=\"search\" onSubmit=\"{{noSubmit}}\" class=\"fw\" style=\"margin-top: 10px; display: flex; align-items: center; gap: 10px; height: 56px; padding: 0 16px; background: #FFFFFF; border-radius: 16px; max-width: 560px; box-sizing: border-box\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#3A4860\" stroke-width=\"1.8\" stroke-linecap=\"round\" aria-hidden=\"true\"><circle cx=\"11\" cy=\"11\" r=\"7\"></circle><path d=\"M20 20l-3.5-3.5\"></path></svg>\n<label for=\"fm-q\" style=\"position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)\">ابحث عن نموذج</label>\n<input id=\"fm-q\" type=\"search\" value=\"{{q}}\" onChange=\"{{onQ}}\" placeholder=\"ابحث عن نموذج، مثل: إيجار\" style=\"flex: 1; min-width: 0; border: none; outline: none; background: transparent; font: inherit; font-size: 16px; color: #0F1E35\">\n</form>\n</div>\n</section>\n\n<section style=\"position: relative; margin-top: -56px; background: #FFFFFF; border-radius: clamp(24px, 4vw, 40px); box-shadow: 0 -24px 48px -32px rgba(11,23,41,0.6)\">\n<div style=\"max-width: 1240px; margin: 0 auto; padding: clamp(32px, 5vw, 48px) 20px clamp(48px, 7vw, 80px)\">\n<div role=\"group\" aria-label=\"تصنيف النماذج\" style=\"display: flex; flex-wrap: nowrap; overflow-x: auto; gap: 8px; padding-bottom: 4px; margin-bottom: 24px\">\n<sc-for list=\"{{cats}}\" as=\"c\" hint-placeholder-count=\"6\">\n<button type=\"button\" aria-pressed=\"{{c.on}}\" onClick=\"{{c.pick}}\" style=\"flex: 0 0 auto; min-height: 44px; padding: 0 18px; border-radius: 999px; border: 1px solid {{c.border}}; background: {{c.bg}}; color: {{c.fg}}; font: inherit; font-size: 15px; font-weight: 500; cursor: pointer; white-space: nowrap\">{{c.label}}</button>\n</sc-for>\n</div>\n<p role=\"status\" style=\"margin: 0 0 18px; font-size: 14px; color: #3A4860\">{{countLabel}}</p>\n<div class=\"fm-grid\">\n<sc-for list=\"{{forms}}\" as=\"f\" hint-placeholder-count=\"6\">\n<a class=\"card\" href=\"{{f.href}}\" data-soft=\"1\" onClick=\"{{f.open}}\" style=\"display: flex; flex-direction: column; gap: 12px; padding: 22px; border: 1px solid #E3DCCB; border-radius: 20px; background: #FFFFFF; color: #0F1E35\">\n<div style=\"display: flex; align-items: center; justify-content: space-between; gap: 12px\">\n<span style=\"width: 46px; height: 46px; border-radius: 14px; background: #F3EEE2; display: flex; align-items: center; justify-content: center\">\n<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#0F1E35\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h4\"></path></svg>\n</span>\n<span style=\"font-size: 12px; color: #2B3A52; background: #F3EEE2; padding: 4px 12px; border-radius: 999px\">{{f.catLabel}}</span>\n</div>\n<h2 style=\"margin: 0; font-size: 18px; font-weight: 700; line-height: 1.6\">{{f.title}}</h2>\n<p style=\"margin: 0; font-size: 14px; line-height: 1.8; color: #3A4860; flex: 1\">{{f.desc}}</p>\n<span style=\"font-size: 13px; color: #3A4860\">{{f.need}}</span>\n<span style=\"padding-top: 12px; border-top: 1px solid #F0EBDF; font-size: 14px; font-weight: 600\">معاينة النموذج ←</span>\n</a>\n</sc-for>\n</div>\n<sc-if value=\"{{empty}}\" hint-placeholder-val=\"{{false}}\">\n<p style=\"margin: 0; padding: 48px 0; text-align: center; color: #3A4860; font-size: 16px\">لا توجد نماذج مطابقة لبحثك.</p>\n</sc-if>\n</div>\n</section>\n</sc-if>\n\n<sc-if value=\"{{showForm}}\" hint-placeholder-val=\"{{false}}\">\n<section style=\"background: #0F1E35\">\n<div style=\"max-width: 1240px; margin: 0 auto; padding: 24px 20px clamp(96px, 10vw, 112px); display: flex; flex-direction: column; gap: 14px\">\n<button type=\"button\" onClick=\"{{back}}\" style=\"align-self: flex-start; display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 16px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.3); background: transparent; color: #E6EAF0; font: inherit; font-size: 14px; cursor: pointer\">\n<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#E6EAF0\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M9 6l6 6-6 6\"></path></svg>العودة إلى النماذج</button>\n<span style=\"margin-top: 12px; font-size: 14px; color: #AEB8C8\">النماذج القانونية / {{sel.catLabel}}</span>\n<h1 ref=\"{{titleRef}}\" tabindex=\"-1\" style=\"margin: 0; font-size: clamp(26px, 5vw, 40px); font-weight: 700; color: #FFFFFF; outline: none\">{{sel.title}}</h1>\n</div>\n</section>\n\n<section style=\"max-width: 1240px; margin: -56px auto 0; padding: 0 20px; position: relative; display: flex; flex-wrap: wrap; gap: 24px; align-items: flex-start; box-sizing: border-box\">\n<div style=\"flex: 999 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 18px\">\n<div role=\"note\" style=\"display: flex; gap: 12px; padding: 18px 20px; border-radius: 18px; background: #FFFFFF; border: 1.5px solid #C9A24D; box-shadow: 0 24px 48px -32px rgba(15,30,53,0.35)\">\n<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#0F1E35\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"flex: 0 0 22px; margin-top: 3px\"><path d=\"M12 3l9 16H3z\"></path><path d=\"M12 10v4M12 17h.01\"></path></svg>\n<div style=\"display: flex; flex-direction: column; gap: 4px\"><span style=\"font-size: 16px; font-weight: 700\">قبل أن تستخدم هذا النموذج</span><span style=\"font-size: 15px; line-height: 1.9; color: #2B3A52\">{{sel.warn}}</span><span style=\"font-size: 13px; color: #3A4860\">{{sel.basis}}</span></div>\n</div>\n<sc-if value=\"{{isTpl}}\" hint-placeholder-val=\"{{false}}\">\n<article class=\"paper\" aria-label=\"{{tpl.title}}: معاينة الورقة\">\n<span class=\"pp-edge\" aria-hidden=\"true\"></span>\n<h2>{{tpl.top}}</h2>\n<h3>{{tpl.title}}</h3>\n<sc-for list=\"{{tpl.lines}}\" as=\"ln\" hint-placeholder-count=\"8\">\n<sc-if value=\"{{ln.isHr}}\" hint-placeholder-val=\"{{false}}\"><hr class=\"pp-hr\"></sc-if>\n<sc-if value=\"{{ln.isLine}}\" hint-placeholder-val=\"{{true}}\"><p class=\"pp-l {{ln.cls}}\"><sc-if value=\"{{ln.isNum}}\" hint-placeholder-val=\"{{false}}\"><b class=\"pp-n\">{{ln.num}}</b></sc-if><sc-for list=\"{{ln.segs}}\" as=\"sg\" hint-placeholder-count=\"3\"><sc-if value=\"{{sg.isT}}\" hint-placeholder-val=\"{{true}}\"><span>{{sg.t}}</span></sc-if><sc-if value=\"{{sg.isB}}\" hint-placeholder-val=\"{{false}}\"><b class=\"pp-hd\">{{sg.t}}</b></sc-if><sc-if value=\"{{sg.isV}}\" hint-placeholder-val=\"{{false}}\"><span class=\"pp-v {{sg.on}}\" onClick=\"{{sg.go}}\">{{sg.val}}</span></sc-if><sc-if value=\"{{sg.isD}}\" hint-placeholder-val=\"{{false}}\"><span class=\"pp-d {{sg.on}}\" style=\"width: {{sg.w}}ch\" onClick=\"{{sg.go}}\" aria-label=\"{{sg.lab}}: فارغ\"></span></sc-if><sc-if value=\"{{sg.isC}}\" hint-placeholder-val=\"{{false}}\"><span onClick=\"{{sg.go}}\" style=\"cursor: pointer\"><sc-for list=\"{{sg.opts}}\" as=\"o\" hint-placeholder-count=\"3\"><span class=\"pp-o {{o.cls}}\">{{o.l}}</span><span>{{o.sep}}</span></sc-for></span></sc-if></sc-for></p></sc-if>\n</sc-for>\n<div class=\"pp-signs\">\n<sc-for list=\"{{tpl.signs}}\" as=\"sn\" hint-placeholder-count=\"4\">\n<div><b class=\"pp-hd\">{{sn.role}}</b><sc-for list=\"{{sn.rows}}\" as=\"sg\" hint-placeholder-count=\"2\"><p class=\"pp-l\"><span>{{sg.t}}</span><sc-if value=\"{{sg.isV}}\" hint-placeholder-val=\"{{false}}\"><span class=\"pp-v {{sg.on}}\" onClick=\"{{sg.go}}\">{{sg.val}}</span></sc-if><sc-if value=\"{{sg.isD}}\" hint-placeholder-val=\"{{true}}\"><span class=\"pp-d {{sg.on}}\" style=\"width: {{sg.w}}ch\" onClick=\"{{sg.go}}\"></span></sc-if></p></sc-for></div>\n</sc-for>\n</div>\n</article>\n<div style=\"display: flex; flex-direction: column; gap: 8px; padding: 18px 20px; border-radius: 18px; background: #FFFFFF\">\n<h2 style=\"margin: 0; font-size: 18px; font-weight: 700\">عن هذا النموذج</h2>\n<p style=\"margin: 0; font-size: 14px; line-height: 1.9; color: #2B3A52\">{{sel.desc}}</p>\n<span style=\"font-size: 13px; line-height: 1.8; color: #3A4860\">البيانات التي تكتبها تبقى في هذه الصفحة فقط ولا تُرسل إلى الخادم ولا تُحفظ؛ تُمسح عند إغلاق الصفحة.</span>\n</div>\n</sc-if>\n<sc-if value=\"{{noTpl}}\" hint-placeholder-val=\"{{true}}\">\n<div style=\"background: #FFFFFF; border-radius: clamp(20px, 3vw, 28px); padding: clamp(14px, 3vw, 24px)\">\n<div style=\"background: #FCFBF8; border: 1px solid #E3DCCB; border-radius: 12px; padding: clamp(22px, 5vw, 52px) clamp(18px, 5vw, 60px); display: flex; flex-direction: column; gap: 16px; font-size: 15px; line-height: 2.1; color: #2B3A52\">\n<div style=\"text-align: center; display: flex; flex-direction: column; gap: 4px; padding-bottom: 14px; border-bottom: 1px solid #E3DCCB\">\n<span style=\"font-size: 13px; color: #3A4860\">{{sel.topLine}}</span>\n<span style=\"font-size: clamp(19px, 3.5vw, 23px); font-weight: 700; color: #0F1E35\">{{sel.docTitle}}</span>\n</div>\n<p style=\"margin: 0\">{{sel.opening}}</p>\n<sc-for list=\"{{sel.fields}}\" as=\"x\" hint-placeholder-count=\"4\">\n<div style=\"display: flex; flex-wrap: wrap; gap: 4px 12px\"><span style=\"font-weight: 600; color: #0F1E35\">{{x}}:</span><span style=\"flex: 1; min-width: 140px; border-bottom: 1px dashed #8F8778\"></span></div>\n</sc-for>\n<sc-for list=\"{{sel.clauses}}\" as=\"c\" hint-placeholder-count=\"3\">\n<p style=\"margin: 0\"><span style=\"font-weight: 700; color: #0F1E35\">{{c.n}}</span> {{c.text}}</p>\n</sc-for>\n<div style=\"display: flex; flex-wrap: wrap; justify-content: space-between; gap: 24px; margin-top: 20px\">\n<sc-for list=\"{{sel.signs}}\" as=\"s\" hint-placeholder-count=\"2\">\n<div style=\"flex: 1 1 160px; display: flex; flex-direction: column; gap: 22px; text-align: center\"><span style=\"font-weight: 600; color: #0F1E35\">{{s}}</span><span style=\"border-bottom: 1px solid #8F8778\"></span><span style=\"font-size: 13px; color: #3A4860\">الاسم والتوقيع</span></div>\n</sc-for>\n</div>\n</div>\n</div>\n</sc-if>\n</div>\n\n<sc-if value=\"{{isTpl}}\" hint-placeholder-val=\"{{false}}\">\n<aside class=\"fill-side\" aria-label=\"تعبئة النموذج\" style=\"flex: 1 1 340px; min-width: 0; background: #FFFFFF; border-radius: clamp(20px, 3vw, 28px); padding: 22px; display: flex; flex-direction: column; gap: 16px; box-shadow: 0 24px 48px -32px rgba(15,30,53,0.35); box-sizing: border-box\">\n<div style=\"display: flex; flex-direction: column; gap: 8px\"><h2 style=\"margin: 0; font-size: 18px; font-weight: 700\">املأ البيانات</h2><span style=\"font-size: 13px; line-height: 1.8; color: #3A4860\">يظهر كل ما تكتبه في مكانه على الورقة مباشرة. اضغط أي فراغ في الورقة للانتقال إلى حقله، واترك ما تريد كتابته بخط اليد فارغاً.</span><div class=\"fill-p\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"{{tpl.total}}\" aria-valuenow=\"{{tpl.done}}\" aria-label=\"{{tpl.progress}}\"><span style=\"width: {{tpl.pct}}%\"></span></div><span style=\"font-size: 13px; color: #3A4860\">{{tpl.progress}}</span></div>\n<div class=\"fill\">\n<sc-for list=\"{{tpl.groups}}\" as=\"g\" hint-placeholder-count=\"4\">\n<fieldset class=\"fill-g\" style=\"margin: 0; padding-inline: 0; padding-bottom: 0; border-inline: 0; border-bottom: 0; min-width: 0\"><legend style=\"padding: 0; font-size: 15px; font-weight: 700; color: #0F1E35\">{{g.h}}</legend>\n<sc-for list=\"{{g.fields}}\" as=\"f\" hint-placeholder-count=\"3\"><div class=\"fill-f\">\n<label for=\"{{f.id}}\">{{f.label}}</label>\n<sc-if value=\"{{f.isIn}}\" hint-placeholder-val=\"{{true}}\"><input id=\"{{f.id}}\" type=\"{{f.type}}\" inputmode=\"{{f.mode}}\" dir=\"{{f.dir}}\" value=\"{{f.value}}\" placeholder=\"{{f.ph}}\" onChange=\"{{f.onChange}}\" onFocus=\"{{f.onFocus}}\" onBlur=\"{{f.onBlur}}\" autocomplete=\"off\" aria-describedby=\"{{f.wid}}\"></sc-if>\n<sc-if value=\"{{f.isSel}}\" hint-placeholder-val=\"{{false}}\"><select id=\"{{f.id}}\" value=\"{{f.value}}\" onChange=\"{{f.onChange}}\" onFocus=\"{{f.onFocus}}\" onBlur=\"{{f.onBlur}}\"><sc-for list=\"{{f.opts}}\" as=\"o\" hint-placeholder-count=\"3\"><option value=\"{{o.v}}\">{{o.l}}</option></sc-for></select></sc-if>\n<sc-if value=\"{{f.isArea}}\" hint-placeholder-val=\"{{false}}\"><textarea id=\"{{f.id}}\" rows=\"3\" value=\"{{f.value}}\" placeholder=\"{{f.ph}}\" onChange=\"{{f.onChange}}\" onFocus=\"{{f.onFocus}}\" onBlur=\"{{f.onBlur}}\"></textarea></sc-if>\n<sc-if value=\"{{f.hasWarn}}\" hint-placeholder-val=\"{{false}}\"><span id=\"{{f.wid}}\" class=\"fill-w\">{{f.warn}}</span></sc-if>\n</div></sc-for>\n</fieldset>\n</sc-for>\n</div>\n<div style=\"display: flex; flex-direction: column; gap: 10px\">\n<button type=\"button\" class=\"side-actions\" onClick=\"{{print}}\" style=\"min-height: 52px; border: none; border-radius: 14px; background: #C9A24D; color: #0F1E35; font: inherit; font-size: 16px; font-weight: 700; cursor: pointer\">طباعة العقد أو حفظه PDF</button>\n<button type=\"button\" class=\"m-only\" onClick=\"{{tpl.toPaper}}\" style=\"min-height: 46px; border: none; border-radius: 14px; background: #0F1E35; color: #FFFFFF; font: inherit; font-size: 15px; font-weight: 700; cursor: pointer\">معاينة العقد بعد التعبئة</button>\n<button type=\"button\" onClick=\"{{tpl.clear}}\" style=\"min-height: 46px; border: 1px solid #8F8778; border-radius: 14px; background: #FFFFFF; color: #0F1E35; font: inherit; font-size: 15px; cursor: pointer\">{{tpl.clearLabel}}</button>\n</div>\n<sc-if value=\"{{hasNotice}}\" hint-placeholder-val=\"{{false}}\"><p role=\"status\" style=\"margin: 0; font-size: 13px; line-height: 1.8; color: #2B3A52; background: #F3EEE2; border-radius: 12px; padding: 12px 14px\">{{notice}}</p></sc-if>\n<span style=\"font-size: 13px; line-height: 1.8; color: #3A4860\">{{sel.versionLine}} · {{sel.basis}}</span>\n<p style=\"margin: 0; font-size: 13px; line-height: 1.8; color: #3A4860\">لمراجعة الصياغة حسب حالتك <a href=\"Lawyers.dc.html\" style=\"color: #0F1E35; font-weight: 700; text-decoration: underline; text-decoration-color: #C9A24D; text-underline-offset: 5px\">استشر محامياً</a>.</p>\n</aside>\n</sc-if>\n<sc-if value=\"{{noTpl}}\" hint-placeholder-val=\"{{true}}\">\n<aside style=\"flex: 1 1 280px; min-width: 0; background: #FFFFFF; border-radius: clamp(20px, 3vw, 28px); padding: 24px; display: flex; flex-direction: column; gap: 14px; box-shadow: 0 24px 48px -32px rgba(15,30,53,0.35)\">\n<h2 style=\"margin: 0; font-size: 18px; font-weight: 700\">عن هذا النموذج</h2>\n<p style=\"margin: 0; font-size: 14px; line-height: 1.9; color: #2B3A52\">{{sel.desc}}</p>\n<div style=\"display: flex; flex-direction: column; gap: 10px; font-size: 14px; padding: 12px 0; border-top: 1px solid #F0EBDF; border-bottom: 1px solid #F0EBDF\">\n<div style=\"display: flex; justify-content: space-between; gap: 12px\"><span style=\"color: #3A4860\">النوع</span><span style=\"font-weight: 600\">{{sel.kindLabel}}</span></div>\n<div style=\"display: flex; justify-content: space-between; gap: 12px\"><span style=\"color: #3A4860\">يحتاج</span><span style=\"font-weight: 600; text-align: end\">{{sel.need}}</span></div>\n</div>\n<div class=\"side-actions\" style=\"display: flex; flex-direction: column; gap: 10px\">\n<button type=\"button\" onClick=\"{{print}}\" style=\"min-height: 52px; border: none; border-radius: 14px; background: #C9A24D; color: #0F1E35; font: inherit; font-size: 16px; font-weight: 700; cursor: pointer\">طباعة المسودة</button>\n<button type=\"button\" onClick=\"{{download}}\" style=\"min-height: 48px; border: 1px solid #8F8778; border-radius: 14px; background: #FFFFFF; color: #0F1E35; font: inherit; font-size: 15px; cursor: pointer\">تنزيل PDF أو Word</button>\n</div>\n<span style=\"font-size: 13px; line-height: 1.8; color: #3A4860\">{{sel.versionLine}}</span>\n<sc-if value=\"{{hasDisclaimer}}\" hint-placeholder-val=\"{{true}}\"><span style=\"font-size: 13px; line-height: 1.8; color: #3A4860\">{{formsDisclaimer}}</span></sc-if>\n<sc-if value=\"{{hasNotice}}\" hint-placeholder-val=\"{{false}}\">\n<p role=\"status\" style=\"margin: 0; font-size: 13px; line-height: 1.8; color: #2B3A52; background: #F3EEE2; border-radius: 12px; padding: 12px 14px\">{{notice}}</p>\n</sc-if>\n<p style=\"margin: 0; font-size: 13px; line-height: 1.8; color: #3A4860\">لمراجعة الصياغة حسب حالتك <a href=\"Lawyers.dc.html\" style=\"color: #0F1E35; font-weight: 700; text-decoration: underline; text-decoration-color: #C9A24D; text-underline-offset: 5px\">استشر محامياً</a>.</p>\n<div style=\"padding-top: 18px; border-top: 1px solid #F0EBDF\"><dc-import name=\"AdSlot\" size=\"mpu\" place=\"forms-mpu\" hint-size=\"100%,290px\"></dc-import></div>\n</aside>\n</sc-if>\n</section>\n<div class=\"mbar\" style=\"position: sticky; bottom: 0; z-index: 4; margin-top: 20px; padding: 12px 20px calc(12px + env(safe-area-inset-bottom)); background: rgba(255,255,255,0.97); box-shadow: 0 -8px 24px -16px rgba(15,30,53,0.4); gap: 10px\">\n<button type=\"button\" onClick=\"{{download}}\" style=\"flex: 1; min-height: 48px; border: 1px solid #8F8778; border-radius: 12px; background: #FFFFFF; color: #0F1E35; font: inherit; font-size: 15px; cursor: pointer\">تنزيل</button>\n<button type=\"button\" onClick=\"{{print}}\" style=\"flex: 1; min-height: 48px; border: none; border-radius: 12px; background: #C9A24D; color: #0F1E35; font: inherit; font-size: 15px; font-weight: 700; cursor: pointer\">طباعة</button>\n</div>\n</sc-if>\n\n</main>\n<div style=\"height: clamp(64px, 9vw, 112px)\"></div>\n<dc-import name=\"Footer\" hint-size=\"100%,460px\"></dc-import>\n</div>", "\nbody{margin:0;background:#FAF7F0}\na{color:#0F1E35;text-decoration:none}\n:focus-visible{outline:2px solid #C9A24D;outline-offset:2px}\n.fw:focus-within{outline:2px solid #C9A24D;outline-offset:2px}\n.fm-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}\n@media (max-width:1000px){.fm-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}\n@media (max-width:640px){.fm-grid{grid-template-columns:minmax(0,1fr)}}\n.card:hover{box-shadow:0 18px 36px -24px rgba(15,30,53,0.45)}\n.mbar{display:none}\n@media (max-width:860px){.mbar{display:flex}.side-actions{display:none !important}}\n.paper{position:relative;background:#FFFFFF;color:#111827;border:1px solid #1F2937;padding:clamp(26px,5vw,56px) clamp(20px,5vw,56px) clamp(30px,5vw,52px);font-size:clamp(14px,1.6vw,16.5px);line-height:2.25;box-sizing:border-box;box-shadow:0 28px 56px -34px rgba(15,30,53,.45);outline:6px solid #FFFFFF;outline-offset:-14px}\n.paper:before,.paper:after{content:\"\";position:absolute;width:clamp(56px,9vw,96px);height:clamp(56px,9vw,96px);background:#1C2B45;-webkit-print-color-adjust:exact;print-color-adjust:exact}\n.paper:before{top:-1px;left:-1px;clip-path:polygon(0 0,100% 0,100% 12px,12px 12px,12px 100%,0 100%)}\n.paper:after{bottom:-1px;right:-1px;clip-path:polygon(calc(100% - 12px) 0,100% 0,100% 100%,0 100%,0 calc(100% - 12px),calc(100% - 12px) calc(100% - 12px))}\n.paper .pp-edge{position:absolute;right:-1px;top:32%;width:12px;height:22%;background:#1C2B45;-webkit-print-color-adjust:exact;print-color-adjust:exact}\n.paper h2{margin:0;text-align:center;font-size:clamp(22px,3.4vw,30px);font-weight:700;line-height:1.5;color:#0B1220}\n.paper h3{margin:0 0 8px;text-align:center;font-size:clamp(20px,3vw,26px);font-weight:700;color:#0B1220}\n.pp-l{margin:0}.pp-hd{font-weight:700;color:#0B1220}.pp-hr{border:0;border-top:1px solid #6B7280;margin:10px 0}\n.pp-v{font-weight:600;color:#0F1E35;padding:0 4px;border-bottom:1.5px solid #C9A24D;cursor:pointer;border-radius:3px;overflow-wrap:anywhere}\n.pp-v.on{background:#FBF3DD}\n.pp-d{display:inline-block;vertical-align:baseline;border-bottom:2px dotted #6B7280;height:1.05em;cursor:pointer}\n.pp-d.on{border-bottom-color:#C9A24D;background:#FBF3DD}\n.pp-o{padding:0 6px;border-radius:999px}.pp-o.sel{border:1.6px solid #0F1E35;font-weight:700}\n.pp-n{margin-inline-end:6px}\n.m-only{display:none}@media (max-width:860px){.m-only{display:block}}\n.pp-signs{display:grid;grid-template-columns:1fr 1fr;gap:22px 40px;margin-top:26px}\n.pp-signs .pp-hd{display:block}\n.fill{display:flex;flex-direction:column;gap:18px}\n.fill-g{display:flex;flex-direction:column;gap:12px;padding-top:16px;border-top:1px solid #F0EBDF}\n.fill-g:first-child{padding-top:0;border-top:0}\n.fill-f{display:flex;flex-direction:column;gap:6px}\n.fill-f label{font-size:14px;font-weight:600}\n.fill-f input,.fill-f select,.fill-f textarea{width:100%;min-width:0;box-sizing:border-box;min-height:46px;padding:0 12px;border:1px solid #8F8778;border-radius:12px;background:#FAF7F0;font:inherit;font-size:16px;color:#0F1E35}\n.fill-f textarea{padding:10px 12px;min-height:88px;line-height:1.8;resize:vertical}\n.fill-f input:focus,.fill-f select:focus,.fill-f textarea:focus{outline:2px solid #C9A24D;outline-offset:1px;background:#FFFFFF}\n.fill-w{font-size:12.5px;color:#8A4B12}\n.fill-p{height:6px;border-radius:999px;background:#EEE8DA;overflow:hidden}.fill-p span{display:block;height:100%;background:#C9A24D}\n@media (min-width:861px){.fill-side{position:sticky;top:16px;max-height:calc(100vh - 32px);overflow:auto}}\n@media (max-width:860px){.fill-side{order:-1}.pp-signs{grid-template-columns:1fr}}\n@media print{\n  @page{size:A4;margin:9mm}\n  html,body{background:#FFFFFF !important}\n  body.mq-printing>*:not(#mq-print){display:none !important}\n  #mq-print{display:block;padding:0 !important;margin:0}\n  #mq-print .paper{box-shadow:none;font-size:11pt;line-height:1.62;padding:10mm 12mm 14mm;outline:0;width:100%;box-sizing:border-box}\n  #mq-print .paper .pp-edge{height:14%;top:38%}\n  #mq-print .pp-hr{margin:5px 0}\n  #mq-print .paper h2{font-size:18pt}#mq-print .paper h3{font-size:16pt;margin-bottom:4px}\n  #mq-print .pp-signs{grid-template-columns:1fr 1fr;gap:6px 30px;margin-top:12px;break-inside:avoid}\n  #mq-print .pp-v{border-bottom:0;background:none !important;padding:0 2px}\n  #mq-print .pp-d{background:none !important;border-bottom-color:#374151 !important}\n  #mq-print .pp-o.sel{-webkit-print-color-adjust:exact;print-color-adjust:exact}\n}\n@media screen{#mq-print{display:none}}\n", function (DCLogic, React) {
"use strict";
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { cat: 'all', q: '', sel: null, notice: '', fv: {}, foc: '', clr: false };
    this.titleRef = (el) => { this.titleEl = el; };
    this.topRef = (el) => { this.topEl = el; };
  }
  componentDidMount() {
    // الطباعة: تُنسخ الورقة إلى أعلى الصفحة وتُخفى بقية العناصر فتخرج الورقة وحدها على A4 (يعمل مع زر الطباعة ومع Ctrl+P)
    this._bp = () => { try { const pp = document.querySelector('.paper'); if (!pp) return; let box = document.getElementById('mq-print'); if (box) box.remove(); box = document.createElement('div'); box.id = 'mq-print'; box.setAttribute('dir', 'rtl'); box.appendChild(pp.cloneNode(true)); document.body.appendChild(box); document.body.classList.add('mq-printing'); } catch (e) {} };
    this._ap = () => { try { const box = document.getElementById('mq-print'); if (box) box.remove(); document.body.classList.remove('mq-printing'); } catch (e) {} };
    try { window.addEventListener('beforeprint', this._bp); window.addEventListener('afterprint', this._ap); } catch (e) {}
    try { const id = window.localStorage.getItem('mq_form'); if (id) { window.localStorage.removeItem('mq_form'); this.setState({ sel: id }); } } catch (e) {}
  }
  componentWillUnmount() {
    try { window.removeEventListener('beforeprint', this._bp); window.removeEventListener('afterprint', this._ap); this._ap(); } catch (e) {}
  }
  componentDidUpdate(pp, ps) {
    // روابط حقيقية لكل عنصر في الموقع المنشور (لمحركات البحث والمشاركة)، وتحديث عنوان الصفحة دون إعادة تحميل
    try { if (window.MQ && window.MQ.syncUrl && this._url) window.MQ.syncUrl(this._url, this._title); } catch (e) {}
    if (ps.sel !== this.state.sel) {
      const el = this.state.sel ? this.titleEl : this.topEl;
      try { if (el) { el.focus({ preventScroll: true }); el.scrollIntoView({ block: 'start' }); } } catch (e) {}
    }
  }
  // نموذج «عقد إيجار عقار» المعتمد: الحقول ومواضعها على الورقة
  rentTpl() {
    return {
      top: 'الجمهورية العراقية', title: 'عقد إيجار عقار',
      groups: [
        { h: 'بيانات العقد', fields: [
          { k: 'no', l: 'رقم العقد', mode: 'numeric' },
          { k: 'wdate', l: 'تاريخ تحرير العقد', t: 'date' },
          { k: 'wplace', l: 'مكان تحرير العقد', ph: 'مثل: بغداد – الكرادة' },
          { k: 'adate', l: 'تاريخ الاتفاق (يُكتب اليوم تلقائياً)', t: 'date' }] },
        { h: 'الطرف الأول (المؤجر)', fields: [
          { k: 'p1name', l: 'الاسم الكامل' }, { k: 'p1nid', l: 'رقم البطاقة الوطنية', mode: 'numeric', dir: 'ltr', chk: 'nid' },
          { k: 'p1addr', l: 'محل السكن' }, { k: 'p1phone', l: 'رقم الهاتف', mode: 'tel', dir: 'ltr', chk: 'phone', ph: '07XXXXXXXXX' }] },
        { h: 'الطرف الثاني (المستأجر)', fields: [
          { k: 'p2name', l: 'الاسم الكامل' }, { k: 'p2nid', l: 'رقم البطاقة الوطنية', mode: 'numeric', dir: 'ltr', chk: 'nid' },
          { k: 'p2addr', l: 'محل السكن' }, { k: 'p2phone', l: 'رقم الهاتف', mode: 'tel', dir: 'ltr', chk: 'phone', ph: '07XXXXXXXXX' }] },
        { h: 'العقار', fields: [
          { k: 'ptype', l: 'نوع العقار', t: 'select', opts: [['', '— اختر —'], ['house', 'منزل'], ['flat', 'شقة'], ['shop', 'محل تجاري'], ['other', 'أخرى']] },
          { k: 'ptypeOther', l: 'نوع العقار (إن اخترت «أخرى»)', when: (v) => v.ptype === 'other' },
          { k: 'paddr', l: 'عنوان العقار', ph: 'المحافظة، القضاء، الحي' },
          { k: 'mahalla', l: 'رقم المحلة', mode: 'numeric' }, { k: 'zuqaq', l: 'رقم الزقاق', mode: 'numeric' }, { k: 'dar', l: 'رقم الدار', mode: 'numeric' },
          { k: 'area', l: 'المساحة (م²)', mode: 'decimal' }] },
        { h: 'الشروط', fields: [
          { k: 'from', l: 'تبدأ مدة الإيجار من', t: 'date' }, { k: 'to', l: 'وتنتهي بتاريخ', t: 'date', chk: 'after:from' },
          { k: 'rent', l: 'بدل الإيجار (دينار عراقي)', mode: 'numeric', chk: 'money', ph: 'مثل: 500000' },
          { k: 'pay', l: 'طريقة الدفع', t: 'select', opts: [['', '— اختر —'], ['monthly', 'شهرياً'], ['yearly', 'سنوياً'], ['once', 'دفعة واحدة']] },
          { k: 'extra', l: 'شروط إضافية يتفق عليها الطرفان (اختياري)', t: 'area' }] },
        { h: 'الشهود', fields: [{ k: 'w1', l: 'اسم الشاهد الأول' }, { k: 'w2', l: 'اسم الشاهد الثاني' }] }
      ],
      lines: [
        [['b', 'رقم العقد: '], ['f', 'no', 24]],
        [['b', 'تاريخ تحرير العقد: '], ['date', 'wdate']],
        [['b', 'مكان تحرير العقد: '], ['f', 'wplace', 30]],
        'hr',
        [['t', 'إنه في يوم '], ['day', 'adate'], ['t', ' الموافق '], ['date', 'adate'], ['t', ' تم الاتفاق والتراضي بين كل من:']],
        [['b', 'الطرف الأول (المؤجر):']],
        [['t', 'الاسم الكامل: '], ['f', 'p1name', 24], ['t', '   رقم البطاقة الوطنية: '], ['f', 'p1nid', 16]],
        [['t', 'محل السكن: '], ['f', 'p1addr', 44]],
        [['t', 'رقم الهاتف: '], ['f', 'p1phone', 18]],
        [['b', 'الطرف الثاني (المستأجر):']],
        [['t', 'الاسم الكامل: '], ['f', 'p2name', 24], ['t', '   رقم البطاقة الوطنية: '], ['f', 'p2nid', 16]],
        [['t', 'محل السكن: '], ['f', 'p2addr', 44]],
        [['t', 'رقم الهاتف: '], ['f', 'p2phone', 18]],
        [['b', 'موضوع العقد:']],
        [['t', 'أجّر الطرف الأول إلى الطرف الثاني العقار الموصوف أدناه، وقد قبل الطرف الثاني استئجاره وفقاً للشروط والأحكام الواردة في هذا العقد.']],
        [['b', 'نوع العقار: '], ['choice', 'ptype', [['house', 'منزل'], ['flat', 'شقة'], ['shop', 'محل تجاري'], ['other', 'أخرى']]]],
        [['t', 'عنوان العقار: '], ['f', 'paddr', 44]],
        [['t', 'رقم المحلة: '], ['f', 'mahalla', 8], ['t', '   رقم الزقاق: '], ['f', 'zuqaq', 8], ['t', '   رقم الدار: '], ['f', 'dar', 8]],
        [['t', 'المساحة: '], ['area', 'area']],
        [['b', 'الشروط والأحكام:']],
        ['1', ['b', 'مدة الإيجار: '], ['t', 'تبدأ من تاريخ '], ['date', 'from'], ['t', ' وتنتهي بتاريخ '], ['date', 'to']],
        ['2', ['b', 'بدل الإيجار: '], ['t', 'مبلغ قدره '], ['money', 'rent'], ['t', ' دينار عراقي'], ['words', 'rent']],
        ['3', ['b', 'طريقة الدفع: '], ['choice', 'pay', [['monthly', 'شهرياً'], ['yearly', 'سنوياً'], ['once', 'دفعة واحدة']]]],
        ['4', ['t', 'يلتزم المستأجر بالمحافظة على العقار واستعماله للغرض المتفق عليه.']],
        ['5', ['t', 'لا يجوز للمستأجر تأجير العقار للغير دون موافقة المؤجر الخطية.']],
        ['6', ['t', 'يلتزم الطرفان بتنفيذ الالتزامات المتفق عليها وفق القوانين العراقية النافذة.']],
        ['7', ['t', 'أي شروط إضافية يتفق عليها الطرفان: '], ['f', 'extra', 40]]
      ],
      signs: [
        ['الطرف الأول (المؤجر)', [['الاسم: ', 'p1name'], ['التوقيع: ', '']]],
        ['الطرف الثاني (المستأجر)', [['الاسم: ', 'p2name'], ['التوقيع: ', '']]],
        ['الشاهد الأول', [['الاسم والتوقيع: ', 'w1']]],
        ['الشاهد الثاني', [['الاسم والتوقيع: ', 'w2']]]
      ]
    };
  }
  // تفقيط المبلغ بالعربية: 1500000 ← مليون وخمسمائة ألف
  words(n) {
    const ones = ['', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة', 'عشرة', 'أحد عشر', 'اثنا عشر', 'ثلاثة عشر', 'أربعة عشر', 'خمسة عشر', 'ستة عشر', 'سبعة عشر', 'ثمانية عشر', 'تسعة عشر'];
    const tens = ['', '', 'عشرون', 'ثلاثون', 'أربعون', 'خمسون', 'ستون', 'سبعون', 'ثمانون', 'تسعون'];
    const hund = ['', 'مائة', 'مائتان', 'ثلاثمائة', 'أربعمائة', 'خمسمائة', 'ستمائة', 'سبعمائة', 'ثمانمائة', 'تسعمائة'];
    const three = (x) => { const h = Math.floor(x / 100), r = x % 100, p = []; if (h) p.push(hund[h]); if (r) p.push(r < 20 ? ones[r] : (r % 10 ? ones[r % 10] + ' و' : '') + tens[Math.floor(r / 10)]); return p.join(' و'); };
    const scales = [[1e9, ['مليار', 'ملياران', 'مليارات', 'ملياراً']], [1e6, ['مليون', 'مليونان', 'ملايين', 'مليوناً']], [1e3, ['ألف', 'ألفان', 'آلاف', 'ألفاً']]];
    if (!n) return 'صفر';
    const out = [];
    let rest = n;
    scales.forEach(([v, w]) => {
      const q = Math.floor(rest / v); rest = rest % v;
      if (!q) return;
      const r100 = q % 100;
      out.push(q === 1 ? w[0] : q === 2 ? w[1] : q <= 10 ? three(q) + ' ' + w[2] : (r100 >= 11 && q < 100 ? three(q) + ' ' + w[3] : three(q) + ' ' + w[0]));
    });
    if (rest) out.push(three(rest));
    return out.join(' و');
  }
  buildTpl(def, ar) {
    const v = this.state.fv || {};
    const foc = this.state.foc;
    const toW = (s) => String(s).replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
    const set = (k, val) => this.setState({ fv: { ...(this.state.fv || {}), [k]: val }, clr: false });
    const go = (k) => () => { try { const el = document.getElementById('fx-' + k); if (el) { el.focus({ preventScroll: false }); el.scrollIntoView({ block: 'center', behavior: 'smooth' }); } } catch (e) {} };
    const lab = {};
    def.groups.forEach((g) => g.fields.forEach((f) => { lab[f.k] = f.l; }));
    const val = (k) => String(v[k] == null ? '' : v[k]).trim();
    const dparts = (k) => { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(val(k)); return m ? [m[3], m[2], m[1]] : null; };
    const DAYS = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    const money = (k) => { const n = parseInt(toW(val(k)).replace(/[^0-9]/g, ''), 10); return isNaN(n) ? null : n; };
    const V = (k, text) => ({ isV: true, val: text, on: foc === k ? 'on' : '', go: go(k) });
    const D = (k, w) => ({ isD: true, w: w, on: foc === k ? 'on' : '', go: go(k), lab: lab[k] || '' });
    const seg = (s) => {
      const [type, k, w] = s;
      if (type === 't') return [{ isT: true, t: k }];
      if (type === 'b') return [{ isB: true, t: k }];
      if (type === 'f') return val(k) ? [V(k, ar(toW(val(k))))] : [D(k, w || 20)];
      if (type === 'date') { const p = dparts(k); return p ? [V(k, ar(p[0]) + ' / ' + ar(p[1]) + ' / ' + ar(p[2]))] : [D(k, 4), { isT: true, t: ' / ' }, D(k, 4), { isT: true, t: ' / ' }, D(k, 7)]; }
      if (type === 'day') { const p = dparts(k); return p ? [V(k, DAYS[new Date(Date.UTC(+p[2], +p[1] - 1, +p[0])).getUTCDay()])] : [D(k, 9)]; }
      if (type === 'money') { const n = money(k); return n != null ? [V(k, ar(n.toLocaleString('en-US')).replace(/,/g, '٬'))] : [D(k, 16)]; }
      if (type === 'words') { const n = money(k); return n ? [{ isT: true, t: ' (فقط ' + this.words(n) + ' دينار عراقي لا غير)' }] : []; }
      if (type === 'area') return val(k) ? [V(k, ar(toW(val(k))) + ' م²')] : [D(k, 12), { isT: true, t: ' م²' }];
      if (type === 'choice') {
        const cur = val(k);
        const opts = w.map(([ov, ol], i) => ({ l: ov === 'other' && cur === 'other' && val(k + 'Other') ? 'أخرى: ' + val(k + 'Other') : ol, cls: cur === ov ? 'sel' : '', sep: i < w.length - 1 ? ' / ' : '' }));
        return [{ isC: true, opts, go: go(k) }];
      }
      return [];
    };
    const lines = def.lines.map((ln) => {
      if (ln === 'hr') return { isHr: true, isLine: false, segs: [] };
      const num = typeof ln[0] === 'string' ? ln[0] : '';
      const parts = num ? ln.slice(1) : ln;
      return { isHr: false, isLine: true, isNum: !!num, num: num ? ar(num) + '.' : '', cls: num ? 'pp-li-x' : '', segs: [].concat(...parts.map(seg)) };
    });
    const signs = def.signs.map(([role, rows]) => ({ role, rows: rows.map(([t, k]) => (k && val(k) ? { t, ...V(k, val(k)) } : { t, isD: true, isV: false, w: 22, on: k && foc === k ? 'on' : '', go: k ? go(k) : () => {} })) }));
    const warnOf = (f) => {
      const x = toW(val(f.k));
      if (!x) return '';
      if (f.chk === 'nid' && !/^\d{12}$/.test(x.replace(/\s/g, ''))) return 'رقم البطاقة الوطنية الموحدة ١٢ رقماً؛ تأكد منه.';
      if (f.chk === 'phone' && !/^07\d{9}$/.test(x.replace(/[\s-]/g, ''))) return 'رقم الهاتف العراقي ١١ رقماً ويبدأ بـ 07.';
      if (f.chk === 'money' && !(money(f.k) > 0)) return 'اكتب المبلغ بالأرقام.';
      if (f.chk && f.chk.indexOf('after:') === 0) { const o = val(f.chk.slice(6)); if (o && x <= o) return 'تاريخ الانتهاء يجب أن يكون بعد تاريخ البدء.'; }
      return '';
    };
    const shown = [];
    const groups = def.groups.map((g) => ({ h: g.h, fields: g.fields.filter((f) => !f.when || f.when(v)).map((f) => {
      shown.push(f);
      const w = warnOf(f);
      return { id: 'fx-' + f.k, wid: 'fx-' + f.k + '-w', label: f.l, value: v[f.k] == null ? '' : v[f.k], ph: f.ph || '', type: f.t === 'date' ? 'date' : 'text', mode: f.mode || 'text', dir: f.dir || 'auto',
        isIn: !f.t || f.t === 'date', isSel: f.t === 'select', isArea: f.t === 'area', opts: (f.opts || []).map(([ov, ol]) => ({ v: ov, l: ol })),
        warn: w, hasWarn: !!w, onChange: (e) => set(f.k, e.target.value), onFocus: () => this.setState({ foc: f.k }), onBlur: () => this.setState({ foc: '' }) };
    }) }));
    const done = shown.filter((f) => val(f.k) !== '').length;
    return {
      top: def.top, title: def.title, lines, signs, groups,
      total: shown.length, done, pct: Math.round((100 * done) / Math.max(1, shown.length)), progress: 'أكملت ' + ar(done) + ' من ' + ar(shown.length) + ' حقلاً',
      toPaper: () => { try { const el = document.querySelector('.paper'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) {} },
      clearLabel: this.state.clr ? 'تأكيد مسح كل الحقول' : 'مسح الحقول',
      clear: () => { if (!this.state.clr) { this.setState({ clr: true }); return; } this.setState({ fv: {}, clr: false, notice: '' }); }
    };
  }
  renderVals() {
    const cms = (() => { try { return JSON.parse(window.localStorage.getItem('mq_cms') || '{}') || {}; } catch (e) { return {}; } })();
    const mergeL = (seed, c, idk) => { idk = idk || 'id'; c = c || {}; const up = c.upsert || {}; const rm = new Set(c.removed || []); const out = (seed || []).filter((r) => !rm.has(r[idk])).map((r) => (up[r[idk]] ? { ...r, ...up[r[idk]] } : r)); Object.keys(up).forEach((id) => { if (!rm.has(id) && !(seed || []).some((r) => r[idk] === id)) out.push(up[id]); }); return out; };
    const isPub = (r) => (r.state || 'published') === 'published';
    const pgc = cms.pages || {};
    const pgHero = { t1: pgc.forms_t1 || "النماذج القانونية", t2: pgc.forms_t1 != null ? (pgc.forms_t2 || '') : "", text: pgc.forms_text || "نماذج إرشادية تساعدك على تحضير المحتوى، ولكل منها تنبيه بما يلزمه من تسجيل أو تصديق رسمي." };
    pgHero.hasT2 = !!pgHero.t2;
    const D = '٠١٢٣٤٥٦٧٨٩', P = '۰۱۲۳۴۵۶۷۸۹';
    const toW = (s) => String(s).replace(/[٠-٩]/g, (d) => D.indexOf(d)).replace(/[۰-۹]/g, (d) => P.indexOf(d));
    const ar = (s) => String(s).replace(/[0-9]/g, (d) => D[d]);
    const norm = (s) => toW(s).toLowerCase().replace(/[ً-ْـ]/g, '').replace(/[أإآٱ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي').replace(/\s+/g, ' ').trim();
    const names = { all: 'الكل', contracts: 'العقود', poa: 'الوكالات', suits: 'الدعاوى والطعون', labor: 'العمل', family: 'الأحوال الشخصية' };
    const kinds = {
      contract: { label: 'عقد', top: 'جمهورية العراق', opening: 'إنه في يوم ........ الموافق ..../..../........ اتفق كل من:' },
      petition: { label: 'عريضة إلى المحكمة', top: 'إلى محكمة ........ المحترمة', opening: 'نتقدم بهذه العريضة وفق البيانات الآتية:' },
      letter: { label: 'إشعار', top: 'إلى / ........ المحترم', opening: 'تحية طيبة، وبعد:' },
      poa: { label: 'مسودة لدى الكاتب العدل', top: 'مسودة إرشادية لمحتوى الوكالة', opening: 'يُعرض هذا المحتوى على الكاتب العدل لتنظيم الوكالة أو تصديقها:' }
    };
    const ord = ['أولاً', 'ثانياً', 'ثالثاً', 'رابعاً', 'خامساً', 'سادساً', 'سابعاً', 'ثامناً', 'تاسعاً', 'عاشراً'];
    const fcfg = cms.formsCfg || {};
    Object.keys(names).forEach((k) => { if (fcfg['cat_' + k]) names[k] = fcfg['cat_' + k]; });
    Object.keys(kinds).forEach((k) => { if (fcfg['kind_' + k]) kinds[k] = { ...kinds[k], label: fcfg['kind_' + k] }; });
    const all = mergeL([
      { id: 'rent-home', tpl: 'rent', title: 'عقد إيجار عقار', cat: 'contracts', kind: 'contract', need: 'توقيع الطرفين وشاهدين',
        desc: 'النموذج المعتمد لعقد إيجار عقار (منزل أو شقة أو محل تجاري): بيانات الطرفين والعقار، ومدة الإيجار وبدله وطريقة دفعه، والتزامات الطرفين، مع التوقيعات والشهود. املأ الحقول فتظهر البيانات في مكانها على الورقة، ثم اطبعها.',
        warn: 'أحكام التخلية وامتداد العقد والإيجار من الباطن يحكمها قانون إيجار العقار النافذ ولا يجوز الاتفاق على خلافها. راجع كذلك واجب إيداع نسخة من العقد لدى دائرة ضريبة العقار.',
        basis: 'قانون إيجار العقار رقم ٨٧ لسنة ١٩٧٩ (المعدّل)',
        fields: ['رقم العقد وتاريخ ومكان تحريره', 'الطرف الأول (المؤجر): الاسم الكامل ورقم البطاقة الوطنية ومحل السكن ورقم الهاتف', 'الطرف الثاني (المستأجر): الاسم الكامل ورقم البطاقة الوطنية ومحل السكن ورقم الهاتف', 'نوع العقار وعنوانه ورقم المحلة والزقاق والدار ومساحته', 'مدة الإيجار وتاريخ بدئها وانتهائها', 'بدل الإيجار وطريقة الدفع', 'الشاهدان'],
        clauses: ['مدة الإيجار: تبدأ من تاريخ ..../..../...... وتنتهي بتاريخ ..../..../.......', 'بدل الإيجار: مبلغ قدره ............ دينار عراقي.', 'طريقة الدفع: شهرياً / سنوياً / دفعة واحدة.', 'يلتزم المستأجر بالمحافظة على العقار واستعماله للغرض المتفق عليه.', 'لا يجوز للمستأجر تأجير العقار للغير دون موافقة المؤجر الخطية.', 'يلتزم الطرفان بتنفيذ الالتزامات المتفق عليها وفق القوانين العراقية النافذة.', 'أي شروط إضافية يتفق عليها الطرفان: ............'],
        signs: ['الطرف الأول (المؤجر)', 'الطرف الثاني (المستأجر)', 'الشاهد الأول', 'الشاهد الثاني'] },
      { id: 'rent-shop', title: 'عقد إيجار محل تجاري', cat: 'contracts', kind: 'contract', need: 'توقيع الطرفين وشاهدين',
        desc: 'لإيجار محل أو مكتب لنشاط تجاري، مع تحديد النشاط المسموح به وتوزيع النفقات.',
        warn: 'بعض العقارات التجارية مستثناة من أحكام قانون إيجار العقار، وأحكام التجديد والامتداد تختلف بحسب نوع العقار. راجع محامياً قبل التوقيع.',
        basis: 'قانون إيجار العقار رقم ٨٧ لسنة ١٩٧٩ (المعدّل)',
        fields: ['المؤجر', 'المستأجر', 'عنوان المحل ورقمه', 'النشاط التجاري المسموح به', 'الأجرة والمدة'],
        clauses: ['يلتزم المستأجر بممارسة النشاط المذكور فقط ما لم يوافق المؤجر كتابةً على غيره.', 'يتحمل المستأجر رسوم الخدمات خلال مدة العقد ما لم يُتفق على خلاف ذلك.', 'يخضع تجديد العقد وامتداده للقانون النافذ.'],
        signs: ['المؤجر', 'المستأجر'] },
      { id: 'car', title: 'اتفاق أولي على بيع مركبة', cat: 'contracts', kind: 'contract', need: 'التسجيل لدى مديرية المرور',
        desc: 'اتفاق تمهيدي بين البائع والمشتري يسبق تسجيل نقل ملكية المركبة.',
        warn: 'لا يكتمل بيع المركبة إلا بتسجيل نقل الملكية لدى مديرية المرور، وتبقى المركبة مسجلة باسم البائع حتى ذلك الحين. هذا الاتفاق لا ينقل الملكية وحده.',
        basis: 'قانون المرور رقم ٨ لسنة ٢٠١٩',
        fields: ['البائع', 'المشتري', 'نوع المركبة وموديلها', 'رقم اللوحة ورقم الهيكل (الشاصي)', 'الثمن وطريقة دفعه'],
        clauses: ['يقر البائع بخلو المركبة من أي حجز أو رهن، ويقدّم براءة ذمة من الغرامات المرورية.', 'يتعهد الطرفان بمراجعة مديرية المرور لتسجيل نقل الملكية خلال ........ يوماً من تاريخ هذا الاتفاق.', 'يحدد الطرفان من يتحمل المسؤولية عن المركبة حتى إتمام التسجيل.'],
        signs: ['البائع', 'المشتري'] },
      { id: 'property', title: 'تعهد بنقل ملكية عقار', cat: 'contracts', kind: 'contract', need: 'التسجيل في دائرة التسجيل العقاري',
        desc: 'تعهد يسبق التسجيل الرسمي، ولا يُعدّ بيعاً للعقار.',
        warn: 'بيع العقار لا ينعقد إلا بتسجيله في دائرة التسجيل العقاري. هذا التعهد لا ينقل الملكية، وأثره عند الإخلال يقتصر في الأصل على التعويض. العربون والشرط الجزائي حكمان مختلفان، فاستشر محامياً قبل دفع أي مبلغ.',
        basis: 'المادتان ٥٠٨ و١١٢٧ من القانون المدني، والمادة ٣ من قانون التسجيل العقاري',
        fields: ['الطرف الأول (المالك)', 'الطرف الثاني', 'رقم العقار وتسلسله وموقعه', 'مساحة العقار', 'المبلغ المتفق عليه'],
        clauses: ['يتعهد الطرف الأول بنقل ملكية العقار وتسجيله باسم الطرف الثاني في دائرة التسجيل العقاري خلال ........ يوماً.', 'يُدفع الثمن أو باقيه عند إتمام التسجيل في الدائرة المختصة.', 'يحدد الطرفان أثر العدول أو الإخلال بعد استشارة محامٍ.'],
        signs: ['الطرف الأول', 'الطرف الثاني'] },
      { id: 'poa-general', title: 'مسودة وكالة عامة', cat: 'poa', kind: 'poa', need: 'التنظيم لدى الكاتب العدل',
        desc: 'لتحضير محتوى وكالة عامة قبل مراجعة الكاتب العدل.',
        warn: 'لا تكون الوكالة نافذة إلا إذا نُظّمت أو صُدّقت لدى الكاتب العدل. هذه المسودة لتحضير المحتوى فقط، ولا يجوز توقيعها على أنها وكالة.',
        basis: 'قانون الكاتب العدل رقم ٣٣ لسنة ١٩٩٨',
        fields: ['الموكّل (الاسم الكامل ورقم الهوية)', 'الوكيل (الاسم الكامل ورقم الهوية)', 'نطاق التصرفات المخوّلة'],
        clauses: ['تُحدَّد التصرفات المخوّلة للوكيل بدقة، ويُذكر ما يُستثنى منها.', 'تنتهي الوكالة بإنجاز موضوعها أو بعزل الوكيل أو بوفاة أحد الطرفين، في الحدود التي يقررها القانون.'],
        signs: ['الموكّل'] },
      { id: 'poa-special', title: 'مسودة وكالة خاصة', cat: 'poa', kind: 'poa', need: 'التنظيم لدى الكاتب العدل',
        desc: 'لتحضير محتوى وكالة في تصرف محدد بعينه.',
        warn: 'لا تكون الوكالة نافذة إلا إذا نُظّمت أو صُدّقت لدى الكاتب العدل. الوكالات المتصلة بالتصرفات العقارية لا تُبرم إلكترونياً.',
        basis: 'قانون الكاتب العدل رقم ٣٣ لسنة ١٩٩٨، والمادة ٣ من قانون التوقيع الإلكتروني',
        fields: ['الموكّل', 'الوكيل', 'موضوع الوكالة بالتحديد', 'مدة الوكالة إن وُجدت'],
        clauses: ['تقتصر صلاحيات الوكيل على الموضوع المحدد أعلاه.', 'تنتهي الوكالة بإنجاز موضوعها أو بانتهاء مدتها.'],
        signs: ['الموكّل'] },
      { id: 'civil-suit', title: 'عريضة دعوى مدنية', cat: 'suits', kind: 'petition', need: 'تقديمها للمحكمة ودفع الرسم',
        desc: 'الصيغة الأساسية لإقامة دعوى أمام محكمة البداءة، بالبيانات التي يوجبها القانون.',
        warn: 'تُرفق بالعريضة نسخ بعدد المدعى عليهم وقائمة بالمستندات مع صورها، ويُوقَّع على كل ورقة. تُعدّ الدعوى قائمة من تاريخ دفع الرسم.',
        basis: 'المواد ٤٦ و٤٧ و٤٨ من قانون المرافعات المدنية',
        fields: ['تاريخ تحرير العريضة', 'المدعي: الاسم واللقب والمهنة ومحل الإقامة', 'المدعى عليه: الاسم واللقب والمهنة ومحل الإقامة', 'المحل المختار للتبليغ', 'موضوع الدعوى وقيمتها'],
        clauses: ['الوقائع: ........................................', 'الأدلة والمستندات: ........................................', 'الطلبات: دعوة المدعى عليه للمرافعة والحكم بما ورد أعلاه وتحميله الرسوم والمصاريف.'],
        signs: ['المدعي أو وكيله'] },
      { id: 'appeal', title: 'لائحة استئنافية', cat: 'suits', kind: 'petition', need: 'تقديمها خلال ١٥ يوماً',
        desc: 'للطعن بالحكم البدائي أمام محكمة الاستئناف مع بيان أسباب الطعن.',
        warn: 'مدة الاستئناف خمسة عشر يوماً تبدأ من اليوم التالي لتبليغ الحكم. بعض الأحكام لا تقبل الاستئناف وتُطعن تمييزاً فقط، ومنها أحكام الأحوال الشخصية. تحقق من ذلك قبل التقديم.',
        basis: 'المادتان ١٧٢ و١٨٧ من قانون المرافعات المدنية',
        fields: ['المستأنِف', 'المستأنَف عليه', 'المحكمة التي أصدرت الحكم', 'رقم الحكم وتاريخه وتاريخ التبليغ به'],
        clauses: ['أسباب الاستئناف: ........................................', 'الطلب: قبول الاستئناف شكلاً، وفسخ الحكم المستأنف موضوعاً.'],
        signs: ['المستأنِف أو وكيله'] },
      { id: 'work-contract', title: 'عقد عمل', cat: 'labor', kind: 'contract', need: 'توقيع الطرفين',
        desc: 'يحدد طبيعة العمل والأجر وساعات العمل والإجازات وفق قانون العمل الاتحادي.',
        warn: 'مُعدّ وفق قانون العمل رقم ٣٧ لسنة ٢٠١٥ النافذ في العراق الاتحادي. في إقليم كوردستان يُطبَّق قانون مختلف، فراجع محامياً.',
        basis: 'قانون العمل رقم ٣٧ لسنة ٢٠١٥، وقانون التقاعد والضمان الاجتماعي للعمال رقم ١٨ لسنة ٢٠٢٣',
        fields: ['صاحب العمل', 'العامل', 'العمل المكلف به', 'الأجر الشهري', 'تاريخ المباشرة'],
        clauses: ['مدة التجربة ........ ولا تزيد على ثلاثة أشهر.', 'لا تزيد ساعات العمل على ثماني ساعات في اليوم أو ثمانٍ وأربعين ساعة في الأسبوع.', 'يستحق العامل إجازة سنوية مدفوعة الأجر لا تقل عن واحد وعشرين يوماً بعد سنة خدمة.', 'يُشمل العامل بالضمان الاجتماعي وفق القانون.'],
        signs: ['صاحب العمل', 'العامل'] },
      { id: 'resignation', title: 'إشعار إنهاء عقد عمل من العامل', cat: 'labor', kind: 'letter', need: 'إشعار قبل ٣٠ يوماً',
        desc: 'إشعار رسمي من عامل في القطاع الخاص بإنهاء عقد العمل.',
        warn: 'على العامل إشعار صاحب العمل قبل ثلاثين يوماً على الأقل، وإلا التزم بتعويض يعادل مدة الإشعار أو ما تبقى منها. موظفو الدولة تحكمهم قوانين الخدمة المدنية لا هذا النموذج.',
        basis: 'المادة ٤٣ من قانون العمل رقم ٣٧ لسنة ٢٠١٥',
        fields: ['اسم العامل', 'العمل الذي يشغله', 'تاريخ الإشعار', 'آخر يوم عمل (بعد ثلاثين يوماً على الأقل)'],
        clauses: ['أُشعركم بإنهاء عقد عملي اعتباراً من تاريخ هذا الإشعار، على أن يكون آخر يوم عمل لي التاريخ المذكور أعلاه.', 'أطلب احتساب مستحقاتي وفق قانون العمل.'],
        signs: ['العامل'] },
      { id: 'alimony', title: 'عريضة دعوى نفقة', cat: 'family', kind: 'petition', need: 'محكمة الأحوال الشخصية',
        desc: 'للمطالبة بنفقة الزوجة أو الأولاد أمام محكمة الأحوال الشخصية.',
        warn: 'نفقة الزوجة غير الناشز دين في ذمة الزوج عن مدة لا تزيد على سنة من تاريخ امتناعه. تختلف الأحكام بحسب القانون المطبق على عقد زواجك: القانون رقم ١٨٨، أو مدونة المذهب الجعفري، أو قانون الإقليم.',
        basis: 'المادتان ٢٣ و٢٤ من قانون الأحوال الشخصية رقم ١٨٨ لسنة ١٩٥٩',
        fields: ['المدعية', 'المدعى عليه', 'تاريخ عقد الزواج والقانون المطبق عليه', 'أسماء الأولاد وأعمارهم إن وُجدوا'],
        clauses: ['الوقائع: ........................................', 'الطلبات: الحكم بنفقة ماضية عن مدة لا تزيد على سنة من تاريخ الامتناع، ونفقة مستمرة، ونفقة الأولاد إن وُجدوا.'],
        signs: ['المدعية أو وكيلها'] },
      { id: 'custody', title: 'عريضة دعوى حضانة', cat: 'family', kind: 'petition', need: 'محكمة الأحوال الشخصية',
        desc: 'للمطالبة بحضانة الأولاد مع بيان مصلحة المحضون.',
        warn: 'وفق القانون رقم ١٨٨: الأم أحق بالحضانة ما لم يتضرر المحضون، وتستمر حتى العاشرة ويجوز تمديدها إلى الخامسة عشرة. تختلف الأحكام في مدونة المذهب الجعفري وفي إقليم كوردستان، فحدد القانون المطبق على عقد زواجك.',
        basis: 'المادة ٥٧ من قانون الأحوال الشخصية رقم ١٨٨ لسنة ١٩٥٩',
        fields: ['المدعي', 'المدعى عليه', 'أسماء الأولاد وأعمارهم', 'القانون المطبق على عقد الزواج'],
        clauses: ['الوقائع ومصلحة المحضون: ........................................', 'الطلبات: الحكم بالحضانة لما فيه مصلحة المحضون.'],
        signs: ['المدعي أو وكيله'] }
    ], cms.forms).filter(isPub).map((f) => ({ fields: [], clauses: [], signs: [], ...f, kind: kinds[f.kind] ? f.kind : 'contract' })).map((f) => ({
      ...f, catLabel: names[f.cat], kindLabel: kinds[f.kind].label, topLine: kinds[f.kind].top,
      versionLine: 'الإصدار ' + (f.version || '١٫٠') + (f.versionDate ? ' · ' + ar(f.versionDate) : ''),
      opening: kinds[f.kind].opening, docTitle: f.kind === 'poa' ? f.title.replace('مسودة ', '') : f.title,
      clauses: f.clauses.map((t, j) => ({ n: (ord[j] || ar(j + 1)) + ':', text: t }))
    }));
    const { cat, q, sel, notice } = this.state;
    const nq = norm(q);
    const forms = all.filter((f) => (cat === 'all' || f.cat === cat) && (!nq || norm(f.title + ' ' + f.desc).includes(nq)))
      .map((f) => ({ ...f, href: window.MQ && window.MQ.live ? '/forms/' + encodeURIComponent(f.id) : '#main', open: () => this.setState({ sel: f.id, notice: '' }) }));
    const selected = all.find((f) => f.id === sel) || null;
    this._url = selected ? '/forms/' + encodeURIComponent(selected.id) : '/forms';
    this._title = (selected ? selected.title : 'النماذج القانونية') + ' | ' + ((cms.header && cms.header.siteName) || 'المرجع القانوني العراقي');
    const pill = (on) => ({ bg: on ? '#0F1E35' : '#FFFFFF', fg: on ? '#FFFFFF' : '#2B3A52', border: on ? '#0F1E35' : '#8F8778', on: on ? 'true' : 'false' });
    // ---------- النماذج القابلة للتعبئة: حقول تُكتب فتظهر في مكانها على الورقة
    const tplDef = selected && selected.tpl === 'rent' ? this.rentTpl() : null;
    const tpl = tplDef ? this.buildTpl(tplDef, ar) : null;
    return {
      isTpl: !!tpl, noTpl: !tpl,
      tpl: tpl || { title: '', top: '', lines: [], signs: [], groups: [], total: 0, done: 0, pct: 0, progress: '', clear: () => {}, toPaper: () => {}, clearLabel: '' },
      formsDisclaimer: fcfg.disclaimer || '', hasDisclaimer: !!fcfg.disclaimer,
      pgHero,
      q, forms, empty: forms.length === 0,
      countLabel: 'عدد النماذج: ' + ar(forms.length),
      cats: Object.keys(names).map((k) => ({ label: names[k], ...pill(k === cat), pick: () => this.setState({ cat: k }) })),
      noSubmit: (e) => e.preventDefault(),
      onQ: (e) => this.setState({ q: e.target.value }),
      showList: !selected, showForm: !!selected,
      sel: selected || { versionLine: '', title: '', catLabel: '', desc: '', warn: '', basis: '', fields: [], clauses: [], signs: [], kindLabel: '', need: '', topLine: '', opening: '', docTitle: '' },
      notice, hasNotice: !!notice,
      print: () => { if (tpl && tpl.done === 0) this.setState({ notice: 'تُطبع الورقة بفراغاتها لتعبئتها بخط اليد.' }); if (selected && selected.noPrint) { this.setState({ notice: 'الطباعة غير متاحة لهذا النموذج حالياً.' }); return; } try { if (tpl && this._bp) this._bp(); window.print(); } catch (e) { this.setState({ notice: 'تعذّرت الطباعة من هذه المعاينة. افتح الصفحة في نافذة مستقلة ثم اطبعها.' }); } },
      download: () => tpl ? (this.setState({ notice: 'في نافذة الطباعة اختر «حفظ بصيغة PDF» (Save as PDF) لتنزيل العقد بالبيانات التي كتبتها.' }), setTimeout(() => { try { if (this._bp) this._bp(); window.print(); } catch (e) {} }, 60)) : this.setState({ notice: selected && selected.noDownload ? 'التنزيل غير متاح لهذا النموذج حالياً.' : 'ملفات PDF وWord القابلة للتعبئة تُتاح بعد اعتماد صياغة النموذج من المستشار القانوني للمنصة.' }),
      back: () => this.setState({ sel: null, notice: '', fv: {}, foc: '', clr: false }),
      titleRef: this.titleRef, topRef: this.topRef
    };
  }
}
return Component;
});
