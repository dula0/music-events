import Link from "next/link";
import Image from "next/image";
import { GetStaticProps, GetStaticPaths } from "next";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import {} from "@/styles/Tickets.styles";
import { API_URL } from "@/config/index";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export default function TicketsPage({ticket}) {

    return (
      <Layout>
        
      </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${API_URL}/tickets`);
  const tickets = await res.json();

  const paths = tickets.map((ticket: any) => {
    params: {
      slug: ticket.slug;
    }
  });

  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async ({
  params: { slug },
}: any) => {
  const res = await fetch(`${API_URL}/tickets?slug=${slug}`);
  const tickets = await res.json();
  return {
    props: {
      ticket: tickets[0],
    },
    revalidate: 1,
  };
};
