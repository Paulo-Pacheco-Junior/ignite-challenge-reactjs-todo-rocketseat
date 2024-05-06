import LogoIcon from '../assets/icons/logo-icon.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.logo}>
      <img src={LogoIcon} alt='logo' />
      <span className={styles.logoTextTo}>to</span>
      <span className={styles.logoTextDo}>do</span>
    </header>
  )
}
