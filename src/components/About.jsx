import React from 'react'

export default function About() {
    return (
        <section id="about" className="fade-in">
            <div className="container-max mx-auto px-4 sm:px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-semibold mb-2">Tentang Saya</h3>
                        <p className="text-gray-700 dark:text-gray-200">Information Systems professional with hands-on experience as a System Analyst, Tester, Implementer, Website Developer, and System Engineer. Experienced in end-to-end system development, including requirement analysis, system design, application development, testing, implementation, and post-implementation support. Strong background in gathering and analyzing business requirements, preparing system documentation, and coordinating with cross-functional teams. Proficient in tools such as Salesforce, JIRA, database queries, JavaScript, React.js, and modern frontend libraries.</p>

                        <p className="mt-4 text-sm text-gray-600">Lokasi: Jakarta, Indonesia</p>
                        <p className="text-sm">Kontak: <a className="text-accent" href="tel:+628978583625">+62 897-8583-625</a> · <a className="text-accent" href="mailto:itdanielworker@gmail.com">itdanielworker@gmail.com</a></p>
                    </div>

                    <aside className="md:col-span-1 bg-white dark:bg-slate-800 rounded-lg p-4 shadow">
                        <h4 className="font-semibold mb-2">Hard Skills</h4>
                        <div className="flex flex-wrap gap-2">
                            {['Website Developer', 'HTML', 'CSS', 'PHP', 'Laravel', 'Bootstrap', 'Javascript', 'React.JS', 'Python Flask', 'Python Django', 'MySQL', 'PostgresSQL', 'GitHub', 'Tortoise SVN', 'Design Web', 'Figma', 'Draw.IO', 'Microsoft Office', 'Business Analyst', 'System Analyst', 'UML', 'Salesforce', 'Snowflake'].map((s, i) => (
                                <span key={i} className="text-sm px-2 py-1 bg-gray-100 dark:bg-slate-700 rounded-full">{s}</span>
                            ))}
                        </div>

                        <h4 className="font-semibold mt-4 mb-2">Soft Skills</h4>
                        <div className="flex flex-wrap gap-2">
                            {['Responsible', 'Focused on Achieving', 'Communication', 'Fast Learning'].map((s, i) => (
                                <span key={i} className="text-sm px-2 py-1 bg-gray-100 dark:bg-slate-700 rounded-full">{s}</span>
                            ))}
                        </div>

                        <div className="mt-4 text-sm">
                            <a className="inline-block px-3 py-1 border border-accent text-accent rounded-md" href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}
