/**
 * Main JavaScript
 * 主要邏輯：渲染內容、處理交互
 */

class NotThinJustin {
  constructor(config) {
    this.config = config;
    this.init();
  }

  /**
   * 初始化
   */
  init() {
    this.renderSystemStatus();
    this.renderVersion();
    this.renderLogo();
    this.renderTitle();
    this.renderSubtitle();
    this.renderConsoleMessage();
    this.renderInfoCards();
    this.renderSocialLinks();
    this.renderQuote();
    this.initEasterEgg();
  }

  /**
   * 渲染系統狀態
   */
  renderSystemStatus() {
    const container = document.querySelector('.system-status');
    if (!container) return;

    container.innerHTML = this.config.systemStatus
      .map(status => `
        <div class="status-line">
          <span class="status-indicator"></span>
          <span>${status.label}: ${status.value}</span>
        </div>
      `)
      .join('');
  }

  /**
   * 渲染版本資訊
   */
  renderVersion() {
    const container = document.querySelector('.version');
    if (!container) return;

    container.innerHTML = `
      ${this.config.personal.domain} // ${this.config.personal.version}<br>
      High-capacity system online.
    `;
  }

  /**
   * 渲染 Logo
   */
  renderLogo() {
    const container = document.querySelector('.logo');
    if (!container) return;

    container.textContent = this.config.personal.initial;
  }

  /**
   * 渲染主標題
   */
  renderTitle() {
    const container = document.querySelector('.main-title');
    if (!container) return;

    const { title, titleHighlight } = this.config.personal;
    const highlighted = title.replace(
      titleHighlight,
      `<span class="main-title__highlight">${titleHighlight}</span>`
    );
    container.innerHTML = highlighted + '.';
  }

  /**
   * 渲染副標題
   */
  renderSubtitle() {
    const container = document.querySelector('.subtitle-cn');
    if (!container) return;

    container.textContent = this.config.personal.subtitle;
  }

  /**
   * 渲染 Console 訊息
   */
  renderConsoleMessage() {
    const container = document.querySelector('.system-msg');
    if (!container) return;

    const { label, content } = this.config.consoleMessage;
    container.innerHTML = `
      <div class="system-msg__label">${label}</div>
      <div class="system-msg__content">
        ${content.join('<br>')}
      </div>
    `;
  }

  /**
   * 渲染資訊卡片
   */
  renderInfoCards() {
    const container = document.querySelector('.info-grid');
    if (!container) return;

    container.innerHTML = this.config.infoCards
      .map(card => `
        <div class="info-card">
          <div class="info-card__label">${card.label}</div>
          <div class="info-card__value">${card.value}</div>
        </div>
      `)
      .join('');
  }

  /**
   * 渲染社群連結
   */
  renderSocialLinks() {
    const container = document.querySelector('.social-links');
    if (!container) return;

    container.innerHTML = this.config.socialLinks
      .map(link => `
        <a href="${link.url}" class="social-link" ${link.url.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>
          <div>
            <div class="social-link__name">${link.name}</div>
            <div class="social-link__handle">${link.handle}</div>
          </div>
          <span class="social-link__arrow">→</span>
        </a>
      `)
      .join('');
  }

  /**
   * 渲染金句
   */
  renderQuote() {
    const container = document.querySelector('.quote');
    if (!container) return;

    const { text, author } = this.config.quote;
    container.innerHTML = `
      <div class="quote__text">
        ${text.join('<br>')}
      </div>
      <div class="quote__author">${author}</div>
    `;
  }

  /**
   * Console 彩蛋
   */
  initEasterEgg() {
    console.log(
      '%c NOT THIN JUSTIN ',
      'background: #00ff41; color: #0a0e0f; font-size: 20px; font-weight: bold; padding: 10px;'
    );
    console.log(
      '%c System Status: OVERLOADED ',
      'color: #00ff41; font-size: 14px;'
    );
    console.log(
      '%c Hardware is heavy, Talent is heavier. ',
      'color: #8b949e; font-size: 12px; font-style: italic;'
    );
    console.log(
      '%c\n💡 Tip: 想更換主題？試試在 console 輸入：\n   document.documentElement.setAttribute("data-theme", "blue")\n   可選: green (預設), blue, red, purple, amber',
      'color: #8b949e; font-size: 11px;'
    );
  }
}

/**
 * 主題切換工具
 */
const ThemeManager = {
  themes: ['green', 'blue', 'red', 'purple', 'amber'],
  
  setTheme(themeName) {
    if (!this.themes.includes(themeName)) {
      console.warn(`Theme "${themeName}" not found. Available: ${this.themes.join(', ')}`);
      return;
    }
    
    if (themeName === 'green') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', themeName);
    }
    
    console.log(`Theme changed to: ${themeName}`);
  },
  
  getAvailableThemes() {
    return this.themes;
  }
};

// 暴露給全域使用
window.ThemeManager = ThemeManager;

/**
 * DOM Ready
 */
document.addEventListener('DOMContentLoaded', () => {
  // 確保配置已載入
  if (!window.SITE_CONFIG) {
    console.error('SITE_CONFIG not found! Please include config.js before main.js');
    return;
  }

  // 初始化網站
  const site = new NotThinJustin(window.SITE_CONFIG);
  
  // 將實例暴露給全域（方便調試）
  window.siteInstance = site;
});

/**
 * 匯出（如果使用模組系統）
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { NotThinJustin, ThemeManager };
}
