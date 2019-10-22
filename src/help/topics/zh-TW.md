# 說明 (正體中文)

本文將帶您認識 Dark Reader 的各項功能。

- [常見問題](#faq)
- [聯絡方式](#contacts)
- [頂端列](#top-section)
- [濾鏡設定](#filter-settings)
- [個別網站設定](#custom-site-settings)
- [網站列表](#site-list)
- [更多選項](#more-tab)
- [主題生成模式](#theme-generation-modes)
- [底端列](#bottom-section)
- [開發者工具](#using-dev-tools)


<h2 id="top-section">頂端列</h2>

<img src="/images/help/darkreader-top-section.png" alt="Top section" style="width: 15rem;" />

- 「**切換網站**」可將目前網站加入忽略列表（或從列表中移除）。
- 「**開啟／關閉**」可啟用或停用擴充套件。
- 點選按鍵下方的連結**修改熱鍵**。
- 若切換按鍵反灰，則表示瀏覽器限制腳本注入目前的網頁。


<h2 id="filter-settings">濾鏡設定</h2>

<img src="/images/help/darkreader-filter-settings.png" alt="Filter settings" style="width: 15rem;" />

可調整各項濾鏡數值，以適應您的螢幕參數和室內環境亮度。


<h2 id="custom-site-settings">個別網站設定</h2>

<img src="/images/help/darkreader-custom-site-settings.png" alt="Custom settings" style="width: 15rem;" />

「**僅適用於**」按鍵只會將設定值應用於目前網站。

點擊按鍵以調整設定，再次點擊則取消設定。


<h2 id="site-list">網站列表</h2>

<img src="/images/help/darkreader-site-list.png" alt="Site list" style="width: 15rem;" />

- 使用「**反色列表**」讓 Dark Reader 只對列表中的網站有作用。
- 「**不反色列表**」避免擴充套件應用於列表中的網站。
- 可填入 `google.com`、`mail.google.com`、`google.*`、`google.com/maps` 等等。
- 點擊「**切換**」按鍵將網站加入列表。

<h2 id="more-tab">更多選項</h2>

<img src="/images/help/darkreader-more-tab.png" alt="More tab" style="width: 15rem;" />

- 從列表**選取字型**（或在 Firefox 輸入字型名稱），勾選方框。
- 調整**文字描邊**（筆畫粗細）。
- 選擇任一**主題生成模式**。


<h2 id="theme-generation-modes">主題生成模式</h2>

<figure>
    <img src="/images/help/darkreader-theme-modes.png" alt="Filter+ vs. Static vs. Dynamic mode" />
    <figcaption>過濾+、靜態、動態模式之比較</figcaption>
</figure>

- 「**過濾**」是 Dark Reader 最一開始的模式，奠基於 CSS 濾鏡。
網頁色彩會**全部反轉**，再**回復部分**的顏色。
必須用到 GPU 的資源。
雖然算圖**快速**且有效，但有幾個問題：
停用文字的子像素算圖（sub-pixel rendering）、
將已經是暗色的部分轉成亮色、
大型頁面會造成遲滯、
Firefox 會無法呈現某些網頁。
- 「**過濾+**」效果和「過濾」一樣，但是奠基於 SVG 濾鏡，
**色彩處理得更好**，讓圖片比較不那麼呆版。
在 Firefox 上效果很糟。
- 「**靜態**」會迅速生成基本樣式表。
- 「**動態**」會深入分析網站的樣式表、背景圖片、向量圖形。
在網頁載入時會占用一些資源，
但能產生**最好**的視覺效果。
雖然動態模式還在開發中，
但已能順利應用於許多現代化的網站。


<h2 id="bottom-section">底端列</h2>

<img src="/images/help/darkreader-footer.png" alt="Bottom section" style="width: 15rem;" />

- 請閱讀我們的**隱私政策**，追蹤我們的 **Twitter**。
- 「**捐贈**」──若您喜歡這個擴充套件，請考慮支持活躍的 Dark Reader 開發團隊。
群眾募資由 Open Collective 主導，目前以 Stripe 處理帳款。
- 「**新聞**」──版本資訊和重要活動的通知。
- 「**開發者工具**」──對當前主題開啟設定編輯器。


<h2 id="using-dev-tools">使用開發者工具</h2>

若您熟悉 CSS 選擇器，對某些網站歡迎提供修正建議。
請閱讀開發者工具的[使用說明](https://github.com/darkreader/darkreader#how-to-contribute)。


<h2 id="faq">常見問題</h2>

#### 為何擴充套件要求讀取網站資料的權限

擴充套件需要這些權限才能分析和修改網站的外觀，
並判斷是否要根據您的設定來停用或應用特殊規則。
我們不會插入廣告，也不會蒐集任何資訊，或將資訊送到任何地方。
本套件完全開放原始碼，亦無隱晦不明的程式碼。
我們的金流是透明的，而且來自使用者捐獻。

#### 應用程式商店和設定的頁面怎麼還是白的

本套件對這些頁面沒有權限

#### 新分頁和瀏覽器主題怎麼還是白的

本套件無法改變新分頁或瀏覽器外觀（但 Firefox 60 以後可以）。
請從應用程式商店下載其他暗色主題或新分頁套件。

#### 開啟新分頁或瀏覽網站時螢幕會閃白光

當載入網頁時，Chrome 預設會呈現瀏覽器主題的背景色，
所以您應該從應用程式商店安裝暗色主題。

#### 擴充套件完全無效

如果您有安裝其他類似的套件，請先停用它們，再重新載入分頁。
點擊 Dark Reader 圖示，檢查右上角按鍵是否已**開啟**。
打開「**網站列表**」，確認已選取「**不反色列表**」。
若依然無效，大有問題，請發 e-mail 給我們。

#### 網站呈現錯誤或運作緩慢

請發 e-mail 告訴我們該網站網址、網頁擷圖、您的作業系統和瀏覽器版本。
起碼對知名網站，我們會試著調查原因。
也請試試看更改「**主題生成模式**」或使用「**明亮模式**」。
檢查該網站是否不在「**網站列表**」。

#### 擴充套件在無痕模式無效

開啟「**chrome://extensions**」頁面，找到「**Dark Reader**」，點擊「**允許在無痕模式中執行**」。

#### 擴充套件對本機檔案無效

開啟「**chrome://extensions**」頁面，找到「**Dark Reader**」，點擊「**允許存取檔案網址**」。

#### 在「過濾」模式下整個網站沒有畫面

若您是在 Mac OS 上使用 Chrome，請將 Mac OS 更新至 10.13，此舉應該會更新顯示驅動程式。
若您使用 Firefox，這很有可能是瀏覽器臭蟲，請改用其他模式。


<h2 id="contacts">聯絡方式</h2>

有任何疑問請 e-mail 至 [darkreaderapp@gmail.com](mailto:darkreaderapp@gmail.com)
