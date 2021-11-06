import EventListing from "@/components/EventListing";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function Home({ events }: any) {
  return (
    <Layout>
      <h1>Upcoming events near you </h1>
      {events.length === 0 && <h3>No events to show currently</h3>}

      {events.map((ev: any) => (
        <EventListing key={ev.id} evt={ev} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/concert`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
