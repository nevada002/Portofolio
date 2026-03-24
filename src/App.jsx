import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100">
            <Header />
            <main>
                <Hero />
                <About />
                <Experience />
                <Contact />
            </main>
            <footer className="border-t border-gray-200 dark:border-slate-700 mt-8">
                <div className="container-max mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="text-sm">© {new Date().getFullYear()} Juliant Daniel Latuary — Built with React + Vite</div>
                    <div className="flex items-center gap-3">
                        <a href="mailto:itdanielworker@gmail.com" title="Email" aria-label="Email" className="p-2 rounded-md text-gray-600 hover:text-accent">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5L4 8V6l8 5 8-5v2z" /></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/juliantdaniellatuary/" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn" className="p-2 rounded-md text-gray-600 hover:text-accent">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.3 8h4.4v13H.3V8zM8.8 8h4.22v1.72h.06c.59-1.12 2.03-2.3 4.18-2.3C21.95 7.42 24 9.6 24 13.34V21h-4.4v-6.08c0-1.45-.03-3.32-2.03-3.32-2.03 0-2.34 1.58-2.34 3.21V21H8.8V8z" /></svg>
                        </a>
                        <a href="https://www.github.com/nevada002" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub" className="p-2 rounded-md text-gray-600 hover:text-accent">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.96 3.22 9.16 7.69 10.64.56.1.77-.24.77-.54 0-.27-.01-1-.02-1.96-3.13.68-3.79-1.51-3.79-1.51-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .72 2.63.51 3.27.39.1-.3.39-.51.71-.62-2.5-.28-5.12-1.25-5.12-5.55 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.41.11-2.94 0 0 .95-.31 3.12 1.16.9-.25 1.86-.38 2.82-.38.96 0 1.92.13 2.82.38 2.17-1.47 3.12-1.16 3.12-1.16.61 1.53.23 2.66.11 2.94.72.79 1.16 1.8 1.16 3.03 0 4.31-2.63 5.27-5.13 5.55.4.35.76 1.04.76 2.1 0 1.52-.01 2.76-.01 3.14 0 .3.2.65.78.54 4.47-1.48 7.68-5.68 7.68-10.63C23.25 5.48 18.27.5 12 .5z" /></svg>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
