import Head from "next/head";
import { useRouter } from "next/router";
import { useDarkMode } from "@/hooks/useDarkMode";
import { Container } from "@/styles/Layout.style";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";

type Props = {
  title: string;
  keywords: string;
  description: string;
  children: any;
};

export default function Layout(props: Props) {
  const [theme, toggleTheme] = useDarkMode();
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
      </Head>
      <Header />
      {router.pathname === "/" && <Carousel />}
      <Container>{props.children}</Container>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Find an Event near you",
  description: "Find Tickets for events near you",
  keywords: "Buy, Sell, ticketss",
};
