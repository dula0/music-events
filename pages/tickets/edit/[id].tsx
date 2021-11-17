import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/components/Layout";
import { FaImage } from "react-icons/fa";
import Image from "next/image";
import ImageUpload from "@/components/ImageUpload";
import Modal from "@/components/Modal";
import { time } from "console";
import { API_URL } from "@/config/index";
import { FormGrid, FormInput, FormLabel, TextArea } from "@/styles/Form.style";

export default function EditTicketsPage({ ticket }) {
  const [values, setValues] = useState({
    name: ticket.name,
    performers: ticket.performers,
    venue: ticket.venue,
    address: ticket.address,
    date: ticket.date,
    time: ticket.time,
    description: ticket.description,
  });

  const [imagePreview, setImagePreview] = useState(
    ticket.image ? ticket.image.formats.thumbnail.url : null
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hasEmptyFields = Object.values(values).some(
      (element) => element === "".trim()
    );
    if (hasEmptyFields) {
      toast.error("Fill in all the required fields");
    }
    const res = await fetch(`${API_URL}/tickets/${ticket.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      toast.error("Something went wrong");
    } else {
      const ticket: any = await res.json;
      router.push(`/tickets/${ticket.slug}`);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const router = useRouter();

  const [showModal, setShowModal] = useState(false);

  const imageUploaded = (e: any) => {
      console.log("uploaded", e)
  }
  return (
    <Layout title="Edit an Event">
      <Link href="/tickets">Go Back</Link>
      <h1>Edit an Event</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <FormGrid>
          <div>
            <FormLabel htmlFor="name">Event Name</FormLabel>
            <FormInput
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <FormLabel htmlFor="performers">Performers</FormLabel>
            <FormInput
              type="text"
              name="performers"
              id="performers"
              value={values.performers}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <FormLabel htmlFor="venue">Venue</FormLabel>
            <FormInput
              type="text"
              id="venue"
              name="venue"
              value={values.venue}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <FormLabel htmlFor="address">Address</FormLabel>
            <FormInput
              type="text"
              id="address"
              name="address"
              value={values.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <FormLabel htmlFor="date">Date</FormLabel>
            <FormInput
              type="date"
              id="date"
              name="date"
              value={values.date}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <FormLabel htmlFor="time">Time</FormLabel>
            <FormInput
              type="text"
              id="time"
              name="time"
              value={values.time}
              onChange={handleInputChange}
            />
          </div>
        </FormGrid>
        <div>
          <FormLabel>Ticket Description</FormLabel>
          <TextArea
            // type="text"
            name="description"
            id="description"
            value={values.description}
            onChange={handleInputChange}
          ></TextArea>
        </div>
        <input type="submit" value="Update Event" className="btn submit" />
      </form>

      <h2>Ticket Image</h2>
      {imagePreview ? (
        <Image src={imagePreview} height={120} width={180} />
      ) : (
        <div>No Image Uploadded</div>
      )}
      <div>
        <button className="btn-secondary" onClick={() => setShowModal(true)}>
          <FaImage /> Set Image
        </button>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <ImageUpload ticketId={ticket.id} imageUploaded={imageUploaded} />
      </Modal>
    </Layout>
  );
}
