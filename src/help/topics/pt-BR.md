# Ajuda (Português Brasil)

Este documento o guiará pelos recursos do Dark Reader.

- [FAQ](#faq)
- [Contatos](#contacts)
- [Seção superior](#top-section)
- [Configurações de filtro](#filter-settings)
- [Configurações personalizadas para sites](#custom-site-settings)
- [Lista de sites](#site-list)
- [A aba mais](#more-tab)
- [Modos de geração de temas](#theme-generation-modes)
- [Seção inferior](#bottom-section)
- [Usando as ferramentas de desenvolvedor](#using-dev-tools)


<h2 id="Seção superior">Top section</h2>

<img src="/images/help/darkreader-top-section.png" alt="Top section" style="width: 15rem;" />

- O botão **Alternar site** adiciona o site atual na lista de sites ignorados (ou remove dela).
- O interruptor **Ligar/Des.** liga e desliga a extensão.
- Clique nos links abaixo dos botões para **modificar os atalhos**.
- Se o botão de alternar site estiver cinza, significa que o navegador proíbe injeção de script na pagina atual.


<h2 id="filter-settings">Configurações de filtro</h2>

<img src="/images/help/darkreader-filter-settings.png" alt="Filter settings" style="width: 15rem;" />

Ajuste os valores dos filtros para que melhor se ajuste aos parâmetros de seu monitor e a iluminação da sala.


<h2 id="custom-site-settings">Configurações personalizadas para sites</h2>

<img src="/images/help/darkreader-custom-site-settings.png" alt="Custom settings" style="width: 15rem;" />

O botão **Somente para** faz com que as configurações sejam aplicadas apenas para o site atual.

Clique no botão, ajuste as configurações, clique novamente para cancelar.


<h2 id="site-list">Lista de sites</h2>

<img src="/images/help/darkreader-site-list.png" alt="Site list" style="width: 15rem;" />

- Use o **Inverter listado** caso queira que o Dark Reader somente funcione com os sites listados.
- **Não invertido listado** irá prevenir a extensão de funcionar em sites listados.
- Valores possíveis são `google.com, mail.google.com, google.*, google.com/maps`, etc.
- Clicar no botão **Alternar site** adiciona sites a essa lista.

<h2 id="more-tab">A aba mais</h2>

<img src="/images/help/darkreader-more-tab.png" alt="More tab" style="width: 15rem;" />

- **Selecione uma fonte** da lista (ou entre com o nome da fonte no Firefox), marque a **caixa de seleção**.
- Ajuste o **traço do texto**.
- Escolha o **Modo de geração de tema**.


<h2 id="theme-generation-modes">Modos de geração de temas</h2>

<figure>
    <img src="/images/help/darkreader-theme-modes.png" alt="Filter+ vs. Static vs. Dynamic mode" />
    <figcaption>Filter+ vs. Static vs. Dynamic mode</figcaption>
</figure>

- **Filtro** é o modo inicial do Dark Reader, baseado nos filtros CSS.
Ele **inverte a página inteira** e **reverte algumas partes** de volta.
Requer consumo de recursos da GPU.
**Rápido** e poderoso, mas tem diversos problemas:
desabilita o renderizador de sub-pixel do texto,
inverte partes já escuras em claras,
causa lentidão em páginas grandes,
falha em renderizar algumas páginas no Firefox.
- **Filtro+** é o mesmo que o Filtro, mas é baseado em filtros SVG customizados
e **lida melhor com cores**, tornando as imagens menos opacas.
funciona mal no Firefox.
- **Estático** rapidamente gera uma folha de estilo básica.
- **Dinâmico** analisa profundamente a folha de estilo da página, imagens de fundo, gráficos vetoriais.
Requer o consumo de alguns recursos para o carregamento inicial da página,
mas produz **o melhor** resultado visual.
O desenvolvimento desse modo ainda está em progresso,
mas ele já funciona bem para muitos sites modernos.


<h2 id="bottom-section">Seção inferior</h2>

<img src="/images/help/darkreader-footer.png" alt="Bottom section" style="width: 15rem;" />

- Leia nossa **política de privacidade**, nos siga no **Twitter**.
- **Doar** – se você gosta da extensão, considere apoiar o desenvolvimento ativo do Dark Reader.
O Crowdfunding é mantido pela Open Collective, que usa o Stripe para lidar com pagamentos no momento.
- **Notícias** – notificações sobre notas de versão e eventos importantes.
- **Ferramentas** – abre um editor de configurações para o modo de tema atual.


<h2 id="using-dev-tools">Usando as ferramentas de desenvolvedor</h2>

Se você é familiarizado com seletores CSS, você pode sugerir correções para alguns sites.
Leia como usar as ferramentas de desenvolvedor [aqui](https://github.com/darkreader/darkreader#how-to-contribute).


<h2 id="faq">FAQ</h2>

#### A extensão pede permissão para ler os dados dos sites

A extensão precisa dessas permissões para conseguir analisar e modificar a aparência do site,
determinar se o site está desabilitado pelas suas configurações ou usar um regra específica para o site.
Nós não inserimos propagandas, não coletamos nenhum dado e nem enviamos nada para lugar nenhum.
A extensão tem seu código completamente aberto e não possui nenhum código ofuscado.
Nossa monetização é transparante e é baseada na doação de nossos usuários.

#### A página da loja de extensões e a página de configurações continuam brancas

A extensão não tem acesso a essas páginas.

#### A página de nova guia e o tema do navegador continuam brancos

A extensão não pode modificar a aparência de nova guia ou do navegador (ela pode desde Firefox 60).
Instale algum tema escuro ou extensão de nova guia da loja de extensões.

#### A tela fica em branco ao abrir uma nova guia ou navegar em um site

Antes de carregar uma página, Chrome mostra a cor de fundo do tema por padrão,
então você deve instalar algum tema escuro da loja.

#### A extensão não faz nada

Se você tem outras extensões de modo escuro instaladas, as desabilite, recarregue as guias.
Clique no ícone do Dark Reader, verifique se o interruptor superior direito está com a opção **Ligar** selecionado.
Abra a aba **Lista de sites**, verifique se **Não invertido listado** está selecionado.
Se nada ajudar, alguma coisa terrível está acontecendo, nos envie um e-mail.

#### O site é exibido incorretamente ou apresenta lentidão

Por favor, nos envie o endereço do site, capturas de tela, seu sistema operacional e a versão de seu navegador para nosso e-mail.
Nós vamos tentar investigar a razão, ao menos para sites populares.
Além disso, tente mudar o **modo de geração de tema** ou tente usar o **modo claro**.
Verifique se o site não está listado na aba de **Lista de sites**.

#### A extensão não funciona no modo anônimo

Abra a página **chrome://extensions**, encontre o **Dark Reader**, clique em **Habilitar no modo anônimo**.

#### A extensão não funciona em arquivos locais

Abra a página **chrome://extensions**, encontre o **Dark Reader**, clique em **Habilitar acesso a URLs de arquivos**.

#### Um site inteiro não é exibido no modo Filtro

Se você está usando Chrome para Mac OS, atualize o Mac OS até a versão 10.13, isso deve atualizar seus drivers de vídeo.
Se você está usando o Firefox, isso provavelmente é um erro do navegador, use outro modo para este site.


<h2 id="contacts">Contatos</h2>

Para qualquer dúvida, envie um e-mail (em inglês) para [darkreaderapp@gmail.com](mailto:darkreaderapp@gmail.com)
