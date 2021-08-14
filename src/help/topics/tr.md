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

Eğer CSS Seçicileri hakkında bilgi sahibi iseniz, bir web sitesi için düzeltme önererek yardım edebilirsiniz.
[Buradan](https://github.com/darkreader/darkreader#how-to-contribute) Geliştirici araçlarını nasıl kullanacağınız hakkında bilgi alabilirsiniz.	


<h2 id="faq">SSS</h2>

#### Eklenti web sitesini okumak için izin istiyor

Eklenti siteleri analiz etmek ve değiştirmek için bu izne ihtiyaç duyar,
sitenin sizin ayarlarınızda ne şekilde yer aldığını belirlemek için de.
Herhangi bir reklam yerleştirmiyor, bilgilerinizi toplamıyor yada bir yere göndermiyoruz.
Eklenti tamamen açık kaynak kodludur ve gizli bir kod içermez.
Para kazanma sistemimiz tamamen şeffaftır ve kullanıcıların bağışlarına dayanır.

#### Eklenti mağazası ve ayarlar sayfası beyaz kaldı

Eklentinin bu sayfalara erişimi yoktur.

#### Yeni sekme ekranı ve tarayıcı beyaz kaldı

Eklenti yeni sekme yada tarayıcının görünüşünü değiştiremez (Firefox'da versiyon 60'tan itibaren olabilir).
Eklenti mağazasından karanlık bir tema yada yeni sekme eklentisi yüklemenizi öneriyoruz.

#### Yeni bir sekme açarken yada sitelerde dolaşırken ekran yanıp-sönüyor

Bir siteyi yüklemeden önce, Chrome varsayılan olarak tema arkaplanını gösterir.
Mağazadan karanlık bir tema yüklemenizi öneriyoruz.

#### Eklenti çalışmıyor

Eğer benzer karanlık mod eklentileriniz varsa, devredışı bırakın, ardından sekmeleri yenileyin.
Dark Reader ikonuna tıklayın, üst-sağ buton **Açık** olmalıdır ve **Site listesi** siteyi hariç tutmamalıdır.
**Site listesi** bölümünden, **Çevirilmemiş liste** seçilmelidir.
Eğer bunlar yardımcı olmadıysa, korkunç bir şey olmuş demektir, bize e-posta atın.

#### Site doğru görüntülenmiyor yada çok yavaş

Lütfen sitenin adresini,bir ekran görüntüsünü, İşletim sisteminizin ve tarayıcınızın versiyonunu bize e-posta atın.
Nedenini araştırmaya çalışacağız, en azından popüler siteler için.
Ayrıca **Tema oluşturma modunu** da değiştirmeyi yada **Aydınlık modu** deneyin.
Sitenin, **Site listesinde** listelenmediğinden emin olun.

#### Eklenti gizli modda çalışmıyor

**chrome://extensions** sayfasını açın, **Dark Reader**'ı bulun, **Gizli modda izin ver**i seçin.

#### Eklenti yerel dosyalarda çalışmıyor

**chrome://extensions** sayfasını açın,**Dark Reader**'ı bulun, **Dosya URL'lerine erişmeye izin ver** seçeneğini seçin.

#### Site Filtre modunda tamamen görüntülenmiyor

Eğer Mac OS için Chrome kullanıyorsanız, Mac OS sürümünüzü 10.13'e güncelleyin, bunu yapmak ekran kartı sürücülerinizi güncelleyecektir.
Eğer Firefox kullanıyorsanız, bu genellikle tarayıcı hatasıdır, başka bir mod kullanmayı deneyin.


<h2 id="contacts">İletişim</h2>

Sorularınız için[darkreaderapp@gmail.com](mailto:darkreaderapp@gmail.com) adresine e-posta atabilirsiniz.
