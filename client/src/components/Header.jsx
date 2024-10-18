import styles from "../styles/Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img className={styles.logo} src="coverspot 3.png" alt="CoverSpot Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Página inicial</a>
          </li>
          <li>
            <a href="#">Sobre nós</a>
          </li>
          <li>
            <a href="#">Comunidade</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
