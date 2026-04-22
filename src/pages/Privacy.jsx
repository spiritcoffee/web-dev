import { useNavigate, Link } from 'react-router-dom'
import styles from './Privacy.module.css'

const SECTIONS = [
  {
    num: '1',
    title: 'Introduction',
    icon: 'fas fa-info-circle',
    content: 'ProtecSure Ltd. operates ProtecSure.com. We are committed to protecting your personal data and being transparent about how we use it. This Privacy Policy explains what information we collect, how we use it, and the rights you have.',
  },
  {
    num: '2',
    title: 'Information We Collect',
    icon: 'fas fa-database',
    content: 'We may collect the following information when you visit or use our services:',
    list: [
      'Information you voluntarily provide — name, email, messages — when submitting forms or contacting us.',
      'Automatically collected data — IP address, browser type, device type, pages visited, timestamps, and cookies.',
    ],
  },
  {
    num: '3',
    title: 'How We Use Your Information',
    icon: 'fas fa-cogs',
    content: 'We use collected data to:',
    list: [
      'Provide and maintain the ProtecSure platform and services.',
      'Respond to your requests, questions, and support tickets.',
      'Analyse and improve site performance and user experience.',
      'Send product updates or newsletters — only when you have opted in.',
    ],
  },
  {
    num: '4',
    title: 'Data Security',
    icon: 'fas fa-shield-halved',
    content: 'We implement industry-standard security measures including TLS encryption, access controls, and regular security audits. Your data is never sold to third parties.',
  },
  {
    num: '11',
    title: 'Contact Us',
    icon: 'fas fa-envelope',
    content: 'Questions or concerns about this policy? Reach us through the contact links on our home page.',
    link: { href: '/', label: 'Go to ProtecSure Home' },
  },
]

export default function Privacy() {
  const navigate = useNavigate()

  return (
    <main className={styles.main}>
      <div className={styles.blobLeft} />

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}><i className="fas fa-file-shield" /> Legal</span>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>
            Last updated: <span className={styles.highlight}>7th November 2025</span>
          </p>
        </div>

        <div className={styles.sections}>
          {SECTIONS.map((s, i) => (
            <div key={i} className={styles.section}>
              <div className={styles.sectionNum}>
                <i className={s.icon} />
              </div>
              <div className={styles.sectionContent}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.numBadge}>{s.num}</span>
                  {s.title}
                </h2>
                {s.content && <p className={styles.sectionText}>{s.content}</p>}
                {s.list && (
                  <ul className={styles.list}>
                    {s.list.map((item, j) => (
                      <li key={j} className={styles.listItem}>
                        <i className="fas fa-chevron-right" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {s.link && (
                  <Link to={s.link.href} className={styles.inlineLink}>
                    {s.link.label} <i className="fas fa-arrow-right" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          <i className="fas fa-arrow-left" /> Back
        </button>
      </div>
    </main>
  )
}
