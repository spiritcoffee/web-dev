import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        <img src="/images/black_logo.png" alt="ProtecSure Logo" className={styles.logo} />
        <span className={styles.siteTitle}>
          <span className={styles.blue}>Protec</span><span className={styles.cyan}>Sure</span>
        </span>
      </NavLink>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {[
            { to: '/',         label: 'Home',     end: true },
            { to: '/plans',    label: 'Plans' },
            { to: '/download', label: 'Download' },
          ].map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <NavLink to="/plans" className={styles.ctaBtn}>
        Get Protected
      </NavLink>
    </header>
  )
}
