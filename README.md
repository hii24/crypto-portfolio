<div align="center">

# 💸 crypto-portfolio

**Track your crypto holdings, P&L, and historical performance — all client-side, no backend**

_The project that got me into financial-domain UX before I had a chance to work in real FinTech._

[![React](https://img.shields.io/badge/React-17.x-61DAFB?style=for-the-badge&logo=react&logoColor=000)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.x-3178C6?style=for-the-badge&logo=typescript&logoColor=fff)](https://www.typescriptlang.org)
[![Recharts](https://img.shields.io/badge/Recharts-FF6B6B?style=for-the-badge)](https://recharts.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-00C853?style=for-the-badge)](LICENSE)

</div>

---

## ✨ Features

- 💰 Add holdings with quantity, average buy price, and notes
- 📈 Live prices via the [CoinGecko API](https://www.coingecko.com/en/api) (free tier, no key)
- 📊 Historical 30/90/365-day charts per asset
- 🧮 Total portfolio value + 24h change with breakdown by asset
- 🌗 Light / dark theme
- 💾 Offline persistence — your portfolio stays on your device, never sent to any server
- 📤 CSV export

## 🚀 Run locally

```bash
git clone https://github.com/hii24/crypto-portfolio.git
cd crypto-portfolio
npm install
npm start
```

## 🔒 Privacy

Your portfolio is stored **only in your browser**. No accounts, no backend, no telemetry. The only network call is to CoinGecko's public price API.

## 🧠 Why I built it

I was 9 months into commercial React work and wanted to build something that felt like real FinTech. Real-time price refreshes, decimal-precision currency math (you don't use floats for money — found that out the hard way), historical charts, sortable tables — all the patterns I'd later use on production financial products.

Bonus: it's actually useful. I still use it to track my own positions.

## 🛠️ Tech notes

- **State**: Redux Toolkit + RTK Query for API caching
- **Charts**: Recharts (chosen over D3 for the project's complexity level)
- **Money math**: `decimal.js` to avoid float rounding errors
- **Tests**: Jest covering reducers and currency utilities

## 📜 License

MIT
