import styles from "./styles.module.scss";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      BlogIn &#64;{year}
    </footer>
  );
};