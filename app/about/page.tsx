import Link from 'next/link';

export default function AboutPage() {
    return (
        <div>
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
                            <Link href="/about" className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer">会社について</Link>
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
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=professional%20construction%20company%20office%20with%20architectural%20plans%20and%20design%20drawings%2C%20modern%20interior%2C%20warm%20lighting%2C%20bright%20professional%20lighting%2C%20clean%20organized%20workspace&width=1920&height=800&seq=about-hero-001&orientation=landscape')`
                }}
            >
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto text-white">
                        <h2 className="text-5xl font-bold mb-6">会社について</h2>
                        <p className="text-xl mb-8 opacity-90">
                            投資家目線のリフォームパートナーとして<br />
                            あなたの資産価値向上をサポート
                        </p>
                    </div>
                </div>
            </section>

            {/* 会社情報 */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h3 className="text-4xl font-bold text-gray-900 mb-4">会社概要</h3>
                        <p className="text-xl text-gray-600">私たちは不動産投資家専門のリフォーム会社です</p>
                    </div>
                    <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg">
                        <div className="grid md:grid-cols-2 gap-10 text-gray-700">
                            <div className="space-y-4">
                                <h4 className="text-2xl font-bold text-gray-900 mb-2">事業内容</h4>
                                <p>不動産投資家様向けのDIY代行およびリフォームサービスを提供しております。物件の収益性を最大化するための内装・外装工事、水回り修繕などを専門に行っております。</p>
                                <h4 className="text-2xl font-bold text-gray-900 mb-2 mt-6">経営理念</h4>
                                <p>「投資家目線のリフォーム」を掲げ、単なる修繕ではなく、物件の資産価値と収益性を向上させる提案を最優先に考えています。お客様の長期的な成功を共に築くパートナーを目指します。</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-2xl font-bold text-gray-900 mb-2">会社情報</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <i className="ri-building-line text-blue-600"></i>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">社名</p>
                                            <p>株式会社リフォームパートナー</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <i className="ri-map-pin-line text-blue-600"></i>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">所在地</p>
                                            <p>茨城県つくば市〇〇</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <i className="ri-phone-line text-blue-600"></i>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">電話番号</p>
                                            <p>0297-84-6201</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <i className="ri-mail-line text-blue-600"></i>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">メールアドレス</p>
                                            <p>info@kaitekilife2.com</p>
                                        </div>
                                    </li>
                                </ul>
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
                                    <p className="text-sm text-gray-400">投資家専門リフォーム</p>
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
