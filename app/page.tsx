'use client';

import Link from 'next/link';

export default function HomePage() {
  const problems = [
    {
      icon: "ri-time-line",
      title: "時間がない",
      description: "本業が忙しくてDIYする時間が取れない"
    },
    {
      icon: "ri-tools-line",
      title: "技術不足",
      description: "やってみたけど思ったより難しい、仕上がりが不安"
    },
    {
      icon: "ri-money-dollar-circle-line",
      title: "コスト問題",
      description: "道具を揃えると意外と高額になってしまう"
    },
    {
      icon: "ri-team-line",
      title: "人手不足",
      description: "一人では限界、でも業者は高すぎる"
    }
  ];

  const services = [
    {
      icon: "ri-settings-3-line",
      title: "部分的な依頼OK",
      description: "全部じゃなくて困った部分だけお任せできます",
      details: ["クロス張替えのみ", "水回りトラブルのみ", "建具調整のみ"]
    },
    {
      icon: "ri-price-tag-3-line",
      title: "柔軟な料金体系",
      description: "予算に合わせて作業範囲を調整いたします",
      details: ["予算優先プラン", "必要最小限の対応", "段階的な実施"]
    },
    {
      icon: "ri-customer-service-2-line",
      title: "投資家目線",
      description: "不動産投資の収益性を理解した提案をします",
      details: ["ROI重視の提案", "入居率向上策", "長期的な資産価値"]
    }
  ];

  const flow = [
    {
      step: "01",
      title: "無料相談",
      description: "お電話やメールで現状をお聞きします"
    },
    {
      step: "02",
      title: "現地確認",
      description: "実際に物件を確認して見積もり作成"
    },
    {
      step: "03",
      title: "作業実施",
      description: "ご予算に応じて必要な作業を実施"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 上部コンタクトバー */}
      <div className="bg-blue-600 text-white py-2 px-6">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <i className="ri-phone-line"></i>
              <span className="font-medium">0297-84-6201</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-time-line"></i>
              <span>平日 9:00-18:00</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <i className="ri-mail-line"></i>
            <span>info@kaitekilife2.com</span>
          </div>
        </div>
      </div>

      {/* ヘッダー */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <i className="ri-home-repair-line text-white text-xl"></i>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">リフォームパートナー</h1>
                <p className="text-sm text-gray-600">不動産投資家のDIY代行サービス</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer">サービス</Link>
              <Link href="/flow" className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer">ご利用の流れ</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer">会社について</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer">お問い合わせ</Link>
            </nav>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all cursor-pointer whitespace-nowrap">
              無料相談
            </button>
          </div>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Professional team of Japanese craftsmen and renovation specialists working on interior renovation project in Japanese residential setting, authentic Japanese workers wearing modern safety equipment and work clothes, using professional construction tools, working in clean organized Japanese home environment with traditional wooden elements, natural lighting, focused Japanese professionals demonstrating skilled craftsmanship and attention to detail in contemporary Japanese residential renovation&width=1920&height=1080&seq=hero-jp-workers-002&orientation=landscape')"
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-5"></div>
        <div className="container mx-auto px-6 py-20 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="text-white">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                DIYに疲れた<br />
                <span className="text-yellow-400">投資家</span>のための<br />
                リフォーム代行
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed drop-shadow-md">
                「もうDIYはしたくない」「時間がない」「部分的だけお任せしたい」<br />
                そんな不動産投資家の声にお応えします
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/contact" className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-400 transition-all cursor-pointer whitespace-nowrap drop-shadow-md text-center">
                  <i className="ri-phone-line mr-2"></i>
                  無料相談を予約
                </Link>
                <Link href="/services" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-gray-900 transition-all cursor-pointer whitespace-nowrap drop-shadow-md text-center">
                  <i className="ri-play-circle-line mr-2"></i>
                  サービス詳細
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 問題セクション */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">こんなお悩みありませんか？</h3>
            <p className="text-xl text-gray-600">不動産投資家が直面するDIYの現実</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={problem.icon + " text-red-600 text-2xl"}></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* サービスセクション */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">私たちのソリューション</h3>
            <p className="text-xl text-gray-600">投資家専門だからできること</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mb-6">
                  <i className={service.icon + " text-white text-2xl"}></i>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-700">
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* フローセクション */}
      <section id="flow" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">ご利用の流れ</h3>
            <p className="text-xl text-gray-600">簡単3ステップで問題解決</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {flow.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  {index < flow.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/flow" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all cursor-pointer whitespace-nowrap">
              詳しい流れを見る
            </Link>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-4">まずは無料相談から</h3>
          <p className="text-xl mb-8">お気軽にお問い合わせください</p>
          <Link href="/contact" className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-400 transition-all cursor-pointer whitespace-nowrap">
            無料相談を申し込む
          </Link>
        </div>
      </section>
    </div>
  );
}
