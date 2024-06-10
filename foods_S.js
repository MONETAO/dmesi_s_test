const foods = [
    {
        type: [
           "meat",
           "luxury"
       ],
       name: "スペシャルセット",
       image: "image/DS-food/DS.R1.1.jpeg",
       price: 3300,
       restaurantId: "DSR1"
   },
   {
        type: [
           "alcohol"
       ],
       name: "スパークリングワインカクテル（アペロール＆オレンジ）",
       image: "image/DS-food/DS.R1.2.jpg",
       price: 1100,
       restaurantId: "DSR1"
   },
   {
        type: [
           "alcohol"
       ],
       name: "スパークリングワイン（ランブルスコ）",
       image: "image/DS-food/DS.R1.3.jpg",
       price: 1000,
       restaurantId: "DSR1"
   },
   {
        type: [
           "alcohol"
       ],
       name: "スパークリングワイン",
       image: "image/DS-food/DS.R1.4.jpg",
       price: 1000,
       restaurantId: "DSR1"
   },
   {
        type: [
           "drink",
           "frozen"
       ],
       name: "スパークリングドリンク（マンゴー＆ライム）",
       image: "image/DS-food/DS.R1.5.jpg",
       price: 600,
       restaurantId: "DSR1"
   },
   {
        type: [
           "warm"
       ],
       name: "ミネストローネ",
       image: "image/DS-food/DS.R1.6.jpg",
       price: 480,
       restaurantId: "DSR1"
   },
   {
        type: [
           "meat"
       ],
       name: "シュリンプ＆マンゴー",
       image: "image/DS-food/DS.R1.7.jpg",
       price: 600,
       restaurantId: "DSR1"
   },
   {
        type: [
           "meat"
       ],
       name: "生ハム＆モッツァレッラ",
       image: "image/DS-food/DS.R1.8.jpg",
       price: 600,
       restaurantId: "DSR1"
   },
   {
        type: [
           "meat"
       ],
       name: "サーモン＆オニオンマリネ（アーモンド入り）",
       image: "image/DS-food/DS.R1.9.jpg",
       price: 600,
       restaurantId: "DSR1"
   },
   {
        type: [
           "vegan"
       ],
       name: "ミックスサラダ（シュリンプ）",
       image: "image/DS-food/DS.R1.10.jpg",
       price: 950,
       restaurantId: "DSR1"
   },
   {
        type: [
           "meat"
       ],
       name: "ローストチキン",
       image: "image/DS-food/DS.R1.11.jpg",
       price: 1850,
       restaurantId: "DSR1"
   },
   {
        type: [
           "meat"
       ],
       name: "赤魚のロースト、シーフードトマトクリームスープ",
       image: "image/DS-food/DS.R1.12.jpg",
       price: 1850,
       restaurantId: "DSR1"
   },
   {
        type: [
           "meat"
       ],
       name: "プラントベースフードとオルツォのインヴォルティーニ風",
       image: "image/DS-food/DS.R1.13.jpg",
       price: 1980,
       restaurantId: "DSR1"
   },
   {
        type: [
           "sweat"
       ],
       name: "ラズベリー＆レモンムースケーキ",
       image: "image/DS-food/DS.R1.14.jpg",
       price: 650,
       restaurantId: "DSR1\nDSR23\nDSR33"
   },
   {
        type: [
           "alcohol",
           "frozen"
       ],
       name: "アマレットラテカクテル",
       image: "image/DS-food/DS.R2.1.jpg",
       price: 900,
       restaurantId: "DSR2"
   },
   {
        type: [
           "sweat",
           "onehand"
       ],
       name: "チョコチップ＆クルミのビスコッティ",
       image: "image/DS-food/DS.R2.2.jpg",
       price: 200,
       restaurantId: "DSR2"
   },
   {
        type: [
           "sweat",
           "onehand"
       ],
       name: "チョコチップ＆クルミのビスコッティ、ティラミス仕立て",
       image: "image/DS-food/DS.R2.3.jpg",
       price: 700,
       restaurantId: "DSR2"
   },
   {
        type: [
           "sweat",
           "onehand"
       ],
       name: "ミッキーマカロン（チョコレート）",
       image: "image/DS-food/DS.R2.4.jpg",
       price: 600,
       restaurantId: "DSR2"
   },
   {
        type: [
           "drink",
           "warm"
       ],
       name: "カフェラテ",
       image: "image/DS-food/DS.R2.5.JPEG",
       price: 600,
       restaurantId: "DSR2"
   },
   {
        type: [
           "pasta"
       ],
       name: "スペシャルセット",
       image: "image/DS-food/DS.R3.1.jpg",
       price: 1860,
       restaurantId: "DSR3"
   },
   {
        type: [
           "drink",
           "frozen"
       ],
       name: "スパークリングドリンク（ピーチ＆レモン）",
       image: "image/DS-food/DS.R3.2.jpg",
       price: 700,
       restaurantId: "DSR3"
   },
   {
        type: [
           "pasta"
       ],
       name: "ミートボール・スパゲッティ",
       image: "image/DS-food/DS.R3.3.jpg",
       price: 1100,
       restaurantId: "DSR3"
   },
   {
        type: [
           "pizza"
       ],
       name: "シーフードピッツァ(エッグ＆サーモントラウト)",
       image: "image/DS-food/DS.R3.4.jpg",
       price: 1300,
       restaurantId: "DSR3"
   },
   {
        type: [
           "bakery",
           "onehand"
       ],
       name: "ロングピッツァ(トマト＆バジル)",
       image: "image/DS-food/DS.R3.5.jpg",
       price: 960,
       restaurantId: "DSR3"
   },
   {
        type: [
           "vegan"
       ],
       name: "生ハムのサラダ",
       image: "image/DS-food/DS.R3.6.jpg",
       price: 550,
       restaurantId: "DSR3"
   },
   {
        type: [
           "sweat",
           "onehand"
       ],
       name: "リトルグリーンまん",
       image: "image/DS-food/DS.R3.7.jpg",
       price: 400,
       restaurantId: "DSR3\nDSR27"
   },
   {
        type: [
           "sweat",
           "onehand"
       ],
       name: "ミッキーチュロス（シナモン）",
       image: "image/DS-food/DS.R3.8.jpg",
       price: 450,
       restaurantId: "DSR3\nDSR16\nDSR26"
   },
   {
        type: [
           "meat",
           "luxury"
       ],
       name: "～シェフズ・イマジネーション～　スペシャルコース、ペアリングワイン付き",
       image: "image/DS-food/DS.R4.1.jpg",
       price: 16500,
       restaurantId: "DSR4"
   },
   {
        type: [
           "meat",
           "luxury"
       ],
       name: "マゼラン",
       image: "image/DS-food/DS.R4.2.jpg",
       price: 8000,
       restaurantId: "DSR4"
   },
   {
        type: [
           "meat",
           "luxury"
       ],
       name: "パシフィック",
       image: "image/DS-food/DS.R4.3.jpg",
       price: 6000,
       restaurantId: "DSR4"
   },
   {
        type: [
           "drink",
           "frozen"
       ],
       name: "マゼランズ・オリジナルソフトドリンク、コレクタブルグラス付き",
       image: "image/DS-food/DS.R4.4.jpg",
       price: 1500,
       restaurantId: "DSR4"
   },
   {
        type: [
           "drink",
           "frozen"
       ],
       name: "コーヒータピオカラテ",
       image: "image/DS-food/DS.R5.1.jpg",
       price: 600,
       restaurantId: "DSR5"
   },
   {
        type: [
           "bakaery",
           "onehand"
       ],
       name: "マイクメロンパン(クリーム入り)",
       image: "image/DS-food/DS.R5.2.jpg",
       price: 500,
       restaurantId: "DSR5"
   },
   {
        type: [
           "bakaery",
           "onehand"
       ],
       name: "ビーフパイ （チーズ＆トリュフ風味）",
       image: "image/DS-food/DS.R5.3.jpg",
       price: 800,
       restaurantId: "DSR5"
   },
   {
        type: [
           "burger",
           "onehand"
       ],
       name: "マンマのおすすめセット",
       image: "image/DS-food/DS.R5.4.jpg",
       price: 1150,
       restaurantId: "DSR5"
   },
   {
        type: [
           "bakaery",
           "onehand"
       ],
       name: "チキンマヨネーズデニッシュ",
       image: "image/DS-food/DS.R5.5.jpg",
       price: 360,
       restaurantId: "DSR5"
   },
   {
        type: [
           "bakaery",
           "onehand"
       ],
       name: "シナモンロール",
       image: "image/DS-food/DS.R5.6.jpg",
       price: 480,
       restaurantId: "DSR5"
   },
   {
        type: [
           "sweat",
           "onehand"
       ],
       name: "ミッキーマカロン（チョコレート）",
       image: "image/DS-food/DS.R5.7.jpg",
       price: 600,
       restaurantId: "DSR5\nDSR32"
   },
   {
        type: [
           "vegan"
       ],
       name: "シェフサラダ",
       image: "image/DS-food/DS.R6.3.jpg",
       price: 1020,
       restaurantId: "DSR6"
   },
   {
        type: [],
       name: "ゼッポリーネ",
       image: "image/DS-food/DS.R6.4.jpg",
       price: 600,
       restaurantId: "DSR6"
   },
   {
        type: [
           "pasta"
       ],
       name: "イカ墨のタリオリーニ、海老と蟹のトマトクリームソース",
       image: "image/DS-food/DS.R6.6.jpg",
       price: 1950,
       restaurantId: "DSR6"
   },
   {
        type: [
           "pasta"
       ],
       name: "スパゲッティ、牛肉のラグーソース",
       image: "image/DS-food/DS.R6.7.jpg",
       price: 1950,
       restaurantId: "DSR6"
   },
   {
        type: [
           "pizza"
       ],
       name: "シェフおすすめのピッツァ",
       image: "image/DS-food/DS.R6.8.jpg",
       price: 2400,
       restaurantId: "DSR6"
   },
   {
        type: [
           "pizza"
       ],
       name: "ピッツァ･マルゲリータ",
       image: "image/DS-food/DS.R6.9.jpg",
       price: 2100,
       restaurantId: "DSR6"
   },
   {
        type: [
           "pizza",
           "vegan"
       ],
       name: "ピッツァ、パラッツォ・カナル（ベジタブル）",
       image: "image/DS-food/DS.R6.10.jpg",
       price: 2400,
       restaurantId: "DSR6"
   },
   {
        type: [
           "sweat"
       ],
       name: "ティラミス",
       image: "image/DS-food/DS.R6.11.jpg",
       price: 980,
       restaurantId: "DSR6"
   },
   {
        type: [
           "drink",
           "frozen"
       ],
       name: "リストランテ・ディ・カナレット･オリジナルソフトドリンク",
       image: "image/DS-food/DS.R6.12.jpg",
       price: 2080,
       restaurantId: "DSR6"
   },
   {
        type: [
           "alcohol",
           "frozen"
       ],
       name: "スパークリングカクテル（シェリー＆エルダーフラワーシロップ）",
       image: "image/DS-food/DS.R7.1.jpg",
       price: 780,
       restaurantId: "DSR7"
   },
   {
        type: [
           "meat",
           "onehand"
       ],
       name: "スモークターキーレッグ",
       image: "image/DS-food/DS.R7.2.jpg",
       price: 900,
       restaurantId: "DSR7"
   },
   {
        type: [
           "warm",
           "drink",
           "sweat"
       ],
       name: "ホットチョコレート",
       image: "image/DS-food/DS.R7.3.jpg",
       price: 600,
       restaurantId: "DSR7"
   },
   {
        type: [
           "burger",
           "onehand"
       ],
       name: "ケープコッド・クックオフのファーストプライズセット",
       image: "image/DS-food/DS.R9.1.jpg",
       price: 1490,
       restaurantId: "DSR9"
   },
   {
        type: [
           "burger",
           "onehand"
       ],
       name: "プルドポーク・チーズバーガーセット",
       image: "image/DS-food/DS.R9.2.jpg",
       price: 1440,
       restaurantId: "DSR9"
   },
   {
        type: [
           "burger",
           "onehand"
       ],
       name: "ベーコンエッグバーガーセット",
       image: "image/DS-food/DS.R9.3.jpg",
       price: 1440,
       restaurantId: "DSR9"
   },
   {
        type: [
           "onehand",
           "warm"
       ],
       name: "ニューイングランド・シーフードチャウダー",
       image: "image/DS-food/DS.R9.4.jpg",
       price: 420,
       restaurantId: "DSR9\nDSR32"
   },
   {
        type: [
           "onehand",
           "vegan"
       ],
       name: "カップサラダ",
       image: "image/DS-food/DS.R9.5.jpg",
       price: 360,
       restaurantId: "DSR9\nDSR10\nDSR30\nDSR32\nDSR38"
   },
   {
        type: [
           "onehand"
       ],
       name: "チキンナゲット",
       image: "image/DS-food/DS.R9.6.jpg",
       price: 400,
       restaurantId: "DSR9\nDSR27"
   },
   {
        type: [
           "onehand"
       ],
       name: "フレンチフライポテト",
       image: "image/DS-food/DS.R9.7.jpg",
       price: 280,
       restaurantId: "DSR9\nDSR10\nDSR26\nDSR32\nDSR38"
   },
   {
        type: [
           "sweat",
           "onehand"
       ],
       name: "クレームブリュレ風チュロス",
       image: "image/DS-food/DS.R10.1.jpg",
       price: 600,
       restaurantId: "DSR10\nDSR17\nDSR22"
   },
   {
        type: [
           "sweat",
           "onehand"
       ],
       name: "フレッシュフルーツカップ（ストロベリー）",
       image: "image/DS-food/DS.R10.2.jpg",
       price: 500,
       restaurantId: "DSR10"
   },
   {
        type: [
           "alcohol",
           "frozen",
           "luxury"
       ],
       name: "オリジナルカクテル",
       image: "image/DS-food/DS.R11.1.jpg",
       price: 2200,
       restaurantId: "DSR11"
   },
   {
        type: [
           "sweat",
           "luxury"
       ],
       name: "デザートプレート",
       image: "image/DS-food/DS.R11.2.jpg",
       price: 2500,
       restaurantId: "DSR11"
   },
   {
        type: [
           "luxury"
       ],
       name: "アソーテッドスナック",
       image: "image/DS-food/DS.R11.3.jpg",
       price: 1600,
       restaurantId: "DSR11"
   },
   {
        type: [
           "luxury",
           "bakery"
       ],
       name: "アペタイザープレート",
       image: "image/DS-food/DS.R11.4.jpg",
       price: 2600,
       restaurantId: "DSR11"
   },
   {
        type: [
           "burger",
           "luxury"
       ],
       name: "サンドウィッチプレート",
       image: "image/DS-food/DS.R11.5.jpg",
       price: 2800,
       restaurantId: "DSR11"
   },
   {
        type: [
           "drink",
           "frozen",
           "luxury"
       ],
       name: "シティセレナーデ（ノンアルコール）",
       image: "image/DS-food/DS.R11.6.jpg",
       price: 1200,
       restaurantId: "DSR11"
   },
   {
        type: [
           "alcohol",
           "frozen",
           "luxury"
       ],
       name: "アトランティック・クルーズ",
       image: "image/DS-food/DS.R11.7.jpg",
       price: 1800,
       restaurantId: "DSR11"
   },
   {
        type: [
           "alcohol",
           "frozen",
           "luxury"
       ],
       name: "ギフト・フロム・テディ",
       image: "image/DS-food/DS.R11.8.jpg",
       price: 1800,
       restaurantId: "DSR11"
   },
   {
        type: [
           "burger",
           "onehand"
       ],
       name: "マイルハイ・デリ・サンド",
       image: "image/DS-food/DS.R14.1.jpg",
       price: 1630,
       restaurantId: "DSR14"
   },
   {
        type: [
           "burger",
           "onehand"
       ],
       name: "ルーベン･ホットサンド",
       image: "image/DS-food/DS.R14.2.jpg",
       price: 1720,
       restaurantId: "DSR14"
   },
   {
        type: [
           "sweat",
           "onehand"
       ],
       name: "クリームチーズ・ブラウニー",
       image: "image/DS-food/DS.R14.3.jpg",
       price: 400,
       restaurantId: "DSR14"
   },
   {
        type: [
           "vegan"
       ],
       name: "ミックスサラダ（パストラミビーフ）",
       image: "image/DS-food/DS.R14.4.jpg",
       price: 950,
       restaurantId: "DSR14"
   },
   {
        type: [
           "sweat",
           "onehand"
       ],
       name: "チュロス(みたらしシュガー)",
       image: "image/DS-food/DS.R18.1.jpg",
       price: 500,
       restaurantId: "DSR18"
   },
   {
        type: [
           "rice",
           "meat",
           "luxury"
       ],
       name: "天麩羅膳",
       image: "image/DS-food/DS.R19.1.jpg",
       price: 3300,
       restaurantId: "DSR19"
   },
   {
        type: [
           "rice",
           "meat",
           "luxury"
       ],
       name: "魚料理とヒレカツ膳",
       image: "image/DS-food/DS.R19.2.jpg",
       price: 3300,
       restaurantId: "DSR19"
   },
   {
        type: [
           "warm"
       ],
       name: "チャーリー特製味噌クラムチャウダー",
       image: "image/DS-food/DS.R19.3.jpg",
       price: 700,
       restaurantId: "DSR19"
   },
   {
        type: [
           "luxury"
       ],
       name: "肴三種",
       image: "image/DS-food/DS.R19.4.jpg",
       price: 1000,
       restaurantId: "DSR19"
   },
   {
        type: [
           "sweat"
       ],
       name: "フルーツとわらび餅のパフェ、和三盆のシロップ",
       image: "image/DS-food/DS.R19.5.jpg",
       price: 700,
       restaurantId: "DSR19"
   },
   {
        type: [
           "onehand",
           "cyuka"
       ],
       name: "うきわまん（エビ）",
       image: "image/DS-food/DS.R21.1.jpg",
       price: 600,
       restaurantId: "DSR21"
   },
   {
        type: [
           "rice",
           "onehand"
       ],
       name: "寿司ロール（シュリンプ＆チキンカツ）",
       image: "image/DS-food/DS.R22.1.jpg",
       price: 550,
       restaurantId: "DSR22"
   },
   {
        type: [
           "drink",
           "frozen"
       ],
       name: "グアバスムージー＆オレンジゼリー",
       image: "image/DS-food/DS.R22.2.jpg",
       price: 700,
       restaurantId: "DSR22"
   },
   {
        type: [
           "warm"
       ],
       name: "コーンチャウダー",
       image: "image/DS-food/DS.R23.1.jpg",
       price: 440,
       restaurantId: "DSR23"
   },
   {
        type: [
           "vegan"
       ],
       name: "ミックスサラダ（スモークチキン＆チーズ）",
       image: "image/DS-food/DS.R23.2.jpg",
       price: 950,
       restaurantId: "DSR23"
   },
   {
        type: [
           "meat"
       ],
       name: "グリルドビーフ、デミグラスソース",
       image: "image/DS-food/DS.R23.3.jpg",
       price: 2380,
       restaurantId: "DSR23"
   },
   {
        type: [
           "meat"
       ],
       name: "ミックスフライ",
       image: "image/DS-food/DS.R23.4.jpg",
       price: 1480,
       restaurantId: "DSR23"
   },
   {
        type: [
           "meat"
       ],
       name: "スパイシーチキンのオーブン焼き",
       image: "image/DS-food/DS.R23.5.jpg",
       price: 1250,
       restaurantId: "DSR23"
   },
   {
        type: [
           "onehand"
       ],
       name: "ユカタンソーセージドッグ",
       image: "image/DS-food/DS.R24.1.jpg",
       price: 500,
       restaurantId: "DSR24"
   },
   {
        type: [
           "sweat",
           "onehand"
       ],
       name: "ティポトルタ(チョコレート＆オレンジ)",
       image: "image/DS-food/DS.R25.1.jpg",
       price: 500,
       restaurantId: "DSR25"
   },
   {
        type: [
           "burger",
           "onehand"
       ],
       name: "ミゲルのおすすめセット",
       image: "image/DS-food/DS.R26.1.jpg",
       price: 1420,
       restaurantId: "DSR26"
   },
   {
        type: [
           "meat",
           "onehand"
       ],
       name: "スパイシースモークチキンレッグ",
       image: "image/DS-food/DS.R26.2.jpg",
       price: 1140,
       restaurantId: "DSR26"
   },
   {
        type: [
           "meat",
           "rice",
           "onehand"
       ],
       name: "ポークライスロール",
       image: "image/DS-food/DS.R26.3.jpg",
       price: 1140,
       restaurantId: "DSR26"
   },
   {
        type: [
           "cyuka",
           "onehand"
       ],
       name: "ギョウザドッグ",
       image: "image/DS-food/DS.R26.4.jpg",
       price: 1140,
       restaurantId: "DSR26\nDSR34"
   },
   {
        type: [
           "onehand"
       ],
       name: "コーンチップス、アボカドディップ付き",
       image: "image/DS-food/DS.R26.5.jpg",
       price: 360,
       restaurantId: "DSR26"
   },
   {
        type: [
           "vegan"
       ],
       name: "ミックスサラダ",
       image: "image/DS-food/DS.R26.6.jpg",
       price: 780,
       restaurantId: "DSR26"
   },
   {
        type: [
           "alcohol",
           "frozen"
       ],
       name: "スパークリングカクテル（ラム＆パッションフルーツ）",
       image: "image/DS-food/DS.R27.1.jpg",
       price: 780,
       restaurantId: "DSR27"
   },
   {
        type: [
           "rice",
           "meat"
       ],
       name: "チキンのオーブン焼き、ベーコン、エッグ、ライス添え",
       image: "image/DS-food/DS.R27.2.jpg",
       price: 1480,
       restaurantId: "DSR27"
   },
   {
        type: [
           "rice",
           "meat"
       ],
       name: "スパイシーサーモンのオーブン焼き、エッグ、ライス添え",
       image: "image/DS-food/DS.R27.3.jpg",
       price: 1540,
       restaurantId: "DSR27"
   },
   {
        type: [
           "vegan"
       ],
       name: "ミックスサラダ（ケイジャンチキン）",
       image: "image/DS-food/DS.R27.4.jpg",
       price: 950,
       restaurantId: "DSR27"
   },
   {
        type: [
           "meat"
       ],
       name: "アソーテッドスナック",
       image: "image/DS-food/DS.R27.5.jpg",
       price: 600,
       restaurantId: "DSR27"
   },
   {
        type: [
           "warm"
       ],
       name: "ベジタブルとベーコンのクリームスープ",
       image: "image/DS-food/DS.R27.6.jpg",
       price: 370,
       restaurantId: "DSR27"
   },
   {
        type: [
           "meat",
           "onehand"
       ],
       name: "スパイシースモークチキンレッグ",
       image: "image/DS-food/DS.R28.1.jpg",
       price: 600,
       restaurantId: "DSR28"
   },
   {
        type: [
           "frozen",
           "drink"
       ],
       name: "スパークリングタピオカティー（マンゴー）",
       image: "image/DS-food/DS.R28.2.jpg",
       price: 600,
       restaurantId: "DSR28"
   },
   {
        type: [
           "sweat",
           "onehand"
       ],
       name: "チュロス(チャイシュガー)",
       image: "image/DS-food/DS.R29.1.jpg",
       price: 500,
       restaurantId: "DSR29"
   },
   {
        type: [
           "rice"
       ],
       name: "コンビカリー、タンドーリチキン添え（中辛ビーフ＆甘口シュリンプ）",
       image: "image/DS-food/DS.R30.1.jpg",
       price: 1300,
       restaurantId: "DSR30"
   },
   {
        type: [
           "rice"
       ],
       name: "ビーフカリー（中辛）",
       image: "image/DS-food/DS.R30.2.jpg",
       price: 1100,
       restaurantId: "DSR30"
   },
   {
        type: [
           "rice"
       ],
       name: "チキンカリー（甘口）",
       image: "image/DS-food/DS.R30.3.jpg",
       price: 900,
       restaurantId: "DSR30"
   },
   {
        type: [
           "rice",
           "vegan"
       ],
       name: "ベジタブルカリー（中辛）",
       image: "image/DS-food/DS.R30.4.jpg",
       price: 840,
       restaurantId: "DSR30"
   },
   {
        type: [
           "meat",
           "onehand"
       ],
       name: "タンドーリチキン（１ピース）",
       image: "image/DS-food/DS.R30.5.jpg",
       price: 400,
       restaurantId: "DSR30"
   },
   {
        type: [
           "sweat"
       ],
       name: "ココナッツプリン",
       image: "image/DS-food/DS.R30.6.jpg",
       price: 500,
       restaurantId: "DSR30"
   },
   {
        type: [
           "drink",
           "frozen"
       ],
       name: "ラッシー（マンゴー＆ラズベリー）",
       image: "image/DS-food/DS.R30.7.jpg",
       price: 600,
       restaurantId: "DSR30"
   },
   {
        type: [
           "bakery",
           "onehand"
       ],
       name: "ロング･ナン（ミートソース）",
       image: "image/DS-food/DS.R31.1.jpg",
       price: 500,
       restaurantId: "DSR31"
   },
   {
        type: [
           "frozen",
           "sweat",
           "onehand"
       ],
       name: "サルタンズサンデー",
       image: "image/DS-food/DS.R31.2.jpg",
       price: 850,
       restaurantId: "DSR31"
   },
   {
        type: [
           "pizza"
       ],
       name: "ソーセージとベーコンのピザ",
       image: "image/DS-food/DS.R32.1.jpg",
       price: 1340,
       restaurantId: "DSR32"
   },
   {
        type: [
           "onehand"
       ],
       name: "ポップン・シュリンプ",
       image: "image/DS-food/DS.R32.2.jpg",
       price: 400,
       restaurantId: "DSR32"
   },
   {
        type: [
           "sweat"
       ],
       name: "マンゴーとヨーグルトのムース、 スーベニアカップ付き",
       image: "image/DS-food/DS.R32.3.jpg",
       price: 880,
       restaurantId: "DSR32"
   },
   {
        type: [
           "cyuka",
           "rice"
       ],
       name: "マーボー豆腐のあんかけチャーハン",
       image: "image/DS-food/DS.R33.1.jpg",
       price: 1280,
       restaurantId: "DSR33"
   },
   {
        type: [
           "cyuka",
           "rice"
       ],
       name: "チャーシューと玉子のチャーハン",
       image: "image/DS-food/DS.R33.2.jpg",
       price: 980,
       restaurantId: "DSR33"
   },
   {
        type: [
           "cyuka",
           "meat"
       ],
       name: "海老のチリソース",
       image: "image/DS-food/DS.R33.3.jpg",
       price: 980,
       restaurantId: "DSR33"
   },
   {
        type: [
           "cyuka"
       ],
       name: "マーボー豆腐",
       image: "image/DS-food/DS.R33.4.jpg",
       price: 980,
       restaurantId: "DSR33"
   },
   {
        type: [
           "cyuka",
           "meat"
       ],
       name: "鶏の唐揚げ、ネギ塩ダレ",
       image: "image/DS-food/DS.R33.5.jpg",
       price: 980,
       restaurantId: "DSR33"
   },
   {
        type: [
           "warm",
           "cyuka"
       ],
       name: "おこげとワンタンのスープ",
       image: "image/DS-food/DS.R33.6.jpg",
       price: 420,
       restaurantId: "DSR33"
   },
   {
        type: [
           "vegan"
       ],
       name: "ミックスサラダ（チキン）",
       image: "image/DS-food/DS.R33.7.jpg",
       price: 950,
       restaurantId: "DSR33"
   },
   {
        type: [
           "cyuka"
       ],
       name: "点心三種",
       image: "image/DS-food/DS.R33.8.jpg",
       price: 450,
       restaurantId: "DSR33"
   },
   {
        type: [
           "cyuka"
       ],
       name: "春巻き（3個）",
       image: "image/DS-food/DS.R33.9.jpg",
       price: 380,
       restaurantId: "DSR33"
   },
   {
        type: [
           "cyuka"
       ],
       name: "パオ",
       image: "image/DS-food/DS.R33.10.jpg",
       price: 450,
       restaurantId: "DSR33"
   },
   {
        type: [
           "alcohol",
           "frozen"
       ],
       name: "ジン＆オレンジカクテル",
       image: "image/DS-food/DS.R34.1.jpg",
       price: 780,
       restaurantId: "DSR34"
   },
   {
        type: [
           "sweat",
           "onehand"
       ],
       name: "デミグラス・チュロス（ポテト）",
       image: "image/DS-food/DS.R35.1.jpg",
       price: 500,
       restaurantId: "DSR35"
   },
   {
        type: [
           "luxury",
           "meat"
       ],
       name: "アレンデールロイヤルセット（ビーフ）",
       image: "image/DS-food/DS.R36.1.jpg",
       price: 3500,
       restaurantId: "DSR36"
   },
   {
        type: [
           "luxury",
           "meat"
       ],
       name: "アレンデールロイヤルセット（シーフード）",
       image: "image/DS-food/DS.R36.2.jpg",
       price: 3500,
       restaurantId: "DSR36"
   },
   {
        type: [
           "bakery",
           "onehand"
       ],
       name: "オーケンのフッフーブレッド（カルダモン＆ミート）",
       image: "image/DS-food/DS.R37.1.jpg",
       price: 850,
       restaurantId: "DSR37"
   },
   {
        type: [
           "sweat"
       ],
       name: "ダックリングマフィン（キャラメル）",
       image: "image/DS-food/DS.R38.1.jpg",
       price: 600,
       restaurantId: "DSR38"
   },
   {
        type: [
           "sweat"
       ],
       name: "スウィーツエバーアフター（レモン＆ストロベリー）",
       image: "image/DS-food/DS.R38.2.jpg",
       price: 700,
       restaurantId: "DSR38"
   },
   {
        type: [
           "burger",
           "onehand"
       ],
       name: "ダックリングドリームバーガー",
       image: "image/DS-food/DS.R38.3.jpg",
       price: 1440,
       restaurantId: "DSR38"
   },
   {
        type: [
           "burger",
           "onehand"
       ],
       name: "ダックリングドリームチーズバーガー",
       image: "image/DS-food/DS.R38.4.jpg",
       price: 1490,
       restaurantId: "DSR38"
   },
   {
        type: [
           "burger",
           "onehand"
       ],
       name: "フライドシュリンプバーガー",
       image: "image/DS-food/DS.R38.5.jpg",
       price: 1490,
       restaurantId: "DSR38"
   },
   {
        type: [
           "burger",
           "onehand"
       ],
       name: "プラントベースバーガー",
       image: "image/DS-food/DS.R38.6.jpg",
       price: 1490,
       restaurantId: "DSR38"
   },
   {
        type: [
           "drink"
       ],
       name: "ラプンツェルのマジカルミルクティー",
       image: "image/DS-food/DS.R38.7.jpg",
       price: 800,
       restaurantId: "DSR38"
   },
   {
        type: [
           "meat"
       ],
       name: "ロストキッズスナックボックス（バターカレーチキン）",
       image: "image/DS-food/DS.R39.1.jpg",
       price: 900,
       restaurantId: "DSR39"
   },
   {
        type: [
           "meat"
       ],
       name: "ロストキッズスナックボックス（レモンティーチキン）",
       image: "image/DS-food/DS.R39.2.jpg",
       price: 900,
       restaurantId: "DSR39"
   },
   {
        type: [
           "sweat"
       ],
       name: "ルックアウトブラウニー",
       image: "image/DS-food/DS.R39.3.jpg",
       price: 600,
       restaurantId: "DSR39"
   },
   {
        type: [
           "frozen",
           "drink"
       ],
       name: "ピクシーダストソーダ（キウイ）",
       image: "image/DS-food/DS.R39.4.jpg",
       price: 750,
       restaurantId: "DSR39"
   }
]
