(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{408:function(a,t,r){"use strict";r.r(t);var e=r(16),s=Object(e.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"ウェイランドについてのいくつかのノート"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ウェイランドについてのいくつかのノート"}},[a._v("#")]),a._v(" ウェイランドについてのいくつかのノート")]),a._v(" "),r("p",[r("strong",[a._v("注意: このセクションは GNU/Linux システム")]),a._v(" にのみ適用されます。")]),a._v(" "),r("h2",{attrs:{id:"実行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#実行"}},[a._v("#")]),a._v(" 実行")]),a._v(" "),r("p",[a._v("Qv2rayは、Waylandディスプレイプロトコルを完全にサポートするネイティブQt5/C++プログラムです。 ただし、Qv2rayがWaylandプロトコルで実行されるには、Waylandセッション(Gnomeセッション、KDEのWaylandセッション、Swayなど)が必要です。 また、Qt5 の Wayland サポート (通常はパッケージ名 "),r("code",[a._v("qt5-wayland")]),a._v(" または "),r("code",[a._v("(qtwayland5")]),a._v(" ) をインストールする必要があります。")]),a._v(" "),r("p",[a._v("すべてが整っている場合は、Wayland ディスプレイプロトコルで Qv2ray を実行しようとすることができます。")]),a._v(" "),r("h3",{attrs:{id:"gnome-環境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gnome-環境"}},[a._v("#")]),a._v(" Gnome 環境")]),a._v(" "),r("p",[a._v("Gnome環境でのQt5プログラムは、Xorgプロトコル(WaylandのXorgのフォールバックモード)を使用してデフォルトでXwaylandで実行されます。 したがって、Qv2rayをWaylandディスプレイプロトコルで実行させるには、次のコマンドを実行する必要があります。")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("QT_QPA_PLATFORM")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("wayland qv2ray\n")])])]),r("p",[a._v("次のように動作します。")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://imgchr.com/i/BIuwb4",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://s1.ax1x.com/2020/11/07/BIuwb4.png",alt:"Qv2ray on Wayland in Gnome Session"}}),r("OutboundLink")],1)]),a._v(" "),r("p",[a._v("Qv2rayが起動時にWaylandディスプレイプロトコルを使用できるように、 "),r("code",[a._v("QT_QPA_PLATFORM=wayland")]),a._v(" をQv2rayのデスクトップファイルに追加できます。")]),a._v(" "),r("h3",{attrs:{id:"kde-プラズマ・ウェイランドセッション"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kde-プラズマ・ウェイランドセッション"}},[a._v("#")]),a._v(" KDE プラズマ・ウェイランドセッション")]),a._v(" "),r("p",[a._v("理論的には、ウェイランド表示プロトコルがデフォルトですが、これは検証されていません。 Qv2rayは、上記と同じ方法でWaylandディスプレイプロトコルに従うように指定されています。")]),a._v(" "),r("h3",{attrs:{id:"スウェイ"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#スウェイ"}},[a._v("#")]),a._v(" スウェイ")]),a._v(" "),r("p",[a._v("テストされておらず、使用経験のある方からの寄付は歓迎します。 ウェイランド表示プロトコルに従うようにQv2rayを指定することは上記と同じです。")]),a._v(" "),r("h2",{attrs:{id:"トラブルシューティング"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#トラブルシューティング"}},[a._v("#")]),a._v(" トラブルシューティング")]),a._v(" "),r("h3",{attrs:{id:"ウェイランドでは実行できません"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ウェイランドでは実行できません"}},[a._v("#")]),a._v(" ウェイランドでは実行できません")]),a._v(" "),r("p",[a._v("Xorg ベースのデスクトップ セッションを使用しているか、Qt5 の Wayland コンポーネントがインストールされていない可能性があります。 または、静的に Qv2ray をコンパイルしていますが、Qt5 の Wayland コンポーネントは含まれていません。")]),a._v(" "),r("h3",{attrs:{id:"ウェイランド表示プロトコルの下で実行されている壁の登り速度は上がっていますか"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ウェイランド表示プロトコルの下で実行されている壁の登り速度は上がっていますか"}},[a._v("#")]),a._v(" ウェイランド表示プロトコルの下で実行されている壁の登り速度は上がっていますか?")]),a._v(" "),r("p",[a._v("いいえ結構です。")]),a._v(" "),r("h3",{attrs:{id:"kde-wayland-セッションでの問題"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kde-wayland-セッションでの問題"}},[a._v("#")]),a._v(" KDE Wayland セッションでの問題")]),a._v(" "),r("p",[a._v("KDE Wayland セッションでは、ログアウトして再度ログインすると、Qv2ray は終了しません。 通知トレイアイコンが表示されず、CPUを大量に使用します。")]),a._v(" "),r("p",[r("strong",[a._v("解決策は (3 つの選択肢のいずれかを使用する):")]),a._v(" 1、Gnome Wayland sessionを使用する 2、KDE プラズマまたは他のデスクトップの Xorg session 3. Qv2rayプロセスを自分で殺してから、もう一度開きます。")]),a._v(" "),r("blockquote",[r("p",[a._v("関連する問題: "),r("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray/issues/830",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/Qv2ray/Qv2ray/issues/830"),r("OutboundLink")],1)])]),a._v(" "),r("p",[a._v("翻訳済み www.DeepL.com/Translator (無料版)")]),a._v(" "),r("h3",{attrs:{id:"gnomeの下にトレイアイコンがありません"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gnomeの下にトレイアイコンがありません"}},[a._v("#")]),a._v(" Gnomeの下にトレイアイコンがありません")]),a._v(" "),r("p",[a._v("Gnomeデスクトップはトレイアイコンをサポートしていません。 Ubuntu は DBus 通信に基づいて Gnome トレイ拡張をサポートする "),r("a",{attrs:{href:"https://extensions.gnome.org/extension/1301/ubuntu-appindicators/",target:"_blank",rel:"noopener noreferrer"}},[a._v("拡張"),r("OutboundLink")],1),a._v(" をしました。 これまでのテストの結果、拡張モジュールはArch Linuxの下でWaylandで実行されているQv2rayからトレイを表示することができます。 しかし、Ubuntu Waylandのカスタムセッションの下にそれらを表示しない場合があります。 これは上流の問題であり、このプロジェクトでは対処できません。")]),a._v(" "),r("h3",{attrs:{id:"アプリケーションウィンドウはどこですか。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#アプリケーションウィンドウはどこですか。"}},[a._v("#")]),a._v(" アプリケーションウィンドウはどこですか。")]),a._v(" "),r("p",[a._v("上記のように、GNOME は tray アイコンをサポートしていないので、Wayland の参照コンポジター "),r("code",[a._v("weston")]),a._v(" も同様です。 With current version, the application main window will be hidden after launch if "),r("strong",[r("em",[a._v("Auto Connect")])]),a._v(" is enabled.(see "),r("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray/issues/1080",target:"_blank",rel:"noopener noreferrer"}},[a._v("#1080"),r("OutboundLink")],1),a._v(" "),r("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray/issues/1080",target:"_blank",rel:"noopener noreferrer"}},[a._v("#1097"),r("OutboundLink")],1),a._v("). 現在の回避策は、Qv2rayを再度起動することです。その後、メインウィンドウがアクティブになり、表示されます。")]),a._v(" "),r("h2",{attrs:{id:"clipboard"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#clipboard"}},[a._v("#")]),a._v(" Clipboard")]),a._v(" "),r("p",[a._v("Waylandはクリップボードのインターフェースを持っていないので、 ウェイランドで実行されているアプリケーション間のコピーとペーストに右クリックメニューを使用することはできないかもしれません。 回避策として、 "),r("code",[a._v("Ctrl + C/V")]),a._v(" を使用してコピーして貼り付けることができます。 コピーと貼り付けの際は、コピーソースウィンドウと貼り付けターゲットウィンドウの両方を同時に開きます。")]),a._v(" "),r("p",[a._v("翻訳済み www.DeepL.com/Translator (無料版)")])])}),[],!1,null,null,null);t.default=s.exports}}]);