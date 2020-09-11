---
title: 高级路由设置
---

# 高级路由设置

**高级路由设置** 和 **路由编辑器** 是 Qv2ray 的特色功能。有了它们的加持，你可以实现对流量的精准控制，如**按需代理**、**国内外分流**等，甚至还可以**套娃**🤣~

:::tip 路由规则到底是什么？我心心念念的 PAC 去哪了？
如果你不了解 V2Ray 的路由功能是什么，那么你可以把它理解成配置更简单、使用更高效、规则更完善的新一代 PAC 实现。

路由功能远比 PAC 更强大，所以请不要再问 Qv2ray 支不支持 PAC 了！
:::

## 全局路由规则

全局路由规则配置功能在 `首选项` 的 `高级路由设置` 选项卡中。

### 域名策略

包含 `AsIs`、`IPIfNonMatch`、`IPOnDemand` 三种。

根据 [V2Ray 的官方文档](https://v2ray.com/chapter_02/03_routing.html#routingobject)，三种域名策略的含义如下：

- **`AsIs`**：只使用域名进行路由选择。默认值。
- **`IPIfNonMatch`**：当域名没有匹配任何规则时，将域名解析成 IP（A 记录或 AAAA 记录）再次进行匹配：
  - 当一个域名有多个 A 记录时，会尝试匹配所有的 A 记录，直到其中一个与某个规则匹配为止；
  - 解析后的 IP 仅在路由选择时起作用，转发的数据包中依然使用原始域名。
- **`IPOnDemand`**：当匹配时碰到任何基于 IP 的规则，将域名立即解析为 IP 进行匹配。

简而言之，根据某开发者的~~暴论~~发言：

- **`AsIs`**：快速解析，不精确分流；
- **`IPIfNonMatch`**：解析稍慢，分流精确；
- **`IPOnDemand`**：没卵用。

> 笔者注：`IPOnDemand` 理应是最慢但最精确的，但大多数情况下，`IPIfNonMatch` 已经足够，因此 `IPOnDemand` 的实际效果并不明显。

你可以根据你的实际需求，选择相应的域名策略。通常来说，**`IPIfNonMatch`** 是大多数情况下的理想选择。

### 路由方案

路由方案由一个 `3x2` 的矩阵组成，从左上到右下依次是：`IP直连`、`IP代理`、`IP阻断`、`域名直连`、`域名代理`、`域名阻断`，每行一个，不需要逗号分隔。

这 6 种规则在 Qv2ray 中的按照 `域名阻断` -> `域名代理` -> `域名直连` -> `IP阻断` -> `IP代理` -> `IP直连` 的优先级进行匹配，如果匹配失败，则私有地址和大陆境内地址直连，否则走代理。

:::tip 人家就是想要全局代理嘛~~~ 🤗
很简单，只需这些规则清空，再转到 `首选项` 的 `连接` 选项卡，取消 `绕过中国大陆` 复选框的选中状态即可。🙄
:::

根据 [V2Ray 的官方文档](https://v2ray.com/chapter_02/03_routing.html#ruleobject)：

IP 规则的写法如下（按常用程度排序）：

- **GeoIP**：形如 `geoip:cn`，必须以 `geoip:`（全部小写）开头，后面跟双字符国家代码，如 `geoip:cn` 代表中国境内的 IP 地址，`geoip:us` 代表美国境内的 IP 地址。
- **特殊值**：`geoip:private`，包含所有私有地址，如`127.0.0.1`（本条规则仅支持 `V2Ray 3.5` 以上版本）。
- **IP**：形如 `127.0.0.1`。
- **CIDR**：形如 `10.0.0.0/8`。
- **从外部文件中加载 IP 规则**：形如 `ext:file:tag`，必须以 `ext:`（全部小写）开头，后面跟文件名（不含扩展名）`file` 和标签 `tag`，文件必须存放在 V2Ray 核心的资源目录中，文件格式与 `geoip.dat` 相同，且指定的 `tag` 必须在文件中存在。

域名规则的写法如下（按常用程度排序）：

- **预定义域名列表**：由 `geosite:` 开头，余下部分是一个名称，如 `geosite:google` 或者 `geosite:cn`。名称及域名列表可参考[预定义域名列表](https://v2ray.com/chapter_02/03_routing.html#dlc)。
- **子域名**：由 `domain:` 开始，余下部分是一个域名。当此域名是目标域名或其子域名时，该规则生效。例如 `domain:v2ray.com` 匹配 `www.v2ray.com` 、`v2ray.com`，但不匹配 `xv2ray.com`。
- **完整匹配**：由 `full:` 开始，余下部分是一个域名。当此域名完整匹配目标域名时，该规则生效。例如 `full:v2ray.com` 匹配 `v2ray.com` 但不匹配 `www.v2ray.com`。
- **纯字符串**：当此字符串匹配目标域名中任意部分，该规则生效。比如 `sina.com` 可以匹配 `sina.com`、`sina.com.cn` 和 `www.sina.com`，但不匹配 `sina.cn`。
- **正则表达式**：由 `regexp:` 开始，余下部分是一个正则表达式。当此正则表达式匹配目标域名时，该规则生效。例如 `regexp:\\.goo.*\\.com$` 匹配 `www.google.com`、`fonts.googleapis.com`，但不匹配 `google.com`。
- **从外部文件中加载域名规则**：形如 `ext:file:tag`，必须以 `ext:`（全部小写）开头，后面跟文件名（不含扩展名）`file` 和标签 `tag`，文件必须存放在 V2Ray 核心的资源目录中，文件格式与 `geosite.dat` 相同，且指定的标签 `tag` 必须在文件中存在。

:::tip 我是小白，能说人话吗？😓
- 如果你想实现全局代理，即无论目标地址如何，所有流量都走代理，那么参考上面的另一个 Tips 即可。😅
- 如果你想实现精准分流，应出尽出，让大部分出境流量都走代理，那么只需点击界面中的 `预置方案` 按钮，选择 `空白方案` 或者 `广告拦截方案`，并将域名策略设置为 `IPIfNonMatch` 即可。😋
:::

:::tip 我是大白（资深用户）！我需要更精确的分流规则！🤔
笔者推荐 `V2Ray 规则文件加强版` 项目，仓库地址为 [Loyalsoldier/v2ray-rules-dat](https://github.com/Loyalsoldier/v2ray-rules-dat)。🤗
:::

:::tip 我是老白（折腾型用户）！我需要高度可定制化的分流规则！🤪
请参考下一节 `路由编辑器`。😄
:::

## 路由编辑器

在 Qv2ray 的主界面中，`右键点击` 代理节点，选择 `编辑为复杂配置`，即可打开 `路由编辑器` 界面。

在这一界面中，你可以将**用户**、**源IP**、**目标IP**、**域名目标域名**、**协议**和**端口**等匹配条件进行任意组合，从而创建出足够精确的入站/出站规则，还可以任意调整规则**优先级**，甚至实现**负载均衡**。

需要提醒的是，每项路由规则中的匹配条件为 `与` / `and` / `&&` 关系，即若一项路由规则中包含多种匹配条件，则最终得到的实际匹配条件是这些条件的交集。举个例子，若某项路由规则中，既包含端口条件 `443`，又包含目标域名条件 `qv2ray.github.io`，那么只有同时满足这两个条件的目标 `qv2ray.github.io:443` 才会匹配该项规则。

如果你对 V2Ray 的路由规则机制不太了解，请参考 [V2Ray 的官方文档](https://v2ray.com/chapter_02/03_routing.html)。

## 相关链接

[V2Ray 官方文档：路由规则](https://v2ray.com/chapter_02/03_routing.html)

[V2Ray 规则文件加强版](https://github.com/Loyalsoldier/v2ray-rules-dat)