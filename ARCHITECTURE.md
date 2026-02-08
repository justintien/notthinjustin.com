# NOT THIN JUSTIN 網站專案 - 架構概覽

## 🎯 專案特色

### 高可維護性

- ✅ **配置驅動** - 所有內容在 `config.js` 集中管理
- ✅ **模組化架構** - CSS、JS 分離，職責清晰
- ✅ **BEM 命名** - 樣式結構清晰，避免衝突
- ✅ **完整註解** - 每個文件都有詳細說明

### 易擴充性

- ✅ **主題系統** - 輕鬆更換配色（5 種內建主題）
- ✅ **插件化特效** - 效果可獨立開關
- ✅ **區塊化設計** - 新增功能只需 4 步驟
- ✅ **API 友善** - 暴露管理器供外部調用

### 工程師友善

- ✅ **零依賴** - 純原生技術，無框架負擔
- ✅ **快速載入** - 輕量級，優化效能
- ✅ **詳細文檔** - README、快速開始、Changelog
- ✅ **Git 整合** - 包含 .gitignore 和版本控制

---

## 📦 文件結構說明

```sh
├── index.html                    主頁面（HTML 結構）
│   └─ 簡潔的語意化標記
│   └─ 空容器由 JS 動態填充
│   └─ 按順序載入: config → main → effects
│
├── assets/css/
│   ├── theme.css                主題變數★
│   │   ├─ 顏色定義
│   │   ├─ 字體設定
│   │   ├─ 間距系統
│   │   └─ 5 種主題方案
│   │
│   ├── style.css                主要樣式★
│   │   ├─ 全域重置
│   │   ├─ 佈局系統
│   │   ├─ 組件樣式（BEM）
│   │   └─ 響應式設計
│   │
│   └── animations.css           動畫效果
│       ├─ Keyframes 定義
│       ├─ 工具類別
│       └─ 無障礙支援
│
├── assets/js/
│   ├── config.js                配置文件★
│   │   ├─ 個人資訊
│   │   ├─ 系統狀態
│   │   ├─ 社群連結
│   │   ├─ 資訊卡片
│   │   ├─ 金句
│   │   └─ 特效開關
│   ├── main.js                  主要邏輯★
│   │   ├─ NotThinJustin 類別
│   │   │   └─ 渲染所有內容區塊
│   │   ├─ ThemeManager 主題管理器
│   │   └─ 初始化流程
│   │
│   └── effects.js               視覺特效
│       ├─ CustomCursor 自訂游標
│       ├─ LogoGlitch glitch 效果
│       ├─ ScrollAnimationObserver 滾動動畫
│       ├─ BackgroundEffects 背景特效
│       ├─ KeyboardShortcuts 快捷鍵
│       └─ EffectsManager 效果管理器
│
├── assets/                      資源目錄
│   └─ (放置圖片、字體等檔案)
│
├── README.md                    完整文檔
├── QUICKSTART.md               快速開始指南
└── .gitignore                  Git 忽略清單
```

---

## 🔄 資料流程

```
1. 載入 HTML 結構
   └─ 定義空容器

2. 載入 config.js
   └─ 配置資料存入 window.SITE_CONFIG

3. 載入 main.js
   └─ NotThinJustin 類別讀取配置
   └─ 渲染所有內容到對應容器
   └─ ThemeManager 初始化

4. 載入 effects.js
   └─ EffectsManager 初始化所有特效
   └─ 綁定事件監聽器
   └─ 開始動畫循環

5. 使用者互動
   └─ 觸發懸停效果
   └─ 鍵盤快捷鍵
   └─ 主題切換
```

---

## 🎨 主題系統架構

```
CSS 變數 (theme.css)
    ↓
:root[data-theme="xxx"]
    ↓
ThemeManager.setTheme('xxx')
    ↓
更新 documentElement 屬性
    ↓
CSS 自動套用新配色
```

---

## 🔧 如何擴充？

### 新增內容區塊（4 步驟）

```
1. HTML - 添加容器
   <div class="your-section"></div>

2. CONFIG - 添加資料
   yourData: { ... }

3. MAIN.JS - 添加渲染方法
   renderYourSection() { ... }

4. STYLE.CSS - 添加樣式
   .your-section { ... }
```

### 新增主題配色（2 步驟）

```
1. THEME.CSS - 定義新主題
   :root[data-theme="orange"] {
     --primary: #ff6600;
   }

2. MAIN.JS - 註冊主題
   themes: [..., 'orange']
```

### 新增特效（3 步驟）

```
1. EFFECTS.JS - 創建類別
   class YourEffect { ... }

2. EFFECTS.JS - 註冊到 EffectsManager
   this.yourEffect = new YourEffect();

3. CONFIG.JS - 添加開關
   effects: { yourEffect: true }
```

---

## 📊 效能優化

### 已實現
- ✅ 原生 JavaScript（無框架開銷）
- ✅ CSS 動畫優先（GPU 加速）
- ✅ 延遲載入動畫（減少初始負擔）
- ✅ 事件委派（減少監聽器數量）
- ✅ requestAnimationFrame（流暢動畫）

### 可進一步優化

- 壓縮 CSS/JS（使用 minifier）
- 圖片優化（WebP 格式）
- 字體子集化（只載入使用的字符）
- 服務工作者（離線支援）
- 延遲載入圖片（Lazy loading）

---

## 🛠️ 技術決策

### 為什麼不用框架？

- ✅ 快速載入（< 20KB）
- ✅ 無依賴維護負擔
- ✅ 易於理解和修改
- ✅ 適合靜態個人網站

### 為什麼用 BEM？

- ✅ 避免樣式衝突
- ✅ 結構清晰
- ✅ 易於維護
- ✅ 團隊協作友善

### 為什麼配置驅動？

- ✅ 非技術人員也能修改內容
- ✅ 內容與邏輯分離
- ✅ 易於版本控制
- ✅ 可轉換為 CMS

---

## 🚀 部署檢查清單

- [ ] 修改個人資訊
- [ ] 更新社群連結
- [ ] 替換預設 email
- [ ] 添加 favicon
- [ ] 測試響應式佈局
- [ ] 檢查跨瀏覽器相容性
- [ ] 優化 SEO meta 標籤
- [ ] 添加 Google Analytics（可選）
- [ ] 測試所有連結
- [ ] 檢查 Console 無錯誤

---

## 📈 未來擴充方向

### 短期

- 專案作品集區塊
- 技能展示區塊
- 聯絡表單
- 部落格整合

### 中期

- TypeScript 重寫
- 構建工具整合
- 單元測試
- E2E 測試

### 長期

- SSG 支援
- Headless CMS 整合
- PWA 功能
- 國際化

---

## 💡 最佳實踐

1. **定期備份** - 使用 Git 版本控制
2. **測試先行** - 在多瀏覽器測試
3. **漸進增強** - 核心功能優先
4. **保持簡單** - 避免過度工程化
5. **文檔更新** - 修改後更新 README

---

## 🎓 學習資源

- [BEM 命名規範](http://getbem.com/)
- [CSS 變數教學](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Semantic HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
- [JavaScript 類別](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [響應式設計](https://web.dev/responsive-web-design-basics/)

---

**這個架構的設計理念：讓內容管理簡單，讓擴充開發容易。**

Have fun building! 🚀
