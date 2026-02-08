/**
 * Site Configuration
 * 所有網站內容都在這裡管理，修改這個文件即可更新網站
 */

const CONFIG = {
  // 個人資訊
  personal: {
    name: "Justin",
    title: "NOT THIN JUSTIN",
    titleHighlight: "NOT THIN",
    subtitle: "賈斯汀是胖不是瘦",
    initial: "J.",
    version: "v3.0.0",
    domain: "notthinjustin.com"
  },

  // 系統狀態訊息
  systemStatus: [
    { label: "MEMORY_ALLOCATION", value: "MAX" },
    { label: "SYSTEM_STATUS", value: "OVERLOADED" },
    { label: "AVAILABILITY", value: "HIGH" }
  ],

  // 主要訊息
  consoleMessage: {
    label: "// Console Output",
    content: [
      "不被優化的體積，",
      "是為了裝載<span class='msg-error'>過載</span>的才華。"
    ]
  },

  // 資訊卡片
  infoCards: [
    {
      label: "// Role",
      value: "CTO / Software Engineer / Architect"
    },
    {
      label: "// Status",
      value: "在追求極簡的代碼世界中，<br>維持物理上的高可用性。"
    }
  ],

  // 社群連結
  socialLinks: [
    {
      name: "Instagram",
      handle: "@notthinjustin",
      url: "https://instagram.com/notthinjustin"
    },
    {
      name: "X.com",
      handle: "@notthinjustin",
      url: "https://x.com/notthinjustin"
    },
    {
      name: "Threads",
      handle: "@notthinjustin",
      url: "https://threads.net/notthinjustin"
    },
    {
      name: "Contact Agent",
      handle: "Work Inquiry",
      url: "mailto:notthinjustin@gmail.com"
    }
  ],

  // 金句
  quote: {
    text: [
      '"<span class="highlight">Hardware</span> is heavy,',
      '<span class="highlight">Talent</span> is heavier."'
    ],
    author: "— System Philosophy"
  },

  // 特效開關
  effects: {
    customCursor: true,
    glitchEffect: true,
    scanlines: true,
    gridBackground: true,
    noise: true,
    animations: true
  }
};

// 將配置暴露到全域
if (typeof window !== 'undefined') {
  window.SITE_CONFIG = CONFIG;
}

// 支援 Node.js 環境（如果需要）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
