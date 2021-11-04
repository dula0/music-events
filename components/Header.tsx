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
            Ticketeer &nbsp; <GiTicket color={"lightgreen"} size={23}/>
          </BrandLink>
        </Link>
      </Logo>
      <nav>
        <UL>
          <li>
            <Link href="/events">
              <button className="btn-primary"><a>Events</a></button>
            </Link>
          </li>
        </UL>
      </nav>
    </Container>
  );
};

export default Header;
