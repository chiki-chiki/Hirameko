# ひらめこ 🌱

ふと思いついた「ひらめき」を、気軽にメモしておける癒し系アイデアストックアプリです。

---

## 🔧 機能一覧

- 💡 アイデアの登録（タイトル＋メモ＋日付）
- 📝 アイデアの編集・保存
- ❌ アイデアの削除
- 💾 localStorage による保存（リロードしても残る！）
- 🎨 Tailwind CSS によるやさしいUI（INFPっぽさを意識）

---

## 🚀 使用技術

- React + TypeScript
- Vite
- Tailwind CSS
- localStorage（ブラウザ内保存）

---

## 🌐 公開URL

[https://hirameko-omega.vercel.app](https://hirameko-omega.vercel.app)

---

## 📸 スクリーンショット

※お好みで画像貼れる！できれば1枚あると印象UP！

---

## 💬 ひらめこに込めた想い（任意）

> 思いついたことを、気軽に書き留めておけるアプリがほしかった。<br>
> 「ひらめき」が生まれたときに、それを大切にできる場所をつくりたかった。<br>
> INFPっぽい癒しのUIと、自分のペースで使える感覚を大事にしています。

---

## 🛠 今後追加したい機能（任意）

- タグ機能でジャンル分け
- お気に入り（ピン留め）
- Supabase連携（ログイン / DB保存）

---

## 📂 セットアップ方法（技術者向け）

```bash
git clone https://github.com/chiki-chiki/Hirameko.git
cd hirameko
npm install
npm run dev
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
