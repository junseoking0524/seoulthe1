/* ===== 서울더원마취통증의학과의원 · 공용 스크립트 ===== */
(function () {
  'use strict';

  // ---- 설정값 (연락처/링크) ----
  var PHONE = '031-697-8972';
  var PHONE_TEL = 'tel:031-697-8972';
  var BOOK_URL = 'https://booking.naver.com/booking/13/bizes/1378738';
  var BLOG_URL = 'https://blog.naver.com/seoulthe1';
  var ADDR = '경기 성남시 분당구 판교로255번길 9-22<br>판교우림더블유시티 2층 218,223호 (삼평동)';

  // ---- 네비게이션 메뉴 ----
  var MENUS = [
    { key: '소개', label: '소개', href: 'about.html', desc: '서울더원마취통증의학과의원을 소개합니다.',
      items: [['진료과목', 'about.html#depts'], ['의료진 소개', 'about.html#doctor'], ['병원소개', 'about.html#facility'], ['비급여항목', 'fees.html']] },
    { key: '치료안내', label: '치료안내', href: 'treatment.html', desc: '통증의 원인부터 찾는 비수술 치료.',
      items: [['관절치료 (SI치료)', 'treatment.html#care-01'], ['척추치료 (CI치료)', 'treatment.html#care-02'], ['신경성형시술 (PEN 시술)', 'treatment.html#care-03'], ['재생주사·수액치료', 'treatment.html#care-04'], ['체외충격파 (ESWT)', 'treatment.html#care-05'], ['도수치료', 'treatment.html#care-06']] },
    { key: '진료시간', label: '진료시간', href: 'hours.html', items: [] },
    { key: '오시는 길', label: '오시는 길', href: 'location.html', items: [] },
    { key: '예약', label: '예약', href: BOOK_URL, external: true, items: [] }
  ];

  // page -> active menu key
  var PAGE_MENU = { about: '소개', fees: '소개', treatment: '치료안내', hours: '진료시간', location: '오시는 길' };

  var ICON = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M6.6 10.8a13 13 0 0 0 5.6 5.6l1.9-1.9a1 1 0 0 1 1-.24c1.1.37 2.3.57 3.5.57a1 1 0 0 1 1 1V19a1 1 0 0 1-1 1A16 16 0 0 1 4 4a1 1 0 0 1 1-1h3.2a1 1 0 0 1 1 1c0 1.2.2 2.4.57 3.5a1 1 0 0 1-.24 1z"></path></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"></path><circle cx="12" cy="10" r="2.5"></circle></svg>',
    cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="16" rx="2"></rect><path d="M3 9h18M8 3v3M16 3v3"></path></svg>',
    blog: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.9 3 3 6.4 3 10.7c0 2.7 1.7 5.1 4.3 6.5L6 21l3.7-2c.7.1 1.5.2 2.3.2 5.1 0 9-3.4 9-7.7S17.1 3 12 3z"></path></svg>'
  };

  function headerHTML(page) {
    var activeKey = PAGE_MENU[page] || '';
    var navItems = MENUS.map(function (m, i) {
      var cls = 'nav-item' + (m.key === activeKey ? ' active' : '');
      var attrs = m.external ? ' target="_blank" rel="noopener"' : '';
      return '<a class="' + cls + '" href="' + m.href + '"' + attrs + ' data-menu="' + i + '">' + m.label + '</a>';
    }).join('');
    return '' +
      '<div class="topbar"><div class="wrap topbar-in">' +
        '<span>상담 및 예약문의 <a class="tphone" href="' + PHONE_TEL + '">' + PHONE + '</a></span>' +
        '<span class="quick">' +
          '<a class="qbtn call" href="' + PHONE_TEL + '">' + ICON.phone + '<span class="tx">전화상담</span></a>' +
          '<a class="qbtn map" href="location.html">' + ICON.pin + '<span class="tx">오시는 길</span></a>' +
          '<a class="qbtn book" href="' + BOOK_URL + '" target="_blank" rel="noopener">' + ICON.cal + '<span class="tx">네이버 예약</span></a>' +
          '<a class="qbtn blog" href="' + BLOG_URL + '" target="_blank" rel="noopener">' + ICON.blog + '<span class="tx">블로그</span></a>' +
        '</span>' +
      '</div></div>' +
      '<div class="headmain"><div class="wrap headmain-in">' +
        '<a class="brand" href="index.html"><img src="images/logo.png" alt="서울더원마취통증의학과의원"></a>' +
        '<nav class="nav">' + navItems + '</nav>' +
        '<button class="hamb" aria-label="메뉴"><span></span><span></span><span></span></button>' +
        '<div class="mega"><div class="wrap mega-in">' +
          '<div><div class="mega-label">SUBMENU</div><div class="mega-title" data-mt></div><div class="mega-bar"></div><div class="mega-desc" data-md></div></div>' +
          '<div class="mega-links" data-ml></div>' +
        '</div></div>' +
      '</div></div>';
  }

  function mobileNavHTML() {
    var groups = MENUS.map(function (m) {
      var subs = m.items.map(function (it) { return '<a href="' + it[1] + '">' + it[0] + '</a>'; }).join('');
      var head = m.external ? '<a href="' + m.href + '" target="_blank" rel="noopener">' + m.label + '</a>'
        : '<a href="' + m.href + '">' + m.label + '</a>';
      return '<div class="mgrp">' + head + (subs ? '<div class="sub">' + subs + '</div>' : '') + '</div>';
    }).join('');
    return '<div class="mask"></div><div class="mnav"><div class="mclose">&times;</div>' + groups + '</div>';
  }

  function footerHTML() {
    return '<div class="wrap foot-in">' +
        '<div><div class="fname">서울<span style="color:var(--orange-l)">더원</span>마취통증의학과의원</div>' +
          '<p class="faddr">' + ADDR + '<br>대표전화 <a href="' + PHONE_TEL + '">' + PHONE + '</a></p></div>' +
        '<div><div class="fh">진료시간</div><div class="ft">평일 09:00 – 20:00<br>점심 13:30 – 14:30<br><b>주말·공휴일 휴진</b></div>' +
          '<div class="ft-note">※ 도수치료 · 물리치료는 점심시간 없이 진료</div></div>' +
        '<div class="foot-btns">' +
          '<a class="o" href="' + BOOK_URL + '" target="_blank" rel="noopener">네이버 예약하기</a>' +
          '<a class="g" href="location.html">오시는 길</a>' +
          '<a class="b" href="' + BLOG_URL + '" target="_blank" rel="noopener">' + ICON.blog + '<span>블로그</span></a>' +
        '</div>' +
      '</div>' +
      '<div class="foot-copy">Copyright© 서울더원마취통증의학과의원. ALL RIGHT RESERVED</div>';
  }

  function initMega() {
    var mega = document.querySelector('.mega');
    var mt = mega.querySelector('[data-mt]'), md = mega.querySelector('[data-md]'), ml = mega.querySelector('[data-ml]');
    var wrap = document.querySelector('.headmain');
    var items = document.querySelectorAll('.nav .nav-item');
    var hideTimer;
    function show(i) {
      clearTimeout(hideTimer);
      var m = MENUS[i];
      if (!m.items.length) { hide(); return; }
      mt.textContent = m.label;
      md.textContent = m.desc || '아래에서 세부 항목을 선택해 주세요.';
      ml.innerHTML = m.items.map(function (it) { return '<a class="mega-link" href="' + it[1] + '">' + it[0] + '</a>'; }).join('');
      mega.classList.add('open');
    }
    function hide() { hideTimer = setTimeout(function () { mega.classList.remove('open'); }, 140); }
    items.forEach(function (el) {
      el.addEventListener('mouseenter', function () { show(+el.dataset.menu); });
      el.addEventListener('mouseleave', hide);
    });
    mega.addEventListener('mouseenter', function () { clearTimeout(hideTimer); });
    mega.addEventListener('mouseleave', hide);
  }

  function initMobile() {
    var hamb = document.querySelector('.hamb');
    var mnav = document.querySelector('.mnav');
    var mask = document.querySelector('.mask');
    if (!hamb || !mnav) return;
    function open() { mnav.classList.add('open'); mask.classList.add('on'); }
    function close() { mnav.classList.remove('open'); mask.classList.remove('on'); }
    hamb.addEventListener('click', open);
    mask.addEventListener('click', close);
    mnav.querySelector('.mclose').addEventListener('click', close);
  }

  function initReveal() {
    var els = document.querySelectorAll('.reveal, .reveal-l, .reveal-r');
    if (!els.length) return;
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  }

  function initGallery() {
    var big = document.querySelector('[data-gallery]');
    if (!big) return;
    var imgEl = big.querySelector('[data-fac-img]');
    var enEl = big.querySelector('[data-fac-en]');
    var nameEl = big.querySelector('[data-fac-name]');
    var meritsEl = big.querySelector('[data-fac-merits]');
    var thumbs = Array.prototype.slice.call(document.querySelectorAll('.fac-thumb'));
    var dots = Array.prototype.slice.call(document.querySelectorAll('.fac-dots i'));
    var data = window.FACILITIES || [];
    var idx = 0, paused = false, timer;
    function render() {
      var f = data[idx]; if (!f) return;
      imgEl.src = f.img; imgEl.alt = f.name;
      enEl.textContent = f.en; nameEl.textContent = f.name;
      meritsEl.innerHTML = f.merits.map(function (m) { return '<span>' + m + '</span>'; }).join('');
      thumbs.forEach(function (t, i) { t.classList.toggle('on', i === idx); });
      dots.forEach(function (d, i) { d.classList.toggle('on', i === idx); });
    }
    function go(i) { idx = (i + data.length) % data.length; render(); }
    thumbs.forEach(function (t, i) {
      t.addEventListener('click', function () { go(i); });
      t.addEventListener('mouseenter', function () { go(i); });
    });
    dots.forEach(function (d, i) { d.addEventListener('click', function () { go(i); }); });
    big.addEventListener('mouseenter', function () { paused = true; });
    big.addEventListener('mouseleave', function () { paused = false; });
    timer = setInterval(function () { if (!paused) go(idx + 1); }, 3000);
    render();
  }

  function initSpy() {
    var secs = Array.prototype.slice.call(document.querySelectorAll('[data-care-sec]'));
    if (!secs.length) return;
    var links = {};
    document.querySelectorAll('.spy a[href^="#care"], .mspy a[href^="#care"]').forEach(function (a) {
      var k = a.getAttribute('href').slice(1);
      (links[k] = links[k] || []).push(a);
    });
    var mspy = document.querySelector('.mspy');
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          Object.keys(links).forEach(function (k) {
            links[k].forEach(function (a) { a.classList.toggle('on', k === e.target.id); });
          });
          if (mspy) {
            var act = mspy.querySelector('a.on');
            if (act) { var sc = mspy.querySelector('.mspy-track') || mspy; sc.scrollTo({ left: act.offsetLeft - sc.clientWidth / 2 + act.clientWidth / 2, behavior: 'smooth' }); }
          }
        }
      });
    }, { rootMargin: '-42% 0px -52% 0px' });
    secs.forEach(function (s) { spy.observe(s); });
  }

  function initAbout() {
    if ((document.body.getAttribute('data-page') || '') !== 'about') return;
    var groups = Array.prototype.slice.call(document.querySelectorAll('[data-ag]'));
    if (!groups.length) return;
    var MAP = { '#depts': 'depts', '#doctor': 'doctor', '#facility': 'facility' };
    function apply() {
      var only = MAP[location.hash] || '';
      groups.forEach(function (el) {
        el.style.display = (!only || el.getAttribute('data-ag') === only) ? '' : 'none';
      });
      if (only) {
        // 단일 섹션만 보일 땐 상단(서브히어로)에서 시작
        requestAnimationFrame(function () { window.scrollTo(0, 0); });
      }
    }
    apply();
    window.addEventListener('hashchange', apply);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var page = document.body.getAttribute('data-page') || '';
    var h = document.getElementById('site-header');
    if (h) { h.className = 'site-header'; h.innerHTML = headerHTML(page); h.insertAdjacentHTML('afterend', mobileNavHTML()); }
    var f = document.getElementById('site-footer');
    if (f) { f.className = 'site-footer'; f.innerHTML = footerHTML(); }
    initAbout();
    initMega(); initMobile(); initReveal(); initGallery(); initSpy();
  });
})();
