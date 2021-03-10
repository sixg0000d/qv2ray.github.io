(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{412:function(a,v,r){"use strict";r.r(v);var t=r(16),_=Object(t.a)({},(function(){var a=this,v=a.$createElement,r=a._self._c||v;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"v2ray-統合"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#v2ray-統合"}},[a._v("#")]),a._v(" V2ray 統合")]),a._v(" "),r("ul",[r("li",[a._v("V2rayとトロイの木馬/SSR/等との統合方法")])]),a._v(" "),r("h2",{attrs:{id:"v2ray統合とは"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#v2ray統合とは"}},[a._v("#")]),a._v(" V2ray統合とは")]),a._v(" "),r("p",[a._v("Qv2rayには、プラグインカーネル(SSR / Trojan)とV2ray Coreを統合するための特別な機能があります。")]),a._v(" "),r("p",[a._v("多くのカーネルにはルーティングエンジンが内蔵されていません (例えば、SSR)、PAC機能に依存します。 Qv2rayは、ユーザーがPACファイルを必要とせず、PACを置き換えるためにV2ray-Coreを必要とするこの依存関係を破っています。")]),a._v(" "),r("h2",{attrs:{id:"なぜpacではないのですか"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#なぜpacではないのですか"}},[a._v("#")]),a._v(" なぜPACではないのですか?")]),a._v(" "),r("p",[a._v("PAC機能はQv2ray開発グループによって非推奨とされています。 私たちはユーザーが使用することをお勧めしません。理由は以下です:")]),a._v(" "),r("ul",[r("li",[a._v("PACは、 "),r("code",[a._v("GFWList")]),a._v(" または他のドメイン・リストによって生成される既存のルールに依存しています。")]),a._v(" "),r("li",[a._v("PACファイルをローカルで編集するのは困難であり、エラーが発生する可能性があります。単一のタイプ/構文エラーにより、PACファイル全体が問題になります。")]),a._v(" "),r("li",[a._v("V2ray has its own routing table implementations and "),r("code",[a._v("geoip")]),a._v(", "),r("code",[a._v("geosite")]),a._v(" data is generated from the official providers, they update the list frequently")]),a._v(" "),r("li",[a._v("V2ray Integrationの使用は、PACを設定するよりも簡単です。")])]),a._v(" "),r("h2",{attrs:{id:"v2ray統合の仕組み"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#v2ray統合の仕組み"}},[a._v("#")]),a._v(" V2ray統合の仕組み")]),a._v(" "),r("p",[a._v("いくつかのステップがあります:")]),a._v(" "),r("ol",[r("li",[a._v("Qv2ray が検出された/いくつかのアウトバウンド設定は、1 つ/いくつかのプラグインカーネル用です。")]),a._v(" "),r("li",[a._v("Qv2rayは各カーネルに対してHTTPインバウンドとSOCKSインバウンド(有効な場合は任意)のポートを割り当てます。")]),a._v(" "),r("li",[a._v("Qv2ray は、HTTP/SOCKS outbound() にアウトバウンドするカーネルプラグインを置き換えます。それぞれが適切なインバウンドプロトコルを持つ特定のプラグインに対応しています。")]),a._v(" "),r("li",[a._v("V2ray設定ファイルに新しいルーティングテーブルエントリが追加され、プラグインへのHTTPインバインド、SOCKSと同じようにルーティングします。")]),a._v(" "),r("li",[a._v("Qv2rayはこの接続設定で使用されているすべてのカーネルプラグインを起動します。 その後、V2レイを開始します。")]),a._v(" "),r("li",[a._v("Qv2rayは個々のプラグインからデータを取得するのではなく、V2rayから統計データを収集します。")])]),a._v(" "),r("h2",{attrs:{id:"v2ray-統合による利点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#v2ray-統合による利点"}},[a._v("#")]),a._v(" V2ray 統合による利点")]),a._v(" "),r("ul",[r("li",[a._v("CNドメインとIPアドレスをバイパスします。")]),a._v(" "),r("li",[a._v("ローカルエリアネットワークアドレスをバイパスします。")]),a._v(" "),r("li",[a._v("Qv2ray の高度なルーティングマトリックス設定。")]),a._v(" "),r("li",[a._v("カスタムDNS設定")])])])}),[],!1,null,null,null);v.default=_.exports}}]);