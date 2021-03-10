(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{427:function(v,_,o){"use strict";o.r(_);var t=o(16),e=Object(t.a)({},(function(){var v=this,_=v.$createElement,o=v._self._c||_;return o("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[o("h1",{attrs:{id:"高级路由设置"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#高级路由设置"}},[v._v("#")]),v._v(" 高级路由设置")]),v._v(" "),o("p",[o("strong",[v._v("高级路由设置")]),v._v(" 和 "),o("strong",[v._v("路由编辑器")]),v._v(" 是Qv2ray的独特功能。 通过他们的功能，您可以精确地控制流量，如 "),o("strong",[v._v("按需代理")]),v._v("， "),o("strong",[v._v("分割流量到国内外网站")]),v._v("等。 甚至点击 "),o("strong",[v._v("Matryoshkas")]),v._v("🤣~")]),v._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[v._v("什么路由？ PAC 和 GFWWList是什么？ 如果你不知道V2Ray的路由功能是 然后你就可以理解它是一个新一代的 PAC，配置更简单，使用更高效，规则更完善。")]),v._v(" "),o("p",[v._v("路由函数比PAC更强大，因此请不要问Qv2ray 是否支持PAC！ 路由函数使用的数据比GFWList更完整，因此不再需要GFWList。 :::")]),v._v(" "),o("h2",{attrs:{id:"全局路由规则"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#全局路由规则"}},[v._v("#")]),v._v(" 全局路由规则")]),v._v(" "),o("p",[v._v("全局路由规则配置功能在 "),o("strong",[v._v("高级路由设置")]),v._v(" "),o("strong",[v._v("首选项标签")]),v._v(" 中。")]),v._v(" "),o("h3",{attrs:{id:"领域战略"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#领域战略"}},[v._v("#")]),v._v(" 领域战略")]),v._v(" "),o("p",[v._v("包含三种类型： "),o("code",[v._v("AsIs")]),v._v(", "),o("code",[v._v("IPIfNonMatch")]),v._v(", 和 "),o("code",[v._v("IPOnDemand")]),v._v(".")]),v._v(" "),o("p",[v._v("根据V2Ray的正式文件，三个域名战略的含义如下：")]),v._v(" "),o("ul",[o("li",[o("strong",[o("code",[v._v("AsIs")])]),v._v(": 只使用域名进行路由。 默认。")]),v._v(" "),o("li",[o("strong",[o("code",[v._v("IPIfNonMatch")])]),v._v(": 当域名不符合任何规则时 域名已解析为IP(记录或 AAAAAA 记录)重新匹配：\n"),o("ul",[o("li",[v._v("当一个域名有多个A记录时，它将尝试匹配所有A记录，直到其中一个记录匹配某个规则；")]),v._v(" "),o("li",[v._v("解析过的IP只能在路由过程中运行，原域名仍然在转发数据包中使用。")])])]),v._v(" "),o("li",[o("strong",[o("code",[v._v("IPOnDemand")])]),v._v(": 当匹配过程中遇到任何基于 IP的规则时，域名将立即解析为IP匹配。")])]),v._v(" "),o("p",[v._v("简而言之，基于开发者的声明：")]),v._v(" "),o("ul",[o("li",[o("strong",[o("code",[v._v("AsIs")])]),v._v(": 快速分析, 不精确的转移;")]),v._v(" "),o("li",[o("strong",[o("code",[v._v("IPIfNonMatch")])]),v._v(": 解析速度稍慢，粉碎是准确的")]),v._v(" "),o("li",[o("strong",[o("code",[v._v("IPOndemand")])]),v._v(": 没用.")])]),v._v(" "),o("blockquote",[o("p",[v._v("注意： "),o("code",[v._v("IPOnDemand")]),v._v(" 应该是最慢但最准确的，但在大多数情况下都是如此。 "),o("code",[v._v("IPIfNonMatch")]),v._v(" 已经足够了，所以 "),o("code",[v._v("IPOndemand")]),v._v(" 的实际效果并不明显。")])]),v._v(" "),o("p",[v._v("您可以根据您的实际需要选择相应的域名策略。 一般来说，IPIfNonMatch是大多数情况下的理想选择。")]),v._v(" "),o("h3",{attrs:{id:"路由方法"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#路由方法"}},[v._v("#")]),v._v(" 路由方法")]),v._v(" "),o("p",[v._v("路由计划由 "),o("code",[v._v("3x2")]),v._v(" 矩阵组成，从左上到右下： "),o("code",[v._v("IP 直接连接")]),v._v(" "),o("code",[v._v("IP 代理")]),v._v(", "),o("code",[v._v("IP 屏蔽")]),v._v(", "),o("code",[v._v("域名直接连接")]),v._v(", "),o("code",[v._v("域名代理")]),v._v(", "),o("code",[v._v("域名屏蔽")]),v._v(", 每行一行，没有逗号分隔。")]),v._v(" "),o("p",[v._v("Qv2ray 中的这些6条规则符合 "),o("code",[v._v("域名封禁")]),v._v(" -> "),o("code",[v._v("域名代理")]),v._v(" -> "),o("code",[v._v("域名直接连接")]),v._v(" -> "),o("code",[v._v("IP 封禁")]),v._v(" -> "),o("code",[v._v("IP 代理")]),v._v(" -> "),o("code",[v._v("IP 直接连接")]),v._v("。 如果比赛失败，私人地址和中国本土地址直接连接，否则将使用代理人。")]),v._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[v._v("我只是想要一个全局代理~~~ :hugging_face：")]),v._v(" "),o("p",[v._v("非常简单。 只需清除这些规则，转到“连接首选项”选项卡，然后取消勾选旁路中国复选框。 :fac_with_rolling_eyes: :: :")]),v._v(" "),o("p",[v._v("根据V2Ray官方文件：")]),v._v(" "),o("p",[v._v("IP规则的写法如下(按常用顺序排列)：")]),v._v(" "),o("ul",[o("li",[o("strong",[v._v("GeoIP")]),v._v(": 表单是 "),o("code",[v._v("geoip:cn")]),v._v(", 必须以 "),o("code",[v._v("geoip开始：")]),v._v(" (所有小写) 然后是两个字符的国家代码。 例如， "),o("code",[v._v("geoip:cn")]),v._v(" 代表了在中国的IP地址， "),o("code",[v._v("geoip:us")]),v._v(" 代表了在美国的IP地址。")]),v._v(" "),o("li",[o("strong",[v._v("特殊值")]),v._v(": "),o("code",[v._v("geoip:private")]),v._v(", 包括所有私密地址, 例如 "),o("code",[v._v("127。 0.0.1")]),v._v(" (这项规则只支持V2Ray 3.5及以上。)")]),v._v(" "),o("li",[o("strong",[v._v("IP")]),v._v(": 格式是 "),o("code",[v._v("127.0.0.1")]),v._v(".")]),v._v(" "),o("li",[o("strong",[v._v("CIDR")]),v._v(": 格式是 "),o("code",[v._v("10.0.0.0.0/8")]),v._v(".")]),v._v(" "),o("li",[o("strong",[v._v("从外部文件加载IP规则")]),v._v(": 表单 "),o("code",[v._v("ext:file:tag")]),v._v("必须以 "),o("code",[v._v("起首：")]),v._v(" (所有小写) 随后是文件名(无扩展名) "),o("code",[v._v("文件")]),v._v(" 和 "),o("code",[v._v("标签")]),v._v("该文件必须保存在V2Ray核心资源目录中。 文件格式与 "),o("code",[v._v("geoip.dat")]),v._v("相同，指定的 "),o("code",[v._v("标签")]),v._v(" 必须存在于文件中。")])]),v._v(" "),o("p",[v._v("域名规则的写法如下(按常用顺序)：")]),v._v(" "),o("ul",[o("li",[o("strong",[v._v("预先定义的域名列表")]),v._v(": 开始于 "),o("code",[v._v("地理位置:")]),v._v(", 其余是一个名称，例如 "),o("code",[v._v("geosite:google")]),v._v(" 或 "),o("code",[v._v("geosite:cn")]),v._v(" 关于名称和域名列表，请参阅 "),o("em",[v._v("预定义的域名列表")]),v._v(" V2Ray 文档部分。")]),v._v(" "),o("li",[o("strong",[v._v("子域")]),v._v(": 以 "),o("code",[v._v("域开始：")]),v._v(", 其余是一个域名。 当域名是目标域名或其子域名时，此规则生效。 例如， "),o("code",[v._v("domain:v2ray.com")]),v._v(" 匹配 "),o("code",[v._v("www.v2ray.com")]),v._v(" 和 "),o("code",[v._v("v2ray.com")]),v._v(", 但不 "),o("code",[v._v("xv2ray.com")]),v._v("。")]),v._v(" "),o("li",[o("strong",[v._v("完成匹配")]),v._v(": 以 "),o("code",[v._v("开始:")]),v._v(", 其余是一个域名。 当此域名完全匹配目标域名时，规则生效。 例如， "),o("code",[v._v("full:v2ray.com")]),v._v(" 匹配 "),o("code",[v._v("v2ray.com")]),v._v(" 但不 "),o("code",[v._v("www.v2ray.com")]),v._v("。")]),v._v(" "),o("li",[o("strong",[v._v("只字符串")]),v._v(": 当这个字符串匹配目标域名的任何部分时，规则就会生效。 例如， "),o("code",[v._v("sina.com")]),v._v(" 可以匹配 "),o("code",[v._v("sina.com")]),v._v(", "),o("code",[v._v("sina.com.cn")]),v._v(" 和 "),o("code",[v._v("www.sina.com")]),v._v(", 但不 "),o("code",[v._v("sina.cn")]),v._v(".")]),v._v(" "),o("li",[o("strong",[v._v("正则表达式")]),v._v(": 以 "),o("code",[v._v("正则表达式开始：")]),v._v(", 其余是正则表达式。 当这个正则表达式匹配目标域名时，规则生效。 例如， "),o("code",[v._v("regexp:\\\\.goo.*\\\\.com$")]),v._v(" 匹配 "),o("code",[v._v("www.google.com")]),v._v(", "),o("code",[v._v("fonts.googleapis.com")]),v._v(", 但不 "),o("code",[v._v("google.com")])]),v._v(" "),o("li",[o("strong",[v._v("从外部文件中加载域名列表")]),v._v(": 格式是 "),o("code",[v._v("ext:file:tag")]),v._v(", 必须以 "),o("code",[v._v("起首：")]),v._v(" (所有小写) 随后是文件名(无扩展名) "),o("code",[v._v("文件")]),v._v(" 和 "),o("code",[v._v("标签")]),v._v("文件必须存储在 V2Ray 核心资源目录中。 文件格式与 "),o("code",[v._v("geosite.dat")]),v._v("相同，指定的 "),o("code",[v._v("标签")]),v._v(" 必须存在于文件中。")])]),v._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[v._v("我是一个新人，你能更直截了当吗？")]),v._v(" "),o("ul",[o("li",[v._v("如果您想要实现一个全局代理，即不论目的地址， 所有流量都将通过代理，然后参考上面的其他提示。 😅")]),v._v(" "),o("li",[v._v("如果您想要实现精确的流量分割，即所有出站流量都应该经过代理， 然后点击接口中的 "),o("code",[v._v("预设计划")]),v._v(" 按钮。 选择 "),o("code",[v._v("空白计划")]),v._v(" 或 "),o("code",[v._v("广告屏蔽计划")]),v._v(", 并将域名策略设置为 "),o("code",[v._v("IPIfNonMatch")]),v._v(" 😋 :::")])]),v._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[v._v("我是一个高级用户! 我想要更准确地分割流量！ 🤔 我们建议使用增强版本的 V2Ray 规则文件项目。 项目在 [Loyalsoler/v2ray-rules-dat](https://github.com/Loyalsoldier/v2ray-rules-dat)。 🤗 :::")]),v._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[v._v("我想要一个高度自定义的分享流量规则！ 🤪 请参阅下一节 **路由编辑器** :grinning_fac_with_smiling_eyes： :::")]),v._v(" "),o("h2",{attrs:{id:"路由编辑器"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#路由编辑器"}},[v._v("#")]),v._v(" 路由编辑器")]),v._v(" "),o("p",[v._v("在 Qv2ray的主要接口， "),o("strong",[v._v("右键点击")]),v._v(" 代理节点，然后选择 "),o("strong",[v._v("编辑为一个复杂的配置")]),v._v(" 打开 "),o("strong",[v._v("路由编辑器")]),v._v(" 接口。")]),v._v(" "),o("p",[v._v("In this interface, you can arbitrarily combine matching conditions such as "),o("strong",[v._v("user")]),v._v(", "),o("strong",[v._v("source IP")]),v._v(", "),o("strong",[v._v("target IP")]),v._v(", "),o("strong",[v._v("domain name")]),v._v(", "),o("strong",[v._v("target domain name")]),v._v(", "),o("strong",[v._v("protocol")]),v._v(", and "),o("strong",[v._v("port")]),v._v(" to create sufficiently accurate inbound/outbound rules, and you can also adjust the "),o("strong",[v._v("priority")]),v._v(" of the rules arbitrarily Level, even achieving "),o("strong",[v._v("load balancing")]),v._v(".")]),v._v(" "),o("p",[v._v("需要重申的是，每条路由规则中的匹配条件是 "),o("code",[v._v("和")]),v._v(" / "),o("code",[v._v("&&")]),v._v(" 关系 也就是说，如果路由规则包含多个匹配条件，最终获得的实际匹配条件就是这些条件的交点。 例如，如果路由规则包含端口条件 "),o("code",[v._v("443")]),v._v(" 和目标域名条件 "),o("code",[v._v("qv2ray。 ithub.io")]),v._v(", 然后只有目标 "),o("code",[v._v("qv2ray.github.io:443")]),v._v(" 符合这两项条件的目标将与此项规则相匹配。")]),v._v(" "),o("p",[v._v("如果您对V2Ray的路由规则机制不了解，请参阅V2Ray的官方文档。")])])])])])])])}),[],!1,null,null,null);_.default=e.exports}}]);