const restaurants = [
    {
        restaurantId: "DSR1",
        restaurantName: "カフェ・ポルトフィーノ",
        restaurantImage: "DSR1",
        icons: [
            "champagne-glass",
            "ham"
        ],
        hours: "10:00-20:30",
        locationImage: "DSR1_location"
    },
    {
        restaurantId: "DSR2",
        restaurantName: "ゴンドリエ・スナック",
        restaurantImage: "DSR2",
        icons: [
            "champagne-glass",
            "ice-cream-cup", "spaghetti"
        ],
        hours: "12:00-16:00",
        locationImage: "DSR2_location"
    },
    {
        restaurantId: "DSR3",
        restaurantName: "ザンビーニ･ブラザーズ･リストランテ",
        restaurantImage: "DSR3",
        icons: [
            "cold-drink",
            "frozen", "spaghetti"
        ],
        hours: "9:00-21:00",
        locationImage: "DSR3_location"
    },
    {
        restaurantId: "DSR4",
        restaurantName: "マゼランズ",
        restaurantImage: "DSR4",
        icons: [
            "cold-drink",
            "ham"
        ],
        hours: "11:00-19:30",
        locationImage: "DSR4_location"
    },
    {
        restaurantId: "DSR5",
        restaurantName: "マンマ・ビスコッティーズ・ベーカリー",
        restaurantImage: "DSR5",
        icons: [
            "cold-drink",
            "frozen"
        ],
        hours: "9:00-21:00",
        locationImage: "DSR5_location"
    },
    {
        restaurantId: "DSR6",
        restaurantName: "リストランテ・ディ・カナレット",
        restaurantImage: "DSR6",
        icons: [
            "champagne-glass",
            "cold-drink", "spaghetti"
        ],
        hours: "11:00-19:30",
        locationImage: "DSR6_location"
    },
    {
        restaurantId: "DSR7",
        restaurantName: "リフレスコス",
        restaurantImage: "DSR7",
        icons: [
            "champagne-glass",
            "coffee-cup"
        ],
        hours: "10:00-19:30",
        locationImage: "DSR7_location"
    },
    {
        restaurantId: "DSR8",
        restaurantName: "S.S.コロンビア・ダイニングルーム\n",
        restaurantImage: "DSR8",
        icons: [
            "champagne-glass",
            "ham"
        ],
        hours: "11:00-19:30",
        locationImage: "DSR8_location"
    },
    {
        restaurantId: "DSR9",
        restaurantName: "ケープコッド・クックオフ",
        restaurantImage: "DSR9",
        icons: [
            "cold-drink",
            "ice-cream-cup"
        ],
        hours: "9:00-19:30",
        locationImage: "DSR9_location"
    },
    {
        restaurantId: "DSR10",
        restaurantName: "ドックサイドダイナー",
        restaurantImage: "DSR10",
        icons: [
            "champagne-glass",
            "cold-drink"
        ],
        hours: "9:30-20:30",
        locationImage: "DSR10_location"
    },
    {
        restaurantId: "DSR11",
        restaurantName: "テディ・ルーズヴェルト・ラウンジ",
        restaurantImage: "DSR11",
        icons: [
            "champagne-glass",
            "cold-drink"
        ],
        hours: "11:00-18:30",
        locationImage: "DSR11_location"
    },
    {
        restaurantId: "DSR12",
        restaurantName: "テディ・ルーズヴェルト・ラウンジ テラス",
        restaurantImage: "DSR12",
        icons: [
            "champagne-glass"
        ],
        hours: "11:30-19:00",
        locationImage: "DSR12_location"
    },
    {
        restaurantId: "DSR13",
        restaurantName: "デランシー・ケータリング\n",
        restaurantImage: "DSR13",
        icons: [
            "kebab"
        ],
        hours: "10:00-18:00",
        locationImage: "DSR13_location"
    },
    {
        restaurantId: "DSR14",
        restaurantName: "ニューヨーク・デリ",
        restaurantImage: "DSR14",
        icons: [
            "champagne-glass",
            "cold-drink"
        ],
        hours: "9:00-19:30",
        locationImage: "DSR14_location"
    },
    {
        restaurantId: "DSR15",
        restaurantName: "バーナクル・ビルズ\n",
        restaurantImage: "DSR15",
        icons: [
            "champagne-glass",
            "ham"
        ],
        hours: "9:00-20:00",
        locationImage: "DSR15_location"
    },
    {
        restaurantId: "DSR16",
        restaurantName: "ハイタイド・トリート\n",
        restaurantImage: "DSR16",
        icons: [
            "ice-cream-cup"
        ],
        hours: "9:30-19:15",
        locationImage: "DSR16_location"
    },
    {
        restaurantId: "DSR17",
        restaurantName: "ハドソンリバー・ハーベスト\n",
        restaurantImage: "DSR17",
        icons: [
            "champagne-glass",
            "cold-drink"
        ],
        hours: "9:00-19:00",
        locationImage: "DSR17_location"
    },
    {
        restaurantId: "DSR18",
        restaurantName: "リバティ・ランディング・ダイナー\n",
        restaurantImage: "DSR18",
        icons: [
            "ice-cream-cup"
        ],
        hours: "10:00-19:00",
        locationImage: "DSR18_location"
    },
    {
        restaurantId: "DSR19",
        restaurantName: "レストラン櫻",
        restaurantImage: "DSR19",
        icons: [
            "champagne-glass",
            "coffee-cup"
        ],
        hours: "11:00-20:00",
        locationImage: "DSR19_location"
    },
    {
        restaurantId: "DSR20",
        restaurantName: "レストラン櫻 テラス席\n",
        restaurantImage: "DSR20",
        icons: [
            "champagne-glass",
            "ham"
        ],
        hours: "11:00-20:00",
        locationImage: "DSR20_location"
    },
    {
        restaurantId: "DSR21",
        restaurantName: "シーサイドスナック\n",
        restaurantImage: "DSR21",
        icons: [
            "kebab"
        ],
        hours: "9:30-18:45",
        locationImage: "DSR21_location"
    },
    {
        restaurantId: "DSR22",
        restaurantName: "ベイサイド・テイクアウト\n",
        restaurantImage: "DSR22",
        icons: [
            "cold-drink",
            "ham", "kebab"
        ],
        hours: "9:45-18:00",
        locationImage: "DSR22_location"
    },
    {
        restaurantId: "DSR23",
        restaurantName: "ホライズンベイ・レストラン",
        restaurantImage: "DSR23",
        icons: [
            "coffee-cup",
            "cold-drink"
        ],
        hours: "10:30-20:00",
        locationImage: "DSR23_location"
    },
    {
        restaurantId: "DSR24",
        restaurantName: "エクスペディション・イート\n",
        restaurantImage: "DSR24",
        icons: [
            "kebab"
        ],
        hours: "9:15-19:00",
        locationImage: "DSR24_location"
    },
    {
        restaurantId: "DSR25",
        restaurantName: "トロピック・アルズ\n",
        restaurantImage: "DSR25",
        icons: [
            "ice-cream-cup",
            "kebab"
        ],
        hours: "10:00-18:30",
        locationImage: "DSR25_location"
    },
    {
        restaurantId: "DSR26",
        restaurantName: "ミゲルズ・エルドラド・キャンティーナ",
        restaurantImage: "DSR26",
        icons: [
            "ham",
            "ice-cream-cup"
        ],
        hours: "11:00-18:00",
        locationImage: "DSR26_location"
    },
    {
        restaurantId: "DSR27",
        restaurantName: "ユカタン・ベースキャンプ・グリル",
        restaurantImage: "DSR27",
        icons: [
            "champagne-glass",
            "cold-drink"
        ],
        hours: "10:30-19:00",
        locationImage: "DSR27_location"
    },
    {
        restaurantId: "DSR28",
        restaurantName: "ロストリバークックハウス\n",
        restaurantImage: "DSR28",
        icons: [
            "cold-drink",
            "ham","kebab"
        ],
        hours: "9:00-20:00",
        locationImage: "DSR28_location"
    },
    {
        restaurantId: "DSR29",
        restaurantName: "オープンセサミ\n",
        restaurantImage: "DSR29",
        icons: [
            "ice-cream-cup",
            "kebab"
        ],
        hours: "9:30-18:00",
        locationImage: "DSR29_location"
    },
    {
        restaurantId: "DSR30",
        restaurantName: "カスバ・フードコート",
        restaurantImage: "DSR30",
        icons: [
            "cold-drink",
            "ice-cream-cup"
        ],
        hours: "10:00-19:30",
        locationImage: "DSR30_location"
    },
    {
        restaurantId: "DSR31",
        restaurantName: "サルタンズ・オアシス",
        restaurantImage: "DSR31",
        icons: [
            "frozen",
            "ice-cream-cup"
        ],
        hours: "9:30-19:00",
        locationImage: "DSR31_location"
    },
    {
        restaurantId: "DSR32",
        restaurantName: "セバスチャンのカリプソキッチン",
        restaurantImage: "DSR32",
        icons: [
            "ham",
            "ice-cream-cup"
        ],
        hours: "10:00-19:30",
        locationImage: "DSR32_location"
    },
    {
        restaurantId: "DSR33",
        restaurantName: "ヴォルケイニア・レストラン",
        restaurantImage: "DSR33",
        icons: [
            "ice-cream-cup",
            "noodles"
        ],
        hours: "10:00-19:30",
        locationImage: "DSR33_location"
    },
    {
        restaurantId: "DSR34",
        restaurantName: "ノーチラスギャレー\n",
        restaurantImage: "DSR34",
        icons: [
            "champagne-glass",
            "ham", "kebab", "noodles"
        ],
        hours: "9:30-19:00",
        locationImage: "DSR34_location"
    },
    {
        restaurantId: "DSR35",
        restaurantName: "リフレッシュメント・ステーション\n",
        restaurantImage: "DSR35",
        icons: [
            "ice-cream-cup",
            "kebab"
        ],
        hours: "9:30-18:30",
        locationImage: "DSR35_location"
    },
    {
        restaurantId: "DSR36",
        restaurantName: "アレンデール・ロイヤルバンケット\n",
        restaurantImage: "DSR36",
        icons: [
            "ham",
            "dinner-table"
        ],
        hours: NaN,
        locationImage: "DSR36_location"
    },
    {
        restaurantId: "DSR37",
        restaurantName: "オーケンのオーケーフード\n",
        restaurantImage: "DSR37",
        icons: [
            "croissant",
            "kebab"
        ],
        hours: NaN,
        locationImage: "DSR37_location"
    },
    {
        restaurantId: "DSR38",
        restaurantName: "スナグリーダックリング\n",
        restaurantImage: "DSR38",
        icons: [
            "cold-drink",
            "ham", "hamburger","ice-cream-cup","kebab"
        ],
        hours: NaN,
        locationImage: "DSR38_location"
    },
    {
        restaurantId: "DSR39",
        restaurantName: "ルックアウト・クックアウト\n",
        restaurantImage: "DSR39",
        icons: [
            "cold-drink",
            "ice-cream-cup", "frozen","ham","kebab"
        ],
        hours: NaN,
        locationImage: "DSR39_location"
    }
]