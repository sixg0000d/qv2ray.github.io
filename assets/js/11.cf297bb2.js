(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{256:function(a,t,e){"use strict";e.r(t);var r=e(28),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"step-1-getting-qv2ray-distribution"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-1-getting-qv2ray-distribution"}},[a._v("#")]),a._v(" Step 1: Getting Qv2ray Distribution")]),a._v(" "),e("p",[a._v("To get started with Qv2ray, you should first obtain a release of Qv2ray.")]),a._v(" "),e("h2",{attrs:{id:"github-release-binary-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github-release-binary-file"}},[a._v("#")]),a._v(" GitHub Release Binary File")]),a._v(" "),e("p",[a._v("Downloading stable release binary from "),e("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("Qv2ray GitHub Release"),e("OutboundLink")],1),a._v(" is favored for "),e("strong",[a._v("Windows")]),a._v(" and "),e("strong",[a._v("macOS")]),a._v(" users. This is also suitable for users of Linux distributions where Qv2ray is not officially packaged, in "),e("strong",[a._v("AppImage")]),a._v(" format.")]),a._v(" "),e("p",[a._v("Note: Although we bundled glibc and some C++ base libraries into the AppImage package to support some old, but still supported by upstream distros, we still suggest you using a newer version of OS/distro.")]),a._v(" "),e("p",[a._v("Do as the follows:")]),a._v(" "),e("ol",[e("li",[a._v("Open "),e("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("Qv2ray GitHub Release Page"),e("OutboundLink")],1),a._v(" in a web browser.")]),a._v(" "),e("li",[a._v("Choose a version from the releases. Or, optionally, you may use the "),e("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[a._v("Latest Release"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("li",[a._v("Choose in Assets according to your platform and download it! For example:\n"),e("ul",[e("li",[a._v("For Windows 64/32bit Users: "),e("code",[a._v("Qv2ray.VERSION.win-x64/x86.zip")])]),a._v(" "),e("li",[a._v("For Linux 64bit Users: "),e("code",[a._v("Qv2ray.VERSION.linux-x64.AppImage")])]),a._v(" "),e("li",[a._v("For macOS Users: "),e("code",[a._v("Qv2ray.VERSION.macOS-x64.tar.gz")])])])])]),a._v(" "),e("p",[a._v("Where "),e("code",[a._v("VERSION")]),a._v(" is the version of that release.")]),a._v(" "),e("h2",{attrs:{id:"github-actions-artifact"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github-actions-artifact"}},[a._v("#")]),a._v(" GitHub Actions Artifact")]),a._v(" "),e("p",[a._v("If you are fed up with the functionalities of stable versions and willing to try out new features in development, you may download artifacts from GitHub Actions:")]),a._v(" "),e("ol",[e("li",[a._v("Open "),e("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray/actions",target:"_blank",rel:"noopener noreferrer"}},[a._v("Qv2ray GitHub Actions Page"),e("OutboundLink")],1),a._v(" in your web browser. 2. Choose a recent and successful (displayed as ✔️) build and click on it. You should be taken to the detail page of that GitHub Build. Here's "),e("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray/commit/de88bfc69e50bf7c4ce034756720bf06df42612a/checks?check_suite_id=377218225",target:"_blank",rel:"noopener noreferrer"}},[a._v("an example"),e("OutboundLink")],1),a._v(". 3. Click on "),e("strong",[a._v("Artifacts")]),a._v(" drop-down menu to expand it, and then choose binaries according to your platform.")])]),a._v(" "),e("h2",{attrs:{id:"getting-from-package-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-from-package-control"}},[a._v("#")]),a._v(" Getting From Package Control")]),a._v(" "),e("h3",{attrs:{id:"arch-linux-or-arch-based-distros"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arch-linux-or-arch-based-distros"}},[a._v("#")]),a._v(" Arch Linux (or Arch-based distros)")]),a._v(" "),e("h4",{attrs:{id:"install-directly-from-archlinuxcn-recommended"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-directly-from-archlinuxcn-recommended"}},[a._v("#")]),a._v(" Install directly from archlinuxcn (recommended)")]),a._v(" "),e("p",[a._v("We have made ourselves into archlinuxcn repository. If you are already using it, simply type in your terminal:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pacman -Syy qv2ray "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# or qv2ray-dev-git, see below.")]),a._v("\n")])])]),e("p",[a._v("And that shall be done. You may also want to install "),e("code",[a._v("v2ray")]),a._v(" package group afterwards.")]),a._v(" "),e("h4",{attrs:{id:"getting-from-aur-using-an-aur-helper"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-from-aur-using-an-aur-helper"}},[a._v("#")]),a._v(" Getting from AUR, using an AUR Helper")]),a._v(" "),e("p",[a._v("You may acquire officially maintained "),e("code",[a._v("PKGBUILD")]),a._v(" file from AUR (Arch User Repository, "),e("a",{attrs:{href:"https://aur.archlinux.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("AUR (en) - Home"),e("OutboundLink")],1),a._v("), which will instruct the build process of Qv2ray.")]),a._v(" "),e("p",[a._v("You may use an AUR helper such as "),e("code",[a._v("yay")]),a._v(", "),e("code",[a._v("yaourt")]),a._v(", "),e("code",[a._v("pikaur")]),a._v(" and so on to automatically handle the build process of AUR packages.")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("NOTE")]),a._v(" "),e("p",[a._v("The following example is utilizing "),e("code",[a._v("yay")]),a._v(". For other AUR helpers, check the usage in respective documentations.")])]),a._v(" "),e("p",[a._v("First, you may try searching "),e("code",[a._v("qv2ray")]),a._v(" in AUR:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ yay -Ss qv2rayaur/qv2ray-dev-git "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.99")]),a._v(".4.r47514d2-1 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("+2 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.98")]),a._v("%"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("     Qt cross platform v2ray GUI client "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Dev branch build release"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("aur/qv2ray "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.3")]),a._v(".8.0-1 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("+4 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.23")]),a._v("%"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("     Qt cross platform v2ray GUI client\n")])])]),e("p",[a._v("Then, choose the adequate version of Qv2ray to install. There are two versions available:")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("Stable version")]),a._v(", with package name "),e("strong",[a._v("qv2ray")]),a._v(". This package is built from the master branch of Git repository, and shall be stable enough for cautious users.")]),a._v(" "),e("li",[e("strong",[a._v("Development version")]),a._v(", with package name "),e("strong",[a._v("qv2ray-dev-git")]),a._v(". This package is built from the dev branch of Git repository. Along with the newest features and improvements, there are potential risks for using an unstable distribution.")])]),a._v(" "),e("p",[a._v("Choose according to your actual situation. Here, we choose to install qv2ray-dev-git:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ yay -S qv2ray-dev-git\n")])])]),e("p",[a._v("Qv2ray will be ready to use after finishing the command.")]),a._v(" "),e("h4",{attrs:{id:"getting-from-aur-the-hard-way"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-from-aur-the-hard-way"}},[a._v("#")]),a._v(" Getting from AUR, the hard way")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 1. Clone the AUR repository (`qv2ray-dev-git` as an example):")]),a._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://aur.archlinux.org/qv2ray-dev-git.git\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 2. Enter `PKGBUILD` folder:")]),a._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" qv2ray-dev-git\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 3. Build Qv2ray:")]),a._v("\n$ makepkg -sf\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 4. Install the generated package after building:")]),a._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pacman -U qv2ray-dev-git-v1.99.4.2550-1-x86_64.pkg.tar.zst\n")])])]),e("p",[a._v("You are done.")]),a._v(" "),e("h2",{attrs:{id:"getting-from-app-stores"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-from-app-stores"}},[a._v("#")]),a._v(" Getting from App Stores")]),a._v(" "),e("h3",{attrs:{id:"flathub"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flathub"}},[a._v("#")]),a._v(" Flathub")]),a._v(" "),e("ol",[e("li",[a._v("Download and set up flatpak by following their (https://flatpak.org/setup/).")]),a._v(" "),e("li",[a._v("Install Qv2ray:")])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ flatpak "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" com.github.Qv2ray"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(":warning:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("https://camo.githubusercontent.com/25c4c2e34ef6f549d21daa333a53fb20546622fd/68747470733a2f2f6769746875622e6769746875626173736574732e636f6d2f696d616765732f69636f6e732f656d6f6a692f756e69636f64652f323661302e706e67 "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('":warning:"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("**You shouldn't change the default vcore path because of the sandbox permission.**\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),e("p",[e("strong",[a._v("You shouldn't change the default vcore path because of the sandbox permission.")])])]),a._v(" "),e("h3",{attrs:{id:"building-from-source"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#building-from-source"}},[a._v("#")]),a._v(" Building From Source")]),a._v(" "),e("p",[a._v("Please refer to "),e("a",{attrs:{href:"/en/hacking/manuallybuild"}},[a._v("Manually-Build-Qv2ray")]),a._v(" Page.")])])}),[],!1,null,null,null);t.default=s.exports}}]);