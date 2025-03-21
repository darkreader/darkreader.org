# ヘルプ (日本語)

- [かんたんガイドとFAQ](#video)
- [利用規約](../../terms/)
- [個人情報保護方針](../../privacy/)
- [お問い合わせ](#contacts)

<h2 id="options-icon">ツールバーのアイコン</h2>

<img src="/images/help/darkreader-pin-toolbar-icon.png" alt="オプション用アイコン" style="width: 20rem;" loading="lazy" />

インストール後に Dark Reader のアイコンが表示されない場合、
アドレスバーの右にある**拡張機能**ボタンをクリックし、Dark Reader の横のボタンをクリックします。


<h2 id="video" class="text-highlight">かんたんビデオガイド</h2>

- <a target="_blank" rel="noopener" data-s="dryt-help-text" href="https://www.youtube.com/watch?v=849mznBKmIQ">1分間のビデオガイド </a>
- <a target="_blank" rel="noopener" data-s="dryt-help-text" href="https://www.youtube.com/shorts/9nQjBBe8K44">30秒のビデオガイド（モバイルアプリ） </a>


<h2 id="top-section">オプションの上部</h2>

<img src="/images/help/darkreader-top-section.png" alt="オプションの上部ボタン" style="width: 15rem;" loading="lazy" />

- **サイトの切り替え**ボタンは、現在見ているサイトを無視リストに追加します（または除去）。
- **オン/オフ**は、この拡張機能を有効化または無効化します。
- ボタンの下のリンクをクリックすると、拡張機能の**ホットキーの変更**です。
- 注: 切り替えボタンが灰色で押せない場合、現在のページへのスクリプトの追加をブラウザが制限しています。


<h2 id="filter-settings">フィルタの調整</h2>

<img src="/images/help/darkreader-filter-settings.png" alt="フィルタの設定画面" style="width: 15rem;" loading="lazy" />

モード、輝度、コントラスト、セピア、彩度（グレースケール）の設定を調整します。画面の設定値と部屋の照明の組み合わせの状態を調整できるでしょう。


<h2 id="custom-site-settings">特定のサイト用の設定</h2>

<img src="/images/help/darkreader-custom-site-settings.png" alt="特定のサイト用の設定画面" style="width: 15rem;" loading="lazy" />

**このサイトのみ適用**ボタンは、上記のフィルタの設定を現在のサイトにのみ適用します。

使用するには、まずボタンをクリックし（選択状態の強調色になります）、それから現在のサイト用に調整します。再びボタンを押すとキャンセルされます。


<h2 id="site-list">サイトリスト</h2>

<img src="/images/help/darkreader-site-list.png" alt="サイトリストの画面" style="width: 15rem;" loading="lazy" />

- **反転リスト**は、リストされたサイトでのみ Dark Reader を動作させたい場合です。
- **非反転リスト**では、掲載したサイトで拡張機能の動作を阻止します。
- 値に使える表記法は google.com, mail.google.com, google.*, google.com/maps など。
- **切り替え**ボタン（[オプションの上部](#top-section)）をクリックし、現在のサイトをこのリストに追加します。

<h2 id="more-tab">その他のタブ</h2>

<img src="/images/help/darkreader-more-tab.png" alt="その他のタブ" style="width: 15rem;" loading="lazy" />

- 一覧から **フォントを選択**し（または Firefox でフォント名を入力）、**チェックボックス**をクリックします。
- **文字の縁取り**を調整します。
- **テーマの生成法**を選択します。


<h2 id="theme-generation-modes">テーマの生成法</h2>

<figure>
    <img src="/images/help/darkreader-theme-modes.png" alt="フィルタ+、静的、動的" loading="lazy" />
    <figcaption>左から、フィルタ+、静的、動的</figcaption>
</figure>

- **動的**は、サイトのスタイルシートと、背景画像、またベクター画像を細かく分析します。
最初の読み込み時に一部のリソースを使いますが、
「*最高*」の表示結果になります。
- **フィルタ**は、CSS フィルタを基にした、最初の Dark Reader の動作法です。
「*ページ全体を反転*」し、「*一部を元に戻す*」動作です。
GPU リソースを使います。
「*高速*」かつ強力ですが、少し問題があります:
文字のサブピクセルを無効にし、
既に暗い部分は明るく反転し、
大きなページでは遅延し、
Firefox では一部のページの描画に失敗します。
- **フィルタ＋**は、上記フィルタと同様ですが、独自の SVG フィルタに基づき
「*色をより適切に処理*」し画像が冴えない色になりにくくします。
Firefox ではうまく動作しません。
- **静的**は、基本的なスタイルシートを素早く生成します。


<h2 id="bottom-section">下部</h2>

<img src="/images/help/darkreader-footer.png" alt="オプションの下部" style="width: 15rem;" loading="lazy" />

- **個人情報**は、私たちの個人情報保護方針です。**Twitter**をフォローしてね。**Github**でソースは貢献者をご覧ください。このページの**ヘルプ**もあります。
- **寄付する** – 拡張機能を気に入っていただけたら、Dark Reader の開発支援をご検討ください。
- **ニュース** – 更新履歴と重要なイベントをお知らせします。
- **開発ツール** – 現在のテーマのモードの設定編集ウィンドウを開きます。


<h2 id="using-dev-tools">開発ツールの使用</h2>

CSS セレクタを理解されているなら、サイトのフィルターの改善を提案できます。
ここで[開発ツールの使用法](https://github.com/darkreader/darkreader#how-to-contribute)をご覧ください、


<h2 id="tips">上級者向けの使用法</h2>

もっと知りたいですか？<a href="../../tips/">コツと使い方</a>もご覧ください。


<h2 id="faq">よくある質問</h2>

<h4 class="text-highlight">Dark Reader を支援する方法</h4>

1. <a data-s="d-help-faq" href="https://darkreader.org/support-us">Dark Readerの使用料を支払う</a>。
2. <a data-s="drios-help-faq" href="https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180">iOS/macOS のアプリ</a>を購入しインストールする。
3. 友達や仕事仲間に紹介してください。

#### 拡張機能がサイトのデータを読み取る権限を要求しています

本拡張機能は次の機能のために権限が必要です。サイトの外観を分析し、修正したり
特定のサイト用の設定を使うかを判断します。
広告を挿入したり、なんらかのデータを収集しどこかへ送信したりはしません。

#### 拡張機能のストアのページと設定ページが白いままです

本拡張機能はこれらのページにアクセスできません。

#### 新規タブとブラウザーのテーマが白いままです

ブラウザーの設定からダークテーマを使用してください。

#### 新規タブを開いたり、サイトに移動中に画面が一瞬白く光ります

サイトを読み込む前に、ブラウザーは、最初にテーマの背景色を表示します。
ブラウザーの設定からダークテーマを使用してください。

#### この拡張機能がまったく動いていません

ブラウザーを更新してください。
Dark Reader のアイコンをクリックし、右上のボタンが**オン**になっているか、**サイトの切り替え**が現在のサイトを除外していないか確認します。
「**サイトリスト**」タブを開き、**非反転リスト**に選択されていないか確認します。
助けにならず酷い事態が起きたらメールでお問い合わせください。

#### サイトが正しく表示されない、または動作が遅い

サイトのアドレス、スクリーンショット、OS とブラウザのバージョンをメールで送信してください。
少なくとも、よく使われるサイトでは原因を調査します。
そのサイトでのみ**フィルタモード**や、**ライトモード**をお試しください。
「**サイトリスト**」のタブに追加されていないか確認してください。

#### 拡張機能がシークレットモードでで動作しない

**chrome://extensions** のページを開き、**Dark Reader**を見つけシークレット（プライベート）モードでの実行を**許可**します。

#### 拡張機能が端末内のファイルで動作しない

**chrome://extensions** のページを開き、**Dark Reader**を見つけ、**ファイルの URL のアクセスを許可する**。

<h2 id="more">もっと</h2>

さらなる情報は、[上級者向けの使用法](../../tips/)をご覧ください。


<h2 id="contacts">お問い合わせ</h2>

質問はこちらへ: [support@darkreader.org](mailto:support@darkreader.org)（英語で）
