# 说明 (简体中文)

本文将带您认识 Dark Reader 的各项功能。

- [常见问题](#faq)
- [联络方式](#contacts)
- [顶部选项](#top-section)
- [滤镜设置](#filter-settings)
- [个别网站设置](#custom-site-settings)
- [网站列表](#site-list)
- [更多选项](#more-tab)
- [主题生成模式](#theme-generation-modes)
- [底部选项](#bottom-section)
- [开发者工具](#using-dev-tools)


<h2 id="top-section">顶部选项</h2>

<img src="/www/images/help/darkreader-top-section.png" alt="Top section" style="width: 15rem;" loading="lazy" />

- “**切换网站**”可将目前网站加入忽略列表（或从忽略列表中移除）。
- “**开启／关闭**”可启用或停用扩展。
- 点选按键下方的链接以**修改快捷键**。
- 若切换按键为灰色，则表示浏览器限制脚本注入当前网页。


<h2 id="filter-settings">滤镜设置</h2>

<img src="/www/images/help/darkreader-filter-settings.png" alt="Filter settings" style="width: 15rem;" loading="lazy" />

可调整各项滤镜数值，以适应您的屏幕参数和室内环境亮度。


<h2 id="custom-site-settings">个别网站设置</h2>

<img src="/www/images/help/darkreader-custom-site-settings.png" alt="Custom settings" style="width: 15rem;" loading="lazy" />

点击“**仅适用于**”按键将设置值设为仅应用于当前网站。

要使用该功能，请先单击按钮（该按钮将突出显示），然后根据当前网站的需要调整设置。 再次单击按钮以取消。


<h2 id="site-list">网站列表</h2>

<img src="/www/images/help/darkreader-site-list.png" alt="Site list" style="width: 15rem;" loading="lazy" />

- 使用“**反色列表**”让 Dark Reader 仅对列表中的网站生效。
- 使用“**不反色列表**”避免扩展应用于列表中的网站。
- 可填入 `google.com`、`mail.google.com`、`google.*`、`google.com/maps` 等等。
- 点击“**切换**”按键将网站加入相应列表。

<h2 id="more-tab">更多选项</h2>

<img src="/www/images/help/darkreader-more-tab.png" alt="More tab" style="width: 15rem;" loading="lazy" />

- 从列表**选择字体**（或在 Firefox 输入字体名称），勾选方框。
- 调整**文字描边**。
- 选择**主题生成模式**。


<h2 id="theme-generation-modes">主题生成模式</h2>

<figure>
    <img src="/www/images/help/darkreader-theme-modes.png" alt="Filter+ vs. Static vs. Dynamic mode" loading="lazy" />
    <figcaption>过滤+、静态、动态模式比较</figcaption>
</figure>

- “**过滤**”是 Dark Reader 最一开始的模式，基于 CSS 滤镜。
网页色彩会**全部反转**，再**回复部分**的颜色。
必须用到 GPU 的资源。
虽然渲染**快速**且有效，但有几个问题：
停用文字的子像素渲染（sub-pixel rendering）、
将已经是暗色的部分转成亮色、
大型页面会发生延迟、
Firefox 会无法渲染某些网页。
- “**过滤+**”效果和“过滤”一样，但是基于 SVG 滤镜，
**色彩处理得更好**，让图片不那么呆板。
在 Firefox 上效果不佳。
- “**静态**”会迅速生成基本样式表。
- “**动态**”会深入分析网站的样式表、背景图片、向量图形。
在网页载入时会占用一些资源，
但能产生**最好**的视觉效果。
虽然动态模式还在开发中，
但已能顺利应用于许多现代化的网站。


<h2 id="bottom-section">底部选项</h2>

<img src="/www/images/help/darkreader-footer.png" alt="Bottom section" style="width: 15rem;" loading="lazy" />

- 阅读我们的**隐私政策**，关注我们的 **Twitter**。
- “**捐赠**”──若您喜欢这个扩展，请考虑支持活跃的 Dark Reader 开发团队。
群众募资由 Open Collective 主导，目前以 Stripe 处理帐款。
- “**新闻**”──版本资讯和重要活动的通知。
- “**开发者工具**”──对当前主题开启设置编辑器。


<h2 id="using-dev-tools">使用开发者工具</h2>

若您熟悉 CSS 选择器，欢迎对某些网站提供修正建议。
请阅读开发者工具的[使用说明](https://github.com/darkreader/darkreader#how-to-contribute)。


<h2 id="faq">常见问题</h2>

#### 为何扩展要求读取网站数据的权限

扩展需要这些权限才能分析和修改网站的外观，
并判断是否要根据您的设置来停用或应用特殊规则。
我们不会插入广告，也不会搜集任何数据，或将数据送到任何地方。
该扩展是完全开源的，没有混淆的代码。
我们的获利是透明的——来自用户捐助。

#### 网上应用店和设置的页面怎么还是白的

本扩展对这些页面没有权限。

#### 新标签页和浏览器主题怎么还是白的

本扩展无法改变新标签页或浏览器外观（但 Firefox 60 以后可以）。
请从网上应用店下载其他暗色主题或新标签页扩展。

#### 开启新标签页或浏览网站时屏幕会闪白光

当载入网页时，Chrome 预设会呈现浏览器主题的背景色，
所以您应该从网上应用店安装暗色主题。

#### 扩展完全无效

如果您有安装其他类似的扩展，请先停用它们，再重新载入标签页。
点击 Dark Reader 图标，检查右上角按键是否已**开启**。
打开“**网站列表**”，确认已选取“**不反色列表**”。
若依然无效，则存在问题，请发 Email 给我们。

#### 网站呈现错误或运行缓慢

请发 Email 告诉我们该网站网址、网页截图、您的操作系统和浏览器版本。
起码对知名网站，我们会试着调查原因。
也请试试看更改“**主题生成模式**”或使用“**明亮模式**”。
检查该网站是否不在“**网站列表**”选项下。

#### 扩展在无痕模式下无效

开启“**chrome://extensions**”页面，找到“**Dark Reader**”，点击“**在无痕模式下启用**”。

#### 扩展对本地文件无效

开启“**chrome://extensions**”页面，找到“**Dark Reader**”，点击“**允许访问文件网址**”。

#### 在“过滤”模式下整个网站没有画面

若您是在 Mac OS 上使用 Chrome，请将 Mac OS 更新至 10.13，此举应该会更新显示驱动程序。
若您使用 Firefox，则很有可能是浏览器漏洞，请改用其他模式。


<h2 id="contacts">联络方式</h2>

有任何疑问请 Email 至 [support@darkreader.org](mailto:support@darkreader.org)
（仅限英语）
