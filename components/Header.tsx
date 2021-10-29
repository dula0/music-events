import React from "react";

import { Container, Logo, BrandLink, UL } from "@/styles/Header.style";
import Link from "next/link";
import { GiTicket } from "react-icons/gi";

const Header = () => {
  return (
    <Container>
      <Logo>
        <Link href="/">
          <BrandLink>
            Ticketeer &nbsp; <GiTicket />
          </BrandLink>
        </Link>
      </Logo>
      <nav>
        <UL>
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
        </UL>
      </nav>
    </Container>
  );
};

export default Header;
