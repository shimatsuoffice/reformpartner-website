'use client';

import Link from 'next/link';

export default function FlowPage() {
    const workFlow = [
        {
            step: 1,
            title: "お問い合わせ",
            description: "まずはフォームまたはお電話にて、お気軽にお問い合わせください。ご相談内容をヒアリングいたします。",
            icon: "ri-chat-3-line",
        },
        {
            step: 2,
            title: "現地調査・ご提案",
            description: "物件の状況を現地調査し、ご予算やご要望に合わせた最適なプランと詳細なお見積もりをご提案します。",
            icon: "ri-search-line",
        },
        {
            step: 3,
            title: "ご契約・施工",
            description: "プランとお見積もりにご納得いただけたらご契約。経験豊富なスタッフが迅速かつ丁寧な施工を実施します。",
            icon: "ri-tools-line",
        },
        {
            step: 4,
            title: "完了・お引き渡し",
            description: "施工完了後、お客様に最終確認いただき、問題がなければお引き渡しとなります。アフターサポートも充実しています。",
            icon: "ri-check-line",
        },
    ];

    const benefits = [
        {
            icon: "ri-time-line",
            title: "迅速な対応",
            description: "お問い合わせから施工まで、スピーディな対応を心がけています。"
        },
        {
            icon: "ri-shield-check-line",
            title: "高品質な施工",
            description: "経験豊富な職人が、確かな技術で丁寧に施工します。"
        },
        {
            icon: "ri-money-dollar-circle-line",
            title: "明瞭な料金",
            description: "追加費用は一切なし。事前見積もり通りの料金です。"
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
                            <Link href="/flow" className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer">ご利用の流れ</Link>
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
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=a%20visual%20representation%20of%20a%20step-by-step%20process%20with%20icons%20and%20arrows%20on%20a%20clean%20background%2C%20professional%20and%20inviting%20vibe&width=1920&height=800&seq=flow-hero-001&orientation=landscape')`
                }}
            >
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto text-white">
                        <h2 className="text-5xl font-bold mb-6">ご利用の流れ</h2>
                        <p className="text-xl mb-8 opacity-90">
                            お問い合わせから完了まで、迅速かつ丁寧に対応いたします
                        </p>
                    </div>
                </div>
            </section>

            {/* ワークフロー */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h3 className="text-4xl font-bold text-gray-900 mb-4">リフォームの流れ</h3>
                        <p className="text-xl text-gray-600">安心してお任せいただけるステップ</p>
                    </div>
                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {workFlow.map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center relative">
                                <div className="absolute top-0 left-0 -mt-6 ml-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                                    {item.step}
                                </div>
                                <div className="mt-8">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <i className={`${item.icon} text-blue-600 text-3xl`}></i>
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
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
                                <li><Link href="/services" className="hover:text-white transition-colors cursor-pointer">部分リフォーム</Link></li>
                                <li><Link href="/services" className="hover:text-white transition-colors cursor-pointer">水回り修繕</Link></li>
                                <li><Link href="/services" className="hover:text-white transition-colors cursor-pointer">内装工事</Link></li>
                                <li><Link href="/services" className="hover:text-white transition-colors cursor-pointer">外装メンテナンス</Link></li>
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
