import styles from "./styles.module.scss";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import { useTheme } from "next-themes";

export function Header() {
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });
  const { theme, setTheme } = useTheme();
  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr" />

      <p>O melhor para você ouvir sempre</p>
      <span>{currentDate}</span>

      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? (
          <img src="/sun.svg" alt="Light Mode" />
        ) : (
          <img src="/full-moon.svg" alt="Dark mode" />
        )}
      </button>
    </header>
  );
}
