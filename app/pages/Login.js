MQ_DEF("Login", "<div dir=\"rtl\" style=\"font-family: 'IBM Plex Sans Arabic', system-ui, sans-serif; color: #0F1E35; background: #FAF7F0; min-height: 100vh\">\n<dc-import name=\"Header\" active=\"none\" hint-size=\"100%,81px\"></dc-import>\n<main id=\"main\" tabindex=\"-1\" style=\"outline: none\">\n\n<section style=\"max-width: 1240px; margin: 0 auto; padding: clamp(28px, 5vw, 64px) 20px; display: flex; flex-wrap: wrap; gap: 28px; align-items: stretch; box-sizing: border-box\">\n<div style=\"flex: 1 1 400px; min-width: 0; background: #FFFFFF; border-radius: clamp(20px, 3vw, 28px); padding: clamp(24px, 5vw, 48px); box-shadow: 0 24px 48px -32px rgba(15,30,53,0.35); display: flex; flex-direction: column; gap: 22px\">\n\n<sc-if value=\"{{done}}\" hint-placeholder-val=\"{{false}}\">\n<div role=\"status\" style=\"display: flex; flex-direction: column; align-items: center; text-align: center; gap: 16px; padding: 48px 0\">\n<span style=\"width: 68px; height: 68px; border-radius: 50%; background: #F3EEE2; display: flex; align-items: center; justify-content: center\">\n<svg width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#0F1E35\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12l5 5L20 7\"></path></svg>\n</span>\n<h1 style=\"margin: 0; font-size: clamp(22px, 4vw, 28px); font-weight: 700\">{{doneTitle}}</h1>\n<p style=\"margin: 0; font-size: 15px; line-height: 1.9; color: #3A4860; max-width: 380px\">{{doneText}}</p>\n<a href=\"Main.dc.html\" style=\"display: inline-flex; align-items: center; min-height: 52px; padding: 0 28px; border-radius: 12px; background: #C9A24D; color: #0F1E35; font-weight: 700; font-size: 16px\">الانتقال إلى الرئيسية</a>\n<button type=\"button\" class=\"lnk\" onClick=\"{{toLogin}}\" style=\"font-weight: 500; font-size: 14px\">العودة إلى تسجيل الدخول</button>\n</div>\n</sc-if>\n\n<sc-if value=\"{{editing}}\" hint-placeholder-val=\"{{true}}\">\n<div style=\"display: flex; flex-direction: column; gap: 8px\">\n<h1 ref=\"{{headRef}}\" tabindex=\"-1\" style=\"margin: 0; font-size: clamp(26px, 4.5vw, 34px); font-weight: 700; outline: none\">{{title}}</h1>\n<p style=\"margin: 0; font-size: 15px; line-height: 1.8; color: #3A4860\">{{subtitle}}</p>\n</div>\n\n<sc-if value=\"{{isLogin}}\" hint-placeholder-val=\"{{true}}\">\n<div role=\"group\" aria-label=\"نوع الحساب\" style=\"display: flex; gap: 6px; padding: 6px; background: #FAF7F0; border-radius: 14px\">\n<sc-for list=\"{{roles}}\" as=\"r\" hint-placeholder-count=\"2\">\n<button type=\"button\" aria-pressed=\"{{r.on}}\" onClick=\"{{r.pick}}\" style=\"flex: 1; min-height: 46px; border: 1px solid {{r.border}}; border-radius: 10px; background: {{r.bg}}; color: #0F1E35; font: inherit; font-size: 15px; font-weight: 600; cursor: pointer\">{{r.label}}</button>\n</sc-for>\n</div>\n</sc-if>\n\n<sc-if value=\"{{hasSendErr}}\" hint-placeholder-val=\"{{false}}\"><p role=\"alert\" style=\"margin: 0; padding: 12px 16px; border-radius: 12px; background: #FBEDED; color: #A3282B; font-size: 14px; font-weight: 600\">{{sendErr}}</p></sc-if>\n<sc-if value=\"{{showErr}}\" hint-placeholder-val=\"{{false}}\">\n<p role=\"alert\" style=\"margin: 0; padding: 12px 16px; border-radius: 12px; background: #FBEDED; color: #A3282B; font-size: 14px; font-weight: 600\">صحّح الحقول المشار إليها ثم أعد المحاولة.</p>\n</sc-if>\n\n<form onSubmit=\"{{submit}}\" novalidate style=\"display: flex; flex-direction: column; gap: 18px\">\n\n<sc-if value=\"{{isSignup}}\" hint-placeholder-val=\"{{false}}\">\n<div style=\"display: flex; flex-direction: column; gap: 8px\">\n<label for=\"au-name\" style=\"font-size: 14px; font-weight: 600\">الاسم الكامل</label>\n<input id=\"au-name\" type=\"text\" autocomplete=\"name\" value=\"{{name}}\" onChange=\"{{onName}}\" aria-invalid=\"{{nameInv}}\" aria-describedby=\"au-name-e\" style=\"height: 52px; padding: 0 16px; border: 1px solid {{nameB}}; border-radius: 14px; background: #FAF7F0; font: inherit; font-size: 16px; color: #0F1E35\">\n<sc-if value=\"{{nameErr}}\" hint-placeholder-val=\"{{false}}\"><span id=\"au-name-e\" style=\"font-size: 13px; color: #A3282B\">اكتب اسمك الأول واسم الأب على الأقل.</span></sc-if>\n</div>\n</sc-if>\n\n<sc-if value=\"{{showId}}\" hint-placeholder-val=\"{{true}}\">\n<div style=\"display: flex; flex-direction: column; gap: 8px\">\n<label for=\"au-id\" style=\"font-size: 14px; font-weight: 600\">{{idLabel}}</label>\n<input id=\"au-id\" type=\"text\" autocomplete=\"username\" dir=\"ltr\" value=\"{{id}}\" onChange=\"{{onId}}\" aria-invalid=\"{{idInv}}\" aria-describedby=\"au-id-e\" placeholder=\"{{idPh}}\" style=\"height: 52px; padding: 0 16px; border: 1px solid {{idB}}; border-radius: 14px; background: #FAF7F0; font: inherit; font-size: 16px; color: #0F1E35; text-align: right\">\n<sc-if value=\"{{idErr}}\" hint-placeholder-val=\"{{false}}\"><span id=\"au-id-e\" style=\"font-size: 13px; color: #A3282B\">أدخل بريداً صحيحاً أو رقم هاتف عراقياً من ١١ رقماً يبدأ بـ 07.</span></sc-if>\n</div>\n</sc-if>\n\n<sc-if value=\"{{isOtp}}\" hint-placeholder-val=\"{{false}}\">\n<div style=\"display: flex; flex-direction: column; gap: 8px\">\n<label for=\"au-otp\" style=\"font-size: 14px; font-weight: 600\">رمز التحقق</label>\n<input id=\"au-otp\" type=\"text\" inputmode=\"numeric\" autocomplete=\"one-time-code\" dir=\"ltr\" maxlength=\"6\" value=\"{{otp}}\" onChange=\"{{onOtp}}\" aria-invalid=\"{{otpInv}}\" aria-describedby=\"au-otp-h\" placeholder=\"••••••\" style=\"height: 60px; padding: 0 16px; border: 1px solid {{otpB}}; border-radius: 14px; background: #FAF7F0; font: inherit; font-size: 26px; letter-spacing: 10px; text-align: center; color: #0F1E35\">\n<span id=\"au-otp-h\" style=\"font-size: 13px; color: {{otpHintColor}}\">{{otpHint}}</span>\n</div>\n<div style=\"display: flex; align-items: center; justify-content: space-between; gap: 12px; font-size: 14px; color: #3A4860\">\n<span role=\"status\">{{resendLabel}}</span>\n<sc-if value=\"{{canResend}}\" hint-placeholder-val=\"{{false}}\"><button type=\"button\" class=\"lnk\" onClick=\"{{resend}}\">إعادة الإرسال</button></sc-if>\n</div>\n</sc-if>\n\n<sc-if value=\"{{needsPw}}\" hint-placeholder-val=\"{{true}}\">\n<div style=\"display: flex; flex-direction: column; gap: 8px\">\n<div style=\"display: flex; justify-content: space-between; align-items: center; gap: 12px\">\n<label for=\"au-pw\" style=\"font-size: 14px; font-weight: 600\">{{pwLabel}}</label>\n<sc-if value=\"{{isLogin}}\" hint-placeholder-val=\"{{true}}\"><button type=\"button\" class=\"lnk\" onClick=\"{{toReset}}\" style=\"font-size: 13px\">نسيت كلمة المرور؟</button></sc-if>\n</div>\n<div class=\"fw\" style=\"display: flex; align-items: center; height: 52px; border: 1px solid {{pwB}}; border-radius: 14px; background: #FAF7F0; padding-inline-start: 16px; box-sizing: border-box\">\n<input id=\"au-pw\" type=\"{{pwType}}\" autocomplete=\"{{pwAuto}}\" value=\"{{pw}}\" onChange=\"{{onPw}}\" aria-invalid=\"{{pwInv}}\" aria-describedby=\"au-pw-e\" style=\"flex: 1; min-width: 0; height: 100%; border: none; outline: none; background: transparent; font: inherit; font-size: 16px; color: #0F1E35\">\n<button type=\"button\" onClick=\"{{togglePw}}\" aria-label=\"{{pwToggleLabel}}\" aria-pressed=\"{{pwShown}}\" style=\"flex: 0 0 48px; height: 48px; border: none; background: transparent; display: flex; align-items: center; justify-content: center; cursor: pointer\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#3A4860\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle></svg>\n</button>\n</div>\n<sc-if value=\"{{pwErr}}\" hint-placeholder-val=\"{{false}}\"><span id=\"au-pw-e\" style=\"font-size: 13px; color: #A3282B\">{{pwErrText}}</span></sc-if>\n<sc-if value=\"{{showStrength}}\" hint-placeholder-val=\"{{false}}\">\n<div style=\"display: flex; align-items: center; gap: 10px\">\n<div aria-hidden=\"true\" style=\"flex: 1; display: flex; gap: 4px\">\n<sc-for list=\"{{bars}}\" as=\"b\" hint-placeholder-count=\"4\"><span style=\"flex: 1; height: 5px; border-radius: 4px; background: {{b.bg}}\"></span></sc-for>\n</div>\n<span style=\"font-size: 12px; color: #3A4860; min-width: 96px\">قوة كلمة المرور: {{strengthLabel}}</span>\n</div>\n<span style=\"font-size: 12px; color: #3A4860\">١٠ أحرف على الأقل، تجمع حروفاً وأرقاماً ورمزاً.</span>\n</sc-if>\n</div>\n</sc-if>\n\n<sc-if value=\"{{needsPw2}}\" hint-placeholder-val=\"{{false}}\">\n<div style=\"display: flex; flex-direction: column; gap: 8px\">\n<label for=\"au-pw2\" style=\"font-size: 14px; font-weight: 600\">تأكيد كلمة المرور</label>\n<input id=\"au-pw2\" type=\"{{pwType}}\" autocomplete=\"new-password\" value=\"{{pw2}}\" onChange=\"{{onPw2}}\" aria-invalid=\"{{pw2Inv}}\" style=\"height: 52px; padding: 0 16px; border: 1px solid {{pw2B}}; border-radius: 14px; background: #FAF7F0; font: inherit; font-size: 16px; color: #0F1E35\">\n<sc-if value=\"{{pw2Err}}\" hint-placeholder-val=\"{{false}}\"><span style=\"font-size: 13px; color: #A3282B\">كلمتا المرور غير متطابقتين.</span></sc-if>\n</div>\n</sc-if>\n\n<sc-if value=\"{{isSignup}}\" hint-placeholder-val=\"{{false}}\">\n<label style=\"display: flex; align-items: flex-start; gap: 10px; font-size: 14px; line-height: 1.8; color: #2B3A52; cursor: pointer\">\n<input type=\"checkbox\" checked=\"{{agree}}\" onChange=\"{{onAgree}}\" style=\"width: 20px; height: 20px; margin-top: 4px; accent-color: #0F1E35\">\n<span>عمري ١٨ سنة أو أكثر، وأوافق على <a href=\"Legal.dc.html\" style=\"font-weight: 600; text-decoration: underline; text-decoration-color: #C9A24D; text-underline-offset: 5px\">شروط الاستخدام وسياسة الخصوصية</a>.</span>\n</label>\n<sc-if value=\"{{agreeErr}}\" hint-placeholder-val=\"{{false}}\"><span style=\"font-size: 13px; color: #A3282B\">يلزم الموافقة على الشروط لإنشاء الحساب.</span></sc-if>\n</sc-if>\n\n<sc-if value=\"{{isLogin}}\" hint-placeholder-val=\"{{true}}\">\n<label style=\"display: flex; align-items: center; gap: 10px; font-size: 14px; color: #2B3A52; cursor: pointer\">\n<input type=\"checkbox\" checked=\"{{remember}}\" onChange=\"{{onRemember}}\" style=\"width: 20px; height: 20px; accent-color: #0F1E35\">تذكّرني على هذا الجهاز</label>\n</sc-if>\n\n<button type=\"submit\" disabled=\"{{sending}}\" style=\"min-height: 54px; border: none; border-radius: 14px; background: #C9A24D; color: #0F1E35; font: inherit; font-size: 16px; font-weight: 700; cursor: pointer\">{{cta}}</button>\n</form>\n\n<div style=\"padding-top: 18px; border-top: 1px solid #F0EBDF; display: flex; flex-direction: column; gap: 12px; font-size: 15px; color: #3A4860\">\n<sc-if value=\"{{showUserSwitch}}\" hint-placeholder-val=\"{{true}}\">\n<span>ليس لديك حساب؟ <button type=\"button\" class=\"lnk\" onClick=\"{{toSignup}}\">أنشئ حساباً جديداً</button></span>\n</sc-if>\n<sc-if value=\"{{showLawyerJoin}}\" hint-placeholder-val=\"{{false}}\">\n<div style=\"display: flex; flex-direction: column; gap: 8px; padding: 16px; border-radius: 16px; background: #FAF7F0\">\n<span style=\"font-weight: 700; color: #0F1E35\">محامٍ جديد على المنصة؟</span>\n<span style=\"font-size: 14px; line-height: 1.8\">لا يُفعَّل حساب المحامي إلا بعد التحقق من قيده في النقابة المختصة.</span>\n<a href=\"LawyerRegister.dc.html\" style=\"align-self: flex-start; font-weight: 700; text-decoration: underline; text-decoration-color: #C9A24D; text-underline-offset: 6px\">قدّم طلب الانضمام</a>\n</div>\n</sc-if>\n<sc-if value=\"{{showBack}}\" hint-placeholder-val=\"{{false}}\">\n<span>لديك حساب بالفعل؟ <button type=\"button\" class=\"lnk\" onClick=\"{{toLogin}}\">تسجيل الدخول</button></span>\n</sc-if>\n<span style=\"display: flex; align-items: center; gap: 8px; font-size: 13px\">\n<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#3A4860\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"5\" y=\"11\" width=\"14\" height=\"10\" rx=\"2\"></rect><path d=\"M8 11V8a4 4 0 0 1 8 0v3\"></path></svg>اتصال مشفّر، ولا نشارك بياناتك إلا وفق سياسة الخصوصية.</span>\n</div>\n</sc-if>\n</div>\n\n<div class=\"auth-art\" aria-hidden=\"true\" style=\"flex: 1 1 420px; min-height: 620px; position: relative; overflow: hidden; border-radius: clamp(20px, 3vw, 28px); background: #0F1E35\">\n<img src=\"/_blob/b0f2156a49e2d05bf0c9db2e41f7a577\" alt=\"\" style=\"position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: left center\">\n<div style=\"position: absolute; inset: 0; background: linear-gradient(to top, rgba(11,23,41,0.96) 10%, rgba(11,23,41,0.55) 55%, rgba(11,23,41,0.2) 100%)\"></div>\n<div style=\"position: absolute; inset-inline: 0; bottom: 0; padding: 40px; display: flex; flex-direction: column; gap: 16px; color: #D5DBE5\">\n<span style=\"font-size: 30px; line-height: 1.45; font-weight: 700; color: #FFFFFF\">بوابتك إلى خدمة<br>قانونية موثوقة</span>\n<span style=\"font-size: 15px\">محامون موثّقون من النقابة المختصة</span>\n<span style=\"font-size: 15px\">قوانين بمصادرها الرسمية ونطاق تطبيقها</span>\n<span style=\"font-size: 15px\">استشارات تصل إلى المحامي الذي تختاره</span>\n</div>\n</div>\n</section>\n\n</main>\n<div style=\"height: clamp(40px, 6vw, 72px)\"></div>\n<dc-import name=\"Footer\" hint-size=\"100%,460px\"></dc-import>\n</div>", "\nbody{margin:0;background:#FAF7F0}\na{color:#0F1E35;text-decoration:none}\n:focus-visible{outline:2px solid #C9A24D;outline-offset:2px}\n.fw:focus-within{outline:2px solid #C9A24D;outline-offset:2px}\n.lnk{border:none;background:transparent;padding:0;font:inherit;font-weight:700;color:#0F1E35;cursor:pointer;text-decoration:underline;text-decoration-color:#C9A24D;text-underline-offset:6px;min-height:32px}\n@media (max-width:860px){.auth-art{display:none !important}}\n", function (DCLogic, React) {
"use strict";
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { role: 'user', mode: 'login', flow: '', id: '', pw: '', pw2: '', name: '', otp: '', agree: false, remember: true, showPw: false, tried: false, done: false, doneKind: '', wait: 0, sending: false, sendErr: '', ticket: '', token: '' };
    this.headRef = (el) => { this.headEl = el; };
  }
  componentDidUpdate(pp, ps) {
    if (ps.mode !== this.state.mode && this.headEl) { try { this.headEl.focus(); } catch (e) {} }
  }
  componentWillUnmount() { clearInterval(this.tick); }
  startTimer() {
    clearInterval(this.tick);
    this.setState({ wait: 60 });
    this.tick = setInterval(() => { const w = this.state.wait - 1; this.setState({ wait: Math.max(0, w) }); if (w <= 0) clearInterval(this.tick); }, 1000);
  }
  go(mode, extra) { this.setState({ mode, tried: false, done: false, pw: '', pw2: '', otp: '', sendErr: '', ...(extra || {}) }); }
  live(route, body, ok) {
    if (this.state.sending) return;
    this.setState({ sending: true, sendErr: '' });
    window.MQ.post(route, body).then((r) => { this.setState({ sending: false }); ok(r); }).catch((er) => { if (er.data && er.data.code === 'restart') this.go('login', { flow: '' }); this.setState({ sending: false, sendErr: er.message }); });
  }
  renderVals() {
    const s = this.state;
    const D = '٠١٢٣٤٥٦٧٨٩', P = '۰۱۲۳۴۵۶۷۸۹';
    const toW = (x) => String(x).replace(/[٠-٩]/g, (d) => D.indexOf(d)).replace(/[۰-۹]/g, (d) => P.indexOf(d));
    const ar = (x) => String(x).replace(/[0-9]/g, (d) => D[d]);
    const id = toW(s.id).trim().replace(/[\s-]/g, '');
    const pw = s.pw;
    const hasDigit = /[0-9٠-٩۰-۹]/.test(pw);
    const hasLetter = /[A-Za-zء-ي]/.test(pw);
    const hasSym = /[^A-Za-z0-9ء-ي٠-٩۰-۹\s]/.test(pw);
    const score = [pw.length >= 10, hasDigit, hasLetter, hasSym].filter(Boolean).length;
    const strongEnough = pw.length >= 10 && hasDigit && hasLetter;
    const newPw = s.mode === 'signup' || s.mode === 'newpw';
    const v = {
      id: /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(id) || /^(\+964|00964|0)7\d{9}$/.test(id),
      pw: newPw ? strongEnough : pw.length >= 8,
      name: s.name.trim().split(/\s+/).length >= 2,
      pw2: s.pw2.length > 0 && s.pw2 === s.pw,
      agree: s.agree,
      otp: /^\d{6}$/.test(toW(s.otp))
    };
    const needMap = { login: ['id', 'pw'], signup: ['name', 'id', 'pw', 'pw2', 'agree'], reset: ['id'], otp: ['otp'], newpw: ['pw', 'pw2'] };
    const need = needMap[s.mode];
    const err = (k) => s.tried && need.includes(k) && !v[k];
    const B = (k) => (err(k) ? '#A3282B' : '#8F8778');
    const I = (k) => (err(k) ? 'true' : 'false');
    const sColor = score <= 1 ? '#A3282B' : score <= 3 ? '#8F8778' : '#0F1E35';
    const isLawyer = s.role === 'lawyer';
    const au = (() => { try { return (JSON.parse(window.localStorage.getItem('mq_cms') || '{}') || {}).auth || {}; } catch (e) { return {}; } })();
    const titles0 = {
      login: ['تسجيل الدخول', isLawyer ? 'ادخل إلى لوحة المحامي لإدارة طلبات الاستشارة والمواعيد.' : 'ادخل إلى حسابك لمتابعة طلبات الاستشارة.'],
      signup: ['إنشاء حساب جديد', 'أنشئ حسابك لطلب الاستشارات ومتابعتها وحفظ القوانين والنماذج.'],
      reset: ['استعادة كلمة المرور', 'أدخل بريدك أو رقم هاتفك المسجّل، وسنرسل لك رمز تحقق.'],
      otp: ['أدخل رمز التحقق', 'أرسلنا رمزاً من ستة أرقام إلى الهاتف أو البريد الذي أدخلته. صلاحيته عشر دقائق.'],
      newpw: ['كلمة مرور جديدة', 'اختر كلمة مرور قوية لم تستخدمها من قبل.']
    };
    const titles = {}; Object.keys(titles0).forEach((k) => { titles[k] = [au[k + '_t'] || titles0[k][0], au[k + '_s'] || titles0[k][1]]; });
    const doneMap = {
      login: ['مرحباً بعودتك', isLawyer ? 'سجّلت الدخول إلى لوحة المحامي.' : 'سجّلت الدخول إلى حسابك.'],
      signup: ['فُعّل حسابك', 'أصبح بإمكانك طلب الاستشارات ومتابعتها من حسابك.'],
      newpw: ['تغيّرت كلمة المرور', 'سجّل الدخول الآن بكلمة المرور الجديدة.']
    };
    const ctas = { login: 'تسجيل الدخول', signup: 'إنشاء الحساب', reset: 'إرسال رمز التحقق', otp: 'تأكيد الرمز', newpw: 'حفظ كلمة المرور' };
    const dk = doneMap[s.doneKind] || doneMap.login;
    return {
      done: s.done, editing: !s.done, doneTitle: dk[0], doneText: dk[1],
      title: titles[s.mode][0], subtitle: titles[s.mode][1], cta: ctas[s.mode],
      isLogin: s.mode === 'login', isSignup: s.mode === 'signup', isOtp: s.mode === 'otp',
      showId: ['login', 'signup', 'reset'].includes(s.mode),
      needsPw: ['login', 'signup', 'newpw'].includes(s.mode),
      needsPw2: newPw,
      pwLabel: s.mode === 'newpw' ? 'كلمة المرور الجديدة' : 'كلمة المرور',
      showErr: s.tried && !need.every((k) => v[k]),
      roles: [{ k: 'user', label: 'مستخدم' }, { k: 'lawyer', label: 'محامٍ' }].map((r) => ({
        label: r.label, on: r.k === s.role ? 'true' : 'false', bg: r.k === s.role ? '#FFFFFF' : 'transparent', border: r.k === s.role ? '#0F1E35' : 'transparent',
        pick: () => this.setState({ role: r.k, tried: false })
      })),
      name: s.name, id: s.id, pw: s.pw, pw2: s.pw2, otp: s.otp, agree: s.agree, remember: s.remember,
      nameErr: err('name'), idErr: err('id'), pwErr: err('pw'), pw2Err: err('pw2'), agreeErr: err('agree'),
      nameB: B('name'), idB: B('id'), pwB: B('pw'), pw2B: B('pw2'), otpB: B('otp'),
      nameInv: I('name'), idInv: I('id'), pwInv: I('pw'), pw2Inv: I('pw2'), otpInv: I('otp'),
      pwErrText: newPw ? 'استخدم ١٠ أحرف على الأقل تجمع حروفاً وأرقاماً.' : 'كلمة المرور ٨ أحرف على الأقل.',
      otpHint: err('otp') ? 'الرمز ستة أرقام.' : (window.MQ && window.MQ.live ? 'أدخل الرمز المرسل إلى بريدك الإلكتروني.' : 'في هذا النموذج التجريبي يُقبل أي رمز من ستة أرقام.'),
      sending: s.sending, sendErr: s.sendErr, hasSendErr: !!s.sendErr,
      idLabel: window.MQ && window.MQ.live ? 'البريد الإلكتروني' : 'البريد الإلكتروني أو رقم الهاتف', idPh: window.MQ && window.MQ.live ? 'name@example.com' : '07XXXXXXXXX',
      otpHintColor: err('otp') ? '#A3282B' : '#3A4860',
      resendLabel: s.wait > 0 ? 'يمكنك طلب رمز جديد بعد ' + ar(s.wait) + ' ثانية' : 'لم يصلك الرمز؟',
      canResend: s.wait === 0,
      resend: () => { if (window.MQ && window.MQ.live) window.MQ.post('auth/resend', { flow: s.flow, id: s.id, ticket: s.ticket }).catch((er) => this.setState({ sendErr: er.message })); this.startTimer(); },
      pwType: s.showPw ? 'text' : 'password', pwShown: s.showPw ? 'true' : 'false',
      pwAuto: newPw ? 'new-password' : 'current-password',
      pwToggleLabel: s.showPw ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور',
      showStrength: newPw && pw.length > 0,
      bars: [0, 1, 2, 3].map((i) => ({ bg: i < score ? sColor : '#ECE6D8' })),
      strengthLabel: score <= 1 ? 'ضعيفة' : score <= 3 ? 'متوسطة' : 'قوية',
      showUserSwitch: s.mode === 'login' && !isLawyer,
      showLawyerJoin: s.mode === 'login' && isLawyer,
      showBack: s.mode !== 'login',
      onName: (e) => this.setState({ name: e.target.value }),
      onId: (e) => this.setState({ id: e.target.value }),
      onPw: (e) => this.setState({ pw: e.target.value }),
      onPw2: (e) => this.setState({ pw2: e.target.value }),
      onOtp: (e) => this.setState({ otp: e.target.value }),
      onAgree: (e) => this.setState({ agree: e.target.checked }),
      onRemember: (e) => this.setState({ remember: e.target.checked }),
      togglePw: () => this.setState({ showPw: !s.showPw }),
      toReset: () => this.go('reset'),
      toSignup: () => this.go('signup'),
      toLogin: () => this.go('login', { flow: '' }),
      headRef: this.headRef,
      submit: (e) => {
        e.preventDefault();
        if (!need.every((k) => v[k])) { this.setState({ tried: true }); return; }
        if (window.MQ && window.MQ.live) {
          const doneOk = (kind) => (r) => { if (r && r.me) window.MQ.me = r.me; this.setState({ done: true, doneKind: kind, tried: false }); };
          if (s.mode === 'login') this.live('auth/login', { id: s.id, pw: s.pw, remember: s.remember }, (r) => { if (r.otp) { this.go('otp', { flow: r.flow, ticket: r.ticket || '', pw: '' }); this.startTimer(); } else doneOk('login')(r); });
          else if (s.mode === 'signup') this.live('auth/signup', { role: s.role, name: s.name, id: s.id, pw: s.pw, agree: s.agree }, () => { this.go('otp', { flow: 'signup' }); this.startTimer(); });
          else if (s.mode === 'reset') this.live('auth/reset', { id: s.id }, () => { this.go('otp', { flow: 'reset' }); this.startTimer(); });
          else if (s.mode === 'otp') this.live('auth/otp', { flow: s.flow, id: s.id, otp: toW(s.otp), ticket: s.ticket, remember: s.remember }, (r) => { if (s.flow === 'reset') this.go('newpw', { token: r.token }); else doneOk(s.flow === 'signup' ? 'signup' : 'login')(r); });
          else if (s.mode === 'newpw') this.live('auth/newpw', { token: s.token, pw: s.pw }, () => this.setState({ done: true, doneKind: 'newpw', tried: false }));
          return;
        }
        if (s.mode === 'login') this.setState({ done: true, doneKind: 'login', tried: false });
        else if (s.mode === 'signup') { this.go('otp', { flow: 'signup', pw: s.pw }); this.startTimer(); }
        else if (s.mode === 'reset') { this.go('otp', { flow: 'reset' }); this.startTimer(); }
        else if (s.mode === 'otp') { if (s.flow === 'reset') this.go('newpw'); else this.setState({ done: true, doneKind: 'signup', tried: false }); }
        else if (s.mode === 'newpw') this.setState({ done: true, doneKind: 'newpw', tried: false });
      }
    };
  }
}
return Component;
});
