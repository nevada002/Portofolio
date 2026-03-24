import React, { useState } from 'react'

export default function Contact() {
    return (
        <section id="contact" className="fade-in">
            <div className="container-max mx-auto px-4 sm:px-6 py-8">
                <h3 className="text-xl font-semibold mb-2">Hubungi Saya</h3>
                <p className="text-gray-700 dark:text-gray-200">Ingin bekerja sama atau menanyakan sesuatu? Hubungi saya melalui telepon, email, LinkedIn, atau GitHub — atau isi form di bawah. Anda juga dapat mengunduh CV saya dari tombol di bawah.</p>

                <div className="mt-3 text-sm">
                    <div><strong>Phone:</strong> <a className="text-accent" href="tel:+628978583625">+62 897-8583-625</a></div>
                    <div className="mt-1"><strong>Email:</strong> <span className="text-accent">itdanielworker@gmail.com</span> <CopyEmail /></div>
                    <div className="mt-1"><strong>LinkedIn:</strong> <a className="text-accent" href="https://www.linkedin.com/in/juliantdaniellatuary/" target="_blank" rel="noopener noreferrer">juliantdaniellatuary</a></div>
                    <div className="mt-1"><strong>GitHub:</strong> <a className="text-accent" href="https://www.github.com/nevada002" target="_blank" rel="noopener noreferrer">nevada002</a></div>
                </div>

                <form className="mt-6 grid grid-cols-1 gap-3 max-w-xl" onSubmit={(e) => { e.preventDefault(); alert('Terima kasih! Pesan terkirim (simulasi).') }}>
                    <label className="block">
                        <div className="text-sm font-medium mb-1">Nama</div>
                        <input name="name" required className="w-full" />
                    </label>
                    <label className="block">
                        <div className="text-sm font-medium mb-1">Email</div>
                        <input name="email" type="email" required className="w-full" />
                    </label>
                    <label className="block">
                        <div className="text-sm font-medium mb-1">Pesan</div>
                        <textarea name="message" rows="4" required className="w-full" />
                    </label>
                    <div>
                        <button className="px-4 py-2 bg-accent text-white rounded-md" type="submit">Kirim</button>
                        <a className="ml-3 inline-block px-4 py-2 border border-accent text-accent rounded-md" href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Download CV (PDF)</a>
                    </div>
                </form>
            </div>
        </section>
    )
}

function CopyEmail() {
    const [copied, setCopied] = useState(false)
    const email = 'itdanielworker@gmail.com'
    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(email)
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
        } catch (err) {
            // fallback: open mailto if copy fails
            window.location.href = `mailto:${email}`
        }
    }
    return (
        <button onClick={handleCopy} className="ml-2 inline-flex items-center px-2 py-1 text-sm border rounded-md text-gray-600 hover:text-accent" title="Copy email">
            {copied ? 'Copied!' : 'Copy'}
        </button>
    )
}
