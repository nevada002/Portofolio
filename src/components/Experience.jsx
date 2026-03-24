import React, { useState } from 'react'

const JOBS = [
    {
        title: 'System Analyst Tester (Contract) — PT iForte Solusi Infotek',
        meta: 'Jakarta Pusat, Indonesia — Sep 2024 - Present',
        intro: 'iForte is a telecommunications service provider in Indonesia that operates in the field of data communication networks and connectivity.',
        bullets: [
            'Gather, analyze, and document user and business requirements to support system development.',
            'Manage JIRA activities, including defining and maintaining the product backlog, planning sprints, and executing sprints.',
            'Design system process flowcharts to illustrate business processes and system workflows.',
            'Create and maintain reports in Salesforce and develop them into interactive dashboards.',
            'Perform Unit Test (UT), User Acceptance Test (UAT), Production Validation Test (PVT), and regression testing.',
            'Develop and execute regression testing automation and UT scripts.',
            'Conduct user training sessions to support application adoption and effective system usage.'
        ]
    },
    {
        title: 'System Analyst / Implementer (Contract) — PT Mastersystem Infotama',
        meta: 'Jakarta Pusat, Indonesia — Jun 2023 - Jul 2024',
        intro: 'PT. Mastersystem Infotama Tbk (MSI) is one of the leading ICT Infrastructure Providers serving banking, oil & gas, and telco industries.',
        bullets: [
            'Analyze client and business requirements in collaboration with PM and stakeholders.',
            'Prepare BRD, FSD, TSD, User Guide, and Technical Guidelines.',
            'Translate business and functional requirements into application features and implementation specifications.',
            'Analyze, map, and validate data to ensure accurate application processing.',
            'Generate reports using database queries; develop UT and SIT test scripts and documentation.',
            'Coordinate project handover to QA and support UAT activities; conduct user training.'
        ]
    },
    {
        title: 'System Analyst / Implementor (Contract) — PT Bosnet Distribution Indonesia',
        meta: 'Jakarta Selatan, Indonesia — Oct 2022 - Jun 2023',
        intro: 'BOSNET Distribution Indonesia provides distribution management systems for FMCG distribution companies.',
        bullets: [
            'Analyze client and business requirements and document Minutes of Meeting (MoM).',
            'Develop BRD, FSD, TSD, and User Guides; coordinate handover to development and support teams.',
            'Perform UT, SIT, and UAT; prepare test evidence and lead application implementation at client sites.',
            'Monitor application usage, gather feedback, and recommend improvements; coordinate support handover.'
        ]
    },
    {
        title: 'Website Developer (Contract) — PT Mitra Angkasa Raya',
        meta: 'Bandung, Indonesia — Mar 2022 - Sep 2022',
        intro: 'MAR specializes in air cargo services.',
        bullets: [
            'Analyze business/technical problems and design frontend solutions.',
            'Develop responsive web applications using JavaScript, HTML, React.js, and Sass.',
            'Implement reusable UI components with RSuite and Material UI; manage routing with React Router.',
            'Collaborate with backend teams for API integration and prepare SRS and technical documentation.'
        ]
    },
    {
        title: 'Software Engineer (Intern) — PT Pelabuhan Indonesia (Persero) Cabang Tanjung Priok',
        meta: 'Jakarta Utara, Indonesia — Aug 2021 - Sep 2021',
        intro: 'Pelindo is a state-owned enterprise engaged in port management and logistics.',
        bullets: [
            'Analyze system issues and business requirements for Agent Complaints and Minutes management.',
            'Design system architecture and application workflows; develop the Agent Complaints and Minutes website.',
            'Create and maintain system and technical documentation; ensure system reliability and usability.'
        ]
    }
]

export default function Experience() {
    const [openIndex, setOpenIndex] = useState(null)

    return (
        <section id="experience" className="fade-in">
            <div className="container-max mx-auto px-4 sm:px-6 py-8">
                <h3 className="text-xl font-semibold mb-4">Work Experiences</h3>
                {JOBS.map((job, i) => (
                    <article key={i} className={`bg-white dark:bg-slate-800 rounded-lg p-4 mb-4 shadow ${openIndex === i ? 'job-open' : ''}`}>
                        <h4 className="text-lg font-medium">{job.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{job.meta}</p>
                        <p className="mt-2 text-gray-700 dark:text-gray-200">{job.intro}</p>
                        <div className={`job-details-hidden mt-2`}>
                            <ul className="list-disc pl-5 space-y-1">
                                {job.bullets.map((b, idx) => <li key={idx} className="text-gray-700 dark:text-gray-200">{b}</li>)}
                            </ul>
                        </div>
                        <div className="mt-3">
                            <button className="text-sm text-accent" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                                {openIndex === i ? 'Hide details' : 'Show details'}
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
