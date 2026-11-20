# ヘルプ（日本語）

<script id="edge-message-script">
    if (navigator.userAgent.includes('Edg') && navigator.userAgent.includes('Mobile')) {
        const script = document.getElementById('edge-message-script');
        const paragraph = document.createElement('blockquote');
        paragraph.textContent = 'Microsoft Edgeをご利用の皆様へ。ブラウザ内蔵のダークモードがDark Readerの動作に干渉します。［メニュー］→［設定］→［外観］→［すべてのWebページをダークテーマにする］へ進み、有効になっている場合はクリックして無効にしてください。';
        script.parentElement.insertBefore(paragraph, script);
    }
</script>

<div class="intro">
    ご利用の皆様へ。
    私たちはこのアプリを効率的で使いやすくするため、たくさんの愛情と労力を注いできました。
    皆様からの<a data-s="d-help-top" href="https://darkreader.org/support-us" target="_blank">お支払い</a>は、新機能の追加や改善を続ける大きな助けとなります。
</div>

- [クイックガイドとFAQ](#video)
- [利用規約](../../terms/)
- [プライバシーポリシー](../../privacy/)
- [お問い合わせ](#contacts)


<h2 id="options-icon">ツールバーアイコン</h2>

<img src="/images/help/darkreader-pin-toolbar-icon.png" alt="オプションアイコン" style="width: 20rem;" loading="lazy" />

インストール後にDark Readerの**アイコンが非表示**になっている場合は、アドレスバーの横にある**拡張機能**ボタンをクリックし、さらにDark Readerの横にあるもう1つのボタンをクリックしてください。


<h2 id="video" class="text-highlight">動画クイックガイド</h2>

- <a target="_blank" rel="noopener" data-s="dryt-help-text" href="https://www.youtube.com/watch?v=849mznBKmIQ">動画ガイド</a>
- <a target="_blank" rel="noopener" data-s="dryt-help-text" href="https://www.youtube.com/shorts/9nQjBBe8K44">動画ガイド（モバイルアプリ版）</a>

<blockquote class="pie-help">
    <p>
        <a class="small-pie-logo" target="_blank" rel="noopener" data-s="pie-help-badge"
            href="https://pie.org/darkreader">
            Pie
        </a>
        パートナー拡張機能の<strong><a target="_blank" rel="noopener" data-s="pie-help-text"
            href="https://pie.org/darkreader">
                Pie</a></strong>もぜひチェックしてみてください。
        あらゆるWebサイト上の広告をブロックし、広告表示への参加を選択すると報酬を受け取ることもできます。
        <strong><a target="_blank" rel="noopener" data-s="pie-help-text"
            href="https://pie.org/darkreader">
                詳細はこちら</a></strong>。
    </p>
</blockquote>


<h2 id="top-section">上部セクション</h2>

<img src="/images/help/darkreader-top-section.png" alt="上部セクション" style="width: 15rem;" loading="lazy" />

- **サイト切替**ボタンは、現在のサイトを除外リストに追加（またはリストから削除）します。
- **オン/オフ**スイッチは、拡張機能を有効または無効にします。
- ボタンの下にあるリンクをクリックすると、拡張機能の**ホットキーを変更**できます。
- 注：切替ボタンがグレー表示になっている場合は、現在のページへのスクリプト挿入がブラウザによって制限されていることを意味します。


<h2 id="filter-settings">フィルタ設定</h2>

<img src="/images/help/darkreader-filter-settings.png" alt="フィルタ設定" style="width: 15rem;" loading="lazy" />

モード、明るさ、コントラスト、セピア、彩度（「グレースケール」）の設定を調整します。これにより、画面の特性や部屋の照明に合わせて表示を最適化できます。


<h2 id="custom-site-settings">サイトごとのカスタム設定</h2>

<img src="/images/help/darkreader-custom-site-settings.png" alt="カスタム設定" style="width: 15rem;" loading="lazy" />

**このサイトのみ適用**ボタンは、上記のフィルタ設定を現在のWebサイトのみに適用するかどうかを切り替えます。

使用するには、まずボタンをクリック（強調表示されます）してから、現在のWebサイトに合わせて設定を好みに調整してください。解除するには、もう一度ボタンをクリックします。


<h2 id="site-list">サイトリスト</h2>

<img src="/images/help/darkreader-site-list.png" alt="サイトリスト" style="width: 15rem;" loading="lazy" />

- リストに記載したWebサイトでのみDark Readerを動作させたい場合は、**反転リスト**を使用します。
- **非反転リスト**を選択すると、リストに記載したWebサイトでは拡張機能が動作しなくなります。
- 指定可能なパターン例: `google.com, mail.google.com, google.*, google.com/maps` など。
- 正規表現もサポートされています。`/www\.google\..*/` のように、前後に `/` を付けて記述してください。
- （[上部セクション](#top-section)にある）**切替**ボタンをクリックすると、現在のサイトがこのリストに追加されます。

<h2 id="more-tab">［その他］タブ</h2>

<img src="/images/help/darkreader-more-tab.png" alt="［その他］タブ" style="width: 15rem;" loading="lazy" />

- リストから**フォントを選択**し（Firefoxの場合はフォント名を入力）、**チェックボックス**をクリックします。
- **文字の縁取り**を調整します。
- **テーマ生成モード**を選択します。


<h2 id="theme-generation-modes">テーマ生成モード</h2>

<figure>
    <img src="/images/help/darkreader-theme-modes.png" alt="フィルタ+・静的・動的モードの比較" loading="lazy" />
    <figcaption>フィルタ+ vs. 静的 vs. 動的モード</figcaption>
</figure>

- **動的**は、Webサイトのスタイルシート、背景画像、ベクターグラフィックスを深く解析します。
ページの初回読み込み時に多少のリソースを必要としますが、*最も優れた*表示結果が得られます。
- **フィルタ**モードはCSSフィルタに基づいています。
*ページ全体を反転*したうえで、*一部の要素を元に戻し*ます。
GPUリソースを必要とします。
*高速*で強力ですが、いくつかの問題があります。
テキストのサブピクセルレンダリングが無効になる、
すでに暗い部分が明るく反転してしまう、
大きなページで動作が重くなる、
Firefoxで一部のページを描画できない、といった点です。
- **フィルタ+**は「フィルタ」と同じ仕組みですが、カスタムSVGフィルタに基づいており、
*色の扱いがより優れている*ため画像のくすみを抑えられます。
Firefoxではうまく動作しません。
- **静的**は、基本的なスタイルシートを高速で生成します。


<h2 id="bottom-section">下部セクション</h2>

<img src="/images/help/darkreader-footer.png" alt="下部セクション" style="width: 15rem;" loading="lazy" />

- **プライバシーポリシー**の確認、**Twitter**のフォロー、**GitHub**でのソース閲覧や貢献、およびこのページの**ヘルプ**ドキュメントの閲覧ができます。
- **寄付する** – この拡張機能を気に入っていただけた場合は、Dark Readerの継続的な開発へのご支援をご検討ください。
- **ニュース** – リリースノートや重要なお知らせを通知します。
- **開発ツール** – 現在のテーマモード用の設定エディタを開きます。


<h2 id="using-dev-tools">開発ツールの使い方</h2>

CSSセレクタに詳しい方は、サイトのフィルタリングを修正する提案を行うことでご協力いただけます。
開発ツールの使い方は[こちら](https://github.com/darkreader/darkreader#how-to-contribute)をご覧ください。


<h2 id="tips">上級者向けのヒント</h2>

さらに詳しく知りたい場合は、<a href="../../tips/">ヒントとコツ（Tips & Tricks）</a>のページをご覧ください。


<h2 id="faq">よくある質問（FAQ）</h2>

<h4 class="text-highlight">Dark Readerを支援する方法</h4>

1. <a data-s="d-help-faq" href="https://darkreader.org/support-us">Dark Readerの使用料を支払う</a>。
2. <a data-s="drios-help-faq" href="https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180">iOS/macOSアプリ</a>をインストールする。
3. 友人や同僚にすすめる。

#### 拡張機能が「Webサイトのデータを読む」権限を要求します

拡張機能がWebサイトの見た目を解析・変更し、
サイトごとの設定を適用するためにこれらの権限が必要です。
広告の挿入やデータの収集・外部への送信は一切行っていません。

#### 拡張機能ストアのページや設定ページが白いままです

拡張機能はこれらのページへのアクセス権限を持っていません。

#### 新しいタブページやブラウザのテーマが白いままです

ブラウザの設定でダークテーマを選択してください。

#### 新しいタブを開くときやWebサイトへ移動するときに画面が一瞬白く点滅します

Webサイトを読み込む前、ブラウザは既定でテーマの背景色を表示します。
ブラウザの設定でダークテーマを選択してください。

#### 拡張機能がまったく動作しません

ブラウザを最新版に更新してください。
Dark Readerのアイコンをクリックし、右上のボタンが**オン**になっていること、および**サイト切替**で現在のサイトが除外されていないことを確認してください。
**サイトリスト**タブを開き、**非反転リスト**が選択されていることを確認してください。
それでも解決しない場合は重大な不具合が発生している可能性がありますので、メールでお問い合わせください。

#### Webサイトの表示が崩れる、または動作が重いです

そのWebサイトのアドレス、スクリーンショット、お使いのOSとブラウザのバージョンをメールでお送りください。
少なくとも利用者の多いサイトについては原因の調査を試みます。
特定のWebサイトに対して**フィルタモード**または**ライトモード**の使用もお試しください。
また、そのWebサイトが**サイトリスト**タブに登録されていないかもご確認ください。

#### シークレットモードで拡張機能が動作しません

**chrome://extensions**ページを開き、**Dark Reader**を見つけて、**シークレットモードでの実行を許可する**をクリックしてください。

#### ローカルファイルで拡張機能が動作しません

**chrome://extensions**ページを開き、**Dark Reader**を見つけて、**ファイルのURLへのアクセスを許可する**をクリックしてください。

<h2 id="more">その他</h2>

詳しくは[上級者向けのヒント](../../tips/)をご覧ください。


<h2 id="contacts">お問い合わせ</h2>

ご質問がある場合は、[support@darkreader.org](mailto:support@darkreader.org)までメールをお送りください。
