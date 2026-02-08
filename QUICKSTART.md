# 快速開始指南 🚀

這份指南將幫助你在 5 分鐘內完成網站的個性化設定。

## 第一步：修改個人資訊 (2 分鐘)

開啟 `config/config.js`，找到 `personal` 區塊：

```javascript
personal: {
  name: "Justin",              // 改成你的名字
  title: "NOT THIN JUSTIN",    // 改成你的標題
  titleHighlight: "NOT THIN",  // 改成要高亮的部分
  subtitle: "賈斯汀是胖不是瘦",  // 改成你的副標題
  initial: "J.",               // 改成你的縮寫
  version: "v3.0.0",           // 改成你的版本號
  domain: "notthinjustin.com"  // 改成你的網域
}
```

## 第二步：更新社群連結 (1 分鐘)

在同一個檔案中，找到 `socialLinks`：

```javascript
socialLinks: [
  {
    name: "Instagram",
    handle: "@notthinjustin", // 改成你的帳號
    url: "https://instagram.com/notthinjustin", // 改成你的 URL
  },
  // 複製這個格式添加更多連結
];
```

### 常見社群連結模板

```javascript
// GitHub
{
  name: "GitHub",
  handle: "@yourname",
  url: "https://github.com/yourname"
}

// LinkedIn
{
  name: "LinkedIn",
  handle: "你的名字",
  url: "https://linkedin.com/in/yourname"
}

// Email
{
  name: "Email",
  handle: "聯絡我",
  url: "mailto:your.email@example.com"
}

// Twitter/X
{
  name: "X",
  handle: "@yourname",
  url: "https://x.com/yourname"
}

// Medium
{
  name: "Medium",
  handle: "@yourname",
  url: "https://medium.com/@yourname"
}

// YouTube
{
  name: "YouTube",
  handle: "你的頻道",
  url: "https://youtube.com/@yourname"
}
```

## 第三步：自訂內容 (2 分鐘)

### 修改系統訊息

```javascript
consoleMessage: {
  label: "// Console Output",
  content: [
    "你的第一行文字",
    "你的第二行文字，可用 <span class='msg-error'>標記</span> 重點。"
  ]
}
```

### 修改資訊卡片

```javascript
infoCards: [
  {
    label: "// Role",
    value: "你的職稱",
  },
  {
    label: "// Status",
    value: "你的狀態描述",
  },
];
```

### 修改金句

```javascript
quote: {
  text: [
    '"你的第一行",',
    '你的第二行。"'
  ],
  author: "— 作者"
}
```

## 完成！🎉

開啟 `index.html`，看看你的個人網站！

---

## 額外客製化

### 想更改配色？

開啟 `css/theme.css`，修改：

```css
:root {
  --primary: #00ff41; /* 改成你喜歡的顏色 */
}
```

或在 Console 執行：

```javascript
ThemeManager.setTheme("blue"); // 試試其他主題
```

### 想關閉某些效果？

在 `config/config.js` 中：

```javascript
effects: {
  customCursor: false,    // 關閉自訂游標
  glitchEffect: false,    // 關閉 glitch 效果
  scanlines: false,       // 關閉掃描線
  gridBackground: false,  // 關閉網格
  noise: false,          // 關閉噪點
  animations: false      // 關閉所有動畫
}
```

---

## 下一步

查看完整的 [README.md](README.md) 了解：

- 如何添加新區塊
- 如何部署網站
- 更多進階功能

## 需要幫助？

查看 README.md 的「常見問題」章節，或檢查 Console 是否有錯誤訊息。

---

**祝你打造出獨一無二的個人網站！** 🚀
