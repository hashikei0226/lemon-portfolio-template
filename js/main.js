// =============================
// main.js — Lemon Portfolio Template
// =============================
// 使い方：
//   「js/main.jsに〇〇を追加して」と Gemini CLI に伝えてください
//   GEMINI_PROMPT.md にコピペで使えるプロンプトが載っています
// =============================


// =============================
// ヘッダー：スクロール時に背景を追加
// スクロールすると半透明の背景が現れる
// =============================
const header = document.getElementById('header');

if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  });
}


// =============================
// スクロールアニメーション
// =============================
// Gemini CLI へのプロンプト例：
//   js/main.jsに、スクロールしたときに各セクションがふわっと表示される
//   アニメーションを追加して。HTMLやCSSは変えないで、JavaScriptだけで実装して。


// =============================
// ハンバーガーメニュー（スマホ用）
// =============================
// Gemini CLI へのプロンプト例：
//   スマホ用のハンバーガーメニューを追加したい。
//   index.htmlのheaderにボタンを追加して、
//   js/main.jsに開閉の処理を書いて。
//   css/style.cssにもスタイルを追加して。


// =============================
// タイピングアニメーション
// =============================
function typeText(element, text, speed, callback) {
  let i = 0;
  element.textContent = '';
  element.classList.add('is-typing');

  const timer = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
      // タイピング終了後、少し待ってからカーソルを消す
      setTimeout(() => {
        element.classList.remove('is-typing');
        // Glitch用のdata-text属性を追加
        element.setAttribute('data-text', text);
        if (callback) callback();
      }, 500);
    }
  }, speed);
}

document.addEventListener('DOMContentLoaded', () => {
  const nameJa = document.querySelector('.hero__name-ja');
  const nameEn = document.querySelector('.hero__name-en');

  if (nameJa && nameEn) {
    const textJa = nameJa.textContent.trim();
    const textEn = nameEn.textContent.trim();
    
    // 初期状態を空にする
    nameJa.textContent = '';
    nameEn.textContent = '';
    
    // 日本語名のタイピング開始
    setTimeout(() => {
      typeText(nameJa, textJa, 150, () => {
        // 英語名のタイピング開始
        typeText(nameEn, textEn, 80);
      });
    }, 800);
  }

  // --- デジタルノイズの生成 ---
  function createNoise() {
    const hero = document.getElementById('hero');
    if (!hero) return;

    for (let i = 0; i < 20; i++) {
      const noise = document.createElement('span');
      noise.style.position = 'absolute';
      noise.style.width = Math.random() * 50 + 'px';
      noise.style.height = '1px';
      noise.style.background = Math.random() > 0.5 ? 'var(--color-primary)' : 'var(--color-accent)';
      noise.style.top = Math.random() * 100 + '%';
      noise.style.left = Math.random() * 100 + '%';
      noise.style.opacity = Math.random() * 0.5;
      noise.style.pointerEvents = 'none';
      noise.style.zIndex = '0';
      
      hero.appendChild(noise);
      
      // アニメーション
      noise.animate([
        { transform: 'translateX(0)', opacity: 0 },
        { transform: 'translateX(' + (Math.random() - 0.5) * 100 + 'px)', opacity: 0.5 },
        { transform: 'translateX(0)', opacity: 0 }
      ], {
        duration: Math.random() * 3000 + 2000,
        iterations: Infinity,
        easing: 'steps(4)'
      });
    }
  }
  createNoise();

  // --- アイコンの修正（HTMLを変更せずにInstagramアイコンを正しくする） ---
  const links = document.querySelectorAll('.contact__link');
  links.forEach(link => {
    if (link.textContent.includes('Instagram')) {
      const path = link.querySelector('path');
      if (path) {
        // InstagramのSVGパスに差し替え
        path.setAttribute('d', 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.44-.645-1.44-1.44s.645-1.44 1.44-1.44z');
      }
    }
  });

  // --- 写真の組み立てアニメーション ---
  const heroImage = document.querySelector('.hero__image');
  const imageWrap = document.querySelector('.hero__image-wrap');

  if (heroImage && imageWrap) {
    const rows = 4;
    const cols = 4;
    const fragments = [];

    // 元の画像を一時的に隠す
    heroImage.style.visibility = 'hidden';

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const frag = document.createElement('div');
        frag.className = 'hero__image-fragment';
        
        // サイズと位置の設定
        frag.style.width = `${100 / cols}%`;
        frag.style.height = `${100 / rows}%`;
        frag.style.top = `${(r * 100) / rows}%`;
        frag.style.left = `${(c * 100) / cols}%`;
        
        // 背景画像の設定（元の画像を使用）
        frag.style.backgroundImage = `url(${heroImage.src})`;
        frag.style.backgroundSize = `${cols * 100}% ${rows * 100}%`;
        frag.style.backgroundPosition = `${(c * 100) / (cols - 1)}% ${(r * 100) / (rows - 1)}%`;
        
        // 初期状態をバラバラにする
        const randomX = (Math.random() - 0.5) * 600;
        const randomY = (Math.random() - 0.5) * 600;
        const randomRotate = (Math.random() - 0.5) * 120;
        
        frag.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
        frag.style.opacity = '0';
        
        imageWrap.appendChild(frag);
        fragments.push(frag);
      }
    }

    // アニメーション実行
    setTimeout(() => {
      fragments.forEach(frag => {
        frag.style.transform = 'translate(0, 0) rotate(0deg)';
        frag.style.opacity = '1';
      });
    }, 100);

    // 終了後に元の画像に戻す
    setTimeout(() => {
      heroImage.style.visibility = 'visible';
      // フェードアウトさせてから削除（スムーズにするため）
      fragments.forEach(frag => {
        frag.style.transition = 'opacity 0.5s ease';
        frag.style.opacity = '0';
        setTimeout(() => frag.remove(), 500);
      });
    }, 1500);
  }
});


// =============================
// その他（自由に追加してね）
// =============================
