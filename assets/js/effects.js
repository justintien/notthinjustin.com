/**
 * Effects JavaScript
 * 視覺特效：自訂游標、Glitch 效果等
 */

/**
 * 自訂游標效果
 */
class CustomCursor {
  constructor() {
    this.dot = null;
    this.ring = null;
    this.mouseX = 0;
    this.mouseY = 0;
    this.ringX = 0;
    this.ringY = 0;
    this.isTouch = 'ontouchstart' in window;
    
    if (!this.isTouch) {
      this.init();
    }
  }

  init() {
    this.createCursor();
    this.bindEvents();
    this.animate();
  }

  createCursor() {
    // Create dot
    this.dot = document.createElement('div');
    this.dot.className = 'cursor-dot';
    document.body.appendChild(this.dot);

    // Create ring
    this.ring = document.createElement('div');
    this.ring.className = 'cursor-ring';
    document.body.appendChild(this.ring);
  }

  bindEvents() {
    // Mouse move
    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      
      // Update dot position immediately
      if (this.dot) {
        this.dot.style.left = this.mouseX + 'px';
        this.dot.style.top = this.mouseY + 'px';
      }
    });

    // Hover effects - Scale cursor
    const interactiveElements = document.querySelectorAll(
      'a, button, .info-card, .system-msg, .logo, .social-link'
    );
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.dot.style.transform = 'scale(2)';
        this.ring.style.transform = 'scale(1.5)';
        this.ring.style.borderColor = 'var(--primary)';
        this.ring.style.backgroundColor = 'rgba(0, 255, 65, 0.1)';
      });
      
      el.addEventListener('mouseleave', () => {
        this.dot.style.transform = 'scale(1)';
        this.ring.style.transform = 'scale(1)';
        this.ring.style.borderColor = 'var(--primary)';
        this.ring.style.backgroundColor = 'transparent';
        
        // Reset element position
        el.style.transform = 'translate(0, 0)';
      });
    });

    // Initialize magnetic elements
    this.magnetics = Array.from(interactiveElements).map(el => ({
      element: el,
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      isHovered: false
    }));
    
    // Refresh measurements on resize
    window.addEventListener('resize', () => this.measureMagnetics());
    
    // Initial measure
    setTimeout(() => this.measureMagnetics(), 1000);
  }

  measureMagnetics() {
    if (!this.magnetics) return;
    
    this.magnetics.forEach(item => {
      const rect = item.element.getBoundingClientRect();
      item.x = rect.left + rect.width / 2;
      item.y = rect.top + rect.height / 2;
      item.width = rect.width;
      item.height = rect.height;
    });
  }

  animate() {
    // Smooth ring movement
    this.ringX += (this.mouseX - this.ringX) * 0.15;
    this.ringY += (this.mouseY - this.ringY) * 0.15;
    
    if (this.ring) {
      this.ring.style.left = this.ringX + 'px';
      this.ring.style.top = this.ringY + 'px';
    }

    // Magnetic Gravity Effect
    if (this.magnetics) {
      this.magnetics.forEach(item => {
        const distance = Math.sqrt(
          Math.pow(this.mouseX - item.x, 2) + Math.pow(this.mouseY - item.y, 2)
        );
        
        const triggerDistance = 200; // Activation radius
        
        if (distance < triggerDistance) {
          const power = 0.4; // Magnetic strength
          const x = (this.mouseX - item.x) * power * (1 - distance / triggerDistance);
          const y = (this.mouseY - item.y) * power * (1 - distance / triggerDistance);
          
          item.element.style.transform = `translate(${x}px, ${y}px)`;
        } else {
          // Smooth return is handled by CSS transition
          item.element.style.transform = 'translate(0, 0)';
        }
      });
    }
    
    requestAnimationFrame(() => this.animate());
  }

  destroy() {
    if (this.dot) this.dot.remove();
    if (this.ring) this.ring.remove();
  }
}

/**
 * Logo Glitch 效果
 */
class LogoGlitch {
  constructor() {
    this.logo = document.querySelector('.logo');
    this.glitchInterval = null;
    
    if (this.logo) {
      this.init();
    }
  }

  init() {
    this.logo.addEventListener('mouseenter', () => this.start());
    this.logo.addEventListener('mouseleave', () => this.stop());
  }

  start() {
    this.glitchInterval = setInterval(() => {
      const x = Math.random() * 4 - 2;
      const y = Math.random() * 4 - 2;
      
      this.logo.style.transform = `translate(${x}px, ${y}px)`;
      
      setTimeout(() => {
        this.logo.style.transform = 'translate(0, 0)';
      }, 50);
    }, 100);
  }

  stop() {
    clearInterval(this.glitchInterval);
    this.logo.style.transform = 'translate(0, 0)';
  }
}

/**
 * 滾動動畫觀察器
 */
class ScrollAnimationObserver {
  constructor() {
    this.options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, this.options);

    // Observe elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });
  }
}

/**
 * 背景特效管理器
 */
class BackgroundEffects {
  constructor(config) {
    this.config = config;
    this.init();
  }

  init() {
    if (this.config.effects.scanlines) {
      this.addScanlines();
    }
    
    if (this.config.effects.gridBackground) {
      this.addGrid();
    }
    
    if (this.config.effects.noise) {
      this.addNoise();
    }
  }

  addScanlines() {
    const scanline = document.createElement('div');
    scanline.className = 'effect-scanline';
    document.body.appendChild(scanline);
  }

  addGrid() {
    const grid = document.createElement('div');
    grid.className = 'effect-grid';
    document.body.appendChild(grid);
  }

  addNoise() {
    const noise = document.createElement('div');
    noise.className = 'effect-noise';
    document.body.appendChild(noise);
  }
}

/**
 * 鍵盤快捷鍵
 */
class KeyboardShortcuts {
  constructor() {
    this.init();
  }

  init() {
    document.addEventListener('keydown', (e) => {
      // Ctrl/Cmd + K: Toggle theme
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        this.cycleTheme();
      }
      
      // Ctrl/Cmd + /: Show help
      if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        this.showHelp();
      }
    });
  }

  cycleTheme() {
    const themes = window.ThemeManager?.getAvailableThemes() || [];
    const current = document.documentElement.getAttribute('data-theme') || 'green';
    const currentIndex = themes.indexOf(current);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    
    window.ThemeManager?.setTheme(nextTheme);
  }

  showHelp() {
    console.log('%c 🎮 Keyboard Shortcuts ', 'background: #00ff41; color: #0a0e0f; font-size: 14px; padding: 5px;');
    console.log('%c Ctrl/Cmd + K', 'color: #00ff41; font-weight: bold;', '→ 切換主題');
    console.log('%c Ctrl/Cmd + /', 'color: #00ff41; font-weight: bold;', '→ 顯示此說明');
  }
}

/**
 * 效果管理器
 */
class EffectsManager {
  constructor(config) {
    this.config = config;
    this.cursor = null;
    this.glitch = null;
    this.scrollObserver = null;
    this.backgrounds = null;
    this.shortcuts = null;
  }

  init() {
    // 初始化所有效果
    if (this.config.effects.customCursor) {
      this.cursor = new CustomCursor();
    }
    
    if (this.config.effects.glitchEffect) {
      this.glitch = new LogoGlitch();
    }
    
    if (this.config.effects.animations) {
      this.scrollObserver = new ScrollAnimationObserver();
    }
    
    this.backgrounds = new BackgroundEffects(this.config);
    this.shortcuts = new KeyboardShortcuts();
  }

  destroy() {
    if (this.cursor) this.cursor.destroy();
  }
}

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  if (!window.SITE_CONFIG) {
    console.error('SITE_CONFIG not found!');
    return;
  }

  // 初始化效果
  const effects = new EffectsManager(window.SITE_CONFIG);
  effects.init();
  
  // 暴露給全域
  window.effectsInstance = effects;
});
