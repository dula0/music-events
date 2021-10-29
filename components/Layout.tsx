import Head from "next/head";
import { useRouter } from "next/router";
import { Container } from "@/styles/Layout.style";
import { GlobalStyle, lightTheme, darkTheme } from "@/styles/Global.style";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";
import { useDarkMode } from "@/hooks/useDarkMode";
import { ThemeProvider } from "styled-components";
import Toggle from "./Toggle";

type Props = {
  title: string;
  keywords: string;
  description: string;
  children: any;
};

export default function Layout(props: Props) {
  const router = useRouter();
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <div>
        <Head>
          <title>{props.title}</title>
          <meta name="description" content={props.description} />
          <meta name="keywords" content={props.keywords} />
        </Head>
        <GlobalStyle />
        <Header />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        {router.pathname === "/" && <Carousel />}
        <Container>{props.children}</Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

Layout.defaultProps = {
  title: "Find an Event near you",
  description: "Find Tickets for events near you",
  keywords: "Buy, Sell, ticketss",
};
