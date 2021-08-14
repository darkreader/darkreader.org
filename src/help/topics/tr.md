# Yardım (Türkçe)

Bu döküman Dark Reader özellikleri hakkında size rehberlik edecek.

- [SSS](#faq)
- [İletişim](#contacts)
- [Üst bölüm](#top-section)
- [Filtre ayarları](#filter-settings)
- [Özel site ayarları](#custom-site-settings)
- [Site listesi](#site-list)
- [Daha fazla bölümü](#more-tab)
- [Tema oluşturma modları](#theme-generation-modes)
- [Üst bölüm](#bottom-section)
- [Geliştirici araçlarını kullanma](#using-dev-tools)


<h2 id="top-section">Üst bölüm</h2>

<img src="/images/help/darkreader-top-section.png" alt="Top section" style="width: 15rem;" />

- **Bu site için aç-kapat** Siteyi görmezden gel (yada tekrar etkinleştir).
- **Açık-Kapalı** Eklentiyi Açar yada Kapatır.
- **Kısayol tuşunu ayarlamak** için butonların altındaki bağlantılara tıklayın.
- Not: Eğer buton gri halde ise bu tarayıcının bu sayfayı değiştirmek için olan girişimlere izin vermediği anlamına gelir.


<h2 id="filter-settings">Filtre ayarları</h2>

<img src="/images/help/darkreader-filter-settings.png" alt="Filter settings" style="width: 15rem;" />

Parlaklık,kontrast,sepya ve doygunluk(gri ton) ayarlarını, ekranınıza ve odanızın aydınlatmasına uyması için değiştirebilirsiniz


<h2 id="custom-site-settings">Özel site ayarları</h2>

<img src="/images/help/darkreader-custom-site-settings.png" alt="Custom settings" style="width: 15rem;" />

**Sadece** butonu yukarıdaki ayarların sadece bu site için geçerli olduğunu belirtir.

Kullanmak için: Öncelikle butona tıklayın(Vurgulanmış hale gelmeli), ardından arzu ettiğiniz şekilde ayarları bu site için değiştirebilirsiniz.İptal etmek için butona tekrar tıklayın


<h2 id="site-list">Site listesi</h2>

<img src="/images/help/darkreader-site-list.png" alt="Site list" style="width: 15rem;" />

- Eğer Dark Reader'ın sadece listelenen sitelerde çalışmasını istiyorsanız **Sadece listedekiler** seçeneğini kullanın.
- **Hariç tutulanlar** eklentinin listedeki sitelerde çalışmasını önler.
- Muhtemel alan adı biçimleri: "`google.com, mail.google.com, google.*, google.com/maps`" gibidir.
- **Aç-kapa** butonu ([Üst bölüm](#top-section)) Şu anki siteyi listeye ekler.

<h2 id="more-tab">Daha fazla bölümü</h2>

<img src="/images/help/darkreader-more-tab.png" alt="More tab" style="width: 15rem;" />

- Listeden **Font seç** (Yada Firefox için font ismi gir),**İşaret kutusuna** tıkla.
- **Metin kalınlığını** ayarla.
- Bir **Tema oluşturma modu seç**.


<h2 id="theme-generation-modes">Tema oluşturma modları</h2>

<figure>
    <img src="/images/help/darkreader-theme-modes.png" alt="Filter+ vs. Static vs. Dynamic mode" />
    <figcaption>Filter+ vs. Static vs. Dynamic mode</figcaption>
</figure>

- **Filtre** Dark reader için, CSS filtrelerine dayanan temel moddur.
*Tüm sayfayı* ters çevirir ve ardından *Bazı parçaları* eski haline getirir.
GPU kullanır.
*Hızlı* ve güçlüdür ancak birkaç sorun içerir:
Alt-pixel oluşturmayı devredışı bırakır,
Halihazırda karanlık olan kısımları aydınlatır,
Büyük sayfalarda takılmaya neden olur,
Ve Firefox'ta bazı sayfların hata vermesine neden olabilir.
- **Filtre+** Filtre ile aynıdır, ama özel SVG filtrelerine dayanır
Ve Resimleri daha az donuk yapmak için *Rekleri daha iyi işler*
Firefox'ta pek iyi çalışmaz.
- **Statik** sürekli basit stil şemaları oluşturur.
- **Dinamik** Sitenin stil şemalarını, arkaplan resimlerini ve vektör grafiklerini analiz eder.
Sayfa yüklenirken biraz kaynak kullanımı gerektirir.
Ama *en iyi* görsel sonucu sağlar
Bu mod üzerinde halen çalışıyoruz,
ama şimdiden çoğu modern sitede gayet iyi çalışıyor.


<h2 id="bottom-section">Alt bölüm</h2>

<img src="/images/help/darkreader-footer.png" alt="Bottom section" style="width: 15rem;" />

- **Gizlilik politikamızı** okuyun, Bizi **Twitter'dan** takip edin, Kaynak kodunu görmek ve katkı sağlamak için **Github**'ı ziyaret edin, bu sayfadan **Yardım** dökümanını okuyun.
- **Bağış** – eğer eklentiyi beğendiyseniz, lütfen Dark Reader'ın geliştirilmesi için bağış yaparak desteğinizi gösterin.
Crowdfunding Open Collective tarafından sağlanmaktadır,ödemeler Stripe üzerinden gerçekleşmektedir.
- **Haberler** – Yeni sürümlerden, notlardan ve geliştirmelerden haber alın.
- **Geliştirici araçları** – Şimdiki tema modunu düzenlemek için bir düzenleyici açar.


<h2 id="using-dev-tools">Geliştirici ayarlarını kullanma</h2>

If you are familiar with CSS selectors, you can help by suggesting a fix for filtering a website.
Read how to use the developer tools [here](https://github.com/darkreader/darkreader#how-to-contribute).


<h2 id="faq">FAQ</h2>

#### The extension asks for permissions to read website data

The extension needs these permissions to be able to analyze and modify website appearence,
determine if a website is disabled by your settings or to use site-specific rules.
We do not insert ads and do not collect any data or send it anywhere.
The extension is fully open-source and has no obfuscated code.
Our monetization is transparent and is based on users' donations.

#### The extensions store page and settings pages remain white

The extension has no access to these pages.

#### New tab page and browser theme remain white

The extension cannot change the appearence of a new tab or browser (though in Firefox it can since version 60).
We recommend installing a dark theme or new tab extension from extensions store.

#### Screen flashes white when opening a new tab or navigating to a website

Before loading a website, Chrome shows the theme background color by default.
We recommend installing a dark theme from the store.

#### The extension doesn't work at all

If you have similar dark mode extensions installed, disable them, then reload tabs.
Click Dark Reader icon, check if top-right button is set to **On** and that **Toggle site** is not excluding the current site.
Open **Site list** tab, check that **Not invert listed** is selected.
If nothing helps, something terrible has happened, e-mail us.

#### The website is displayed incorrectly or works slowly

Please send the website address, a screenshot, your OS and browser versions to our e-mail.
We will try to investigate the reason, at least for a popular website.
Also try changing **theme generation mode** or try using **Light mode**.
Check that the website is not listed under **Site list** tab.

#### The extension doesn't work in incognito mode

Open **chrome://extensions** page, find **Dark Reader**, click **Allow in incognito**.

#### The extension doesn't work for local files

Open **chrome://extensions** page, find **Dark Reader**, click **Allow access to file URLs**.

#### Entire website is not displayed in Filter mode

If you are using Chrome for Mac OS, update Mac OS up to 10.13, this should update your video drivers.
If you are using Firefox, this is most likely a browser bug, use another mode for such websites.


<h2 id="contacts">Contacts</h2>

For any questions e-mail to [darkreaderapp@gmail.com](mailto:darkreaderapp@gmail.com)
