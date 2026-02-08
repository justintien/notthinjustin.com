# NOT THIN JUSTIN - 個人網站

> 高可維護性、可擴充的個人網站架構

一個專為工程師設計的極簡科技風格個人網站，採用模組化架構，易於維護和擴充。

## 📁 專案結構

```sh
├── index.html              # 主頁面（HTML 結構）
├── assets/css/
│   ├── theme.css          # 主題變數（配色方案）
│   ├── style.css          # 主要樣式
│   └── animations.css     # 動畫效果
├── assets/js/
│   ├── config.js          # 配置文件（所有內容管理）
│   ├── main.js            # 主要邏輯（內容渲染）
│   └── effects.js         # 視覺特效（游標、glitch）
└── assets/images       # 資源文件夾（圖片、圖示等）
```

## 🚀 快速開始

### 1. 基本使用

直接用瀏覽器開啟 `index.html` 即可！

### 2. 本地伺服器（推薦）

```bash
# Python 3
python -m http.server 8000

# Node.js (需安裝 http-server)
npx http-server

# 然後訪問 http://localhost:8000
```

## ✏️ 內容修改

### 修改個人資訊

只需編輯 `config/config.js`：

```javascript
const CONFIG = {
  personal: {
    name: "你的名字",
    title: "NOT THIN JUSTIN",
    subtitle: "賈斯汀是胖不是瘦",
    // ...
  }
};
```

### 修改社群連結

在 `config/config.js` 中的 `socialLinks` 陣列：

```javascript
socialLinks: [
  {
    name: "GitHub",
    handle: "@yourname",
    url: "https://github.com/yourname"
  },
  // 添加更多...
]
```

### 修改系統訊息

```javascript
consoleMessage: {
  label: "// Console Output",
  content: [
    "你的第一行訊息",
    "你的第二行訊息"
  ]
}
```

## 🎨 主題定制

### 更換主題顏色

在 `css/theme.css` 中修改 CSS 變數：

```css
:root {
  --primary: #00ff41;        /* 主色調 */
  --bg-darker: #050708;      /* 背景色 */
  --text-primary: #ffffff;   /* 文字顏色 */
}
```

### 內建主題切換

在 Console 中執行：

```javascript
// 切換主題
ThemeManager.setTheme('blue');   // 藍色
ThemeManager.setTheme('red');    // 紅色
ThemeManager.setTheme('purple'); // 紫色
ThemeManager.setTheme('amber');  // 琥珀色
ThemeManager.setTheme('green');  // 綠色（預設）

// 查看可用主題
ThemeManager.getAvailableThemes();
```

或使用鍵盤快捷鍵：`Ctrl/Cmd + K` 循環切換主題

## 🔧 進階擴充

### 1. 添加新的資訊卡片

在 `config/config.js` 中的 `infoCards` 陣列添加：

```javascript
infoCards: [
  {
    label: "// Your Label",
    value: "你的內容"
  },
  // 新增更多卡片...
]
```

### 2. 添加新的區塊

**步驟 1：** 在 `index.html` 中添加 HTML 結構

```html
<section class="your-section">
  <h2 class="section-header">Your Section</h2>
  <div class="your-content"></div>
</section>
```

**步驟 2：** 在 `assets/js/config.js` 添加資料

```javascript
const CONFIG = {
  // ... 其他配置
  yourSection: {
    title: "Your Title",
    items: [...]
  }
};
```

**步驟 3：** 在 `assets/js/main.js` 添加渲染方法

```javascript
renderYourSection() {
  const container = document.querySelector('.your-content');
  if (!container) return;
  
  container.innerHTML = this.config.yourSection.items
    .map(item => `<div>${item}</div>`)
    .join('');
}
```

**步驟 4：** 在 `init()` 中呼叫

```javascript
init() {
  // ... 其他渲染方法
  this.renderYourSection();
}
```

**步驟 5：** 在 `assets/css/style.css` 添加樣式

```css
.your-section {
  /* 你的樣式 */
}
```

### 3. 添加新動畫

在 `assets/css/animations.css` 中定義新的 keyframes：

```css
@keyframes yourAnimation {
  0% { /* 起始狀態 */ }
  100% { /* 結束狀態 */ }
}

.your-element {
  animation: yourAnimation 1s ease-out;
}
```

### 4. 添加新特效

在 `assets/js/effects.js` 中創建新的類別：

```javascript
class YourEffect {
  constructor() {
    this.init();
  }
  
  init() {
    // 你的特效邏輯
  }
}
```

### 5. 自訂字體

**方法 1：使用 Google Fonts**

在 `index.html` 中添加：

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

在 `assets/css/theme.css` 中使用：

```css
:root {
  --font-display: 'Your Font', monospace;
}
```

**方法 2：本地字體**

1. 將字體文件放在 `assets/fonts/`
2. 在 `assets/css/theme.css` 中使用 `@font-face`

```css
@font-face {
  font-family: 'YourFont';
  src: url('../assets/fonts/yourfont.woff2') format('woff2');
}

:root {
  --font-display: 'YourFont', monospace;
}
```

## ⚡ 效果開關

在 `assets/js/config.js` 中可以開關各種效果：

```javascript
effects: {
  customCursor: true,      // 自訂游標
  glitchEffect: true,      // Logo glitch 效果
  scanlines: true,         // 掃描線
  gridBackground: true,    // 網格背景
  noise: true,            // 噪點
  animations: true        // 動畫
}
```

## 🎮 鍵盤快捷鍵

- `Ctrl/Cmd + K` - 切換主題
- `Ctrl/Cmd + /` - 顯示快捷鍵說明

## 🐛 Console 彩蛋

打開瀏覽器開發者工具，查看 Console 會有驚喜！

## 📱 響應式設計

網站已針對以下裝置優化：

- 🖥️ 桌面（1200px+）
- 💻 筆電（768px - 1200px）
- 📱 手機（< 768px）

## 🔍 SEO 優化建議

1. 修改 `index.html` 中的 `<title>` 和 `<meta name="description">`
2. 添加 Open Graph 標籤：

```html
<meta property="og:title" content="你的標題">
<meta property="og:description" content="你的描述">
<meta property="og:image" content="你的圖片 URL">
```

3. 添加 favicon：

```html
<link rel="icon" type="image/png" href="assets/favicon.png">
```

## 🚢 部署

### GitHub Pages

1. 將專案推送到 GitHub
2. 在 Repository Settings → Pages 中啟用
3. 選擇 branch 和 root 目錄
4. 完成！

### Netlify / Vercel

直接拖放整個資料夾到平台即可！

### 傳統主機

使用 FTP 將所有檔案上傳到伺服器根目錄。

## 📚 技術棧

- **HTML5** - 語意化標記
- **CSS3** - 原生 CSS，無預處理器
- **Vanilla JavaScript** - 無框架，純原生 JS
- **Google Fonts** - 字體服務

## 🎯 設計原則

1. **模組化** - 每個文件職責清晰
2. **可維護** - 代碼有註解，結構清晰
3. **可擴充** - 易於添加新功能
4. **高性能** - 無依賴，快速載入
5. **響應式** - 支援所有裝置

## 💡 最佳實踐

### 開發流程

1. 修改內容 → 編輯 `assets/js/config.js`
2. 調整樣式 → 編輯 `assets/css/theme.css` 或 `assets/css/style.css`
3. 新增功能 → 在 `assets/js/main.js` 或 `assets/js/effects.js` 添加
4. 測試 → 在多個瀏覽器和裝置上測試
5. 部署 → 推送到主機

### 代碼規範

- 使用 BEM 命名法（Block Element Modifier）
- CSS 使用 kebab-case（例如：`social-link__name`）
- JavaScript 使用 camelCase（例如：`renderSocialLinks`）
- 保持代碼註解完整

## 🤝 貢獻指南

歡迎提交 Pull Request！

1. Fork 此專案
2. 創建你的 feature branch
3. 提交修改
4. Push 到 branch
5. 開啟 Pull Request

## 📄 授權

MIT License - 自由使用和修改

## 🙋 常見問題

**Q: 如何更改配色？**  
A: 編輯 `assets/css/theme.css` 中的 CSS 變數

**Q: 如何添加 Google Analytics？**  
A: 在 `index.html` 的 `</head>` 前添加 GA 追蹤代碼

**Q: 支援暗色/亮色模式切換嗎？**  
A: 目前只有暗色模式，可在 `assets/css/theme.css` 中添加 `@media (prefers-color-scheme: light)` 來支援

**Q: 如何優化載入速度？**  
A: 1) 壓縮 CSS/JS 文件 2) 優化圖片 3) 使用 CDN

**Q: 可以使用 React/Vue 重寫嗎？**  
A: 當然！配置文件結構設計就是為了方便轉換到任何框架

## 📮 聯絡

有問題或建議？歡迎聯繫！

---

**Built with ❤️ by Justin**  
*Hardware is heavy, Talent is heavier.*
