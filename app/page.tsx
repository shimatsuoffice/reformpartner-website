'use client';

import { useState } from 'react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const reasons = [
    {
      icon: "ri-user-star-line",
      title: "投資家専門のリフォームサービス",
      description: ""
    },
    {
      icon: "ri-price-tag-line",
      title: "柔軟な予算対応と部分的な施工",
      description: ""
    },
    {
      icon: "ri-shield-check-line",
      title: "透明性のある料金体系",
      description: ""
    },
    {
      icon: "ri-map-pin-line",
      title: "茨城県龍ヶ崎市を中心とした関東エリア対応",
      description: ""
    },
    {
      icon: "ri-user-line",
      title: "代表取締役 北村文明による直接対応",
      description: ""
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* RemixIcon CDN */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.min.css"
        rel="stylesheet"
      />
      
      {/* 上部コンタクトバー */}
      <div className="bg-blue-600 text-white py-2 px-6">
        <div className="flex items-center justify-between text-sm max-w-7xl mx-auto">
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
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <i className="ri-home-repair-line text-white text-xl"></i>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">リフォームパートナー</h1>
                <p className="text-sm text-gray-600">不動産投資家のDIY代行サービス</p>
              </div>
            </div>
            
            {/* デスクトップナビ */}
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer">サービス</a>
              <a href="#flow" className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer">ご利用の流れ</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer">会社について</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer">お問い合わせ</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all cursor-pointer whitespace-nowrap">
                無料相談
              </button>
              
              {/* モバイルメニューボタン */}
              <button 
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
              </button>
            </div>
          </div>
          
          {/* モバイルメニュー */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-3">
                <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">サービス</a>
                <a href="#flow" className="text-gray-700 hover:text-blue-600 font-medium">ご利用の流れ</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">会社について</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">お問い合わせ</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="relative min-h-screen flex items-center bg-gray-800">
        <img 
          src="https://readdy.ai/api/search-image?query=Professional%20team%20of%20Japanese%20craftsmen%20and%20renovation%20specialists%20working%20on%20interior%20renovation%20project%20in%20Japanese%20residential%20setting,%20authentic%20Japanese%20workers%20wearing%20modern%20safety%20equipment%20and%20work%20clothes,%20using%20professional%20construction%20tools,%20working%20in%20clean%20organized%20Japanese%20home%20environment%20with%20traditional%20wooden%20elements,%20natural%20lighting,%20focused%20Japanese%20professionals%20demonstrating%20skilled%20craftsmanship%20and%20attention%20to%20detail%20in%20contemporary%20Japanese%20residential%20renovation&width=1920&height=1080&seq=hero-jp-workers-002&orientation=landscape"
          alt="職人の作業風景"
          className="absolute inset-0 w-full h-full object-cover"
          onLoad={() => console.log('ヒーロー画像: 読み込み成功')}
          onError={() => console.log('ヒーロー画像: 読み込み失敗')}
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        
        <div className="container mx-auto px-6 py-20 relative z-10 w-full max-w-7xl">
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
                <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-400 transition-all cursor-pointer whitespace-nowrap drop-shadow-md text-center">
                  <i className="ri-phone-line mr-2"></i>
                  無料相談を予約
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-gray-900 transition-all cursor-pointer whitespace-nowrap drop-shadow-md text-center">
                  <i className="ri-play-circle-line mr-2"></i>
                  サービス詳細
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 問題セクション */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">こんなお悩みありませんか？</h3>
            <p className="text-xl text-gray-600">不動産投資家が直面するDIYの現実</p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${problem.icon} text-red-600 text-2xl`}></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{problem.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* サービスセクション */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* デバッグ用画像テスト - 削除 */}
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">私たちのソリューション</h3>
            <p className="text-xl text-gray-600">投資家専門だからできること</p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-white text-2xl`}></i>
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
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">ご利用の流れ</h3>
            <p className="text-xl text-gray-600">簡単3ステップで問題解決</p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {flow.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  {index < flow.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-300 transform -translate-y-1/2 ml-10"></div>
                  )}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all cursor-pointer whitespace-nowrap">
              詳しい流れを見る
            </button>
          </div>
        </div>
      </section>

      {/* なぜ選ばれるのかセクション */}
      <section 
        id="about" 
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">なぜ選ばれるのか</h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Union株式会社リフォームパートナーは、不動産投資家の皆様が直面するDIYの悩みを解決するために設立されました。投資家目線でのリフォームサービスを提供し、時間とコストの両方を節約いたします。
              </p>
              <div className="grid grid-cols-1 gap-6">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className={`${reason.icon} text-blue-600 text-sm`}></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-all cursor-pointer">
                  会社について詳しく
                </button>
              </div>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20Japanese%20craftsmen%20team%20working%20on%20traditional%20Japanese%20house%20renovation,%20authentic%20Japanese%20workers%20wearing%20modern%20work%20clothes%20and%20safety%20equipment,%20using%20traditional%20Japanese%20carpentry%20tools%20like%20nokogiri%20saw%20and%20kanna%20plane,%20working%20in%20tatami%20mat%20room%20with%20shoji%20screens%20and%20wooden%20beams,%20natural%20lighting%20through%20traditional%20Japanese%20windows,%20skilled%20Japanese%20artisans%20demonstrating%20traditional%20woodworking%20techniques%20in%20authentic%20Japanese%20residential%20interior%20with%20wooden%20floors%20and%20paper%20screens&width=600&height=400&seq=japanese-craftsmen-traditional-003&orientation=landscape" 
                alt="なぜ選ばれるのか" 
                className="rounded-xl shadow-lg w-full h-auto"
                onLoad={() => console.log('なぜ選ばれるのか画像: 読み込み成功')}
                onError={() => console.log('なぜ選ばれるのか画像: 読み込み失敗')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 最終CTAセクション */}
      <section 
        className="py-20 relative"
        style={{
          background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)'
        }}
      >
        <div className="container mx-auto px-6 text-center max-w-7xl">
          <h3 className="text-4xl font-bold text-white mb-4">もうDIYで悩む必要はありません</h3>
          <p className="text-xl text-white mb-8">無料相談で、あなたの物件に最適なソリューションをご提案いたします</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-400 transition-all cursor-pointer">
              今すぐ無料相談
            </button>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-all cursor-pointer">
              メールで相談
            </button>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">お問い合わせ</h3>
            <p className="text-xl text-gray-600">まずはお気軽にご相談ください</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">お電話でのお問い合わせ</h4>
              <div className="flex items-center space-x-3 mb-4">
                <i className="ri-phone-line text-blue-600 text-2xl"></i>
                <span className="text-3xl font-bold text-blue-600">0297-84-6201</span>
              </div>
              <p className="text-gray-600">平日 9:00-18:00 土曜 9:00-17:00</p>
            </div>
            <div className="bg-green-50 rounded-xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">メールでのお問い合わせ</h4>
              <div className="flex items-center space-x-3 mb-4">
                <i className="ri-mail-line text-green-600 text-2xl"></i>
                <span className="text-xl font-bold text-green-600">info@kaitekilife2.com</span>
              </div>
              <p className="text-gray-600">24時間受付（返信は営業時間内）</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all cursor-pointer">
              詳しいお問い合わせフォーム
            </button>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <i className="ri-home-repair-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold">リフォームパートナー</h4>
                  <p className="text-sm text-gray-400">投資家専門リフォーム</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                不動産投資家の皆様のDIYの悩みを解決し、時間とコストを節約するパートナーとして。
              </p>
              <div className="text-gray-400 text-sm space-y-1">
                <p>Union株式会社</p>
                <p>代表取締役 北村文明</p>
                <p>茨城県龍ヶ崎市若柴町2240-22</p>
              </div>
            </div>
            <div>
              <h5 className="text-lg font-bold mb-4">サービス</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer">部分リフォーム</li>
                <li className="hover:text-white cursor-pointer">水回り修繕</li>
                <li className="hover:text-white cursor-pointer">内装工事</li>
                <li className="hover:text-white cursor-pointer">外装メンテナンス</li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-bold mb-4">会社情報</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer">会社概要</li>
                <li className="hover:text-white cursor-pointer">ご利用の流れ</li>
                <li className="hover:text-white cursor-pointer">対応エリア：関東一円</li>
                <li className="hover:text-white cursor-pointer">設立：2021年5月</li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-bold mb-4">お問い合わせ</h5>
              <div className="space-y-2 text-gray-400">
                <p className="hover:text-white cursor-pointer">0297-84-6201</p>
                <p className="hover:text-white cursor-pointer">info@kaitekilife2.com</p>
                <p>平日 9:00-18:00 土曜 9:00-17:00</p>
                <p>茨城県龍ヶ崎市</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Union株式会社 リフォームパートナー. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
