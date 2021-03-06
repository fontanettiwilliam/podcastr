import { ThemeProvider } from "next-themes";
import { Header } from "../components/Header";
import { Player } from "../components/Player";
import { PlayerContextProvider } from "../Contexts/PlayerContext";
import styles from "../styles/app.module.scss";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light">
      <PlayerContextProvider>
        <div className={styles.wrapper}>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
          <Player />
        </div>
      </PlayerContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
