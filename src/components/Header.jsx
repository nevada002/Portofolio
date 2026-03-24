import React, { useState, useEffect, useCallback, useRef } from 'react'

const NAV_ITEMS = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
]

export default function Header() {
    const [dark, setDark] = useState(() => {
        try {
            return localStorage.getItem('theme') === 'dark'
        } catch {
            return false
        }
    })

    const [active, setActive] = useState('about')
    const [mobileOpen, setMobileOpen] = useState(false)
    const [mobileClosing, setMobileClosing] = useState(false)
    const menuRef = useRef(null)
    const prevActiveRef = useRef(null)

    useEffect(() => {
        const root = document.documentElement
        if (dark) {
            root.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            root.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [dark])

    // scrollspy
    const onScroll = useCallback(() => {
        const offset = 140 // header offset
        let current = 'about'
        for (const item of NAV_ITEMS) {
            const el = document.getElementById(item.id)
            if (!el) continue
            const rect = el.getBoundingClientRect()
            if (rect.top - offset <= 0) {
                current = item.id
            }
        }
        setActive(current)
    }, [])

    useEffect(() => {
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [onScroll])

    function handleNavClick(e, id) {
        e.preventDefault()
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setActive(id)
        setMobileOpen(false)
    }

    // close mobile menu on escape or when resizing up; handle focus trap when open
    useEffect(() => {
        function onResize() { if (window.innerWidth >= 640 && (mobileOpen || mobileClosing)) startClose() }

        function onKey(e) {
            if (e.key === 'Escape') { startClose(); return }
            if ((mobileOpen || mobileClosing) && e.key === 'Tab') {
                // focus trap
                const root = menuRef.current
                if (!root) return
                const focusable = root.querySelectorAll('a,button,input,textarea,[tabindex]:not([tabindex="-1"])')
                if (!focusable.length) return
                const first = focusable[0]
                const last = focusable[focusable.length - 1]
                if (e.shiftKey) {
                    if (document.activeElement === first) { e.preventDefault(); last.focus() }
                } else {
                    if (document.activeElement === last) { e.preventDefault(); first.focus() }
                }
            }
        }

        window.addEventListener('resize', onResize)
        window.addEventListener('keydown', onKey)
        return () => { window.removeEventListener('resize', onResize); window.removeEventListener('keydown', onKey) }
    }, [mobileOpen, mobileClosing])

    function startClose() {
        // if already closing, ignore
        if (mobileClosing) return
        setMobileClosing(true)
        // after animation finish, fully close
        setTimeout(() => {
            setMobileClosing(false)
            setMobileOpen(false)
        }, 220)
    }

    // lock body scroll when mobile menu is open or while closing animation runs
    useEffect(() => {
        const prev = document.body.style.overflow
        if (mobileOpen || mobileClosing) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = prev || ''
        }
        return () => { document.body.style.overflow = prev }
    }, [mobileOpen, mobileClosing])

    // manage focus when opening/closing mobile menu
    useEffect(() => {
        if (mobileOpen) {
            prevActiveRef.current = document.activeElement
            // focus first focusable in menu after it's mounted
            setTimeout(() => {
                const root = menuRef.current
                if (!root) return
                const focusable = root.querySelectorAll('a,button,input,textarea,[tabindex]:not([tabindex="-1"])')
                if (focusable.length) focusable[0].focus()
            }, 50)
        } else if (!mobileOpen && prevActiveRef.current) {
            // restore focus
            try { prevActiveRef.current.focus() } catch { }
            prevActiveRef.current = null
        }
    }, [mobileOpen])

    return (
        <header className="sticky top-0 bg-white/70 dark:bg-slate-900/60 backdrop-blur border-b border-gray-200 dark:border-slate-700">
            <div className="container-max px-4 sm:px-6 py-3 flex items-center justify-between">
                <h1 className="text-lg font-semibold">Juliant Daniel Latuary</h1>

                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-2">
                        <a href="https://www.linkedin.com/in/juliantdaniellatuary/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md text-gray-600 hover:text-accent" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.3 8h4.4v13H.3V8zM8.8 8h4.22v1.72h.06c.59-1.12 2.03-2.3 4.18-2.3C21.95 7.42 24 9.6 24 13.34V21h-4.4v-6.08c0-1.45-.03-3.32-2.03-3.32-2.03 0-2.34 1.58-2.34 3.21V21H8.8V8z" /></svg>
                        </a>
                        <a href="https://www.github.com/nevada002" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md text-gray-600 hover:text-accent" aria-label="GitHub">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.96 3.22 9.16 7.69 10.64.56.1.77-.24.77-.54 0-.27-.01-1-.02-1.96-3.13.68-3.79-1.51-3.79-1.51-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .72 2.63.51 3.27.39.1-.3.39-.51.71-.62-2.5-.28-5.12-1.25-5.12-5.55 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.41.11-2.94 0 0 .95-.31 3.12 1.16.9-.25 1.86-.38 2.82-.38.96 0 1.92.13 2.82.38 2.17-1.47 3.12-1.16 3.12-1.16.61 1.53.23 2.66.11 2.94.72.79 1.16 1.8 1.16 3.03 0 4.31-2.63 5.27-5.13 5.55.4.35.76 1.04.76 2.1 0 1.52-.01 2.76-.01 3.14 0 .3.2.65.78.54 4.47-1.48 7.68-5.68 7.68-10.63C23.25 5.48 18.27.5 12 .5z" /></svg>
                        </a>
                    </div>

                    <nav className="hidden sm:flex items-center gap-3">
                        {NAV_ITEMS.map(item => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(e) => handleNavClick(e, item.id)}
                                className={`text-sm ${active === item.id ? 'text-accent font-medium' : 'text-gray-600 hover:text-accent'}`}
                            >
                                {item.label}
                            </a>
                        ))}

                        <button
                            className="ml-2 inline-flex items-center px-3 py-1 border rounded-md text-sm text-gray-600 hover:text-accent"
                            aria-label="Toggle theme"
                            onClick={() => setDark(d => !d)}
                        >
                            {dark ? 'Light' : 'Dark'}
                        </button>
                    </nav>

                    {/* mobile controls */}
                    <div className="sm:hidden flex items-center">
                        <button aria-label="Open menu" onClick={() => { if (mobileOpen) startClose(); else setMobileOpen(true) }} className="p-2 rounded-md text-gray-700 dark:text-gray-200 border border-transparent hover:bg-gray-100 dark:hover:bg-slate-800">
                            {/* icon */}
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                {mobileOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* mobile nav overlay (backdrop + sliding panel) */}
            {(mobileOpen || mobileClosing) && (
                <div className="sm:hidden" aria-hidden={!(mobileOpen) ? 'true' : 'false'}>
                    <div className="mobile-backdrop" onClick={() => startClose()} />
                    <div ref={menuRef} role="dialog" aria-modal="true" aria-labelledby="site-title" className={`mobile-panel bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-700 ${mobileClosing ? 'animate-slideUp' : 'animate-slideDown'}`}>
                        <div className="px-4 pt-4 pb-6">
                            <nav className="flex flex-col gap-3">
                                {NAV_ITEMS.map(item => (
                                    <a key={item.id} href={`#${item.id}`} onClick={(e) => handleNavClick(e, item.id)} className={`block text-base ${active === item.id ? 'text-accent font-medium' : 'text-gray-700 dark:text-gray-200'}`}>
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                            <div className="mt-4 flex items-center gap-3">
                                <a href="tel:+628978583625" className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-200 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" /></svg>
                                    <span className="text-sm">+62 897-8583-625</span>
                                </a>
                                <a href="mailto:itdanielworker@gmail.com" className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-200 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5L4 8V6l8 5 8-5v2z" /></svg>
                                    <span className="text-sm">itdanielworker@gmail.com</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
