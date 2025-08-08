'use client';

import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      icon: "ri-hammer-line",
      title: "部分リフォーム",
      description: "必要な箇所だけピンポイントで対応。全体工事は不要で、コストを大幅削減できます。",
      details: [
        "クロス・床材の張替え",
        "キッチン・洗面台の交換",
        "ドア・建具の修理・交換",
        "照明器具の取り付け"
      ],
      price: "5万円〜"
    },
    {
      icon: "ri-drop-line", 
      title: "水回り修繕",
      description: "水漏れや詰まりなど、緊急性の高い水回りトラブルに迅速対応します。",
      details: [
        "水漏れ修理",
        "排水管清掃・修理",
        "蛇口・トイレの交換",
        "給湯器メンテナンス"
      ],
      price: "3万円〜"
    },
    {
      icon: "ri-paint-brush-line",
      title: "内装工事",
      description: "入居者の印象を左右する内装を、投資効果を考慮してリニューアルします。",
      details: [
        "壁紙・クロス張替え",
        "フローリング工事",
        "畳からフローリングへの変更",
        "間仕切り工事"
      ],
      price: "10万円〜"
    },
    {
      icon: "ri-home-line",
      title: "外装メンテナンス",
      description: "建物の資産価値を維持するための外装工事を適切な時期に実施します。",
      details: [
        "外壁塗装・補修",
        "屋根修理・防水工事",
        "雨樋清掃・修理",
        "エクステリア整備"
      ],
      price: "20万円〜"
    }
  ];

  const features = [
    {
      icon: "ri-money-dollar-circle-line",
      title: "柔軟な予算対応",
      description: "ご予算に応じて作業範囲を調整し、最適なプランをご提案します"
    },
    {
      icon: "ri-time-line",
      title: "時短サポート", 
      description: "お忙しい投資家の方の時間を最大限配慮したスケジュール調整"
    },
    {
      icon: "ri-shield-check-line",
      title: "アフターサポート",
      description: "施工後も安心の保証制度とメンテナンスサポート"
    },
    {
      icon: "ri-customer-service-2-line",
      title: "投資家目線",
      description: "収益性を重視した提案で、長期的な資産価値向上をサポート"
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
              <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer">サービス</Link>
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
      <section 
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Professional%20renovation%20services%20showcase%20with%20various%20construction%20tools%2C%20paint%20brushes%2C%20tiles%2C%20and%20building%20materials%20arranged%20aesthetically%2C%20modern%20workshop%20environment%2C%20bright%20professional%20lighting%2C%20clean%20organized%20workspace&width=1920&height=800&seq=services-hero-001&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-5xl font-bold mb-6">サービス詳細</h2>
            <p className="text-xl mb-8 opacity-90">
              不動産投資家の皆様のニーズに特化した<br />
              柔軟で効率的なリフォームサービス
            </p>
          </div>
        </div>
      </section>

      {/* サービス一覧 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">提供サービス</h3>
            <p className="text-xl text-gray-600">投資家の収益性を重視した専門サービス</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mr-4">
                      <i className={`${service.icon} text-blue-600 text-2xl`}></i>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h4>
                      <p className="text-blue-600 font-semibold">{service.price}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">主な対応内容</h5>
                    <ul className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-gray-600">
                          <i className="ri-check-line text-green-500 mr-2"></i>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-all cursor-pointer whitespace-nowrap">
                    詳細を相談する
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 特徴・メリット */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">選ばれる理由</h3>
            <p className="text-xl text-gray-600">投資家専門だからこそのメリット</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${feature.icon} text-blue-600 text-3xl`}></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金体系 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">料金体系</h3>
            <p className="text-xl text-gray-600">透明性の高い明確な料金設定</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-search-line text-blue-600 text-2xl"></i>
                    </div>
                    <h5 className="font-bold text-gray-900 mb-2">現地調査</h5>
                    <p className="text-2xl font-bold text-blue-600 mb-2">無料</p>
                    <p className="text-sm text-gray-600">詳細な現地確認と見積もり</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-chat-3-line text-green-600 text-2xl"></i>
                    </div>
                    <h5 className="font-bold text-gray-900 mb-2">相談・提案</h5>
                    <p className="text-2xl font-bold text-green-600 mb-2">無料</p>
                    <p className="text-sm text-gray-600">最適なプランのご提案</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-tools-line text-purple-600 text-2xl"></i>
                    </div>
                    <h5 className="font-bold text-gray-900 mb-2">施工費用</h5>
                    <p className="text-2xl font-bold text-purple-600 mb-2">実費のみ</p>
                    <p className="text-sm text-gray-600">材料費＋作業費の明瞭会計</p>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-6 text-center">
                  <h5 className="font-bold text-gray-900 mb-2">追加費用は一切なし</h5>
                  <p className="text-gray-600">事前見積もり以外の費用は発生しません。安心してご依頼ください。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h3 className="text-4xl font-bold mb-6">
              まずは無料相談から
            </h3>
            <p className="text-xl mb-8 opacity-90">
              あなたの物件に最適なリフォームプランを提案いたします
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-400 transition-all cursor-pointer whitespace-nowrap">
                <i className="ri-phone-line mr-2"></i>
                電話で相談
              </button>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-blue-600 transition-all cursor-pointer whitespace-nowrap">
                <i className="ri-mail-line mr-2"></i>
                メールで相談
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <i className="ri-home-repair-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold">リフォームパートナー</h4>
                  <p className="text-sm text-gray-400">不動産投資家のDIY代行サービス</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                不動産投資家の皆様のDIYの悩みを解決し、時間とコストを節約するパートナーとして。
              </p>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-4">サービス</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">部分リフォーム</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">水回り修繕</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">内装工事</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">外装メンテナンス</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-4">会社情報</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors cursor-pointer">会社概要</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">施工エリア</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">よくあるご質問</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">プライバシーポリシー</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-4">お問い合わせ</h5>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <i className="ri-phone-line"></i>
                  <span>0297-84-6201</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="ri-mail-line"></i>
                  <span>info@kaitekilife2.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="ri-time-line"></i>
                  <span>平日 9:00-18:00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              2025 リフォームパートナー. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
