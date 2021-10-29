import Image from "next/image";

import {
  EventContainer,
  ImageWrapper,
  Info,
  Schedule,
  Name,
} from "@/styles/EventListing.style";



function EventListing({evt}: any) {
  return (
    <EventContainer>
      <ImageWrapper>
        <Image
          src={evt.images ? evt.images : "/images/default.webp"}
          width={170}
          height={100}
        />
        <Info>
          <Schedule>
            {evt.date} at {evt.time}
          </Schedule>
          <Name>{evt.name}</Name>
        </Info>
      </ImageWrapper>
    </EventContainer>
  );
}

export default EventListing;
