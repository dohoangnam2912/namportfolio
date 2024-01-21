import { StaticImageData } from "next/image";
import band1 from "../../public/portfolios/band1.png"
import band2 from "../../public/portfolios/band2.png"
import band3 from "../../public/portfolios/band3.png"
import band4 from "../../public/portfolios/band4.png"
import gon1 from "../../public/portfolios/gon1.png"
import gon2 from "../../public/portfolios/gon2.png"
import gon3 from "../../public/portfolios/gon3.png"
import gon4 from "../../public/portfolios/gon4.png"
import money1 from "../../public/portfolios/money1.png"
import money2 from "../../public/portfolios/money2.png"
import money3 from "../../public/portfolios/money3.png"
import money4 from "../../public/portfolios/money4.png"
import snake1 from "../../public/portfolios/snake1.png"
import snake2 from "../../public/portfolios/snake2.png"
import snake3 from "../../public/portfolios/snake3.png"
import snake4 from "../../public/portfolios/snake4.png"
import stream1 from "../../public/portfolios/stream1.png"
import stream2 from "../../public/portfolios/stream2.png"
import stream3 from "../../public/portfolios/stream3.png"
import stream4 from "../../public/portfolios/stream4.png"
import port1 from "../../public/portfolios/port1.png"
import port2 from "../../public/portfolios/port2.png"
import port3 from "../../public/portfolios/port3.png"
import port4 from "../../public/portfolios/port4.png"






export interface Portfolio {
    id?: number;
    name: string;
    categories: string[];
    image: StaticImageData;
    url?: string;
    features?: string[];
    problem?: string;
    solution?: string;
    links?: {
        website?: string;
        github?: string;
    };
    onClick?: () => void;

    content?: {
        title?: string;
        description?: string;
        description2?: string;
        description3?: string;
        description4?: string;
        description5?: string;
        image1?: StaticImageData;
        image2?: StaticImageData;
        image3?: StaticImageData;
        image4?: StaticImageData;
        image5?: StaticImageData;

    }
}

export const portfolios: Portfolio[] = [
    {
        id: 1,
        name: "ンドのウェブ",
        categories: ["HTML/CSS", "ウェブ"],
        image: band1,
        url: "the-band",
        features: [
          "HTMLとCSSを活かして、バンドのウェブサイトを作りました。",
          "ウェブの中で、四つのセクションを表します。",
          "１。バンドのイメージを表す。",
          "２．バンドのメンバーを紹介。",
          "３．連絡の方法。",
          "４．Footerとメディアを表す。",
        ],
        problem:
          "Reactjsなどフレームワークを使わずに、HTMLとCSSのプログラムだけを活かして、ウェブサイトのフロントエンドを作りました。ウェブサイトは1ページがあります。バンドのウェブのため作られました。",
        solution:
          "これは最初のプロジェクトなんですから、簡単なウェブをできました。2週間HTMLとCSSを自習して、HTMLとCSSの基礎を固めるため、プロジェクトをしました。このプロジェクトが2週間ぐらいかかりました。簡単でも、している時に、とても楽しかったです！",
        links: {
          github: "https://github.com/dohoangnam2912/how_website.git",
        },
        content: {
          title: "ンドのウェブ",
          description:
            "HTMLとCSSを活かして、バンドのウェブサイトを作りました。",
          image1: band1,
          image2: band2,
          image3: band3,
          image4: band4,
        },
      },
    
      {
        id: 2,
        name: "イーコマースのウェブ",
        categories: ["HTML/CSS", "ウェブ"],
        image: gon1,
        url: "e-commerce-website",
        features: [
          "HTMLとCSSを活かして、イーコマースのウェブサイトを作りました。",
          "ウェブの中で、四つのセクションを表します。",
          "１。ナビゲーターのセクション。その中で、ロギングのセクションと検索バーなどがあります。",
          "２。サイドバーのセクション。",
          "3．商品を表す。",
          "４．イーコマースの連絡の方法。",
        ],
        problem:
          "Reactjsなどフレームワークを使わずに、HTMLとCSSのプログラムだけを活かして、ウェブサイトのフロントエンドを作りました。ウェブサイトは1ページがあります。イーコマースのウェブのため作られました。",
        solution:
          "これは二つ目のHTMLとCSSのプロジェクトです。ベトナムで人気がるイーコマースの通り、このウェブを作りました。このプロジェクトをした後、HTMLとCSSの基礎を固めたり、ウェブのレイアウトとUI/UXを習っていました。このプロジェクトは3週間ぐらいかかりました。",
        links: {
          github: "https://github.com/Maclinz/Snippet-Master-Reboot",
        },
        content: {
          title: "イーコマースのウェブ",
          description:
            "HTMLとCSSを活かして、イーコマースのウェブサイトを作りました。",
          image1: gon1,
          image2: gon2,
          image3: gon3,
          image4: gon4,

        },
      },
      {
        id: 3,
        name: "経費追跡ツールのウェブサイト",
        categories: ["Reactjs", "Nodejs", "MongoDB", "ExpressJS"],
        image: money1,
        url: "expense-tracker",
        features: [
          "ウェブの中で、四つのセクションがあります。",
          "１．収入と支出のチャートを表す。",
          "２．取引を表す。",
          "３．データベースに収入を追加",
          "４．支出に収入を追加",
        ],
        problem:
          "このウェブは経費追跡のために作りました。Reactjsのフレームワークを使って、ウェブサイトのフロントエンドを作りました。データベースは、MongoDBとNodejsを活かしてできました。",
        solution:
          "このプロジェクトを完成するため、Javascriptのプログラム、ReactjsとNodejsのフレームワークとMongoDBの知識をならいました。このプロジェクト完成した後、バックエンドとフロントエンドの稼働を分かりました。このプロジェクトは2ヶ月かかりましたが、ウェブの知識をたくさん集まって、とてもいい体験でした。",
        links: {
          github: "https://github.com/Maclinz/Snippet-Master-Reboot",
        },
        content: {
          title: "経費追跡ツールのウェブサイト",
          description:
            "このウェブは経費追跡のために作りました。",
          image1: money1,
          image2: money2,
          image3: money3,
          image4: money4,
        },
      },
      {
        id: 4,
        name: "自己紹介ポートフォリオ",
        categories: ["NextJS", "Sass"],
        image: port1,
        url: "portfolio",
        features: [
          "自己紹介ポートフォリオのウェブサイトを作りました。",
          "このウェブサイトでは、2つの主要なセクションが表示されます：",
          "1.自己紹介",
          "2.自身のプロジェクトに関する紹介"
        ],
        problem: "セクション1では、基本的な情報や自分の目標について紹介します。セクション2では、実施したプロジェクトの内容とそれに関連する画像を明示します。",
        solution:
          "このプロジェクトを通じて、NextJSとSassを学びました。NextJSを使用することで、異なるページの名前をルーティングできることや、Sassのクリーンな構文が私をサポートしてくれることにとても満足しています。ウェブサイトはまだ色彩やレスポンシブに関して改善が必要ですが、これらの改善は将来的に行われる予定です。",
        links: {
          github: "https://github.com/Maclinz/Snippet-Master-Reboot",
        },
        content: {
          title: "自己紹介ポートフォリオ",
          description:
            "自己紹介ポートフォリオのウェブサイトを作りました。",
          image1: port1,
          image2: port2,
          image3: port3,
          image4: port4,
        },
      },
      {
        id: 5,
        name: "ヘビゲームのAIトレーニング",
        categories: ["Python", "Pytorch", "強化学習"],
        image: snake1,
        url: "snake-ai",
        features: [
          "強化学習を使って、ヘビゲームをトレーニングしました。",
          
        ],
        problem:
        "このゲームでは、ヘビがリンゴを食べるたびに得られるポイントが加算され、敗北するとポイントが減算されます。強化学習は、AIがポイントを最大化するためにヘビの動き方を学ぶのに役立ちます。",
        solution:
           "このプロジェクトを実現するために、Pytorchと強化学習を使用しました。このプロジェクトによって、人工知能の領域、ニューラルネットワークシステムの動作方法、および機械学習に関する理解を深めることができました。",
        links: {
          github: "https://github.com/Maclinz/Snippet-Master-Reboot",
        },
        content: {
          title: "ヘビゲームのAIトレーニング",
          description:
            "強化学習を使って、ヘビゲームをトレーニングしました。",
          image1: snake1,
          image2: snake2,
          image3: snake3,
          image4: snake4,
        },
      },
      {
        id: 6,
        name: "日本語勉強するためライブストリームウェブサイト",
        categories: ["Python", "Pytorch", "強化学習"],
        image: stream1,
        url: "stream-service",
        features: [
          "日本語勉強するためライブストリームウェブサイトを作りました。",
        ],
        problem:
        "このウェブサイトでは、ユーザーは自分の個人ページにライブストリームを配信し、お互いにチャットし、自分の設定をカスタマイズすることができます。",
        solution:
           "このプロジェクトを完成するため,たくさんことが勉強できました。NextJS,MySQL,TailwindCSS, APIを接続することなど利用して、フロントエンドとバックエンドの両方の機能を完全に実現できます。ウェブサイトのレスポンシブ対応も完了しています。ただし、動画の画面、ライブストリームのタイトルの設定など、まだいくつかの小さなエラーが残っていますが、これらのエラーは将来的に修正される予定です。",
        links: {
          github: "https://github.com/Maclinz/Snippet-Master-Reboot",
        },
        content: {
          title: "経費追跡ツールのウェブサイト",
          description:
            "日本語勉強するためライブストリームウェブサイトを作りました。",
          image1: stream1,
          image2: stream2,
          image3: stream3,
          image4: stream4,
        },
      },
];