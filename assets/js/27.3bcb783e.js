(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{395:function(a,t,e){"use strict";e.r(t);var s=e(16),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"获取-qv2ray"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取-qv2ray"}},[a._v("#")]),a._v(" 获取 Qv2ray")]),a._v(" "),e("p",[a._v("要开始使用 Qv2ray，那就得先以某种方式获取到它。")]),a._v(" "),e("ul",[e("li",[a._v("我们提供了许多种方式，您可以根据您的喜好选择。")])]),a._v(" "),e("h2",{attrs:{id:"来自软件包管理器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#来自软件包管理器"}},[a._v("#")]),a._v(" 来自软件包管理器")]),a._v(" "),e("h3",{attrs:{id:"linux-debian-ubuntu-及其衍生发行版"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-debian-ubuntu-及其衍生发行版"}},[a._v("#")]),a._v(" Linux: Debian, Ubuntu 及其衍生发行版")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("安装相关的工具")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# apt install gnupg ca-certificates curl")]),a._v("\n")])])])]),a._v(" "),e("li",[e("p",[a._v("请跟随 "),e("a",{attrs:{href:"https://qv2ray.net/debian",target:"_blank",rel:"noopener noreferrer"}},[a._v("我们的 debian 仓库"),e("OutboundLink")],1),a._v(" 中的步骤进行操作")])]),a._v(" "),e("li",[e("p",[a._v("安装 Qv2ray")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# apt update; sudo apt install qv2ray")]),a._v("\n")])])])])]),a._v(" "),e("h3",{attrs:{id:"linux-arch-linux-或基于-arch-的发行版"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-arch-linux-或基于-arch-的发行版"}},[a._v("#")]),a._v(" Linux: Arch Linux 或基于 Arch 的发行版")]),a._v(" "),e("p",[e("strong",[a._v("直接从 "),e("code",[a._v("arclinuxcn 安装")])])]),a._v(" "),e("p",[a._v("我们已经进入 "),e("code",[a._v("archlinuxcn")]),a._v(" 仓库。 如果您已在使用 archcn，只需在终端中输入：")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pacman -Syy qv2ray "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 或者 qv2ray-dev-git")]),a._v("\n")])])]),e("p",[a._v("然后就完事了")]),a._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("Arch Linux CN 中的 Manjaro Hitchhikers")]),a._v(" "),e("p",[a._v("Manjaro 会 "),e("strong",[a._v("延迟Arch Linux 的软件包更改")]),a._v("。 当 ABI 在上游出现意外变动时， "),e("strong",[e("em",[a._v("Arch Linux")]),a._v(" CN")]),a._v(" 将 "),e("strong",[a._v("优先 Arch 用户")]),a._v(" 而不是Manjaro。 "),e("strong",[a._v("使用 Arch Linux CN 的 Manjaro")]),a._v(" 用户应该清楚"),e("strong",[a._v("这样偷包/延迟更新的严重后果")]),a._v(" 包括处理 "),e("code",[a._v("symbol lookup error")]),a._v(" 此类错误的能力。 如果您坚持要使用它， 请 "),e("strong",[a._v("不要以任何方式提交 Issue 到 Qv2ray 或 Arch Linux CN")]),a._v("。 对于那些不想麻烦的人，请使用其他版本。")]),a._v(" "),e("p",[a._v("如果出现了 “Manjaro CN” 此类组织，并且官方 "),e("strong",[a._v("为其用户提供了 Qv2ray")]),a._v(" 后，这一章节将会被立即删除。")])]),a._v(" "),e("p",[e("strong",[a._v("使用 AUR 助手从 AUR 下载")])]),a._v(" "),e("p",[a._v("您可以从 AUR (Arch 用户仓库) 获取官方维护的"),e("code",[a._v("PKGBUILD")]),a._v("文件。"),e("a",{attrs:{href:"https://aur.archlinux.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("AUR (en) - Home"),e("OutboundLink")],1),a._v(", 它将指导 Qv2ray 的构建过程。")]),a._v(" "),e("p",[a._v("所有 Qv2ray 插件目前都在 AUR")]),a._v(" "),e("h3",{attrs:{id:"linux-opensuse-fedora-centos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-opensuse-fedora-centos"}},[a._v("#")]),a._v(" Linux: openSUSE / Fedora / CentOS")]),a._v(" "),e("blockquote",[e("p",[a._v("由 "),e("a",{attrs:{href:"https://github.com/zzndb",target:"_blank",rel:"noopener noreferrer"}},[a._v("@zzndb"),e("OutboundLink")],1),a._v(" 提供的给 "),e("a",{attrs:{href:"https://build.opensuse.org",target:"_blank",rel:"noopener noreferrer"}},[a._v("openSUSE / Fedora / CentOS 用户"),e("OutboundLink")],1),a._v(" 的 openSUSE 构建服务。")])]),a._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("适用版本")]),a._v(" "),e("p",[a._v("因为Qt 版本的限制， 我们可能无法支持上面所有发行版，支持的发行版列表请看下面的 OBS 链接。")])]),a._v(" "),e("p",[a._v("类似于AUR, 有两个版本的 Qv2ray 可供使用。 您可以根据自己的爱好选择：")]),a._v(" "),e("ul",[e("li",[a._v("稳定版 OBS: "),e("a",{attrs:{href:"https://build.opensuse.org/package/show/home:zzndb:Qv2ray/Qv2ray",target:"_blank",rel:"noopener noreferrer"}},[a._v("Qv2ray"),e("OutboundLink")],1)]),a._v(" "),e("li",[a._v("预览版 OBS： "),e("a",{attrs:{href:"https://build.opensuse.org/package/show/home:zzndb:Qv2ray/Qv2ray-preview",target:"_blank",rel:"noopener noreferrer"}},[a._v("Qv2ray-预览"),e("OutboundLink")],1)])]),a._v(" "),e("p",[a._v("或者您可以直接从下面的链接获取更详细的安装指南：")]),a._v(" "),e("ul",[e("li",[a._v("下载 Stable 版: "),e("a",{attrs:{href:"https://software.opensuse.org/download.html?project=home%3Azzndb%3AQv2ray&package=Qv2ray",target:"_blank",rel:"noopener noreferrer"}},[a._v("Qv2ray"),e("OutboundLink")],1)]),a._v(" "),e("li",[a._v("下载 Preview 版: "),e("a",{attrs:{href:"https://software.opensuse.org/download.html?project=home%3Azzndb%3AQv2ray&package=Qv2ray-preview",target:"_blank",rel:"noopener noreferrer"}},[a._v("Qv2ray-preview"),e("OutboundLink")],1)])]),a._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("给 CentOS 用户的警告")]),a._v(" "),e("p",[a._v("在您安装OBS 项目上方的 Qv2ray 之前。 您需要添加 "),e("strong",[a._v("EPEL")]),a._v(" 仓库，这是 Fedora 为额外需要的依赖提供的。 有关更多信息，请看 "),e("a",{attrs:{href:"https://fedoraproject.org/wiki/EPEL",target:"_blank",rel:"noopener noreferrer"}},[a._v("Fedora EPELWiki"),e("OutboundLink")],1),a._v("。")])]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("插件")]),a._v(" "),e("p",[a._v("以上 "),e("a",{attrs:{href:"https://build.opensuse.org/project/show/home:zzndb:Qv2ray",target:"_blank",rel:"noopener noreferrer"}},[a._v("OBS 项目"),e("OutboundLink")],1),a._v(" 也提供 Qv2ray 家族的插件。 这样安装 Qv2ray 之后 (不是手动下载 & 安装那种)， 您可以直接使用包管理器安装插件(插件名字与插件项目名字相同.此外，我们还提供带有 "),e("code",[a._v("-preview")]),a._v(" 后缀的预览版本插件。")])]),a._v(" "),e("h3",{attrs:{id:"linux-macos-homebrew"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-macos-homebrew"}},[a._v("#")]),a._v(" Linux / macOS: Homebrew")]),a._v(" "),e("p",[a._v("您可以使用 Homebrew 在 macOS 上安装 Qv2ray (可能 Linux 也行)。 如果您还没安装 Homebrew ，可以查看 Homebrew 网站了解更多信息。 Homebrew 安装完毕后，您可以使用以下命令安装 Qv2ray")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ brew cask "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" qv2ray\n")])])]),e("p",[e("strong",[a._v("或者使用新命令")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ brew "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --cask qv2ray\n")])])]),e("p",[a._v("更新也很容易，仅需要将 "),e("code",[a._v("install")]),a._v(" 替换成 "),e("code",[a._v("upgrade")]),a._v(" 即可")]),a._v(" "),e("p",[a._v("如果您想要安装插件和 Qv2ary 的 Beta 版本, 请添加 "),e("code",[a._v("malt")]),a._v(" Tap：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("brew tap kidonng/malt\nbrew install qv2ray-beta\n# Or directly run\nbrew install kidonng/malt/qv2ray-beta\n")])])]),e("h3",{attrs:{id:"windows-scoop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-scoop"}},[a._v("#")]),a._v(" Windows: Scoop")]),a._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://scoop.sh",target:"_blank",rel:"noopener noreferrer"}},[a._v("Scoop"),e("OutboundLink")],1),a._v(" 是一个 "),e("strong",[a._v("Windows 上的")]),a._v(" 基于命令行的软件包管理器")])]),a._v(" "),e("p",[a._v("在 "),e("strong",[a._v("PowerShell")]),a._v(" 中运行以下命令：")]),a._v(" "),e("ol",[e("li",[e("p",[e("a",{attrs:{href:"https://scoop.sh/#installs-in-seconds",target:"_blank",rel:"noopener noreferrer"}},[a._v("安装 Scoop"),e("OutboundLink")],1),a._v(":")]),a._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("Set-ExecutionPolicy")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("ExecutionPolicy RemoteSigned "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Scope CurrentUser "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Allow script execution")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("iwr")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("useb get"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("scoop"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sh "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("iex")]),a._v("\n")])])])]),a._v(" "),e("li",[e("p",[a._v("添加 "),e("code",[a._v("extras")]),a._v(" bucket：")]),a._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[a._v("scoop bucket add extras\n")])])])]),a._v(" "),e("li",[e("p",[a._v("安装 Qv2ray:")]),a._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[a._v("scoop install qv2ray\n")])])])]),a._v(" "),e("li",[e("p",[a._v("更新也很容易，仅需要将 "),e("code",[a._v("install")]),a._v(" 替换成 "),e("code",[a._v("upgrade")]),a._v(" 即可")]),a._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[a._v("scoop update qv2ray\n")])])])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("(可选的)")]),a._v(" 如果你想要安装 Qv2Ray 测试版, 添加  "),e("code",[a._v("sushi")]),a._v(" 桶:")]),a._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[a._v("scoop bucket add sushi https:"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("github"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("com"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("kidonng"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("sushi\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# For all apps see https://github.com/kidonng/sushi#qv2ray")]),a._v("\nscoop install qv2ray"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("beta\n")])])])])]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("您可能还需要安装 "),e("a",{attrs:{href:"https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads",target:"_blank",rel:"noopener noreferrer"}},[a._v("最新的 Visual C++ 可再发行组件包"),e("OutboundLink")],1),a._v(".")])]),a._v(" "),e("h3",{attrs:{id:"windows-chocolatey"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-chocolatey"}},[a._v("#")]),a._v(" Windows: Chocolatey")]),a._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://chocolatey.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Chocolatey"),e("OutboundLink")],1),a._v(" 是另一个 "),e("strong",[a._v("Windows")]),a._v(" 的软件包管理器。")])]),a._v(" "),e("p",[e("strong",[a._v("请在管理员权限下打开 Powershell")]),a._v(" 并运行以下命令：")]),a._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://chocolatey.org/install",target:"_blank",rel:"noopener noreferrer"}},[a._v("安装 Chocolatey"),e("OutboundLink")],1),a._v("："),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("Set-ExecutionPolicy")]),a._v(" Bypass "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Scope "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Process")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Force"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("[System.Net.ServicePointManager]")]),a._v("::SecurityProtocol = "),e("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("[System.Net.ServicePointManager]")]),a._v("::SecurityProtocol "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-bor")]),a._v(" 3072"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("iex")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("New-Object")]),a._v(" System"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Net"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("WebClient"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("DownloadString"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'https://chocolatey.org/install.ps1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])])]),a._v(" "),e("li",[a._v("安装 Qv2ray:"),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[a._v("choco install qv2ray\n")])])])])]),a._v(" "),e("h2",{attrs:{id:"从-appstore"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从-appstore"}},[a._v("#")]),a._v(" 从 AppStore")]),a._v(" "),e("h3",{attrs:{id:"linux-snapcraft"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-snapcraft"}},[a._v("#")]),a._v(" Linux: Snapcraft")]),a._v(" "),e("p",[a._v("按照我们的 "),e("a",{attrs:{href:"https://snapcraft.io/qv2ray",target:"_blank",rel:"noopener noreferrer"}},[a._v("Snapcraft 页面"),e("OutboundLink")],1),a._v(" 上的说明操作。")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 要安装软件包：")]),a._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" snap "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" qv2ray\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# sudo snap install qv2ray --edge (dev branch)")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 要更新软件包：")]),a._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" snap refresh qv2ray\n")])])]),e("h3",{attrs:{id:"linux-flathub-快被扬了"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-flathub-快被扬了"}},[a._v("#")]),a._v(" Linux: Flathub (快被扬了)")]),a._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("已废弃(2020/09/18)")]),a._v(" "),e("p",[a._v("从 Flahub 安装Qv2ray 是官方 "),e("strong",[a._v("已废弃")]),a._v("的方法，因为维护者不再积极维护该包。 如果你有兴趣接手这个包，请告诉我们.")])]),a._v(" "),e("ol",[e("li",[a._v("根据 "),e("a",{attrs:{href:"https://flatpak.org/setup/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方文档"),e("OutboundLink")],1),a._v(" 设置Flatpak环境。")]),a._v(" "),e("li",[a._v("安装 Qv2ray："),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# To install the package:")]),a._v("\n$ flatpak "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" com.github.Qv2ray\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# To update the package:")]),a._v("\n$ flatpak update\n")])])])])]),a._v(" "),e("h2",{attrs:{id:"github-release-二进制文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github-release-二进制文件"}},[a._v("#")]),a._v(" GitHub Release 二进制文件")]),a._v(" "),e("p",[a._v("从 "),e("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("Qv2ray 发布页面"),e("OutboundLink")],1),a._v(" 下载的版本仅适用于那些***不想使用包管理的用户***。")]),a._v(" "),e("p",[a._v("不过这也适用于部分 Linux 用户，因为 Qv2ray 在他们的发行版中没有正式打包。")]),a._v(" "),e("p",[a._v("按以下方式做：")]),a._v(" "),e("ol",[e("li",[a._v("在"),e("strong",[a._v("浏览器")]),a._v("中打开 "),e("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("Qv2ray GitHub Release"),e("OutboundLink")],1),a._v(" 页面。")]),a._v(" "),e("li",[a._v("从 Release 中选择一个版本。 或者，您可以选择使用 "),e("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[a._v("最新的"),e("strong",[a._v("稳定版")]),a._v("发布"),e("OutboundLink")],1),a._v("。")]),a._v(" "),e("li",[a._v("根据你的的平台，在 Release Assets 中选择并下载。 例如：\n"),e("ul",[e("li",[a._v("对于 Windows 用户：\n"),e("ul",[e("li",[a._v("Windows 7/8/8.1/10: "),e("code",[a._v("Qv2ray.VERSION.Windows-x64.7z")]),a._v("（绿色版压缩包）或 "),e("code",[a._v("Qv2ray.VERSION.win64.exe")]),a._v("（安装版安装程序）。")]),a._v(" "),e("li",[a._v("Windows 2003/XP/2000/ME/98/...： "),e("em",[e("strong",[a._v("你确定吗？")])])])])]),a._v(" "),e("li",[a._v("对于 Linux 64bit 用户："),e("code",[a._v("Qv2ray.VERSION.linux-x64.AppImage")]),a._v("。")]),a._v(" "),e("li",[a._v("对于 macOS 用户：\n"),e("ul",[e("li",[a._v("macOS 10.14 及之后的用户："),e("code",[a._v("Qv2ray.VERSION.macOS-x64.dmg")]),a._v("；")]),a._v(" "),e("li",[a._v("macOS 10.13："),e("code",[a._v("qv2ray-legacy.dmg")]),a._v("（如果有的话）；")]),a._v(" "),e("li",[a._v("macOS 10.12及之前: "),e("em",[e("strong",[a._v("升级您的 macOS 好了")])]),a._v("。")])])])])])]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("Linux AppImage 用户的注意事项")]),a._v(" "),e("p",[a._v("虽然我们已将 "),e("code",[a._v("glibc")]),a._v(" 和一些基本的 C++ 库打包进 "),e("strong",[a._v("AppImage")]),a._v(" 来支持一些旧的发行版，但是我们强烈建议您自己升级到最新版本")])]),a._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("给 Windows ARM64 用户的提醒")]),a._v(" "),e("p",[a._v("Windows 10 on ARM 在 "),e("em",[a._v("building 21277")]),a._v(" 中为 x86_64 应用添加了一个模拟层，用户可以使用最新的 Windows 内部预览的 x64 版本。")])]),a._v(" "),e("h2",{attrs:{id:"github-actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github-actions"}},[a._v("#")]),a._v(" GitHub Actions")]),a._v(" "),e("p",[a._v("如果您已经厌烦了加入稳定版本的功能，并愿意尝试开发中的新功能， 您可以从 GitHub Actions 下载开发版本：")]),a._v(" "),e("ol",[e("li",[a._v("在浏览器中打开 "),e("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray/actions",target:"_blank",rel:"noopener noreferrer"}},[a._v("Qv2ray GitHub Actions Page"),e("OutboundLink")],1),a._v(" 页面。")]),a._v(" "),e("li",[a._v("选择最近成功的 (显示为 ✔️) 构建并点击它。 你应该会看到 GitHub Build 的详细页面。 "),e("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray/commit/de88bfc69e50bf7c4ce034756720bf06df42612a/checks?check_suite_id=377218225",target:"_blank",rel:"noopener noreferrer"}},[a._v("这里的页面"),e("OutboundLink")],1),a._v(" 就是一个例子。")]),a._v(" "),e("li",[a._v("点击"),e("strong",[a._v("Artifacts")]),a._v("下拉菜单来展开它，然后根据您的平台选择二进制文件。")])]),a._v(" "),e("p",[a._v("TODO：如何选择分支")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("您必须先登录 GitHub 才能访问 GitHub Actions。")])]),a._v(" "),e("h2",{attrs:{id:"从源代码编译"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从源代码编译"}},[a._v("#")]),a._v(" 从源代码编译")]),a._v(" "),e("p",[a._v("请参考页面 "),e("RouterLink",{attrs:{to:"/lang/zh/hacking/manuallybuild.html"}},[a._v("手工构建 Qv2ray")]),a._v("。")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);