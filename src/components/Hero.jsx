import React from 'react'

export default function Hero() {
    return (
        <section className="fade-in">
            <div className="container-max mx-auto px-4 sm:px-6 py-10">
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow">
                    <h2 className="text-2xl font-bold mb-1">Halo, saya Juliant Daniel Latuary.</h2>
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-4">System Analyst &amp; Tester</p>
                    <p className="text-gray-700 dark:text-gray-200">Saya berfokus sebagai System Analyst dan Tester dengan pengalaman membangun solusi end-to-end: requirement analysis, system design, testing (manual &amp; automation), implementasi, dan dukungan pasca-implementasi. Saya menggabungkan pemikiran analitis dan ketelitian testing untuk menghadirkan solusi yang andal bagi bisnis.</p>
                    <div className="mt-4">
                        <a className="inline-block px-4 py-2 rounded-md border border-accent text-accent" href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
