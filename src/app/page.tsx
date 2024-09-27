import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>Hello World</main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/alexangc/web-tunnel"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/alexangc/web-tunnel →
        </a>
      </footer>
    </div>
  );
}
