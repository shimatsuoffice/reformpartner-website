'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        alert('現在、お問い合わせフォームはご利用いただけません。メールで直接お問い合わせください。');
    };

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
                            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer">会社について</Link>
                            <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer">お問い合わせ</Link>
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
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=professional%20contact%20us%20page%20with%20a%20modern%20phone%2C%20email%20icon%2C%20and%20chat%20bubble%20on%20a%20clean%20background%2C%20professional%20and%20inviting%20vibe&width=1920&height=800&seq=contact-hero-001&orientation=landscape')`
                }}
            >
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto text-white">
                        <h2 className="text-5xl font-bold mb-6">お問い合わせ</h2>
                        <p className="text-xl mb-8 opacity-90">
                            ご質問・ご相談など、お気軽にお問い合わせください<br />
                            専門スタッフが丁寧に対応いたします
                        </p>
                    </div>
                </div>
            </section>

            {/* お問い合わせフォーム */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-lg">
                        <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">ご相談フォーム</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">お名前</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">メールアドレス</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">お問い合わせ内容</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-all"
                            >
                                送信する
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto text-white">
                        <h3 className="text-4xl font-bold mb-6">
                            お電話でも受け付けております
                        </h3>
                        <p className="text-xl mb-8 opacity-90">
                            ご不明な点など、お気軽にお電話ください
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-400 transition-all cursor-pointer whitespace-nowrap">
                                <i className="ri-phone-line mr-2"></i>
                                電話で相談
                            </button>
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
