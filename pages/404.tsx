import Layout from "@/components/Layout";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80vw;
  overflow: hidden;
  height: 80vh;
`;

const NotFound = () => {
  return (
    <Layout>
      <Container>
        <h2>Sorry Page Not Found</h2>
        <Image src="/images/404.png" width={600} height={600} alt="404" />
        <Link href="/">
          <a>Go Back Home?</a>
        </Link>
      </Container>
    </Layout>
  );
};

export default NotFound;
