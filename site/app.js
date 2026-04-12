const messages = {
  ja: {
    nav_home: 'ホーム',
    nav_features: '機能',
    nav_docs: '使い方',
    nav_download: 'ダウンロード',
    nav_github: 'GitHub',
    nav_tokusho: '特定商取引法に基づく表記',
    nav_privacy: 'プライバシーポリシー',
    nav_terms: '利用規約',
    brand_tag: 'リアルタイム文字起こし / 翻訳 / サマリー',
    home_eyebrow: 'macOS デスクトップアプリ',
    home_title: '話している内容を、その場で読める字幕に変える。',
    home_lede:
      'TraLingo は、マイクとシステム音声を取り込み、原文と翻訳文を同時に表示し、今見えている字幕からそのままサマリーまで作れる macOS アプリです。',
    home_point_1: 'マイク + システム音声',
    home_point_2: '原文 + 翻訳を同時表示',
    home_point_3: 'サマリー + 書き出し',
    home_cta_primary: 'ダウンロード',
    home_cta_secondary: 'GitHub',
    home_mock_model_label: '文字起こしモデル / 翻訳モデル',
    home_mock_audio_title: 'オーディオ',
    home_mock_mic_button: 'マイク',
    home_mock_system_button: 'システム音声',
    home_mock_pipeline_title: 'パイプライン',
    home_mock_pipeline_mode_label: '構成',
    home_mock_pipeline_mode_value: '文字起こし + 翻訳',
    home_mock_pipeline_health_label: '状態',
    home_mock_pipeline_health_value: '安定',
    home_mock_pipeline_summary_label: 'サマリー',
    home_mock_pipeline_summary_value: '準備完了',
    home_mock_status: '今起きていることを追いながら、終わったらそのまま残せます。',
    home_original_label: '原文',
    home_translation_label: '翻訳',
    home_summary_label: 'サマリー',
    home_mock_original_meta: '英語',
    home_mock_translation_meta: '日本語',
    home_mock_summary_meta: '日本語',
    home_original_text:
      'Research teams said the leaked data appears to match output produced inside an actual national-scale supercomputing environment.',
    home_translation_text:
      '研究チームは、この流出データが実際の国家級スーパーコンピューティング環境で生成された結果と一致しているとみています。',
    home_summary_text:
      '会議や動画の途中でも原文と翻訳を同時に追えます。終わったら今見えている字幕からそのまま要点をまとめられます。',
    story_eyebrow: 'こんな場面で役立ちます',
    home_story_title: 'さまざまな場面で活用できる',
    home_story_1_title: '別言語の会議でも置いていかれない',
    home_story_1_body:
      '誰かが別の言語で話し始めても、原文と翻訳が同じ画面に出るので、内容の流れを追い続けやすくなります。',
    home_story_2_title: '動画や配信にもそのまま使える',
    home_story_2_body:
      '自分のマイクだけでなく、再生中の音も拾えるので、通話、配信、録画視聴、オンラインイベントにも向いています。',
    home_story_3_title: '終わったあとに残せる',
    home_story_3_body:
      '見えている字幕をもとにその場でサマリーを作り、コピーやダウンロードですぐ共有できます。',
    home_feature_1_title: '原文と翻訳を同時に確認できる',
    home_feature_1_body:
      '翻訳だけでなく原文も並べて見られるので、固有名詞や重要な言い回しを自分で確認しながら読み進められます。',
    home_feature_2_title: '音が来ているかを一目で確認できる',
    home_feature_2_body:
      'マイクとシステム音声は波形付きボタンで表示されます。会議開始前でも、入力されているかをすぐ確認できます。',
    home_feature_3_title: '使える形で持ち帰れる',
    home_feature_3_body:
      '文字起こしだけで終わらず、サマリー、コピー、ダウンロードまでつながっているので、あとで使える記録として残せます。',
    origin_eyebrow: 'なぜ作ったのか',
    origin_title: '通訳が必要な場面が増え、ちょうどいいアプリが見つからなかったので作りました',
    origin_body_1:
      'グローバル企業で働く中で、会議や動画視聴のたびに通訳や翻訳の助けが必要になる場面が増えました。AI で何とかできないかと調べても、原文と翻訳を同時に追えて、そのまま要点まで残せるアプリがなかなか見つかりませんでした。',
    origin_body_2:
      'そこで自分で作ってみたところ、想定以上にうまく動き、速度も精度も日常で十分使える水準まで仕上がりました。公開してフィードバックを受け取りながら改善を続け、言語の壁を少しでも下げる手助けができればと考えています。',
    home_download_title: 'すぐ試す',
    home_download_body:
      '最新版の macOS アプリは GitHub Releases から入手できます。更新履歴や issue も同じ場所で確認できます。',
    home_download_primary: 'ダウンロード',
    home_download_secondary: 'GitHub',
    support_eyebrow: 'Support TraLingo',
    support_title: '開発を支援する',
    support_body:
      'このアプリが役立ったら、Buy Me a Coffee から開発を支援できます。継続的な改善、翻訳精度の調整、配布の整備に使います。',
    support_button: 'Buy Me a Coffee',
    features_eyebrow: '機能',
    features_title: 'できること',
    features_intro:
      'TraLingo は、聞き取る、翻訳する、あとで使える形で残す、という流れを一つの画面で完結させるためのアプリです。',
    features_card_1_title: '原文と翻訳を同時に見る',
    features_card_1_body:
      '訳文だけでなく原文も残すので、意訳に引っ張られすぎず、自分で確認しながら理解できます。',
    features_card_2_title: 'マイクとシステム音声を使い分ける',
    features_card_2_body:
      '自分の声だけ、相手の声だけ、動画や配信の音だけ、といった使い分けができます。',
    features_card_3_title: '遅延翻訳とリアルタイム翻訳を選ぶ',
    features_card_3_body:
      '体感速度を優先したい時と、安定した翻訳結果を優先したい時で、流れを切り替えられます。',
    features_card_4_title: '一方向と双方向を選ぶ',
    features_card_4_body:
      '通訳のように片方向へ訳すだけでなく、言語 A / 言語 B を行き来する双方向モードにも対応しています。',
    features_card_5_title: '今見えている字幕からサマリーを作る',
    features_card_5_body:
      '別ツールへ貼り直さなくても、表示中の字幕をそのまま要約の元データとして使えます。',
    features_card_6_title: 'コピーと書き出しがすぐできる',
    features_card_6_body:
      'テキストや Markdown にすぐ変換できるので、議事メモ、動画メモ、学習メモとしてそのまま再利用できます。',
    features_card_7_title: '音が来ているかを波形で確認できる',
    features_card_7_body:
      'マイクとシステム音声は波形付きボタンで表示されるので、入力されているかどうかをその場で確認できます。',
    features_card_8_title: 'ドッキング表示に切り替えられる',
    features_card_8_body:
      '左・右・上・下のドッキング表示に切り替えられるので、作業中の他アプリと並べて使いやすくなっています。',
    features_card_9_title: 'テーマと字幕表示を細かく変えられる',
    features_card_9_body:
      'ライト / ダークや字幕サイズ、太さ、行間などを変えられるので、自分にとって読みやすい見た目に合わせられます。',
    features_card_10_title: 'モデルとコスト感を把握しながら使える',
    features_card_10_body:
      '現在のモデル構成と想定コストを確認しながら使えるので、速度・品質・費用のバランスを見ながら選べます。',
    screenshots_eyebrow: '画面イメージ',
    screenshots_title: '画面イメージを追加予定',
    screenshots_body:
      'ここには実際の利用シーンに合わせたスクリーンショットを追加できます。まずは差し替え用のスペースを用意しています。',
    screenshots_slot_1: 'ここにホーム画面のスクリーンショットを追加',
    screenshots_slot_2: 'ここに翻訳中の画面を追加',
    screenshots_slot_3: 'ここにサマリー / 書き出し画面を追加',
    docs_eyebrow: '使い方',
    docs_title: '初めて使う人向けガイド',
    docs_intro:
      '設定から開始までの流れを、初めてでも迷いにくい順番でまとめています。まずは一方向で試し、慣れてから双方向や DeepL を加えるのがおすすめです。',
    docs_step_1_title: '1. OpenAI API キーを設定する',
    docs_step_1_body:
      'まず OpenAI の管理画面で API キーを作成し、設定画面の「モデルと接続」に入力します。文字起こしや翻訳の多くは、このキーがないと動きません。',
    docs_step_2_title: '2. 使う音声入力を選ぶ',
    docs_step_2_body:
      '会議ならマイク、動画や配信ならシステム音声、両方を追いたいなら両方をオンにします。波形が動いていれば入力されています。',
    docs_step_3_title: '3. 翻訳の流れを決める',
    docs_step_3_body:
      '一方向は固定の翻訳先へ訳し、双方向は言語 A と言語 B を行き来します。リアルタイム翻訳は速さ重視、遅延翻訳は安定性重視です。',
    docs_step_4_title: '4. 文字起こし開始を押す',
    docs_step_4_body:
      '開始ボタンを押すと、字幕が並び始めます。止めるまでは新しい発話が追加され、翻訳がついていきます。',
    docs_step_5_title: '5. 必要なら DeepL キーも追加する',
    docs_step_5_body:
      'DeepL を翻訳に使いたい場合は、DeepL の API キーを発行して追加します。DeepL を選ばないなら、この設定は不要です。',
    docs_step_6_title: '6. 権限の許可を完了する',
    docs_step_6_body:
      'Apple Developer 登録済みアプリではないため、初回起動時に macOS の「プライバシーとセキュリティ」で許可が必要になる場合があります。文字起こし開始時には、マイクやシステム音声の利用に応じて個別の許可も必要です。',
    docs_shot_1: '設定画面のスクリーンショットをここに追加',
    docs_shot_2: 'オーディオ入力の選択画面をここに追加',
    docs_shot_3: '翻訳モードの選択画面をここに追加',
    docs_shot_4: '字幕が流れている画面をここに追加',
    docs_shot_5: 'DeepL キー設定画面のスクリーンショットをここに追加',
    docs_shot_6: 'macOS 権限許可画面のスクリーンショットをここに追加',
    docs_mode_title: 'どのモードを選べばよいか',
    docs_mode_body:
      'まずは「文字起こし + 遅延翻訳」の標準がおすすめです。会議での安定性とコストのバランスが良く、初めてでも扱いやすい構成です。',
    docs_summary_title: 'サマリーは何をもとに作られるか',
    docs_summary_body:
      'サマリーは、画面に表示されている字幕をもとに作られます。翻訳が出ている場合は翻訳側を優先し、出力言語はサマリー側で選べます。',
    docs_export_title: 'どこまで保存されるか',
    docs_export_body:
      '通常の利用では音声ファイルを自動保存しません。コピーやダウンロードを実行した時だけ、その時点の内容をファイルやクリップボードへ出します。',
    docs_permission_title: '初回起動時の注意点',
    docs_permission_body:
      '初回起動時に macOS から「開けません」と警告された場合は、「プライバシーとセキュリティ」から許可してください。これは未 notarize 配布であることによる macOS の通常の警告です。',
    docs_keys_title: 'OpenAI API キーと DeepL キーの入手方法',
    docs_keys_body:
      'OpenAI API キーは OpenAI のダッシュボードで発行します。DeepL API キーは DeepL アカウントの API 管理画面で発行します。アプリ自体は無料ですが、API 利用料は OpenAI / DeepL 側で別途発生します。',
    docs_admin_title: 'OpenAI Admin キーは必要か',
    docs_admin_body:
      'OpenAI Admin キーは必須ではありません。予算や管理系の機能を使いたい時だけ設定してください。通常の文字起こしや翻訳だけなら API キーだけで十分です。',
    privacy_eyebrow: 'プライバシー',
    privacy_title: 'データの扱いと通信の考え方',
    privacy_desc:
      '安心して使えるかを判断しやすいように、ローカルに残るもの、外部へ送られるもの、暗号化される範囲、注意点を事実ベースでまとめています。',
    privacy_local_title: 'ローカルに残るもの',
    privacy_local_body:
      'API キーはローカルに保存され、設定ファイルには平文で置きません。通常利用では音声ファイルを自動保存せず、ファイルが作られるのは、あなたが明示的に書き出した時だけです。',
    privacy_openai_title: 'OpenAI との通信',
    privacy_openai_body:
      'OpenAI のリアルタイム文字起こしは、アプリの main プロセスから `wss://api.openai.com/v1/realtime` へ接続します。`wss` は TLS で暗号化された WebSocket なので、通信中の第三者からそのまま読まれにくい方式です。API キーもブラウザに埋め込まず、アプリ側から送ります。一方で、OpenAI を使う設定では音声と文字起こしテキストは OpenAI に送られて処理されます。完全なローカル処理ではありません。',
    privacy_deepl_title: 'DeepL との通信',
    privacy_deepl_body:
      'DeepL 翻訳は `https://api.deepl.com` または `https://api-free.deepl.com` への HTTPS 通信です。HTTPS も TLS で暗号化されるため、通信中の内容をそのまま読まれにくい点は OpenAI と同じです。一方で、DeepL を使う設定では翻訳対象テキストは DeepL に送られて処理されます。',
    privacy_limit_title: '安全と限界',
    privacy_limit_body:
      'TraLingo は、送信先を選択した provider に限定し、通常は音声ファイルをローカル保存しないようにしています。ただし、あなたの Mac 自体がマルウェア感染している場合や、OS アカウントが侵害されている場合まで防げるわけではありません。OpenAI は business data ページで、顧客の business data は既定で学習に使わないと案内していますが、クラウド処理そのものは行われます。機密情報を扱うかどうかは、利用者自身で判断してください。',
    privacy_analytics_title: 'Aptabase による匿名の利用分析',
    privacy_analytics_body:
      'アプリでは任意で Aptabase の匿名分析を有効にできます。どの画面や機能が使われているか、どこで不具合が起きているかを把握するためのもので、設定からオフにできます。デフォルトで有効にしない前提で運用し、内容は改善目的に限ります。',
    tokusho_title: '特定商取引法に基づく表記',
    tokusho_desc:
      '現在は GitHub Releases を中心にアプリを配布しています。このページでは、運営情報と問い合わせ先を公開しています。',
    tokusho_seller: '運営者',
    tokusho_seller_value: 'TraLingo Project / nococoanolife',
    tokusho_operator: '運営責任者',
    tokusho_operator_value: 'nococoanolife',
    tokusho_address: '所在地',
    tokusho_address_value: '請求があった場合は遅滞なく開示します。',
    tokusho_phone: '電話番号',
    tokusho_phone_value: '請求があった場合は遅滞なく開示します。',
    tokusho_contact: '問い合わせ先',
    tokusho_contact_value: 'GitHub Issues',
    tokusho_service_label: '提供内容',
    tokusho_service_value: 'macOS 向けデスクトップアプリの配布とサポート',
    tokusho_note:
      'このページは運営情報を明示するためのものです。価格、料金、支払い、返品に関する案内は現在の配布形態では掲載していません。',
    terms_title: '利用規約',
    terms_desc: 'TraLingo は現状有姿で提供されます。文字起こしや翻訳の完全性は保証しません。',
    terms_p1: '利用者は適用法令、所属先のルール、利用する外部サービスの規約を守って利用してください。',
    terms_p2: '機密情報や規制対象情報を扱うかどうかは利用者の判断と責任です。',
  },
  en: {
    nav_home: 'Home',
    nav_features: 'Features',
    nav_docs: 'Docs',
    nav_download: 'Download',
    nav_github: 'GitHub',
    nav_tokusho: 'Commerce Disclosure',
    nav_privacy: 'Privacy Policy',
    nav_terms: 'Terms',
    brand_tag: 'Realtime transcription / translation / summaries',
    home_eyebrow: 'macOS desktop app',
    home_title: 'Turn live speech into captions you can read and reuse.',
    home_lede:
      'TraLingo captures microphone and system audio, keeps the original line and translated line on the same screen, and generates summaries from the captions you are already looking at.',
    home_point_1: 'Mic + system audio',
    home_point_2: 'Original + translation together',
    home_point_3: 'Summary + export',
    home_cta_primary: 'Download',
    home_cta_secondary: 'GitHub',
    home_mock_model_label: 'Transcription model / Translation model',
    home_mock_audio_title: 'Audio',
    home_mock_mic_button: 'Microphone',
    home_mock_system_button: 'System Audio',
    home_mock_pipeline_title: 'Pipeline',
    home_mock_pipeline_mode_label: 'Mode',
    home_mock_pipeline_mode_value: 'Transcription + Translation',
    home_mock_pipeline_health_label: 'Health',
    home_mock_pipeline_health_value: 'Stable',
    home_mock_pipeline_summary_label: 'Summary',
    home_mock_pipeline_summary_value: 'Ready',
    home_mock_status: 'Follow what is happening now, then leave with notes you can actually use.',
    home_original_label: 'Original',
    home_translation_label: 'Translation',
    home_summary_label: 'Summary',
    home_mock_original_meta: 'Japanese',
    home_mock_translation_meta: 'English',
    home_mock_summary_meta: 'English',
    home_original_text:
      '研究チームは、この流出データが実際の国家級スーパーコンピューティング環境で生成された結果と一致しているとみています。',
    home_translation_text:
      'Research teams believe the leaked data matches output produced in a real national-scale supercomputing environment.',
    home_summary_text:
      'You can watch the original and translated lines together, then turn the visible captions into a summary before the meeting ends.',
    story_eyebrow: 'Story',
    home_story_title: 'This is where it becomes useful fast',
    home_story_1_title: 'Stay in the room when the language shifts',
    home_story_1_body:
      'When someone switches languages, the original and translated lines stay together so you do not lose the thread.',
    home_story_2_title: 'Use it with calls, videos, and streams',
    home_story_2_body:
      'It can follow both your microphone and your system audio, so it works beyond live meetings.',
    home_story_3_title: 'Leave with something reusable',
    home_story_3_body:
      'Generate a summary from the captions on screen and export it without moving to another tool.',
    home_feature_1_title: 'Keep the original and translation together',
    home_feature_1_body:
      'You can verify nuance yourself because the translated line never replaces the original line.',
    home_feature_2_title: 'See whether audio is actually arriving',
    home_feature_2_body:
      'Waveform buttons make it obvious whether microphone or system audio is active before you waste time debugging inputs.',
    home_feature_3_title: 'Export the useful version',
    home_feature_3_body:
      'Copy, download, and summarize directly from the same interface instead of reconstructing context somewhere else.',
    origin_eyebrow: 'Why I built it',
    origin_title: 'I needed something practical for multilingual work, and I could not find the right tool',
    origin_body_1:
      'Working in a global company meant more meetings and media where interpretation or translation support was often necessary. I looked for an AI tool that could keep the original and translated lines together and leave me with something usable afterwards, but I could not find one that felt right.',
    origin_body_2:
      'So I built it. The result worked better than I expected, and both the speed and accuracy reached a level I was willing to use in daily work. I decided to publish it, gather feedback, and keep improving it so it can help reduce language barriers in real situations.',
    home_download_title: 'Get the app',
    home_download_body:
      'The latest macOS build is distributed through GitHub Releases. The repository and issue tracker are right next to the download path.',
    home_download_primary: 'Download',
    home_download_secondary: 'GitHub',
    support_eyebrow: 'Support TraLingo',
    support_title: 'Help keep it improving',
    support_body:
      'If the app is useful, you can support development through Buy Me a Coffee. Support goes to ongoing fixes, translation quality work, and release upkeep.',
    support_button: 'Buy Me a Coffee',
    features_eyebrow: 'Features',
    features_title: 'What the app can do',
    features_intro:
      'TraLingo is built to help you understand live multilingual speech, confirm that audio is flowing, and leave with something useful afterwards.',
    features_card_1_title: 'Read original and translated captions side by side',
    features_card_1_body:
      'You can keep the translated line in view without losing the original wording, which helps with names, nuance, and technical terms.',
    features_card_2_title: 'Handle microphone and system audio separately',
    features_card_2_body:
      'Track your own voice, incoming media, or both depending on the session you are trying to follow.',
    features_card_3_title: 'Switch between delayed and realtime translation',
    features_card_3_body:
      'Use delayed translation for more stable text, or realtime translation when you want a faster feel.',
    features_card_4_title: 'Choose one-way or bidirectional translation',
    features_card_4_body:
      'Use a fixed target language when you only need one direction, or define Language A and Language B for live back-and-forth sessions.',
    features_card_5_title: 'Generate summaries from visible captions',
    features_card_5_body:
      'The summary uses the captions currently on screen, so you do not need to move content into another tool first.',
    features_card_6_title: 'Copy and export immediately',
    features_card_6_body:
      'Export as text or Markdown and keep a usable record as soon as the session ends.',
    features_card_7_title: 'See live audio activity',
    features_card_7_body:
      'Waveform-based audio buttons show whether microphone or system audio is actually arriving.',
    features_card_8_title: 'Switch into docked layouts',
    features_card_8_body:
      'You can dock the app to the left, right, top, or bottom so it stays visible beside the app you are actually working in.',
    features_card_9_title: 'Adjust theme and caption appearance',
    features_card_9_body:
      'Switch themes and control caption size, weight, spacing, and emphasis to match your reading preference.',
    features_card_10_title: 'Check model selection and cost',
    features_card_10_body:
      'See which models are active and compare rough cost expectations before you start a session.',
    screenshots_eyebrow: 'Screenshots',
    screenshots_title: 'Reserved space for real screenshots',
    screenshots_body:
      'These blocks are placeholders so you can later add the most persuasive screenshots without changing the page structure.',
    screenshots_slot_1: 'Add the home screen screenshot here',
    screenshots_slot_2: 'Add an in-session translation screenshot here',
    screenshots_slot_3: 'Add a summary or export screenshot here',
    docs_eyebrow: 'Docs',
    docs_title: 'A practical guide for first-time users',
    docs_intro:
      'This guide focuses on the shortest path from first launch to a working session. Start with the stable path, then add more advanced options later.',
    docs_step_1_title: '1. Add your OpenAI API key',
    docs_step_1_body:
      'Create an OpenAI API key in your OpenAI dashboard, then paste it into Settings. Most transcription and translation paths depend on this key.',
    docs_step_2_title: '2. Choose the audio input',
    docs_step_2_body:
      'Turn on Microphone, System Audio, or both. If the waveform moves, the app is receiving sound.',
    docs_step_3_title: '3. Pick the translation flow',
    docs_step_3_body:
      'One-way translates into one target language. Bidirectional switches between Language A and Language B. Delayed translation is usually easier to control than realtime.',
    docs_step_4_title: '4. Start transcription and watch the timeline',
    docs_step_4_body:
      'Once you press Start, segments appear in the timeline. Final segments then receive translation according to your chosen mode.',
    docs_step_5_title: '5. Add a DeepL key if you want DeepL',
    docs_step_5_body:
      'DeepL is optional. Only add a DeepL API key if you plan to choose DeepL as the translation provider.',
    docs_step_6_title: '6. Approve macOS permissions',
    docs_step_6_body:
      'Because the app is not distributed with Apple Developer notarization yet, macOS may ask you to approve it in Privacy & Security. You will also need to allow microphone and system-audio related permissions when you first start using those inputs.',
    docs_shot_1: 'Place the settings screenshot here',
    docs_shot_2: 'Place the audio input screenshot here',
    docs_shot_3: 'Place the translation mode screenshot here',
    docs_shot_4: 'Place the live caption screenshot here',
    docs_shot_5: 'Place the DeepL settings screenshot here',
    docs_shot_6: 'Place the macOS permission screen here',
    docs_mode_title: 'Which pipeline should you pick?',
    docs_mode_body:
      'For most people, “Transcription + Delayed Translation” is the safest place to start because it is easier to control and usually more stable.',
    docs_summary_title: 'What summaries are based on',
    docs_summary_body:
      'Summaries use the captions that are currently visible on screen. If translated captions exist, the summary prefers those.',
    docs_export_title: 'What gets stored',
    docs_export_body:
      'The app does not save audio recordings by default. Files are created only when you explicitly copy or download content.',
    docs_permission_title: 'What to expect on first launch',
    docs_permission_body:
      'If macOS says the app cannot be opened, approve it from Privacy & Security. This is the normal warning for an unsigned or non-notarized distribution build.',
    docs_keys_title: 'How to get the keys',
    docs_keys_body:
      'Get the OpenAI API key from the OpenAI dashboard. Get the DeepL API key from the DeepL account API page. The app is free, but OpenAI or DeepL usage is billed separately under your own account.',
    docs_admin_title: 'Do you need an OpenAI Admin key?',
    docs_admin_body:
      'Usually no. The Admin key is optional and mainly useful for budget or management-related views.',
    privacy_eyebrow: 'Privacy',
    privacy_title: 'What is local, what is sent, and how transport works',
    privacy_desc:
      'This page explains what stays on your Mac, what goes to cloud providers, what is encrypted in transit, and what the app does not protect you from.',
    privacy_local_title: 'What stays local',
    privacy_local_body:
      'API keys are stored locally and not kept in plain text in the app settings store. The app does not automatically write audio recordings to local files. Files are created only when you explicitly export or download content.',
    privacy_openai_title: 'OpenAI transport and processing',
    privacy_openai_body:
      'OpenAI realtime transcription in TraLingo uses a WebSocket connection from the desktop app main process to `wss://api.openai.com/v1/realtime`. Because it uses `wss`, transport is encrypted with TLS. The API key is sent from the app process, not embedded in a browser page. If you enable OpenAI-backed transcription or translation, your audio and text are still sent to OpenAI for processing. This is not a local-only mode.',
    privacy_deepl_title: 'DeepL transport and processing',
    privacy_deepl_body:
      'DeepL translation uses HTTPS requests to `https://api.deepl.com` or `https://api-free.deepl.com`. HTTPS also uses TLS, so the request is encrypted in transit. If you choose DeepL, the text being translated is sent to DeepL for processing.',
    privacy_limit_title: 'What this does not guarantee',
    privacy_limit_body:
      'TLS protects the connection while data is traveling over the network. It does not protect you from malware on your Mac, a compromised operating-system account, or sending data to a cloud provider you enabled yourself. OpenAI states on its business data page that customer business data is not used to train models by default, but cloud processing still happens when you use those services.',
    privacy_analytics_title: 'Anonymous analytics with Aptabase',
    privacy_analytics_body:
      'The app can optionally send anonymous analytics to Aptabase so the developer can understand which features are used and where failures happen. It is intended for product improvement and can be turned off in Settings.',
    tokusho_title: 'Commerce Disclosure',
    tokusho_desc:
      'The app is currently distributed through GitHub Releases. This page provides operator and contact information.',
    tokusho_seller: 'Operator',
    tokusho_seller_value: 'TraLingo Project / nococoanolife',
    tokusho_operator: 'Manager',
    tokusho_operator_value: 'nococoanolife',
    tokusho_address: 'Address',
    tokusho_address_value: 'Disclosed promptly upon request.',
    tokusho_phone: 'Phone',
    tokusho_phone_value: 'Disclosed promptly upon request.',
    tokusho_contact: 'Contact',
    tokusho_contact_value: 'GitHub Issues',
    tokusho_service_label: 'Service',
    tokusho_service_value: 'Distribution and support of a macOS desktop app',
    tokusho_note:
      'This page exists to show operator information. Price, fees, payment, and returns are intentionally omitted for the current distribution style.',
    terms_title: 'Terms',
    terms_desc: 'TraLingo is provided as-is. Transcription and translation accuracy are not guaranteed.',
    terms_p1: 'You are responsible for using the app in a way that complies with applicable law and the rules of the services around you.',
    terms_p2: 'You are responsible for deciding whether confidential or regulated information should be processed through the providers you enable.',
  },
  ko: {
    nav_home: '홈',
    nav_features: '기능',
    nav_docs: '사용 방법',
    nav_download: '다운로드',
    nav_github: 'GitHub',
    nav_tokusho: '특정상거래법 표기',
    nav_privacy: '개인정보 처리방침',
    nav_terms: '이용약관',
    brand_tag: '실시간 전사 / 번역 / 요약',
    home_eyebrow: 'macOS 데스크톱 앱',
    home_title: '들리는 말을, 바로 읽을 수 있는 자막으로 바꿉니다.',
    home_lede:
      'TraLingo는 마이크와 시스템 오디오를 받아 원문과 번역문을 같은 화면에 두고, 지금 보이는 자막으로 바로 요약까지 만들 수 있는 macOS 앱입니다.',
    home_point_1: '마이크 + 시스템 오디오',
    home_point_2: '원문 + 번역 동시 표시',
    home_point_3: '요약 + 내보내기',
    home_cta_primary: '다운로드',
    home_cta_secondary: 'GitHub',
    home_mock_model_label: '전사 모델 / 번역 모델',
    home_mock_audio_title: '오디오',
    home_mock_mic_button: '마이크',
    home_mock_system_button: '시스템 오디오',
    home_mock_pipeline_title: '파이프라인',
    home_mock_pipeline_mode_label: '구성',
    home_mock_pipeline_mode_value: '전사 + 번역',
    home_mock_pipeline_health_label: '상태',
    home_mock_pipeline_health_value: '안정',
    home_mock_pipeline_summary_label: '요약',
    home_mock_pipeline_summary_value: '준비 완료',
    home_mock_status: '지금 벌어지는 내용을 따라가고, 끝나면 바로 남길 수 있습니다.',
    home_original_label: '원문',
    home_translation_label: '번역',
    home_summary_label: '요약',
    home_mock_original_meta: '일본어',
    home_mock_translation_meta: '한국어',
    home_mock_summary_meta: '한국어',
    home_original_text:
      '研究チームは、この流出データが実際の国家級スーパーコンピューティング環境で生成された結果と一致しているとみています。',
    home_translation_text:
      '연구팀은 이 유출 데이터가 실제 국가급 슈퍼컴퓨팅 환경에서 생성된 결과와 일치한다고 보고 있습니다.',
    home_summary_text:
      '원문과 번역을 함께 보다가, 세션이 끝나면 현재 보이는 자막을 기준으로 핵심만 빠르게 정리할 수 있습니다.',
    story_eyebrow: '이럴 때 바로 도움이 됩니다',
    home_story_title: '처음 보는 사람도 바로 쓰임새를 이해할 수 있습니다',
    home_story_1_title: '다국어 회의에서도 흐름을 놓치지 않습니다',
    home_story_1_body:
      '언어가 바뀌어도 원문과 번역문이 함께 보여 문맥을 잃지 않고 따라갈 수 있습니다.',
    home_story_2_title: '통화와 영상에도 그대로 쓸 수 있습니다',
    home_story_2_body:
      '마이크뿐 아니라 시스템 오디오도 받을 수 있어 통화, 스트림, 영상 재생에도 잘 맞습니다.',
    home_story_3_title: '끝난 뒤에도 바로 남길 수 있습니다',
    home_story_3_body:
      '현재 보이는 자막으로 요약을 만들고 복사하거나 내려받아 바로 공유할 수 있습니다.',
    home_feature_1_title: '원문과 번역을 함께 확인할 수 있습니다',
    home_feature_1_body:
      '번역만 보는 대신 원문도 함께 남기기 때문에 고유명사와 미묘한 표현을 스스로 확인할 수 있습니다.',
    home_feature_2_title: '오디오가 들어오는지 바로 알 수 있습니다',
    home_feature_2_body:
      '마이크와 시스템 오디오는 파형이 보이는 버튼으로 표시되어 입력 상태를 빠르게 확인할 수 있습니다.',
    home_feature_3_title: '정리된 결과를 바로 가져갈 수 있습니다',
    home_feature_3_body:
      '전사 결과를 그대로 끝내지 않고 요약, 복사, 다운로드까지 이어지므로 회의 기록으로 바로 쓸 수 있습니다.',
    origin_eyebrow: '왜 만들었는가',
    origin_title: '다국어 업무에 바로 쓸 수 있는 도구가 없어서 직접 만들었습니다',
    origin_body_1:
      '글로벌 환경에서 일하다 보니 통역이나 번역의 도움이 필요한 순간이 점점 많아졌습니다. 원문과 번역을 함께 보고, 끝나면 바로 정리까지 할 수 있는 AI 도구를 찾아봤지만 마음에 드는 것이 없었습니다.',
    origin_body_2:
      '그래서 직접 만들었습니다. 예상보다 훨씬 잘 동작했고, 속도와 정확도도 일상 업무에서 충분히 쓸 수 있는 수준까지 올라왔습니다. 먼저 공개해서 피드백을 받고, 계속 다듬으면서 언어 장벽을 낮추는 데 도움이 되길 바라고 있습니다.',
    home_download_title: '바로 써보기',
    home_download_body:
      '최신 macOS 빌드는 GitHub Releases에서 받을 수 있습니다. 업데이트 기록과 이슈도 같은 경로에서 확인할 수 있습니다.',
    home_download_primary: '다운로드',
    home_download_secondary: 'GitHub',
    support_eyebrow: 'Support TraLingo',
    support_title: '개발을 지원하기',
    support_body:
      '앱이 도움이 되었다면 Buy Me a Coffee를 통해 개발을 지원할 수 있습니다. 지속적인 개선과 배포 관리에 사용합니다.',
    support_button: 'Buy Me a Coffee',
    features_eyebrow: '기능',
    features_title: '할 수 있는 일',
    features_intro:
      'TraLingo는 듣기, 번역 보기, 나중에 다시 쓰기까지 한 화면에서 이어지도록 설계된 앱입니다.',
    features_card_1_title: '원문과 번역을 동시에 보기',
    features_card_1_body:
      '번역을 보면서도 원문을 확인할 수 있어 의미 차이와 고유명사를 놓치기 어렵습니다.',
    features_card_2_title: '마이크와 시스템 오디오를 분리하기',
    features_card_2_body:
      '내 목소리, 상대방 소리, 영상 재생음을 상황에 따라 구분해서 다룰 수 있습니다.',
    features_card_3_title: '지연 번역과 실시간 번역 선택',
    features_card_3_body:
      '속도를 우선할지, 안정성을 우선할지 상황에 따라 선택할 수 있습니다.',
    features_card_4_title: '단방향과 양방향 번역 선택',
    features_card_4_body:
      '한쪽 방향으로만 번역할 수도 있고, 언어 A와 언어 B를 오가는 양방향 모드도 사용할 수 있습니다.',
    features_card_5_title: '지금 보이는 자막으로 요약 만들기',
    features_card_5_body:
      '별도 도구로 옮기지 않아도 현재 보이는 자막을 바로 요약의 원본으로 사용할 수 있습니다.',
    features_card_6_title: '복사와 내보내기',
    features_card_6_body:
      '텍스트나 Markdown으로 바로 변환할 수 있어 회의 메모나 학습 메모로 다시 쓰기 좋습니다.',
    features_card_7_title: '파형으로 오디오 입력 확인',
    features_card_7_body:
      '마이크와 시스템 오디오 버튼에서 파형을 바로 볼 수 있어 입력이 들어오는지 확인하기 쉽습니다.',
    features_card_8_title: '도킹 레이아웃으로 전환',
    features_card_8_body:
      '좌우상하 도킹 모드로 전환할 수 있어 다른 앱과 나란히 두고 보기 편합니다.',
    features_card_9_title: '테마와 자막 스타일 조정',
    features_card_9_body:
      '라이트 / 다크 테마와 자막 크기, 두께, 줄 간격을 바꿔 읽기 편한 화면으로 맞출 수 있습니다.',
    features_card_10_title: '모델과 비용 감각 확인',
    features_card_10_body:
      '현재 사용하는 모델과 예상 비용을 보면서 속도, 품질, 비용 사이의 균형을 잡을 수 있습니다.',
    screenshots_eyebrow: '스크린샷',
    screenshots_title: '실제 화면을 넣을 자리',
    screenshots_body:
      '나중에 가장 설득력 있는 실제 스크린샷을 넣을 수 있도록 자리만 먼저 확보해 두었습니다.',
    screenshots_slot_1: '여기에 홈 화면 스크린샷 추가',
    screenshots_slot_2: '여기에 번역 중 화면 추가',
    screenshots_slot_3: '여기에 요약 / 내보내기 화면 추가',
    docs_eyebrow: '사용 방법',
    docs_title: '처음 쓰는 사람을 위한 가이드',
    docs_intro:
      '처음 실행한 뒤 무엇부터 설정하면 되는지, 어떤 모드를 먼저 써보면 좋은지 짧고 실용적인 순서로 정리했습니다.',
    docs_step_1_title: '1. OpenAI API 키를 입력합니다',
    docs_step_1_body:
      'OpenAI 대시보드에서 API 키를 만든 뒤 설정 화면에 입력합니다. 대부분의 전사와 번역 흐름은 이 키가 있어야 동작합니다.',
    docs_step_2_title: '2. 오디오 입력을 고릅니다',
    docs_step_2_body:
      '마이크, 시스템 오디오, 또는 둘 다 켭니다. 파형이 움직이면 입력이 들어오고 있는 상태입니다.',
    docs_step_3_title: '3. 번역 흐름을 정합니다',
    docs_step_3_body:
      '단방향은 하나의 목적 언어로 번역하고, 양방향은 언어 A와 언어 B를 오갑니다. 보통은 지연 번역이 더 안정적입니다.',
    docs_step_4_title: '4. 시작 버튼을 누릅니다',
    docs_step_4_body:
      '시작을 누르면 세그먼트가 타임라인에 쌓이고, 최종 세그먼트에 번역이 붙습니다.',
    docs_step_5_title: '5. DeepL을 쓰고 싶다면 키를 추가합니다',
    docs_step_5_body:
      'DeepL은 선택 사항입니다. DeepL을 번역 제공사로 고를 때만 DeepL API 키를 추가하면 됩니다.',
    docs_step_6_title: '6. macOS 권한을 허용합니다',
    docs_step_6_body:
      'Apple Developer 등록 배포가 아니기 때문에 처음 실행할 때 Privacy & Security에서 허용이 필요할 수 있습니다. 마이크나 시스템 오디오를 처음 사용할 때도 각각 권한 허용이 필요합니다.',
    docs_shot_1: '여기에 설정 화면 스크린샷 추가',
    docs_shot_2: '여기에 오디오 입력 선택 화면 추가',
    docs_shot_3: '여기에 번역 모드 선택 화면 추가',
    docs_shot_4: '여기에 라이브 자막 화면 추가',
    docs_shot_5: '여기에 DeepL 설정 화면 추가',
    docs_shot_6: '여기에 macOS 권한 화면 추가',
    docs_mode_title: '어떤 모드부터 시작하면 좋을까',
    docs_mode_body:
      '대부분의 경우 “전사 + 지연 번역” 표준이 가장 무난합니다. 체감 속도보다 안정성과 제어 가능성을 우선하기 쉽기 때문입니다.',
    docs_summary_title: '요약은 무엇을 기준으로 만들까',
    docs_summary_body:
      '요약은 현재 화면에 보이는 자막을 기준으로 만듭니다. 번역이 보이면 번역 쪽을 우선 사용합니다.',
    docs_export_title: '무엇이 저장될까',
    docs_export_body:
      '기본적으로는 오디오 파일을 자동 저장하지 않습니다. 복사나 다운로드를 했을 때만 그 시점의 내용이 파일 또는 클립보드로 나갑니다.',
    docs_permission_title: '처음 실행할 때 알아둘 점',
    docs_permission_body:
      'macOS가 앱을 열 수 없다고 경고하면 Privacy & Security에서 허용해야 합니다. 이는 미서명 또는 미 notarize 배포에서 흔한 경고입니다.',
    docs_keys_title: 'API 키는 어디서 구하나',
    docs_keys_body:
      'OpenAI API 키는 OpenAI 대시보드에서, DeepL API 키는 DeepL 계정의 API 페이지에서 발급합니다. 앱은 무료지만 OpenAI나 DeepL 사용료는 별도로 부과됩니다.',
    docs_admin_title: 'OpenAI Admin 키가 꼭 필요한가',
    docs_admin_body:
      '보통은 필요 없습니다. Admin 키는 예산이나 관리 기능을 보고 싶을 때만 선택적으로 쓰면 됩니다.',
    privacy_eyebrow: '개인정보 처리방침',
    privacy_title: '데이터가 어디에 남고 어디로 전송되는지',
    privacy_desc:
      '로컬에 남는 정보, 외부 클라우드로 전송되는 정보, 전송 시 암호화 범위, 그리고 한계까지 사실만 정리했습니다.',
    privacy_local_title: '로컬에 남는 정보',
    privacy_local_body:
      'API 키는 로컬에 저장되며 앱 설정 저장소에 평문으로 남기지 않습니다. 일반적인 사용 중에는 오디오 파일을 자동으로 저장하지 않으며, 사용자가 명시적으로 내보낼 때만 파일이 생성됩니다.',
    privacy_openai_title: 'OpenAI 통신 방식',
    privacy_openai_body:
      'OpenAI 실시간 전사는 데스크톱 앱의 main 프로세스에서 `wss://api.openai.com/v1/realtime` 로 WebSocket 연결을 사용합니다. `wss` 는 TLS 로 암호화된 WebSocket이므로 전송 중 제3자가 내용을 그대로 읽기 어렵습니다. 다만 OpenAI 기능을 켜면 오디오와 텍스트는 OpenAI로 전송되어 처리됩니다.',
    privacy_deepl_title: 'DeepL 통신 방식',
    privacy_deepl_body:
      'DeepL 번역은 `https://api.deepl.com` 또는 `https://api-free.deepl.com` 로 HTTPS 요청을 보냅니다. HTTPS 역시 TLS 로 보호되므로 전송 중 내용이 그대로 노출되기 어렵습니다. 대신 DeepL 기능을 켜면 번역 대상 텍스트는 DeepL로 전송됩니다.',
    privacy_limit_title: '안전성과 한계',
    privacy_limit_body:
      'TLS 는 네트워크 전송 구간을 보호하지만, 사용자의 Mac 이 악성코드에 감염되었거나 OS 계정이 침해된 상황까지 막아주지는 않습니다. OpenAI 는 business data 페이지에서 고객 business data 를 기본적으로 학습에 사용하지 않는다고 설명하지만, 클라우드 처리 자체는 이루어집니다. 민감한 정보를 보낼지는 사용자가 판단해야 합니다.',
    privacy_analytics_title: 'Aptabase 익명 분석',
    privacy_analytics_body:
      '앱은 선택적으로 Aptabase 익명 분석을 보낼 수 있습니다. 어떤 기능이 쓰이는지, 어디서 오류가 나는지 파악해 제품 개선에 쓰기 위한 것이며 설정에서 끌 수 있습니다.',
    tokusho_title: '특정상거래법에 따른 표기',
    tokusho_desc: '현재는 GitHub Releases를 통한 배포가 중심이며, 이 페이지에서는 운영 정보와 문의처를 공개합니다.',
    tokusho_seller: '운영자',
    tokusho_seller_value: 'TraLingo Project / nococoanolife',
    tokusho_operator: '운영 책임자',
    tokusho_operator_value: 'nococoanolife',
    tokusho_address: '소재지',
    tokusho_address_value: '요청이 있으면 지체 없이 공개합니다.',
    tokusho_phone: '전화번호',
    tokusho_phone_value: '요청이 있으면 지체 없이 공개합니다.',
    tokusho_contact: '문의처',
    tokusho_contact_value: 'GitHub Issues',
    tokusho_service_label: '제공 내용',
    tokusho_service_value: 'macOS 데스크톱 앱 배포 및 지원',
    tokusho_note:
      '이 페이지는 운영 정보 명시용입니다. 현재 배포 형태에 맞춰 가격, 결제, 환불 안내는 싣지 않았습니다.',
    terms_title: '이용약관',
    terms_desc: 'TraLingo는 현 상태 그대로 제공되며 전사와 번역의 정확도를 보장하지 않습니다.',
    terms_p1: '이용자는 적용 법령과 주변 서비스 규정을 지켜야 합니다.',
    terms_p2: '기밀 정보나 규제 정보의 처리 여부는 이용자 스스로 판단해야 합니다.',
  },
  zh: {
    nav_home: '首页',
    nav_features: '功能',
    nav_docs: '使用说明',
    nav_download: '下载',
    nav_github: 'GitHub',
    nav_tokusho: '特定商取引法相关信息',
    nav_privacy: '隐私政策',
    nav_terms: '使用条款',
    brand_tag: '实时转录 / 翻译 / 摘要',
    home_eyebrow: 'macOS 桌面应用',
    home_title: '把正在说的话，变成当场就能读懂的字幕。',
    home_lede:
      'TraLingo 会同时接收麦克风和系统音频，把原文和译文放在同一屏幕上，并根据当前可见字幕直接生成摘要。',
    home_point_1: '麦克风 + 系统音频',
    home_point_2: '原文 + 翻译同屏',
    home_point_3: '摘要 + 导出',
    home_cta_primary: '下载',
    home_cta_secondary: 'GitHub',
    home_mock_model_label: '转录模型 / 翻译模型',
    home_mock_audio_title: '音频',
    home_mock_mic_button: '麦克风',
    home_mock_system_button: '系统音频',
    home_mock_pipeline_title: '流程',
    home_mock_pipeline_mode_label: '模式',
    home_mock_pipeline_mode_value: '转录 + 翻译',
    home_mock_pipeline_health_label: '状态',
    home_mock_pipeline_health_value: '稳定',
    home_mock_pipeline_summary_label: '摘要',
    home_mock_pipeline_summary_value: '可用',
    home_mock_status: '一边看懂现场内容，一边把结果留下来。',
    home_original_label: '原文',
    home_translation_label: '翻译',
    home_summary_label: '摘要',
    home_mock_original_meta: '英文',
    home_mock_translation_meta: '中文',
    home_mock_summary_meta: '中文',
    home_original_text:
      'Research teams said the leaked data appears to match output produced inside an actual national-scale supercomputing environment.',
    home_translation_text:
      '研究团队认为，这批泄露数据与真实国家级超级计算环境生成的结果是一致的。',
    home_summary_text:
      '你可以同时看原文和译文，结束后再根据当前字幕直接整理出可复用的摘要。',
    story_eyebrow: '这些场景会立刻体现价值',
    home_story_title: '第一次看到，也能马上明白它适合做什么',
    home_story_1_title: '多语言会议里不容易掉队',
    home_story_1_body:
      '就算现场切换语言，原文和译文也会一起出现，不会轻易丢掉上下文。',
    home_story_2_title: '视频和直播也能直接用',
    home_story_2_body:
      '不仅能处理麦克风，也能处理系统音频，所以也适合通话、直播和播放场景。',
    home_story_3_title: '结束之后还能留下结果',
    home_story_3_body:
      '可以直接根据当前字幕生成摘要，并复制或下载，马上用于后续整理。',
    home_feature_1_title: '原文和翻译一起看',
    home_feature_1_body:
      '不会只留下翻译结果，因此专有名词和语义细节更容易由你自己确认。',
    home_feature_2_title: '马上知道音频有没有进来',
    home_feature_2_body:
      '麦克风和系统音频是带波形的按钮，开始前就能快速判断输入状态是否正常。',
    home_feature_3_title: '把有用的版本直接带走',
    home_feature_3_body:
      '不是只给你一段字幕，而是把摘要、复制、下载都接在同一个流程里。',
    origin_eyebrow: '为什么会做这个应用',
    origin_title: '因为工作里经常需要跨语言协作，但一直找不到真正顺手的工具',
    origin_body_1:
      '在全球化团队里工作后，需要口译或翻译支持的场景越来越多。我尝试找过现成工具，但一直没有找到一个能把原文、译文和后续整理放在同一流程里的产品。',
    origin_body_2:
      '后来我直接自己做了一个。结果比预想中更好，速度和精度都到了我愿意日常使用的程度。所以我决定把它公开出来，持续收集反馈、继续打磨，希望它能帮助更多人降低语言带来的门槛。',
    home_download_title: '马上试用',
    home_download_body:
      '最新版 macOS 应用通过 GitHub Releases 发布，更新记录和 issue 也在同一个地方。',
    home_download_primary: '下载',
    home_download_secondary: 'GitHub',
    support_eyebrow: 'Support TraLingo',
    support_title: '支持持续开发',
    support_body:
      '如果这个应用对你有帮助，可以通过 Buy Me a Coffee 支持开发。支持会用于后续改进、翻译质量调整和发布维护。',
    support_button: 'Buy Me a Coffee',
    features_eyebrow: '功能',
    features_title: '它能做什么',
    features_intro:
      'TraLingo 不只是显示翻译结果，还把听懂现场内容、确认音频状态、以及留下可用记录这几件事连在一起。',
    features_card_1_title: '原文和翻译同时显示',
    features_card_1_body:
      '读翻译时也能看到原文，更容易确认措辞、专有名词和语气差异。',
    features_card_2_title: '分别处理麦克风与系统音频',
    features_card_2_body:
      '可以按场景区分自己的声音、对方的声音、以及视频或直播的播放声音。',
    features_card_3_title: '可切换延迟翻译与实时翻译',
    features_card_3_body:
      '想要更快的体感就选实时翻译，想要更稳定的文本就选延迟翻译。',
    features_card_4_title: '支持单向和双向翻译',
    features_card_4_body:
      '既可以固定翻到一个目标语言，也可以在语言 A 和语言 B 之间来回切换。',
    features_card_5_title: '直接从当前字幕生成摘要',
    features_card_5_body:
      '不需要复制到别的工具里，当前屏幕上的字幕就可以直接作为摘要来源。',
    features_card_6_title: '立刻复制和导出',
    features_card_6_body:
      '可以直接导出成文本或 Markdown，方便继续整理成会议记录、学习笔记或分享材料。',
    features_card_7_title: '通过波形确认音频是否进入',
    features_card_7_body:
      '麦克风和系统音频按钮带有波形，能快速判断当前是否真的有声音进入应用。',
    features_card_8_title: '可切换到停靠布局',
    features_card_8_body:
      '可以切换到左、右、上、下停靠模式，方便与正在使用的其他应用并排查看。',
    features_card_9_title: '主题和字幕样式可调',
    features_card_9_body:
      '可以切换浅色 / 深色主题，也可以调字幕大小、粗细、行间距，方便按自己的阅读习惯调整。',
    features_card_10_title: '可查看模型与成本感知',
    features_card_10_body:
      '开始之前就能看到当前模型组合与大致成本，更方便在速度、质量和费用之间做取舍。',
    screenshots_eyebrow: '截图',
    screenshots_title: '预留真实截图位置',
    screenshots_body:
      '这里先预留位置，后面可以直接替换成最能说明用途的真实应用截图。',
    screenshots_slot_1: '这里放首页截图',
    screenshots_slot_2: '这里放翻译进行中的截图',
    screenshots_slot_3: '这里放摘要或导出截图',
    docs_eyebrow: '使用说明',
    docs_title: '给第一次使用的人看的指南',
    docs_intro:
      '这里按最不容易踩坑的顺序说明首次启动后的设置方式。建议先从稳定路径开始，再逐步尝试更高级的模式。',
    docs_step_1_title: '1. 输入 OpenAI API 密钥',
    docs_step_1_body:
      '先在 OpenAI 控制台创建 API 密钥，再把它填进设置页面。大多数转录和翻译功能都依赖这个密钥。',
    docs_step_2_title: '2. 选择音频输入',
    docs_step_2_body:
      '打开麦克风、系统音频或两者。波形动起来，就表示声音已经进入应用。',
    docs_step_3_title: '3. 选择翻译方式',
    docs_step_3_body:
      '单向模式会翻到一个固定语言。双向模式会在语言 A 和语言 B 之间切换。一般来说，延迟翻译比实时翻译更稳定。',
    docs_step_4_title: '4. 点击开始',
    docs_step_4_body:
      '点击开始后，片段会逐条出现在时间线里，最终片段会按设置补上翻译。',
    docs_step_5_title: '5. 如需 DeepL，再添加 DeepL 密钥',
    docs_step_5_body:
      'DeepL 不是必需的。只有在你准备把 DeepL 作为翻译提供方时，才需要额外填写 DeepL API 密钥。',
    docs_step_6_title: '6. 完成 macOS 权限许可',
    docs_step_6_body:
      '由于当前不是 Apple Developer notarization 分发，首次启动时可能需要在“隐私与安全性”里手动允许。第一次使用麦克风或系统音频时，也需要分别授权。',
    docs_shot_1: '这里放设置页面截图',
    docs_shot_2: '这里放音频输入选择截图',
    docs_shot_3: '这里放翻译模式选择截图',
    docs_shot_4: '这里放实时字幕截图',
    docs_shot_5: '这里放 DeepL 设置截图',
    docs_shot_6: '这里放 macOS 权限提示截图',
    docs_mode_title: '应该先用哪个模式',
    docs_mode_body:
      '对大多数人来说，“转录 + 延迟翻译”的标准模式最容易稳定使用，因为它更容易控制，也更适合先确认流程是否正常。',
    docs_summary_title: '摘要基于什么生成',
    docs_summary_body:
      '摘要基于当前屏幕上的字幕生成。如果有译文，摘要会优先使用译文。',
    docs_export_title: '哪些内容会被保存',
    docs_export_body:
      '默认不会自动保存音频文件。只有在你主动复制或下载时，才会把当前内容输出到文件或剪贴板。',
    docs_permission_title: '首次启动时要注意什么',
    docs_permission_body:
      '如果 macOS 提示应用无法打开，需要到“隐私与安全性”里手动允许。这是未签名或未 notarize 分发应用常见的提示。',
    docs_keys_title: 'API 密钥怎么获取',
    docs_keys_body:
      'OpenAI API 密钥从 OpenAI 控制台获取，DeepL API 密钥从 DeepL 账户的 API 页面获取。应用本身免费，但 OpenAI 或 DeepL 的调用费用需要由你自己的账号承担。',
    docs_admin_title: 'OpenAI Admin 密钥是否必须',
    docs_admin_body:
      '通常不是必须的。只有在你需要预算或管理相关功能时，才需要额外配置 Admin 密钥。',
    privacy_eyebrow: '隐私政策',
    privacy_title: '数据会留在哪里，哪些会发到外部',
    privacy_desc:
      '为了方便判断是否适合你的环境，这里只写事实：哪些内容保存在本地，哪些会发送到云端，传输如何加密，以及它的边界是什么。',
    privacy_local_title: '保留在本地的内容',
    privacy_local_body:
      'API 密钥保存在本地，不会以明文写进应用设置。通常使用时也不会自动生成音频文件，只有你主动导出或下载时才会创建文件。',
    privacy_openai_title: 'OpenAI 的通信方式',
    privacy_openai_body:
      'OpenAI 实时转录通过桌面应用 main 进程使用 `wss://api.openai.com/v1/realtime` 进行 WebSocket 通信。`wss` 使用 TLS 加密，所以传输中的内容不容易被第三方直接读取。但只要启用了 OpenAI 相关功能，音频和文本仍会被发送到 OpenAI 云端处理。',
    privacy_deepl_title: 'DeepL 的通信方式',
    privacy_deepl_body:
      'DeepL 翻译通过 `https://api.deepl.com` 或 `https://api-free.deepl.com` 发送 HTTPS 请求。HTTPS 同样使用 TLS 加密，所以传输中的文本不容易被第三方直接读取。但启用 DeepL 时，翻译文本仍会发送到 DeepL 处理。',
    privacy_limit_title: '安全性与边界',
    privacy_limit_body:
      'TLS 保护的是网络传输过程，不代表你的 Mac 本地一定安全。如果设备存在恶意软件、系统账号被入侵、或者你本身就开启了云端 provider，这些风险不在 TLS 能解决的范围内。OpenAI 在 business data 页面说明客户 business data 默认不会用于训练模型，但云端处理本身依然会发生。',
    privacy_analytics_title: '关于 Aptabase 匿名分析',
    privacy_analytics_body:
      '应用可以选择性地向 Aptabase 发送匿名分析，用于了解哪些功能被使用、哪里容易出错。这一项可以在设置中关闭，目的仅限于改进产品。',
    tokusho_title: '特定商取引法相关信息',
    tokusho_desc: '当前主要通过 GitHub Releases 发布应用。这里公开运营信息和联系渠道。',
    tokusho_seller: '运营方',
    tokusho_seller_value: 'TraLingo Project / nococoanolife',
    tokusho_operator: '负责人',
    tokusho_operator_value: 'nococoanolife',
    tokusho_address: '地址',
    tokusho_address_value: '如有请求，将及时提供。',
    tokusho_phone: '电话',
    tokusho_phone_value: '如有请求，将及时提供。',
    tokusho_contact: '联系方式',
    tokusho_contact_value: 'GitHub Issues',
    tokusho_service_label: '提供内容',
    tokusho_service_value: 'macOS 桌面应用的发布与支持',
    tokusho_note:
      '这个页面用于公开运营信息。根据当前发布方式，没有列出价格、支付和退款信息。',
    terms_title: '使用条款',
    terms_desc: 'TraLingo 按现状提供，不保证转录和翻译结果绝对准确。',
    terms_p1: '用户需要遵守适用法律以及相关平台规则。',
    terms_p2: '是否通过本应用处理机密信息或受监管信息，需要由用户自己判断。',
  },
}

function currentLang() {
  const params = new URLSearchParams(window.location.search)
  const fromQuery = params.get('lang')
  if (fromQuery && messages[fromQuery]) return fromQuery
  const stored = window.localStorage.getItem('tralingo-site-lang')
  if (stored && messages[stored]) return stored
  const browser = navigator.language.slice(0, 2)
  return messages[browser] ? browser : 'ja'
}

function translatePage(lang) {
  const dict = messages[lang]
  document.documentElement.lang = lang
  for (const node of document.querySelectorAll('[data-i18n]')) {
    const key = node.getAttribute('data-i18n')
    if (key && dict[key]) {
      node.textContent = dict[key]
    }
  }
  for (const button of document.querySelectorAll('[data-lang]')) {
    button.classList.toggle('active', button.getAttribute('data-lang') === lang)
  }
  const page = document.documentElement.dataset.page
  if (page) {
    for (const link of document.querySelectorAll('.nav-links a[href]')) {
      const href = link.getAttribute('href') || ''
      const normalized = href.replace('./', '')
      const active =
        (page === 'home' && normalized === 'index.html') ||
        (page === 'features' && normalized === 'features.html') ||
        (page === 'docs' && normalized === 'docs.html') ||
        (page === 'privacy' && normalized === 'privacy.html') ||
        (page === 'tokusho' && normalized === 'tokusho.html') ||
        (page === 'terms' && normalized === 'terms.html')
      link.classList.toggle('active', active)
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const apply = (lang) => {
    window.localStorage.setItem('tralingo-site-lang', lang)
    const url = new URL(window.location.href)
    url.searchParams.set('lang', lang)
    window.history.replaceState({}, '', url.toString())
    translatePage(lang)
  }

  for (const button of document.querySelectorAll('[data-lang]')) {
    button.addEventListener('click', () => {
      const lang = button.getAttribute('data-lang')
      if (lang && messages[lang]) {
        apply(lang)
      }
    })
  }

  translatePage(currentLang())
})
