# TraLingo

TraLingo は、macOS 向けのリアルタイム文字起こし・翻訳アプリです。  
マイク音声とシステム音声を取り込み、原文と翻訳を同じ画面で追いながら、最後はサマリーや書き出しまでつなげられます。

> アプリ本体は無料です。  
> ただし OpenAI や DeepL の API 利用料は別途かかり、API キーは自分で用意する必要があります。

## まず何ができるか

- 会議や通話で、話している内容をその場で文字で追える
- 動画、配信、録画の再生音もそのまま文字起こしできる
- 原文と翻訳を同時に表示できる
- リアルタイム翻訳と遅延翻訳を切り替えられる
- 画面に出ている字幕からそのままサマリーを作れる
- テキストや Markdown として持ち帰れる

## 画面イメージ

### ホーム画面

![TraLingo home](site/assets/screenshots/home-main.png)

### 文字起こしと翻訳

![TraLingo live translation](site/assets/screenshots/home-live-translation.png)

### 音声入力の確認

![TraLingo waveform buttons](site/assets/screenshots/waveform.png)

## ダウンロード

### 最新版を入手する

- [GitHub Releases](https://github.com/nococoanolife/TraLingo/releases/latest)  
  最新の `TraLingo.dmg` をダウンロードできます。

### 配布サイトを見る

- [Project site](https://nococoanolife.github.io/TraLingo/)  
  機能紹介、使い方、プライバシー情報をまとめています。

## はじめる前に必要なもの

### OpenAI API キー

- 文字起こしと OpenAI 翻訳には OpenAI API キーが必要です
- OpenAI API は有料です
- 先に Billing を設定しないと、文字起こしを開始できないことがあります
- 取得ページ:
  - [OpenAI API Keys](https://platform.openai.com/settings/organization/api-keys)
  - [OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview)
  - [OpenAI Usage](https://platform.openai.com/usage)

### OpenAI Admin キー

- 通常の文字起こしと翻訳だけなら不要です
- 予算や管理系の情報を確認したい時だけ使います
- 取得ページ:
  - [OpenAI Admin Keys](https://platform.openai.com/settings/organization/admin-keys)

### DeepL API キー

- DeepL を翻訳エンジンとして使いたい時だけ必要です
- DeepL API Free から始めることもできます
- 取得ページ:
  - [DeepL API Keys](https://www.deepl.com/en/your-account/keys)
  - [DeepL API Pricing](https://www.deepl.com/pro-api)

## インストール時の注意

- Apple Developer の署名 / notarization なしで配布しているため、初回起動時に macOS の確認画面が出ます
- 初めてマイクを使う時は、macOS のマイク権限を許可する必要があります
- 初めてシステム音声を使う時は、macOS の画面収録 / システム音声関連の許可が必要です

詳しい手順は [使い方ページ](https://nococoanolife.github.io/TraLingo/docs.html) にまとめています。

## 困った時

### バグ報告

- [Issues](https://github.com/nococoanolife/TraLingo/issues)  
  不具合、クラッシュ、翻訳ミス、要望のうち実装レベルのものはこちらへ。

### 相談やアイデア共有

- [Discussions](https://github.com/nococoanolife/TraLingo/discussions)  
  使い方の相談、改善アイデア、ユースケース共有はこちらへ。

### コードではなく配布物だけ見たい時

- [GitHub Repository](https://github.com/nococoanolife/TraLingo)  
  配布用 README、site、DMG だけを置いています。

## プライバシーと通信

- OpenAI のリアルタイム文字起こしは `wss://api.openai.com/v1/realtime` への WebSocket 通信を使います
- DeepL は HTTPS API を使います
- どちらも通信中は TLS で保護されます
- ただし、OpenAI や DeepL を使う設定では、音声や翻訳対象テキストはその provider に送信されます
- 通常利用では音声ファイルを自動保存しません

詳しくは [プライバシーポリシー](https://nococoanolife.github.io/TraLingo/privacy.html) を確認してください。

## 公開されている内容

この公開リポジトリには、次のものだけを置いています。

- `README.md`
- `site/`
- `TraLingo.dmg`

開発用コードは別の private repository で管理しています。
