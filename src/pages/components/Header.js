import styles from '../../styles/components/Header.module.css';

export default function Header() {
  return (
    <>
      <header className={styles.Header}>
        <a>INÍCIO</a>
        <a>PORTFÓLIO</a>
        <a>PRESET</a>
      </header>
    </>
  )
}